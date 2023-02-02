import Component from "../Component";
import Project from "../project";
import modal from "../modal";
import Neros from "../Neros";
import ProjectComponent from "./ProjectComponent";

export class NewProjectComponent extends Component {
  constructor(name) {
    super();
    this.name = name;
  }

  template = () =>
    `
    <div class='newProjectContainer'>
      <div class='headerContainer'>
        <h1>New Project</h1>
      </div>
      <form class='newForm'>
        <div class='field TitleField'>
        <label for='Title'>Project Title</label>
        <input type='text' name='Title' id='Title' required>
        </div>
        <button class='createButton' type='submit'>Create</button>
      </form>
    </div>
  `;

  DOMelement() {
    let element = super.DOMelement();
    let form = element.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.createProject(form);
    });
    return element;
  }

  createProject(form) {
    let title = form.Title.value;
    let project = new Project(title);
    Neros.projects.registerComponent(project.component);
    // Select newly created project
    ProjectComponent.selectLastProject();
    modal.hide();
  }
}
