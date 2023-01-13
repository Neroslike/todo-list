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

  displayTodos() {
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

  view() {
    this.displayTodos();
    return super.view();
  }
}

export default ProjectComponent;
