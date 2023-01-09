import DOMTodo from "./todo";
import DOMHandler from "../DOMHandler";

const DOMProject = (() => {
  let projects = document.querySelector("#projects");

  const populateProject = (project) => {
    let title = DOMHandler.createElement("p", "projectTitle", project.name);
    projects.append(title);
  };

  const displayProject = (project) => {
    DOMTodo.populatePending(project);
  };

  return { displayProject, populateProject };
})();

export default DOMProject;
