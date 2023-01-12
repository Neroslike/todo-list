import Component from "../Component";

//Template
const testTemplate = (state) => `
<div class='test'>
  <h1>
    ${state.name} sexo's
  </h2>
</div>
`;

//Component

const TestComponent = new Component("test", { name: "Albert" }, testTemplate);

export default TestComponent;
