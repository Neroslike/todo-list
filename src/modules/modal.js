import Neros from "./Neros";
import { NewTodoComponent } from "./components/NewTodoComponent";
import { NewProjectComponent } from "./components/NewProjectComponent";
import Project from "./project";
import close from "../assets/close.svg";

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
    let closeBtn = _createCloseButton();
    let headerDiv = modalElement.querySelector(".headerContainer");
    if (headerDiv) headerDiv.append(closeBtn);
    modalElement.classList.remove("hidden");
    let input = modalElement.querySelector("input");
    // modalElement.focus();
    if (input) input.focus();
  };

  const _createCloseButton = () => {
    let closeBtn = document.createElement("i");
    closeBtn.classList.add("closeButton");
    closeBtn.classList.add("fa-xmark");
    closeBtn.classList.add("fa-solid");
    closeBtn.addEventListener("click", () => {
      hide();
    });
    return closeBtn;
  };

  const resetModal = () => {
    modalElement.innerHTML = "<div id='modalContainer'></div>";
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

  // Add event listener to burger menu button to show the sidebar in mobile version
  let burger = document.querySelector(".burgerMenu");
  burger.addEventListener("click", () => {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("hideSidebar");
  });

  // Add event listener to back menu button to hide the sidebar in mobile version
  let goBack = document.querySelector(".goBack");
  goBack.addEventListener("click", () => {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("hideSidebar");
  });
  return {
    hide,
    show,
  };
})();

export default modal;
