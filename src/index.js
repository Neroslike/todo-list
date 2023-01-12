//Import statements
import "./style/main.scss";
import Neros from "./modules/Neros";
import Todo from "./modules/todo";
import TaskComponent from "./modules/components/TaskComponent";
import TodoComponent from "./modules/components/TodoComponent";

//Initialize modules
const pending = new Neros("pendingTodos");

let todoObject = new Todo(
  "First OOP todo",
  "24-05-2023",
  4,
  "This is a todo made with OOP principles"
);

todoObject.createTodo(
  "first of First OOP todo",
  "24-05-2023",
  2,
  "This is a todo made with OOP principles 1"
);

todoObject.createTodo(
  "second of First OOP todo",
  "24-05-2023",
  5,
  "This is a todo made with OOP principles 2"
);

console.log(todoObject);

let taskComponent = new TaskComponent("task", { todo: todoObject }).view();
let subtasks = todoObject.children
  .map((task) => new TaskComponent("subtask", { todo: task }).view())
  .join("");
console.log(subtasks);

let todoComponent = new TodoComponent("todo", {
  task: taskComponent,
  subtasks: subtasks,
});

pending.registerComponent(todoComponent);
// priorities.registerComponent(TestComponent);
// let a = new TextComponent("text", {
//   name: "Domestic animals",
//   contents: "Cats and dogs",
// });
// priorities.registerComponent(a);
