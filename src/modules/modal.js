import Neros from "./Neros";
import { NewTodoComponent } from "./components/NewTodoComponent";

const modal = (() => {
  let modalElement = document.querySelector("#modal");
  let addTodoBtn = document.querySelector("#addBigTodo");

  const hide = () => {
    modalElement.classList.add("hidden");
  };

  const show = () => {
    modalElement.classList.remove("hidden");
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

  return {
    hide,
    show,
  };
})();

export default modal;
