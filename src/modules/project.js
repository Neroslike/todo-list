/* 1.- If a todo's is a parent, they get added to the pending tasks when created
   2.- Sort the pending tasks array by priority, and sort the children array by priority as well */

import helper from "./helper";
class Project {
  #pendingTasks;
  #completedTasks;

  static selected;

  constructor(name) {
    this.name = name;
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
}

export default Project;
