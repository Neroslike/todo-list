import Component from "../Component";
import MiniContainerComponent from "./MiniContainerComponent";
import Priority from "../priority";
import deleteTask from "../../assets/delete.svg";
import edit from "../../assets/edit.svg";
import checked from "../../assets/checked.svg";
import unchecked from "../../assets/unchecked.svg";

class TaskComponent extends Component {
  static eventHandler = {
    checkButton: () => {
      console.log("The check button was pressed", this);
    },
    priorityButton: () => {
      console.log("The priority button was pressed", this);
    },
    editButton: () => {
      console.log("The edit button was pressed", this);
    },
    deleteButton: () => {
      console.log("The delete button was pressed", this);
    },
  };

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
      TaskComponent.eventHandler.checkButton.bind
    );
    let priority = this.colorMini.DOMelement(
      "click",
      TaskComponent.eventHandler.priorityButton.bind
    );
    let edit = TaskComponent.editMini.DOMelement(
      "click",
      TaskComponent.eventHandler.editButton.bind
    );
    let deleteBtn = TaskComponent.deleteMini.DOMelement(
      "click",
      TaskComponent.eventHandler.deleteButton.bind
    );

    element.prepend(priority);
    element.prepend(check);
    element.append(edit);
    element.append(deleteBtn);
    return element;
    // this.miniEventListeners(element);
  }
}

export default TaskComponent;
