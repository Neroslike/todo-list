import { el } from "date-fns/locale";
import Project from "./project";
import ProjectComponent from "./components/ProjectComponent";

const helper = (() => {
  // This method finds the element matching the ID on the given array and deletes it by index
  const deleteItem = (array, id) => {
    let found = findTask([...array], id);
    let foundIndex = array.indexOf(found);
    foundIndex === 0 ? array.shift() : array.splice(foundIndex, foundIndex);
    return found;
  };

  // Given an array of todos and an id, this method will recursively find the todo
  const findTask = (queue, id) => {
    let current = queue[0];
    if (current.id === id) return current;
    queue.shift();

    if (!current.isSubtask()) queue = [...queue, ...current.children];
    return findTask(queue, id);
  };

  // Add event listener to 'clear completed' button, this shouldn't be here but
  // I don't think it's worth creating a new module just for this.
  let clear = document.querySelector("#clearCompleted");
  clear.addEventListener("click", () => {
    let project = Project.selected;
    let projectComponent = project.component;

    ProjectComponent.resetView();
    project.clearCompletedTodos();
    projectComponent.displayTodos("completed", project.completed);
    projectComponent.displayTodos("pending", project.pending);
  });

  return { deleteItem, findTask };
})();

export default helper;
