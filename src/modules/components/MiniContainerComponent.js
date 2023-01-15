import Component from "../Component";
import deleteTask from "../../assets/delete.svg";
import edit from "../../assets/edit.svg";
import checked from "../../assets/checked.svg";
import unchecked from "../../assets/unchecked.svg";

class MiniContainerComponent extends Component {
  template = (state) => `
    <div class="taskMiniContainer ${state.typeClass}">
      ${state.html}
    </div>
  `;
}

export default MiniContainerComponent;
