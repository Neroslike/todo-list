import "./style/main.scss";
import Todo from "./modules/todo";
import helper from "./modules/helper";
import Project from "./modules/project";

let project = new Project("A project");

let a = new Todo(
  "My first project",
  "09/01/2023",
  "High",
  "This is going to be a big project",
  false
);

let aChild = a.createTodo(
  "That project todo",
  "10/01/2023",
  "Medium",
  "This is the first todo of that project",
  false
);

let aChild2 = a.createTodo(
  "This is another todo for that project",
  "10/01/2023",
  "Medium",
  "Delete me",
  false
);

let aChild3 = a.createTodo(
  "Third todo for that project",
  "10/01/2023",
  "Medium",
  "Do not delete me",
  true
);

project.addPending(a);
a.toggleCheck();

console.log(project.pending);
