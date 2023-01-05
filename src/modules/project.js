/* 1.- If a todo's is a parent, they get added to the pending tasks when created
   2.- Sort the pending tasks array by priority, and sort the children array by priority as well */

class Project {
  #pendingTasks;
  #completedTasks;

  constructor(name) {
    this.name = name;
    this.#pendingTasks = [];
    this.#completedTasks = [];
  }

  get pending() {
    return this.#pendingTasks;
  }

  get completed() {
    return this.#completedTasks;
  }

  addPending(item) {
    this.#pendingTasks.push(item);
  }

  addCompleted(item) {
    this.#completedTasks.push(item);
  }
}

export default Project;
