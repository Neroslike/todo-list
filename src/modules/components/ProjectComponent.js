import Component from "../Component";
import Neros from "../Neros";
import TodoComponent from "./TodoComponent";

class ProjectComponent extends Component {
  template = (state) =>
    `
    <div class="projectContainer">
      <h3>${state.project.name}</h3>
    </div>
    `;

  // This method displays all todos belonging to this project
  displayTodos() {
    // console.log(this);
    const pending = new Neros("pendingTodos");

    let todos = this.state.project.pending.map(
      (task, index) =>
        new TodoComponent(`todo${index}`, {
          task: task,
          subtasks: task.children,
        })
    );
    todos.forEach((todo) => {
      pending.registerComponent(todo);
    });
  }

  DOMelement() {
    return super.DOMelement("click", (e) => {
      this.handleID(e.currentTarget);
      this.displayTodos();
    });
  }

  handleID(target) {
    let selected = document.querySelector("#selectedProject");
    if (selected) selected.id = "";
    target.id = "selectedProject";
  }
}

export default ProjectComponent;
