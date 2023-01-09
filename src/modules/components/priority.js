import DOMHandler from "../DOMHandler";
import Priority from "../priority";

//Try to refactorize the priorities code and figure out if this logic belongs here

const DOMPriority = (() => {
  let priorities = document.querySelector("#priorities");
  let prioritiesArray = [];

  const createPriorityItem = (priority) => {
    let main = DOMHandler.createElement("div", "priority");
    let name = DOMHandler.createElement("p", "priorityName", priority.name);
    let colorContainer = DOMHandler.createElement(
      "div",
      "priorityColorContainer"
    );
    let colorDiv = DOMHandler.createElement("div", "priorityColor");

    colorDiv.style.backgroundColor = priority.color;
    colorContainer.append(colorDiv);
    main.append(colorContainer);
    main.append(name);

    return main;
  };

  const createPriorityColor = (priority) => {
    let colorDiv = DOMHandler.createElement("div", "priorityColor");
    colorDiv.style.backgroundColor = Priority.priorities[priority - 1].color;
    return colorDiv;
  };

  const populatePriorities = (() => {
    Priority.priorities.forEach((priority) => {
      priorities.append(createPriorityItem(priority));
    });
  })();

  return { createPriorityColor, createPriorityItem };
})();

export default DOMPriority;
