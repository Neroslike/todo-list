/* 1.- If a todo's is a parent, they get added to the pending tasks when created
   2.- Sort the pending tasks array by priority, and sort the children array by priority as well */

import helper from "./helper";
import ProjectComponent from "./components/ProjectComponent";
class Project {
  #pendingTasks;
  #completedTasks;

  static selected;

  constructor(name) {
    this.name = name;
    this.component = new ProjectComponent(name, { project: this });
    this.#pendingTasks = [];
    this.#completedTasks = [];
  }

  get pending() {
    return [...this.#pendingTasks];
  }

  get completed() {
    return [...this.#completedTasks];
  }

  addPending(item) {
    this.#pendingTasks.push(item);
  }

  addCompleted(item) {
    this.#completedTasks.push(item);
  }

  completeTodo(id) {
    let task = helper.deleteItem(this.#pendingTasks, id);
    this.addCompleted(task);
  }

  resumeTodo(id) {
    let task = helper.deleteItem(this.#completedTasks, id);
    this.addPending(task);
  }

  clearCompletedTodos() {
    this.#completedTasks = [];
  }

  deleteTodo(task) {
    if (this.#pendingTasks.includes(task)) {
      let taskIndex = this.#pendingTasks.indexOf(task);
      taskIndex === 0
        ? this.#pendingTasks.shift()
        : this.#pendingTasks.splice(taskIndex, taskIndex);
    } else {
      let taskIndex = this.#completedTasks.indexOf(task);
      taskIndex === 0
        ? this.#completedTasks.shift()
        : this.#completedTasks.splice(taskIndex, taskIndex);
    }
  }
}

export default Project;
