import Component from "../Component";

class TextComponent extends Component {
  constructor(name, state) {
    super(name, state);
  }

  //Template
  template = (state) => {
    let html = `
    <div class='text'>
      <p>
        This section is called ${state.name} and it contains ${state.contents}
      </p>
    </div>
    `;

    let element = new DOMParser().parseFromString(html, "text/html");
    return element.body.firstChild;
  };
}

export default TextComponent;
