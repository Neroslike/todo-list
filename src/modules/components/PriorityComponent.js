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
        ${
          state.picker
            ? `<input type="color" class='priorityColor picker' value='${state.priority.color}'/>`
            : `<div class='taskColor' style='background-color: ${state.priority.color}'></div>`
        }
      </div>
      <p class="priorityName">${state.priority.name}</p>
    </div>
    `;

  DOMelement() {
    let element = super.DOMelement();
    let picker = element.querySelector(".picker");
    if (picker) {
      element.addEventListener("click", (e) => {
        picker.click();
      });

      //Change priority color when the color picker changes
      picker.addEventListener("change", (e) => {
        this.state.priority.color = e.target.value;
        Storage.savePriorityData();
        PriorityComponent.displayPriorities();
        if (Project.selected) {
          Project.selected.component.update();
        }
      });
    }

    return element;
  }

  //This method updates and displays the priorities in the sidebar
  static displayPriorities() {
    let priorityNeros = new Neros("priorities");
    Priority.priorities.forEach((priority) => {
      let component = new PriorityComponent(priority.name, {
        priority: priority,
        picker: true,
      });
      priorityNeros.registerComponent(component);
    });
  }
}
