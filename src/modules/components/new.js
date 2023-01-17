import DOMHandler from "../DOMHandler";
import Priority from "../priority";
import close from "../../assets/close.svg";
import Todo from "../todo";

const DOMNew = (() => {
  let modal = document.querySelector("#modalContainer");
  const _createDropdown = () => {
    let select = DOMHandler.createField("Priority", "select");
    Priority.priorities.forEach((element) => {
      let option = DOMHandler.createElement("option", "", element.name);
      option.value = element.name;
      //Append the priority option to the <select> element, which is the second in the container
      select.childNodes[1].append(option);
    });
    return select;
  };

  const _createForm = () => {
    let form = DOMHandler.createElement("form", "newForm");

    form.append(DOMHandler.createField("Title"));
    form.append(DOMHandler.createField("Due date", "input", "date"));
    form.append(_createDropdown());
    form.append(DOMHandler.createField("Description", "textarea"));

    return form;
  };

  const createNewTodoModal = (parent = null, todoContainer = null) => {
    let title = DOMHandler.createElement("h1", "newTitle", "Create todo");
    let form = _createForm();
    let createButton = DOMHandler.createElement(
      "button",
      "createButton",
      "Create"
    );
    let container = DOMHandler.createElement("div", "newContainer");
    createButton.type = "button";

    container.append(title);
    form.append(createButton);
    container.append(form);
    modal.append(container);

    createButton.addEventListener("click", () => {
      let todo = createTodoObject(form, parent);
      let todoElement = DOMTodo.createTask(todo, true);
      todoContainer.insertBefore(todoElement, todoContainer.lastChild);
      // DOMModal.hideModal();
    });
  };

  const createTodoObject = (form, parent) => {
    let title = form.Title.value;
    let date = form.Duedate.value;
    let priority = form.Priority.selectedIndex + 1;
    let description = form.Description.value;

    let todo = new Todo(title, date, priority, description, false, parent);
    return todo;
  };

  return { createNewTodoModal };
})();

export default DOMNew;
