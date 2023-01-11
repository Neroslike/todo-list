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
import DOMModal from "./modules/components/modal";
import addNewTodo from "./modules/components/addNewTodo";

/*
1.- Add styles to buttons ✔️
2.- Add functionality to buttons
3.- Add close function to modal, set opacity to background
4.- Create an edit modal
5.- Add basic buttons to view modal
*/

// refactor almost everything or kys

let project = new Project("A project");
Project.selected = project;

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
  "Third todo for that project, im now typing to fill the title",
  "10/01/2023",
  5,
  "This course takes you on a journey through the many facets of modern responsive web design. The first few modules will ease you in with a history of where responsive design came from and a look at the fundamentals of responsive layouts. From there,",
  true
);

DOMProject.populateProject(project);
DOMProject.displayProject(project);

let tasks = document.querySelectorAll(".taskDataContainer");
