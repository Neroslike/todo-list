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
    this.colorElement = this.colorMini.DOMelement();
    this.colorElement.addEventListener("click", () => console.log("sex"));
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
      ${TaskComponent.checkMini.view()}
      ${this.colorElement.outerHTML}
      <div class="taskDataContainer">
        <div class="taskTitle">
          <p>${state.todo.title}</p>
        </div>
        <div class="taskTime">
          <p>5 days left</p>
        </div>
      </div>
      ${TaskComponent.editMini.view()}
      ${TaskComponent.deleteMini.view()}
    </div>
  `;
}

export default TaskComponent;
