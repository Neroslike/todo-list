import Component from "../Component";
import Neros from "../Neros";
import TodoComponent from "./TodoComponent";

class ProjectComponent extends Component {
  static resetView() {
    let pending = document.querySelector("#pendingTodos");
    let completed = document.querySelector("#completedTodos");

    pending.innerHTML = "";
    completed.innerHTML = "";
  }

  template = (state) =>
    `
    <div class="projectContainer">
      <h3>${state.project.name}</h3>
    </div>
    `;

  // This method displays all todos belonging to this project
  displayTodos(selector, projectTodos) {
    const element = new Neros(`${selector}Todos`);

    let todos = projectTodos.map(
      (task, index) =>
        new TodoComponent(`todo${index}`, {
          task: task,
          subtasks: task.children,
        })
    );
    todos.forEach((todo) => {
      element.registerComponent(todo);
    });
  }

  DOMelement() {
    return super.DOMelement("click", (e) => {
      this.handleID(e.currentTarget);
      // Reset the board before displaying this project todos
      // ProjectComponent.resetView();
      this.displayTodos("pending", this.state.project.pending);
      this.displayTodos("completed", this.state.project.completed);
    });
  }

  handleID(target) {
    let selected = document.querySelector("#selectedProject");
    if (selected) selected.id = "";
    target.id = "selectedProject";
  }
}

export default ProjectComponent;
