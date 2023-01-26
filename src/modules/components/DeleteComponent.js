import Component from "../Component";
import modal from "../modal";
import Project from "../project";

export class DeleteComponent extends Component {
  template = (state) =>
    `
    <div class='deleteContainer'>
      <h1>Are you sure?</h1>
      <div class='buttonsContainer'>
        <button id='cancel'>Go back</button>
        <button id='confirm'>Yes, delete it</button>
      </div>
    </div>
    `;

  DOMelement() {
    let element = super.DOMelement();
    let cancelBtn = element.querySelector("#cancel");
    let confirmBtn = element.querySelector("#confirm");

    cancelBtn.addEventListener("click", () => {
      modal.hide();
    });

    confirmBtn.addEventListener("click", () => {
      this.state.todo.deleteTodo(this.state.todo);
      Project.selected.component.update();
      modal.hide();
    });
    return element;
  }
}
