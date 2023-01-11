import { da, de } from "date-fns/locale";
import DOMHandler from "../DOMHandler";
import DOMPriority from "./priority";
import DOMTodo from "./todo";
import Todo from "../todo";
import close from "../../assets/close.svg";
import Priority from "../priority";
import DOMModal from "./modal";

const DOMView = (() => {
  let modal = document.querySelector("#modalContainer");

  const _createContent = (string, className, tag) => {
    let content = DOMHandler.createElement(tag, className, string);
    let contentContainer = DOMHandler.createElement(
      "div",
      `${className}Container`
    );

    contentContainer.append(content);
    return contentContainer;
  };

  const _createDate = (date = "") => {
    let container = DOMHandler.createElement("div", "dateViewContainer");
    let label = DOMHandler.createElement("h3", "", "Due date");
    let dateString = DOMHandler.createElement("p", "dateView", "01/01/2023");
    let timeLeft = DOMHandler.createElement(
      "p",
      "timeLeftView",
      "(4 days left)"
    );
    let dateContainer = DOMHandler.createElement("div", "dateStringContainer");

    container.append(label);
    dateContainer.append(dateString);
    dateContainer.append(timeLeft);
    container.append(dateContainer);
    return container;
  };

  const _createSubTasks = (array) => {
    let tasksContainer = DOMHandler.createElement("div", "viewSubContainer");
    let title = DOMHandler.createElement("h1", "", "Tasks linked to this item");
    tasksContainer.append(title);

    array.forEach((element) => {
      let taskItem = DOMTodo.createTask(element, true);
      tasksContainer.append(taskItem);
    });

    return tasksContainer;
  };

  const _createPriority = (priority) => {
    let todoPriority = DOMPriority.createPriorityItem(
      Priority.priorities[priority - 1]
    );
    let label = DOMHandler.createElement("h3", "priorityLabel", "Priority");
    let container = DOMHandler.createElement("div", "priorityViewContainer");

    container.append(label);
    container.append(todoPriority);
    return container;
  };

  const _createButtons = () => {
    let container = DOMHandler.createElement("div", "ButtonsView");
    let deleteButton = DOMHandler.createElement(
      "button",
      "deleteButton",
      "Delete"
    );
    let editButton = DOMHandler.createElement("button", "editButton", "Edit");
    let checkButton = DOMHandler.createElement(
      "button",
      "checkButton",
      "Check"
    );

    container.append(deleteButton);
    container.append(editButton);
    container.append(checkButton);
    return container;
  };

  const _createInfo = (todo) => {
    let infoContainer = DOMHandler.createElement("div", "infoContainer");
    let todoTitle = _createContent(todo.title, "titleView", "h1");
    let todoDescription = _createContent(
      todo.description,
      "descriptionView",
      "p"
    );
    let todoDate = _createDate();
    let todoPriority = _createPriority(todo.priority);
    let todoDataContainer = DOMHandler.createElement(
      "div",
      "todoDataContainer"
    );
    let todoSubtasks;
    if (todo.children) {
      todoSubtasks = _createSubTasks(todo.children);
    } else {
      todoSubtasks = "";
    }
    let mainTaskContainer = DOMHandler.createElement(
      "div",
      "mainTaskContainer"
    );
    let buttons = _createButtons();

    mainTaskContainer.append(todoTitle);
    mainTaskContainer.append(DOMHandler.createElement("hr"));
    mainTaskContainer.append(todoDescription);
    todoDataContainer.append(todoDate);
    todoDataContainer.append(todoPriority);
    mainTaskContainer.append(todoDataContainer);
    infoContainer.append(mainTaskContainer);
    if (!todo.isSubtask()) {
      infoContainer.append(DOMHandler.createElement("div", "separator"));
      infoContainer.append(todoSubtasks);
      infoContainer.append(DOMHandler.createElement("div", "separator"));
    }

    infoContainer.append(buttons);

    return infoContainer;
  };

  const renderInfo = (todo) => {
    let todoInfo = _createInfo(todo);
    modal.append(todoInfo);
    DOMModal.showModal();
  };

  return { renderInfo };
})();

export default DOMView;
