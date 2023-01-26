/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n  background-color: #343a40;\n  height: 90%;\n  min-width: 75%;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: grid;\n  grid-template-columns: minmax(200px, 1.2fr) 2px 3fr;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border-radius: 10px;\n  border-top: #464e55 4px solid;\n  border-left: #464e55 2px solid;\n}\n\n.separator {\n  background-color: #212529;\n}\n\n.mainContent {\n  display: grid;\n  grid-template-rows: calc(65% - 2px) 2px 35%;\n}\n\n.pending {\n  overflow: hidden;\n  border-bottom: #15181c 2px solid;\n  border-left: #464e55 2px solid;\n  display: grid;\n  max-height: 100%;\n  grid-template-rows: min-content minmax(0, 100%);\n}\n\n.completed {\n  overflow: hidden;\n  border-top: #464e55 2px solid;\n  border-left: #464e55 2px solid;\n  display: grid;\n  grid-template-rows: min-content 1fr;\n}\n\n@media (max-width: 800px) {\n  .container {\n    width: 100%;\n    height: 100%;\n    grid-template-columns: 1fr;\n    border: none;\n    border-radius: 0;\n  }\n  .separator {\n    display: none;\n  }\n  .pending {\n    border-left: none;\n  }\n}\n.sidebar {\n  border-right: #15181c 2px solid;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.priorityName {\n  padding-left: 10px;\n  font-size: clamp(8px, 1vw, 64px);\n  margin: 0;\n  font-weight: 300;\n  align-self: center;\n  justify-self: center;\n}\n\n.priorityColorContainer {\n  background-color: #495057;\n  padding: clamp(8px, 0.3rem + 0.3vw, 64px);\n  outline: 2px solid #6c757d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.priorityColor {\n  border-radius: 50%;\n  height: clamp(14px, 0.5rem + 0.7vw, 64px);\n  width: clamp(14px, 0.5rem + 0.7vw, 64px);\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\n.priority {\n  background-color: #212529;\n  border-top: 2px solid #a0b1c3;\n  display: flex;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n}\n\n#priorities {\n  width: clamp(100px, 30% + 4vw, 600px);\n  display: flex;\n  flex-direction: column;\n  gap: clamp(6px, 0.3vw, 12px);\n  margin-bottom: clamp(10px, 0.7vw, 16px);\n}\n\n.priorityColorContainer .priorityColor {\n  height: clamp(14px, 0.5rem + 0.4vw, 64px);\n  width: clamp(14px, 0.5rem + 0.4vw, 64px);\n}\n\n@media (max-width: 800px) {\n  .sidebar {\n    display: none;\n  }\n}\n.sidebarButtons {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6vw;\n}\n\n.TodosContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 50px;\n  overflow-y: scroll;\n}\n\n.taskContainer {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: clamp(4px, 0.4vw, 8px);\n}\n\n.task {\n  display: flex;\n  background-color: #212529;\n  width: 100%;\n  min-width: max-content;\n  border-radius: 14px;\n  overflow: hidden;\n  border-top: 2px solid #a0b1c3;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n  justify-content: space-between;\n  margin: clamp(2px, 0.3vw, 8px) 0;\n}\n\n.taskMiniContainer {\n  background-color: #495057;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: clamp(8px, 0.5rem + 0.5vw, 64px);\n  cursor: pointer;\n  user-select: none;\n}\n\n.taskColor {\n  height: clamp(14px, 0.5rem + 0.7vw, 64px);\n  width: clamp(14px, 0.5rem + 0.7vw, 64px);\n  background-color: #e81616;\n  border-radius: 50%;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\n.taskButton {\n  height: clamp(14px, 0.5rem + 0.7vw, 64px);\n  width: clamp(14px, 0.5rem + 0.7vw, 64px);\n}\n\n.taskMiniContainer:nth-last-of-type(-n + 2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskMiniContainer:nth-child(-n+2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskTime {\n  padding-left: calc(1rem + 1vw);\n  padding-right: 10px;\n}\n.taskTime p {\n  white-space: nowrap;\n  color: #adb5bd;\n}\n\n.taskTitle {\n  margin-right: auto;\n  flex: 1;\n  padding-left: 10px;\n  width: clamp(150px, 10vw + 10rem, 500px);\n}\n.taskTitle p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.taskTitle,\n.taskTime {\n  justify-self: center;\n  align-self: center;\n}\n.taskTitle p,\n.taskTime p {\n  font-size: clamp(8px, 0.5rem + 0.7vw, 64px);\n  margin: 0;\n}\n\n.subtasksContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  align-self: flex-end;\n  width: 90%;\n}\n\n.subtask {\n  margin: clamp(2px, 0.1vw, 4px) 0;\n}\n.subtask .taskMiniContainer {\n  padding: clamp(8px, 0.4rem + 0.4vw, 48px);\n}\n.subtask .taskMiniContainer .taskButton {\n  height: clamp(10px, 0.5rem + 0.4vw, 36px);\n  width: clamp(10px, 0.5rem + 0.4vw, 36px);\n}\n.subtask .taskMiniContainer .taskColor {\n  width: clamp(10px, 0.5rem + 0.4vw, 36px);\n  height: clamp(10px, 0.5rem + 0.4vw, 36px);\n}\n.subtask .taskTitle p,\n.subtask .taskTime p {\n  font-size: clamp(6px, 0.5rem + 0.4vw, 36px);\n}\n\n.completedTask {\n  text-decoration: line-through;\n  opacity: 0.6;\n  border: none;\n  box-shadow: 0px 2px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n}\n\n.taskDataContainer {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  flex: 1 2;\n  cursor: pointer;\n}\n\n.addSubtask {\n  margin-top: 0.3vw;\n  align-self: flex-start;\n}\n\n#completedTodos > .taskContainer > .subtasksContainer button {\n  display: none;\n}\n\n.modal {\n  background-color: hsla(0deg, 0%, 0%, 0.502);\n  backdrop-filter: blur(3px);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#modalContainer {\n  background-color: #343a40;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border: 1px solid gray;\n  border-radius: 12px;\n  position: relative;\n  height: max-content;\n  max-height: 70vh;\n  width: max-content;\n  overflow-y: scroll;\n}\n\n.closeButton {\n  position: sticky;\n  top: 1vw;\n  left: 1vw;\n  height: 1.3vw;\n  width: 1.3vw;\n  z-index: 1;\n}\n\n.closeButton:hover {\n  cursor: pointer;\n}\n\nhr {\n  background-color: gray;\n  height: 1px;\n  border: none;\n}\n\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4vw;\n}\n.field label {\n  font-size: calc(1vw + 6px);\n}\n.field input,\n.field select,\n.field textarea {\n  font-size: calc(0.8vw + 4px);\n  border: none;\n  outline: none;\n  background: #212529;\n  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n  padding: calc(0.5vw + 2px);\n  border-radius: 0.5vw;\n  color: #f8f9fa;\n}\n\n.DuedateField input {\n  font-size: calc(0.8vw + 4px);\n}\n.DuedateField ::-webkit-calendar-picker-indicator {\n  padding: 5px;\n  cursor: pointer;\n  border-radius: 3px;\n  filter: invert(1);\n}\n\n.newForm {\n  min-width: 35vw;\n  padding: 0 calc(1vw + 6px) calc(1vw + 6px) calc(1vw + 6px);\n  display: grid;\n  grid-template-columns: min-content 2fr;\n  gap: calc(0.5vw + 4px);\n}\n\n.TitleField {\n  grid-column: 1/3;\n}\n\n.DescriptionField {\n  grid-column: 1/3;\n}\n.DescriptionField textarea {\n  resize: none;\n  height: 20vh;\n  max-height: 20vh;\n}\n\n.PriorityField select {\n  height: 100%;\n  appearance: none;\n  cursor: pointer;\n  background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg) no-repeat right 0.8em center/1.4em, #212529;\n  /* Remove focus outline */\n  /* Remove IE arrow */\n}\n.PriorityField select:focus {\n  outline: none;\n}\n.PriorityField select::-ms-expand {\n  display: none;\n}\n\n.newTitle {\n  padding: 0;\n  margin: 0;\n  padding: calc(1vw + 6px);\n}\n\n.createButton {\n  grid-column: 1/3;\n  width: max-content;\n  justify-self: center;\n}\n\n.titleView {\n  padding: 0;\n  margin: 0;\n  user-select: auto;\n  overflow-wrap: break-word;\n  text-align: center;\n  max-width: fit-content;\n  word-break: break-word;\n}\n\n.titleViewContainer {\n  display: flex;\n  justify-content: center;\n  margin: 0 2vw;\n}\n\n.descriptionViewContainer {\n  margin: 0 1vw;\n}\n\n.infoContainer {\n  display: grid;\n  min-width: clamp(250px, 70vh, 1000px);\n  grid-template-rows: 1fr auto max-content auto max-content;\n}\n.infoContainer .separator {\n  height: 1px;\n}\n.infoContainer hr {\n  width: 90%;\n}\n\n.dateViewContainer {\n  display: flex;\n  flex-direction: column;\n}\n\nh3 {\n  margin: 0;\n}\n\n.dateStringContainer {\n  display: flex;\n}\n.dateStringContainer p {\n  margin: 0;\n  font-size: clamp(8px, 1vw, 64px);\n  font-weight: 300;\n}\n\n.priorityViewContainer {\n  display: flex;\n  flex-direction: column;\n}\n\n.todoDataContainer {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.todoDataContainer .priority {\n  border: none;\n}\n.todoDataContainer .priority .priorityName {\n  padding-right: 10px;\n}\n\n.mainTaskContainer {\n  padding: 0 1vw 1vw 1vw;\n  border-bottom: #15181c 2px solid;\n}\n\n.viewSubContainer {\n  border-top: #464e55 2px solid;\n  padding: 1vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.viewSubContainer h1 {\n  padding: 0;\n  margin: 0;\n}\n\n.descriptionView {\n  max-width: fit-content;\n  overflow-wrap: break-word;\n}\n\n.ButtonsView {\n  border-top: #464e55 2px solid;\n  display: flex;\n  gap: 0.8vw;\n  justify-content: center;\n  width: 100%;\n  padding: 1vw 0;\n  position: sticky;\n  bottom: 0;\n  background-color: #343a40;\n}\n\n#projects {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5vw;\n  width: 100%;\n}\n\n.projectContainer {\n  background-color: hsla(200deg, 7%, 8%, 0.6);\n  width: 100%;\n  padding: 0.5vw 0 0.5vw 0.7vw;\n  cursor: pointer;\n  transition: background-color 0.2s ease-out 0s;\n}\n\n.projectContainer:hover {\n  background-color: hsl(200deg, 7%, 8%);\n}\n\n#selectedProject {\n  background-color: hsl(200deg, 7%, 8%);\n}\n\nbutton i {\n  margin-right: 0.5vw;\n}\n\nhtml {\n  font-size: 16px;\n  font-family: \"Poppins\", sans-serif;\n  color: #f8f9fa;\n}\n\nbody {\n  background: linear-gradient(119.75deg, #6e9ecf 13.02%, #12263a 100%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nh1 {\n  text-align: center;\n  font-size: 1.5vw;\n  padding: 0;\n  margin: 0.7vw 0;\n  user-select: none;\n}\n\n.projectTitle {\n  font-size: 1vw;\n  font-weight: 500;\n  padding: 0;\n  margin: 0;\n}\n\n.hidden {\n  display: none;\n}\n\nbutton {\n  background: #2887c8;\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px #6bb2e3;\n  border-radius: 8px;\n  outline: none;\n  border: none;\n  color: #f8f9fa;\n  padding: 6px 10px;\n  font-size: 1.1vw;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  cursor: pointer;\n}\n\n.deleteButton {\n  background: hsl(0deg, 82%, 63%);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px hsl(0deg, 67%, 77%);\n}\n\n.editButton {\n  background: rgb(111, 184, 55);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px rgb(188, 229, 156);\n}", "",{"version":3,"sources":["webpack://./src/style/_container.scss","webpack://./src/style/main.scss","webpack://./src/style/_priorities.scss","webpack://./src/style/_task.scss","webpack://./src/style/_modal.scss","webpack://./src/style/_form.scss","webpack://./src/style/_viewTodo.scss","webpack://./src/style/_project.scss"],"names":[],"mappings":"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","sourcesContent":[".container {\n  background-color: #343a40;\n  height: 90%;\n  min-width: 75%;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: grid;\n  grid-template-columns: minmax(200px, 1.2fr) 2px 3fr;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border-radius: 10px;\n  border-top: #464e55 4px solid;\n  border-left: #464e55 2px solid;\n}\n\n.separator {\n  background-color: #212529;\n}\n\n.mainContent {\n  display: grid;\n  grid-template-rows: calc(65% - 2px) 2px 35%;\n}\n\n.pending {\n  overflow: hidden;\n  border-bottom: #15181c 2px solid;\n  border-left: #464e55 2px solid;\n  display: grid;\n  max-height: 100%;\n  grid-template-rows: min-content minmax(0, 100%);\n}\n\n.completed {\n  overflow: hidden;\n  border-top: #464e55 2px solid;\n  border-left: #464e55 2px solid;\n  display: grid;\n  grid-template-rows: min-content 1fr;\n}\n\n@media (max-width: 800px) {\n  .container {\n    width: 100%;\n    height: 100%;\n    grid-template-columns: 1fr;\n    border: none;\n    border-radius: 0;\n  }\n\n  .separator {\n    display: none;\n  }\n\n  .pending {\n    border-left: none;\n  }\n}\n\n.sidebar {\n  border-right: #15181c 2px solid;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n","@import \"./index\";\n\nhtml {\n  font-size: 16px;\n  font-family: \"Poppins\", sans-serif;\n  color: #f8f9fa;\n}\n\nbody {\n  background: linear-gradient(119.75deg, #6e9ecf 13.02%, #12263a 100%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nh1 {\n  text-align: center;\n  // font-size: calc(1rem + 1vw);\n  font-size: 1.5vw;\n  padding: 0;\n  margin: 0.7vw 0;\n  user-select: none;\n}\n\n.projectTitle {\n  font-size: 1vw;\n  font-weight: 500;\n  padding: 0;\n  margin: 0;\n}\n\n.hidden {\n  display: none;\n}\n\nbutton {\n  background: #2887c8;\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px #6bb2e3;\n  border-radius: 8px;\n  outline: none;\n  border: none;\n  color: #f8f9fa;\n  padding: 6px 10px;\n  font-size: 1.1vw;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  cursor: pointer;\n}\n\n.deleteButton {\n  background: hsl(0, 82%, 63%);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px hsl(0, 67%, 77%);\n}\n\n.editButton {\n  background: rgb(111, 184, 55);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px rgb(188, 229, 156);\n}\n","$responsive-text-size: clamp(8px, 1vw, 64px);\n$responsive-button-size: clamp(14px, calc(0.5rem + 0.7vw), 64px);\n$responsive-prio-size: clamp(14px, calc(0.5rem + 0.4vw), 64px);\n\n.priorityName {\n  padding-left: 10px;\n  font-size: $responsive-text-size;\n  margin: 0;\n  font-weight: 300;\n  align-self: center;\n  justify-self: center;\n}\n\n.priorityColorContainer {\n  background-color: #495057;\n  padding: clamp(8px, calc(0.3rem + 0.3vw), 64px);\n  outline: 2px solid #6c757d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.priorityColor {\n  border-radius: 50%;\n  height: $responsive-button-size;\n  width: $responsive-button-size;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\n.priority {\n  background-color: #212529;\n  border-top: 2px solid #a0b1c3;\n  display: flex;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n}\n\n#priorities {\n  width: clamp(100px, calc(30% + 4vw), 600px);\n  display: flex;\n  flex-direction: column;\n  gap: clamp(6px, 0.3vw, 12px);\n  margin-bottom: clamp(10px, 0.7vw, 16px);\n}\n\n.priorityColorContainer {\n  .priorityColor {\n    height: $responsive-prio-size;\n    width: $responsive-prio-size;\n  }\n}\n\n@media (max-width: 800px) {\n  .sidebar {\n    display: none;\n  }\n}\n\n.sidebarButtons {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6vw;\n}\n","$big-responsive-text-size: clamp(8px, calc(0.5rem + 0.7vw), 64px);\n$big-responsive-button-size: clamp(14px, calc(0.5rem + 0.7vw), 64px);\n$small-responsive-text-size: clamp(6px, calc(0.5rem + 0.4vw), 36px);\n$small-responsive-button-size: clamp(10px, calc(0.5rem + 0.4vw), 36px);\n.TodosContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 50px;\n  overflow-y: scroll;\n}\n\n.taskContainer {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: clamp(4px, 0.4vw, 8px);\n}\n\n.task {\n  display: flex;\n  background-color: #212529;\n  width: 100%;\n  min-width: max-content;\n  border-radius: 14px;\n  overflow: hidden;\n  border-top: 2px solid #a0b1c3;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n  justify-content: space-between;\n  margin: clamp(2px, 0.3vw, 8px) 0;\n}\n\n.taskMiniContainer {\n  background-color: #495057;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: clamp(8px, calc(0.5rem + 0.5vw), 64px);\n  cursor: pointer;\n  user-select: none;\n}\n\n.taskColor {\n  height: $big-responsive-button-size;\n  width: $big-responsive-button-size;\n  background-color: #e81616;\n  border-radius: 50%;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\n.taskButton {\n  height: $big-responsive-button-size;\n  width: $big-responsive-button-size;\n}\n\n.taskMiniContainer:nth-last-of-type(-n + 2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskMiniContainer:nth-child(-n + 2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskTime {\n  padding-left: calc(1rem + 1vw);\n  padding-right: 10px;\n\n  p {\n    white-space: nowrap;\n    color: #adb5bd;\n  }\n}\n\n.taskTitle {\n  margin-right: auto;\n  flex: 1;\n  padding-left: 10px;\n  width: clamp(150px, calc(10vw + 10rem), 500px);\n\n  p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n}\n\n.taskTitle,\n.taskTime {\n  justify-self: center;\n  align-self: center;\n  p {\n    font-size: $big-responsive-text-size;\n    margin: 0;\n  }\n}\n\n.subtasksContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  align-self: flex-end;\n  width: 90%;\n}\n\n.subtask {\n  margin: clamp(2px, 0.1vw, 4px) 0;\n  // justify-content: center;\n\n  .taskMiniContainer {\n    padding: clamp(8px, calc(0.4rem + 0.4vw), 48px);\n\n    .taskButton {\n      height: $small-responsive-button-size;\n      width: $small-responsive-button-size;\n    }\n\n    .taskColor {\n      width: $small-responsive-button-size;\n      height: $small-responsive-button-size;\n    }\n  }\n\n  .taskTitle,\n  .taskTime {\n    p {\n      font-size: $small-responsive-text-size;\n    }\n  }\n}\n\n.completedTask {\n  text-decoration: line-through;\n  opacity: 0.6;\n  border: none;\n  box-shadow: 0px 2px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n}\n\n.taskDataContainer {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  flex: 1 2;\n  cursor: pointer;\n}\n\n.addSubtask {\n  margin-top: 0.3vw;\n  align-self: flex-start;\n}\n\n#completedTodos > .taskContainer > .subtasksContainer {\n  button {\n    display: none;\n  }\n}\n",".modal {\n  background-color: hsla(0, 0%, 0%, 0.502);\n  backdrop-filter: blur(3px);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#modalContainer {\n  background-color: #343a40;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border: 1px solid gray;\n  border-radius: 12px;\n  position: relative;\n  height: max-content;\n  max-height: 70vh;\n  width: max-content;\n  overflow-y: scroll;\n}\n\n.closeButton {\n  position: sticky;\n  top: 1vw;\n  left: 1vw;\n  height: 1.3vw;\n  width: 1.3vw;\n  z-index: 1;\n}\n\n.closeButton:hover {\n  cursor: pointer;\n}\n\nhr {\n  background-color: gray;\n  height: 1px;\n  border: none;\n}\n",".field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4vw;\n\n  label {\n    font-size: calc(1vw + 6px);\n  }\n\n  input,\n  select,\n  textarea {\n    font-size: calc(0.8vw + 4px);\n    border: none;\n    outline: none;\n    background: #212529;\n    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n    padding: calc(0.5vw + 2px);\n    border-radius: 0.5vw;\n    color: #f8f9fa;\n  }\n}\n\n.DuedateField {\n  input {\n    font-size: calc(0.8vw + 4px);\n  }\n\n  ::-webkit-calendar-picker-indicator {\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 3px;\n    filter: invert(1);\n  }\n}\n\n.newForm {\n  min-width: 35vw;\n  padding: 0 calc(1vw + 6px) calc(1vw + 6px) calc(1vw + 6px);\n  display: grid;\n  grid-template-columns: min-content 2fr;\n  gap: calc(0.5vw + 4px);\n}\n\n.TitleField {\n  grid-column: 1 / 3;\n}\n\n.DescriptionField {\n  grid-column: 1 / 3;\n\n  textarea {\n    resize: none;\n    height: 20vh;\n    max-height: 20vh;\n  }\n}\n\n.PriorityField {\n  select {\n    height: 100%;\n    appearance: none;\n    cursor: pointer;\n    background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg)\n        no-repeat right 0.8em center / 1.4em,\n      #212529;\n    /* Remove focus outline */\n    &:focus {\n      outline: none;\n    }\n    /* Remove IE arrow */\n    &::-ms-expand {\n      display: none;\n    }\n  }\n}\n\n.newTitle {\n  padding: 0;\n  margin: 0;\n  padding: calc(1vw + 6px);\n}\n\n.createButton {\n  grid-column: 1/3;\n  width: max-content;\n  justify-self: center;\n}\n",".titleView {\n  padding: 0;\n  margin: 0;\n  user-select: auto;\n  overflow-wrap: break-word;\n  text-align: center;\n  max-width: fit-content;\n  word-break: break-word;\n}\n\n.titleViewContainer {\n  display: flex;\n  justify-content: center;\n  margin: 0 2vw;\n}\n\n.descriptionViewContainer {\n  margin: 0 1vw;\n}\n\n.infoContainer {\n  display: grid;\n  min-width: clamp(250px, 70vh, 1000px);\n  grid-template-rows: 1fr auto max-content auto max-content;\n\n  .separator {\n    height: 1px;\n  }\n\n  hr {\n    width: 90%;\n  }\n}\n\n.dateViewContainer {\n  display: flex;\n  flex-direction: column;\n}\n\nh3 {\n  margin: 0;\n}\n\n.dateStringContainer {\n  display: flex;\n\n  p {\n    margin: 0;\n    font-size: clamp(8px, 1vw, 64px);\n    font-weight: 300;\n  }\n}\n\n.priorityViewContainer {\n  display: flex;\n  flex-direction: column;\n}\n\n.todoDataContainer {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n\n  .priority {\n    border: none;\n    .priorityName {\n      padding-right: 10px;\n    }\n  }\n}\n\n.mainTaskContainer {\n  padding: 0 1vw 1vw 1vw;\n  border-bottom: #15181c 2px solid;\n}\n\n.viewSubContainer {\n  border-top: #464e55 2px solid;\n  padding: 1vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  h1 {\n    padding: 0;\n    margin: 0;\n  }\n}\n\n.descriptionView {\n  max-width: fit-content;\n  overflow-wrap: break-word;\n}\n\n.ButtonsView {\n  border-top: #464e55 2px solid;\n  display: flex;\n  gap: 0.8vw;\n  justify-content: center;\n  width: 100%;\n  padding: 1vw 0;\n  position: sticky;\n  bottom: 0;\n  background-color: #343a40;\n}\n","#projects {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5vw;\n  width: 100%;\n}\n\n.projectContainer {\n  background-color: hsla(200, 7%, 8%, 60%);\n  width: 100%;\n  padding: 0.5vw 0 0.5vw 0.7vw;\n  cursor: pointer;\n  transition: background-color 0.2s ease-out 0s;\n}\n\n.projectContainer:hover {\n  background-color: hsla(200, 7%, 8%, 100%);\n}\n\n#selectedProject {\n  background-color: hsla(200, 7%, 8%, 100%);\n}\n\nbutton {\n  i {\n    margin-right: 0.5vw;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/Component.js":
/*!**********************************!*\
  !*** ./src/modules/Component.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  DOMelement(e, func) {
    let element = new DOMParser().parseFromString(this.view(), "text/html").body
      .firstChild;

    element.addEventListener(e, func);
    return element;
  }

  addListener = (element, event, func) => {
    element.addEventListener(event, func);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);

//make an eventHandler class that assigns event listeners to components


/***/ }),

