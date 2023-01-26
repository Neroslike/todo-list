import Component from "../Component";
import Neros from "../Neros";
import Priority from "../priority";

export class PriorityComponent extends Component {
  template = (state) =>
    `
    <div class="priority">
      <div class="priorityColorContainer">
        <div class="priorityColor" style="background: ${state.priority.color}"></div>
      </div>
      <p class="priorityName">${state.priority.name}</p>
    </div>
    `;

  static displayPriorities() {
    let priorityNeros = new Neros("priorities");
    Priority.priorities.forEach((priority) => {
      let component = new PriorityComponent(priority.name, {
        priority: priority,
      });
      priorityNeros.registerComponent(component);
    });
  }
}
