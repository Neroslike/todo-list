class Component {
  constructor(name, state, template) {
    this.name = name;
    this.state = state;
    this.template = template;
  }

  view() {
    return this.template(this.state);
  }

  element = () => {
    return new DOMParser().parseFromString(
      this.template(this.state),
      "text/html"
    ).body.firstChild;
  };
}

export default Component;

//make an eventHandler class that assigns event listeners to components