/***/ "./src/modules/Neros.js":
/*!******************************!*\
  !*** ./src/modules/Neros.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ProjectComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ProjectComponent */ "./src/modules/components/ProjectComponent.js");


class Neros {
  constructor(selector) {
    this.components = {};
    this.NerosElement = document.querySelector(`#${selector}`);
  }

  static projects = new Neros("projects");

  static deleteNerosComponent(neros, component) {
    let components = neros.components;
    delete components[component.name];
    neros.updateView();
    _components_ProjectComponent__WEBPACK_IMPORTED_MODULE_0__["default"].selectLastProject();
  }

  registerComponent(component) {
    this.components[component.name] = component;
    this.updateView();
  }

  updateView() {
    if (this.components) {
      this.NerosElement.innerHTML = "";
      Object.keys(this.components).forEach((key) => {
        this.NerosElement.append(this.components[key].DOMelement());
      });
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neros);


/***/ }),

/***/ "./src/modules/components/DeleteComponent.js":
/*!***************************************************!*\
  !*** ./src/modules/components/DeleteComponent.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteComponent": () => (/* binding */ DeleteComponent)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/modules/Component.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal */ "./src/modules/modal.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project */ "./src/modules/project.js");




class DeleteComponent extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  template = (state) =>
    `
    <div class='deleteContainer'>
      <h1>Are you sure?</h1>
      <div class='buttonsContainer'>
        <button id='cancel'>Go back</button>
        <button id='confirm'>Yes, delete it</button>
      </div>
    </div>
    `;

  DOMelement() {
    let element = super.DOMelement();
    let cancelBtn = element.querySelector("#cancel");
    let confirmBtn = element.querySelector("#confirm");

    cancelBtn.addEventListener("click", () => {
      _modal__WEBPACK_IMPORTED_MODULE_1__["default"].hide();
    });

    confirmBtn.addEventListener("click", () => {
      this.state.todo.deleteTodo(this.state.todo);
      _project__WEBPACK_IMPORTED_MODULE_2__["default"].selected.component.update();
      _modal__WEBPACK_IMPORTED_MODULE_1__["default"].hide();
    });
    return element;
  }
}


/***/ }),

/***/ "./src/modules/components/MiniContainerComponent.js":
/*!**********************************************************!*\
  !*** ./src/modules/components/MiniContainerComponent.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/modules/Component.js");
/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/delete.svg */ "./src/assets/delete.svg");
/* harmony import */ var _assets_edit_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/edit.svg */ "./src/assets/edit.svg");
/* harmony import */ var _assets_checked_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/checked.svg */ "./src/assets/checked.svg");
/* harmony import */ var _assets_unchecked_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/unchecked.svg */ "./src/assets/unchecked.svg");






class MiniContainerComponent extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  template = (state) => `
    <div class="taskMiniContainer ${state.typeClass}">
      ${state.html}
    </div>
  `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiniContainerComponent);


/***/ }),

/***/ "./src/modules/components/NewProjectComponent.js":
/*!*******************************************************!*\
  !*** ./src/modules/components/NewProjectComponent.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewProjectComponent": () => (/* binding */ NewProjectComponent)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/modules/Component.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project */ "./src/modules/project.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal */ "./src/modules/modal.js");
/* harmony import */ var _Neros__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Neros */ "./src/modules/Neros.js");
/* harmony import */ var _ProjectComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectComponent */ "./src/modules/components/ProjectComponent.js");






class NewProjectComponent extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(name) {
    super();
    this.name = name;
  }

  template = () =>
    `
    <div class='newProjectContainer'>
      <h1>Create new Project</h1>
      <form class='newForm'>
        <div class='field TitleField'>
        <label for='Title'>Project Title</label>
        <input type='text' name='Title' id='Title'>
        </div>
        <button class='createButton' type='button'>Create</button>
      </form>
    </div>
  `;

  DOMelement() {
    let element = super.DOMelement();
    let button = element.querySelector("button");
    let form = element.querySelector("form");
    button.addEventListener("click", () => {
      this.createProject(form);
    });
    return element;
  }

  createProject(form) {
    let title = form.Title.value;
    let project = new _project__WEBPACK_IMPORTED_MODULE_1__["default"](title);
    _Neros__WEBPACK_IMPORTED_MODULE_3__["default"].projects.registerComponent(project.component);
    // Select newly created project
    _ProjectComponent__WEBPACK_IMPORTED_MODULE_4__["default"].selectLastProject();
    _modal__WEBPACK_IMPORTED_MODULE_2__["default"].hide();
  }
}


/***/ }),

/***/ "./src/modules/components/NewTodoComponent.js":
/*!****************************************************!*\
  !*** ./src/modules/components/NewTodoComponent.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewTodoComponent": () => (/* binding */ NewTodoComponent)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/modules/Component.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo */ "./src/modules/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project */ "./src/modules/project.js");
/* harmony import */ var _Neros__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Neros */ "./src/modules/Neros.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal */ "./src/modules/modal.js");






class NewTodoComponent extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  template = (state) =>
    `
    <div class='newContainer'>
      <h1 class='newTitle'>Create todo</h1>
      <form class='newForm'>
        <div class='field TitleField'>
          <label for='Title'>Title</label>
          <input type='text' name='Title' id='Title' value="${
            state.todo ? state.todo.title : ""
          }">
        </div>
        <div class='field DuedateField'>
          <label for='Due date'>Due date</label>
          <input type='date' name='Duedate' id='Due date' value="${
            state.todo ? state.todo.date : ""
          }">
        </div>
        <div class='field PriorityField'>
          <label for='Priority'>Priority</label>
          <select name="Priority" id="Priority">
            <option id='p1' value="Urgent">Urgent</option>
            <option id='p2' value="High">High</option>
            <option id='p3' value="Medium">Medium</option>
            <option id='p4' value="Low">Low</option>
            <option id='p5' value="Optional">Optional</option>
          </select>
        </div>
        <div class='field DescriptionField'>
          <label for='Description'>Description</label>
          <input type='text' name='Description' id='Description' value="${
            state.todo ? state.todo.description : ""
          }">
        </div>
        <button class='createButton' type='button'>${
          this.state.todo ? "Edit" : "Create"
        }</button>
      </form>
    </div>
    `;

  DOMelement() {
    let element = super.DOMelement();
    let button = element.querySelector("button");
    let form = element.querySelector("form");
    // If the todo already exists (edit mode) make the button edit the todo, else just create a new task
    if (this.state.todo) {
      let select = element.querySelector(`#Priority`);
      select.selectedIndex = this.state.todo.priority - 1;
      button.addEventListener("click", () => {
        this.editTodo(form);
      });
    } else {
      button.addEventListener("click", () => {
        this.createTodo(form);
      });
    }
    return element;
  }

  editTodo(form) {
    let title = form.Title.value;
    let date = form.Duedate.value;
    let priority = form.Priority.selectedIndex + 1;
    let description = form.Description.value;
    this.state.todo.edit(title, date, priority, description);
    _project__WEBPACK_IMPORTED_MODULE_2__["default"].selected.component.update();
    _modal__WEBPACK_IMPORTED_MODULE_4__["default"].hide();
  }

  createTodo(form) {
    let title = form.Title.value;
    let date = form.Duedate.value;
    let priority = form.Priority.selectedIndex + 1;
    let description = form.Description.value;

    if (this.state.parent) {
      this.state.parent.createTodo(title, date, priority, description, false);
    } else {
      new _todo__WEBPACK_IMPORTED_MODULE_1__["default"](title, date, priority, description, false);
    }
    _project__WEBPACK_IMPORTED_MODULE_2__["default"].selected.component.update();
    _modal__WEBPACK_IMPORTED_MODULE_4__["default"].hide();
  }
}


/***/ }),

/***/ "./src/modules/components/ProjectComponent.js":
/*!****************************************************!*\
  !*** ./src/modules/components/ProjectComponent.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/modules/Component.js");
/* harmony import */ var _Neros__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Neros */ "./src/modules/Neros.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project */ "./src/modules/project.js");
/* harmony import */ var _TodoComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoComponent */ "./src/modules/components/TodoComponent.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper */ "./src/modules/helper.js");






class ProjectComponent extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(name, state) {
    super(name, state);
  }

  static resetView() {
    let pending = document.querySelector("#pendingTodos");
    let completed = document.querySelector("#completedTodos");

    pending.innerHTML = "";
    completed.innerHTML = "";
  }

  // This method selects the last project created
  static selectLastProject() {
    let project = document.querySelectorAll(".projectContainer");
    if (project.length > 0) {
      project[project.length - 1].click();
    } else {
      _project__WEBPACK_IMPORTED_MODULE_2__["default"].selected = null;
      ProjectComponent.resetView();
    }
  }

  template = (state) =>
    `
    <div class="projectContainer">
      <h3>${state.project.name}</h3>
    </div>
    `;

  // This method displays all todos belonging to this project
  displayTodos(selector, projectTodos) {
    const element = new _Neros__WEBPACK_IMPORTED_MODULE_1__["default"](`${selector}Todos`);
    let todos = _helper__WEBPACK_IMPORTED_MODULE_4__["default"].mergeSort(projectTodos);

    if (todos.length > 0) {
      todos = todos.map(
        (task, index) =>
          new _TodoComponent__WEBPACK_IMPORTED_MODULE_3__["default"](`todo${index}`, {
            task: task,
            subtasks: _helper__WEBPACK_IMPORTED_MODULE_4__["default"].mergeSort(task.children),
          })
      );
      todos.forEach((todo) => {
        element.registerComponent(todo);
      });
    } else {
      element.updateView();
    }
  }

  update() {
    this.displayTodos("completed", this.state.project.completed);
    this.displayTodos("pending", this.state.project.pending);
  }

  refreshTodos() {
    let pendingArray = this.state.project.pending;
    let completedArray = this.state.project.completed;
    if (pendingArray.length > 0) this.displayTodos("pending", pendingArray);
    if (completedArray.length > 0)
      this.displayTodos("completed", completedArray);
  }

  DOMelement() {
    return super.DOMelement("click", (e) => {
      this.handleID(e.currentTarget);
      _project__WEBPACK_IMPORTED_MODULE_2__["default"].selected = this.state.project;
      // Reset the board before displaying this project todos
      ProjectComponent.resetView();
      this.refreshTodos();
    });
  }

  // This method removes the id from the previous element and assigns it to the clicked element
  handleID(target) {
    let selected = document.querySelector("#selectedProject");
    if (selected) selected.id = "";
    target.id = "selectedProject";
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectComponent);


/***/ }),

/***/ "./src/modules/components/TaskComponent.js":
/*!*************************************************!*\
  !*** ./src/modules/components/TaskComponent.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/modules/Component.js");
/* harmony import */ var _MiniContainerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MiniContainerComponent */ "./src/modules/components/MiniContainerComponent.js");
/* harmony import */ var _priority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../priority */ "./src/modules/priority.js");
/* harmony import */ var _viewTodoComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewTodoComponent */ "./src/modules/components/viewTodoComponent.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal */ "./src/modules/modal.js");
/* harmony import */ var _NewTodoComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NewTodoComponent */ "./src/modules/components/NewTodoComponent.js");
/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/delete.svg */ "./src/assets/delete.svg");
/* harmony import */ var _assets_edit_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/edit.svg */ "./src/assets/edit.svg");
/* harmony import */ var _assets_checked_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/checked.svg */ "./src/assets/checked.svg");
/* harmony import */ var _assets_unchecked_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/unchecked.svg */ "./src/assets/unchecked.svg");
/* harmony import */ var _DeleteComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DeleteComponent */ "./src/modules/components/DeleteComponent.js");












// 1.- If a big todo is checked, its children are also checked ✔️
// 2.- If all the subtodos are checked, the parent is also checked ✔️
// 3.- If a big todo and its children are checked, but one of the children
// is unchecked, the parent todo will also be unchecked ✔️
// 4.- If a big todo and its children are checked, but the parent is unchecked,
// all its children will also be unchecked ✔️

class TaskComponent extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(name, state) {
    super(name, state);
    // Create the priority color html and color, I should put this into its own class
    this.colorHTML = (priority) =>
      `<div class="priorityColor" style="background-color: ${priority.color}"></div>`;
    this.colorMini = new _MiniContainerComponent__WEBPACK_IMPORTED_MODULE_1__["default"]("priority", {
      html: this.colorHTML(_priority__WEBPACK_IMPORTED_MODULE_2__["default"].priority(state.todo.priority)),
      typeClass: "priorityButtonMini",
    });
    this.state.todo.component = this;
    // If this todo is checked, the dom element will have the class "completedTask"
    if (this.state.todo.check) this.state.classes.push("completedTask");
  }

  // Create all the static buttons needed for a task, these aren't dynamic since all tasks have the same buttons
  static imgHTML = (actionSVG) => `<img class="taskButton" src=${actionSVG}>`;
  static editMini = new _MiniContainerComponent__WEBPACK_IMPORTED_MODULE_1__["default"]("edit", {
    html: TaskComponent.imgHTML(_assets_edit_svg__WEBPACK_IMPORTED_MODULE_7__),
    typeClass: "editButtonMini",
  });
  static deleteMini = new _MiniContainerComponent__WEBPACK_IMPORTED_MODULE_1__["default"]("delete", {
    html: TaskComponent.imgHTML(_assets_delete_svg__WEBPACK_IMPORTED_MODULE_6__),
    typeClass: "deleteButtonMini",
  });

  // Return a miniContainer with the corresponding svg file, checked if todo isChecked
  // property is true, unchecked otherwise.
  checkMini = () => {
    return new _MiniContainerComponent__WEBPACK_IMPORTED_MODULE_1__["default"]("check", {
      html: TaskComponent.imgHTML(this.checkState()),
      typeClass: "checkButtonMini",
    });
  };

  // This method checks the state of the isChecked property from todos
  checkState = () => {
    return this.state.todo.check ? _assets_checked_svg__WEBPACK_IMPORTED_MODULE_8__ : _assets_unchecked_svg__WEBPACK_IMPORTED_MODULE_9__;
  };

  template = (state) =>
    `
    <div class="${state.classes.join(" ")}">
      <div class="taskDataContainer">
        <div class="taskTitle">
          <p>${state.todo.title}</p>
        </div>
        <div class="taskTime">
          <p>5 days left</p>
        </div>
      </div>
    </div>
  `;

  DOMelement() {
    let element = super.DOMelement();
    this.viewEventListener(element);
    let check = this.checkMini().DOMelement(
      "click",
      this.eventHandler().checkButton
    );
    let priority = this.colorMini.DOMelement(
      "click",
      this.eventHandler().priorityButton
    );
    let edit = TaskComponent.editMini.DOMelement(
      "click",
      this.eventHandler().editButton
    );
    let deleteBtn = TaskComponent.deleteMini.DOMelement(
      "click",
      this.eventHandler().deleteButton
    );

    element.prepend(priority);
    element.prepend(check);
    element.append(edit);
    element.append(deleteBtn);
    this.state.todo.domElement = element;
    return element;
  }

  viewEventListener(element) {
    let innerContainer = element.querySelector(".taskDataContainer");
    innerContainer.addEventListener("click", this.eventHandler().viewButton);
  }

  checkChildren() {
    this.state.todo.children.forEach((subtask) => {
      subtask.checkTodo();
    });
  }

  uncheckChildren() {
    this.state.todo.children.forEach((subtask) => {
      subtask.uncheckTodo();
    });
  }

  checkParent() {
    let parent = this.state.todo.parent;
    parent.checkTodo();
  }

  uncheckParent() {
    let parent = this.state.todo.parent;
    parent.uncheckTodo();
  }

  //Check if the subtasks array contains only completed tasks
  areSubtasksCompleted() {
    if (this.state.todo.isSubtask()) {
      let subtasks = this.state.todo.parent.children;
      return subtasks.every((subtask) => subtask.check);
    }
    return false;
  }

  eventHandler = () => {
    return {
      checkButton: () => {
        if (this.state.todo.check) {
          // If the big todo is completed and a subtask is unchecked, the big
          // todo is unchecked
          if (this.areSubtasksCompleted() && this.state.todo.isSubtask())
            this.uncheckParent();
          this.state.todo.uncheckTodo();
          // If the big todo is unchecked, mark all its children unchecked
          if (this.state.todo.children) this.uncheckChildren();
        } else {
          this.state.todo.checkTodo();
          // If all the substasks are completed, mark checked the big todo
          if (this.areSubtasksCompleted() && this.state.todo.isSubtask())
            this.checkParent();
          // If the big todo is checked, mark all its children checked
          if (this.state.todo.children) this.checkChildren();
        }
      },
      priorityButton: () => {
        console.log("The priority button was pressed", this.state);
      },
      viewButton: () => {
        let component = new _viewTodoComponent__WEBPACK_IMPORTED_MODULE_3__.viewTodoComponent("taskView", {
          todo: this.state.todo,
        });
        _modal__WEBPACK_IMPORTED_MODULE_4__["default"].show(component);
      },
      editButton: () => {
        let component = new _NewTodoComponent__WEBPACK_IMPORTED_MODULE_5__.NewTodoComponent("taskEdit", {
          todo: this.state.todo,
        });
        _modal__WEBPACK_IMPORTED_MODULE_4__["default"].show(component);
      },
      deleteButton: () => {
        let component = new _DeleteComponent__WEBPACK_IMPORTED_MODULE_10__.DeleteComponent("delete", {
          todo: this.state.todo,
        });
        _modal__WEBPACK_IMPORTED_MODULE_4__["default"].show(component);
      },
    };
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskComponent);


/***/ }),

/***/ "./src/modules/components/TodoComponent.js":
/*!*************************************************!*\
  !*** ./src/modules/components/TodoComponent.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/modules/Component.js");
/* harmony import */ var _Neros__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Neros */ "./src/modules/Neros.js");
/* harmony import */ var _TaskComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskComponent */ "./src/modules/components/TaskComponent.js");
/* harmony import */ var _NewTodoComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewTodoComponent */ "./src/modules/components/NewTodoComponent.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal */ "./src/modules/modal.js");







class TodoComponent extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static moveToCompleted(element) {
    let completed = document.querySelector("#completedTodos");
    completed.append(element.parentElement);
  }

  static moveToPending(element) {
    let pending = document.querySelector("#pendingTodos");
    pending.append(element.parentElement);
  }

  constructor(name, state) {
    super(name, state);
    this.createTaskComponents();
  }

  template = (state) =>
    `
    <div class="taskContainer">
      <div class="subtasksContainer">
        <button class='addSubtask'>+ Add Subtask</button>
      </div>
    </div>
  `;

  // This method takes the state tasks and subtasks and converts them into TaskComponents,
  // then assign those components to be the new values for state tasks and subtasks.
  createTaskComponents() {
    // I don't know if this should go here, but all this does is convert the todo object
    // in the state object and turn it into a taskComponent, ready to be used.
    this.state.taskDOM = new _TaskComponent__WEBPACK_IMPORTED_MODULE_2__["default"]("task", {
      todo: this.state.task,
      classes: ["task"],
    }).DOMelement();
    // This takes the children array and applies the same process above to each task
    this.state.subtasksDOM = this.state.subtasks.map((task) =>
      new _TaskComponent__WEBPACK_IMPORTED_MODULE_2__["default"]("subtask", {
        todo: task,
        classes: ["task", "subtask"],
      }).DOMelement()
    );
  }

  // This method takes the button element and adds the event listener to create a subtask
  addSubtask(button) {
    button.addEventListener("click", () => {
      this.showModal(this.state.task);
    });
  }

  DOMelement() {
    let element = super.DOMelement();
    let subtask = element.querySelector(".subtasksContainer");
    let button = element.querySelector(".addSubtask");
    this.addSubtask(button);

    element.prepend(this.state.taskDOM);
    this.state.subtasksDOM.forEach((task) => {
      subtask.insertBefore(task, button);
    });
    return element;
  }

  showModal(parent) {
    let newTodo = new _NewTodoComponent__WEBPACK_IMPORTED_MODULE_3__.NewTodoComponent("newTodo", { parent: parent });
    _modal__WEBPACK_IMPORTED_MODULE_4__["default"].show(newTodo);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoComponent);


/***/ }),

/***/ "./src/modules/components/viewTodoComponent.js":
/*!*****************************************************!*\
  !*** ./src/modules/components/viewTodoComponent.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "viewTodoComponent": () => (/* binding */ viewTodoComponent)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/modules/Component.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal */ "./src/modules/modal.js");
/* harmony import */ var _TaskComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskComponent */ "./src/modules/components/TaskComponent.js");




class viewTodoComponent extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  template = (state) =>
    `
    <div class='infoContainer'>
      <div class='mainTaskContainer'>
        <h1 class='viewTitle'>${state.todo.title}</h1>
        <hr>
        <div class='descriptionViewContainer'>
          <p class='viewDescription'>${state.todo.description}</p>
        </div>
        <div class='todoDataContainer'>
          <div class='dateViewContainer'>
            <h3>Due date</h3>
            <div class='dateStringContainer'>
              <p class='dateView'>01/01/2023</p>
              <p class='timeLeftView'>(4 days left)</p>
            </div>
          </div>
          <div class='priorityViewContainer'>
            <h3>Priority</h3>
          </div>
        </div>
      </div>
      <div class='separator'></div>
      <div class='viewSubContainer'>
        <h1 class='linkedTaskHeader'>${
          state.todo.isSubtask() ? "Parent" : "Subtasks"
        }</h1>
        <div class='linkedTasksContainer'>
        </div>
      </div>
    </div>
  `;

  DOMelement() {
    let element = super.DOMelement();
    let subtaskContainer = element.querySelector(".linkedTasksContainer");
    if (!this.state.todo.isSubtask()) {
      this.state.todo.children.forEach((task) => {
        let taskDOM = new _TaskComponent__WEBPACK_IMPORTED_MODULE_2__["default"]("subtask", {
          todo: task,
          classes: ["task", "subtask"],
        }).DOMelement();
        subtaskContainer.append(taskDOM);
      });
    } else {
      let parentDOM = new _TaskComponent__WEBPACK_IMPORTED_MODULE_2__["default"]("todo", {
        todo: this.state.todo.parent,
        classes: ["task subtask"],
      }).DOMelement();
      subtaskContainer.append(parentDOM);
    }
    return element;
  }

  linkedTasks() {}
}


/***/ }),

/***/ "./src/modules/helper.js":
/*!*******************************!*\
  !*** ./src/modules/helper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _components_ProjectComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProjectComponent */ "./src/modules/components/ProjectComponent.js");
/* harmony import */ var _Neros__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Neros */ "./src/modules/Neros.js");





