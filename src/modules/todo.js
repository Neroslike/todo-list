import helper from "./helper";
import idAssigner from "./idAssigner";
import Project from "./project";
import TodoComponent from "./components/TodoComponent";
import checked from "../assets/checked.svg";
import unchecked from "../assets/unchecked.svg";
import { Storage } from "./storageManagement";

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
  #project;

  constructor(
    title,
    date,
    priority,
    description,
    isChecked,
    firstLoad = false,
    parent = null
  ) {
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.description = description;
    this.#isChecked = isChecked;
    this.#id = idAssigner.getIdNumber();
    this.#parent = parent;
    this.#project = Project.selected;
    this.component = null;
    this.domElement = null;
    this.firstLoad = firstLoad;
    if (this.#parent === null) {
      this.#children = [];
      // If the todo is already checked add it to the completed tasks array
      // of the parent project
      this.check
        ? Project.selected.addCompleted(this)
        : Project.selected.addPending(this);
    } else {
      this.#children = false;
    }
    if (!this.firstLoad && !this.isSubtask()) {
      Storage.saveData();
    } else {
      this.firstLoad = false;
    }
  }

  createTodo(title, date, priority, description, isChecked, firstLoad) {
    let a = new Todo(
      title,
      date,
      priority,
      description,
      isChecked,
      firstLoad,
      this
    );
    this.#children.push(a);
    if (!firstLoad) {
      Storage.saveData();
    } else {
      a.firstLoad = false;
    }
    return a;
  }

  edit(title, date, priority, description) {
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.description = description;
    Storage.saveData();
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
      this.uncheckTodo();
    } else {
      this.checkTodo();
    }
  }

  uncheckTodo() {
    let element = this.domElement;
    let img =
      this.domElement.querySelector(".checkButtonMini").firstElementChild;
    this.#isChecked = false;
    element.classList.remove("completedTask");
    img.src = unchecked;
    if (this.#parent === null) {
      TodoComponent.moveToPending(element);
      this.project.resumeTodo(this.id);
      this.project.component.refreshTodos();
    }
    Storage.saveData();
  }

  checkTodo() {
    let element = this.domElement;
    let img =
      this.domElement.querySelector(".checkButtonMini").firstElementChild;
    this.#isChecked = true;
    element.classList.add("completedTask");
    img.src = checked;
    if (this.#parent === null) {
      TodoComponent.moveToCompleted(element);
      this.project.completeTodo(this.id);
      this.project.component.refreshTodos();
    }
    Storage.saveData();
  }

  deleteTodo(task) {
    if (this.isSubtask()) {
      this.parent.delete(task);
    } else {
      this.project.deleteTodo(task);
    }
    Storage.saveData();
  }

  delete(task) {
    let taskIndex = this.#children.indexOf(task);
    taskIndex === 0
      ? this.#children.shift()
      : this.#children.splice(taskIndex, 1);
  }

  get project() {
    return this.#project;
  }

  get check() {
    return this.#isChecked;
  }

  isSubtask() {
    return this.#parent !== null;
  }

  toJSON() {
    let obj = {
      title: this.title,
      date: this.date,
      priority: this.priority,
      description: this.description,
      isChecked: this.#isChecked,
    };
    if (!this.isSubtask()) {
      obj.children = {};
      this.#children.forEach((task, index) => {
        obj.children[`subtask${index}`] = task.toJSON();
      });
    }
    return JSON.stringify(obj);
  }

  static fromJSON(json) {
    let todoOBJ = JSON.parse(json);
    for (const key in todoOBJ.children) {
      if (Object.hasOwnProperty.call(todoOBJ.children, key)) {
        todoOBJ.children[key] = JSON.parse(todoOBJ.children[key]);
      }
    }
    return todoOBJ;
  }

  static loadTodo(obj) {
    let todo = new Todo(
      obj.title,
      obj.date,
      obj.priority,
      obj.description,
      obj.isChecked,
      true
    );
    for (const key in obj.children) {
      if (Object.hasOwnProperty.call(obj.children, key)) {
        todo.createTodo(
          obj.children[key].title,
          obj.children[key].date,
          obj.children[key].priority,
          obj.children[key].description,
          obj.children[key].isChecked,
          true
        );
      }
    }
    return todo;
  }
}
export default Todo;
