import Component from "../Component";
import MiniContainerComponent from "./MiniContainerComponent";
import Priority from "../priority";
import deleteTask from "../../assets/delete.svg";
import edit from "../../assets/edit.svg";
import checked from "../../assets/checked.svg";
import unchecked from "../../assets/unchecked.svg";

class TaskComponent extends Component {
  constructor(name, state) {
    super(name, state);
    // Create the priority color html and color, I should put this into its own class
    this.colorHTML = (priority) =>
      `<div class="priorityColor" style="background-color: ${priority.color}"></div>`;
    this.colorMini = new MiniContainerComponent("priority", {
      html: this.colorHTML(Priority.priority(state.todo.priority)),
    });
  }

  // Create all the static buttons needed for a task, these aren't dynamic since all tasks have the same buttons
  static imgHTML = (actionSVG) => `<img class="taskButton" src=${actionSVG}>`;
  static checkMini = new MiniContainerComponent("check", {
    html: TaskComponent.imgHTML(unchecked),
  });
  static editMini = new MiniContainerComponent("edit", {
    html: TaskComponent.imgHTML(edit),
  });
  static deleteMini = new MiniContainerComponent("delete", {
    html: TaskComponent.imgHTML(deleteTask),
  });

  template = (state) =>
    `
    <div class="${state.classes.join(" ")}">
      <div class="taskDataContainer">
        <div class="taskTitle">
          <p>${state.todo.title}</p>
        </div>
        <div class="taskTime">
          <p>5 days left</p>
        </div>
      </div>
    </div>
  `;

  miniEventListeners(element) {
    let check = element.querySelector(".check");
  }

  DOMelement() {
    let element = super.DOMelement();
    let check = TaskComponent.checkMini.DOMelement(
      "click",
      this.eventHandler().checkButton
    );
    let priority = this.colorMini.DOMelement(
      "click",
      this.eventHandler().priorityButton
    );
    let edit = TaskComponent.editMini.DOMelement(
      "click",
      this.eventHandler().editButton
    );
    let deleteBtn = TaskComponent.deleteMini.DOMelement(
      "click",
      this.eventHandler().deleteButton
    );

    element.prepend(priority);
    element.prepend(check);
    element.append(edit);
    element.append(deleteBtn);
    return element;
    // this.miniEventListeners(element);
  }

  eventHandler = () => {
    return {
      checkButton: (e) => {
        let img = e.currentTarget.firstElementChild;
        if (this.state.todo.isChecked) {
          this.state.todo.isChecked = false;
          e.currentTarget.parentElement.classList.remove("completedTask");
          img.src = unchecked;
        } else {
          this.state.todo.isChecked = true;
          e.currentTarget.parentElement.classList.add("completedTask");
          img.src = checked;
        }
        console.log(this.state);
      },
      priorityButton: () => {
        console.log("The priority button was pressed", this.state);
      },
      editButton: () => {
        console.log("The edit button was pressed", this.state);
      },
      deleteButton: () => {
        console.log("The delete button was pressed", this.state);
      },
    };
  };
}

export default TaskComponent;
