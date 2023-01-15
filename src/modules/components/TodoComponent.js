import Component from "../Component";
import Neros from "../Neros";
import TaskComponent from "./TaskComponent";

class TodoComponent extends Component {
  constructor(name, state) {
    super(name, state);
    this.createTaskComponents();
  }

  template = (state) =>
    `
    <div class="taskContainer">
      <div class="subtasksContainer">
      </div>
    </div>
  `;

  // This method takes the state tasks and subtasks and converts them into TaskComponents,
  // then assign those components to be the new values for state tasks and subtasks.
  createTaskComponents() {
    // I don't know if this should go here, but all this does is convert the todo object
    // in the state object and turn it into a taskComponent, ready to be used.
    this.state.task = new TaskComponent("task", {
      todo: this.state.task,
      classes: ["task"],
    }).DOMelement();
    // This takes the children array and applies the same process above to each task
    this.state.subtasks = this.state.subtasks.map((task) =>
      new TaskComponent("subtask", {
        todo: task,
        classes: ["task", "subtask"],
      }).DOMelement()
    );
  }

  DOMelement() {
    let element = super.DOMelement();
    let subtask = element.querySelector(".subtasksContainer");

    element.prepend(this.state.task);
    this.state.subtasks.forEach((task) => {
      subtask.append(task);
    });
    return element;
  }
}

export default TodoComponent;
