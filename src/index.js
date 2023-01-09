import "./style/main.scss";
import Todo from "./modules/todo";
import helper from "./modules/helper";
import Project from "./modules/project";
import DOMHandler from "./modules/DOMHandler";
import DOMPriority from "./modules/components/priority";
import Priority from "./modules/priority";
import DOMTodo from "./modules/components/todo";
import DOMProject from "./modules/components/project";
import DOMNew from "./modules/components/new";
import DOMView from "./modules/components/view";

let project = new Project("A project");

let a = new Todo(
  "My first todo",
  "09/01/2023",
  1,
  "This is going to be a big project",
  false
);

let b = new Todo(
  "That project todo",
  "10/01/2023",
  3,
  "This is the first todo of that project",
  false
);

let c = a.createTodo(
  "This is another todo for that project",
  "10/01/2023",
  4,
  "Delete me",
  false
);

let d = b.createTodo(
  "Third todo for that project",
  "10/01/2023",
  5,
  "Do not delete me",
  true
);

project.addPending(a);
project.addPending(b);

DOMProject.populateProject(project);
DOMProject.displayProject(project);
DOMView.renderInfo(a);
// DOMNew.createNewTodoModal();
// a.toggleCheck();

// console.log(project.pending);
