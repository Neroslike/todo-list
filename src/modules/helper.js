import { el } from "date-fns/locale";
import Project from "./project";
import ProjectComponent from "./components/ProjectComponent";
import Neros from "./Neros";

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

  // Merge sort algorithm

  const mergeSort = (array) => {
    let sortedArray = [];
    if (array.length < 2) {
      sortedArray.push(array[0]);
    } else {
      let half = Math.floor(array.length / 2);
      let array1 = mergeSort(array.splice(0, half));
      let array2 = mergeSort(array);
      let counter = array1.length + array2.length;
      for (let index = 0; index < counter; index++) {
        if (array1.length === 0 || array2.length === 0) {
          sortedArray = sortedArray.concat(array1.concat(array2));
          break;
        }
        if (array1[0].priority < array2[0].priority) {
          sortedArray.push(array1.shift());
        } else {
          sortedArray.push(array2.shift());
        }
      }
    }
    return sortedArray;
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

  // Add event listener to 'Delete this project' button
  let deleteProjectBtn = document.querySelector("#deleteProject");
  deleteProjectBtn.addEventListener("click", () => {
    Neros.deleteComponent(Neros.projects, Project.selected.component);
  });

  return { deleteItem, findTask, mergeSort };
})();

export default helper;
