//Import statements
import "./style/main.scss";
import Neros from "./modules/Neros";
import Todo from "./modules/todo";
import TaskComponent from "./modules/components/TaskComponent";
import TodoComponent from "./modules/components/TodoComponent";
import ProjectComponent from "./modules/components/ProjectComponent";
import Project from "./modules/project";

//Initialize modules
const project = new Project("Big project");
Project.selected = project;
const projectModule = new Neros("projects");

let todo1 = new Todo(
  "First OOP todo",
  "24-05-2023",
  4,
  "This is a todo made with OOP principles"
);

todo1.createTodo(
  "first of First OOP todo",
  "24-05-2023",
  2,
  "This is a todo made with OOP principles 1"
);

todo1.createTodo(
  "second of First OOP todo",
  "24-05-2023",
  5,
  "This is a todo made with OOP principles 2"
);

let todo2 = new Todo(
  "second OOP todo",
  "24-05-2023",
  1,
  "This is a todo made with OOP principles"
);

todo2.createTodo(
  "first of second OOP todo",
  "24-05-2023",
  2,
  "This is a todo made with OOP principles 1"
);

todo2.createTodo(
  "second of second OOP todo",
  "24-05-2023",
  3,
  "This is a todo made with OOP principles 2"
);

let projectComponent = new ProjectComponent("project", { project: project });
projectModule.registerComponent(projectComponent);
// priorities.registerComponent(TestComponent);
// let a = new TextComponent("text", {
//   name: "Domestic animals",
//   contents: "Cats and dogs",
// });
// priorities.registerComponent(a);
