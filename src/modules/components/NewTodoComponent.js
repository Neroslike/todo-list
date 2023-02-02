import Component from "../Component";
import Todo from "../todo";
import Project from "../project";
import Neros from "../Neros";
import modal from "../modal";
import { format } from "date-fns";
import { da } from "date-fns/locale";

export class NewTodoComponent extends Component {
  template = (state) =>
    `
    <div class='newContainer'>
      <div class='headerContainer'>
        <h1 class='newTitle'>${state.todo ? "Edit Todo" : "New Todo"}</h1>
      </div>
      <form class='newForm'>
        <div class='field TitleField'>
          <label for='Title'>Title</label>
          <input type='text' name='Title' id='Title' value="${
            state.todo ? state.todo.title : ""
          }" required>
        </div>
        <div class='field DuedateField'>
          <label for='Due date'>Due date</label>
          <input type='date' name='Duedate' id='Due date' value="${this.startingDate(
            state.todo,
            state.parent
          )}" required>
        </div>
        <div class='field PriorityField'>
          <label for='Priority'>Priority</label>
          <select name="Priority" id="Priority">
            <option id='p1' value="Urgent">Urgent</option>
            <option id='p2' value="High">High</option>
            <option id='p3' value="Medium">Medium</option>
            <option id='p4' value="Low">Low</option>
            <option id='p5' value="Optional">Optional</option>
          </select>
        </div>
        <div class='field DescriptionField'>
          <label for='Description'>Description</label>
          <textarea name='Description' id='Description' rows='5'></textarea>
        </div>
        <button class='createButton' type='submit'>${
          this.state.todo ? "Edit" : "Create"
        }</button>
      </form>
    </div>
    `;

  DOMelement() {
    let element = super.DOMelement();
    let form = element.querySelector("form");
    // If the todo already exists (edit mode) make the button edit the todo, else just create a new task
    if (this.state.todo) {
      let select = element.querySelector(`#Priority`);
      select.selectedIndex = this.state.todo.priority - 1;
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        this.editTodo(form);
      });
    } else {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        this.createTodo(form);
      });
    }
    let description = element.querySelector("textarea");
    description.value = this.state.todo ? this.state.todo.description : "";
    return element;
  }

  editTodo(form) {
    let title = form.Title.value;
    let date = form.Duedate.value;
    let priority = form.Priority.selectedIndex + 1;
    let description = form.Description.value;
    this.state.todo.edit(title, date, priority, description);
    Project.selected.component.update();
    modal.hide();
  }

  startingDate(todo, parent) {
    let date = "";
    if (todo) {
      date = todo.date;
    } else {
      date = parent ? parent.date : format(new Date(), "yyyy-MM-dd");
    }
    return date;
  }

  createTodo(form) {
    let title = form.Title.value;

    let priority = form.Priority.selectedIndex + 1;
    let description = form.Description.value;

    if (this.state.parent) {
      let date =
        form.Duedate.value === "" ? this.state.parent.date : form.Duedate.value;
      this.state.parent.createTodo(title, date, priority, description, false);
    } else {
      let date =
        form.Duedate.value === ""
          ? format(new Date(Date.now()), "yyyy-MM-dd")
          : form.Duedate.value;
      new Todo(title, date, priority, description, false);
    }
    Project.selected.component.update();
    modal.hide();
  }
}
