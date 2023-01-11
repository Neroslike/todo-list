import helper from "./helper";
import idAssigner from "./idAssigner";
import Project from "./project";

/* 1.- Be able to create and delete todo's ✔️
   2.- If a todo's is a parent, they get added to the pending tasks when created ✔️
   3.- If a parent todo is deleted, all it's children are deleted as well ✔️
   4.- Only parent's todo will be added to the completed tasks array, if a parent todo is checked, all it's children will be ✔️
   5.- Sort the pending tasks array by priority, and sort the children array by priority as well */

class Todo {
  #parent;
  #children;
  #id;
  #isChecked;

  constructor(title, date, priority, description, isChecked, parent = null) {
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.description = description;
    this.#isChecked = isChecked;
    this.#id = idAssigner.getIdNumber();
    this.#parent = parent;
    if (this.#parent === null) {
      this.#children = [];
      Project.selected.addPending(this);
    } else {
      this.#children = false;
    }
  }

  createTodo(title, date, priority, description) {
    let a = new Todo(title, date, priority, description, false, this);
    this.#children.push(a);
    return a;
  }

  get id() {
    return this.#id;
  }

  get children() {
    if (this.#children) return [...this.#children];
    return this.#children;
  }

  get parent() {
    return this.#parent;
  }

  toggleCheck() {
    if (this.#isChecked) {
      this.#isChecked = false;
    } else {
      this.#isChecked = true;
      //If the todo is a parent check all it's children
      if (this.#parent === null) this.#recursiveCheck(this.#children);
    }
  }

  get check() {
    return this.#isChecked;
  }

  isSubtask() {
    return this.#parent !== null;
  }

  #recursiveCheck(array, index = 0) {
    if (array[index] && array[index].check === false) {
      array[index].toggleCheck();
      return this.#recursiveCheck(array, index + 1);
    }
  }
}
export default Todo;