const helper = (() => {
  // This method finds the element matching the ID on the given array and deletes it by index
  const deleteItem = (array, id) => {
    let found = findTask([...array], id);
    let foundIndex = array.indexOf(found);
    foundIndex === 0 ? array.shift() : array.splice(foundIndex, 1);
    return found;
  };

  // Given an array of todos and an id, this method will recursively find the todo
  const findTask = (queue, id) => {
    let current = queue[0];
    if (current.id === id) return current;
    queue.shift();

    if (!current.isSubtask()) queue = [...queue, ...current.children];
    return findTask(queue, id);
  };

  // Merge sort algorithm

  const mergeSort = (array) => {
    if (array.length < 1) return array;
    let sortedArray = [];
    if (array.length < 2) {
      sortedArray.push(array[0]);
    } else {
      let half = Math.floor(array.length / 2);
      let array1 = mergeSort(array.splice(0, half));
      let array2 = mergeSort(array);
      let counter = array1.length + array2.length;
      for (let index = 0; index < counter; index++) {
        if (array1.length === 0 || array2.length === 0) {
          sortedArray = sortedArray.concat(array1.concat(array2));
          break;
        }
        if (array1[0].priority < array2[0].priority) {
          sortedArray.push(array1.shift());
        } else {
          sortedArray.push(array2.shift());
        }
      }
    }
    return sortedArray;
  };

  // Add event listener to 'clear completed' button, this shouldn't be here but
  // I don't think it's worth creating a new module just for this.
  let clear = document.querySelector("#clearCompleted");
  clear.addEventListener("click", () => {
    let project = _project__WEBPACK_IMPORTED_MODULE_0__["default"].selected;
    let projectComponent = project.component;

    _components_ProjectComponent__WEBPACK_IMPORTED_MODULE_1__["default"].resetView();
    project.clearCompletedTodos();
    projectComponent.displayTodos("completed", project.completed);
    projectComponent.displayTodos("pending", project.pending);
  });

  // Add event listener to 'Delete this project' button
  let deleteProjectBtn = document.querySelector("#deleteProject");
  deleteProjectBtn.addEventListener("click", () => {
    _Neros__WEBPACK_IMPORTED_MODULE_2__["default"].deleteNerosComponent(_Neros__WEBPACK_IMPORTED_MODULE_2__["default"].projects, _project__WEBPACK_IMPORTED_MODULE_0__["default"].selected.component);
  });

  return { deleteItem, findTask, mergeSort };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helper);


/***/ }),

/***/ "./src/modules/idAssigner.js":
/*!***********************************!*\
  !*** ./src/modules/idAssigner.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const idAssigner = (() => {
  let assigner = 1;

  const getIdNumber = () => {
    assigner += 1;
    return assigner - 1;
  };

  return { getIdNumber };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (idAssigner);


/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Neros__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Neros */ "./src/modules/Neros.js");
/* harmony import */ var _components_NewTodoComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/NewTodoComponent */ "./src/modules/components/NewTodoComponent.js");
/* harmony import */ var _components_NewProjectComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/NewProjectComponent */ "./src/modules/components/NewProjectComponent.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");





const modal = (() => {
  let modalElement = document.querySelector("#modal");
  let modalContainer = document.querySelector("#modalContainer");
  let addTodoBtn = document.querySelector("#addBigTodo");
  let addProjectBtn = document.querySelector("#addProject");

  const hide = () => {
    modalElement.classList.add("hidden");
    resetModal();
  };

  const show = (component) => {
    let modal = new _Neros__WEBPACK_IMPORTED_MODULE_0__["default"]("modalContainer");
    modal.registerComponent(component);
    modalElement.classList.remove("hidden");
  };

  const resetModal = () => {
    modalContainer.innerHTML = "";
  };

  // Hide modal when the user clicks outside
  modalElement.addEventListener("mousedown", (e) => {
    if (e.target === modalElement) {
      hide();
    }
  });

  // Show modal with new todo form when the 'add new todo' button is clicked
  addTodoBtn.addEventListener("click", () => {
    let newTodo = new _components_NewTodoComponent__WEBPACK_IMPORTED_MODULE_1__.NewTodoComponent("newTodo", { parent: null });
    if (_project__WEBPACK_IMPORTED_MODULE_3__["default"].selected !== null) {
      show(newTodo);
    }
  });

  // Add event listener to 'Add new project' button

  addProjectBtn.addEventListener("click", () => {
    let newProject = new _components_NewProjectComponent__WEBPACK_IMPORTED_MODULE_2__.NewProjectComponent("newProject");

    show(newProject);
  });

  // Add view event listener to tasks

  return {
    hide,
    show,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./src/modules/priority.js":
/*!*********************************!*\
  !*** ./src/modules/priority.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Priority {
  #name;
  #number;
  color;

  static #prioritiesArray = [
    new Priority("Urgent", 1, "#E81616"),
    new Priority("High", 2, "#EF5513"),
    new Priority("Medium", 3, "#F3DD11"),
    new Priority("Low", 4, "#22C51F"),
    new Priority("Optional", 5, "#2336E0"),
  ];

  static get priorities() {
    return [...Priority.#prioritiesArray];
  }

  static priority(number) {
    return Priority.#prioritiesArray[number - 1];
  }

  constructor(name, number, color) {
    this.#name = name;
    this.#number = number;
    this.color = color;
  }

  get name() {
    return this.#name;
  }

  get number() {
    return this.#number;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Priority);


/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/modules/helper.js");
/* harmony import */ var _components_ProjectComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProjectComponent */ "./src/modules/components/ProjectComponent.js");
/* 1.- If a todo's is a parent, they get added to the pending tasks when created
   2.- Sort the pending tasks array by priority, and sort the children array by priority as well */



class Project {
  #pendingTasks;
  #completedTasks;

  static selected;

  constructor(name) {
    this.name = name;
    this.component = new _components_ProjectComponent__WEBPACK_IMPORTED_MODULE_1__["default"](name, { project: this });
    this.#pendingTasks = [];
    this.#completedTasks = [];
  }

  get pending() {
    return [...this.#pendingTasks];
  }

  get completed() {
    return [...this.#completedTasks];
  }

  addPending(item) {
    this.#pendingTasks.push(item);
  }

  addCompleted(item) {
    this.#completedTasks.push(item);
  }

  completeTodo(id) {
    let task = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].deleteItem(this.#pendingTasks, id);
    this.addCompleted(task);
  }

  resumeTodo(id) {
    let task = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].deleteItem(this.#completedTasks, id);
    this.addPending(task);
  }

  clearCompletedTodos() {
    this.#completedTasks = [];
  }

  deleteTodo(task) {
    if (this.#pendingTasks.includes(task)) {
      let taskIndex = this.#pendingTasks.indexOf(task);
      taskIndex === 0
        ? this.#pendingTasks.shift()
        : this.#pendingTasks.splice(taskIndex, taskIndex);
    } else {
      let taskIndex = this.#completedTasks.indexOf(task);
      taskIndex === 0
        ? this.#completedTasks.shift()
        : this.#completedTasks.splice(taskIndex, taskIndex);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/modules/helper.js");
/* harmony import */ var _idAssigner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./idAssigner */ "./src/modules/idAssigner.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _components_TodoComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TodoComponent */ "./src/modules/components/TodoComponent.js");
/* harmony import */ var _assets_checked_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/checked.svg */ "./src/assets/checked.svg");
/* harmony import */ var _assets_unchecked_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/unchecked.svg */ "./src/assets/unchecked.svg");







/* 1.- Be able to create and delete todo's ✔️
   2.- If a todo's is a parent, they get added to the pending tasks when created ✔️
   3.- If a parent todo is deleted, all it's children are deleted as well ✔️
   4.- Only parent's todo will be added to the completed tasks array, if a parent todo is checked, all it's children will be ✔️
   5.- Sort the pending tasks array by priority, and sort the children array by priority as well */

class Todo {
  #parent;
  #children;
  #id;
  #isChecked;
  #project;

  constructor(title, date, priority, description, isChecked, parent = null) {
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.description = description;
    this.#isChecked = isChecked;
    this.#id = _idAssigner__WEBPACK_IMPORTED_MODULE_1__["default"].getIdNumber();
    this.#parent = parent;
    this.#project = _project__WEBPACK_IMPORTED_MODULE_2__["default"].selected;
    this.component = null;
    this.domElement = null;
    if (this.#parent === null) {
      this.#children = [];
      // If the todo is already checked add it to the completed tasks array
      // of the parent project
      this.check
        ? _project__WEBPACK_IMPORTED_MODULE_2__["default"].selected.addCompleted(this)
        : _project__WEBPACK_IMPORTED_MODULE_2__["default"].selected.addPending(this);
    } else {
      this.#children = false;
    }
  }

  createTodo(title, date, priority, description, isChecked) {
    let a = new Todo(title, date, priority, description, isChecked, this);
    this.#children.push(a);
    return a;
  }

  edit(title, date, priority, description) {
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.description = description;
  }

  get id() {
    return this.#id;
  }

  get children() {
    if (this.#children) return [...this.#children];
    return this.#children;
  }

  get parent() {
    return this.#parent;
  }

  toggleCheck() {
    if (this.#isChecked) {
      this.uncheckTodo();
    } else {
      this.checkTodo();
    }
  }

  uncheckTodo() {
    let element = this.domElement;
    let img =
      this.domElement.querySelector(".checkButtonMini").firstElementChild;
    this.#isChecked = false;
    element.classList.remove("completedTask");
    img.src = _assets_unchecked_svg__WEBPACK_IMPORTED_MODULE_5__;
    if (this.#parent === null) {
      _components_TodoComponent__WEBPACK_IMPORTED_MODULE_3__["default"].moveToPending(element);
      this.project.resumeTodo(this.id);
      this.project.component.refreshTodos();
    }
  }

  checkTodo() {
    let element = this.domElement;
    let img =
      this.domElement.querySelector(".checkButtonMini").firstElementChild;
    this.#isChecked = true;
    element.classList.add("completedTask");
    img.src = _assets_checked_svg__WEBPACK_IMPORTED_MODULE_4__;
    if (this.#parent === null) {
      _components_TodoComponent__WEBPACK_IMPORTED_MODULE_3__["default"].moveToCompleted(element);
      this.project.completeTodo(this.id);
      this.project.component.refreshTodos();
    }
  }

  deleteTodo(task) {
    if (this.isSubtask()) {
      this.parent.delete(task);
    } else {
      this.project.deleteTodo(task);
    }
  }

  delete(task) {
    let taskIndex = this.#children.indexOf(task);
    taskIndex === 0
      ? this.#children.shift()
      : this.#children.splice(taskIndex, 1);
  }

  get project() {
    return this.#project;
  }

  get check() {
    return this.#isChecked;
  }

  isSubtask() {
    return this.#parent !== null;
  }

  #recursiveCheck(array, index = 0) {
    if (array[index] && array[index].check === false) {
      array[index].toggleCheck();
      return this.#recursiveCheck(array, index + 1);
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ }),

/***/ "./src/assets/checked.svg":
/*!********************************!*\
  !*** ./src/assets/checked.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13fe868c99160d0dc70b.svg";

/***/ }),

/***/ "./src/assets/delete.svg":
/*!*******************************!*\
  !*** ./src/assets/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1ffb3ea23957c7de34d.svg";

/***/ }),

/***/ "./src/assets/edit.svg":
/*!*****************************!*\
  !*** ./src/assets/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7210ef4044e200b17d41.svg";

/***/ }),

/***/ "./src/assets/unchecked.svg":
/*!**********************************!*\
  !*** ./src/assets/unchecked.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c6a26ceb0a272936039.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.scss */ "./src/style/main.scss");
/* harmony import */ var _modules_Neros__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Neros */ "./src/modules/Neros.js");
/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todo */ "./src/modules/todo.js");
/* harmony import */ var _modules_components_TaskComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/components/TaskComponent */ "./src/modules/components/TaskComponent.js");
/* harmony import */ var _modules_components_TodoComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/components/TodoComponent */ "./src/modules/components/TodoComponent.js");
/* harmony import */ var _modules_components_ProjectComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/components/ProjectComponent */ "./src/modules/components/ProjectComponent.js");
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");
/* harmony import */ var _modules_components_NewTodoComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/components/NewTodoComponent */ "./src/modules/components/NewTodoComponent.js");
/* harmony import */ var _modules_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/helper */ "./src/modules/helper.js");
//Import statements










//Initialize modules
const project = new _modules_project__WEBPACK_IMPORTED_MODULE_6__["default"]("Big project");
_modules_project__WEBPACK_IMPORTED_MODULE_6__["default"].selected = project;
const projectModule = _modules_Neros__WEBPACK_IMPORTED_MODULE_1__["default"].projects;

let todo1 = new _modules_todo__WEBPACK_IMPORTED_MODULE_2__["default"](
  "First OOP todo",
  "24-05-2023",
  4,
  "This is a todo made with OOP principles",
  false
);

todo1.createTodo(
  "first of First OOP todo",
  "24-05-2023",
  2,
  "This is a todo made with OOP principles 1",
  false
);

todo1.createTodo(
  "second of First OOP todo",
  "24-05-2023",
  5,
  "This is a todo made with OOP principles 2",
  false
);

const project2 = new _modules_project__WEBPACK_IMPORTED_MODULE_6__["default"]("Second big project");
// Project.selected = project2;

let todo2 = new _modules_todo__WEBPACK_IMPORTED_MODULE_2__["default"](
  "second OOP todo",
  "24-05-2023",
  1,
  "This is a todo made with OOP principles",
  false
);

todo2.createTodo(
  "first of second OOP todo",
  "24-05-2023",
  4,
  "This is a todo made with OOP principles 1",
  false
);

todo2.createTodo(
  "second of second OOP todo",
  "24-05-2023",
  1,
  "This is a todo made with OOP principles 2",
  false
);

todo2.createTodo(
  "second of second OOP todo",
  "24-05-2023",
  3,
  "This is a todo made with OOP principles 2",
  false
);

todo2.createTodo(
  "second of second OOP todo",
  "24-05-2023",
  2,
  "This is a todo made with OOP principles 2",
  false
);

