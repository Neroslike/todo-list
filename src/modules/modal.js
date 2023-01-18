import Neros from "./Neros";
import { NewTodoComponent } from "./components/NewTodoComponent";
import { NewProjectComponent } from "./components/NewProjectComponent";
import ProjectComponent from "./components/ProjectComponent";

const modal = (() => {
  let modalElement = document.querySelector("#modal");
  let modalContainer = document.querySelector("#modalContainer");
  let addTodoBtn = document.querySelector("#addBigTodo");
  let addProjectBtn = document.querySelector("#addProject");

  const hide = () => {
    modalElement.classList.add("hidden");
    resetModal();
  };

  const show = () => {
    modalElement.classList.remove("hidden");
  };

  const resetModal = () => {
    modalContainer.innerHTML = "";
  };

  // Hide modal when the user clicks outside
  modalElement.addEventListener("mousedown", (e) => {
    if (e.target === modalElement) {
      hide();
    }
  });

  // Show modal with new todo form when the 'add new todo' button is clicked
  addTodoBtn.addEventListener("click", () => {
    let modal = new Neros("modalContainer");
    let newTodo = new NewTodoComponent("newTodo", { parent: null });

    modal.registerComponent(newTodo);
    show();
  });

  // Add event listener to 'Add new project' button

  addProjectBtn.addEventListener("click", () => {
    let modal = new Neros("modalContainer");
    let newProject = new NewProjectComponent("newProject");

    modal.registerComponent(newProject);
    show();
  });

  return {
    hide,
    show,
  };
})();

export default modal;
