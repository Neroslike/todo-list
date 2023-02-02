export class MiniPriorityComponent {
  template = (state) =>
    `
    <div class="priority">
      <div class="priorityColorContainer">
        <input type="color" class='priorityColor' value='${state.priority.color}'/>
      </div>
      <p class="priorityName">${state.priority.name}</p>
    </div>
    `;
}
