import DOMNew from "./new";
import Todo from "../todo";
import Project from "../project";

const addNewTodo = (() => {
  let addButton = document.querySelector("#addBigTodo");
  let form;

  addButton.addEventListener("click", (e) => {
    DOMNew.createNewTodoModal();
    DOMModal.showModal();
    form = document.querySelector(".newForm");
  });
})();

export default addNewTodo;
