class Component {
  constructor(name, state, template) {
    this.name = name;
    this.state = state;
    this.template = template;
  }

  // This method returns a template literal of the component
  view() {
    return this.template(this.state);
  }

  // This method returns an HTML element object of the component
  element = () => {
    return new DOMParser().parseFromString(
      this.template(this.state),
      "text/html"
    ).body.firstChild;
  };
}

export default Component;

//make an eventHandler class that assigns event listeners to components
