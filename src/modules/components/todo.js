import DOMHandler from "../DOMHandler";
import Todo from "../todo";
import DOMPriority from "./priority";

// Refactor this code, one function shouldn't do all the job, think gears

// Assets
import check from "../../assets/checked.svg";
import deleteIcon from "../../assets/delete.svg";
import edit from "../../assets/edit.svg";
import unchecked from "../../assets/unchecked.svg";

const DOMTodo = (() => {
  //Private methods

  //Given an array of icons, this function will create the mini containers and insert the icons inside
  const _createMiniContainers = (array) => {
    let miniContainers = [];
    array.forEach((element) => {
      let container = DOMHandler.createElement("div", "taskMiniContainer");
      if (typeof element === "object") {
        container.append(element);
      } else {
        let img = DOMHandler.createElement("img", "taskButton");
        img.src = element;
        container.append(img);
      }
      miniContainers.push(container);
    });
    return miniContainers;
  };

  const _createTodoTitle = (todo) => {
    let taskTitle = DOMHandler.createElement("div", "taskTitle");
    let taskTitleP = DOMHandler.createElement("p", "", todo.title);
    taskTitle.append(taskTitleP);
    return taskTitle;
  };

  const _createTodoTime = (todo) => {
    let taskTime = DOMHandler.createElement("div", "taskTime");
    let taskTimeP = DOMHandler.createElement("p", "", "5 days left");
    taskTime.append(taskTimeP);
    return taskTime;
  };

  const createTask = (todo, subtask = false) => {
    let task = DOMHandler.createElement("div", "task");
    if (subtask) {
      task.classList.add("subtask");
    }
    let icons = [
      unchecked,
      DOMPriority.createPriorityColor(todo.priority),
      edit,
      deleteIcon,
    ];
    let elements = _createMiniContainers(icons);
    let taskTitle = _createTodoTitle(todo);
    let taskTime = _createTodoTime(todo);

    elements.splice(2, 0, taskTitle, taskTime);
    elements.forEach((element) => {
      task.append(element);
    });

    return task;
  };

  const _createTodo = (todo) => {
    let taskContainer = DOMHandler.createElement("div", "taskContainer");
    let subtasksContainer = DOMHandler.createElement(
      "div",
      "subtasksContainer"
    );
    let task = createTask(todo);
    let subtasks = [];
    todo.children.forEach((task) => {
      let subtask = createTask(task, true);
      subtasks.push(subtask);
    });

    subtasks.forEach((subtask) => {
      subtasksContainer.append(subtask);
    });

    taskContainer.append(task);
    taskContainer.append(subtasksContainer);
    return taskContainer;
  };

  const populatePending = (project) => {
    let pendingTodos = document.querySelector(".pendingTodos");
    project.pending.forEach((todo) => {
      let bigTodo = _createTodo(todo);
      pendingTodos.append(bigTodo);
    });
  };

  return { populatePending, createTask };
})();

export default DOMTodo;
