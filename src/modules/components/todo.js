import DOMHandler from "../DOMHandler";
import Todo from "../todo";
import DOMPriority from "./priority";
import DOMView from "./view";
import DOMNew from "./new";
import DOMModal from "./modal";

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

  const createTodoTitle = (todo) => {
    let taskTitle = DOMHandler.createElement("div", "taskTitle");
    let taskTitleP = DOMHandler.createElement("p", "", todo.title);
    taskTitle.append(taskTitleP);
    return taskTitle;
  };

  const createTodoTime = (todo) => {
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
    let taskTitle = createTodoTitle(todo);
    let taskTime = createTodoTime(todo);
    let dataContainer = DOMHandler.createElement("div", "taskDataContainer");
    dataContainer.append(taskTitle);
    dataContainer.append(taskTime);

    elements.splice(2, 0, dataContainer);
    elements.forEach((element) => {
      task.append(element);
    });

    task.dataset.id = todo.id;
    dataContainer.addEventListener("click", () => {
      DOMView.renderInfo(todo);
    });
    return task;
  };

  const createTodo = (todo) => {
    let taskContainer = DOMHandler.createElement("div", "taskContainer");
    let subtasksContainer = DOMHandler.createElement(
      "div",
      "subtasksContainer"
    );
    let task = createTask(todo);
    let button = DOMHandler.createElement(
      "button",
      "addSubtask",
      "+ Add subtask"
    );

    // Add event listener to create a subtask for this todo
    button.addEventListener("click", (e) => {
      DOMNew.createNewTodoModal(todo, e.target.parentElement);
      DOMModal.showModal();
    });
    subtasksContainer.append(button);
    let subtasks = [];
    todo.children.forEach((task) => {
      let subtask = createTask(task, true);
      subtasks.push(subtask);
    });

    subtasks.forEach((subtask) => {
      subtasksContainer.prepend(subtask);
    });

    taskContainer.append(task);
    taskContainer.append(subtasksContainer);
    return taskContainer;
  };

  const populatePending = (project) => {
    let pendingTodos = document.querySelector(".pendingTodos");
    project.pending.forEach((todo) => {
      let bigTodo = createTodo(todo);
      pendingTodos.append(bigTodo);
    });
  };

  return { populatePending, createTask, createTodo };
})();

export default DOMTodo;
