import Priority from "./priority";
import Project from "./project";
import { PriorityComponent } from "./components/PriorityComponent";

export const Storage = (() => {
  const saveData = () => {
    window.localStorage.clear();
    _saveProjectData();
    savePriorityData();
  };

  const _saveProjectData = () => {
    let projects = {};
    Project.projects.forEach((project, index) => {
      let projectJSON = project.toJSON();
      projects[`project${index}`] = projectJSON;
    });
    window.localStorage.setItem("projects", JSON.stringify(projects));
  };
  const savePriorityData = () => {
    let priorities = {};
    Priority.priorities.forEach((priority, index) => {
      let priorityColor = priority.color;
      priorities[index] = priorityColor;
    });
    window.localStorage.setItem("priorities", JSON.stringify(priorities));
  };

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

  const _selectLastProject = () => {
    let lastProject = document.querySelector(".projectContainer");
    if (lastProject) {
      lastProject.click();
      Project.selected.component.update();
    }
  };

  return { saveData, loadData, savePriorityData };
})();
