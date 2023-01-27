import Project from "./project";

export const Storage = (() => {
  const saveData = () => {
    window.localStorage.clear();
    Project.projects.forEach((project, index) => {
      let projectJSON = project.toJSON();
      window.localStorage.setItem(`project${index}`, projectJSON);
    });
    console.log(Project.fromJSON(window.localStorage.getItem("project0")));
  };

  const loadData = () => {
    if (!window.localStorage.getItem("project0" === null)) {
      for (const key in window.localStorage) {
        if (Object.hasOwnProperty.call(window.localStorage, key)) {
          let projectObj = Project.fromJSON(window.localStorage[key]);
          Project.loadProject(projectObj);
        }
      }
      _selectLastProject();
    }
  };

  const _selectLastProject = () => {
    let lastProject = document.querySelector(".projectContainer");
    if (lastProject) {
      lastProject.click();
      Project.selected.component.update();
    }
  };

  return { saveData, loadData };
})();
