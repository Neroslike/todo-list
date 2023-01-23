import Component from "../Component";
import Todo from "../todo";
import Project from "../project";
import Neros from "../Neros";
import modal from "../modal";

export class NewTodoComponent extends Component {
  template = (state) =>
    `
    <div class='newContainer'>
      <h1 class='newTitle'>Create todo</h1>
      <form class='newForm'>
        <div class='field TitleField'>
          <label for='Title'>Title</label>
          <input type='text' name='Title' id='Title'>
        </div>
        <div class='field DuedateField'>
          <label for='Due date'>Due date</label>
          <input type='date' name='Duedate' id='Due date'>
        </div>
        <div class='field PriorityField'>
          <label for='Priority'>Priority</label>
          <select name="Priority" id="Priority">
            <option value="Urgent">Urgent</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
            <option value="Optional">Optional</option>
          </select>
        </div>
        <div class='field DescriptionField'>
          <label for='Description'>Description</label>
          <input type='text' name='Description' id='Description'>
        </div>
        <button class='createButton' type='button'>Create</button>
      </form>
    </div>
    `;

  DOMelement() {
    let element = super.DOMelement();
    let button = element.querySelector("button");
    let form = element.querySelector("form");
    button.addEventListener("click", () => {
      this.createTodo(form);
    });
    return element;
  }

  update() {
    let projectComponent = Project.selected.component;
    let project = Project.selected;

    projectComponent.displayTodos("pending", project.pending);
    projectComponent.displayTodos("completed", project.completed);
  }

  createTodo(form) {
    let title = form.Title.value;
    let date = form.Duedate.value;
    let priority = form.Priority.selectedIndex + 1;
    let description = form.Description.value;

    if (this.state.parent) {
      this.state.parent.createTodo(title, date, priority, description, false);
    } else {
      new Todo(title, date, priority, description, false);
    }
    this.update();
    modal.hide();
  }
}
