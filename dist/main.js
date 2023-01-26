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

/***/ "./src/modules/components/PriorityComponent.js":
/*!*****************************************************!*\
  !*** ./src/modules/components/PriorityComponent.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriorityComponent": () => (/* binding */ PriorityComponent)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/modules/Component.js");
/* harmony import */ var _Neros__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Neros */ "./src/modules/Neros.js");
/* harmony import */ var _priority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../priority */ "./src/modules/priority.js");




class PriorityComponent extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  template = (state) =>
    `
    <div class="priority">
      <div class="priorityColorContainer">
        <div class="priorityColor" style="background: ${state.priority.color}"></div>
      </div>
      <p class="priorityName">${state.priority.name}</p>
    </div>
    `;

  static displayPriorities() {
    let priorityNeros = new _Neros__WEBPACK_IMPORTED_MODULE_1__["default"]("priorities");
    _priority__WEBPACK_IMPORTED_MODULE_2__["default"].priorities.forEach((priority) => {
      let component = new PriorityComponent(priority.name, {
        priority: priority,
      });
      priorityNeros.registerComponent(component);
    });
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
/* harmony import */ var _PriorityComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PriorityComponent */ "./src/modules/components/PriorityComponent.js");







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
    _PriorityComponent__WEBPACK_IMPORTED_MODULE_5__.PriorityComponent.displayPriorities();
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
        taskDOM.firstChild.remove();
        // Remove the check minicontainer so users wont be able to check the todo from the modal
        subtaskContainer.append(taskDOM);
      });
    } else {
      let parentDOM = new _TaskComponent__WEBPACK_IMPORTED_MODULE_2__["default"]("todo", {
        todo: this.state.todo.parent,
        classes: ["task subtask"],
      }).DOMelement();
      parentDOM.firstChild.remove();
      // Remove the check minicontainer so users wont be able to check the todo from the modal
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
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");
/* harmony import */ var _modules_components_PriorityComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/components/PriorityComponent */ "./src/modules/components/PriorityComponent.js");
//Import statements






//Initialize modules
const project = new _modules_project__WEBPACK_IMPORTED_MODULE_3__["default"]("Big project");
_modules_project__WEBPACK_IMPORTED_MODULE_3__["default"].selected = project;
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

