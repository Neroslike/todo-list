//Import statements
import "./style/main.scss";
import Neros from "./modules/Neros";
import Todo from "./modules/todo";
import TaskComponent from "./modules/components/TaskComponent";
import TodoComponent from "./modules/components/TodoComponent";
import ProjectComponent from "./modules/components/ProjectComponent";
import Project from "./modules/project";
import { NewTodoComponent } from "./modules/components/NewTodoComponent";
import helper from "./modules/helper";
import DOMNew from "./modules/components/new";

//Initialize modules
const project = new Project("Big project");
Project.selected = project;
const projectModule = Neros.projects;

let todo1 = new Todo(
  "First OOP todo",
  "24-05-2023",
  4,
  "This is a todo made with OOP principles",
  true
);

todo1.createTodo(
  "first of First OOP todo",
  "24-05-2023",
  2,
  "This is a todo made with OOP principles 1",
  true
);

todo1.createTodo(
  "second of First OOP todo",
  "24-05-2023",
  5,
  "This is a todo made with OOP principles 2",
  true
);

const project2 = new Project("Second big project");
Project.selected = project2;

let todo2 = new Todo(
  "second OOP todo",
  "24-05-2023",
  1,
  "This is a todo made with OOP principles",
  false
);

todo2.createTodo(
  "first of second OOP todo",
  "24-05-2023",
  2,
  "This is a todo made with OOP principles 1",
  false
);

todo2.createTodo(
  "second of second OOP todo",
  "24-05-2023",
  3,
  "This is a todo made with OOP principles 2",
  false
);

// Project.selected = null;

projectModule.registerComponent(project.component);
projectModule.registerComponent(project2.component);

let firstProject = document.querySelector(".projectContainer");
firstProject.click();
// priorities.registerComponent(TestComponent);
// let a = new TextComponent("text", {
//   name: "Domestic animals",
//   contents: "Cats and dogs",
// });
// priorities.registerComponent(a);
