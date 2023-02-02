import { format } from "date-fns";
import Component from "../Component";
import TaskComponent from "./TaskComponent";
import helper from "../helper";
import { PriorityComponent } from "./PriorityComponent";
import {
  formatDistanceToNow,
  formatDistanceToNowStrict,
  isToday,
} from "date-fns/esm";
import Priority from "../priority";

export class viewTodoComponent extends Component {
  template = (state) =>
    `
    <div class='infoContainer'>
      <div class='viewNavbar'></div>
      <div class='mainTaskContainer'>
        <div class='headerContainer'>
          <h1 class='viewTitle'>${state.todo.title}</h1>
        </div>
        <hr>
        <div class='descriptionViewContainer'>
          <p class='viewDescription'>${state.todo.description.replace(
            /\n/g,
            "<br>"
          )}</p>
        </div>
        <div class='todoDataContainer'>
          <div class='dateViewContainer'>
            <h3>Due date</h3>
            <div class='dateStringContainer'>
              <p class='dateView'>${format(
                new Date(helper.parseStringDate(state.todo.date)),
                "P"
              )}</p>
              <p class='timeLeftView'>(${
                isToday(new Date(helper.parseStringDate(state.todo.date)))
                  ? "Today"
                  : formatDistanceToNowStrict(
                      new Date(helper.parseStringDate(state.todo.date)),
                      { addSuffix: true }
                    )
              })</p>
            </div>
          </div>
          <div class='priorityViewContainer'>
            <h3>Priority</h3>
          </div>
        </div>
      </div>
      <div class='separator'></div>
      <div class='viewSubContainer'>
        <h1 class='linkedTaskHeader'>${
          state.todo.isSubtask() ? "Parent" : "Subtasks"
        }</h1>
        <div class='linkedTasksContainer'>
        </div>
      </div>
    </div>
  `;

  DOMelement() {
    let element = super.DOMelement();
    let subtaskContainer = element.querySelector(".linkedTasksContainer");
    if (!this.state.todo.isSubtask()) {
      this.state.todo.children.forEach((task) => {
        let taskDOM = new TaskComponent("subtask", {
          todo: task,
          classes: ["task", "subtask"],
        }).DOMelement();
        taskDOM.firstChild.remove();
        // Remove the check minicontainer so users wont be able to check the todo from the modal
        subtaskContainer.append(taskDOM);
      });
    } else {
      let parentDOM = new TaskComponent("todo", {
        todo: this.state.todo.parent,
        classes: ["task subtask"],
      }).DOMelement();
      parentDOM.firstChild.remove();
      // Remove the check minicontainer so users wont be able to check the todo from the modal
      subtaskContainer.append(parentDOM);
    }
    this.createPriority(element, this.state.todo.priority);
    return element;
  }

  createPriority(element, prioNumber) {
    let priorityContainer = element.querySelector(".priorityViewContainer");
    let priority = Priority.priorities[prioNumber - 1];
    let priorityComponent = new PriorityComponent("todoPriority", {
      priority: priority,
      picker: false,
    }).DOMelement();
    priorityContainer.append(priorityComponent);
  }
}