todo2.createTodo(
  "second of second OOP todo",
  "24-05-2023",
  5,
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esc0RBQXNELDhCQUE4QixnQkFBZ0IsbUJBQW1CLG9CQUFvQixhQUFhLGNBQWMscUNBQXFDLGtCQUFrQix3REFBd0QsK0NBQStDLHdCQUF3QixrQ0FBa0MsbUNBQW1DLEdBQUcsZ0JBQWdCLDhCQUE4QixHQUFHLGtCQUFrQixrQkFBa0IsZ0RBQWdELEdBQUcsY0FBYyxxQkFBcUIscUNBQXFDLG1DQUFtQyxrQkFBa0IscUJBQXFCLG9EQUFvRCxHQUFHLGdCQUFnQixxQkFBcUIsa0NBQWtDLG1DQUFtQyxrQkFBa0Isd0NBQXdDLEdBQUcsK0JBQStCLGdCQUFnQixrQkFBa0IsbUJBQW1CLGlDQUFpQyxtQkFBbUIsdUJBQXVCLEtBQUssZ0JBQWdCLG9CQUFvQixLQUFLLGNBQWMsd0JBQXdCLEtBQUssR0FBRyxZQUFZLG9DQUFvQyxrQkFBa0IsMkJBQTJCLHdCQUF3QixHQUFHLG1CQUFtQix1QkFBdUIscUNBQXFDLGNBQWMscUJBQXFCLHVCQUF1Qix5QkFBeUIsR0FBRyw2QkFBNkIsOEJBQThCLDhDQUE4QywrQkFBK0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxvQkFBb0IsdUJBQXVCLDhDQUE4Qyw2Q0FBNkMsK0NBQStDLEdBQUcsZUFBZSw4QkFBOEIsa0NBQWtDLGtCQUFrQix3QkFBd0IscUJBQXFCLCtDQUErQyxHQUFHLGlCQUFpQiwwQ0FBMEMsa0JBQWtCLDJCQUEyQixpQ0FBaUMsNENBQTRDLEdBQUcsNENBQTRDLDhDQUE4Qyw2Q0FBNkMsR0FBRywrQkFBK0IsY0FBYyxvQkFBb0IsS0FBSyxHQUFHLG1CQUFtQixrQkFBa0IsMkJBQTJCLGVBQWUsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQix3QkFBd0Isb0JBQW9CLHVCQUF1QixHQUFHLG9CQUFvQixnQkFBZ0Isa0JBQWtCLDJCQUEyQiwwQ0FBMEMsR0FBRyxXQUFXLGtCQUFrQiw4QkFBOEIsZ0JBQWdCLDJCQUEyQix3QkFBd0IscUJBQXFCLGtDQUFrQywrQ0FBK0MsbUNBQW1DLHFDQUFxQyxHQUFHLHdCQUF3Qiw4QkFBOEIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsOENBQThDLG9CQUFvQixzQkFBc0IsR0FBRyxnQkFBZ0IsOENBQThDLDZDQUE2Qyw4QkFBOEIsdUJBQXVCLCtDQUErQyxHQUFHLGlCQUFpQiw4Q0FBOEMsNkNBQTZDLEdBQUcsaURBQWlELCtCQUErQixHQUFHLHdDQUF3QywrQkFBK0IsR0FBRyxlQUFlLG1DQUFtQyx3QkFBd0IsR0FBRyxlQUFlLHdCQUF3QixtQkFBbUIsR0FBRyxnQkFBZ0IsdUJBQXVCLFlBQVksdUJBQXVCLDZDQUE2QyxHQUFHLGdCQUFnQixxQkFBcUIsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix5QkFBeUIsdUJBQXVCLEdBQUcsOEJBQThCLGdEQUFnRCxjQUFjLEdBQUcsd0JBQXdCLGtCQUFrQiwyQkFBMkIsMEJBQTBCLHlCQUF5QixlQUFlLEdBQUcsY0FBYyxxQ0FBcUMsR0FBRywrQkFBK0IsOENBQThDLEdBQUcsMkNBQTJDLDhDQUE4Qyw2Q0FBNkMsR0FBRywwQ0FBMEMsNkNBQTZDLDhDQUE4QyxHQUFHLGdEQUFnRCxnREFBZ0QsR0FBRyxvQkFBb0Isa0NBQWtDLGlCQUFpQixpQkFBaUIsNEZBQTRGLEdBQUcsd0JBQXdCLGtCQUFrQixtQ0FBbUMsZ0JBQWdCLGNBQWMsb0JBQW9CLEdBQUcsaUJBQWlCLHNCQUFzQiwyQkFBMkIsR0FBRyxrRUFBa0Usa0JBQWtCLEdBQUcsWUFBWSxnREFBZ0QsK0JBQStCLGdCQUFnQixpQkFBaUIsdUJBQXVCLGVBQWUsWUFBWSxhQUFhLFdBQVcsY0FBYyxpQkFBaUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxxQkFBcUIsOEJBQThCLCtDQUErQywyQkFBMkIsd0JBQXdCLHVCQUF1Qix3QkFBd0IscUJBQXFCLHVCQUF1Qix1QkFBdUIsR0FBRyxrQkFBa0IscUJBQXFCLGFBQWEsY0FBYyxrQkFBa0IsaUJBQWlCLGVBQWUsR0FBRyx3QkFBd0Isb0JBQW9CLEdBQUcsUUFBUSwyQkFBMkIsZ0JBQWdCLGlCQUFpQixHQUFHLFlBQVksa0JBQWtCLDJCQUEyQixlQUFlLEdBQUcsZ0JBQWdCLCtCQUErQixHQUFHLGtEQUFrRCxpQ0FBaUMsaUJBQWlCLGtCQUFrQix3QkFBd0IsNEZBQTRGLCtCQUErQix5QkFBeUIsbUJBQW1CLEdBQUcseUJBQXlCLGlDQUFpQyxHQUFHLHFEQUFxRCxpQkFBaUIsb0JBQW9CLHVCQUF1QixzQkFBc0IsR0FBRyxjQUFjLG9CQUFvQiwrREFBK0Qsa0JBQWtCLDJDQUEyQywyQkFBMkIsR0FBRyxpQkFBaUIscUJBQXFCLEdBQUcsdUJBQXVCLHFCQUFxQixHQUFHLDhCQUE4QixpQkFBaUIsaUJBQWlCLHFCQUFxQixHQUFHLDJCQUEyQixpQkFBaUIscUJBQXFCLG9CQUFvQixnS0FBZ0ssMERBQTBELCtCQUErQixrQkFBa0IsR0FBRyxxQ0FBcUMsa0JBQWtCLEdBQUcsZUFBZSxlQUFlLGNBQWMsNkJBQTZCLEdBQUcsbUJBQW1CLHFCQUFxQix1QkFBdUIseUJBQXlCLEdBQUcsZ0JBQWdCLGVBQWUsY0FBYyxzQkFBc0IsOEJBQThCLHVCQUF1QiwyQkFBMkIsMkJBQTJCLEdBQUcseUJBQXlCLGtCQUFrQiw0QkFBNEIsa0JBQWtCLEdBQUcsK0JBQStCLGtCQUFrQixHQUFHLG9CQUFvQixrQkFBa0IsMENBQTBDLDhEQUE4RCxHQUFHLDZCQUE2QixnQkFBZ0IsR0FBRyxxQkFBcUIsZUFBZSxHQUFHLHdCQUF3QixrQkFBa0IsMkJBQTJCLEdBQUcsUUFBUSxjQUFjLEdBQUcsMEJBQTBCLGtCQUFrQixHQUFHLDBCQUEwQixjQUFjLHFDQUFxQyxxQkFBcUIsR0FBRyw0QkFBNEIsa0JBQWtCLDJCQUEyQixHQUFHLHdCQUF3QixrQkFBa0Isa0NBQWtDLHdCQUF3QixHQUFHLGdDQUFnQyxpQkFBaUIsR0FBRyw4Q0FBOEMsd0JBQXdCLEdBQUcsd0JBQXdCLDJCQUEyQixxQ0FBcUMsR0FBRyx1QkFBdUIsa0NBQWtDLGlCQUFpQixrQkFBa0IsMkJBQTJCLHdCQUF3QixHQUFHLHdCQUF3QixlQUFlLGNBQWMsR0FBRyxzQkFBc0IsMkJBQTJCLDhCQUE4QixHQUFHLGtCQUFrQixrQ0FBa0Msa0JBQWtCLGVBQWUsNEJBQTRCLGdCQUFnQixtQkFBbUIscUJBQXFCLGNBQWMsOEJBQThCLEdBQUcsZUFBZSxrQkFBa0IsMkJBQTJCLHdCQUF3QixlQUFlLGdCQUFnQixHQUFHLHVCQUF1QixnREFBZ0QsZ0JBQWdCLGlDQUFpQyxvQkFBb0Isa0RBQWtELEdBQUcsNkJBQTZCLDBDQUEwQyxHQUFHLHNCQUFzQiwwQ0FBMEMsR0FBRyxjQUFjLHdCQUF3QixHQUFHLFVBQVUsb0JBQW9CLHlDQUF5QyxtQkFBbUIsR0FBRyxVQUFVLHlFQUF5RSxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLFFBQVEsdUJBQXVCLHFCQUFxQixlQUFlLG9CQUFvQixzQkFBc0IsR0FBRyxtQkFBbUIsbUJBQW1CLHFCQUFxQixlQUFlLGNBQWMsR0FBRyxhQUFhLGtCQUFrQixHQUFHLFlBQVksd0JBQXdCLDBFQUEwRSx1QkFBdUIsa0JBQWtCLGlCQUFpQixtQkFBbUIsc0JBQXNCLHFCQUFxQixxQkFBcUIseUNBQXlDLG9CQUFvQixHQUFHLG1CQUFtQixvQ0FBb0Msc0ZBQXNGLEdBQUcsaUJBQWlCLGtDQUFrQyxxRkFBcUYsR0FBRyxPQUFPLDhWQUE4VixXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxhQUFhLGVBQWUsYUFBYSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sYUFBYSxlQUFlLFFBQVEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sYUFBYSxlQUFlLGFBQWEsV0FBVyxXQUFXLE9BQU8sTUFBTSxhQUFhLGVBQWUsUUFBUSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE1BQU0sT0FBTyxhQUFhLFlBQVksT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sYUFBYSxlQUFlLE9BQU8sTUFBTSxhQUFhLGVBQWUsT0FBTyxPQUFPLGFBQWEsUUFBUSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sUUFBUSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFFBQVEsT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsdUNBQXVDLDhCQUE4QixnQkFBZ0IsbUJBQW1CLG9CQUFvQixhQUFhLGNBQWMscUNBQXFDLGtCQUFrQix3REFBd0QsK0NBQStDLHdCQUF3QixrQ0FBa0MsbUNBQW1DLEdBQUcsZ0JBQWdCLDhCQUE4QixHQUFHLGtCQUFrQixrQkFBa0IsZ0RBQWdELEdBQUcsY0FBYyxxQkFBcUIscUNBQXFDLG1DQUFtQyxrQkFBa0IscUJBQXFCLG9EQUFvRCxHQUFHLGdCQUFnQixxQkFBcUIsa0NBQWtDLG1DQUFtQyxrQkFBa0Isd0NBQXdDLEdBQUcsK0JBQStCLGdCQUFnQixrQkFBa0IsbUJBQW1CLGlDQUFpQyxtQkFBbUIsdUJBQXVCLEtBQUssa0JBQWtCLG9CQUFvQixLQUFLLGdCQUFnQix3QkFBd0IsS0FBSyxHQUFHLGNBQWMsb0NBQW9DLGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcseUJBQXlCLFVBQVUsb0JBQW9CLHlDQUF5QyxtQkFBbUIsR0FBRyxVQUFVLHlFQUF5RSxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLFFBQVEsdUJBQXVCLG1DQUFtQyxxQkFBcUIsZUFBZSxvQkFBb0Isc0JBQXNCLEdBQUcsbUJBQW1CLG1CQUFtQixxQkFBcUIsZUFBZSxjQUFjLEdBQUcsYUFBYSxrQkFBa0IsR0FBRyxZQUFZLHdCQUF3QiwwRUFBMEUsdUJBQXVCLGtCQUFrQixpQkFBaUIsbUJBQW1CLHNCQUFzQixxQkFBcUIscUJBQXFCLHlDQUF5QyxvQkFBb0IsR0FBRyxtQkFBbUIsaUNBQWlDLG1GQUFtRixHQUFHLGlCQUFpQixrQ0FBa0MscUZBQXFGLEdBQUcsa0RBQWtELG1FQUFtRSxpRUFBaUUsbUJBQW1CLHVCQUF1QixxQ0FBcUMsY0FBYyxxQkFBcUIsdUJBQXVCLHlCQUF5QixHQUFHLDZCQUE2Qiw4QkFBOEIsb0RBQW9ELCtCQUErQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLG9CQUFvQix1QkFBdUIsb0NBQW9DLG1DQUFtQywrQ0FBK0MsR0FBRyxlQUFlLDhCQUE4QixrQ0FBa0Msa0JBQWtCLHdCQUF3QixxQkFBcUIsK0NBQStDLEdBQUcsaUJBQWlCLGdEQUFnRCxrQkFBa0IsMkJBQTJCLGlDQUFpQyw0Q0FBNEMsR0FBRyw2QkFBNkIsb0JBQW9CLG9DQUFvQyxtQ0FBbUMsS0FBSyxHQUFHLCtCQUErQixjQUFjLG9CQUFvQixLQUFLLEdBQUcscUJBQXFCLGtCQUFrQiwyQkFBMkIsZUFBZSxHQUFHLHVFQUF1RSx1RUFBdUUsc0VBQXNFLHlFQUF5RSxtQkFBbUIsa0JBQWtCLDJCQUEyQix3QkFBd0Isb0JBQW9CLHVCQUF1QixHQUFHLG9CQUFvQixnQkFBZ0Isa0JBQWtCLDJCQUEyQiwwQ0FBMEMsR0FBRyxXQUFXLGtCQUFrQiw4QkFBOEIsZ0JBQWdCLDJCQUEyQix3QkFBd0IscUJBQXFCLGtDQUFrQywrQ0FBK0MsbUNBQW1DLHFDQUFxQyxHQUFHLHdCQUF3Qiw4QkFBOEIsa0JBQWtCLDRCQUE0Qix3QkFBd0Isb0RBQW9ELG9CQUFvQixzQkFBc0IsR0FBRyxnQkFBZ0Isd0NBQXdDLHVDQUF1Qyw4QkFBOEIsdUJBQXVCLCtDQUErQyxHQUFHLGlCQUFpQix3Q0FBd0MsdUNBQXVDLEdBQUcsaURBQWlELCtCQUErQixHQUFHLDBDQUEwQywrQkFBK0IsR0FBRyxlQUFlLG1DQUFtQyx3QkFBd0IsU0FBUywwQkFBMEIscUJBQXFCLEtBQUssR0FBRyxnQkFBZ0IsdUJBQXVCLFlBQVksdUJBQXVCLG1EQUFtRCxTQUFTLHVCQUF1Qiw4QkFBOEIsMEJBQTBCLEtBQUssR0FBRyw0QkFBNEIseUJBQXlCLHVCQUF1QixPQUFPLDJDQUEyQyxnQkFBZ0IsS0FBSyxHQUFHLHdCQUF3QixrQkFBa0IsMkJBQTJCLDBCQUEwQix5QkFBeUIsZUFBZSxHQUFHLGNBQWMscUNBQXFDLCtCQUErQiwwQkFBMEIsc0RBQXNELHFCQUFxQiw4Q0FBOEMsNkNBQTZDLE9BQU8sb0JBQW9CLDZDQUE2Qyw4Q0FBOEMsT0FBTyxLQUFLLGdDQUFnQyxTQUFTLCtDQUErQyxPQUFPLEtBQUssR0FBRyxvQkFBb0Isa0NBQWtDLGlCQUFpQixpQkFBaUIsNEZBQTRGLEdBQUcsd0JBQXdCLGtCQUFrQixtQ0FBbUMsZ0JBQWdCLGNBQWMsb0JBQW9CLEdBQUcsaUJBQWlCLHNCQUFzQiwyQkFBMkIsR0FBRywyREFBMkQsWUFBWSxvQkFBb0IsS0FBSyxHQUFHLGFBQWEsNkNBQTZDLCtCQUErQixnQkFBZ0IsaUJBQWlCLHVCQUF1QixlQUFlLFlBQVksYUFBYSxXQUFXLGNBQWMsaUJBQWlCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcscUJBQXFCLDhCQUE4QiwrQ0FBK0MsMkJBQTJCLHdCQUF3Qix1QkFBdUIsd0JBQXdCLHFCQUFxQix1QkFBdUIsdUJBQXVCLEdBQUcsa0JBQWtCLHFCQUFxQixhQUFhLGNBQWMsa0JBQWtCLGlCQUFpQixlQUFlLEdBQUcsd0JBQXdCLG9CQUFvQixHQUFHLFFBQVEsMkJBQTJCLGdCQUFnQixpQkFBaUIsR0FBRyxhQUFhLGtCQUFrQiwyQkFBMkIsZUFBZSxhQUFhLGlDQUFpQyxLQUFLLHFDQUFxQyxtQ0FBbUMsbUJBQW1CLG9CQUFvQiwwQkFBMEIsOEZBQThGLGlDQUFpQywyQkFBMkIscUJBQXFCLEtBQUssR0FBRyxtQkFBbUIsV0FBVyxtQ0FBbUMsS0FBSywyQ0FBMkMsbUJBQW1CLHNCQUFzQix5QkFBeUIsd0JBQXdCLEtBQUssR0FBRyxjQUFjLG9CQUFvQiwrREFBK0Qsa0JBQWtCLDJDQUEyQywyQkFBMkIsR0FBRyxpQkFBaUIsdUJBQXVCLEdBQUcsdUJBQXVCLHVCQUF1QixnQkFBZ0IsbUJBQW1CLG1CQUFtQix1QkFBdUIsS0FBSyxHQUFHLG9CQUFvQixZQUFZLG1CQUFtQix1QkFBdUIsc0JBQXNCLG9MQUFvTCwrQ0FBK0Msc0JBQXNCLE9BQU8sZ0RBQWdELHNCQUFzQixPQUFPLEtBQUssR0FBRyxlQUFlLGVBQWUsY0FBYyw2QkFBNkIsR0FBRyxtQkFBbUIscUJBQXFCLHVCQUF1Qix5QkFBeUIsR0FBRyxpQkFBaUIsZUFBZSxjQUFjLHNCQUFzQiw4QkFBOEIsdUJBQXVCLDJCQUEyQiwyQkFBMkIsR0FBRyx5QkFBeUIsa0JBQWtCLDRCQUE0QixrQkFBa0IsR0FBRywrQkFBK0Isa0JBQWtCLEdBQUcsb0JBQW9CLGtCQUFrQiwwQ0FBMEMsOERBQThELGtCQUFrQixrQkFBa0IsS0FBSyxVQUFVLGlCQUFpQixLQUFLLEdBQUcsd0JBQXdCLGtCQUFrQiwyQkFBMkIsR0FBRyxRQUFRLGNBQWMsR0FBRywwQkFBMEIsa0JBQWtCLFNBQVMsZ0JBQWdCLHVDQUF1Qyx1QkFBdUIsS0FBSyxHQUFHLDRCQUE0QixrQkFBa0IsMkJBQTJCLEdBQUcsd0JBQXdCLGtCQUFrQixrQ0FBa0Msd0JBQXdCLGlCQUFpQixtQkFBbUIscUJBQXFCLDRCQUE0QixPQUFPLEtBQUssR0FBRyx3QkFBd0IsMkJBQTJCLHFDQUFxQyxHQUFHLHVCQUF1QixrQ0FBa0MsaUJBQWlCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLFVBQVUsaUJBQWlCLGdCQUFnQixLQUFLLEdBQUcsc0JBQXNCLDJCQUEyQiw4QkFBOEIsR0FBRyxrQkFBa0Isa0NBQWtDLGtCQUFrQixlQUFlLDRCQUE0QixnQkFBZ0IsbUJBQW1CLHFCQUFxQixjQUFjLDhCQUE4QixHQUFHLGdCQUFnQixrQkFBa0IsMkJBQTJCLHdCQUF3QixlQUFlLGdCQUFnQixHQUFHLHVCQUF1Qiw2Q0FBNkMsZ0JBQWdCLGlDQUFpQyxvQkFBb0Isa0RBQWtELEdBQUcsNkJBQTZCLDhDQUE4QyxHQUFHLHNCQUFzQiw4Q0FBOEMsR0FBRyxZQUFZLE9BQU8sMEJBQTBCLEtBQUssR0FBRyxxQkFBcUI7QUFDcDcxQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBaUo7QUFDako7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywySEFBTzs7OztBQUkyRjtBQUNuSCxPQUFPLGlFQUFlLDJIQUFPLElBQUksa0lBQWMsR0FBRyxrSUFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7O0FBRXpCOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUI2RDs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFNBQVM7QUFDNUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNGQUFrQztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDZ0I7QUFDUjtBQUNJOztBQUUxQiw4QkFBOEIsa0RBQVM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLG1EQUFVO0FBQ2hCLEtBQUs7O0FBRUw7QUFDQTtBQUNBLE1BQU0sMEVBQWlDO0FBQ3ZDLE1BQU0sbURBQVU7QUFDaEIsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ3FDO0FBQ1k7QUFDUjtBQUNNO0FBQ0k7O0FBRW5ELHFDQUFxQyxrREFBUztBQUM5QztBQUNBLG9DQUFvQyxnQkFBZ0I7QUFDcEQsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxzQkFBc0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRDtBQUNKO0FBQ0o7QUFDQTtBQUNxQjs7QUFFM0Msa0NBQWtDLGtEQUFTO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQU87QUFDN0IsSUFBSSx5RUFBZ0M7QUFDcEM7QUFDQSxJQUFJLDJFQUFrQztBQUN0QyxJQUFJLG1EQUFVO0FBQ2Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q3FDO0FBQ1Y7QUFDTTtBQUNKO0FBQ0E7O0FBRXRCLCtCQUErQixrREFBUztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwRUFBaUM7QUFDckMsSUFBSSxtREFBVTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTixVQUFVLDZDQUFJO0FBQ2Q7QUFDQSxJQUFJLDBFQUFpQztBQUNyQyxJQUFJLG1EQUFVO0FBQ2Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRnFDO0FBQ1I7QUFDSTtBQUNXO0FBQ2I7O0FBRS9CLCtCQUErQixrREFBUztBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLE1BQU0seURBQWdCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsOENBQUssSUFBSSxTQUFTO0FBQzFDLGdCQUFnQix5REFBZ0I7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBLGNBQWMsc0RBQWEsUUFBUSxNQUFNO0FBQ3pDO0FBQ0Esc0JBQXNCLHlEQUFnQjtBQUN0QyxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5REFBZ0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGSztBQUN5QjtBQUMzQjtBQUNxQjtBQUMzQjtBQUN5QjtBQUNMO0FBQ1I7QUFDTTtBQUNJO0FBQ0M7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsa0RBQVM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsZUFBZTtBQUM1RSx5QkFBeUIsK0RBQXNCO0FBQy9DLDJCQUEyQiwwREFBaUI7QUFDNUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBaUUsVUFBVTtBQUMzRSx3QkFBd0IsK0RBQXNCO0FBQzlDLGdDQUFnQyw2Q0FBSTtBQUNwQztBQUNBLEdBQUc7QUFDSCwwQkFBMEIsK0RBQXNCO0FBQ2hELGdDQUFnQywrQ0FBVTtBQUMxQztBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrREFBc0I7QUFDckM7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLGdEQUFPLEdBQUcsa0RBQVM7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSw0QkFBNEIsaUVBQWlCO0FBQzdDO0FBQ0EsU0FBUztBQUNULFFBQVEsbURBQVU7QUFDbEIsT0FBTztBQUNQO0FBQ0EsNEJBQTRCLCtEQUFnQjtBQUM1QztBQUNBLFNBQVM7QUFDVCxRQUFRLG1EQUFVO0FBQ2xCLE9BQU87QUFDUDtBQUNBLDRCQUE0Qiw4REFBZTtBQUMzQztBQUNBLFNBQVM7QUFDVCxRQUFRLG1EQUFVO0FBQ2xCLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RMUTtBQUNSO0FBQ2U7QUFDVTtBQUN6QjtBQUNFOztBQUUvQiw0QkFBNEIsa0RBQVM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNEQUFhO0FBQzFDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFVBQVUsc0RBQWE7QUFDdkI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsK0RBQWdCLGNBQWMsZ0JBQWdCO0FBQ3BFLElBQUksbURBQVU7QUFDZDtBQUNBOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVRO0FBQ1I7QUFDZTs7QUFFckMsZ0NBQWdDLGtEQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlCQUFpQjtBQUNqRDtBQUNBO0FBQ0EsdUNBQXVDLHVCQUF1QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHNEQUFhO0FBQ3ZDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOLDBCQUEwQixzREFBYTtBQUN2QztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEcUM7QUFDTDtBQUM2QjtBQUNqQzs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlCQUFpQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHlEQUFnQjtBQUNsQzs7QUFFQSxJQUFJLDhFQUEwQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUksbUVBQTBCLENBQUMsdURBQWMsRUFBRSxtRUFBMEI7QUFDekUsR0FBRzs7QUFFSCxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pFdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRTtBQUNxQztBQUNNO0FBQ3ZDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDhDQUFLO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLHNCQUFzQiwwRUFBZ0IsY0FBYyxjQUFjO0FBQ2xFLFFBQVEseURBQWdCO0FBQ3hCO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EseUJBQXlCLGdGQUFtQjs7QUFFNUM7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pEckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEN4QjtBQUNBOztBQUU4QjtBQUMrQjtBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixvRUFBZ0IsU0FBUyxlQUFlO0FBQ2pFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLDBEQUFpQjtBQUNoQztBQUNBOztBQUVBO0FBQ0EsZUFBZSwwREFBaUI7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RPO0FBQ1E7QUFDTjtBQUN1QjtBQUNYO0FBQ0k7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQXNCO0FBQ3JDO0FBQ0Esb0JBQW9CLHlEQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsc0VBQTZCO0FBQ3ZDLFVBQVUsb0VBQTJCO0FBQ3JDLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsa0RBQVM7QUFDdkI7QUFDQSxNQUFNLCtFQUEyQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdEQUFPO0FBQ3JCO0FBQ0EsTUFBTSxpRkFBNkI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0lwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUMyQjtBQUNTO0FBQ0Y7QUFDNkI7QUFDQTtBQUNNO0FBQzdCO0FBQ2lDO0FBQ25DOztBQUV0QztBQUNBLG9CQUFvQix3REFBTztBQUMzQixpRUFBZ0I7QUFDaEIsc0JBQXNCLCtEQUFjOztBQUVwQyxnQkFBZ0IscURBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQix3REFBTztBQUM1Qjs7QUFFQSxnQkFBZ0IscURBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvbWFpbi5zY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlL21haW4uc2Nzcz9hMjIxIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL05lcm9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvRGVsZXRlQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvTWluaUNvbnRhaW5lckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL05ld1Byb2plY3RDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9OZXdUb2RvQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvUHJvamVjdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL1Rhc2tDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9Ub2RvQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvdmlld1RvZG9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaGVscGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2lkQXNzaWduZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIG1pbi13aWR0aDogNzUlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMS4yZnIpIDJweCAzZnI7XFxuICBib3gtc2hhZG93OiA4cHggOHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcDogIzQ2NGU1NSA0cHggc29saWQ7XFxuICBib3JkZXItbGVmdDogIzQ2NGU1NSAycHggc29saWQ7XFxufVxcblxcbi5zZXBhcmF0b3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcXG59XFxuXFxuLm1haW5Db250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGNhbGMoNjUlIC0gMnB4KSAycHggMzUlO1xcbn1cXG5cXG4ucGVuZGluZyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLWJvdHRvbTogIzE1MTgxYyAycHggc29saWQ7XFxuICBib3JkZXItbGVmdDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWlubWF4KDAsIDEwMCUpO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItdG9wOiAjNDY0ZTU1IDJweCBzb2xpZDtcXG4gIGJvcmRlci1sZWZ0OiAjNDY0ZTU1IDJweCBzb2xpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gIH1cXG4gIC5zZXBhcmF0b3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLnBlbmRpbmcge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gIH1cXG59XFxuLnNpZGViYXIge1xcbiAgYm9yZGVyLXJpZ2h0OiAjMTUxODFjIDJweCBzb2xpZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5TmFtZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6IGNsYW1wKDhweCwgMXZ3LCA2NHB4KTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5Q29sb3JDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NztcXG4gIHBhZGRpbmc6IGNsYW1wKDhweCwgMC4zcmVtICsgMC4zdncsIDY0cHgpO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICM2Yzc1N2Q7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJpb3JpdHlDb2xvciB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBoZWlnaHQ6IGNsYW1wKDE0cHgsIDAuNXJlbSArIDAuN3Z3LCA2NHB4KTtcXG4gIHdpZHRoOiBjbGFtcCgxNHB4LCAwLjVyZW0gKyAwLjd2dywgNjRweCk7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNhMGIxYzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbiNwcmlvcml0aWVzIHtcXG4gIHdpZHRoOiBjbGFtcCgxMDBweCwgMzAlICsgNHZ3LCA2MDBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogY2xhbXAoNnB4LCAwLjN2dywgMTJweCk7XFxuICBtYXJnaW4tYm90dG9tOiBjbGFtcCgxMHB4LCAwLjd2dywgMTZweCk7XFxufVxcblxcbi5wcmlvcml0eUNvbG9yQ29udGFpbmVyIC5wcmlvcml0eUNvbG9yIHtcXG4gIGhlaWdodDogY2xhbXAoMTRweCwgMC41cmVtICsgMC40dncsIDY0cHgpO1xcbiAgd2lkdGg6IGNsYW1wKDE0cHgsIDAuNXJlbSArIDAuNHZ3LCA2NHB4KTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbi5zaWRlYmFyQnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC42dnc7XFxufVxcblxcbi5Ub2Rvc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDUwcHg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi50YXNrQ29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiBjbGFtcCg0cHgsIDAuNHZ3LCA4cHgpO1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNhMGIxYzM7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IGNsYW1wKDJweCwgMC4zdncsIDhweCkgMDtcXG59XFxuXFxuLnRhc2tNaW5pQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogY2xhbXAoOHB4LCAwLjVyZW0gKyAwLjV2dywgNjRweCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnRhc2tDb2xvciB7XFxuICBoZWlnaHQ6IGNsYW1wKDE0cHgsIDAuNXJlbSArIDAuN3Z3LCA2NHB4KTtcXG4gIHdpZHRoOiBjbGFtcCgxNHB4LCAwLjVyZW0gKyAwLjd2dywgNjRweCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTgxNjE2O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4udGFza0J1dHRvbiB7XFxuICBoZWlnaHQ6IGNsYW1wKDE0cHgsIDAuNXJlbSArIDAuN3Z3LCA2NHB4KTtcXG4gIHdpZHRoOiBjbGFtcCgxNHB4LCAwLjVyZW0gKyAwLjd2dywgNjRweCk7XFxufVxcblxcbi50YXNrTWluaUNvbnRhaW5lcjpudGgtbGFzdC1vZi10eXBlKC1uICsgMikge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICM2Yzc1N2Q7XFxufVxcblxcbi50YXNrTWluaUNvbnRhaW5lcjpudGgtY2hpbGQoLW4rMikge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICM2Yzc1N2Q7XFxufVxcblxcbi50YXNrVGltZSB7XFxuICBwYWRkaW5nLWxlZnQ6IGNhbGMoMXJlbSArIDF2dyk7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4udGFza1RpbWUgcCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgY29sb3I6ICNhZGI1YmQ7XFxufVxcblxcbi50YXNrVGl0bGUge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHdpZHRoOiBjbGFtcCgxNTBweCwgMTB2dyArIDEwcmVtLCA1MDBweCk7XFxufVxcbi50YXNrVGl0bGUgcCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4udGFza1RpdGxlLFxcbi50YXNrVGltZSB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLnRhc2tUaXRsZSBwLFxcbi50YXNrVGltZSBwIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoOHB4LCAwLjVyZW0gKyAwLjd2dywgNjRweCk7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zdWJ0YXNrc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnN1YnRhc2sge1xcbiAgbWFyZ2luOiBjbGFtcCgycHgsIDAuMXZ3LCA0cHgpIDA7XFxufVxcbi5zdWJ0YXNrIC50YXNrTWluaUNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiBjbGFtcCg4cHgsIDAuNHJlbSArIDAuNHZ3LCA0OHB4KTtcXG59XFxuLnN1YnRhc2sgLnRhc2tNaW5pQ29udGFpbmVyIC50YXNrQnV0dG9uIHtcXG4gIGhlaWdodDogY2xhbXAoMTBweCwgMC41cmVtICsgMC40dncsIDM2cHgpO1xcbiAgd2lkdGg6IGNsYW1wKDEwcHgsIDAuNXJlbSArIDAuNHZ3LCAzNnB4KTtcXG59XFxuLnN1YnRhc2sgLnRhc2tNaW5pQ29udGFpbmVyIC50YXNrQ29sb3Ige1xcbiAgd2lkdGg6IGNsYW1wKDEwcHgsIDAuNXJlbSArIDAuNHZ3LCAzNnB4KTtcXG4gIGhlaWdodDogY2xhbXAoMTBweCwgMC41cmVtICsgMC40dncsIDM2cHgpO1xcbn1cXG4uc3VidGFzayAudGFza1RpdGxlIHAsXFxuLnN1YnRhc2sgLnRhc2tUaW1lIHAge1xcbiAgZm9udC1zaXplOiBjbGFtcCg2cHgsIDAuNXJlbSArIDAuNHZ3LCAzNnB4KTtcXG59XFxuXFxuLmNvbXBsZXRlZFRhc2sge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBvcGFjaXR5OiAwLjY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpLCBpbnNldCAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi50YXNrRGF0YUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4OiAxIDI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGRTdWJ0YXNrIHtcXG4gIG1hcmdpbi10b3A6IDAuM3Z3O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuI2NvbXBsZXRlZFRvZG9zID4gLnRhc2tDb250YWluZXIgPiAuc3VidGFza3NDb250YWluZXIgYnV0dG9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2RhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDBkZWcsIDAlLCAwJSwgMC41MDIpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbW9kYWxDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcXG4gIGJveC1zaGFkb3c6IDhweCA4cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIG1heC1oZWlnaHQ6IDcwdmg7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5jbG9zZUJ1dHRvbiB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAxdnc7XFxuICBsZWZ0OiAxdnc7XFxuICBoZWlnaHQ6IDEuM3Z3O1xcbiAgd2lkdGg6IDEuM3Z3O1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmNsb3NlQnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaHIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNHZ3O1xcbn1cXG4uZmllbGQgbGFiZWwge1xcbiAgZm9udC1zaXplOiBjYWxjKDF2dyArIDZweCk7XFxufVxcbi5maWVsZCBpbnB1dCxcXG4uZmllbGQgc2VsZWN0LFxcbi5maWVsZCB0ZXh0YXJlYSB7XFxuICBmb250LXNpemU6IGNhbGMoMC44dncgKyA0cHgpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICMyMTI1Mjk7XFxuICBib3gtc2hhZG93OiAwcHggMXB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpLCBpbnNldCAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBwYWRkaW5nOiBjYWxjKDAuNXZ3ICsgMnB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXZ3O1xcbiAgY29sb3I6ICNmOGY5ZmE7XFxufVxcblxcbi5EdWVkYXRlRmllbGQgaW5wdXQge1xcbiAgZm9udC1zaXplOiBjYWxjKDAuOHZ3ICsgNHB4KTtcXG59XFxuLkR1ZWRhdGVGaWVsZCA6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuXFxuLm5ld0Zvcm0ge1xcbiAgbWluLXdpZHRoOiAzNXZ3O1xcbiAgcGFkZGluZzogMCBjYWxjKDF2dyArIDZweCkgY2FsYygxdncgKyA2cHgpIGNhbGMoMXZ3ICsgNnB4KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDJmcjtcXG4gIGdhcDogY2FsYygwLjV2dyArIDRweCk7XFxufVxcblxcbi5UaXRsZUZpZWxkIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbi5EZXNjcmlwdGlvbkZpZWxkIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcbi5EZXNjcmlwdGlvbkZpZWxkIHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGhlaWdodDogMjB2aDtcXG4gIG1heC1oZWlnaHQ6IDIwdmg7XFxufVxcblxcbi5Qcmlvcml0eUZpZWxkIHNlbGVjdCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvOS85ZC9DYXJldF9kb3duX2ZvbnRfYXdlc29tZV93aGl0ZXZhcmlhdGlvbi5zdmcpIG5vLXJlcGVhdCByaWdodCAwLjhlbSBjZW50ZXIvMS40ZW0sICMyMTI1Mjk7XFxuICAvKiBSZW1vdmUgZm9jdXMgb3V0bGluZSAqL1xcbiAgLyogUmVtb3ZlIElFIGFycm93ICovXFxufVxcbi5Qcmlvcml0eUZpZWxkIHNlbGVjdDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uUHJpb3JpdHlGaWVsZCBzZWxlY3Q6Oi1tcy1leHBhbmQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5ld1RpdGxlIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiBjYWxjKDF2dyArIDZweCk7XFxufVxcblxcbi5jcmVhdGVCdXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGl0bGVWaWV3IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB1c2VyLXNlbGVjdDogYXV0bztcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG59XFxuXFxuLnRpdGxlVmlld0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMnZ3O1xcbn1cXG5cXG4uZGVzY3JpcHRpb25WaWV3Q29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCAxdnc7XFxufVxcblxcbi5pbmZvQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtaW4td2lkdGg6IGNsYW1wKDI1MHB4LCA3MHZoLCAxMDAwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0byBtYXgtY29udGVudCBhdXRvIG1heC1jb250ZW50O1xcbn1cXG4uaW5mb0NvbnRhaW5lciAuc2VwYXJhdG9yIHtcXG4gIGhlaWdodDogMXB4O1xcbn1cXG4uaW5mb0NvbnRhaW5lciBociB7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uZGF0ZVZpZXdDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmgzIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmRhdGVTdHJpbmdDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmRhdGVTdHJpbmdDb250YWluZXIgcCB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IGNsYW1wKDhweCwgMXZ3LCA2NHB4KTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5wcmlvcml0eVZpZXdDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvRGF0YUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udG9kb0RhdGFDb250YWluZXIgLnByaW9yaXR5IHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLnRvZG9EYXRhQ29udGFpbmVyIC5wcmlvcml0eSAucHJpb3JpdHlOYW1lIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5tYWluVGFza0NvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwIDF2dyAxdncgMXZ3O1xcbiAgYm9yZGVyLWJvdHRvbTogIzE1MTgxYyAycHggc29saWQ7XFxufVxcblxcbi52aWV3U3ViQ29udGFpbmVyIHtcXG4gIGJvcmRlci10b3A6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbiAgcGFkZGluZzogMXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udmlld1N1YkNvbnRhaW5lciBoMSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZGVzY3JpcHRpb25WaWV3IHtcXG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uQnV0dG9uc1ZpZXcge1xcbiAgYm9yZGVyLXRvcDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjh2dztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxdncgMDtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjV2dztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwMGRlZywgNyUsIDglLCAwLjYpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjV2dyAwIDAuNXZ3IDAuN3Z3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0IDBzO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjAwZGVnLCA3JSwgOCUpO1xcbn1cXG5cXG4jc2VsZWN0ZWRQcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDBkZWcsIDclLCA4JSk7XFxufVxcblxcbmJ1dHRvbiBpIHtcXG4gIG1hcmdpbi1yaWdodDogMC41dnc7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZjhmOWZhO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTkuNzVkZWcsICM2ZTllY2YgMTMuMDIlLCAjMTIyNjNhIDEwMCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjV2dztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDAuN3Z3IDA7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuICBmb250LXNpemU6IDF2dztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiAjMjg4N2M4O1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAwcHggMnB4IDBweCAjNmJiMmUzO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZjhmOWZhO1xcbiAgcGFkZGluZzogNnB4IDEwcHg7XFxuICBmb250LXNpemU6IDEuMXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZWxldGVCdXR0b24ge1xcbiAgYmFja2dyb3VuZDogaHNsKDBkZWcsIDgyJSwgNjMlKTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgMHB4IDJweCAwcHggaHNsKDBkZWcsIDY3JSwgNzclKTtcXG59XFxuXFxuLmVkaXRCdXR0b24ge1xcbiAgYmFja2dyb3VuZDogcmdiKDExMSwgMTg0LCA1NSk7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IDBweCAycHggMHB4IHJnYigxODgsIDIyOSwgMTU2KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL19jb250YWluZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL19wcmlvcml0aWVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9fdGFzay5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvX21vZGFsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9fZm9ybS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvX3ZpZXdUb2RvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9fcHJvamVjdC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1EQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsMkNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQ0NGO0VERUE7SUFDRSxhQUFBO0VDQUY7RURHQTtJQUNFLGlCQUFBO0VDREY7QUFDRjtBRElBO0VBQ0UsK0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBQzFEQTtFQUNFLGtC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ZUo7O0FBcGdCQTtFQUNFLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUF1Z0JGOztBQXBnQkE7RUFDRSxvRUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBdWdCRjs7QUFwZ0JBO0VBQ0Usa0JBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFzZ0JGOztBQW5nQkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQXNnQkY7O0FBbmdCQTtFQUNFLGFBQUE7QUFzZ0JGOztBQW5nQkE7RUFDRSxtQkFBQTtFQUNBLHFFQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7QUFzZ0JGOztBQW5nQkE7RUFDRSwrQkFBQTtFQUNBLGlGQUFBO0FBc2dCRjs7QUFuZ0JBO0VBQ0UsNkJBQUE7RUFDQSxnRkFBQTtBQXNnQkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBtaW4td2lkdGg6IDc1JTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDEuMmZyKSAycHggM2ZyO1xcbiAgYm94LXNoYWRvdzogOHB4IDhweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3A6ICM0NjRlNTUgNHB4IHNvbGlkO1xcbiAgYm9yZGVyLWxlZnQ6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbn1cXG5cXG4uc2VwYXJhdG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XFxufVxcblxcbi5tYWluQ29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBjYWxjKDY1JSAtIDJweCkgMnB4IDM1JTtcXG59XFxuXFxuLnBlbmRpbmcge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1ib3R0b206ICMxNTE4MWMgMnB4IHNvbGlkO1xcbiAgYm9yZGVyLWxlZnQ6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbm1heCgwLCAxMDAlKTtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXRvcDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBib3JkZXItbGVmdDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICB9XFxuXFxuICAuc2VwYXJhdG9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5wZW5kaW5nIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICB9XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGJvcmRlci1yaWdodDogIzE1MTgxYyAycHggc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblwiLFwiQGltcG9ydCBcXFwiLi9pbmRleFxcXCI7XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNmOGY5ZmE7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExOS43NWRlZywgIzZlOWVjZiAxMy4wMiUsICMxMjI2M2EgMTAwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAvLyBmb250LXNpemU6IGNhbGMoMXJlbSArIDF2dyk7XFxuICBmb250LXNpemU6IDEuNXZ3O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMC43dncgMDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6ICMyODg3Yzg7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IDBweCAycHggMHB4ICM2YmIyZTM7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNmOGY5ZmE7XFxuICBwYWRkaW5nOiA2cHggMTBweDtcXG4gIGZvbnQtc2l6ZTogMS4xdnc7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZUJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBoc2woMCwgODIlLCA2MyUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAwcHggMnB4IDBweCBoc2woMCwgNjclLCA3NyUpO1xcbn1cXG5cXG4uZWRpdEJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTExLCAxODQsIDU1KTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgMHB4IDJweCAwcHggcmdiKDE4OCwgMjI5LCAxNTYpO1xcbn1cXG5cIixcIiRyZXNwb25zaXZlLXRleHQtc2l6ZTogY2xhbXAoOHB4LCAxdncsIDY0cHgpO1xcbiRyZXNwb25zaXZlLWJ1dHRvbi1zaXplOiBjbGFtcCgxNHB4LCBjYWxjKDAuNXJlbSArIDAuN3Z3KSwgNjRweCk7XFxuJHJlc3BvbnNpdmUtcHJpby1zaXplOiBjbGFtcCgxNHB4LCBjYWxjKDAuNXJlbSArIDAuNHZ3KSwgNjRweCk7XFxuXFxuLnByaW9yaXR5TmFtZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6ICRyZXNwb25zaXZlLXRleHQtc2l6ZTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5Q29sb3JDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NztcXG4gIHBhZGRpbmc6IGNsYW1wKDhweCwgY2FsYygwLjNyZW0gKyAwLjN2dyksIDY0cHgpO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICM2Yzc1N2Q7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJpb3JpdHlDb2xvciB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBoZWlnaHQ6ICRyZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbiAgd2lkdGg6ICRyZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjYTBiMWMzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4jcHJpb3JpdGllcyB7XFxuICB3aWR0aDogY2xhbXAoMTAwcHgsIGNhbGMoMzAlICsgNHZ3KSwgNjAwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IGNsYW1wKDZweCwgMC4zdncsIDEycHgpO1xcbiAgbWFyZ2luLWJvdHRvbTogY2xhbXAoMTBweCwgMC43dncsIDE2cHgpO1xcbn1cXG5cXG4ucHJpb3JpdHlDb2xvckNvbnRhaW5lciB7XFxuICAucHJpb3JpdHlDb2xvciB7XFxuICAgIGhlaWdodDogJHJlc3BvbnNpdmUtcHJpby1zaXplO1xcbiAgICB3aWR0aDogJHJlc3BvbnNpdmUtcHJpby1zaXplO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLnNpZGViYXJCdXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjZ2dztcXG59XFxuXCIsXCIkYmlnLXJlc3BvbnNpdmUtdGV4dC1zaXplOiBjbGFtcCg4cHgsIGNhbGMoMC41cmVtICsgMC43dncpLCA2NHB4KTtcXG4kYmlnLXJlc3BvbnNpdmUtYnV0dG9uLXNpemU6IGNsYW1wKDE0cHgsIGNhbGMoMC41cmVtICsgMC43dncpLCA2NHB4KTtcXG4kc21hbGwtcmVzcG9uc2l2ZS10ZXh0LXNpemU6IGNsYW1wKDZweCwgY2FsYygwLjVyZW0gKyAwLjR2dyksIDM2cHgpO1xcbiRzbWFsbC1yZXNwb25zaXZlLWJ1dHRvbi1zaXplOiBjbGFtcCgxMHB4LCBjYWxjKDAuNXJlbSArIDAuNHZ3KSwgMzZweCk7XFxuLlRvZG9zQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgNTBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLnRhc2tDb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1ib3R0b206IGNsYW1wKDRweCwgMC40dncsIDhweCk7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItdG9wOiAycHggc29saWQgI2EwYjFjMztcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogY2xhbXAoMnB4LCAwLjN2dywgOHB4KSAwO1xcbn1cXG5cXG4udGFza01pbmlDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiBjbGFtcCg4cHgsIGNhbGMoMC41cmVtICsgMC41dncpLCA2NHB4KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udGFza0NvbG9yIHtcXG4gIGhlaWdodDogJGJpZy1yZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbiAgd2lkdGg6ICRiaWctcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlODE2MTY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbi50YXNrQnV0dG9uIHtcXG4gIGhlaWdodDogJGJpZy1yZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbiAgd2lkdGg6ICRiaWctcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTtcXG59XFxuXFxuLnRhc2tNaW5pQ29udGFpbmVyOm50aC1sYXN0LW9mLXR5cGUoLW4gKyAyKSB7XFxuICBvdXRsaW5lOiAycHggc29saWQgIzZjNzU3ZDtcXG59XFxuXFxuLnRhc2tNaW5pQ29udGFpbmVyOm50aC1jaGlsZCgtbiArIDIpIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNmM3NTdkO1xcbn1cXG5cXG4udGFza1RpbWUge1xcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKDFyZW0gKyAxdncpO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG5cXG4gIHAge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBjb2xvcjogI2FkYjViZDtcXG4gIH1cXG59XFxuXFxuLnRhc2tUaXRsZSB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgd2lkdGg6IGNsYW1wKDE1MHB4LCBjYWxjKDEwdncgKyAxMHJlbSksIDUwMHB4KTtcXG5cXG4gIHAge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIH1cXG59XFxuXFxuLnRhc2tUaXRsZSxcXG4udGFza1RpbWUge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwIHtcXG4gICAgZm9udC1zaXplOiAkYmlnLXJlc3BvbnNpdmUtdGV4dC1zaXplO1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxufVxcblxcbi5zdWJ0YXNrc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnN1YnRhc2sge1xcbiAgbWFyZ2luOiBjbGFtcCgycHgsIDAuMXZ3LCA0cHgpIDA7XFxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIC50YXNrTWluaUNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IGNsYW1wKDhweCwgY2FsYygwLjRyZW0gKyAwLjR2dyksIDQ4cHgpO1xcblxcbiAgICAudGFza0J1dHRvbiB7XFxuICAgICAgaGVpZ2h0OiAkc21hbGwtcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTtcXG4gICAgICB3aWR0aDogJHNtYWxsLXJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICAgIH1cXG5cXG4gICAgLnRhc2tDb2xvciB7XFxuICAgICAgd2lkdGg6ICRzbWFsbC1yZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbiAgICAgIGhlaWdodDogJHNtYWxsLXJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC50YXNrVGl0bGUsXFxuICAudGFza1RpbWUge1xcbiAgICBwIHtcXG4gICAgICBmb250LXNpemU6ICRzbWFsbC1yZXNwb25zaXZlLXRleHQtc2l6ZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uY29tcGxldGVkVGFzayB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIG9wYWNpdHk6IDAuNjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSksIGluc2V0IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLnRhc2tEYXRhQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXg6IDEgMjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZFN1YnRhc2sge1xcbiAgbWFyZ2luLXRvcDogMC4zdnc7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jY29tcGxldGVkVG9kb3MgPiAudGFza0NvbnRhaW5lciA+IC5zdWJ0YXNrc0NvbnRhaW5lciB7XFxuICBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cIixcIi5tb2RhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC41MDIpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbW9kYWxDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcXG4gIGJveC1zaGFkb3c6IDhweCA4cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIG1heC1oZWlnaHQ6IDcwdmg7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5jbG9zZUJ1dHRvbiB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAxdnc7XFxuICBsZWZ0OiAxdnc7XFxuICBoZWlnaHQ6IDEuM3Z3O1xcbiAgd2lkdGg6IDEuM3Z3O1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmNsb3NlQnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaHIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cIixcIi5maWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC40dnc7XFxuXFxuICBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxdncgKyA2cHgpO1xcbiAgfVxcblxcbiAgaW5wdXQsXFxuICBzZWxlY3QsXFxuICB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjh2dyArIDRweCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogIzIxMjUyOTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSwgaW5zZXQgMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBwYWRkaW5nOiBjYWxjKDAuNXZ3ICsgMnB4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41dnc7XFxuICAgIGNvbG9yOiAjZjhmOWZhO1xcbiAgfVxcbn1cXG5cXG4uRHVlZGF0ZUZpZWxkIHtcXG4gIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuOHZ3ICsgNHB4KTtcXG4gIH1cXG5cXG4gIDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxuICB9XFxufVxcblxcbi5uZXdGb3JtIHtcXG4gIG1pbi13aWR0aDogMzV2dztcXG4gIHBhZGRpbmc6IDAgY2FsYygxdncgKyA2cHgpIGNhbGMoMXZ3ICsgNnB4KSBjYWxjKDF2dyArIDZweCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAyZnI7XFxuICBnYXA6IGNhbGMoMC41dncgKyA0cHgpO1xcbn1cXG5cXG4uVGl0bGVGaWVsZCB7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVxcblxcbi5EZXNjcmlwdGlvbkZpZWxkIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG5cXG4gIHRleHRhcmVhIHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIG1heC1oZWlnaHQ6IDIwdmg7XFxuICB9XFxufVxcblxcbi5Qcmlvcml0eUZpZWxkIHtcXG4gIHNlbGVjdCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy85LzlkL0NhcmV0X2Rvd25fZm9udF9hd2Vzb21lX3doaXRldmFyaWF0aW9uLnN2ZylcXG4gICAgICAgIG5vLXJlcGVhdCByaWdodCAwLjhlbSBjZW50ZXIgLyAxLjRlbSxcXG4gICAgICAjMjEyNTI5O1xcbiAgICAvKiBSZW1vdmUgZm9jdXMgb3V0bGluZSAqL1xcbiAgICAmOmZvY3VzIHtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICB9XFxuICAgIC8qIFJlbW92ZSBJRSBhcnJvdyAqL1xcbiAgICAmOjotbXMtZXhwYW5kIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5uZXdUaXRsZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogY2FsYygxdncgKyA2cHgpO1xcbn1cXG5cXG4uY3JlYXRlQnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXCIsXCIudGl0bGVWaWV3IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB1c2VyLXNlbGVjdDogYXV0bztcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG59XFxuXFxuLnRpdGxlVmlld0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMnZ3O1xcbn1cXG5cXG4uZGVzY3JpcHRpb25WaWV3Q29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCAxdnc7XFxufVxcblxcbi5pbmZvQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtaW4td2lkdGg6IGNsYW1wKDI1MHB4LCA3MHZoLCAxMDAwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0byBtYXgtY29udGVudCBhdXRvIG1heC1jb250ZW50O1xcblxcbiAgLnNlcGFyYXRvciB7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgfVxcblxcbiAgaHIge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbn1cXG5cXG4uZGF0ZVZpZXdDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmgzIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmRhdGVTdHJpbmdDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG5cXG4gIHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoOHB4LCAxdncsIDY0cHgpO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgfVxcbn1cXG5cXG4ucHJpb3JpdHlWaWV3Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kb0RhdGFDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIC5wcmlvcml0eSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgLnByaW9yaXR5TmFtZSB7XFxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ubWFpblRhc2tDb250YWluZXIge1xcbiAgcGFkZGluZzogMCAxdncgMXZ3IDF2dztcXG4gIGJvcmRlci1ib3R0b206ICMxNTE4MWMgMnB4IHNvbGlkO1xcbn1cXG5cXG4udmlld1N1YkNvbnRhaW5lciB7XFxuICBib3JkZXItdG9wOiAjNDY0ZTU1IDJweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDF2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGgxIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbn1cXG5cXG4uZGVzY3JpcHRpb25WaWV3IHtcXG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uQnV0dG9uc1ZpZXcge1xcbiAgYm9yZGVyLXRvcDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjh2dztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxdncgMDtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xcbn1cXG5cIixcIiNwcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXZ3O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjAwLCA3JSwgOCUsIDYwJSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNXZ3IDAgMC41dncgMC43dnc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQgMHM7XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjAwLCA3JSwgOCUsIDEwMCUpO1xcbn1cXG5cXG4jc2VsZWN0ZWRQcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjAwLCA3JSwgOCUsIDEwMCUpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgaSB7XFxuICAgIG1hcmdpbi1yaWdodDogMC41dnc7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IobmFtZSwgc3RhdGUsIHRlbXBsYXRlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICB9XG5cbiAgLy8gVGhpcyBtZXRob2QgcmV0dXJucyBhIHRlbXBsYXRlIGxpdGVyYWwgb2YgdGhlIGNvbXBvbmVudFxuICB2aWV3KCkge1xuICAgIHJldHVybiB0aGlzLnRlbXBsYXRlKHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgLy8gVGhpcyBtZXRob2QgcmV0dXJucyBhbiBIVE1MIGVsZW1lbnQgb2JqZWN0IG9mIHRoZSBjb21wb25lbnRcbiAgRE9NZWxlbWVudChlLCBmdW5jKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHRoaXMudmlldygpLCBcInRleHQvaHRtbFwiKS5ib2R5XG4gICAgICAuZmlyc3RDaGlsZDtcblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihlLCBmdW5jKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIGFkZExpc3RlbmVyID0gKGVsZW1lbnQsIGV2ZW50LCBmdW5jKSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuXG4vL21ha2UgYW4gZXZlbnRIYW5kbGVyIGNsYXNzIHRoYXQgYXNzaWducyBldmVudCBsaXN0ZW5lcnMgdG8gY29tcG9uZW50c1xuIiwiaW1wb3J0IFByb2plY3RDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Qcm9qZWN0Q29tcG9uZW50XCI7XG5cbmNsYXNzIE5lcm9zIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICB0aGlzLk5lcm9zRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3NlbGVjdG9yfWApO1xuICB9XG5cbiAgc3RhdGljIHByb2plY3RzID0gbmV3IE5lcm9zKFwicHJvamVjdHNcIik7XG5cbiAgc3RhdGljIGRlbGV0ZU5lcm9zQ29tcG9uZW50KG5lcm9zLCBjb21wb25lbnQpIHtcbiAgICBsZXQgY29tcG9uZW50cyA9IG5lcm9zLmNvbXBvbmVudHM7XG4gICAgZGVsZXRlIGNvbXBvbmVudHNbY29tcG9uZW50Lm5hbWVdO1xuICAgIG5lcm9zLnVwZGF0ZVZpZXcoKTtcbiAgICBQcm9qZWN0Q29tcG9uZW50LnNlbGVjdExhc3RQcm9qZWN0KCk7XG4gIH1cblxuICByZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICB0aGlzLmNvbXBvbmVudHNbY29tcG9uZW50Lm5hbWVdID0gY29tcG9uZW50O1xuICAgIHRoaXMudXBkYXRlVmlldygpO1xuICB9XG5cbiAgdXBkYXRlVmlldygpIHtcbiAgICBpZiAodGhpcy5jb21wb25lbnRzKSB7XG4gICAgICB0aGlzLk5lcm9zRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgT2JqZWN0LmtleXModGhpcy5jb21wb25lbnRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdGhpcy5OZXJvc0VsZW1lbnQuYXBwZW5kKHRoaXMuY29tcG9uZW50c1trZXldLkRPTWVsZW1lbnQoKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVyb3M7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9Db21wb25lbnRcIjtcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi4vbW9kYWxcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuLi9wcm9qZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICB0ZW1wbGF0ZSA9IChzdGF0ZSkgPT5cbiAgICBgXG4gICAgPGRpdiBjbGFzcz0nZGVsZXRlQ29udGFpbmVyJz5cbiAgICAgIDxoMT5BcmUgeW91IHN1cmU/PC9oMT5cbiAgICAgIDxkaXYgY2xhc3M9J2J1dHRvbnNDb250YWluZXInPlxuICAgICAgICA8YnV0dG9uIGlkPSdjYW5jZWwnPkdvIGJhY2s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD0nY29uZmlybSc+WWVzLCBkZWxldGUgaXQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgRE9NZWxlbWVudCgpIHtcbiAgICBsZXQgZWxlbWVudCA9IHN1cGVyLkRPTWVsZW1lbnQoKTtcbiAgICBsZXQgY2FuY2VsQnRuID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbFwiKTtcbiAgICBsZXQgY29uZmlybUJ0biA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25maXJtXCIpO1xuXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBtb2RhbC5oaWRlKCk7XG4gICAgfSk7XG5cbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlLnRvZG8uZGVsZXRlVG9kbyh0aGlzLnN0YXRlLnRvZG8pO1xuICAgICAgUHJvamVjdC5zZWxlY3RlZC5jb21wb25lbnQudXBkYXRlKCk7XG4gICAgICBtb2RhbC5oaWRlKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xuaW1wb3J0IGRlbGV0ZVRhc2sgZnJvbSBcIi4uLy4uL2Fzc2V0cy9kZWxldGUuc3ZnXCI7XG5pbXBvcnQgZWRpdCBmcm9tIFwiLi4vLi4vYXNzZXRzL2VkaXQuc3ZnXCI7XG5pbXBvcnQgY2hlY2tlZCBmcm9tIFwiLi4vLi4vYXNzZXRzL2NoZWNrZWQuc3ZnXCI7XG5pbXBvcnQgdW5jaGVja2VkIGZyb20gXCIuLi8uLi9hc3NldHMvdW5jaGVja2VkLnN2Z1wiO1xuXG5jbGFzcyBNaW5pQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgdGVtcGxhdGUgPSAoc3RhdGUpID0+IGBcbiAgICA8ZGl2IGNsYXNzPVwidGFza01pbmlDb250YWluZXIgJHtzdGF0ZS50eXBlQ2xhc3N9XCI+XG4gICAgICAke3N0YXRlLmh0bWx9XG4gICAgPC9kaXY+XG4gIGA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1pbmlDb250YWluZXJDb21wb25lbnQ7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9Db21wb25lbnRcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuLi9wcm9qZWN0XCI7XG5pbXBvcnQgbW9kYWwgZnJvbSBcIi4uL21vZGFsXCI7XG5pbXBvcnQgTmVyb3MgZnJvbSBcIi4uL05lcm9zXCI7XG5pbXBvcnQgUHJvamVjdENvbXBvbmVudCBmcm9tIFwiLi9Qcm9qZWN0Q29tcG9uZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBOZXdQcm9qZWN0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHRlbXBsYXRlID0gKCkgPT5cbiAgICBgXG4gICAgPGRpdiBjbGFzcz0nbmV3UHJvamVjdENvbnRhaW5lcic+XG4gICAgICA8aDE+Q3JlYXRlIG5ldyBQcm9qZWN0PC9oMT5cbiAgICAgIDxmb3JtIGNsYXNzPSduZXdGb3JtJz5cbiAgICAgICAgPGRpdiBjbGFzcz0nZmllbGQgVGl0bGVGaWVsZCc+XG4gICAgICAgIDxsYWJlbCBmb3I9J1RpdGxlJz5Qcm9qZWN0IFRpdGxlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J1RpdGxlJyBpZD0nVGl0bGUnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz0nY3JlYXRlQnV0dG9uJyB0eXBlPSdidXR0b24nPkNyZWF0ZTwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIERPTWVsZW1lbnQoKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBzdXBlci5ET01lbGVtZW50KCk7XG4gICAgbGV0IGJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcbiAgICBsZXQgZm9ybSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZVByb2plY3QoZm9ybSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVQcm9qZWN0KGZvcm0pIHtcbiAgICBsZXQgdGl0bGUgPSBmb3JtLlRpdGxlLnZhbHVlO1xuICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xuICAgIE5lcm9zLnByb2plY3RzLnJlZ2lzdGVyQ29tcG9uZW50KHByb2plY3QuY29tcG9uZW50KTtcbiAgICAvLyBTZWxlY3QgbmV3bHkgY3JlYXRlZCBwcm9qZWN0XG4gICAgUHJvamVjdENvbXBvbmVudC5zZWxlY3RMYXN0UHJvamVjdCgpO1xuICAgIG1vZGFsLmhpZGUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi4vdG9kb1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL3Byb2plY3RcIjtcbmltcG9ydCBOZXJvcyBmcm9tIFwiLi4vTmVyb3NcIjtcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi4vbW9kYWxcIjtcblxuZXhwb3J0IGNsYXNzIE5ld1RvZG9Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICB0ZW1wbGF0ZSA9IChzdGF0ZSkgPT5cbiAgICBgXG4gICAgPGRpdiBjbGFzcz0nbmV3Q29udGFpbmVyJz5cbiAgICAgIDxoMSBjbGFzcz0nbmV3VGl0bGUnPkNyZWF0ZSB0b2RvPC9oMT5cbiAgICAgIDxmb3JtIGNsYXNzPSduZXdGb3JtJz5cbiAgICAgICAgPGRpdiBjbGFzcz0nZmllbGQgVGl0bGVGaWVsZCc+XG4gICAgICAgICAgPGxhYmVsIGZvcj0nVGl0bGUnPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nVGl0bGUnIGlkPSdUaXRsZScgdmFsdWU9XCIke1xuICAgICAgICAgICAgc3RhdGUudG9kbyA/IHN0YXRlLnRvZG8udGl0bGUgOiBcIlwiXG4gICAgICAgICAgfVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nZmllbGQgRHVlZGF0ZUZpZWxkJz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdEdWUgZGF0ZSc+RHVlIGRhdGU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdkYXRlJyBuYW1lPSdEdWVkYXRlJyBpZD0nRHVlIGRhdGUnIHZhbHVlPVwiJHtcbiAgICAgICAgICAgIHN0YXRlLnRvZG8gPyBzdGF0ZS50b2RvLmRhdGUgOiBcIlwiXG4gICAgICAgICAgfVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nZmllbGQgUHJpb3JpdHlGaWVsZCc+XG4gICAgICAgICAgPGxhYmVsIGZvcj0nUHJpb3JpdHknPlByaW9yaXR5PC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJQcmlvcml0eVwiIGlkPVwiUHJpb3JpdHlcIj5cbiAgICAgICAgICAgIDxvcHRpb24gaWQ9J3AxJyB2YWx1ZT1cIlVyZ2VudFwiPlVyZ2VudDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiBpZD0ncDInIHZhbHVlPVwiSGlnaFwiPkhpZ2g8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gaWQ9J3AzJyB2YWx1ZT1cIk1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiBpZD0ncDQnIHZhbHVlPVwiTG93XCI+TG93PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIGlkPSdwNScgdmFsdWU9XCJPcHRpb25hbFwiPk9wdGlvbmFsPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdmaWVsZCBEZXNjcmlwdGlvbkZpZWxkJz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdEZXNjcmlwdGlvbic+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdEZXNjcmlwdGlvbicgaWQ9J0Rlc2NyaXB0aW9uJyB2YWx1ZT1cIiR7XG4gICAgICAgICAgICBzdGF0ZS50b2RvID8gc3RhdGUudG9kby5kZXNjcmlwdGlvbiA6IFwiXCJcbiAgICAgICAgICB9XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPSdjcmVhdGVCdXR0b24nIHR5cGU9J2J1dHRvbic+JHtcbiAgICAgICAgICB0aGlzLnN0YXRlLnRvZG8gPyBcIkVkaXRcIiA6IFwiQ3JlYXRlXCJcbiAgICAgICAgfTwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgRE9NZWxlbWVudCgpIHtcbiAgICBsZXQgZWxlbWVudCA9IHN1cGVyLkRPTWVsZW1lbnQoKTtcbiAgICBsZXQgYnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuICAgIGxldCBmb3JtID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICAvLyBJZiB0aGUgdG9kbyBhbHJlYWR5IGV4aXN0cyAoZWRpdCBtb2RlKSBtYWtlIHRoZSBidXR0b24gZWRpdCB0aGUgdG9kbywgZWxzZSBqdXN0IGNyZWF0ZSBhIG5ldyB0YXNrXG4gICAgaWYgKHRoaXMuc3RhdGUudG9kbykge1xuICAgICAgbGV0IHNlbGVjdCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihgI1ByaW9yaXR5YCk7XG4gICAgICBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9IHRoaXMuc3RhdGUudG9kby5wcmlvcml0eSAtIDE7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5lZGl0VG9kbyhmb3JtKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5jcmVhdGVUb2RvKGZvcm0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgZWRpdFRvZG8oZm9ybSkge1xuICAgIGxldCB0aXRsZSA9IGZvcm0uVGl0bGUudmFsdWU7XG4gICAgbGV0IGRhdGUgPSBmb3JtLkR1ZWRhdGUudmFsdWU7XG4gICAgbGV0IHByaW9yaXR5ID0gZm9ybS5Qcmlvcml0eS5zZWxlY3RlZEluZGV4ICsgMTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBmb3JtLkRlc2NyaXB0aW9uLnZhbHVlO1xuICAgIHRoaXMuc3RhdGUudG9kby5lZGl0KHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pO1xuICAgIFByb2plY3Quc2VsZWN0ZWQuY29tcG9uZW50LnVwZGF0ZSgpO1xuICAgIG1vZGFsLmhpZGUoKTtcbiAgfVxuXG4gIGNyZWF0ZVRvZG8oZm9ybSkge1xuICAgIGxldCB0aXRsZSA9IGZvcm0uVGl0bGUudmFsdWU7XG4gICAgbGV0IGRhdGUgPSBmb3JtLkR1ZWRhdGUudmFsdWU7XG4gICAgbGV0IHByaW9yaXR5ID0gZm9ybS5Qcmlvcml0eS5zZWxlY3RlZEluZGV4ICsgMTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBmb3JtLkRlc2NyaXB0aW9uLnZhbHVlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUucGFyZW50KSB7XG4gICAgICB0aGlzLnN0YXRlLnBhcmVudC5jcmVhdGVUb2RvKHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3IFRvZG8odGl0bGUsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgZmFsc2UpO1xuICAgIH1cbiAgICBQcm9qZWN0LnNlbGVjdGVkLmNvbXBvbmVudC51cGRhdGUoKTtcbiAgICBtb2RhbC5oaWRlKCk7XG4gIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xuaW1wb3J0IE5lcm9zIGZyb20gXCIuLi9OZXJvc1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL3Byb2plY3RcIjtcbmltcG9ydCBUb2RvQ29tcG9uZW50IGZyb20gXCIuL1RvZG9Db21wb25lbnRcIjtcbmltcG9ydCBoZWxwZXIgZnJvbSBcIi4uL2hlbHBlclwiO1xuXG5jbGFzcyBQcm9qZWN0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IobmFtZSwgc3RhdGUpIHtcbiAgICBzdXBlcihuYW1lLCBzdGF0ZSk7XG4gIH1cblxuICBzdGF0aWMgcmVzZXRWaWV3KCkge1xuICAgIGxldCBwZW5kaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwZW5kaW5nVG9kb3NcIik7XG4gICAgbGV0IGNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcGxldGVkVG9kb3NcIik7XG5cbiAgICBwZW5kaW5nLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29tcGxldGVkLmlubmVySFRNTCA9IFwiXCI7XG4gIH1cblxuICAvLyBUaGlzIG1ldGhvZCBzZWxlY3RzIHRoZSBsYXN0IHByb2plY3QgY3JlYXRlZFxuICBzdGF0aWMgc2VsZWN0TGFzdFByb2plY3QoKSB7XG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RDb250YWluZXJcIik7XG4gICAgaWYgKHByb2plY3QubGVuZ3RoID4gMCkge1xuICAgICAgcHJvamVjdFtwcm9qZWN0Lmxlbmd0aCAtIDFdLmNsaWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFByb2plY3Quc2VsZWN0ZWQgPSBudWxsO1xuICAgICAgUHJvamVjdENvbXBvbmVudC5yZXNldFZpZXcoKTtcbiAgICB9XG4gIH1cblxuICB0ZW1wbGF0ZSA9IChzdGF0ZSkgPT5cbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cInByb2plY3RDb250YWluZXJcIj5cbiAgICAgIDxoMz4ke3N0YXRlLnByb2plY3QubmFtZX08L2gzPlxuICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgLy8gVGhpcyBtZXRob2QgZGlzcGxheXMgYWxsIHRvZG9zIGJlbG9uZ2luZyB0byB0aGlzIHByb2plY3RcbiAgZGlzcGxheVRvZG9zKHNlbGVjdG9yLCBwcm9qZWN0VG9kb3MpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IE5lcm9zKGAke3NlbGVjdG9yfVRvZG9zYCk7XG4gICAgbGV0IHRvZG9zID0gaGVscGVyLm1lcmdlU29ydChwcm9qZWN0VG9kb3MpO1xuXG4gICAgaWYgKHRvZG9zLmxlbmd0aCA+IDApIHtcbiAgICAgIHRvZG9zID0gdG9kb3MubWFwKFxuICAgICAgICAodGFzaywgaW5kZXgpID0+XG4gICAgICAgICAgbmV3IFRvZG9Db21wb25lbnQoYHRvZG8ke2luZGV4fWAsIHtcbiAgICAgICAgICAgIHRhc2s6IHRhc2ssXG4gICAgICAgICAgICBzdWJ0YXNrczogaGVscGVyLm1lcmdlU29ydCh0YXNrLmNoaWxkcmVuKSxcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgZWxlbWVudC5yZWdpc3RlckNvbXBvbmVudCh0b2RvKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnVwZGF0ZVZpZXcoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5kaXNwbGF5VG9kb3MoXCJjb21wbGV0ZWRcIiwgdGhpcy5zdGF0ZS5wcm9qZWN0LmNvbXBsZXRlZCk7XG4gICAgdGhpcy5kaXNwbGF5VG9kb3MoXCJwZW5kaW5nXCIsIHRoaXMuc3RhdGUucHJvamVjdC5wZW5kaW5nKTtcbiAgfVxuXG4gIHJlZnJlc2hUb2RvcygpIHtcbiAgICBsZXQgcGVuZGluZ0FycmF5ID0gdGhpcy5zdGF0ZS5wcm9qZWN0LnBlbmRpbmc7XG4gICAgbGV0IGNvbXBsZXRlZEFycmF5ID0gdGhpcy5zdGF0ZS5wcm9qZWN0LmNvbXBsZXRlZDtcbiAgICBpZiAocGVuZGluZ0FycmF5Lmxlbmd0aCA+IDApIHRoaXMuZGlzcGxheVRvZG9zKFwicGVuZGluZ1wiLCBwZW5kaW5nQXJyYXkpO1xuICAgIGlmIChjb21wbGV0ZWRBcnJheS5sZW5ndGggPiAwKVxuICAgICAgdGhpcy5kaXNwbGF5VG9kb3MoXCJjb21wbGV0ZWRcIiwgY29tcGxldGVkQXJyYXkpO1xuICB9XG5cbiAgRE9NZWxlbWVudCgpIHtcbiAgICByZXR1cm4gc3VwZXIuRE9NZWxlbWVudChcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUlEKGUuY3VycmVudFRhcmdldCk7XG4gICAgICBQcm9qZWN0LnNlbGVjdGVkID0gdGhpcy5zdGF0ZS5wcm9qZWN0O1xuICAgICAgLy8gUmVzZXQgdGhlIGJvYXJkIGJlZm9yZSBkaXNwbGF5aW5nIHRoaXMgcHJvamVjdCB0b2Rvc1xuICAgICAgUHJvamVjdENvbXBvbmVudC5yZXNldFZpZXcoKTtcbiAgICAgIHRoaXMucmVmcmVzaFRvZG9zKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBUaGlzIG1ldGhvZCByZW1vdmVzIHRoZSBpZCBmcm9tIHRoZSBwcmV2aW91cyBlbGVtZW50IGFuZCBhc3NpZ25zIGl0IHRvIHRoZSBjbGlja2VkIGVsZW1lbnRcbiAgaGFuZGxlSUQodGFyZ2V0KSB7XG4gICAgbGV0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RlZFByb2plY3RcIik7XG4gICAgaWYgKHNlbGVjdGVkKSBzZWxlY3RlZC5pZCA9IFwiXCI7XG4gICAgdGFyZ2V0LmlkID0gXCJzZWxlY3RlZFByb2plY3RcIjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Q29tcG9uZW50O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgTWluaUNvbnRhaW5lckNvbXBvbmVudCBmcm9tIFwiLi9NaW5pQ29udGFpbmVyQ29tcG9uZW50XCI7XG5pbXBvcnQgUHJpb3JpdHkgZnJvbSBcIi4uL3ByaW9yaXR5XCI7XG5pbXBvcnQgeyB2aWV3VG9kb0NvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdUb2RvQ29tcG9uZW50XCI7XG5pbXBvcnQgbW9kYWwgZnJvbSBcIi4uL21vZGFsXCI7XG5pbXBvcnQgeyBOZXdUb2RvQ29tcG9uZW50IH0gZnJvbSBcIi4vTmV3VG9kb0NvbXBvbmVudFwiO1xuaW1wb3J0IGRlbGV0ZVRhc2sgZnJvbSBcIi4uLy4uL2Fzc2V0cy9kZWxldGUuc3ZnXCI7XG5pbXBvcnQgZWRpdCBmcm9tIFwiLi4vLi4vYXNzZXRzL2VkaXQuc3ZnXCI7XG5pbXBvcnQgY2hlY2tlZCBmcm9tIFwiLi4vLi4vYXNzZXRzL2NoZWNrZWQuc3ZnXCI7XG5pbXBvcnQgdW5jaGVja2VkIGZyb20gXCIuLi8uLi9hc3NldHMvdW5jaGVja2VkLnN2Z1wiO1xuaW1wb3J0IHsgRGVsZXRlQ29tcG9uZW50IH0gZnJvbSBcIi4vRGVsZXRlQ29tcG9uZW50XCI7XG5cbi8vIDEuLSBJZiBhIGJpZyB0b2RvIGlzIGNoZWNrZWQsIGl0cyBjaGlsZHJlbiBhcmUgYWxzbyBjaGVja2VkIOKclO+4j1xuLy8gMi4tIElmIGFsbCB0aGUgc3VidG9kb3MgYXJlIGNoZWNrZWQsIHRoZSBwYXJlbnQgaXMgYWxzbyBjaGVja2VkIOKclO+4j1xuLy8gMy4tIElmIGEgYmlnIHRvZG8gYW5kIGl0cyBjaGlsZHJlbiBhcmUgY2hlY2tlZCwgYnV0IG9uZSBvZiB0aGUgY2hpbGRyZW5cbi8vIGlzIHVuY2hlY2tlZCwgdGhlIHBhcmVudCB0b2RvIHdpbGwgYWxzbyBiZSB1bmNoZWNrZWQg4pyU77iPXG4vLyA0Li0gSWYgYSBiaWcgdG9kbyBhbmQgaXRzIGNoaWxkcmVuIGFyZSBjaGVja2VkLCBidXQgdGhlIHBhcmVudCBpcyB1bmNoZWNrZWQsXG4vLyBhbGwgaXRzIGNoaWxkcmVuIHdpbGwgYWxzbyBiZSB1bmNoZWNrZWQg4pyU77iPXG5cbmNsYXNzIFRhc2tDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzdGF0ZSkge1xuICAgIHN1cGVyKG5hbWUsIHN0YXRlKTtcbiAgICAvLyBDcmVhdGUgdGhlIHByaW9yaXR5IGNvbG9yIGh0bWwgYW5kIGNvbG9yLCBJIHNob3VsZCBwdXQgdGhpcyBpbnRvIGl0cyBvd24gY2xhc3NcbiAgICB0aGlzLmNvbG9ySFRNTCA9IChwcmlvcml0eSkgPT5cbiAgICAgIGA8ZGl2IGNsYXNzPVwicHJpb3JpdHlDb2xvclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJHtwcmlvcml0eS5jb2xvcn1cIj48L2Rpdj5gO1xuICAgIHRoaXMuY29sb3JNaW5pID0gbmV3IE1pbmlDb250YWluZXJDb21wb25lbnQoXCJwcmlvcml0eVwiLCB7XG4gICAgICBodG1sOiB0aGlzLmNvbG9ySFRNTChQcmlvcml0eS5wcmlvcml0eShzdGF0ZS50b2RvLnByaW9yaXR5KSksXG4gICAgICB0eXBlQ2xhc3M6IFwicHJpb3JpdHlCdXR0b25NaW5pXCIsXG4gICAgfSk7XG4gICAgdGhpcy5zdGF0ZS50b2RvLmNvbXBvbmVudCA9IHRoaXM7XG4gICAgLy8gSWYgdGhpcyB0b2RvIGlzIGNoZWNrZWQsIHRoZSBkb20gZWxlbWVudCB3aWxsIGhhdmUgdGhlIGNsYXNzIFwiY29tcGxldGVkVGFza1wiXG4gICAgaWYgKHRoaXMuc3RhdGUudG9kby5jaGVjaykgdGhpcy5zdGF0ZS5jbGFzc2VzLnB1c2goXCJjb21wbGV0ZWRUYXNrXCIpO1xuICB9XG5cbiAgLy8gQ3JlYXRlIGFsbCB0aGUgc3RhdGljIGJ1dHRvbnMgbmVlZGVkIGZvciBhIHRhc2ssIHRoZXNlIGFyZW4ndCBkeW5hbWljIHNpbmNlIGFsbCB0YXNrcyBoYXZlIHRoZSBzYW1lIGJ1dHRvbnNcbiAgc3RhdGljIGltZ0hUTUwgPSAoYWN0aW9uU1ZHKSA9PiBgPGltZyBjbGFzcz1cInRhc2tCdXR0b25cIiBzcmM9JHthY3Rpb25TVkd9PmA7XG4gIHN0YXRpYyBlZGl0TWluaSA9IG5ldyBNaW5pQ29udGFpbmVyQ29tcG9uZW50KFwiZWRpdFwiLCB7XG4gICAgaHRtbDogVGFza0NvbXBvbmVudC5pbWdIVE1MKGVkaXQpLFxuICAgIHR5cGVDbGFzczogXCJlZGl0QnV0dG9uTWluaVwiLFxuICB9KTtcbiAgc3RhdGljIGRlbGV0ZU1pbmkgPSBuZXcgTWluaUNvbnRhaW5lckNvbXBvbmVudChcImRlbGV0ZVwiLCB7XG4gICAgaHRtbDogVGFza0NvbXBvbmVudC5pbWdIVE1MKGRlbGV0ZVRhc2spLFxuICAgIHR5cGVDbGFzczogXCJkZWxldGVCdXR0b25NaW5pXCIsXG4gIH0pO1xuXG4gIC8vIFJldHVybiBhIG1pbmlDb250YWluZXIgd2l0aCB0aGUgY29ycmVzcG9uZGluZyBzdmcgZmlsZSwgY2hlY2tlZCBpZiB0b2RvIGlzQ2hlY2tlZFxuICAvLyBwcm9wZXJ0eSBpcyB0cnVlLCB1bmNoZWNrZWQgb3RoZXJ3aXNlLlxuICBjaGVja01pbmkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBNaW5pQ29udGFpbmVyQ29tcG9uZW50KFwiY2hlY2tcIiwge1xuICAgICAgaHRtbDogVGFza0NvbXBvbmVudC5pbWdIVE1MKHRoaXMuY2hlY2tTdGF0ZSgpKSxcbiAgICAgIHR5cGVDbGFzczogXCJjaGVja0J1dHRvbk1pbmlcIixcbiAgICB9KTtcbiAgfTtcblxuICAvLyBUaGlzIG1ldGhvZCBjaGVja3MgdGhlIHN0YXRlIG9mIHRoZSBpc0NoZWNrZWQgcHJvcGVydHkgZnJvbSB0b2Rvc1xuICBjaGVja1N0YXRlID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnRvZG8uY2hlY2sgPyBjaGVja2VkIDogdW5jaGVja2VkO1xuICB9O1xuXG4gIHRlbXBsYXRlID0gKHN0YXRlKSA9PlxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwiJHtzdGF0ZS5jbGFzc2VzLmpvaW4oXCIgXCIpfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2tEYXRhQ29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrVGl0bGVcIj5cbiAgICAgICAgICA8cD4ke3N0YXRlLnRvZG8udGl0bGV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tUaW1lXCI+XG4gICAgICAgICAgPHA+NSBkYXlzIGxlZnQ8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgRE9NZWxlbWVudCgpIHtcbiAgICBsZXQgZWxlbWVudCA9IHN1cGVyLkRPTWVsZW1lbnQoKTtcbiAgICB0aGlzLnZpZXdFdmVudExpc3RlbmVyKGVsZW1lbnQpO1xuICAgIGxldCBjaGVjayA9IHRoaXMuY2hlY2tNaW5pKCkuRE9NZWxlbWVudChcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIHRoaXMuZXZlbnRIYW5kbGVyKCkuY2hlY2tCdXR0b25cbiAgICApO1xuICAgIGxldCBwcmlvcml0eSA9IHRoaXMuY29sb3JNaW5pLkRPTWVsZW1lbnQoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICB0aGlzLmV2ZW50SGFuZGxlcigpLnByaW9yaXR5QnV0dG9uXG4gICAgKTtcbiAgICBsZXQgZWRpdCA9IFRhc2tDb21wb25lbnQuZWRpdE1pbmkuRE9NZWxlbWVudChcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIHRoaXMuZXZlbnRIYW5kbGVyKCkuZWRpdEJ1dHRvblxuICAgICk7XG4gICAgbGV0IGRlbGV0ZUJ0biA9IFRhc2tDb21wb25lbnQuZGVsZXRlTWluaS5ET01lbGVtZW50KFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgdGhpcy5ldmVudEhhbmRsZXIoKS5kZWxldGVCdXR0b25cbiAgICApO1xuXG4gICAgZWxlbWVudC5wcmVwZW5kKHByaW9yaXR5KTtcbiAgICBlbGVtZW50LnByZXBlbmQoY2hlY2spO1xuICAgIGVsZW1lbnQuYXBwZW5kKGVkaXQpO1xuICAgIGVsZW1lbnQuYXBwZW5kKGRlbGV0ZUJ0bik7XG4gICAgdGhpcy5zdGF0ZS50b2RvLmRvbUVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgdmlld0V2ZW50TGlzdGVuZXIoZWxlbWVudCkge1xuICAgIGxldCBpbm5lckNvbnRhaW5lciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrRGF0YUNvbnRhaW5lclwiKTtcbiAgICBpbm5lckNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5ldmVudEhhbmRsZXIoKS52aWV3QnV0dG9uKTtcbiAgfVxuXG4gIGNoZWNrQ2hpbGRyZW4oKSB7XG4gICAgdGhpcy5zdGF0ZS50b2RvLmNoaWxkcmVuLmZvckVhY2goKHN1YnRhc2spID0+IHtcbiAgICAgIHN1YnRhc2suY2hlY2tUb2RvKCk7XG4gICAgfSk7XG4gIH1cblxuICB1bmNoZWNrQ2hpbGRyZW4oKSB7XG4gICAgdGhpcy5zdGF0ZS50b2RvLmNoaWxkcmVuLmZvckVhY2goKHN1YnRhc2spID0+IHtcbiAgICAgIHN1YnRhc2sudW5jaGVja1RvZG8oKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNoZWNrUGFyZW50KCkge1xuICAgIGxldCBwYXJlbnQgPSB0aGlzLnN0YXRlLnRvZG8ucGFyZW50O1xuICAgIHBhcmVudC5jaGVja1RvZG8oKTtcbiAgfVxuXG4gIHVuY2hlY2tQYXJlbnQoKSB7XG4gICAgbGV0IHBhcmVudCA9IHRoaXMuc3RhdGUudG9kby5wYXJlbnQ7XG4gICAgcGFyZW50LnVuY2hlY2tUb2RvKCk7XG4gIH1cblxuICAvL0NoZWNrIGlmIHRoZSBzdWJ0YXNrcyBhcnJheSBjb250YWlucyBvbmx5IGNvbXBsZXRlZCB0YXNrc1xuICBhcmVTdWJ0YXNrc0NvbXBsZXRlZCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS50b2RvLmlzU3VidGFzaygpKSB7XG4gICAgICBsZXQgc3VidGFza3MgPSB0aGlzLnN0YXRlLnRvZG8ucGFyZW50LmNoaWxkcmVuO1xuICAgICAgcmV0dXJuIHN1YnRhc2tzLmV2ZXJ5KChzdWJ0YXNrKSA9PiBzdWJ0YXNrLmNoZWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZXZlbnRIYW5kbGVyID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBjaGVja0J1dHRvbjogKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS50b2RvLmNoZWNrKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGJpZyB0b2RvIGlzIGNvbXBsZXRlZCBhbmQgYSBzdWJ0YXNrIGlzIHVuY2hlY2tlZCwgdGhlIGJpZ1xuICAgICAgICAgIC8vIHRvZG8gaXMgdW5jaGVja2VkXG4gICAgICAgICAgaWYgKHRoaXMuYXJlU3VidGFza3NDb21wbGV0ZWQoKSAmJiB0aGlzLnN0YXRlLnRvZG8uaXNTdWJ0YXNrKCkpXG4gICAgICAgICAgICB0aGlzLnVuY2hlY2tQYXJlbnQoKTtcbiAgICAgICAgICB0aGlzLnN0YXRlLnRvZG8udW5jaGVja1RvZG8oKTtcbiAgICAgICAgICAvLyBJZiB0aGUgYmlnIHRvZG8gaXMgdW5jaGVja2VkLCBtYXJrIGFsbCBpdHMgY2hpbGRyZW4gdW5jaGVja2VkXG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUudG9kby5jaGlsZHJlbikgdGhpcy51bmNoZWNrQ2hpbGRyZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLnRvZG8uY2hlY2tUb2RvKCk7XG4gICAgICAgICAgLy8gSWYgYWxsIHRoZSBzdWJzdGFza3MgYXJlIGNvbXBsZXRlZCwgbWFyayBjaGVja2VkIHRoZSBiaWcgdG9kb1xuICAgICAgICAgIGlmICh0aGlzLmFyZVN1YnRhc2tzQ29tcGxldGVkKCkgJiYgdGhpcy5zdGF0ZS50b2RvLmlzU3VidGFzaygpKVxuICAgICAgICAgICAgdGhpcy5jaGVja1BhcmVudCgpO1xuICAgICAgICAgIC8vIElmIHRoZSBiaWcgdG9kbyBpcyBjaGVja2VkLCBtYXJrIGFsbCBpdHMgY2hpbGRyZW4gY2hlY2tlZFxuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvZG8uY2hpbGRyZW4pIHRoaXMuY2hlY2tDaGlsZHJlbigpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJpb3JpdHlCdXR0b246ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgcHJpb3JpdHkgYnV0dG9uIHdhcyBwcmVzc2VkXCIsIHRoaXMuc3RhdGUpO1xuICAgICAgfSxcbiAgICAgIHZpZXdCdXR0b246ICgpID0+IHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5ldyB2aWV3VG9kb0NvbXBvbmVudChcInRhc2tWaWV3XCIsIHtcbiAgICAgICAgICB0b2RvOiB0aGlzLnN0YXRlLnRvZG8sXG4gICAgICAgIH0pO1xuICAgICAgICBtb2RhbC5zaG93KGNvbXBvbmVudCk7XG4gICAgICB9LFxuICAgICAgZWRpdEJ1dHRvbjogKCkgPT4ge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IE5ld1RvZG9Db21wb25lbnQoXCJ0YXNrRWRpdFwiLCB7XG4gICAgICAgICAgdG9kbzogdGhpcy5zdGF0ZS50b2RvLFxuICAgICAgICB9KTtcbiAgICAgICAgbW9kYWwuc2hvdyhjb21wb25lbnQpO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZUJ1dHRvbjogKCkgPT4ge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IERlbGV0ZUNvbXBvbmVudChcImRlbGV0ZVwiLCB7XG4gICAgICAgICAgdG9kbzogdGhpcy5zdGF0ZS50b2RvLFxuICAgICAgICB9KTtcbiAgICAgICAgbW9kYWwuc2hvdyhjb21wb25lbnQpO1xuICAgICAgfSxcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrQ29tcG9uZW50O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgTmVyb3MgZnJvbSBcIi4uL05lcm9zXCI7XG5pbXBvcnQgVGFza0NvbXBvbmVudCBmcm9tIFwiLi9UYXNrQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBOZXdUb2RvQ29tcG9uZW50IH0gZnJvbSBcIi4vTmV3VG9kb0NvbXBvbmVudFwiO1xuaW1wb3J0IG1vZGFsIGZyb20gXCIuLi9tb2RhbFwiO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNsYXNzIFRvZG9Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbW92ZVRvQ29tcGxldGVkKGVsZW1lbnQpIHtcbiAgICBsZXQgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wbGV0ZWRUb2Rvc1wiKTtcbiAgICBjb21wbGV0ZWQuYXBwZW5kKGVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgbW92ZVRvUGVuZGluZyhlbGVtZW50KSB7XG4gICAgbGV0IHBlbmRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BlbmRpbmdUb2Rvc1wiKTtcbiAgICBwZW5kaW5nLmFwcGVuZChlbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IobmFtZSwgc3RhdGUpIHtcbiAgICBzdXBlcihuYW1lLCBzdGF0ZSk7XG4gICAgdGhpcy5jcmVhdGVUYXNrQ29tcG9uZW50cygpO1xuICB9XG5cbiAgdGVtcGxhdGUgPSAoc3RhdGUpID0+XG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrQ29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic3VidGFza3NDb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYWRkU3VidGFzayc+KyBBZGQgU3VidGFzazwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgLy8gVGhpcyBtZXRob2QgdGFrZXMgdGhlIHN0YXRlIHRhc2tzIGFuZCBzdWJ0YXNrcyBhbmQgY29udmVydHMgdGhlbSBpbnRvIFRhc2tDb21wb25lbnRzLFxuICAvLyB0aGVuIGFzc2lnbiB0aG9zZSBjb21wb25lbnRzIHRvIGJlIHRoZSBuZXcgdmFsdWVzIGZvciBzdGF0ZSB0YXNrcyBhbmQgc3VidGFza3MuXG4gIGNyZWF0ZVRhc2tDb21wb25lbnRzKCkge1xuICAgIC8vIEkgZG9uJ3Qga25vdyBpZiB0aGlzIHNob3VsZCBnbyBoZXJlLCBidXQgYWxsIHRoaXMgZG9lcyBpcyBjb252ZXJ0IHRoZSB0b2RvIG9iamVjdFxuICAgIC8vIGluIHRoZSBzdGF0ZSBvYmplY3QgYW5kIHR1cm4gaXQgaW50byBhIHRhc2tDb21wb25lbnQsIHJlYWR5IHRvIGJlIHVzZWQuXG4gICAgdGhpcy5zdGF0ZS50YXNrRE9NID0gbmV3IFRhc2tDb21wb25lbnQoXCJ0YXNrXCIsIHtcbiAgICAgIHRvZG86IHRoaXMuc3RhdGUudGFzayxcbiAgICAgIGNsYXNzZXM6IFtcInRhc2tcIl0sXG4gICAgfSkuRE9NZWxlbWVudCgpO1xuICAgIC8vIFRoaXMgdGFrZXMgdGhlIGNoaWxkcmVuIGFycmF5IGFuZCBhcHBsaWVzIHRoZSBzYW1lIHByb2Nlc3MgYWJvdmUgdG8gZWFjaCB0YXNrXG4gICAgdGhpcy5zdGF0ZS5zdWJ0YXNrc0RPTSA9IHRoaXMuc3RhdGUuc3VidGFza3MubWFwKCh0YXNrKSA9PlxuICAgICAgbmV3IFRhc2tDb21wb25lbnQoXCJzdWJ0YXNrXCIsIHtcbiAgICAgICAgdG9kbzogdGFzayxcbiAgICAgICAgY2xhc3NlczogW1widGFza1wiLCBcInN1YnRhc2tcIl0sXG4gICAgICB9KS5ET01lbGVtZW50KClcbiAgICApO1xuICB9XG5cbiAgLy8gVGhpcyBtZXRob2QgdGFrZXMgdGhlIGJ1dHRvbiBlbGVtZW50IGFuZCBhZGRzIHRoZSBldmVudCBsaXN0ZW5lciB0byBjcmVhdGUgYSBzdWJ0YXNrXG4gIGFkZFN1YnRhc2soYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLnNob3dNb2RhbCh0aGlzLnN0YXRlLnRhc2spO1xuICAgIH0pO1xuICB9XG5cbiAgRE9NZWxlbWVudCgpIHtcbiAgICBsZXQgZWxlbWVudCA9IHN1cGVyLkRPTWVsZW1lbnQoKTtcbiAgICBsZXQgc3VidGFzayA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJ0YXNrc0NvbnRhaW5lclwiKTtcbiAgICBsZXQgYnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFN1YnRhc2tcIik7XG4gICAgdGhpcy5hZGRTdWJ0YXNrKGJ1dHRvbik7XG5cbiAgICBlbGVtZW50LnByZXBlbmQodGhpcy5zdGF0ZS50YXNrRE9NKTtcbiAgICB0aGlzLnN0YXRlLnN1YnRhc2tzRE9NLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHN1YnRhc2suaW5zZXJ0QmVmb3JlKHRhc2ssIGJ1dHRvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzaG93TW9kYWwocGFyZW50KSB7XG4gICAgbGV0IG5ld1RvZG8gPSBuZXcgTmV3VG9kb0NvbXBvbmVudChcIm5ld1RvZG9cIiwgeyBwYXJlbnQ6IHBhcmVudCB9KTtcbiAgICBtb2RhbC5zaG93KG5ld1RvZG8pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9Db21wb25lbnQ7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9Db21wb25lbnRcIjtcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi4vbW9kYWxcIjtcbmltcG9ydCBUYXNrQ29tcG9uZW50IGZyb20gXCIuL1Rhc2tDb21wb25lbnRcIjtcblxuZXhwb3J0IGNsYXNzIHZpZXdUb2RvQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgdGVtcGxhdGUgPSAoc3RhdGUpID0+XG4gICAgYFxuICAgIDxkaXYgY2xhc3M9J2luZm9Db250YWluZXInPlxuICAgICAgPGRpdiBjbGFzcz0nbWFpblRhc2tDb250YWluZXInPlxuICAgICAgICA8aDEgY2xhc3M9J3ZpZXdUaXRsZSc+JHtzdGF0ZS50b2RvLnRpdGxlfTwvaDE+XG4gICAgICAgIDxocj5cbiAgICAgICAgPGRpdiBjbGFzcz0nZGVzY3JpcHRpb25WaWV3Q29udGFpbmVyJz5cbiAgICAgICAgICA8cCBjbGFzcz0ndmlld0Rlc2NyaXB0aW9uJz4ke3N0YXRlLnRvZG8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0ndG9kb0RhdGFDb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J2RhdGVWaWV3Q29udGFpbmVyJz5cbiAgICAgICAgICAgIDxoMz5EdWUgZGF0ZTwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdkYXRlU3RyaW5nQ29udGFpbmVyJz5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9J2RhdGVWaWV3Jz4wMS8wMS8yMDIzPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzcz0ndGltZUxlZnRWaWV3Jz4oNCBkYXlzIGxlZnQpPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz0ncHJpb3JpdHlWaWV3Q29udGFpbmVyJz5cbiAgICAgICAgICAgIDxoMz5Qcmlvcml0eTwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSdzZXBhcmF0b3InPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0ndmlld1N1YkNvbnRhaW5lcic+XG4gICAgICAgIDxoMSBjbGFzcz0nbGlua2VkVGFza0hlYWRlcic+JHtcbiAgICAgICAgICBzdGF0ZS50b2RvLmlzU3VidGFzaygpID8gXCJQYXJlbnRcIiA6IFwiU3VidGFza3NcIlxuICAgICAgICB9PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzcz0nbGlua2VkVGFza3NDb250YWluZXInPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIERPTWVsZW1lbnQoKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBzdXBlci5ET01lbGVtZW50KCk7XG4gICAgbGV0IHN1YnRhc2tDb250YWluZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlua2VkVGFza3NDb250YWluZXJcIik7XG4gICAgaWYgKCF0aGlzLnN0YXRlLnRvZG8uaXNTdWJ0YXNrKCkpIHtcbiAgICAgIHRoaXMuc3RhdGUudG9kby5jaGlsZHJlbi5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGxldCB0YXNrRE9NID0gbmV3IFRhc2tDb21wb25lbnQoXCJzdWJ0YXNrXCIsIHtcbiAgICAgICAgICB0b2RvOiB0YXNrLFxuICAgICAgICAgIGNsYXNzZXM6IFtcInRhc2tcIiwgXCJzdWJ0YXNrXCJdLFxuICAgICAgICB9KS5ET01lbGVtZW50KCk7XG4gICAgICAgIHN1YnRhc2tDb250YWluZXIuYXBwZW5kKHRhc2tET00pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwYXJlbnRET00gPSBuZXcgVGFza0NvbXBvbmVudChcInRvZG9cIiwge1xuICAgICAgICB0b2RvOiB0aGlzLnN0YXRlLnRvZG8ucGFyZW50LFxuICAgICAgICBjbGFzc2VzOiBbXCJ0YXNrIHN1YnRhc2tcIl0sXG4gICAgICB9KS5ET01lbGVtZW50KCk7XG4gICAgICBzdWJ0YXNrQ29udGFpbmVyLmFwcGVuZChwYXJlbnRET00pO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIGxpbmtlZFRhc2tzKCkge31cbn1cbiIsImltcG9ydCB7IGVsIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFByb2plY3RDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Qcm9qZWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgTmVyb3MgZnJvbSBcIi4vTmVyb3NcIjtcblxuY29uc3QgaGVscGVyID0gKCgpID0+IHtcbiAgLy8gVGhpcyBtZXRob2QgZmluZHMgdGhlIGVsZW1lbnQgbWF0Y2hpbmcgdGhlIElEIG9uIHRoZSBnaXZlbiBhcnJheSBhbmQgZGVsZXRlcyBpdCBieSBpbmRleFxuICBjb25zdCBkZWxldGVJdGVtID0gKGFycmF5LCBpZCkgPT4ge1xuICAgIGxldCBmb3VuZCA9IGZpbmRUYXNrKFsuLi5hcnJheV0sIGlkKTtcbiAgICBsZXQgZm91bmRJbmRleCA9IGFycmF5LmluZGV4T2YoZm91bmQpO1xuICAgIGZvdW5kSW5kZXggPT09IDAgPyBhcnJheS5zaGlmdCgpIDogYXJyYXkuc3BsaWNlKGZvdW5kSW5kZXgsIDEpO1xuICAgIHJldHVybiBmb3VuZDtcbiAgfTtcblxuICAvLyBHaXZlbiBhbiBhcnJheSBvZiB0b2RvcyBhbmQgYW4gaWQsIHRoaXMgbWV0aG9kIHdpbGwgcmVjdXJzaXZlbHkgZmluZCB0aGUgdG9kb1xuICBjb25zdCBmaW5kVGFzayA9IChxdWV1ZSwgaWQpID0+IHtcbiAgICBsZXQgY3VycmVudCA9IHF1ZXVlWzBdO1xuICAgIGlmIChjdXJyZW50LmlkID09PSBpZCkgcmV0dXJuIGN1cnJlbnQ7XG4gICAgcXVldWUuc2hpZnQoKTtcblxuICAgIGlmICghY3VycmVudC5pc1N1YnRhc2soKSkgcXVldWUgPSBbLi4ucXVldWUsIC4uLmN1cnJlbnQuY2hpbGRyZW5dO1xuICAgIHJldHVybiBmaW5kVGFzayhxdWV1ZSwgaWQpO1xuICB9O1xuXG4gIC8vIE1lcmdlIHNvcnQgYWxnb3JpdGhtXG5cbiAgY29uc3QgbWVyZ2VTb3J0ID0gKGFycmF5KSA9PiB7XG4gICAgaWYgKGFycmF5Lmxlbmd0aCA8IDEpIHJldHVybiBhcnJheTtcbiAgICBsZXQgc29ydGVkQXJyYXkgPSBbXTtcbiAgICBpZiAoYXJyYXkubGVuZ3RoIDwgMikge1xuICAgICAgc29ydGVkQXJyYXkucHVzaChhcnJheVswXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBoYWxmID0gTWF0aC5mbG9vcihhcnJheS5sZW5ndGggLyAyKTtcbiAgICAgIGxldCBhcnJheTEgPSBtZXJnZVNvcnQoYXJyYXkuc3BsaWNlKDAsIGhhbGYpKTtcbiAgICAgIGxldCBhcnJheTIgPSBtZXJnZVNvcnQoYXJyYXkpO1xuICAgICAgbGV0IGNvdW50ZXIgPSBhcnJheTEubGVuZ3RoICsgYXJyYXkyLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudGVyOyBpbmRleCsrKSB7XG4gICAgICAgIGlmIChhcnJheTEubGVuZ3RoID09PSAwIHx8IGFycmF5Mi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBzb3J0ZWRBcnJheSA9IHNvcnRlZEFycmF5LmNvbmNhdChhcnJheTEuY29uY2F0KGFycmF5MikpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcnJheTFbMF0ucHJpb3JpdHkgPCBhcnJheTJbMF0ucHJpb3JpdHkpIHtcbiAgICAgICAgICBzb3J0ZWRBcnJheS5wdXNoKGFycmF5MS5zaGlmdCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzb3J0ZWRBcnJheS5wdXNoKGFycmF5Mi5zaGlmdCgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc29ydGVkQXJyYXk7XG4gIH07XG5cbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvICdjbGVhciBjb21wbGV0ZWQnIGJ1dHRvbiwgdGhpcyBzaG91bGRuJ3QgYmUgaGVyZSBidXRcbiAgLy8gSSBkb24ndCB0aGluayBpdCdzIHdvcnRoIGNyZWF0aW5nIGEgbmV3IG1vZHVsZSBqdXN0IGZvciB0aGlzLlxuICBsZXQgY2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NsZWFyQ29tcGxldGVkXCIpO1xuICBjbGVhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0ID0gUHJvamVjdC5zZWxlY3RlZDtcbiAgICBsZXQgcHJvamVjdENvbXBvbmVudCA9IHByb2plY3QuY29tcG9uZW50O1xuXG4gICAgUHJvamVjdENvbXBvbmVudC5yZXNldFZpZXcoKTtcbiAgICBwcm9qZWN0LmNsZWFyQ29tcGxldGVkVG9kb3MoKTtcbiAgICBwcm9qZWN0Q29tcG9uZW50LmRpc3BsYXlUb2RvcyhcImNvbXBsZXRlZFwiLCBwcm9qZWN0LmNvbXBsZXRlZCk7XG4gICAgcHJvamVjdENvbXBvbmVudC5kaXNwbGF5VG9kb3MoXCJwZW5kaW5nXCIsIHByb2plY3QucGVuZGluZyk7XG4gIH0pO1xuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byAnRGVsZXRlIHRoaXMgcHJvamVjdCcgYnV0dG9uXG4gIGxldCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWxldGVQcm9qZWN0XCIpO1xuICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgTmVyb3MuZGVsZXRlTmVyb3NDb21wb25lbnQoTmVyb3MucHJvamVjdHMsIFByb2plY3Quc2VsZWN0ZWQuY29tcG9uZW50KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHsgZGVsZXRlSXRlbSwgZmluZFRhc2ssIG1lcmdlU29ydCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaGVscGVyO1xuIiwiY29uc3QgaWRBc3NpZ25lciA9ICgoKSA9PiB7XG4gIGxldCBhc3NpZ25lciA9IDE7XG5cbiAgY29uc3QgZ2V0SWROdW1iZXIgPSAoKSA9PiB7XG4gICAgYXNzaWduZXIgKz0gMTtcbiAgICByZXR1cm4gYXNzaWduZXIgLSAxO1xuICB9O1xuXG4gIHJldHVybiB7IGdldElkTnVtYmVyIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBpZEFzc2lnbmVyO1xuIiwiaW1wb3J0IE5lcm9zIGZyb20gXCIuL05lcm9zXCI7XG5pbXBvcnQgeyBOZXdUb2RvQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9OZXdUb2RvQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBOZXdQcm9qZWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9OZXdQcm9qZWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IG1vZGFsID0gKCgpID0+IHtcbiAgbGV0IG1vZGFsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWxcIik7XG4gIGxldCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWxDb250YWluZXJcIik7XG4gIGxldCBhZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRCaWdUb2RvXCIpO1xuICBsZXQgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdFwiKTtcblxuICBjb25zdCBoaWRlID0gKCkgPT4ge1xuICAgIG1vZGFsRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIHJlc2V0TW9kYWwoKTtcbiAgfTtcblxuICBjb25zdCBzaG93ID0gKGNvbXBvbmVudCkgPT4ge1xuICAgIGxldCBtb2RhbCA9IG5ldyBOZXJvcyhcIm1vZGFsQ29udGFpbmVyXCIpO1xuICAgIG1vZGFsLnJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgbW9kYWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRNb2RhbCA9ICgpID0+IHtcbiAgICBtb2RhbENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICB9O1xuXG4gIC8vIEhpZGUgbW9kYWwgd2hlbiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZVxuICBtb2RhbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gbW9kYWxFbGVtZW50KSB7XG4gICAgICBoaWRlKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBTaG93IG1vZGFsIHdpdGggbmV3IHRvZG8gZm9ybSB3aGVuIHRoZSAnYWRkIG5ldyB0b2RvJyBidXR0b24gaXMgY2xpY2tlZFxuICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IG5ld1RvZG8gPSBuZXcgTmV3VG9kb0NvbXBvbmVudChcIm5ld1RvZG9cIiwgeyBwYXJlbnQ6IG51bGwgfSk7XG4gICAgaWYgKFByb2plY3Quc2VsZWN0ZWQgIT09IG51bGwpIHtcbiAgICAgIHNob3cobmV3VG9kbyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gJ0FkZCBuZXcgcHJvamVjdCcgYnV0dG9uXG5cbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IE5ld1Byb2plY3RDb21wb25lbnQoXCJuZXdQcm9qZWN0XCIpO1xuXG4gICAgc2hvdyhuZXdQcm9qZWN0KTtcbiAgfSk7XG5cbiAgLy8gQWRkIHZpZXcgZXZlbnQgbGlzdGVuZXIgdG8gdGFza3NcblxuICByZXR1cm4ge1xuICAgIGhpZGUsXG4gICAgc2hvdyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGFsO1xuIiwiY2xhc3MgUHJpb3JpdHkge1xuICAjbmFtZTtcbiAgI251bWJlcjtcbiAgY29sb3I7XG5cbiAgc3RhdGljICNwcmlvcml0aWVzQXJyYXkgPSBbXG4gICAgbmV3IFByaW9yaXR5KFwiVXJnZW50XCIsIDEsIFwiI0U4MTYxNlwiKSxcbiAgICBuZXcgUHJpb3JpdHkoXCJIaWdoXCIsIDIsIFwiI0VGNTUxM1wiKSxcbiAgICBuZXcgUHJpb3JpdHkoXCJNZWRpdW1cIiwgMywgXCIjRjNERDExXCIpLFxuICAgIG5ldyBQcmlvcml0eShcIkxvd1wiLCA0LCBcIiMyMkM1MUZcIiksXG4gICAgbmV3IFByaW9yaXR5KFwiT3B0aW9uYWxcIiwgNSwgXCIjMjMzNkUwXCIpLFxuICBdO1xuXG4gIHN0YXRpYyBnZXQgcHJpb3JpdGllcygpIHtcbiAgICByZXR1cm4gWy4uLlByaW9yaXR5LiNwcmlvcml0aWVzQXJyYXldO1xuICB9XG5cbiAgc3RhdGljIHByaW9yaXR5KG51bWJlcikge1xuICAgIHJldHVybiBQcmlvcml0eS4jcHJpb3JpdGllc0FycmF5W251bWJlciAtIDFdO1xuICB9XG5cbiAgY29uc3RydWN0b3IobmFtZSwgbnVtYmVyLCBjb2xvcikge1xuICAgIHRoaXMuI25hbWUgPSBuYW1lO1xuICAgIHRoaXMuI251bWJlciA9IG51bWJlcjtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jbmFtZTtcbiAgfVxuXG4gIGdldCBudW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI251bWJlcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmlvcml0eTtcbiIsIi8qIDEuLSBJZiBhIHRvZG8ncyBpcyBhIHBhcmVudCwgdGhleSBnZXQgYWRkZWQgdG8gdGhlIHBlbmRpbmcgdGFza3Mgd2hlbiBjcmVhdGVkXG4gICAyLi0gU29ydCB0aGUgcGVuZGluZyB0YXNrcyBhcnJheSBieSBwcmlvcml0eSwgYW5kIHNvcnQgdGhlIGNoaWxkcmVuIGFycmF5IGJ5IHByaW9yaXR5IGFzIHdlbGwgKi9cblxuaW1wb3J0IGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcbmltcG9ydCBQcm9qZWN0Q29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvUHJvamVjdENvbXBvbmVudFwiO1xuY2xhc3MgUHJvamVjdCB7XG4gICNwZW5kaW5nVGFza3M7XG4gICNjb21wbGV0ZWRUYXNrcztcblxuICBzdGF0aWMgc2VsZWN0ZWQ7XG5cbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jb21wb25lbnQgPSBuZXcgUHJvamVjdENvbXBvbmVudChuYW1lLCB7IHByb2plY3Q6IHRoaXMgfSk7XG4gICAgdGhpcy4jcGVuZGluZ1Rhc2tzID0gW107XG4gICAgdGhpcy4jY29tcGxldGVkVGFza3MgPSBbXTtcbiAgfVxuXG4gIGdldCBwZW5kaW5nKCkge1xuICAgIHJldHVybiBbLi4udGhpcy4jcGVuZGluZ1Rhc2tzXTtcbiAgfVxuXG4gIGdldCBjb21wbGV0ZWQoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLiNjb21wbGV0ZWRUYXNrc107XG4gIH1cblxuICBhZGRQZW5kaW5nKGl0ZW0pIHtcbiAgICB0aGlzLiNwZW5kaW5nVGFza3MucHVzaChpdGVtKTtcbiAgfVxuXG4gIGFkZENvbXBsZXRlZChpdGVtKSB7XG4gICAgdGhpcy4jY29tcGxldGVkVGFza3MucHVzaChpdGVtKTtcbiAgfVxuXG4gIGNvbXBsZXRlVG9kbyhpZCkge1xuICAgIGxldCB0YXNrID0gaGVscGVyLmRlbGV0ZUl0ZW0odGhpcy4jcGVuZGluZ1Rhc2tzLCBpZCk7XG4gICAgdGhpcy5hZGRDb21wbGV0ZWQodGFzayk7XG4gIH1cblxuICByZXN1bWVUb2RvKGlkKSB7XG4gICAgbGV0IHRhc2sgPSBoZWxwZXIuZGVsZXRlSXRlbSh0aGlzLiNjb21wbGV0ZWRUYXNrcywgaWQpO1xuICAgIHRoaXMuYWRkUGVuZGluZyh0YXNrKTtcbiAgfVxuXG4gIGNsZWFyQ29tcGxldGVkVG9kb3MoKSB7XG4gICAgdGhpcy4jY29tcGxldGVkVGFza3MgPSBbXTtcbiAgfVxuXG4gIGRlbGV0ZVRvZG8odGFzaykge1xuICAgIGlmICh0aGlzLiNwZW5kaW5nVGFza3MuaW5jbHVkZXModGFzaykpIHtcbiAgICAgIGxldCB0YXNrSW5kZXggPSB0aGlzLiNwZW5kaW5nVGFza3MuaW5kZXhPZih0YXNrKTtcbiAgICAgIHRhc2tJbmRleCA9PT0gMFxuICAgICAgICA/IHRoaXMuI3BlbmRpbmdUYXNrcy5zaGlmdCgpXG4gICAgICAgIDogdGhpcy4jcGVuZGluZ1Rhc2tzLnNwbGljZSh0YXNrSW5kZXgsIHRhc2tJbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0YXNrSW5kZXggPSB0aGlzLiNjb21wbGV0ZWRUYXNrcy5pbmRleE9mKHRhc2spO1xuICAgICAgdGFza0luZGV4ID09PSAwXG4gICAgICAgID8gdGhpcy4jY29tcGxldGVkVGFza3Muc2hpZnQoKVxuICAgICAgICA6IHRoaXMuI2NvbXBsZXRlZFRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIHRhc2tJbmRleCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJpbXBvcnQgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IGlkQXNzaWduZXIgZnJvbSBcIi4vaWRBc3NpZ25lclwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRvZG9Db21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Ub2RvQ29tcG9uZW50XCI7XG5pbXBvcnQgY2hlY2tlZCBmcm9tIFwiLi4vYXNzZXRzL2NoZWNrZWQuc3ZnXCI7XG5pbXBvcnQgdW5jaGVja2VkIGZyb20gXCIuLi9hc3NldHMvdW5jaGVja2VkLnN2Z1wiO1xuXG4vKiAxLi0gQmUgYWJsZSB0byBjcmVhdGUgYW5kIGRlbGV0ZSB0b2RvJ3Mg4pyU77iPXG4gICAyLi0gSWYgYSB0b2RvJ3MgaXMgYSBwYXJlbnQsIHRoZXkgZ2V0IGFkZGVkIHRvIHRoZSBwZW5kaW5nIHRhc2tzIHdoZW4gY3JlYXRlZCDinJTvuI9cbiAgIDMuLSBJZiBhIHBhcmVudCB0b2RvIGlzIGRlbGV0ZWQsIGFsbCBpdCdzIGNoaWxkcmVuIGFyZSBkZWxldGVkIGFzIHdlbGwg4pyU77iPXG4gICA0Li0gT25seSBwYXJlbnQncyB0b2RvIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGNvbXBsZXRlZCB0YXNrcyBhcnJheSwgaWYgYSBwYXJlbnQgdG9kbyBpcyBjaGVja2VkLCBhbGwgaXQncyBjaGlsZHJlbiB3aWxsIGJlIOKclO+4j1xuICAgNS4tIFNvcnQgdGhlIHBlbmRpbmcgdGFza3MgYXJyYXkgYnkgcHJpb3JpdHksIGFuZCBzb3J0IHRoZSBjaGlsZHJlbiBhcnJheSBieSBwcmlvcml0eSBhcyB3ZWxsICovXG5cbmNsYXNzIFRvZG8ge1xuICAjcGFyZW50O1xuICAjY2hpbGRyZW47XG4gICNpZDtcbiAgI2lzQ2hlY2tlZDtcbiAgI3Byb2plY3Q7XG5cbiAgY29uc3RydWN0b3IodGl0bGUsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgaXNDaGVja2VkLCBwYXJlbnQgPSBudWxsKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLiNpc0NoZWNrZWQgPSBpc0NoZWNrZWQ7XG4gICAgdGhpcy4jaWQgPSBpZEFzc2lnbmVyLmdldElkTnVtYmVyKCk7XG4gICAgdGhpcy4jcGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuI3Byb2plY3QgPSBQcm9qZWN0LnNlbGVjdGVkO1xuICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBudWxsO1xuICAgIGlmICh0aGlzLiNwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuI2NoaWxkcmVuID0gW107XG4gICAgICAvLyBJZiB0aGUgdG9kbyBpcyBhbHJlYWR5IGNoZWNrZWQgYWRkIGl0IHRvIHRoZSBjb21wbGV0ZWQgdGFza3MgYXJyYXlcbiAgICAgIC8vIG9mIHRoZSBwYXJlbnQgcHJvamVjdFxuICAgICAgdGhpcy5jaGVja1xuICAgICAgICA/IFByb2plY3Quc2VsZWN0ZWQuYWRkQ29tcGxldGVkKHRoaXMpXG4gICAgICAgIDogUHJvamVjdC5zZWxlY3RlZC5hZGRQZW5kaW5nKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiNjaGlsZHJlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZVRvZG8odGl0bGUsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgaXNDaGVja2VkKSB7XG4gICAgbGV0IGEgPSBuZXcgVG9kbyh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBpc0NoZWNrZWQsIHRoaXMpO1xuICAgIHRoaXMuI2NoaWxkcmVuLnB1c2goYSk7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBlZGl0KHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLiNpZDtcbiAgfVxuXG4gIGdldCBjaGlsZHJlbigpIHtcbiAgICBpZiAodGhpcy4jY2hpbGRyZW4pIHJldHVybiBbLi4udGhpcy4jY2hpbGRyZW5dO1xuICAgIHJldHVybiB0aGlzLiNjaGlsZHJlbjtcbiAgfVxuXG4gIGdldCBwYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3BhcmVudDtcbiAgfVxuXG4gIHRvZ2dsZUNoZWNrKCkge1xuICAgIGlmICh0aGlzLiNpc0NoZWNrZWQpIHtcbiAgICAgIHRoaXMudW5jaGVja1RvZG8oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGVja1RvZG8oKTtcbiAgICB9XG4gIH1cblxuICB1bmNoZWNrVG9kbygpIHtcbiAgICBsZXQgZWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDtcbiAgICBsZXQgaW1nID1cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoZWNrQnV0dG9uTWluaVwiKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB0aGlzLiNpc0NoZWNrZWQgPSBmYWxzZTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZWRUYXNrXCIpO1xuICAgIGltZy5zcmMgPSB1bmNoZWNrZWQ7XG4gICAgaWYgKHRoaXMuI3BhcmVudCA9PT0gbnVsbCkge1xuICAgICAgVG9kb0NvbXBvbmVudC5tb3ZlVG9QZW5kaW5nKGVsZW1lbnQpO1xuICAgICAgdGhpcy5wcm9qZWN0LnJlc3VtZVRvZG8odGhpcy5pZCk7XG4gICAgICB0aGlzLnByb2plY3QuY29tcG9uZW50LnJlZnJlc2hUb2RvcygpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrVG9kbygpIHtcbiAgICBsZXQgZWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDtcbiAgICBsZXQgaW1nID1cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoZWNrQnV0dG9uTWluaVwiKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB0aGlzLiNpc0NoZWNrZWQgPSB0cnVlO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFRhc2tcIik7XG4gICAgaW1nLnNyYyA9IGNoZWNrZWQ7XG4gICAgaWYgKHRoaXMuI3BhcmVudCA9PT0gbnVsbCkge1xuICAgICAgVG9kb0NvbXBvbmVudC5tb3ZlVG9Db21wbGV0ZWQoZWxlbWVudCk7XG4gICAgICB0aGlzLnByb2plY3QuY29tcGxldGVUb2RvKHRoaXMuaWQpO1xuICAgICAgdGhpcy5wcm9qZWN0LmNvbXBvbmVudC5yZWZyZXNoVG9kb3MoKTtcbiAgICB9XG4gIH1cblxuICBkZWxldGVUb2RvKHRhc2spIHtcbiAgICBpZiAodGhpcy5pc1N1YnRhc2soKSkge1xuICAgICAgdGhpcy5wYXJlbnQuZGVsZXRlKHRhc2spO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb2plY3QuZGVsZXRlVG9kbyh0YXNrKTtcbiAgICB9XG4gIH1cblxuICBkZWxldGUodGFzaykge1xuICAgIGxldCB0YXNrSW5kZXggPSB0aGlzLiNjaGlsZHJlbi5pbmRleE9mKHRhc2spO1xuICAgIHRhc2tJbmRleCA9PT0gMFxuICAgICAgPyB0aGlzLiNjaGlsZHJlbi5zaGlmdCgpXG4gICAgICA6IHRoaXMuI2NoaWxkcmVuLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICB9XG5cbiAgZ2V0IHByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3Byb2plY3Q7XG4gIH1cblxuICBnZXQgY2hlY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lzQ2hlY2tlZDtcbiAgfVxuXG4gIGlzU3VidGFzaygpIHtcbiAgICByZXR1cm4gdGhpcy4jcGFyZW50ICE9PSBudWxsO1xuICB9XG5cbiAgI3JlY3Vyc2l2ZUNoZWNrKGFycmF5LCBpbmRleCA9IDApIHtcbiAgICBpZiAoYXJyYXlbaW5kZXhdICYmIGFycmF5W2luZGV4XS5jaGVjayA9PT0gZmFsc2UpIHtcbiAgICAgIGFycmF5W2luZGV4XS50b2dnbGVDaGVjaygpO1xuICAgICAgcmV0dXJuIHRoaXMuI3JlY3Vyc2l2ZUNoZWNrKGFycmF5LCBpbmRleCArIDEpO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvL0ltcG9ydCBzdGF0ZW1lbnRzXG5pbXBvcnQgXCIuL3N0eWxlL21haW4uc2Nzc1wiO1xuaW1wb3J0IE5lcm9zIGZyb20gXCIuL21vZHVsZXMvTmVyb3NcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL21vZHVsZXMvdG9kb1wiO1xuaW1wb3J0IFRhc2tDb21wb25lbnQgZnJvbSBcIi4vbW9kdWxlcy9jb21wb25lbnRzL1Rhc2tDb21wb25lbnRcIjtcbmltcG9ydCBUb2RvQ29tcG9uZW50IGZyb20gXCIuL21vZHVsZXMvY29tcG9uZW50cy9Ub2RvQ29tcG9uZW50XCI7XG5pbXBvcnQgUHJvamVjdENvbXBvbmVudCBmcm9tIFwiLi9tb2R1bGVzL2NvbXBvbmVudHMvUHJvamVjdENvbXBvbmVudFwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0XCI7XG5pbXBvcnQgeyBOZXdUb2RvQ29tcG9uZW50IH0gZnJvbSBcIi4vbW9kdWxlcy9jb21wb25lbnRzL05ld1RvZG9Db21wb25lbnRcIjtcbmltcG9ydCBoZWxwZXIgZnJvbSBcIi4vbW9kdWxlcy9oZWxwZXJcIjtcblxuLy9Jbml0aWFsaXplIG1vZHVsZXNcbmNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChcIkJpZyBwcm9qZWN0XCIpO1xuUHJvamVjdC5zZWxlY3RlZCA9IHByb2plY3Q7XG5jb25zdCBwcm9qZWN0TW9kdWxlID0gTmVyb3MucHJvamVjdHM7XG5cbmxldCB0b2RvMSA9IG5ldyBUb2RvKFxuICBcIkZpcnN0IE9PUCB0b2RvXCIsXG4gIFwiMjQtMDUtMjAyM1wiLFxuICA0LFxuICBcIlRoaXMgaXMgYSB0b2RvIG1hZGUgd2l0aCBPT1AgcHJpbmNpcGxlc1wiLFxuICBmYWxzZVxuKTtcblxudG9kbzEuY3JlYXRlVG9kbyhcbiAgXCJmaXJzdCBvZiBGaXJzdCBPT1AgdG9kb1wiLFxuICBcIjI0LTA1LTIwMjNcIixcbiAgMixcbiAgXCJUaGlzIGlzIGEgdG9kbyBtYWRlIHdpdGggT09QIHByaW5jaXBsZXMgMVwiLFxuICBmYWxzZVxuKTtcblxudG9kbzEuY3JlYXRlVG9kbyhcbiAgXCJzZWNvbmQgb2YgRmlyc3QgT09QIHRvZG9cIixcbiAgXCIyNC0wNS0yMDIzXCIsXG4gIDUsXG4gIFwiVGhpcyBpcyBhIHRvZG8gbWFkZSB3aXRoIE9PUCBwcmluY2lwbGVzIDJcIixcbiAgZmFsc2Vcbik7XG5cbmNvbnN0IHByb2plY3QyID0gbmV3IFByb2plY3QoXCJTZWNvbmQgYmlnIHByb2plY3RcIik7XG4vLyBQcm9qZWN0LnNlbGVjdGVkID0gcHJvamVjdDI7XG5cbmxldCB0b2RvMiA9IG5ldyBUb2RvKFxuICBcInNlY29uZCBPT1AgdG9kb1wiLFxuICBcIjI0LTA1LTIwMjNcIixcbiAgMSxcbiAgXCJUaGlzIGlzIGEgdG9kbyBtYWRlIHdpdGggT09QIHByaW5jaXBsZXNcIixcbiAgZmFsc2Vcbik7XG5cbnRvZG8yLmNyZWF0ZVRvZG8oXG4gIFwiZmlyc3Qgb2Ygc2Vjb25kIE9PUCB0b2RvXCIsXG4gIFwiMjQtMDUtMjAyM1wiLFxuICA0LFxuICBcIlRoaXMgaXMgYSB0b2RvIG1hZGUgd2l0aCBPT1AgcHJpbmNpcGxlcyAxXCIsXG4gIGZhbHNlXG4pO1xuXG50b2RvMi5jcmVhdGVUb2RvKFxuICBcInNlY29uZCBvZiBzZWNvbmQgT09QIHRvZG9cIixcbiAgXCIyNC0wNS0yMDIzXCIsXG4gIDEsXG4gIFwiVGhpcyBpcyBhIHRvZG8gbWFkZSB3aXRoIE9PUCBwcmluY2lwbGVzIDJcIixcbiAgZmFsc2Vcbik7XG5cbnRvZG8yLmNyZWF0ZVRvZG8oXG4gIFwic2Vjb25kIG9mIHNlY29uZCBPT1AgdG9kb1wiLFxuICBcIjI0LTA1LTIwMjNcIixcbiAgMyxcbiAgXCJUaGlzIGlzIGEgdG9kbyBtYWRlIHdpdGggT09QIHByaW5jaXBsZXMgMlwiLFxuICBmYWxzZVxuKTtcblxudG9kbzIuY3JlYXRlVG9kbyhcbiAgXCJzZWNvbmQgb2Ygc2Vjb25kIE9PUCB0b2RvXCIsXG4gIFwiMjQtMDUtMjAyM1wiLFxuICAyLFxuICBcIlRoaXMgaXMgYSB0b2RvIG1hZGUgd2l0aCBPT1AgcHJpbmNpcGxlcyAyXCIsXG4gIGZhbHNlXG4pO1xuXG50b2RvMi5jcmVhdGVUb2RvKFxuICBcInNlY29uZCBvZiBzZWNvbmQgT09QIHRvZG9cIixcbiAgXCIyNC0wNS0yMDIzXCIsXG4gIDUsXG4gIFwiVGhpcyBpcyBhIHRvZG8gbWFkZSB3aXRoIE9PUCBwcmluY2lwbGVzIDJcIixcbiAgZmFsc2Vcbik7XG4vLyBQcm9qZWN0LnNlbGVjdGVkID0gbnVsbDtcblxucHJvamVjdE1vZHVsZS5yZWdpc3RlckNvbXBvbmVudChwcm9qZWN0LmNvbXBvbmVudCk7XG5wcm9qZWN0TW9kdWxlLnJlZ2lzdGVyQ29tcG9uZW50KHByb2plY3QyLmNvbXBvbmVudCk7XG5cbmxldCBmaXJzdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RDb250YWluZXJcIik7XG5maXJzdFByb2plY3QuY2xpY2soKTtcbi8vIHByaW9yaXRpZXMucmVnaXN0ZXJDb21wb25lbnQoVGVzdENvbXBvbmVudCk7XG4vLyBsZXQgYSA9IG5ldyBUZXh0Q29tcG9uZW50KFwidGV4dFwiLCB7XG4vLyAgIG5hbWU6IFwiRG9tZXN0aWMgYW5pbWFsc1wiLFxuLy8gICBjb250ZW50czogXCJDYXRzIGFuZCBkb2dzXCIsXG4vLyB9KTtcbi8vIHByaW9yaXRpZXMucmVnaXN0ZXJDb21wb25lbnQoYSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=