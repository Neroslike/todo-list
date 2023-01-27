import Component from "../Component";
import Neros from "../Neros";
import Priority from "../priority";
import Project from "../project";
import { Storage } from "../storageManagement";

export class PriorityComponent extends Component {
  template = (state) =>
    `
    <div class="priority">
      <div class="priorityColorContainer">
        <input type="color" class='priorityColor picker' value='${state.priority.color}'/>
      </div>
      <p class="priorityName">${state.priority.name}</p>
    </div>
    `;

  DOMelement() {
    let element = super.DOMelement();
    let picker = element.querySelector(".picker");
    element.addEventListener("click", (e) => {
      picker.click();
    });

    //Change priority color when the color picker changes
    picker.addEventListener("change", (e) => {
      this.state.priority.color = e.target.value;
      Storage.savePriorityData();
      Project.selected.component.update();
    });
    return element;
  }

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
