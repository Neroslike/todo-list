import Neros from "./Neros";
import { NewTodoComponent } from "./components/NewTodoComponent";
import { NewProjectComponent } from "./components/NewProjectComponent";
import Project from "./project";

const modal = (() => {
  let modalElement = document.querySelector("#modal");
  let modalContainer = document.querySelector("#modalContainer");
  let addTodoBtn = document.querySelector("#addBigTodo");
  let addProjectBtn = document.querySelector("#addProject");

  const hide = () => {
    modalElement.classList.add("hidden");
    resetModal();
  };

  const show = (component) => {
    let modal = new Neros("modalContainer");
    modal.registerComponent(component);
    modalElement.classList.remove("hidden");
    modalElement.focus();
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

  modalElement.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
      hide();
    }
  });

  // Show modal with new todo form when the 'add new todo' button is clicked
  addTodoBtn.addEventListener("click", () => {
    let newTodo = new NewTodoComponent("newTodo", { parent: null });
    if (Project.selected) {
      show(newTodo);
    }
  });

  // Add event listener to 'Add new project' button

  addProjectBtn.addEventListener("click", () => {
    let newProject = new NewProjectComponent("newProject");

    show(newProject);
  });

  // Add view event listener to tasks

  return {
    hide,
    show,
  };
})();

export default modal;
