import Component from "../Component";
import modal from "../modal";

export class viewTodoComponent extends Component {
  template = (state) =>
    `
    <div class'infoContainer'>
      <h1 class='viewTitle'>${state.todo.title}</h1>
      </hr>
      <p class='viewDescription'>${state.todo.description}</p>
      <div class='todoDataContainer'>
        <div class='dateViewContainer'>
          <h3>Due date</h3>
          <div class='dateStringContainer'>
            <p class='dateView'>01/01/2023</p>
            <p class='timeLeftView'>(4 days left)</p>
          </div>
        </div>
        <div class='priorityViewContainer'>
          <h3>Priority</h3>
        </div>
      </div>
      <div class='separator'></div>
      <h1 class='linkedTaskHeader'>Tasks linked to this item</h1>
      <div class='linkedTasksContainer'>
      </div>
    </div>
  `;
}