const project2 = new _modules_project__WEBPACK_IMPORTED_MODULE_3__["default"]("Second big project");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxhQUFhLGVBQWUsYUFBYSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sYUFBYSxlQUFlLFFBQVEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sYUFBYSxlQUFlLGFBQWEsV0FBVyxXQUFXLE9BQU8sTUFBTSxhQUFhLGVBQWUsUUFBUSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE1BQU0sT0FBTyxhQUFhLFlBQVksT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sYUFBYSxlQUFlLE9BQU8sTUFBTSxhQUFhLGVBQWUsT0FBTyxPQUFPLGFBQWEsUUFBUSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sUUFBUSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVB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QW9CLHdEQUFPO0FBQzNCLGlFQUFnQjtBQUNoQixzQkFBc0IsK0RBQWM7O0FBRXBDLGdCQUFnQixxREFBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHdEQUFPO0FBQzVCOztBQUVBLGdCQUFnQixxREFBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvbWFpbi5zY3NzP2EyMjEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvTmVyb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9EZWxldGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9NaW5pQ29udGFpbmVyQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvTmV3UHJvamVjdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL05ld1RvZG9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9Qcmlvcml0eUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL1Byb2plY3RDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9UYXNrQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvVG9kb0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3ZpZXdUb2RvQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9pZEFzc2lnbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3ByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBtaW4td2lkdGg6IDc1JTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDEuMmZyKSAycHggM2ZyO1xcbiAgYm94LXNoYWRvdzogOHB4IDhweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3A6ICM0NjRlNTUgNHB4IHNvbGlkO1xcbiAgYm9yZGVyLWxlZnQ6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbn1cXG5cXG4uc2VwYXJhdG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XFxufVxcblxcbi5tYWluQ29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBjYWxjKDY1JSAtIDJweCkgMnB4IDM1JTtcXG59XFxuXFxuLnBlbmRpbmcge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1ib3R0b206ICMxNTE4MWMgMnB4IHNvbGlkO1xcbiAgYm9yZGVyLWxlZnQ6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbm1heCgwLCAxMDAlKTtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXRvcDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBib3JkZXItbGVmdDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICB9XFxuICAuc2VwYXJhdG9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5wZW5kaW5nIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICB9XFxufVxcbi5zaWRlYmFyIHtcXG4gIGJvcmRlci1yaWdodDogIzE1MTgxYyAycHggc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eU5hbWUge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgZm9udC1zaXplOiBjbGFtcCg4cHgsIDF2dywgNjRweCk7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eUNvbG9yQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7XFxuICBwYWRkaW5nOiBjbGFtcCg4cHgsIDAuM3JlbSArIDAuM3Z3LCA2NHB4KTtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNmM3NTdkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5Q29sb3Ige1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgaGVpZ2h0OiBjbGFtcCgxNHB4LCAwLjVyZW0gKyAwLjd2dywgNjRweCk7XFxuICB3aWR0aDogY2xhbXAoMTRweCwgMC41cmVtICsgMC43dncsIDY0cHgpO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjYTBiMWMzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4jcHJpb3JpdGllcyB7XFxuICB3aWR0aDogY2xhbXAoMTAwcHgsIDMwJSArIDR2dywgNjAwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IGNsYW1wKDZweCwgMC4zdncsIDEycHgpO1xcbiAgbWFyZ2luLWJvdHRvbTogY2xhbXAoMTBweCwgMC43dncsIDE2cHgpO1xcbn1cXG5cXG4ucHJpb3JpdHlDb2xvckNvbnRhaW5lciAucHJpb3JpdHlDb2xvciB7XFxuICBoZWlnaHQ6IGNsYW1wKDE0cHgsIDAuNXJlbSArIDAuNHZ3LCA2NHB4KTtcXG4gIHdpZHRoOiBjbGFtcCgxNHB4LCAwLjVyZW0gKyAwLjR2dywgNjRweCk7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4uc2lkZWJhckJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNnZ3O1xcbn1cXG5cXG4uVG9kb3NDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCA1MHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWJvdHRvbTogY2xhbXAoNHB4LCAwLjR2dywgOHB4KTtcXG59XFxuXFxuLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjYTBiMWMzO1xcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiBjbGFtcCgycHgsIDAuM3Z3LCA4cHgpIDA7XFxufVxcblxcbi50YXNrTWluaUNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IGNsYW1wKDhweCwgMC41cmVtICsgMC41dncsIDY0cHgpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50YXNrQ29sb3Ige1xcbiAgaGVpZ2h0OiBjbGFtcCgxNHB4LCAwLjVyZW0gKyAwLjd2dywgNjRweCk7XFxuICB3aWR0aDogY2xhbXAoMTRweCwgMC41cmVtICsgMC43dncsIDY0cHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4MTYxNjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuLnRhc2tCdXR0b24ge1xcbiAgaGVpZ2h0OiBjbGFtcCgxNHB4LCAwLjVyZW0gKyAwLjd2dywgNjRweCk7XFxuICB3aWR0aDogY2xhbXAoMTRweCwgMC41cmVtICsgMC43dncsIDY0cHgpO1xcbn1cXG5cXG4udGFza01pbmlDb250YWluZXI6bnRoLWxhc3Qtb2YtdHlwZSgtbiArIDIpIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNmM3NTdkO1xcbn1cXG5cXG4udGFza01pbmlDb250YWluZXI6bnRoLWNoaWxkKC1uKzIpIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNmM3NTdkO1xcbn1cXG5cXG4udGFza1RpbWUge1xcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKDFyZW0gKyAxdncpO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLnRhc2tUaW1lIHAge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGNvbG9yOiAjYWRiNWJkO1xcbn1cXG5cXG4udGFza1RpdGxlIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICB3aWR0aDogY2xhbXAoMTUwcHgsIDEwdncgKyAxMHJlbSwgNTAwcHgpO1xcbn1cXG4udGFza1RpdGxlIHAge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnRhc2tUaXRsZSxcXG4udGFza1RpbWUge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi50YXNrVGl0bGUgcCxcXG4udGFza1RpbWUgcCB7XFxuICBmb250LXNpemU6IGNsYW1wKDhweCwgMC41cmVtICsgMC43dncsIDY0cHgpO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc3VidGFza3NDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5zdWJ0YXNrIHtcXG4gIG1hcmdpbjogY2xhbXAoMnB4LCAwLjF2dywgNHB4KSAwO1xcbn1cXG4uc3VidGFzayAudGFza01pbmlDb250YWluZXIge1xcbiAgcGFkZGluZzogY2xhbXAoOHB4LCAwLjRyZW0gKyAwLjR2dywgNDhweCk7XFxufVxcbi5zdWJ0YXNrIC50YXNrTWluaUNvbnRhaW5lciAudGFza0J1dHRvbiB7XFxuICBoZWlnaHQ6IGNsYW1wKDEwcHgsIDAuNXJlbSArIDAuNHZ3LCAzNnB4KTtcXG4gIHdpZHRoOiBjbGFtcCgxMHB4LCAwLjVyZW0gKyAwLjR2dywgMzZweCk7XFxufVxcbi5zdWJ0YXNrIC50YXNrTWluaUNvbnRhaW5lciAudGFza0NvbG9yIHtcXG4gIHdpZHRoOiBjbGFtcCgxMHB4LCAwLjVyZW0gKyAwLjR2dywgMzZweCk7XFxuICBoZWlnaHQ6IGNsYW1wKDEwcHgsIDAuNXJlbSArIDAuNHZ3LCAzNnB4KTtcXG59XFxuLnN1YnRhc2sgLnRhc2tUaXRsZSBwLFxcbi5zdWJ0YXNrIC50YXNrVGltZSBwIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoNnB4LCAwLjVyZW0gKyAwLjR2dywgMzZweCk7XFxufVxcblxcbi5jb21wbGV0ZWRUYXNrIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgb3BhY2l0eTogMC42O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSwgaW5zZXQgMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4udGFza0RhdGFDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleDogMSAyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkU3VidGFzayB7XFxuICBtYXJnaW4tdG9wOiAwLjN2dztcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNjb21wbGV0ZWRUb2RvcyA+IC50YXNrQ29udGFpbmVyID4gLnN1YnRhc2tzQ29udGFpbmVyIGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwZGVnLCAwJSwgMCUsIDAuNTAyKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21vZGFsQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XFxuICBib3gtc2hhZG93OiA4cHggOHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICBtYXgtaGVpZ2h0OiA3MHZoO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uY2xvc2VCdXR0b24ge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMXZ3O1xcbiAgbGVmdDogMXZ3O1xcbiAgaGVpZ2h0OiAxLjN2dztcXG4gIHdpZHRoOiAxLjN2dztcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5jbG9zZUJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjR2dztcXG59XFxuLmZpZWxkIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygxdncgKyA2cHgpO1xcbn1cXG4uZmllbGQgaW5wdXQsXFxuLmZpZWxkIHNlbGVjdCxcXG4uZmllbGQgdGV4dGFyZWEge1xcbiAgZm9udC1zaXplOiBjYWxjKDAuOHZ3ICsgNHB4KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMjEyNTI5O1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSwgaW5zZXQgMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgcGFkZGluZzogY2FsYygwLjV2dyArIDJweCk7XFxuICBib3JkZXItcmFkaXVzOiAwLjV2dztcXG4gIGNvbG9yOiAjZjhmOWZhO1xcbn1cXG5cXG4uRHVlZGF0ZUZpZWxkIGlucHV0IHtcXG4gIGZvbnQtc2l6ZTogY2FsYygwLjh2dyArIDRweCk7XFxufVxcbi5EdWVkYXRlRmllbGQgOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblxcbi5uZXdGb3JtIHtcXG4gIG1pbi13aWR0aDogMzV2dztcXG4gIHBhZGRpbmc6IDAgY2FsYygxdncgKyA2cHgpIGNhbGMoMXZ3ICsgNnB4KSBjYWxjKDF2dyArIDZweCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAyZnI7XFxuICBnYXA6IGNhbGMoMC41dncgKyA0cHgpO1xcbn1cXG5cXG4uVGl0bGVGaWVsZCB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG4uRGVzY3JpcHRpb25GaWVsZCB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG4uRGVzY3JpcHRpb25GaWVsZCB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBoZWlnaHQ6IDIwdmg7XFxuICBtYXgtaGVpZ2h0OiAyMHZoO1xcbn1cXG5cXG4uUHJpb3JpdHlGaWVsZCBzZWxlY3Qge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzkvOWQvQ2FyZXRfZG93bl9mb250X2F3ZXNvbWVfd2hpdGV2YXJpYXRpb24uc3ZnKSBuby1yZXBlYXQgcmlnaHQgMC44ZW0gY2VudGVyLzEuNGVtLCAjMjEyNTI5O1xcbiAgLyogUmVtb3ZlIGZvY3VzIG91dGxpbmUgKi9cXG4gIC8qIFJlbW92ZSBJRSBhcnJvdyAqL1xcbn1cXG4uUHJpb3JpdHlGaWVsZCBzZWxlY3Q6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLlByaW9yaXR5RmllbGQgc2VsZWN0OjotbXMtZXhwYW5kIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uZXdUaXRsZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogY2FsYygxdncgKyA2cHgpO1xcbn1cXG5cXG4uY3JlYXRlQnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlVmlldyB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgdXNlci1zZWxlY3Q6IGF1dG87XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi50aXRsZVZpZXdDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDJ2dztcXG59XFxuXFxuLmRlc2NyaXB0aW9uVmlld0NvbnRhaW5lciB7XFxuICBtYXJnaW46IDAgMXZ3O1xcbn1cXG5cXG4uaW5mb0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWluLXdpZHRoOiBjbGFtcCgyNTBweCwgNzB2aCwgMTAwMHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG8gbWF4LWNvbnRlbnQgYXV0byBtYXgtY29udGVudDtcXG59XFxuLmluZm9Db250YWluZXIgLnNlcGFyYXRvciB7XFxuICBoZWlnaHQ6IDFweDtcXG59XFxuLmluZm9Db250YWluZXIgaHIge1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLmRhdGVWaWV3Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5kYXRlU3RyaW5nQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5kYXRlU3RyaW5nQ29udGFpbmVyIHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiBjbGFtcCg4cHgsIDF2dywgNjRweCk7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4ucHJpb3JpdHlWaWV3Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kb0RhdGFDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRvZG9EYXRhQ29udGFpbmVyIC5wcmlvcml0eSB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi50b2RvRGF0YUNvbnRhaW5lciAucHJpb3JpdHkgLnByaW9yaXR5TmFtZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ubWFpblRhc2tDb250YWluZXIge1xcbiAgcGFkZGluZzogMCAxdncgMXZ3IDF2dztcXG4gIGJvcmRlci1ib3R0b206ICMxNTE4MWMgMnB4IHNvbGlkO1xcbn1cXG5cXG4udmlld1N1YkNvbnRhaW5lciB7XFxuICBib3JkZXItdG9wOiAjNDY0ZTU1IDJweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDF2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnZpZXdTdWJDb250YWluZXIgaDEge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uVmlldyB7XFxuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLkJ1dHRvbnNWaWV3IHtcXG4gIGJvcmRlci10b3A6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC44dnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXZ3IDA7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41dnc7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMDBkZWcsIDclLCA4JSwgMC42KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41dncgMCAwLjV2dyAwLjd2dztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dCAwcztcXG59XFxuXFxuLnByb2plY3RDb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwMGRlZywgNyUsIDglKTtcXG59XFxuXFxuI3NlbGVjdGVkUHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjAwZGVnLCA3JSwgOCUpO1xcbn1cXG5cXG5idXR0b24gaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXZ3O1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2Y4ZjlmYTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE5Ljc1ZGVnLCAjNmU5ZWNmIDEzLjAyJSwgIzEyMjYzYSAxMDAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41dnc7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwLjd2dyAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0VGl0bGUge1xcbiAgZm9udC1zaXplOiAxdnc7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogIzI4ODdjODtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgMHB4IDJweCAwcHggIzZiYjJlMztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2Y4ZjlmYTtcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjF2dztcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlQnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IGhzbCgwZGVnLCA4MiUsIDYzJSk7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IDBweCAycHggMHB4IGhzbCgwZGVnLCA2NyUsIDc3JSk7XFxufVxcblxcbi5lZGl0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMTEsIDE4NCwgNTUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAwcHggMnB4IDBweCByZ2IoMTg4LCAyMjksIDE1Nik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9fY29udGFpbmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9fcHJpb3JpdGllcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvX3Rhc2suc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL19tb2RhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvX2Zvcm0uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL192aWV3VG9kby5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvX3Byb2plY3Quc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxtREFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLDJDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtF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aFlBO0VBQ0UsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBTG1ZRjs7QU0xZUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FONmVGOztBTTFlQTtFQUNFLDJDQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLDZDQUFBO0FONmVGOztBTTFlQTtFQUNFLHFDQUFBO0FONmVGOztBTTFlQTtFQUNFLHFDQUFBO0FONmVGOztBTXplRTtFQUNFLG1CQUFBO0FONGVKOztBQXBnQkE7RUFDRSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0FBdWdCRjs7QUFwZ0JBO0VBQ0Usb0VBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXVnQkY7O0FBcGdCQTtFQUNFLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBc2dCRjs7QUFuZ0JBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFzZ0JGOztBQW5nQkE7RUFDRSxhQUFBO0FBc2dCRjs7QUFuZ0JBO0VBQ0UsbUJBQUE7RUFDQSxxRUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FBc2dCRjs7QUFuZ0JBO0VBQ0UsK0JBQUE7RUFDQSxpRkFBQTtBQXNnQkY7O0FBbmdCQTtFQUNFLDZCQUFBO0VBQ0EsZ0ZBQUE7QUFzZ0JGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcXG4gIGhlaWdodDogOTAlO1xcbiAgbWluLXdpZHRoOiA3NSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAxLjJmcikgMnB4IDNmcjtcXG4gIGJveC1zaGFkb3c6IDhweCA4cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItdG9wOiAjNDY0ZTU1IDRweCBzb2xpZDtcXG4gIGJvcmRlci1sZWZ0OiAjNDY0ZTU1IDJweCBzb2xpZDtcXG59XFxuXFxuLnNlcGFyYXRvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xcbn1cXG5cXG4ubWFpbkNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogY2FsYyg2NSUgLSAycHgpIDJweCAzNSU7XFxufVxcblxcbi5wZW5kaW5nIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItYm90dG9tOiAjMTUxODFjIDJweCBzb2xpZDtcXG4gIGJvcmRlci1sZWZ0OiAjNDY0ZTU1IDJweCBzb2xpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW5tYXgoMCwgMTAwJSk7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci10b3A6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbiAgYm9yZGVyLWxlZnQ6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgfVxcblxcbiAgLnNlcGFyYXRvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAucGVuZGluZyB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgfVxcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBib3JkZXItcmlnaHQ6ICMxNTE4MWMgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIixcIkBpbXBvcnQgXFxcIi4vaW5kZXhcXFwiO1xcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZjhmOWZhO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTkuNzVkZWcsICM2ZTllY2YgMTMuMDIlLCAjMTIyNjNhIDEwMCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLy8gZm9udC1zaXplOiBjYWxjKDFyZW0gKyAxdncpO1xcbiAgZm9udC1zaXplOiAxLjV2dztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDAuN3Z3IDA7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuICBmb250LXNpemU6IDF2dztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiAjMjg4N2M4O1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAwcHggMnB4IDBweCAjNmJiMmUzO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZjhmOWZhO1xcbiAgcGFkZGluZzogNnB4IDEwcHg7XFxuICBmb250LXNpemU6IDEuMXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZWxldGVCdXR0b24ge1xcbiAgYmFja2dyb3VuZDogaHNsKDAsIDgyJSwgNjMlKTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgMHB4IDJweCAwcHggaHNsKDAsIDY3JSwgNzclKTtcXG59XFxuXFxuLmVkaXRCdXR0b24ge1xcbiAgYmFja2dyb3VuZDogcmdiKDExMSwgMTg0LCA1NSk7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IDBweCAycHggMHB4IHJnYigxODgsIDIyOSwgMTU2KTtcXG59XFxuXCIsXCIkcmVzcG9uc2l2ZS10ZXh0LXNpemU6IGNsYW1wKDhweCwgMXZ3LCA2NHB4KTtcXG4kcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTogY2xhbXAoMTRweCwgY2FsYygwLjVyZW0gKyAwLjd2dyksIDY0cHgpO1xcbiRyZXNwb25zaXZlLXByaW8tc2l6ZTogY2xhbXAoMTRweCwgY2FsYygwLjVyZW0gKyAwLjR2dyksIDY0cHgpO1xcblxcbi5wcmlvcml0eU5hbWUge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAkcmVzcG9uc2l2ZS10ZXh0LXNpemU7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eUNvbG9yQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7XFxuICBwYWRkaW5nOiBjbGFtcCg4cHgsIGNhbGMoMC4zcmVtICsgMC4zdncpLCA2NHB4KTtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNmM3NTdkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5Q29sb3Ige1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgaGVpZ2h0OiAkcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTtcXG4gIHdpZHRoOiAkcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgI2EwYjFjMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuI3ByaW9yaXRpZXMge1xcbiAgd2lkdGg6IGNsYW1wKDEwMHB4LCBjYWxjKDMwJSArIDR2dyksIDYwMHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiBjbGFtcCg2cHgsIDAuM3Z3LCAxMnB4KTtcXG4gIG1hcmdpbi1ib3R0b206IGNsYW1wKDEwcHgsIDAuN3Z3LCAxNnB4KTtcXG59XFxuXFxuLnByaW9yaXR5Q29sb3JDb250YWluZXIge1xcbiAgLnByaW9yaXR5Q29sb3Ige1xcbiAgICBoZWlnaHQ6ICRyZXNwb25zaXZlLXByaW8tc2l6ZTtcXG4gICAgd2lkdGg6ICRyZXNwb25zaXZlLXByaW8tc2l6ZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbi5zaWRlYmFyQnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC42dnc7XFxufVxcblwiLFwiJGJpZy1yZXNwb25zaXZlLXRleHQtc2l6ZTogY2xhbXAoOHB4LCBjYWxjKDAuNXJlbSArIDAuN3Z3KSwgNjRweCk7XFxuJGJpZy1yZXNwb25zaXZlLWJ1dHRvbi1zaXplOiBjbGFtcCgxNHB4LCBjYWxjKDAuNXJlbSArIDAuN3Z3KSwgNjRweCk7XFxuJHNtYWxsLXJlc3BvbnNpdmUtdGV4dC1zaXplOiBjbGFtcCg2cHgsIGNhbGMoMC41cmVtICsgMC40dncpLCAzNnB4KTtcXG4kc21hbGwtcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTogY2xhbXAoMTBweCwgY2FsYygwLjVyZW0gKyAwLjR2dyksIDM2cHgpO1xcbi5Ub2Rvc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDUwcHg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi50YXNrQ29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiBjbGFtcCg0cHgsIDAuNHZ3LCA4cHgpO1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNhMGIxYzM7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IGNsYW1wKDJweCwgMC4zdncsIDhweCkgMDtcXG59XFxuXFxuLnRhc2tNaW5pQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogY2xhbXAoOHB4LCBjYWxjKDAuNXJlbSArIDAuNXZ3KSwgNjRweCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnRhc2tDb2xvciB7XFxuICBoZWlnaHQ6ICRiaWctcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTtcXG4gIHdpZHRoOiAkYmlnLXJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTgxNjE2O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4udGFza0J1dHRvbiB7XFxuICBoZWlnaHQ6ICRiaWctcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTtcXG4gIHdpZHRoOiAkYmlnLXJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxufVxcblxcbi50YXNrTWluaUNvbnRhaW5lcjpudGgtbGFzdC1vZi10eXBlKC1uICsgMikge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICM2Yzc1N2Q7XFxufVxcblxcbi50YXNrTWluaUNvbnRhaW5lcjpudGgtY2hpbGQoLW4gKyAyKSB7XFxuICBvdXRsaW5lOiAycHggc29saWQgIzZjNzU3ZDtcXG59XFxuXFxuLnRhc2tUaW1lIHtcXG4gIHBhZGRpbmctbGVmdDogY2FsYygxcmVtICsgMXZ3KTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuXFxuICBwIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgY29sb3I6ICNhZGI1YmQ7XFxuICB9XFxufVxcblxcbi50YXNrVGl0bGUge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHdpZHRoOiBjbGFtcCgxNTBweCwgY2FsYygxMHZ3ICsgMTByZW0pLCA1MDBweCk7XFxuXFxuICBwIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB9XFxufVxcblxcbi50YXNrVGl0bGUsXFxuLnRhc2tUaW1lIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcCB7XFxuICAgIGZvbnQtc2l6ZTogJGJpZy1yZXNwb25zaXZlLXRleHQtc2l6ZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbn1cXG5cXG4uc3VidGFza3NDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5zdWJ0YXNrIHtcXG4gIG1hcmdpbjogY2xhbXAoMnB4LCAwLjF2dywgNHB4KSAwO1xcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAudGFza01pbmlDb250YWluZXIge1xcbiAgICBwYWRkaW5nOiBjbGFtcCg4cHgsIGNhbGMoMC40cmVtICsgMC40dncpLCA0OHB4KTtcXG5cXG4gICAgLnRhc2tCdXR0b24ge1xcbiAgICAgIGhlaWdodDogJHNtYWxsLXJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICAgICAgd2lkdGg6ICRzbWFsbC1yZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbiAgICB9XFxuXFxuICAgIC50YXNrQ29sb3Ige1xcbiAgICAgIHdpZHRoOiAkc21hbGwtcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTtcXG4gICAgICBoZWlnaHQ6ICRzbWFsbC1yZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbiAgICB9XFxuICB9XFxuXFxuICAudGFza1RpdGxlLFxcbiAgLnRhc2tUaW1lIHtcXG4gICAgcCB7XFxuICAgICAgZm9udC1zaXplOiAkc21hbGwtcmVzcG9uc2l2ZS10ZXh0LXNpemU7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmNvbXBsZXRlZFRhc2sge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBvcGFjaXR5OiAwLjY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpLCBpbnNldCAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi50YXNrRGF0YUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4OiAxIDI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGRTdWJ0YXNrIHtcXG4gIG1hcmdpbi10b3A6IDAuM3Z3O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuI2NvbXBsZXRlZFRvZG9zID4gLnRhc2tDb250YWluZXIgPiAuc3VidGFza3NDb250YWluZXIge1xcbiAgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXCIsXCIubW9kYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuNTAyKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21vZGFsQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XFxuICBib3gtc2hhZG93OiA4cHggOHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICBtYXgtaGVpZ2h0OiA3MHZoO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uY2xvc2VCdXR0b24ge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMXZ3O1xcbiAgbGVmdDogMXZ3O1xcbiAgaGVpZ2h0OiAxLjN2dztcXG4gIHdpZHRoOiAxLjN2dztcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5jbG9zZUJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXCIsXCIuZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNHZ3O1xcblxcbiAgbGFiZWwge1xcbiAgICBmb250LXNpemU6IGNhbGMoMXZ3ICsgNnB4KTtcXG4gIH1cXG5cXG4gIGlucHV0LFxcbiAgc2VsZWN0LFxcbiAgdGV4dGFyZWEge1xcbiAgICBmb250LXNpemU6IGNhbGMoMC44dncgKyA0cHgpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICMyMTI1Mjk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSksIGluc2V0IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgcGFkZGluZzogY2FsYygwLjV2dyArIDJweCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXZ3O1xcbiAgICBjb2xvcjogI2Y4ZjlmYTtcXG4gIH1cXG59XFxuXFxuLkR1ZWRhdGVGaWVsZCB7XFxuICBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjh2dyArIDRweCk7XFxuICB9XFxuXFxuICA6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgfVxcbn1cXG5cXG4ubmV3Rm9ybSB7XFxuICBtaW4td2lkdGg6IDM1dnc7XFxuICBwYWRkaW5nOiAwIGNhbGMoMXZ3ICsgNnB4KSBjYWxjKDF2dyArIDZweCkgY2FsYygxdncgKyA2cHgpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMmZyO1xcbiAgZ2FwOiBjYWxjKDAuNXZ3ICsgNHB4KTtcXG59XFxuXFxuLlRpdGxlRmllbGQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4uRGVzY3JpcHRpb25GaWVsZCB7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuXFxuICB0ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICBtYXgtaGVpZ2h0OiAyMHZoO1xcbiAgfVxcbn1cXG5cXG4uUHJpb3JpdHlGaWVsZCB7XFxuICBzZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvOS85ZC9DYXJldF9kb3duX2ZvbnRfYXdlc29tZV93aGl0ZXZhcmlhdGlvbi5zdmcpXFxuICAgICAgICBuby1yZXBlYXQgcmlnaHQgMC44ZW0gY2VudGVyIC8gMS40ZW0sXFxuICAgICAgIzIxMjUyOTtcXG4gICAgLyogUmVtb3ZlIGZvY3VzIG91dGxpbmUgKi9cXG4gICAgJjpmb2N1cyB7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgfVxcbiAgICAvKiBSZW1vdmUgSUUgYXJyb3cgKi9cXG4gICAgJjo6LW1zLWV4cGFuZCB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ubmV3VGl0bGUge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IGNhbGMoMXZ3ICsgNnB4KTtcXG59XFxuXFxuLmNyZWF0ZUJ1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblwiLFwiLnRpdGxlVmlldyB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgdXNlci1zZWxlY3Q6IGF1dG87XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi50aXRsZVZpZXdDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDJ2dztcXG59XFxuXFxuLmRlc2NyaXB0aW9uVmlld0NvbnRhaW5lciB7XFxuICBtYXJnaW46IDAgMXZ3O1xcbn1cXG5cXG4uaW5mb0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWluLXdpZHRoOiBjbGFtcCgyNTBweCwgNzB2aCwgMTAwMHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG8gbWF4LWNvbnRlbnQgYXV0byBtYXgtY29udGVudDtcXG5cXG4gIC5zZXBhcmF0b3Ige1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gIH1cXG5cXG4gIGhyIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG59XFxuXFxuLmRhdGVWaWV3Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5kYXRlU3RyaW5nQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDhweCwgMXZ3LCA2NHB4KTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIH1cXG59XFxuXFxuLnByaW9yaXR5Vmlld0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG9EYXRhQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAucHJpb3JpdHkge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIC5wcmlvcml0eU5hbWUge1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLm1haW5UYXNrQ29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAgMXZ3IDF2dyAxdnc7XFxuICBib3JkZXItYm90dG9tOiAjMTUxODFjIDJweCBzb2xpZDtcXG59XFxuXFxuLnZpZXdTdWJDb250YWluZXIge1xcbiAgYm9yZGVyLXRvcDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBwYWRkaW5nOiAxdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBoMSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG59XFxuXFxuLmRlc2NyaXB0aW9uVmlldyB7XFxuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLkJ1dHRvbnNWaWV3IHtcXG4gIGJvcmRlci10b3A6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC44dnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXZ3IDA7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcXG59XFxuXCIsXCIjcHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjV2dztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwMCwgNyUsIDglLCA2MCUpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjV2dyAwIDAuNXZ3IDAuN3Z3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0IDBzO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwMCwgNyUsIDglLCAxMDAlKTtcXG59XFxuXFxuI3NlbGVjdGVkUHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwMCwgNyUsIDglLCAxMDAlKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXZ3O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHN0YXRlLCB0ZW1wbGF0ZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgfVxuXG4gIC8vIFRoaXMgbWV0aG9kIHJldHVybnMgYSB0ZW1wbGF0ZSBsaXRlcmFsIG9mIHRoZSBjb21wb25lbnRcbiAgdmlldygpIHtcbiAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZSh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIC8vIFRoaXMgbWV0aG9kIHJldHVybnMgYW4gSFRNTCBlbGVtZW50IG9iamVjdCBvZiB0aGUgY29tcG9uZW50XG4gIERPTWVsZW1lbnQoZSwgZnVuYykge1xuICAgIGxldCBlbGVtZW50ID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyh0aGlzLnZpZXcoKSwgXCJ0ZXh0L2h0bWxcIikuYm9keVxuICAgICAgLmZpcnN0Q2hpbGQ7XG5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZSwgZnVuYyk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBhZGRMaXN0ZW5lciA9IChlbGVtZW50LCBldmVudCwgZnVuYykgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuYyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcblxuLy9tYWtlIGFuIGV2ZW50SGFuZGxlciBjbGFzcyB0aGF0IGFzc2lnbnMgZXZlbnQgbGlzdGVuZXJzIHRvIGNvbXBvbmVudHNcbiIsImltcG9ydCBQcm9qZWN0Q29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvUHJvamVjdENvbXBvbmVudFwiO1xuXG5jbGFzcyBOZXJvcyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgdGhpcy5OZXJvc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtzZWxlY3Rvcn1gKTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9qZWN0cyA9IG5ldyBOZXJvcyhcInByb2plY3RzXCIpO1xuXG4gIHN0YXRpYyBkZWxldGVOZXJvc0NvbXBvbmVudChuZXJvcywgY29tcG9uZW50KSB7XG4gICAgbGV0IGNvbXBvbmVudHMgPSBuZXJvcy5jb21wb25lbnRzO1xuICAgIGRlbGV0ZSBjb21wb25lbnRzW2NvbXBvbmVudC5uYW1lXTtcbiAgICBuZXJvcy51cGRhdGVWaWV3KCk7XG4gICAgUHJvamVjdENvbXBvbmVudC5zZWxlY3RMYXN0UHJvamVjdCgpO1xuICB9XG5cbiAgcmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgdGhpcy5jb21wb25lbnRzW2NvbXBvbmVudC5uYW1lXSA9IGNvbXBvbmVudDtcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgfVxuXG4gIHVwZGF0ZVZpZXcoKSB7XG4gICAgaWYgKHRoaXMuY29tcG9uZW50cykge1xuICAgICAgdGhpcy5OZXJvc0VsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuY29tcG9uZW50cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHRoaXMuTmVyb3NFbGVtZW50LmFwcGVuZCh0aGlzLmNvbXBvbmVudHNba2V5XS5ET01lbGVtZW50KCkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lcm9zO1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgbW9kYWwgZnJvbSBcIi4uL21vZGFsXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi4vcHJvamVjdFwiO1xuXG5leHBvcnQgY2xhc3MgRGVsZXRlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgdGVtcGxhdGUgPSAoc3RhdGUpID0+XG4gICAgYFxuICAgIDxkaXYgY2xhc3M9J2RlbGV0ZUNvbnRhaW5lcic+XG4gICAgICA8aDE+QXJlIHlvdSBzdXJlPzwvaDE+XG4gICAgICA8ZGl2IGNsYXNzPSdidXR0b25zQ29udGFpbmVyJz5cbiAgICAgICAgPGJ1dHRvbiBpZD0nY2FuY2VsJz5HbyBiYWNrPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9J2NvbmZpcm0nPlllcywgZGVsZXRlIGl0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuXG4gIERPTWVsZW1lbnQoKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBzdXBlci5ET01lbGVtZW50KCk7XG4gICAgbGV0IGNhbmNlbEJ0biA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWxcIik7XG4gICAgbGV0IGNvbmZpcm1CdG4gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybVwiKTtcblxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbW9kYWwuaGlkZSgpO1xuICAgIH0pO1xuXG4gICAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZS50b2RvLmRlbGV0ZVRvZG8odGhpcy5zdGF0ZS50b2RvKTtcbiAgICAgIFByb2plY3Quc2VsZWN0ZWQuY29tcG9uZW50LnVwZGF0ZSgpO1xuICAgICAgbW9kYWwuaGlkZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9Db21wb25lbnRcIjtcbmltcG9ydCBkZWxldGVUYXNrIGZyb20gXCIuLi8uLi9hc3NldHMvZGVsZXRlLnN2Z1wiO1xuaW1wb3J0IGVkaXQgZnJvbSBcIi4uLy4uL2Fzc2V0cy9lZGl0LnN2Z1wiO1xuaW1wb3J0IGNoZWNrZWQgZnJvbSBcIi4uLy4uL2Fzc2V0cy9jaGVja2VkLnN2Z1wiO1xuaW1wb3J0IHVuY2hlY2tlZCBmcm9tIFwiLi4vLi4vYXNzZXRzL3VuY2hlY2tlZC5zdmdcIjtcblxuY2xhc3MgTWluaUNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHRlbXBsYXRlID0gKHN0YXRlKSA9PiBgXG4gICAgPGRpdiBjbGFzcz1cInRhc2tNaW5pQ29udGFpbmVyICR7c3RhdGUudHlwZUNsYXNzfVwiPlxuICAgICAgJHtzdGF0ZS5odG1sfVxuICAgIDwvZGl2PlxuICBgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNaW5pQ29udGFpbmVyQ29tcG9uZW50O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi4vcHJvamVjdFwiO1xuaW1wb3J0IG1vZGFsIGZyb20gXCIuLi9tb2RhbFwiO1xuaW1wb3J0IE5lcm9zIGZyb20gXCIuLi9OZXJvc1wiO1xuaW1wb3J0IFByb2plY3RDb21wb25lbnQgZnJvbSBcIi4vUHJvamVjdENvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgTmV3UHJvamVjdENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICB0ZW1wbGF0ZSA9ICgpID0+XG4gICAgYFxuICAgIDxkaXYgY2xhc3M9J25ld1Byb2plY3RDb250YWluZXInPlxuICAgICAgPGgxPkNyZWF0ZSBuZXcgUHJvamVjdDwvaDE+XG4gICAgICA8Zm9ybSBjbGFzcz0nbmV3Rm9ybSc+XG4gICAgICAgIDxkaXYgY2xhc3M9J2ZpZWxkIFRpdGxlRmllbGQnPlxuICAgICAgICA8bGFiZWwgZm9yPSdUaXRsZSc+UHJvamVjdCBUaXRsZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdUaXRsZScgaWQ9J1RpdGxlJz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9J2NyZWF0ZUJ1dHRvbicgdHlwZT0nYnV0dG9uJz5DcmVhdGU8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICBET01lbGVtZW50KCkge1xuICAgIGxldCBlbGVtZW50ID0gc3VwZXIuRE9NZWxlbWVudCgpO1xuICAgIGxldCBidXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XG4gICAgbGV0IGZvcm0gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVQcm9qZWN0KGZvcm0pO1xuICAgIH0pO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgY3JlYXRlUHJvamVjdChmb3JtKSB7XG4gICAgbGV0IHRpdGxlID0gZm9ybS5UaXRsZS52YWx1ZTtcbiAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgICBOZXJvcy5wcm9qZWN0cy5yZWdpc3RlckNvbXBvbmVudChwcm9qZWN0LmNvbXBvbmVudCk7XG4gICAgLy8gU2VsZWN0IG5ld2x5IGNyZWF0ZWQgcHJvamVjdFxuICAgIFByb2plY3RDb21wb25lbnQuc2VsZWN0TGFzdFByb2plY3QoKTtcbiAgICBtb2RhbC5oaWRlKCk7XG4gIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4uL3RvZG9cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuLi9wcm9qZWN0XCI7XG5pbXBvcnQgTmVyb3MgZnJvbSBcIi4uL05lcm9zXCI7XG5pbXBvcnQgbW9kYWwgZnJvbSBcIi4uL21vZGFsXCI7XG5cbmV4cG9ydCBjbGFzcyBOZXdUb2RvQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgdGVtcGxhdGUgPSAoc3RhdGUpID0+XG4gICAgYFxuICAgIDxkaXYgY2xhc3M9J25ld0NvbnRhaW5lcic+XG4gICAgICA8aDEgY2xhc3M9J25ld1RpdGxlJz5DcmVhdGUgdG9kbzwvaDE+XG4gICAgICA8Zm9ybSBjbGFzcz0nbmV3Rm9ybSc+XG4gICAgICAgIDxkaXYgY2xhc3M9J2ZpZWxkIFRpdGxlRmllbGQnPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J1RpdGxlJz5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J1RpdGxlJyBpZD0nVGl0bGUnIHZhbHVlPVwiJHtcbiAgICAgICAgICAgIHN0YXRlLnRvZG8gPyBzdGF0ZS50b2RvLnRpdGxlIDogXCJcIlxuICAgICAgICAgIH1cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J2ZpZWxkIER1ZWRhdGVGaWVsZCc+XG4gICAgICAgICAgPGxhYmVsIGZvcj0nRHVlIGRhdGUnPkR1ZSBkYXRlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0nZGF0ZScgbmFtZT0nRHVlZGF0ZScgaWQ9J0R1ZSBkYXRlJyB2YWx1ZT1cIiR7XG4gICAgICAgICAgICBzdGF0ZS50b2RvID8gc3RhdGUudG9kby5kYXRlIDogXCJcIlxuICAgICAgICAgIH1cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J2ZpZWxkIFByaW9yaXR5RmllbGQnPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J1ByaW9yaXR5Jz5Qcmlvcml0eTwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdCBuYW1lPVwiUHJpb3JpdHlcIiBpZD1cIlByaW9yaXR5XCI+XG4gICAgICAgICAgICA8b3B0aW9uIGlkPSdwMScgdmFsdWU9XCJVcmdlbnRcIj5VcmdlbnQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gaWQ9J3AyJyB2YWx1ZT1cIkhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIGlkPSdwMycgdmFsdWU9XCJNZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gaWQ9J3A0JyB2YWx1ZT1cIkxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiBpZD0ncDUnIHZhbHVlPVwiT3B0aW9uYWxcIj5PcHRpb25hbDwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nZmllbGQgRGVzY3JpcHRpb25GaWVsZCc+XG4gICAgICAgICAgPGxhYmVsIGZvcj0nRGVzY3JpcHRpb24nPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nRGVzY3JpcHRpb24nIGlkPSdEZXNjcmlwdGlvbicgdmFsdWU9XCIke1xuICAgICAgICAgICAgc3RhdGUudG9kbyA/IHN0YXRlLnRvZG8uZGVzY3JpcHRpb24gOiBcIlwiXG4gICAgICAgICAgfVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz0nY3JlYXRlQnV0dG9uJyB0eXBlPSdidXR0b24nPiR7XG4gICAgICAgICAgdGhpcy5zdGF0ZS50b2RvID8gXCJFZGl0XCIgOiBcIkNyZWF0ZVwiXG4gICAgICAgIH08L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgICBgO1xuXG4gIERPTWVsZW1lbnQoKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBzdXBlci5ET01lbGVtZW50KCk7XG4gICAgbGV0IGJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcbiAgICBsZXQgZm9ybSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgLy8gSWYgdGhlIHRvZG8gYWxyZWFkeSBleGlzdHMgKGVkaXQgbW9kZSkgbWFrZSB0aGUgYnV0dG9uIGVkaXQgdGhlIHRvZG8sIGVsc2UganVzdCBjcmVhdGUgYSBuZXcgdGFza1xuICAgIGlmICh0aGlzLnN0YXRlLnRvZG8pIHtcbiAgICAgIGxldCBzZWxlY3QgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCNQcmlvcml0eWApO1xuICAgICAgc2VsZWN0LnNlbGVjdGVkSW5kZXggPSB0aGlzLnN0YXRlLnRvZG8ucHJpb3JpdHkgLSAxO1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZWRpdFRvZG8oZm9ybSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY3JlYXRlVG9kbyhmb3JtKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIGVkaXRUb2RvKGZvcm0pIHtcbiAgICBsZXQgdGl0bGUgPSBmb3JtLlRpdGxlLnZhbHVlO1xuICAgIGxldCBkYXRlID0gZm9ybS5EdWVkYXRlLnZhbHVlO1xuICAgIGxldCBwcmlvcml0eSA9IGZvcm0uUHJpb3JpdHkuc2VsZWN0ZWRJbmRleCArIDE7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZm9ybS5EZXNjcmlwdGlvbi52YWx1ZTtcbiAgICB0aGlzLnN0YXRlLnRvZG8uZWRpdCh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKTtcbiAgICBQcm9qZWN0LnNlbGVjdGVkLmNvbXBvbmVudC51cGRhdGUoKTtcbiAgICBtb2RhbC5oaWRlKCk7XG4gIH1cblxuICBjcmVhdGVUb2RvKGZvcm0pIHtcbiAgICBsZXQgdGl0bGUgPSBmb3JtLlRpdGxlLnZhbHVlO1xuICAgIGxldCBkYXRlID0gZm9ybS5EdWVkYXRlLnZhbHVlO1xuICAgIGxldCBwcmlvcml0eSA9IGZvcm0uUHJpb3JpdHkuc2VsZWN0ZWRJbmRleCArIDE7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZm9ybS5EZXNjcmlwdGlvbi52YWx1ZTtcblxuICAgIGlmICh0aGlzLnN0YXRlLnBhcmVudCkge1xuICAgICAgdGhpcy5zdGF0ZS5wYXJlbnQuY3JlYXRlVG9kbyh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ldyBUb2RvKHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGZhbHNlKTtcbiAgICB9XG4gICAgUHJvamVjdC5zZWxlY3RlZC5jb21wb25lbnQudXBkYXRlKCk7XG4gICAgbW9kYWwuaGlkZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9Db21wb25lbnRcIjtcbmltcG9ydCBOZXJvcyBmcm9tIFwiLi4vTmVyb3NcIjtcbmltcG9ydCBQcmlvcml0eSBmcm9tIFwiLi4vcHJpb3JpdHlcIjtcblxuZXhwb3J0IGNsYXNzIFByaW9yaXR5Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgdGVtcGxhdGUgPSAoc3RhdGUpID0+XG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5Q29sb3JDb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5Q29sb3JcIiBzdHlsZT1cImJhY2tncm91bmQ6ICR7c3RhdGUucHJpb3JpdHkuY29sb3J9XCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzPVwicHJpb3JpdHlOYW1lXCI+JHtzdGF0ZS5wcmlvcml0eS5uYW1lfTwvcD5cbiAgICA8L2Rpdj5cbiAgICBgO1xuXG4gIHN0YXRpYyBkaXNwbGF5UHJpb3JpdGllcygpIHtcbiAgICBsZXQgcHJpb3JpdHlOZXJvcyA9IG5ldyBOZXJvcyhcInByaW9yaXRpZXNcIik7XG4gICAgUHJpb3JpdHkucHJpb3JpdGllcy5mb3JFYWNoKChwcmlvcml0eSkgPT4ge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IG5ldyBQcmlvcml0eUNvbXBvbmVudChwcmlvcml0eS5uYW1lLCB7XG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgIH0pO1xuICAgICAgcHJpb3JpdHlOZXJvcy5yZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9Db21wb25lbnRcIjtcbmltcG9ydCBOZXJvcyBmcm9tIFwiLi4vTmVyb3NcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuLi9wcm9qZWN0XCI7XG5pbXBvcnQgVG9kb0NvbXBvbmVudCBmcm9tIFwiLi9Ub2RvQ29tcG9uZW50XCI7XG5pbXBvcnQgaGVscGVyIGZyb20gXCIuLi9oZWxwZXJcIjtcbmltcG9ydCB7IFByaW9yaXR5Q29tcG9uZW50IH0gZnJvbSBcIi4vUHJpb3JpdHlDb21wb25lbnRcIjtcblxuY2xhc3MgUHJvamVjdENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHN0YXRlKSB7XG4gICAgc3VwZXIobmFtZSwgc3RhdGUpO1xuICB9XG5cbiAgc3RhdGljIHJlc2V0VmlldygpIHtcbiAgICBsZXQgcGVuZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVuZGluZ1RvZG9zXCIpO1xuICAgIGxldCBjb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbXBsZXRlZFRvZG9zXCIpO1xuXG4gICAgcGVuZGluZy5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbXBsZXRlZC5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG5cbiAgLy8gVGhpcyBtZXRob2Qgc2VsZWN0cyB0aGUgbGFzdCBwcm9qZWN0IGNyZWF0ZWRcbiAgc3RhdGljIHNlbGVjdExhc3RQcm9qZWN0KCkge1xuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0Q29udGFpbmVyXCIpO1xuICAgIGlmIChwcm9qZWN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHByb2plY3RbcHJvamVjdC5sZW5ndGggLSAxXS5jbGljaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBQcm9qZWN0LnNlbGVjdGVkID0gbnVsbDtcbiAgICAgIFByb2plY3RDb21wb25lbnQucmVzZXRWaWV3KCk7XG4gICAgfVxuICB9XG5cbiAgdGVtcGxhdGUgPSAoc3RhdGUpID0+XG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0Q29udGFpbmVyXCI+XG4gICAgICA8aDM+JHtzdGF0ZS5wcm9qZWN0Lm5hbWV9PC9oMz5cbiAgICA8L2Rpdj5cbiAgICBgO1xuXG4gIC8vIFRoaXMgbWV0aG9kIGRpc3BsYXlzIGFsbCB0b2RvcyBiZWxvbmdpbmcgdG8gdGhpcyBwcm9qZWN0XG4gIGRpc3BsYXlUb2RvcyhzZWxlY3RvciwgcHJvamVjdFRvZG9zKSB7XG4gICAgUHJpb3JpdHlDb21wb25lbnQuZGlzcGxheVByaW9yaXRpZXMoKTtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IE5lcm9zKGAke3NlbGVjdG9yfVRvZG9zYCk7XG4gICAgbGV0IHRvZG9zID0gaGVscGVyLm1lcmdlU29ydChwcm9qZWN0VG9kb3MpO1xuXG4gICAgaWYgKHRvZG9zLmxlbmd0aCA+IDApIHtcbiAgICAgIHRvZG9zID0gdG9kb3MubWFwKFxuICAgICAgICAodGFzaywgaW5kZXgpID0+XG4gICAgICAgICAgbmV3IFRvZG9Db21wb25lbnQoYHRvZG8ke2luZGV4fWAsIHtcbiAgICAgICAgICAgIHRhc2s6IHRhc2ssXG4gICAgICAgICAgICBzdWJ0YXNrczogaGVscGVyLm1lcmdlU29ydCh0YXNrLmNoaWxkcmVuKSxcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgZWxlbWVudC5yZWdpc3RlckNvbXBvbmVudCh0b2RvKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnVwZGF0ZVZpZXcoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5kaXNwbGF5VG9kb3MoXCJjb21wbGV0ZWRcIiwgdGhpcy5zdGF0ZS5wcm9qZWN0LmNvbXBsZXRlZCk7XG4gICAgdGhpcy5kaXNwbGF5VG9kb3MoXCJwZW5kaW5nXCIsIHRoaXMuc3RhdGUucHJvamVjdC5wZW5kaW5nKTtcbiAgfVxuXG4gIHJlZnJlc2hUb2RvcygpIHtcbiAgICBsZXQgcGVuZGluZ0FycmF5ID0gdGhpcy5zdGF0ZS5wcm9qZWN0LnBlbmRpbmc7XG4gICAgbGV0IGNvbXBsZXRlZEFycmF5ID0gdGhpcy5zdGF0ZS5wcm9qZWN0LmNvbXBsZXRlZDtcbiAgICBpZiAocGVuZGluZ0FycmF5Lmxlbmd0aCA+IDApIHRoaXMuZGlzcGxheVRvZG9zKFwicGVuZGluZ1wiLCBwZW5kaW5nQXJyYXkpO1xuICAgIGlmIChjb21wbGV0ZWRBcnJheS5sZW5ndGggPiAwKVxuICAgICAgdGhpcy5kaXNwbGF5VG9kb3MoXCJjb21wbGV0ZWRcIiwgY29tcGxldGVkQXJyYXkpO1xuICB9XG5cbiAgRE9NZWxlbWVudCgpIHtcbiAgICByZXR1cm4gc3VwZXIuRE9NZWxlbWVudChcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUlEKGUuY3VycmVudFRhcmdldCk7XG4gICAgICBQcm9qZWN0LnNlbGVjdGVkID0gdGhpcy5zdGF0ZS5wcm9qZWN0O1xuICAgICAgLy8gUmVzZXQgdGhlIGJvYXJkIGJlZm9yZSBkaXNwbGF5aW5nIHRoaXMgcHJvamVjdCB0b2Rvc1xuICAgICAgUHJvamVjdENvbXBvbmVudC5yZXNldFZpZXcoKTtcbiAgICAgIHRoaXMucmVmcmVzaFRvZG9zKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBUaGlzIG1ldGhvZCByZW1vdmVzIHRoZSBpZCBmcm9tIHRoZSBwcmV2aW91cyBlbGVtZW50IGFuZCBhc3NpZ25zIGl0IHRvIHRoZSBjbGlja2VkIGVsZW1lbnRcbiAgaGFuZGxlSUQodGFyZ2V0KSB7XG4gICAgbGV0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RlZFByb2plY3RcIik7XG4gICAgaWYgKHNlbGVjdGVkKSBzZWxlY3RlZC5pZCA9IFwiXCI7XG4gICAgdGFyZ2V0LmlkID0gXCJzZWxlY3RlZFByb2plY3RcIjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Q29tcG9uZW50O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgTWluaUNvbnRhaW5lckNvbXBvbmVudCBmcm9tIFwiLi9NaW5pQ29udGFpbmVyQ29tcG9uZW50XCI7XG5pbXBvcnQgUHJpb3JpdHkgZnJvbSBcIi4uL3ByaW9yaXR5XCI7XG5pbXBvcnQgeyB2aWV3VG9kb0NvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdUb2RvQ29tcG9uZW50XCI7XG5pbXBvcnQgbW9kYWwgZnJvbSBcIi4uL21vZGFsXCI7XG5pbXBvcnQgeyBOZXdUb2RvQ29tcG9uZW50IH0gZnJvbSBcIi4vTmV3VG9kb0NvbXBvbmVudFwiO1xuaW1wb3J0IGRlbGV0ZVRhc2sgZnJvbSBcIi4uLy4uL2Fzc2V0cy9kZWxldGUuc3ZnXCI7XG5pbXBvcnQgZWRpdCBmcm9tIFwiLi4vLi4vYXNzZXRzL2VkaXQuc3ZnXCI7XG5pbXBvcnQgY2hlY2tlZCBmcm9tIFwiLi4vLi4vYXNzZXRzL2NoZWNrZWQuc3ZnXCI7XG5pbXBvcnQgdW5jaGVja2VkIGZyb20gXCIuLi8uLi9hc3NldHMvdW5jaGVja2VkLnN2Z1wiO1xuaW1wb3J0IHsgRGVsZXRlQ29tcG9uZW50IH0gZnJvbSBcIi4vRGVsZXRlQ29tcG9uZW50XCI7XG5cbi8vIDEuLSBJZiBhIGJpZyB0b2RvIGlzIGNoZWNrZWQsIGl0cyBjaGlsZHJlbiBhcmUgYWxzbyBjaGVja2VkIOKclO+4j1xuLy8gMi4tIElmIGFsbCB0aGUgc3VidG9kb3MgYXJlIGNoZWNrZWQsIHRoZSBwYXJlbnQgaXMgYWxzbyBjaGVja2VkIOKclO+4j1xuLy8gMy4tIElmIGEgYmlnIHRvZG8gYW5kIGl0cyBjaGlsZHJlbiBhcmUgY2hlY2tlZCwgYnV0IG9uZSBvZiB0aGUgY2hpbGRyZW5cbi8vIGlzIHVuY2hlY2tlZCwgdGhlIHBhcmVudCB0b2RvIHdpbGwgYWxzbyBiZSB1bmNoZWNrZWQg4pyU77iPXG4vLyA0Li0gSWYgYSBiaWcgdG9kbyBhbmQgaXRzIGNoaWxkcmVuIGFyZSBjaGVja2VkLCBidXQgdGhlIHBhcmVudCBpcyB1bmNoZWNrZWQsXG4vLyBhbGwgaXRzIGNoaWxkcmVuIHdpbGwgYWxzbyBiZSB1bmNoZWNrZWQg4pyU77iPXG5cbmNsYXNzIFRhc2tDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzdGF0ZSkge1xuICAgIHN1cGVyKG5hbWUsIHN0YXRlKTtcbiAgICAvLyBDcmVhdGUgdGhlIHByaW9yaXR5IGNvbG9yIGh0bWwgYW5kIGNvbG9yLCBJIHNob3VsZCBwdXQgdGhpcyBpbnRvIGl0cyBvd24gY2xhc3NcbiAgICB0aGlzLmNvbG9ySFRNTCA9IChwcmlvcml0eSkgPT5cbiAgICAgIGA8ZGl2IGNsYXNzPVwicHJpb3JpdHlDb2xvclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJHtwcmlvcml0eS5jb2xvcn1cIj48L2Rpdj5gO1xuICAgIHRoaXMuY29sb3JNaW5pID0gbmV3IE1pbmlDb250YWluZXJDb21wb25lbnQoXCJwcmlvcml0eVwiLCB7XG4gICAgICBodG1sOiB0aGlzLmNvbG9ySFRNTChQcmlvcml0eS5wcmlvcml0eShzdGF0ZS50b2RvLnByaW9yaXR5KSksXG4gICAgICB0eXBlQ2xhc3M6IFwicHJpb3JpdHlCdXR0b25NaW5pXCIsXG4gICAgfSk7XG4gICAgdGhpcy5zdGF0ZS50b2RvLmNvbXBvbmVudCA9IHRoaXM7XG4gICAgLy8gSWYgdGhpcyB0b2RvIGlzIGNoZWNrZWQsIHRoZSBkb20gZWxlbWVudCB3aWxsIGhhdmUgdGhlIGNsYXNzIFwiY29tcGxldGVkVGFza1wiXG4gICAgaWYgKHRoaXMuc3RhdGUudG9kby5jaGVjaykgdGhpcy5zdGF0ZS5jbGFzc2VzLnB1c2goXCJjb21wbGV0ZWRUYXNrXCIpO1xuICB9XG5cbiAgLy8gQ3JlYXRlIGFsbCB0aGUgc3RhdGljIGJ1dHRvbnMgbmVlZGVkIGZvciBhIHRhc2ssIHRoZXNlIGFyZW4ndCBkeW5hbWljIHNpbmNlIGFsbCB0YXNrcyBoYXZlIHRoZSBzYW1lIGJ1dHRvbnNcbiAgc3RhdGljIGltZ0hUTUwgPSAoYWN0aW9uU1ZHKSA9PiBgPGltZyBjbGFzcz1cInRhc2tCdXR0b25cIiBzcmM9JHthY3Rpb25TVkd9PmA7XG4gIHN0YXRpYyBlZGl0TWluaSA9IG5ldyBNaW5pQ29udGFpbmVyQ29tcG9uZW50KFwiZWRpdFwiLCB7XG4gICAgaHRtbDogVGFza0NvbXBvbmVudC5pbWdIVE1MKGVkaXQpLFxuICAgIHR5cGVDbGFzczogXCJlZGl0QnV0dG9uTWluaVwiLFxuICB9KTtcbiAgc3RhdGljIGRlbGV0ZU1pbmkgPSBuZXcgTWluaUNvbnRhaW5lckNvbXBvbmVudChcImRlbGV0ZVwiLCB7XG4gICAgaHRtbDogVGFza0NvbXBvbmVudC5pbWdIVE1MKGRlbGV0ZVRhc2spLFxuICAgIHR5cGVDbGFzczogXCJkZWxldGVCdXR0b25NaW5pXCIsXG4gIH0pO1xuXG4gIC8vIFJldHVybiBhIG1pbmlDb250YWluZXIgd2l0aCB0aGUgY29ycmVzcG9uZGluZyBzdmcgZmlsZSwgY2hlY2tlZCBpZiB0b2RvIGlzQ2hlY2tlZFxuICAvLyBwcm9wZXJ0eSBpcyB0cnVlLCB1bmNoZWNrZWQgb3RoZXJ3aXNlLlxuICBjaGVja01pbmkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBNaW5pQ29udGFpbmVyQ29tcG9uZW50KFwiY2hlY2tcIiwge1xuICAgICAgaHRtbDogVGFza0NvbXBvbmVudC5pbWdIVE1MKHRoaXMuY2hlY2tTdGF0ZSgpKSxcbiAgICAgIHR5cGVDbGFzczogXCJjaGVja0J1dHRvbk1pbmlcIixcbiAgICB9KTtcbiAgfTtcblxuICAvLyBUaGlzIG1ldGhvZCBjaGVja3MgdGhlIHN0YXRlIG9mIHRoZSBpc0NoZWNrZWQgcHJvcGVydHkgZnJvbSB0b2Rvc1xuICBjaGVja1N0YXRlID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnRvZG8uY2hlY2sgPyBjaGVja2VkIDogdW5jaGVja2VkO1xuICB9O1xuXG4gIHRlbXBsYXRlID0gKHN0YXRlKSA9PlxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwiJHtzdGF0ZS5jbGFzc2VzLmpvaW4oXCIgXCIpfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2tEYXRhQ29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrVGl0bGVcIj5cbiAgICAgICAgICA8cD4ke3N0YXRlLnRvZG8udGl0bGV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tUaW1lXCI+XG4gICAgICAgICAgPHA+NSBkYXlzIGxlZnQ8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgRE9NZWxlbWVudCgpIHtcbiAgICBsZXQgZWxlbWVudCA9IHN1cGVyLkRPTWVsZW1lbnQoKTtcbiAgICB0aGlzLnZpZXdFdmVudExpc3RlbmVyKGVsZW1lbnQpO1xuICAgIGxldCBjaGVjayA9IHRoaXMuY2hlY2tNaW5pKCkuRE9NZWxlbWVudChcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIHRoaXMuZXZlbnRIYW5kbGVyKCkuY2hlY2tCdXR0b25cbiAgICApO1xuICAgIGxldCBwcmlvcml0eSA9IHRoaXMuY29sb3JNaW5pLkRPTWVsZW1lbnQoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICB0aGlzLmV2ZW50SGFuZGxlcigpLnByaW9yaXR5QnV0dG9uXG4gICAgKTtcbiAgICBsZXQgZWRpdCA9IFRhc2tDb21wb25lbnQuZWRpdE1pbmkuRE9NZWxlbWVudChcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIHRoaXMuZXZlbnRIYW5kbGVyKCkuZWRpdEJ1dHRvblxuICAgICk7XG4gICAgbGV0IGRlbGV0ZUJ0biA9IFRhc2tDb21wb25lbnQuZGVsZXRlTWluaS5ET01lbGVtZW50KFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgdGhpcy5ldmVudEhhbmRsZXIoKS5kZWxldGVCdXR0b25cbiAgICApO1xuXG4gICAgZWxlbWVudC5wcmVwZW5kKHByaW9yaXR5KTtcbiAgICBlbGVtZW50LnByZXBlbmQoY2hlY2spO1xuICAgIGVsZW1lbnQuYXBwZW5kKGVkaXQpO1xuICAgIGVsZW1lbnQuYXBwZW5kKGRlbGV0ZUJ0bik7XG4gICAgdGhpcy5zdGF0ZS50b2RvLmRvbUVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgdmlld0V2ZW50TGlzdGVuZXIoZWxlbWVudCkge1xuICAgIGxldCBpbm5lckNvbnRhaW5lciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrRGF0YUNvbnRhaW5lclwiKTtcbiAgICBpbm5lckNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5ldmVudEhhbmRsZXIoKS52aWV3QnV0dG9uKTtcbiAgfVxuXG4gIGNoZWNrQ2hpbGRyZW4oKSB7XG4gICAgdGhpcy5zdGF0ZS50b2RvLmNoaWxkcmVuLmZvckVhY2goKHN1YnRhc2spID0+IHtcbiAgICAgIHN1YnRhc2suY2hlY2tUb2RvKCk7XG4gICAgfSk7XG4gIH1cblxuICB1bmNoZWNrQ2hpbGRyZW4oKSB7XG4gICAgdGhpcy5zdGF0ZS50b2RvLmNoaWxkcmVuLmZvckVhY2goKHN1YnRhc2spID0+IHtcbiAgICAgIHN1YnRhc2sudW5jaGVja1RvZG8oKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNoZWNrUGFyZW50KCkge1xuICAgIGxldCBwYXJlbnQgPSB0aGlzLnN0YXRlLnRvZG8ucGFyZW50O1xuICAgIHBhcmVudC5jaGVja1RvZG8oKTtcbiAgfVxuXG4gIHVuY2hlY2tQYXJlbnQoKSB7XG4gICAgbGV0IHBhcmVudCA9IHRoaXMuc3RhdGUudG9kby5wYXJlbnQ7XG4gICAgcGFyZW50LnVuY2hlY2tUb2RvKCk7XG4gIH1cblxuICAvL0NoZWNrIGlmIHRoZSBzdWJ0YXNrcyBhcnJheSBjb250YWlucyBvbmx5IGNvbXBsZXRlZCB0YXNrc1xuICBhcmVTdWJ0YXNrc0NvbXBsZXRlZCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS50b2RvLmlzU3VidGFzaygpKSB7XG4gICAgICBsZXQgc3VidGFza3MgPSB0aGlzLnN0YXRlLnRvZG8ucGFyZW50LmNoaWxkcmVuO1xuICAgICAgcmV0dXJuIHN1YnRhc2tzLmV2ZXJ5KChzdWJ0YXNrKSA9PiBzdWJ0YXNrLmNoZWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZXZlbnRIYW5kbGVyID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBjaGVja0J1dHRvbjogKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS50b2RvLmNoZWNrKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGJpZyB0b2RvIGlzIGNvbXBsZXRlZCBhbmQgYSBzdWJ0YXNrIGlzIHVuY2hlY2tlZCwgdGhlIGJpZ1xuICAgICAgICAgIC8vIHRvZG8gaXMgdW5jaGVja2VkXG4gICAgICAgICAgaWYgKHRoaXMuYXJlU3VidGFza3NDb21wbGV0ZWQoKSAmJiB0aGlzLnN0YXRlLnRvZG8uaXNTdWJ0YXNrKCkpXG4gICAgICAgICAgICB0aGlzLnVuY2hlY2tQYXJlbnQoKTtcbiAgICAgICAgICB0aGlzLnN0YXRlLnRvZG8udW5jaGVja1RvZG8oKTtcbiAgICAgICAgICAvLyBJZiB0aGUgYmlnIHRvZG8gaXMgdW5jaGVja2VkLCBtYXJrIGFsbCBpdHMgY2hpbGRyZW4gdW5jaGVja2VkXG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUudG9kby5jaGlsZHJlbikgdGhpcy51bmNoZWNrQ2hpbGRyZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLnRvZG8uY2hlY2tUb2RvKCk7XG4gICAgICAgICAgLy8gSWYgYWxsIHRoZSBzdWJzdGFza3MgYXJlIGNvbXBsZXRlZCwgbWFyayBjaGVja2VkIHRoZSBiaWcgdG9kb1xuICAgICAgICAgIGlmICh0aGlzLmFyZVN1YnRhc2tzQ29tcGxldGVkKCkgJiYgdGhpcy5zdGF0ZS50b2RvLmlzU3VidGFzaygpKVxuICAgICAgICAgICAgdGhpcy5jaGVja1BhcmVudCgpO1xuICAgICAgICAgIC8vIElmIHRoZSBiaWcgdG9kbyBpcyBjaGVja2VkLCBtYXJrIGFsbCBpdHMgY2hpbGRyZW4gY2hlY2tlZFxuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvZG8uY2hpbGRyZW4pIHRoaXMuY2hlY2tDaGlsZHJlbigpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJpb3JpdHlCdXR0b246ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgcHJpb3JpdHkgYnV0dG9uIHdhcyBwcmVzc2VkXCIsIHRoaXMuc3RhdGUpO1xuICAgICAgfSxcbiAgICAgIHZpZXdCdXR0b246ICgpID0+IHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5ldyB2aWV3VG9kb0NvbXBvbmVudChcInRhc2tWaWV3XCIsIHtcbiAgICAgICAgICB0b2RvOiB0aGlzLnN0YXRlLnRvZG8sXG4gICAgICAgIH0pO1xuICAgICAgICBtb2RhbC5zaG93KGNvbXBvbmVudCk7XG4gICAgICB9LFxuICAgICAgZWRpdEJ1dHRvbjogKCkgPT4ge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IE5ld1RvZG9Db21wb25lbnQoXCJ0YXNrRWRpdFwiLCB7XG4gICAgICAgICAgdG9kbzogdGhpcy5zdGF0ZS50b2RvLFxuICAgICAgICB9KTtcbiAgICAgICAgbW9kYWwuc2hvdyhjb21wb25lbnQpO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZUJ1dHRvbjogKCkgPT4ge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IERlbGV0ZUNvbXBvbmVudChcImRlbGV0ZVwiLCB7XG4gICAgICAgICAgdG9kbzogdGhpcy5zdGF0ZS50b2RvLFxuICAgICAgICB9KTtcbiAgICAgICAgbW9kYWwuc2hvdyhjb21wb25lbnQpO1xuICAgICAgfSxcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrQ29tcG9uZW50O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgTmVyb3MgZnJvbSBcIi4uL05lcm9zXCI7XG5pbXBvcnQgVGFza0NvbXBvbmVudCBmcm9tIFwiLi9UYXNrQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBOZXdUb2RvQ29tcG9uZW50IH0gZnJvbSBcIi4vTmV3VG9kb0NvbXBvbmVudFwiO1xuaW1wb3J0IG1vZGFsIGZyb20gXCIuLi9tb2RhbFwiO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNsYXNzIFRvZG9Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbW92ZVRvQ29tcGxldGVkKGVsZW1lbnQpIHtcbiAgICBsZXQgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wbGV0ZWRUb2Rvc1wiKTtcbiAgICBjb21wbGV0ZWQuYXBwZW5kKGVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgbW92ZVRvUGVuZGluZyhlbGVtZW50KSB7XG4gICAgbGV0IHBlbmRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BlbmRpbmdUb2Rvc1wiKTtcbiAgICBwZW5kaW5nLmFwcGVuZChlbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IobmFtZSwgc3RhdGUpIHtcbiAgICBzdXBlcihuYW1lLCBzdGF0ZSk7XG4gICAgdGhpcy5jcmVhdGVUYXNrQ29tcG9uZW50cygpO1xuICB9XG5cbiAgdGVtcGxhdGUgPSAoc3RhdGUpID0+XG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrQ29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic3VidGFza3NDb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYWRkU3VidGFzayc+KyBBZGQgU3VidGFzazwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgLy8gVGhpcyBtZXRob2QgdGFrZXMgdGhlIHN0YXRlIHRhc2tzIGFuZCBzdWJ0YXNrcyBhbmQgY29udmVydHMgdGhlbSBpbnRvIFRhc2tDb21wb25lbnRzLFxuICAvLyB0aGVuIGFzc2lnbiB0aG9zZSBjb21wb25lbnRzIHRvIGJlIHRoZSBuZXcgdmFsdWVzIGZvciBzdGF0ZSB0YXNrcyBhbmQgc3VidGFza3MuXG4gIGNyZWF0ZVRhc2tDb21wb25lbnRzKCkge1xuICAgIC8vIEkgZG9uJ3Qga25vdyBpZiB0aGlzIHNob3VsZCBnbyBoZXJlLCBidXQgYWxsIHRoaXMgZG9lcyBpcyBjb252ZXJ0IHRoZSB0b2RvIG9iamVjdFxuICAgIC8vIGluIHRoZSBzdGF0ZSBvYmplY3QgYW5kIHR1cm4gaXQgaW50byBhIHRhc2tDb21wb25lbnQsIHJlYWR5IHRvIGJlIHVzZWQuXG4gICAgdGhpcy5zdGF0ZS50YXNrRE9NID0gbmV3IFRhc2tDb21wb25lbnQoXCJ0YXNrXCIsIHtcbiAgICAgIHRvZG86IHRoaXMuc3RhdGUudGFzayxcbiAgICAgIGNsYXNzZXM6IFtcInRhc2tcIl0sXG4gICAgfSkuRE9NZWxlbWVudCgpO1xuICAgIC8vIFRoaXMgdGFrZXMgdGhlIGNoaWxkcmVuIGFycmF5IGFuZCBhcHBsaWVzIHRoZSBzYW1lIHByb2Nlc3MgYWJvdmUgdG8gZWFjaCB0YXNrXG4gICAgdGhpcy5zdGF0ZS5zdWJ0YXNrc0RPTSA9IHRoaXMuc3RhdGUuc3VidGFza3MubWFwKCh0YXNrKSA9PlxuICAgICAgbmV3IFRhc2tDb21wb25lbnQoXCJzdWJ0YXNrXCIsIHtcbiAgICAgICAgdG9kbzogdGFzayxcbiAgICAgICAgY2xhc3NlczogW1widGFza1wiLCBcInN1YnRhc2tcIl0sXG4gICAgICB9KS5ET01lbGVtZW50KClcbiAgICApO1xuICB9XG5cbiAgLy8gVGhpcyBtZXRob2QgdGFrZXMgdGhlIGJ1dHRvbiBlbGVtZW50IGFuZCBhZGRzIHRoZSBldmVudCBsaXN0ZW5lciB0byBjcmVhdGUgYSBzdWJ0YXNrXG4gIGFkZFN1YnRhc2soYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLnNob3dNb2RhbCh0aGlzLnN0YXRlLnRhc2spO1xuICAgIH0pO1xuICB9XG5cbiAgRE9NZWxlbWVudCgpIHtcbiAgICBsZXQgZWxlbWVudCA9IHN1cGVyLkRPTWVsZW1lbnQoKTtcbiAgICBsZXQgc3VidGFzayA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJ0YXNrc0NvbnRhaW5lclwiKTtcbiAgICBsZXQgYnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFN1YnRhc2tcIik7XG4gICAgdGhpcy5hZGRTdWJ0YXNrKGJ1dHRvbik7XG5cbiAgICBlbGVtZW50LnByZXBlbmQodGhpcy5zdGF0ZS50YXNrRE9NKTtcbiAgICB0aGlzLnN0YXRlLnN1YnRhc2tzRE9NLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHN1YnRhc2suaW5zZXJ0QmVmb3JlKHRhc2ssIGJ1dHRvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzaG93TW9kYWwocGFyZW50KSB7XG4gICAgbGV0IG5ld1RvZG8gPSBuZXcgTmV3VG9kb0NvbXBvbmVudChcIm5ld1RvZG9cIiwgeyBwYXJlbnQ6IHBhcmVudCB9KTtcbiAgICBtb2RhbC5zaG93KG5ld1RvZG8pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9Db21wb25lbnQ7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9Db21wb25lbnRcIjtcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi4vbW9kYWxcIjtcbmltcG9ydCBUYXNrQ29tcG9uZW50IGZyb20gXCIuL1Rhc2tDb21wb25lbnRcIjtcblxuZXhwb3J0IGNsYXNzIHZpZXdUb2RvQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgdGVtcGxhdGUgPSAoc3RhdGUpID0+XG4gICAgYFxuICAgIDxkaXYgY2xhc3M9J2luZm9Db250YWluZXInPlxuICAgICAgPGRpdiBjbGFzcz0nbWFpblRhc2tDb250YWluZXInPlxuICAgICAgICA8aDEgY2xhc3M9J3ZpZXdUaXRsZSc+JHtzdGF0ZS50b2RvLnRpdGxlfTwvaDE+XG4gICAgICAgIDxocj5cbiAgICAgICAgPGRpdiBjbGFzcz0nZGVzY3JpcHRpb25WaWV3Q29udGFpbmVyJz5cbiAgICAgICAgICA8cCBjbGFzcz0ndmlld0Rlc2NyaXB0aW9uJz4ke3N0YXRlLnRvZG8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0ndG9kb0RhdGFDb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J2RhdGVWaWV3Q29udGFpbmVyJz5cbiAgICAgICAgICAgIDxoMz5EdWUgZGF0ZTwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdkYXRlU3RyaW5nQ29udGFpbmVyJz5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9J2RhdGVWaWV3Jz4wMS8wMS8yMDIzPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzcz0ndGltZUxlZnRWaWV3Jz4oNCBkYXlzIGxlZnQpPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz0ncHJpb3JpdHlWaWV3Q29udGFpbmVyJz5cbiAgICAgICAgICAgIDxoMz5Qcmlvcml0eTwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSdzZXBhcmF0b3InPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0ndmlld1N1YkNvbnRhaW5lcic+XG4gICAgICAgIDxoMSBjbGFzcz0nbGlua2VkVGFza0hlYWRlcic+JHtcbiAgICAgICAgICBzdGF0ZS50b2RvLmlzU3VidGFzaygpID8gXCJQYXJlbnRcIiA6IFwiU3VidGFza3NcIlxuICAgICAgICB9PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzcz0nbGlua2VkVGFza3NDb250YWluZXInPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIERPTWVsZW1lbnQoKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBzdXBlci5ET01lbGVtZW50KCk7XG4gICAgbGV0IHN1YnRhc2tDb250YWluZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlua2VkVGFza3NDb250YWluZXJcIik7XG4gICAgaWYgKCF0aGlzLnN0YXRlLnRvZG8uaXNTdWJ0YXNrKCkpIHtcbiAgICAgIHRoaXMuc3RhdGUudG9kby5jaGlsZHJlbi5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGxldCB0YXNrRE9NID0gbmV3IFRhc2tDb21wb25lbnQoXCJzdWJ0YXNrXCIsIHtcbiAgICAgICAgICB0b2RvOiB0YXNrLFxuICAgICAgICAgIGNsYXNzZXM6IFtcInRhc2tcIiwgXCJzdWJ0YXNrXCJdLFxuICAgICAgICB9KS5ET01lbGVtZW50KCk7XG4gICAgICAgIHRhc2tET00uZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBjaGVjayBtaW5pY29udGFpbmVyIHNvIHVzZXJzIHdvbnQgYmUgYWJsZSB0byBjaGVjayB0aGUgdG9kbyBmcm9tIHRoZSBtb2RhbFxuICAgICAgICBzdWJ0YXNrQ29udGFpbmVyLmFwcGVuZCh0YXNrRE9NKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcGFyZW50RE9NID0gbmV3IFRhc2tDb21wb25lbnQoXCJ0b2RvXCIsIHtcbiAgICAgICAgdG9kbzogdGhpcy5zdGF0ZS50b2RvLnBhcmVudCxcbiAgICAgICAgY2xhc3NlczogW1widGFzayBzdWJ0YXNrXCJdLFxuICAgICAgfSkuRE9NZWxlbWVudCgpO1xuICAgICAgcGFyZW50RE9NLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAvLyBSZW1vdmUgdGhlIGNoZWNrIG1pbmljb250YWluZXIgc28gdXNlcnMgd29udCBiZSBhYmxlIHRvIGNoZWNrIHRoZSB0b2RvIGZyb20gdGhlIG1vZGFsXG4gICAgICBzdWJ0YXNrQ29udGFpbmVyLmFwcGVuZChwYXJlbnRET00pO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIGxpbmtlZFRhc2tzKCkge31cbn1cbiIsImltcG9ydCB7IGVsIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFByb2plY3RDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Qcm9qZWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgTmVyb3MgZnJvbSBcIi4vTmVyb3NcIjtcblxuY29uc3QgaGVscGVyID0gKCgpID0+IHtcbiAgLy8gVGhpcyBtZXRob2QgZmluZHMgdGhlIGVsZW1lbnQgbWF0Y2hpbmcgdGhlIElEIG9uIHRoZSBnaXZlbiBhcnJheSBhbmQgZGVsZXRlcyBpdCBieSBpbmRleFxuICBjb25zdCBkZWxldGVJdGVtID0gKGFycmF5LCBpZCkgPT4ge1xuICAgIGxldCBmb3VuZCA9IGZpbmRUYXNrKFsuLi5hcnJheV0sIGlkKTtcbiAgICBsZXQgZm91bmRJbmRleCA9IGFycmF5LmluZGV4T2YoZm91bmQpO1xuICAgIGZvdW5kSW5kZXggPT09IDAgPyBhcnJheS5zaGlmdCgpIDogYXJyYXkuc3BsaWNlKGZvdW5kSW5kZXgsIDEpO1xuICAgIHJldHVybiBmb3VuZDtcbiAgfTtcblxuICAvLyBHaXZlbiBhbiBhcnJheSBvZiB0b2RvcyBhbmQgYW4gaWQsIHRoaXMgbWV0aG9kIHdpbGwgcmVjdXJzaXZlbHkgZmluZCB0aGUgdG9kb1xuICBjb25zdCBmaW5kVGFzayA9IChxdWV1ZSwgaWQpID0+IHtcbiAgICBsZXQgY3VycmVudCA9IHF1ZXVlWzBdO1xuICAgIGlmIChjdXJyZW50LmlkID09PSBpZCkgcmV0dXJuIGN1cnJlbnQ7XG4gICAgcXVldWUuc2hpZnQoKTtcblxuICAgIGlmICghY3VycmVudC5pc1N1YnRhc2soKSkgcXVldWUgPSBbLi4ucXVldWUsIC4uLmN1cnJlbnQuY2hpbGRyZW5dO1xuICAgIHJldHVybiBmaW5kVGFzayhxdWV1ZSwgaWQpO1xuICB9O1xuXG4gIC8vIE1lcmdlIHNvcnQgYWxnb3JpdGhtXG5cbiAgY29uc3QgbWVyZ2VTb3J0ID0gKGFycmF5KSA9PiB7XG4gICAgaWYgKGFycmF5Lmxlbmd0aCA8IDEpIHJldHVybiBhcnJheTtcbiAgICBsZXQgc29ydGVkQXJyYXkgPSBbXTtcbiAgICBpZiAoYXJyYXkubGVuZ3RoIDwgMikge1xuICAgICAgc29ydGVkQXJyYXkucHVzaChhcnJheVswXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBoYWxmID0gTWF0aC5mbG9vcihhcnJheS5sZW5ndGggLyAyKTtcbiAgICAgIGxldCBhcnJheTEgPSBtZXJnZVNvcnQoYXJyYXkuc3BsaWNlKDAsIGhhbGYpKTtcbiAgICAgIGxldCBhcnJheTIgPSBtZXJnZVNvcnQoYXJyYXkpO1xuICAgICAgbGV0IGNvdW50ZXIgPSBhcnJheTEubGVuZ3RoICsgYXJyYXkyLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudGVyOyBpbmRleCsrKSB7XG4gICAgICAgIGlmIChhcnJheTEubGVuZ3RoID09PSAwIHx8IGFycmF5Mi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBzb3J0ZWRBcnJheSA9IHNvcnRlZEFycmF5LmNvbmNhdChhcnJheTEuY29uY2F0KGFycmF5MikpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcnJheTFbMF0ucHJpb3JpdHkgPCBhcnJheTJbMF0ucHJpb3JpdHkpIHtcbiAgICAgICAgICBzb3J0ZWRBcnJheS5wdXNoKGFycmF5MS5zaGlmdCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzb3J0ZWRBcnJheS5wdXNoKGFycmF5Mi5zaGlmdCgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc29ydGVkQXJyYXk7XG4gIH07XG5cbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvICdjbGVhciBjb21wbGV0ZWQnIGJ1dHRvbiwgdGhpcyBzaG91bGRuJ3QgYmUgaGVyZSBidXRcbiAgLy8gSSBkb24ndCB0aGluayBpdCdzIHdvcnRoIGNyZWF0aW5nIGEgbmV3IG1vZHVsZSBqdXN0IGZvciB0aGlzLlxuICBsZXQgY2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NsZWFyQ29tcGxldGVkXCIpO1xuICBjbGVhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0ID0gUHJvamVjdC5zZWxlY3RlZDtcbiAgICBsZXQgcHJvamVjdENvbXBvbmVudCA9IHByb2plY3QuY29tcG9uZW50O1xuXG4gICAgUHJvamVjdENvbXBvbmVudC5yZXNldFZpZXcoKTtcbiAgICBwcm9qZWN0LmNsZWFyQ29tcGxldGVkVG9kb3MoKTtcbiAgICBwcm9qZWN0Q29tcG9uZW50LmRpc3BsYXlUb2RvcyhcImNvbXBsZXRlZFwiLCBwcm9qZWN0LmNvbXBsZXRlZCk7XG4gICAgcHJvamVjdENvbXBvbmVudC5kaXNwbGF5VG9kb3MoXCJwZW5kaW5nXCIsIHByb2plY3QucGVuZGluZyk7XG4gIH0pO1xuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byAnRGVsZXRlIHRoaXMgcHJvamVjdCcgYnV0dG9uXG4gIGxldCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWxldGVQcm9qZWN0XCIpO1xuICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgTmVyb3MuZGVsZXRlTmVyb3NDb21wb25lbnQoTmVyb3MucHJvamVjdHMsIFByb2plY3Quc2VsZWN0ZWQuY29tcG9uZW50KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHsgZGVsZXRlSXRlbSwgZmluZFRhc2ssIG1lcmdlU29ydCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaGVscGVyO1xuIiwiY29uc3QgaWRBc3NpZ25lciA9ICgoKSA9PiB7XG4gIGxldCBhc3NpZ25lciA9IDE7XG5cbiAgY29uc3QgZ2V0SWROdW1iZXIgPSAoKSA9PiB7XG4gICAgYXNzaWduZXIgKz0gMTtcbiAgICByZXR1cm4gYXNzaWduZXIgLSAxO1xuICB9O1xuXG4gIHJldHVybiB7IGdldElkTnVtYmVyIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBpZEFzc2lnbmVyO1xuIiwiaW1wb3J0IE5lcm9zIGZyb20gXCIuL05lcm9zXCI7XG5pbXBvcnQgeyBOZXdUb2RvQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9OZXdUb2RvQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBOZXdQcm9qZWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9OZXdQcm9qZWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IG1vZGFsID0gKCgpID0+IHtcbiAgbGV0IG1vZGFsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWxcIik7XG4gIGxldCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWxDb250YWluZXJcIik7XG4gIGxldCBhZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRCaWdUb2RvXCIpO1xuICBsZXQgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdFwiKTtcblxuICBjb25zdCBoaWRlID0gKCkgPT4ge1xuICAgIG1vZGFsRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIHJlc2V0TW9kYWwoKTtcbiAgfTtcblxuICBjb25zdCBzaG93ID0gKGNvbXBvbmVudCkgPT4ge1xuICAgIGxldCBtb2RhbCA9IG5ldyBOZXJvcyhcIm1vZGFsQ29udGFpbmVyXCIpO1xuICAgIG1vZGFsLnJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgbW9kYWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRNb2RhbCA9ICgpID0+IHtcbiAgICBtb2RhbENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICB9O1xuXG4gIC8vIEhpZGUgbW9kYWwgd2hlbiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZVxuICBtb2RhbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gbW9kYWxFbGVtZW50KSB7XG4gICAgICBoaWRlKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBTaG93IG1vZGFsIHdpdGggbmV3IHRvZG8gZm9ybSB3aGVuIHRoZSAnYWRkIG5ldyB0b2RvJyBidXR0b24gaXMgY2xpY2tlZFxuICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IG5ld1RvZG8gPSBuZXcgTmV3VG9kb0NvbXBvbmVudChcIm5ld1RvZG9cIiwgeyBwYXJlbnQ6IG51bGwgfSk7XG4gICAgaWYgKFByb2plY3Quc2VsZWN0ZWQgIT09IG51bGwpIHtcbiAgICAgIHNob3cobmV3VG9kbyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gJ0FkZCBuZXcgcHJvamVjdCcgYnV0dG9uXG5cbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IE5ld1Byb2plY3RDb21wb25lbnQoXCJuZXdQcm9qZWN0XCIpO1xuXG4gICAgc2hvdyhuZXdQcm9qZWN0KTtcbiAgfSk7XG5cbiAgLy8gQWRkIHZpZXcgZXZlbnQgbGlzdGVuZXIgdG8gdGFza3NcblxuICByZXR1cm4ge1xuICAgIGhpZGUsXG4gICAgc2hvdyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGFsO1xuIiwiY2xhc3MgUHJpb3JpdHkge1xuICAjbmFtZTtcbiAgI251bWJlcjtcbiAgY29sb3I7XG5cbiAgc3RhdGljICNwcmlvcml0aWVzQXJyYXkgPSBbXG4gICAgbmV3IFByaW9yaXR5KFwiVXJnZW50XCIsIDEsIFwiI0U4MTYxNlwiKSxcbiAgICBuZXcgUHJpb3JpdHkoXCJIaWdoXCIsIDIsIFwiI0VGNTUxM1wiKSxcbiAgICBuZXcgUHJpb3JpdHkoXCJNZWRpdW1cIiwgMywgXCIjRjNERDExXCIpLFxuICAgIG5ldyBQcmlvcml0eShcIkxvd1wiLCA0LCBcIiMyMkM1MUZcIiksXG4gICAgbmV3IFByaW9yaXR5KFwiT3B0aW9uYWxcIiwgNSwgXCIjMjMzNkUwXCIpLFxuICBdO1xuXG4gIHN0YXRpYyBnZXQgcHJpb3JpdGllcygpIHtcbiAgICByZXR1cm4gWy4uLlByaW9yaXR5LiNwcmlvcml0aWVzQXJyYXldO1xuICB9XG5cbiAgc3RhdGljIHByaW9yaXR5KG51bWJlcikge1xuICAgIHJldHVybiBQcmlvcml0eS4jcHJpb3JpdGllc0FycmF5W251bWJlciAtIDFdO1xuICB9XG5cbiAgY29uc3RydWN0b3IobmFtZSwgbnVtYmVyLCBjb2xvcikge1xuICAgIHRoaXMuI25hbWUgPSBuYW1lO1xuICAgIHRoaXMuI251bWJlciA9IG51bWJlcjtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jbmFtZTtcbiAgfVxuXG4gIGdldCBudW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI251bWJlcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmlvcml0eTtcbiIsIi8qIDEuLSBJZiBhIHRvZG8ncyBpcyBhIHBhcmVudCwgdGhleSBnZXQgYWRkZWQgdG8gdGhlIHBlbmRpbmcgdGFza3Mgd2hlbiBjcmVhdGVkXG4gICAyLi0gU29ydCB0aGUgcGVuZGluZyB0YXNrcyBhcnJheSBieSBwcmlvcml0eSwgYW5kIHNvcnQgdGhlIGNoaWxkcmVuIGFycmF5IGJ5IHByaW9yaXR5IGFzIHdlbGwgKi9cblxuaW1wb3J0IGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcbmltcG9ydCBQcm9qZWN0Q29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvUHJvamVjdENvbXBvbmVudFwiO1xuY2xhc3MgUHJvamVjdCB7XG4gICNwZW5kaW5nVGFza3M7XG4gICNjb21wbGV0ZWRUYXNrcztcblxuICBzdGF0aWMgc2VsZWN0ZWQ7XG5cbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jb21wb25lbnQgPSBuZXcgUHJvamVjdENvbXBvbmVudChuYW1lLCB7IHByb2plY3Q6IHRoaXMgfSk7XG4gICAgdGhpcy4jcGVuZGluZ1Rhc2tzID0gW107XG4gICAgdGhpcy4jY29tcGxldGVkVGFza3MgPSBbXTtcbiAgfVxuXG4gIGdldCBwZW5kaW5nKCkge1xuICAgIHJldHVybiBbLi4udGhpcy4jcGVuZGluZ1Rhc2tzXTtcbiAgfVxuXG4gIGdldCBjb21wbGV0ZWQoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLiNjb21wbGV0ZWRUYXNrc107XG4gIH1cblxuICBhZGRQZW5kaW5nKGl0ZW0pIHtcbiAgICB0aGlzLiNwZW5kaW5nVGFza3MucHVzaChpdGVtKTtcbiAgfVxuXG4gIGFkZENvbXBsZXRlZChpdGVtKSB7XG4gICAgdGhpcy4jY29tcGxldGVkVGFza3MucHVzaChpdGVtKTtcbiAgfVxuXG4gIGNvbXBsZXRlVG9kbyhpZCkge1xuICAgIGxldCB0YXNrID0gaGVscGVyLmRlbGV0ZUl0ZW0odGhpcy4jcGVuZGluZ1Rhc2tzLCBpZCk7XG4gICAgdGhpcy5hZGRDb21wbGV0ZWQodGFzayk7XG4gIH1cblxuICByZXN1bWVUb2RvKGlkKSB7XG4gICAgbGV0IHRhc2sgPSBoZWxwZXIuZGVsZXRlSXRlbSh0aGlzLiNjb21wbGV0ZWRUYXNrcywgaWQpO1xuICAgIHRoaXMuYWRkUGVuZGluZyh0YXNrKTtcbiAgfVxuXG4gIGNsZWFyQ29tcGxldGVkVG9kb3MoKSB7XG4gICAgdGhpcy4jY29tcGxldGVkVGFza3MgPSBbXTtcbiAgfVxuXG4gIGRlbGV0ZVRvZG8odGFzaykge1xuICAgIGlmICh0aGlzLiNwZW5kaW5nVGFza3MuaW5jbHVkZXModGFzaykpIHtcbiAgICAgIGxldCB0YXNrSW5kZXggPSB0aGlzLiNwZW5kaW5nVGFza3MuaW5kZXhPZih0YXNrKTtcbiAgICAgIHRhc2tJbmRleCA9PT0gMFxuICAgICAgICA/IHRoaXMuI3BlbmRpbmdUYXNrcy5zaGlmdCgpXG4gICAgICAgIDogdGhpcy4jcGVuZGluZ1Rhc2tzLnNwbGljZSh0YXNrSW5kZXgsIHRhc2tJbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0YXNrSW5kZXggPSB0aGlzLiNjb21wbGV0ZWRUYXNrcy5pbmRleE9mKHRhc2spO1xuICAgICAgdGFza0luZGV4ID09PSAwXG4gICAgICAgID8gdGhpcy4jY29tcGxldGVkVGFza3Muc2hpZnQoKVxuICAgICAgICA6IHRoaXMuI2NvbXBsZXRlZFRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIHRhc2tJbmRleCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJpbXBvcnQgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IGlkQXNzaWduZXIgZnJvbSBcIi4vaWRBc3NpZ25lclwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRvZG9Db21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Ub2RvQ29tcG9uZW50XCI7XG5pbXBvcnQgY2hlY2tlZCBmcm9tIFwiLi4vYXNzZXRzL2NoZWNrZWQuc3ZnXCI7XG5pbXBvcnQgdW5jaGVja2VkIGZyb20gXCIuLi9hc3NldHMvdW5jaGVja2VkLnN2Z1wiO1xuXG4vKiAxLi0gQmUgYWJsZSB0byBjcmVhdGUgYW5kIGRlbGV0ZSB0b2RvJ3Mg4pyU77iPXG4gICAyLi0gSWYgYSB0b2RvJ3MgaXMgYSBwYXJlbnQsIHRoZXkgZ2V0IGFkZGVkIHRvIHRoZSBwZW5kaW5nIHRhc2tzIHdoZW4gY3JlYXRlZCDinJTvuI9cbiAgIDMuLSBJZiBhIHBhcmVudCB0b2RvIGlzIGRlbGV0ZWQsIGFsbCBpdCdzIGNoaWxkcmVuIGFyZSBkZWxldGVkIGFzIHdlbGwg4pyU77iPXG4gICA0Li0gT25seSBwYXJlbnQncyB0b2RvIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGNvbXBsZXRlZCB0YXNrcyBhcnJheSwgaWYgYSBwYXJlbnQgdG9kbyBpcyBjaGVja2VkLCBhbGwgaXQncyBjaGlsZHJlbiB3aWxsIGJlIOKclO+4j1xuICAgNS4tIFNvcnQgdGhlIHBlbmRpbmcgdGFza3MgYXJyYXkgYnkgcHJpb3JpdHksIGFuZCBzb3J0IHRoZSBjaGlsZHJlbiBhcnJheSBieSBwcmlvcml0eSBhcyB3ZWxsICovXG5cbmNsYXNzIFRvZG8ge1xuICAjcGFyZW50O1xuICAjY2hpbGRyZW47XG4gICNpZDtcbiAgI2lzQ2hlY2tlZDtcbiAgI3Byb2plY3Q7XG5cbiAgY29uc3RydWN0b3IodGl0bGUsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgaXNDaGVja2VkLCBwYXJlbnQgPSBudWxsKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLiNpc0NoZWNrZWQgPSBpc0NoZWNrZWQ7XG4gICAgdGhpcy4jaWQgPSBpZEFzc2lnbmVyLmdldElkTnVtYmVyKCk7XG4gICAgdGhpcy4jcGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuI3Byb2plY3QgPSBQcm9qZWN0LnNlbGVjdGVkO1xuICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBudWxsO1xuICAgIGlmICh0aGlzLiNwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuI2NoaWxkcmVuID0gW107XG4gICAgICAvLyBJZiB0aGUgdG9kbyBpcyBhbHJlYWR5IGNoZWNrZWQgYWRkIGl0IHRvIHRoZSBjb21wbGV0ZWQgdGFza3MgYXJyYXlcbiAgICAgIC8vIG9mIHRoZSBwYXJlbnQgcHJvamVjdFxuICAgICAgdGhpcy5jaGVja1xuICAgICAgICA/IFByb2plY3Quc2VsZWN0ZWQuYWRkQ29tcGxldGVkKHRoaXMpXG4gICAgICAgIDogUHJvamVjdC5zZWxlY3RlZC5hZGRQZW5kaW5nKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiNjaGlsZHJlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZVRvZG8odGl0bGUsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgaXNDaGVja2VkKSB7XG4gICAgbGV0IGEgPSBuZXcgVG9kbyh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBpc0NoZWNrZWQsIHRoaXMpO1xuICAgIHRoaXMuI2NoaWxkcmVuLnB1c2goYSk7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBlZGl0KHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLiNpZDtcbiAgfVxuXG4gIGdldCBjaGlsZHJlbigpIHtcbiAgICBpZiAodGhpcy4jY2hpbGRyZW4pIHJldHVybiBbLi4udGhpcy4jY2hpbGRyZW5dO1xuICAgIHJldHVybiB0aGlzLiNjaGlsZHJlbjtcbiAgfVxuXG4gIGdldCBwYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3BhcmVudDtcbiAgfVxuXG4gIHRvZ2dsZUNoZWNrKCkge1xuICAgIGlmICh0aGlzLiNpc0NoZWNrZWQpIHtcbiAgICAgIHRoaXMudW5jaGVja1RvZG8oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGVja1RvZG8oKTtcbiAgICB9XG4gIH1cblxuICB1bmNoZWNrVG9kbygpIHtcbiAgICBsZXQgZWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDtcbiAgICBsZXQgaW1nID1cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoZWNrQnV0dG9uTWluaVwiKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB0aGlzLiNpc0NoZWNrZWQgPSBmYWxzZTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZWRUYXNrXCIpO1xuICAgIGltZy5zcmMgPSB1bmNoZWNrZWQ7XG4gICAgaWYgKHRoaXMuI3BhcmVudCA9PT0gbnVsbCkge1xuICAgICAgVG9kb0NvbXBvbmVudC5tb3ZlVG9QZW5kaW5nKGVsZW1lbnQpO1xuICAgICAgdGhpcy5wcm9qZWN0LnJlc3VtZVRvZG8odGhpcy5pZCk7XG4gICAgICB0aGlzLnByb2plY3QuY29tcG9uZW50LnJlZnJlc2hUb2RvcygpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrVG9kbygpIHtcbiAgICBsZXQgZWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDtcbiAgICBsZXQgaW1nID1cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoZWNrQnV0dG9uTWluaVwiKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB0aGlzLiNpc0NoZWNrZWQgPSB0cnVlO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFRhc2tcIik7XG4gICAgaW1nLnNyYyA9IGNoZWNrZWQ7XG4gICAgaWYgKHRoaXMuI3BhcmVudCA9PT0gbnVsbCkge1xuICAgICAgVG9kb0NvbXBvbmVudC5tb3ZlVG9Db21wbGV0ZWQoZWxlbWVudCk7XG4gICAgICB0aGlzLnByb2plY3QuY29tcGxldGVUb2RvKHRoaXMuaWQpO1xuICAgICAgdGhpcy5wcm9qZWN0LmNvbXBvbmVudC5yZWZyZXNoVG9kb3MoKTtcbiAgICB9XG4gIH1cblxuICBkZWxldGVUb2RvKHRhc2spIHtcbiAgICBpZiAodGhpcy5pc1N1YnRhc2soKSkge1xuICAgICAgdGhpcy5wYXJlbnQuZGVsZXRlKHRhc2spO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb2plY3QuZGVsZXRlVG9kbyh0YXNrKTtcbiAgICB9XG4gIH1cblxuICBkZWxldGUodGFzaykge1xuICAgIGxldCB0YXNrSW5kZXggPSB0aGlzLiNjaGlsZHJlbi5pbmRleE9mKHRhc2spO1xuICAgIHRhc2tJbmRleCA9PT0gMFxuICAgICAgPyB0aGlzLiNjaGlsZHJlbi5zaGlmdCgpXG4gICAgICA6IHRoaXMuI2NoaWxkcmVuLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICB9XG5cbiAgZ2V0IHByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3Byb2plY3Q7XG4gIH1cblxuICBnZXQgY2hlY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lzQ2hlY2tlZDtcbiAgfVxuXG4gIGlzU3VidGFzaygpIHtcbiAgICByZXR1cm4gdGhpcy4jcGFyZW50ICE9PSBudWxsO1xuICB9XG5cbiAgI3JlY3Vyc2l2ZUNoZWNrKGFycmF5LCBpbmRleCA9IDApIHtcbiAgICBpZiAoYXJyYXlbaW5kZXhdICYmIGFycmF5W2luZGV4XS5jaGVjayA9PT0gZmFsc2UpIHtcbiAgICAgIGFycmF5W2luZGV4XS50b2dnbGVDaGVjaygpO1xuICAgICAgcmV0dXJuIHRoaXMuI3JlY3Vyc2l2ZUNoZWNrKGFycmF5LCBpbmRleCArIDEpO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvL0ltcG9ydCBzdGF0ZW1lbnRzXG5pbXBvcnQgXCIuL3N0eWxlL21haW4uc2Nzc1wiO1xuaW1wb3J0IE5lcm9zIGZyb20gXCIuL21vZHVsZXMvTmVyb3NcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL21vZHVsZXMvdG9kb1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0XCI7XG5pbXBvcnQgeyBQcmlvcml0eUNvbXBvbmVudCB9IGZyb20gXCIuL21vZHVsZXMvY29tcG9uZW50cy9Qcmlvcml0eUNvbXBvbmVudFwiO1xuXG4vL0luaXRpYWxpemUgbW9kdWxlc1xuY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiQmlnIHByb2plY3RcIik7XG5Qcm9qZWN0LnNlbGVjdGVkID0gcHJvamVjdDtcbmNvbnN0IHByb2plY3RNb2R1bGUgPSBOZXJvcy5wcm9qZWN0cztcblxubGV0IHRvZG8xID0gbmV3IFRvZG8oXG4gIFwiRmlyc3QgT09QIHRvZG9cIixcbiAgXCIyNC0wNS0yMDIzXCIsXG4gIDQsXG4gIFwiVGhpcyBpcyBhIHRvZG8gbWFkZSB3aXRoIE9PUCBwcmluY2lwbGVzXCIsXG4gIGZhbHNlXG4pO1xuXG50b2RvMS5jcmVhdGVUb2RvKFxuICBcImZpcnN0IG9mIEZpcnN0IE9PUCB0b2RvXCIsXG4gIFwiMjQtMDUtMjAyM1wiLFxuICAyLFxuICBcIlRoaXMgaXMgYSB0b2RvIG1hZGUgd2l0aCBPT1AgcHJpbmNpcGxlcyAxXCIsXG4gIGZhbHNlXG4pO1xuXG50b2RvMS5jcmVhdGVUb2RvKFxuICBcInNlY29uZCBvZiBGaXJzdCBPT1AgdG9kb1wiLFxuICBcIjI0LTA1LTIwMjNcIixcbiAgNSxcbiAgXCJUaGlzIGlzIGEgdG9kbyBtYWRlIHdpdGggT09QIHByaW5jaXBsZXMgMlwiLFxuICBmYWxzZVxuKTtcblxuY29uc3QgcHJvamVjdDIgPSBuZXcgUHJvamVjdChcIlNlY29uZCBiaWcgcHJvamVjdFwiKTtcbi8vIFByb2plY3Quc2VsZWN0ZWQgPSBwcm9qZWN0MjtcblxubGV0IHRvZG8yID0gbmV3IFRvZG8oXG4gIFwic2Vjb25kIE9PUCB0b2RvXCIsXG4gIFwiMjQtMDUtMjAyM1wiLFxuICAxLFxuICBcIlRoaXMgaXMgYSB0b2RvIG1hZGUgd2l0aCBPT1AgcHJpbmNpcGxlc1wiLFxuICBmYWxzZVxuKTtcblxudG9kbzIuY3JlYXRlVG9kbyhcbiAgXCJmaXJzdCBvZiBzZWNvbmQgT09QIHRvZG9cIixcbiAgXCIyNC0wNS0yMDIzXCIsXG4gIDQsXG4gIFwiVGhpcyBpcyBhIHRvZG8gbWFkZSB3aXRoIE9PUCBwcmluY2lwbGVzIDFcIixcbiAgZmFsc2Vcbik7XG5cbnRvZG8yLmNyZWF0ZVRvZG8oXG4gIFwic2Vjb25kIG9mIHNlY29uZCBPT1AgdG9kb1wiLFxuICBcIjI0LTA1LTIwMjNcIixcbiAgMSxcbiAgXCJUaGlzIGlzIGEgdG9kbyBtYWRlIHdpdGggT09QIHByaW5jaXBsZXMgMlwiLFxuICBmYWxzZVxuKTtcblxudG9kbzIuY3JlYXRlVG9kbyhcbiAgXCJzZWNvbmQgb2Ygc2Vjb25kIE9PUCB0b2RvXCIsXG4gIFwiMjQtMDUtMjAyM1wiLFxuICAzLFxuICBcIlRoaXMgaXMgYSB0b2RvIG1hZGUgd2l0aCBPT1AgcHJpbmNpcGxlcyAyXCIsXG4gIGZhbHNlXG4pO1xuXG50b2RvMi5jcmVhdGVUb2RvKFxuICBcInNlY29uZCBvZiBzZWNvbmQgT09QIHRvZG9cIixcbiAgXCIyNC0wNS0yMDIzXCIsXG4gIDIsXG4gIFwiVGhpcyBpcyBhIHRvZG8gbWFkZSB3aXRoIE9PUCBwcmluY2lwbGVzIDJcIixcbiAgZmFsc2Vcbik7XG5cbnRvZG8yLmNyZWF0ZVRvZG8oXG4gIFwic2Vjb25kIG9mIHNlY29uZCBPT1AgdG9kb1wiLFxuICBcIjI0LTA1LTIwMjNcIixcbiAgNSxcbiAgXCJUaGlzIGlzIGEgdG9kbyBtYWRlIHdpdGggT09QIHByaW5jaXBsZXMgMlwiLFxuICBmYWxzZVxuKTtcbi8vIFByb2plY3Quc2VsZWN0ZWQgPSBudWxsO1xuXG5wcm9qZWN0TW9kdWxlLnJlZ2lzdGVyQ29tcG9uZW50KHByb2plY3QuY29tcG9uZW50KTtcbnByb2plY3RNb2R1bGUucmVnaXN0ZXJDb21wb25lbnQocHJvamVjdDIuY29tcG9uZW50KTtcblxubGV0IGZpcnN0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdENvbnRhaW5lclwiKTtcbmZpcnN0UHJvamVjdC5jbGljaygpO1xuLy8gcHJpb3JpdGllcy5yZWdpc3RlckNvbXBvbmVudChUZXN0Q29tcG9uZW50KTtcbi8vIGxldCBhID0gbmV3IFRleHRDb21wb25lbnQoXCJ0ZXh0XCIsIHtcbi8vICAgbmFtZTogXCJEb21lc3RpYyBhbmltYWxzXCIsXG4vLyAgIGNvbnRlbnRzOiBcIkNhdHMgYW5kIGRvZ3NcIixcbi8vIH0pO1xuLy8gcHJpb3JpdGllcy5yZWdpc3RlckNvbXBvbmVudChhKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==