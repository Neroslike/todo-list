class Neros {
  constructor(selector) {
    this.components = {};
    this.NerosElement = document.querySelector(`#${selector}`);
  }

  registerComponent(component) {
    this.components[component.name] = component;
    this.updateView();
  }

  updateView() {
    if (this.components) {
      let mergedViews = "";
      Object.keys(this.components).forEach((key) => {
        mergedViews += this.components[key].view();
      });
      this.NerosElement.innerHTML = mergedViews;
    }
  }
}

export default Neros;
