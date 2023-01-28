import Priority from "./priority";
import Project from "./project";
import { PriorityComponent } from "./components/PriorityComponent";

export const Storage = (() => {
  const saveData = () => {
    window.localStorage.clear();
    _saveProjectData();
    savePriorityData();
  };

  /**  This method saves projects to the local storage as follows:
   * 1. First it creates a projects object where all projects will be stored
   * 2. For every existent project it will convert that project to a json string, with its todos and subtodos
   * 3. The project json string will be stored in a key with the index as identifier
   * 4. Save the projects object as a json string in the localstorage
   * */
  const _saveProjectData = () => {
    let projects = {};
    Project.projects.forEach((project, index) => {
      let projectJSON = project.toJSON();
      projects[`project${index}`] = projectJSON;
    });
    window.localStorage.setItem("projects", JSON.stringify(projects));
  };

  // Same procedure as _saveProjectData() but only saving the priorities colours
  const savePriorityData = () => {
    let priorities = {};
    Priority.priorities.forEach((priority, index) => {
      let priorityColor = priority.color;
      priorities[index] = priorityColor;
    });
    window.localStorage.setItem("priorities", JSON.stringify(priorities));
  };

  /** This method loads projects to the local storage as follows:
   * 1. First check if there are any projects saved
   * 2. If it has projects it will retrieve the project and its todos and subtodos as an object
   * 3. Traverse every project in the object and create a project/todo/subtodo for every one of them
   * */

  const _loadProjectData = () => {
    if (!window.localStorage.getItem("projects" === null)) {
      let projects = JSON.parse(window.localStorage.getItem("projects"));
      for (const key in projects) {
        if (Object.hasOwnProperty.call(projects, key)) {
          let projectObj = Project.fromJSON(projects[key]);
          Project.loadProject(projectObj);
        }
      }
      _selectLastProject();
    }
  };

  const _loadPriorityData = () => {
    if (!window.localStorage.getItem("priorities" === null)) {
      let colors = JSON.parse(window.localStorage.getItem("priorities"));
      for (const key in colors) {
        if (Object.hasOwnProperty.call(colors, key)) {
          Priority.priorities[key].color = colors[key];
        }
      }
    }
    PriorityComponent.displayPriorities();
  };

  const loadData = () => {
    _loadPriorityData();
    _loadProjectData();
  };

  // Select the last project created so it automatically populates the dashboard with the latest project
  const _selectLastProject = () => {
    let lastProject = document.querySelector(".projectContainer");
    if (lastProject) {
      lastProject.click();
      Project.selected.component.update();
    }
  };

  return { saveData, loadData, savePriorityData };
})();
