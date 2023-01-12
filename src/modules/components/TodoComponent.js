import Component from "../Component";

class TodoComponent extends Component {
  template = (state) =>
    `
    <div class="taskContainer">
      ${state.task}
      <div class="subtasksContainer">
      ${state.subtasks}
      </div>
    </div>
  `;
}

export default TodoComponent;
