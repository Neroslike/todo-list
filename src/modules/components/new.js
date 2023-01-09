import DOMHandler from "../DOMHandler";
import Priority from "../priority";
import close from "../../assets/close.svg";

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

  const createNewTodoModal = () => {
    let title = DOMHandler.createElement("h1", "newTitle", "Create todo");
    let form = _createForm();
    let createButton = DOMHandler.createElement(
      "button",
      "createButton",
      "Create"
    );

    modal.append(title);
    modal.append(form);
    modal.append(createButton);
  };

  return { createNewTodoModal };
})();

export default DOMNew;
