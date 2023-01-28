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
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n  background-color: #343a40;\n  height: 90%;\n  min-width: 75%;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: grid;\n  grid-template-columns: minmax(200px, 1.2fr) 2px 3fr;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border-radius: 10px;\n  border-top: #464e55 4px solid;\n  border-left: #464e55 2px solid;\n}\n\n.separator {\n  background-color: #212529;\n}\n\n.mainContent {\n  display: grid;\n  grid-template-rows: calc(65% - 2px) 2px 35%;\n}\n\n.pending {\n  overflow: hidden;\n  border-bottom: #15181c 2px solid;\n  border-left: #464e55 2px solid;\n  display: grid;\n  max-height: 100%;\n  grid-template-rows: min-content minmax(0, 100%);\n}\n\n.completed {\n  overflow: hidden;\n  border-top: #464e55 2px solid;\n  border-left: #464e55 2px solid;\n  display: grid;\n  grid-template-rows: min-content 1fr;\n}\n\n@media (max-width: 800px) {\n  .container {\n    width: 100%;\n    height: 100%;\n    grid-template-columns: 1fr;\n    border: none;\n    border-radius: 0;\n  }\n  .separator {\n    display: none;\n  }\n  .pending {\n    border-left: none;\n  }\n}\n.sidebar {\n  border-right: #15181c 2px solid;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.priorityName {\n  padding-left: 10px;\n  font-size: clamp(8px, 1vw, 64px);\n  margin: 0;\n  font-weight: 300;\n  align-self: center;\n  justify-self: center;\n}\n\n.priorityColorContainer {\n  background-color: #495057;\n  padding: clamp(8px, 0.3rem + 0.3vw, 64px);\n  outline: 2px solid #6c757d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.priorityColor {\n  border-radius: 50%;\n  height: clamp(14px, 0.5rem + 0.7vw, 64px);\n  width: clamp(14px, 0.5rem + 0.7vw, 64px);\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\ninput[type=color]::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n\ninput[type=color]::-webkit-color-swatch {\n  border: none;\n  border-radius: 50%;\n}\n\n.picker {\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  align-self: center;\n  cursor: pointer;\n}\n\n.priority {\n  background-color: #212529;\n  border-top: 2px solid #a0b1c3;\n  display: flex;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n}\n\n#priorities {\n  width: clamp(100px, 30% + 4vw, 600px);\n  display: flex;\n  flex-direction: column;\n  gap: clamp(6px, 0.3vw, 12px);\n  margin-bottom: clamp(10px, 0.7vw, 16px);\n}\n\n.priorityColorContainer .priorityColor {\n  height: clamp(14px, 0.5rem + 0.4vw, 64px);\n  width: clamp(14px, 0.5rem + 0.4vw, 64px);\n}\n\n@media (max-width: 800px) {\n  .sidebar {\n    display: none;\n  }\n}\n.sidebarButtons {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6vw;\n}\n\n.TodosContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 50px;\n  overflow-y: scroll;\n}\n\n.taskContainer {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: clamp(4px, 0.4vw, 8px);\n}\n\n.task {\n  display: flex;\n  background-color: #212529;\n  width: 100%;\n  min-width: max-content;\n  border-radius: 14px;\n  overflow: hidden;\n  border-top: 2px solid #a0b1c3;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n  justify-content: space-between;\n  margin: clamp(2px, 0.3vw, 8px) 0;\n}\n\n.taskMiniContainer {\n  background-color: #495057;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: clamp(8px, 0.5rem + 0.5vw, 64px);\n  cursor: pointer;\n  user-select: none;\n}\n\n.priorityButtonMini {\n  cursor: auto;\n}\n\n.taskColor {\n  height: clamp(14px, 0.5rem + 0.7vw, 64px);\n  width: clamp(14px, 0.5rem + 0.7vw, 64px);\n  background-color: #e81616;\n  border-radius: 50%;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\n.taskButton {\n  height: clamp(14px, 0.5rem + 0.7vw, 64px);\n  width: clamp(14px, 0.5rem + 0.7vw, 64px);\n}\n\n.taskMiniContainer:nth-last-of-type(-n + 2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskMiniContainer:nth-child(-n+2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskTime {\n  padding-left: calc(1rem + 1vw);\n  padding-right: 10px;\n}\n.taskTime p {\n  white-space: nowrap;\n  color: #adb5bd;\n}\n\n.taskTitle {\n  margin-right: auto;\n  flex: 1;\n  padding-left: 10px;\n  width: clamp(150px, 10vw + 10rem, 500px);\n}\n.taskTitle p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.taskTitle,\n.taskTime {\n  justify-self: center;\n  align-self: center;\n}\n.taskTitle p,\n.taskTime p {\n  font-size: clamp(8px, 0.5rem + 0.7vw, 64px);\n  margin: 0;\n}\n\n.subtasksContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  align-self: flex-end;\n  width: 90%;\n}\n\n.subtask {\n  margin: clamp(2px, 0.1vw, 4px) 0;\n}\n.subtask .taskMiniContainer {\n  padding: clamp(8px, 0.4rem + 0.4vw, 48px);\n}\n.subtask .taskMiniContainer .taskButton {\n  height: clamp(10px, 0.5rem + 0.4vw, 36px);\n  width: clamp(10px, 0.5rem + 0.4vw, 36px);\n}\n.subtask .taskMiniContainer .taskColor {\n  width: clamp(10px, 0.5rem + 0.4vw, 36px);\n  height: clamp(10px, 0.5rem + 0.4vw, 36px);\n}\n.subtask .taskTitle p,\n.subtask .taskTime p {\n  font-size: clamp(6px, 0.5rem + 0.4vw, 36px);\n}\n\n.completedTask {\n  text-decoration: line-through;\n  opacity: 0.6;\n  border: none;\n  box-shadow: 0px 2px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n}\n\n.taskDataContainer {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  flex: 1 2;\n  cursor: pointer;\n}\n\n.addSubtask {\n  margin-top: 0.3vw;\n  align-self: flex-start;\n}\n\n#completedTodos > .taskContainer > .subtasksContainer button {\n  display: none;\n}\n\n.modal {\n  background-color: hsla(0deg, 0%, 0%, 0.502);\n  backdrop-filter: blur(3px);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#modalContainer {\n  background-color: #343a40;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border: 1px solid gray;\n  border-radius: 12px;\n  position: relative;\n  height: max-content;\n  max-height: 70vh;\n  width: max-content;\n  overflow-y: scroll;\n}\n\n.closeButton {\n  position: sticky;\n  top: 1vw;\n  left: 1vw;\n  height: 1.3vw;\n  width: 1.3vw;\n  z-index: 1;\n}\n\n.closeButton:hover {\n  cursor: pointer;\n}\n\nhr {\n  background-color: gray;\n  height: 1px;\n  border: none;\n}\n\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4vw;\n}\n.field label {\n  font-size: calc(1vw + 6px);\n}\n.field input,\n.field select,\n.field textarea {\n  font-size: calc(0.8vw + 4px);\n  border: none;\n  outline: none;\n  background: #212529;\n  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n  padding: calc(0.5vw + 2px);\n  border-radius: 0.5vw;\n  color: #f8f9fa;\n}\n\n.DuedateField input {\n  font-size: calc(0.8vw + 4px);\n}\n.DuedateField ::-webkit-calendar-picker-indicator {\n  padding: 5px;\n  cursor: pointer;\n  border-radius: 3px;\n  filter: invert(1);\n}\n\n.newForm {\n  min-width: 35vw;\n  padding: 0 calc(1vw + 6px) calc(1vw + 6px) calc(1vw + 6px);\n  display: grid;\n  grid-template-columns: min-content 2fr;\n  gap: calc(0.5vw + 4px);\n}\n\n.TitleField {\n  grid-column: 1/3;\n}\n\n.DescriptionField {\n  grid-column: 1/3;\n}\n.DescriptionField textarea {\n  resize: none;\n  height: 20vh;\n  max-height: 20vh;\n}\n\n.PriorityField select {\n  height: 100%;\n  appearance: none;\n  cursor: pointer;\n  background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg) no-repeat right 0.8em center/1.4em, #212529;\n  /* Remove focus outline */\n  /* Remove IE arrow */\n}\n.PriorityField select:focus {\n  outline: none;\n}\n.PriorityField select::-ms-expand {\n  display: none;\n}\n\n.newTitle {\n  padding: 0;\n  margin: 0;\n  padding: calc(1vw + 6px);\n}\n\n.createButton {\n  grid-column: 1/3;\n  width: max-content;\n  justify-self: center;\n}\n\n.titleView {\n  padding: 0;\n  margin: 0;\n  user-select: auto;\n  overflow-wrap: break-word;\n  text-align: center;\n  max-width: fit-content;\n  word-break: break-word;\n}\n\n.titleViewContainer {\n  display: flex;\n  justify-content: center;\n  margin: 0 2vw;\n}\n\n.descriptionViewContainer {\n  margin: 0 1vw;\n}\n\n.infoContainer {\n  display: grid;\n  min-width: clamp(250px, 70vh, 1000px);\n  grid-template-rows: 1fr auto max-content auto max-content;\n}\n.infoContainer .separator {\n  height: 1px;\n}\n.infoContainer hr {\n  width: 90%;\n}\n\n.dateViewContainer {\n  display: flex;\n  flex-direction: column;\n}\n\nh3 {\n  margin: 0;\n}\n\n.dateStringContainer {\n  display: flex;\n}\n.dateStringContainer p {\n  margin: 0;\n  font-size: clamp(8px, 1vw, 64px);\n  font-weight: 300;\n}\n\n.priorityViewContainer {\n  display: flex;\n  flex-direction: column;\n}\n\n.todoDataContainer {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.todoDataContainer .priority {\n  border: none;\n}\n.todoDataContainer .priority .priorityName {\n  padding-right: 10px;\n}\n\n.mainTaskContainer {\n  padding: 0 1vw 1vw 1vw;\n  border-bottom: #15181c 2px solid;\n}\n\n.viewSubContainer {\n  border-top: #464e55 2px solid;\n  padding: 1vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.viewSubContainer h1 {\n  padding: 0;\n  margin: 0;\n}\n\n.descriptionView {\n  max-width: fit-content;\n  overflow-wrap: break-word;\n}\n\n.ButtonsView {\n  border-top: #464e55 2px solid;\n  display: flex;\n  gap: 0.8vw;\n  justify-content: center;\n  width: 100%;\n  padding: 1vw 0;\n  position: sticky;\n  bottom: 0;\n  background-color: #343a40;\n}\n\n#projects {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5vw;\n  width: 100%;\n}\n\n.projectContainer {\n  background-color: hsla(200deg, 7%, 8%, 0.6);\n  width: 100%;\n  padding: 0.5vw 0 0.5vw 0.7vw;\n  cursor: pointer;\n  transition: background-color 0.2s ease-out 0s;\n}\n\n.projectContainer:hover {\n  background-color: hsl(200deg, 7%, 8%);\n}\n\n#selectedProject {\n  background-color: hsl(200deg, 7%, 8%);\n}\n\nbutton i {\n  margin-right: 0.5vw;\n}\n\nhtml {\n  font-size: 16px;\n  font-family: \"Poppins\", sans-serif;\n  color: #f8f9fa;\n}\n\nbody {\n  background: linear-gradient(119.75deg, #6e9ecf 13.02%, #12263a 100%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nh1 {\n  text-align: center;\n  font-size: 1.5vw;\n  padding: 0;\n  margin: 0.7vw 0;\n  user-select: none;\n}\n\n.projectTitle {\n  font-size: 1vw;\n  font-weight: 500;\n  padding: 0;\n  margin: 0;\n}\n\n.hidden {\n  display: none;\n}\n\nbutton {\n  background: #2887c8;\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px #6bb2e3;\n  border-radius: 8px;\n  outline: none;\n  border: none;\n  color: #f8f9fa;\n  padding: 6px 10px;\n  font-size: 1.1vw;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  cursor: pointer;\n}\n\n.deleteButton {\n  background: hsl(0deg, 82%, 63%);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px hsl(0deg, 67%, 77%);\n}\n\n.editButton {\n  background: rgb(111, 184, 55);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px rgb(188, 229, 156);\n}\n\n.taskTitle,\n.priorityName {\n  user-select: none;\n}", "",{"version":3,"sources":["webpack://./src/style/_container.scss","webpack://./src/style/main.scss","webpack://./src/style/_priorities.scss","webpack://./src/style/_task.scss","webpack://./src/style/_modal.scss","webpack://./src/style/_form.scss","webpack://./src/style/_viewTodo.scss","webpack://./src/style/_project.scss"],"names":[],"mappings":"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","sourcesContent":[".container {\n  background-color: #343a40;\n  height: 90%;\n  min-width: 75%;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: grid;\n  grid-template-columns: minmax(200px, 1.2fr) 2px 3fr;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border-radius: 10px;\n  border-top: #464e55 4px solid;\n  border-left: #464e55 2px solid;\n}\n\n.separator {\n  background-color: #212529;\n}\n\n.mainContent {\n  display: grid;\n  grid-template-rows: calc(65% - 2px) 2px 35%;\n}\n\n.pending {\n  overflow: hidden;\n  border-bottom: #15181c 2px solid;\n  border-left: #464e55 2px solid;\n  display: grid;\n  max-height: 100%;\n  grid-template-rows: min-content minmax(0, 100%);\n}\n\n.completed {\n  overflow: hidden;\n  border-top: #464e55 2px solid;\n  border-left: #464e55 2px solid;\n  display: grid;\n  grid-template-rows: min-content 1fr;\n}\n\n@media (max-width: 800px) {\n  .container {\n    width: 100%;\n    height: 100%;\n    grid-template-columns: 1fr;\n    border: none;\n    border-radius: 0;\n  }\n\n  .separator {\n    display: none;\n  }\n\n  .pending {\n    border-left: none;\n  }\n}\n\n.sidebar {\n  border-right: #15181c 2px solid;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n","@import \"./index\";\n\nhtml {\n  font-size: 16px;\n  font-family: \"Poppins\", sans-serif;\n  color: #f8f9fa;\n}\n\nbody {\n  background: linear-gradient(119.75deg, #6e9ecf 13.02%, #12263a 100%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nh1 {\n  text-align: center;\n  // font-size: calc(1rem + 1vw);\n  font-size: 1.5vw;\n  padding: 0;\n  margin: 0.7vw 0;\n  user-select: none;\n}\n\n.projectTitle {\n  font-size: 1vw;\n  font-weight: 500;\n  padding: 0;\n  margin: 0;\n}\n\n.hidden {\n  display: none;\n}\n\nbutton {\n  background: #2887c8;\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px #6bb2e3;\n  border-radius: 8px;\n  outline: none;\n  border: none;\n  color: #f8f9fa;\n  padding: 6px 10px;\n  font-size: 1.1vw;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  cursor: pointer;\n}\n\n.deleteButton {\n  background: hsl(0, 82%, 63%);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px hsl(0, 67%, 77%);\n}\n\n.editButton {\n  background: rgb(111, 184, 55);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px rgb(188, 229, 156);\n}\n\n.taskTitle,\n.priorityName {\n  user-select: none;\n}\n","$responsive-text-size: clamp(8px, 1vw, 64px);\n$responsive-button-size: clamp(14px, calc(0.5rem + 0.7vw), 64px);\n$responsive-prio-size: clamp(14px, calc(0.5rem + 0.4vw), 64px);\n\n.priorityName {\n  padding-left: 10px;\n  font-size: $responsive-text-size;\n  margin: 0;\n  font-weight: 300;\n  align-self: center;\n  justify-self: center;\n}\n\n.priorityColorContainer {\n  background-color: #495057;\n  padding: clamp(8px, calc(0.3rem + 0.3vw), 64px);\n  outline: 2px solid #6c757d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.priorityColor {\n  border-radius: 50%;\n  height: $responsive-button-size;\n  width: $responsive-button-size;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\ninput[type=\"color\"]::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n\ninput[type=\"color\"]::-webkit-color-swatch {\n  border: none;\n  border-radius: 50%;\n}\n\n.picker {\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  align-self: center;\n  cursor: pointer;\n}\n\n.priority {\n  background-color: #212529;\n  border-top: 2px solid #a0b1c3;\n  display: flex;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n}\n\n#priorities {\n  width: clamp(100px, calc(30% + 4vw), 600px);\n  display: flex;\n  flex-direction: column;\n  gap: clamp(6px, 0.3vw, 12px);\n  margin-bottom: clamp(10px, 0.7vw, 16px);\n}\n\n.priorityColorContainer {\n  .priorityColor {\n    height: $responsive-prio-size;\n    width: $responsive-prio-size;\n  }\n}\n\n@media (max-width: 800px) {\n  .sidebar {\n    display: none;\n  }\n}\n\n.sidebarButtons {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6vw;\n}\n","$big-responsive-text-size: clamp(8px, calc(0.5rem + 0.7vw), 64px);\n$big-responsive-button-size: clamp(14px, calc(0.5rem + 0.7vw), 64px);\n$small-responsive-text-size: clamp(6px, calc(0.5rem + 0.4vw), 36px);\n$small-responsive-button-size: clamp(10px, calc(0.5rem + 0.4vw), 36px);\n.TodosContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 50px;\n  overflow-y: scroll;\n}\n\n.taskContainer {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: clamp(4px, 0.4vw, 8px);\n}\n\n.task {\n  display: flex;\n  background-color: #212529;\n  width: 100%;\n  min-width: max-content;\n  border-radius: 14px;\n  overflow: hidden;\n  border-top: 2px solid #a0b1c3;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n  justify-content: space-between;\n  margin: clamp(2px, 0.3vw, 8px) 0;\n}\n\n.taskMiniContainer {\n  background-color: #495057;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: clamp(8px, calc(0.5rem + 0.5vw), 64px);\n  cursor: pointer;\n  user-select: none;\n}\n\n.priorityButtonMini {\n  cursor: auto;\n}\n\n.taskColor {\n  height: $big-responsive-button-size;\n  width: $big-responsive-button-size;\n  background-color: #e81616;\n  border-radius: 50%;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\n.taskButton {\n  height: $big-responsive-button-size;\n  width: $big-responsive-button-size;\n}\n\n.taskMiniContainer:nth-last-of-type(-n + 2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskMiniContainer:nth-child(-n + 2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskTime {\n  padding-left: calc(1rem + 1vw);\n  padding-right: 10px;\n\n  p {\n    white-space: nowrap;\n    color: #adb5bd;\n  }\n}\n\n.taskTitle {\n  margin-right: auto;\n  flex: 1;\n  padding-left: 10px;\n  width: clamp(150px, calc(10vw + 10rem), 500px);\n\n  p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n}\n\n.taskTitle,\n.taskTime {\n  justify-self: center;\n  align-self: center;\n  p {\n    font-size: $big-responsive-text-size;\n    margin: 0;\n  }\n}\n\n.subtasksContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  align-self: flex-end;\n  width: 90%;\n}\n\n.subtask {\n  margin: clamp(2px, 0.1vw, 4px) 0;\n  // justify-content: center;\n\n  .taskMiniContainer {\n    padding: clamp(8px, calc(0.4rem + 0.4vw), 48px);\n\n    .taskButton {\n      height: $small-responsive-button-size;\n      width: $small-responsive-button-size;\n    }\n\n    .taskColor {\n      width: $small-responsive-button-size;\n      height: $small-responsive-button-size;\n    }\n  }\n\n  .taskTitle,\n  .taskTime {\n    p {\n      font-size: $small-responsive-text-size;\n    }\n  }\n}\n\n.completedTask {\n  text-decoration: line-through;\n  opacity: 0.6;\n  border: none;\n  box-shadow: 0px 2px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n}\n\n.taskDataContainer {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  flex: 1 2;\n  cursor: pointer;\n}\n\n.addSubtask {\n  margin-top: 0.3vw;\n  align-self: flex-start;\n}\n\n#completedTodos > .taskContainer > .subtasksContainer {\n  button {\n    display: none;\n  }\n}\n",".modal {\n  background-color: hsla(0, 0%, 0%, 0.502);\n  backdrop-filter: blur(3px);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#modalContainer {\n  background-color: #343a40;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border: 1px solid gray;\n  border-radius: 12px;\n  position: relative;\n  height: max-content;\n  max-height: 70vh;\n  width: max-content;\n  overflow-y: scroll;\n}\n\n.closeButton {\n  position: sticky;\n  top: 1vw;\n  left: 1vw;\n  height: 1.3vw;\n  width: 1.3vw;\n  z-index: 1;\n}\n\n.closeButton:hover {\n  cursor: pointer;\n}\n\nhr {\n  background-color: gray;\n  height: 1px;\n  border: none;\n}\n",".field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4vw;\n\n  label {\n    font-size: calc(1vw + 6px);\n  }\n\n  input,\n  select,\n  textarea {\n    font-size: calc(0.8vw + 4px);\n    border: none;\n    outline: none;\n    background: #212529;\n    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n    padding: calc(0.5vw + 2px);\n    border-radius: 0.5vw;\n    color: #f8f9fa;\n  }\n}\n\n.DuedateField {\n  input {\n    font-size: calc(0.8vw + 4px);\n  }\n\n  ::-webkit-calendar-picker-indicator {\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 3px;\n    filter: invert(1);\n  }\n}\n\n.newForm {\n  min-width: 35vw;\n  padding: 0 calc(1vw + 6px) calc(1vw + 6px) calc(1vw + 6px);\n  display: grid;\n  grid-template-columns: min-content 2fr;\n  gap: calc(0.5vw + 4px);\n}\n\n.TitleField {\n  grid-column: 1 / 3;\n}\n\n.DescriptionField {\n  grid-column: 1 / 3;\n\n  textarea {\n    resize: none;\n    height: 20vh;\n    max-height: 20vh;\n  }\n}\n\n.PriorityField {\n  select {\n    height: 100%;\n    appearance: none;\n    cursor: pointer;\n    background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg)\n        no-repeat right 0.8em center / 1.4em,\n      #212529;\n    /* Remove focus outline */\n    &:focus {\n      outline: none;\n    }\n    /* Remove IE arrow */\n    &::-ms-expand {\n      display: none;\n    }\n  }\n}\n\n.newTitle {\n  padding: 0;\n  margin: 0;\n  padding: calc(1vw + 6px);\n}\n\n.createButton {\n  grid-column: 1/3;\n  width: max-content;\n  justify-self: center;\n}\n",".titleView {\n  padding: 0;\n  margin: 0;\n  user-select: auto;\n  overflow-wrap: break-word;\n  text-align: center;\n  max-width: fit-content;\n  word-break: break-word;\n}\n\n.titleViewContainer {\n  display: flex;\n  justify-content: center;\n  margin: 0 2vw;\n}\n\n.descriptionViewContainer {\n  margin: 0 1vw;\n}\n\n.infoContainer {\n  display: grid;\n  min-width: clamp(250px, 70vh, 1000px);\n  grid-template-rows: 1fr auto max-content auto max-content;\n\n  .separator {\n    height: 1px;\n  }\n\n  hr {\n    width: 90%;\n  }\n}\n\n.dateViewContainer {\n  display: flex;\n  flex-direction: column;\n}\n\nh3 {\n  margin: 0;\n}\n\n.dateStringContainer {\n  display: flex;\n\n  p {\n    margin: 0;\n    font-size: clamp(8px, 1vw, 64px);\n    font-weight: 300;\n  }\n}\n\n.priorityViewContainer {\n  display: flex;\n  flex-direction: column;\n}\n\n.todoDataContainer {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n\n  .priority {\n    border: none;\n    .priorityName {\n      padding-right: 10px;\n    }\n  }\n}\n\n.mainTaskContainer {\n  padding: 0 1vw 1vw 1vw;\n  border-bottom: #15181c 2px solid;\n}\n\n.viewSubContainer {\n  border-top: #464e55 2px solid;\n  padding: 1vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  h1 {\n    padding: 0;\n    margin: 0;\n  }\n}\n\n.descriptionView {\n  max-width: fit-content;\n  overflow-wrap: break-word;\n}\n\n.ButtonsView {\n  border-top: #464e55 2px solid;\n  display: flex;\n  gap: 0.8vw;\n  justify-content: center;\n  width: 100%;\n  padding: 1vw 0;\n  position: sticky;\n  bottom: 0;\n  background-color: #343a40;\n}\n","#projects {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5vw;\n  width: 100%;\n}\n\n.projectContainer {\n  background-color: hsla(200, 7%, 8%, 60%);\n  width: 100%;\n  padding: 0.5vw 0 0.5vw 0.7vw;\n  cursor: pointer;\n  transition: background-color 0.2s ease-out 0s;\n}\n\n.projectContainer:hover {\n  background-color: hsla(200, 7%, 8%, 100%);\n}\n\n#selectedProject {\n  background-color: hsla(200, 7%, 8%, 100%);\n}\n\nbutton {\n  i {\n    margin-right: 0.5vw;\n  }\n}\n"],"sourceRoot":""}]);
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
        <button class='createButton' type='submit'>Create</button>
      </form>
    </div>
  `;

  DOMelement() {
    let element = super.DOMelement();
    let form = element.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
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
        <button class='createButton' type='submit'>${
          this.state.todo ? "Edit" : "Create"
        }</button>
      </form>
    </div>
    `;

  DOMelement() {
    let element = super.DOMelement();
    let form = element.querySelector("form");
    // If the todo already exists (edit mode) make the button edit the todo, else just create a new task
    if (this.state.todo) {
      let select = element.querySelector(`#Priority`);
      select.selectedIndex = this.state.todo.priority - 1;
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        this.editTodo(form);
      });
    } else {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project */ "./src/modules/project.js");
/* harmony import */ var _storageManagement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storageManagement */ "./src/modules/storageManagement.js");






class PriorityComponent extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  template = (state) =>
    `
    <div class="priority">
      <div class="priorityColorContainer">
        <input type="color" class='priorityColor picker' value='${state.priority.color}'/>
      </div>
      <p class="priorityName">${state.priority.name}</p>
    </div>
    `;

  DOMelement() {
    let element = super.DOMelement();
    let picker = element.querySelector(".picker");
    element.addEventListener("click", (e) => {
      picker.click();
    });

    //Change priority color when the color picker changes
    picker.addEventListener("change", (e) => {
      this.state.priority.color = e.target.value;
      _storageManagement__WEBPACK_IMPORTED_MODULE_4__.Storage.savePriorityData();
      _project__WEBPACK_IMPORTED_MODULE_3__["default"].selected.component.update();
    });
    return element;
  }

  //This method updates and displays the priorities in the sidebar
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

  DOMelement() {
    return super.DOMelement("click", (e) => {
      this.handleID(e.currentTarget);
      _project__WEBPACK_IMPORTED_MODULE_2__["default"].selected = this.state.project;
      // Reset the board before displaying this project todos
      ProjectComponent.resetView();
      this.update();
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
/* harmony import */ var _priority__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priority */ "./src/modules/priority.js");
/* harmony import */ var _components_PriorityComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PriorityComponent */ "./src/modules/components/PriorityComponent.js");







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
    if (_project__WEBPACK_IMPORTED_MODULE_0__["default"].selected) {
      let project = _project__WEBPACK_IMPORTED_MODULE_0__["default"].selected;
      let projectComponent = project.component;

      _components_ProjectComponent__WEBPACK_IMPORTED_MODULE_1__["default"].resetView();
      project.clearCompletedTodos();
      projectComponent.displayTodos("completed", project.completed);
      projectComponent.displayTodos("pending", project.pending);
    }
  });

  // Add event listener to 'Delete this project' button
  let deleteProjectBtn = document.querySelector("#deleteProject");
  deleteProjectBtn.addEventListener("click", () => {
    if (_project__WEBPACK_IMPORTED_MODULE_0__["default"].selected) {
      _Neros__WEBPACK_IMPORTED_MODULE_2__["default"].deleteNerosComponent(_Neros__WEBPACK_IMPORTED_MODULE_2__["default"].projects, _project__WEBPACK_IMPORTED_MODULE_0__["default"].selected.component);
      _project__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProject(_project__WEBPACK_IMPORTED_MODULE_0__["default"].selected);
    }
  });

  let resetPrioBtn = document.querySelector("#resetPriorities");
  resetPrioBtn.addEventListener("click", () => {
    _priority__WEBPACK_IMPORTED_MODULE_3__["default"].resetColours();
    _components_PriorityComponent__WEBPACK_IMPORTED_MODULE_4__.PriorityComponent.displayPriorities();
    if (_project__WEBPACK_IMPORTED_MODULE_0__["default"].selected) _project__WEBPACK_IMPORTED_MODULE_0__["default"].selected.component.update();
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
    modalElement.focus();
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

  modalElement.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
      hide();
    }
  });

  // Show modal with new todo form when the 'add new todo' button is clicked
  addTodoBtn.addEventListener("click", () => {
    let newTodo = new _components_NewTodoComponent__WEBPACK_IMPORTED_MODULE_1__.NewTodoComponent("newTodo", { parent: null });
    if (_project__WEBPACK_IMPORTED_MODULE_3__["default"].selected) {
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
/* harmony import */ var _storageManagement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storageManagement */ "./src/modules/storageManagement.js");


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

  static #defaultColours = [
    "#E81616",
    "#EF5513",
    "#F3DD11",
    "#22C51F",
    "#2336E0",
  ];

  static resetColours() {
    Priority.#prioritiesArray.forEach((priority, index) => {
      priority.color = Priority.#defaultColours[index];
    });
    _storageManagement__WEBPACK_IMPORTED_MODULE_0__.Storage.savePriorityData();
  }

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

  set color(color) {
    this.color = color;
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
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");
/* harmony import */ var _Neros__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Neros */ "./src/modules/Neros.js");
/* harmony import */ var _storageManagement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storageManagement */ "./src/modules/storageManagement.js");
/* 1.- If a todo's is a parent, they get added to the pending tasks when created
   2.- Sort the pending tasks array by priority, and sort the children array by priority as well */






class Project {
  #pendingTasks;
  #completedTasks;

  static projects = [];

  static selected;

  constructor(name, firstLoad = false) {
    this.name = name;
    this.component = new _components_ProjectComponent__WEBPACK_IMPORTED_MODULE_1__["default"](name, { project: this });
    this.#pendingTasks = [];
    this.#completedTasks = [];
    this.firstLoad = firstLoad;
    Project.projects.push(this);
    if (!this.firstLoad) {
      _storageManagement__WEBPACK_IMPORTED_MODULE_4__.Storage.saveData();
    } else {
      this.firstLoad = false;
    }
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

  completeTodo(todo) {
    let foundIndex = this.#pendingTasks.indexOf(todo);
    this.#pendingTasks.splice(foundIndex, 1);
    this.addCompleted(todo);
  }

  resumeTodo(todo) {
    let foundIndex = this.#completedTasks.indexOf(todo);
    this.#completedTasks.splice(foundIndex, 1);
    this.addPending(todo);
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

  toJSON() {
    let obj = {
      name: this.name,
      pending: {},
      completed: {},
    };
    this.#pendingTasks.forEach((task, index) => {
      obj.pending[`task${index}`] = task.toJSON();
    });
    this.#completedTasks.forEach((task, index) => {
      obj.completed[`task${index}`] = task.toJSON();
    });
    return JSON.stringify(obj);
  }

  static fromJSON(json) {
    let projectOBJ = JSON.parse(json);
    for (const key in projectOBJ.pending) {
      if (Object.hasOwnProperty.call(projectOBJ.pending, key)) {
        projectOBJ.pending[key] = _todo__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(projectOBJ.pending[key]);
      }
    }
    for (const key in projectOBJ.completed) {
      if (Object.hasOwnProperty.call(projectOBJ.completed, key)) {
        projectOBJ.completed[key] = _todo__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(projectOBJ.completed[key]);
      }
    }
    return projectOBJ;
  }

  static loadProject(obj) {
    let project = new Project(obj.name, true);
    Project.selected = project;
    for (const key in obj.pending) {
      if (Object.hasOwnProperty.call(obj.pending, key)) {
        _todo__WEBPACK_IMPORTED_MODULE_2__["default"].loadTodo(obj.pending[key]);
      }
    }
    for (const key in obj.completed) {
      if (Object.hasOwnProperty.call(obj.completed, key)) {
        _todo__WEBPACK_IMPORTED_MODULE_2__["default"].loadTodo(obj.completed[key]);
      }
    }
    _Neros__WEBPACK_IMPORTED_MODULE_3__["default"].projects.registerComponent(project.component);
  }

  static deleteProject(project) {
    let foundIndex = Project.projects.indexOf(project);
    Project.projects.splice(foundIndex, 1);
    _storageManagement__WEBPACK_IMPORTED_MODULE_4__.Storage.saveData();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/modules/storageManagement.js":
/*!******************************************!*\
  !*** ./src/modules/storageManagement.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Storage": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _priority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./priority */ "./src/modules/priority.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _components_PriorityComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/PriorityComponent */ "./src/modules/components/PriorityComponent.js");




const Storage = (() => {
  const saveData = () => {
    window.localStorage.clear();
    _saveProjectData();
    savePriorityData();
  };

  /**  This method saves projects to the local storage as follows:
   * 1. First it creates a projects object where all projects will be stored
   * 2. For every existent project it will convert that project to a json string, with its todos and subtodos
   * 3. The project json string will be stored in a key with the index as identifier
   * 4. Save the projects object as a json string in the localstorage
   * */
  const _saveProjectData = () => {
    let projects = {};
    _project__WEBPACK_IMPORTED_MODULE_1__["default"].projects.forEach((project, index) => {
      let projectJSON = project.toJSON();
      projects[`project${index}`] = projectJSON;
    });
    window.localStorage.setItem("projects", JSON.stringify(projects));
  };

  // Same procedure as _saveProjectData() but only saving the priorities colours
  const savePriorityData = () => {
    let priorities = {};
    _priority__WEBPACK_IMPORTED_MODULE_0__["default"].priorities.forEach((priority, index) => {
      let priorityColor = priority.color;
      priorities[index] = priorityColor;
    });
    window.localStorage.setItem("priorities", JSON.stringify(priorities));
  };

  /** This method loads projects to the local storage as follows:
   * 1. First check if there are any projects saved
   * 2. If it has projects it will retrieve the project and its todos and subtodos as an object
   * 3. Traverse every project in the object and create a project/todo/subtodo for every one of them
   * */

  const _loadProjectData = () => {
    if (!window.localStorage.getItem("projects" === null)) {
      let projects = JSON.parse(window.localStorage.getItem("projects"));
      for (const key in projects) {
        if (Object.hasOwnProperty.call(projects, key)) {
          let projectObj = _project__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(projects[key]);
          _project__WEBPACK_IMPORTED_MODULE_1__["default"].loadProject(projectObj);
        }
      }
      _selectLastProject();
    }
  };

  const _loadPriorityData = () => {
    if (!window.localStorage.getItem("priorities" === null)) {
      let colors = JSON.parse(window.localStorage.getItem("priorities"));
      for (const key in colors) {
        if (Object.hasOwnProperty.call(colors, key)) {
          _priority__WEBPACK_IMPORTED_MODULE_0__["default"].priorities[key].color = colors[key];
        }
      }
    }
    _components_PriorityComponent__WEBPACK_IMPORTED_MODULE_2__.PriorityComponent.displayPriorities();
  };

  const loadData = () => {
    _loadPriorityData();
    _loadProjectData();
  };

  // Select the last project created so it automatically populates the dashboard with the latest project
  const _selectLastProject = () => {
    let lastProject = document.querySelector(".projectContainer");
    if (lastProject) {
      lastProject.click();
      _project__WEBPACK_IMPORTED_MODULE_1__["default"].selected.component.update();
    }
  };

  return { saveData, loadData, savePriorityData };
})();


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
/* harmony import */ var _storageManagement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storageManagement */ "./src/modules/storageManagement.js");








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

  constructor(
    title,
    date,
    priority,
    description,
    isChecked,
    firstLoad = false,
    parent = null
  ) {
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
    this.firstLoad = firstLoad;
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
    if (!this.firstLoad && !this.isSubtask()) {
      _storageManagement__WEBPACK_IMPORTED_MODULE_6__.Storage.saveData();
    } else {
      this.firstLoad = false;
    }
  }

  createTodo(title, date, priority, description, isChecked, firstLoad) {
    let a = new Todo(
      title,
      date,
      priority,
      description,
      isChecked,
      firstLoad,
      this
    );
    this.#children.push(a);
    if (!firstLoad) {
      _storageManagement__WEBPACK_IMPORTED_MODULE_6__.Storage.saveData();
    } else {
      a.firstLoad = false;
    }
    return a;
  }

  edit(title, date, priority, description) {
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.description = description;
    _storageManagement__WEBPACK_IMPORTED_MODULE_6__.Storage.saveData();
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
      this.project.resumeTodo(this);
      this.project.component.update();
    }
    _storageManagement__WEBPACK_IMPORTED_MODULE_6__.Storage.saveData();
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
      this.project.completeTodo(this);
      this.project.component.update();
    }
    _storageManagement__WEBPACK_IMPORTED_MODULE_6__.Storage.saveData();
  }

  deleteTodo(task) {
    if (this.isSubtask()) {
      this.parent.delete(task);
    } else {
      this.project.deleteTodo(task);
    }
    _storageManagement__WEBPACK_IMPORTED_MODULE_6__.Storage.saveData();
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

  toJSON() {
    let obj = {
      title: this.title,
      date: this.date,
      priority: this.priority,
      description: this.description,
      isChecked: this.#isChecked,
    };
    if (!this.isSubtask()) {
      obj.children = {};
      this.#children.forEach((task, index) => {
        obj.children[`subtask${index}`] = task.toJSON();
      });
    }
    return JSON.stringify(obj);
  }

  static fromJSON(json) {
    let todoOBJ = JSON.parse(json);
    for (const key in todoOBJ.children) {
      if (Object.hasOwnProperty.call(todoOBJ.children, key)) {
        todoOBJ.children[key] = JSON.parse(todoOBJ.children[key]);
      }
    }
    return todoOBJ;
  }

  static loadTodo(obj) {
    let todo = new Todo(
      obj.title,
      obj.date,
      obj.priority,
      obj.description,
      obj.isChecked,
      true
    );
    for (const key in obj.children) {
      if (Object.hasOwnProperty.call(obj.children, key)) {
        todo.createTodo(
          obj.children[key].title,
          obj.children[key].date,
          obj.children[key].priority,
          obj.children[key].description,
          obj.children[key].isChecked,
          true
        );
      }
    }
    return todo;
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
/* harmony import */ var _modules_storageManagement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/storageManagement */ "./src/modules/storageManagement.js");
//Import statements







_modules_storageManagement__WEBPACK_IMPORTED_MODULE_5__.Storage.loadData();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLGFBQWEsZUFBZSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxhQUFhLGVBQWUsUUFBUSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxhQUFhLGVBQWUsYUFBYSxXQUFXLFdBQVcsT0FBTyxNQUFNLGFBQWEsZUFBZSxRQUFRLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsTUFBTSxPQUFPLGFBQWEsWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxhQUFhLGVBQWUsT0FBTyxNQUFNLGFBQWEsZUFBZSxPQUFPLE9BQU8sYUFBYSxRQUFRLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxRQUFRLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxV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QTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDMkI7QUFDUztBQUNGO0FBQ007QUFDbUM7QUFDckI7O0FBRXRELHdFQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvbWFpbi5zY3NzP2EyMjEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvTmVyb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9EZWxldGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9NaW5pQ29udGFpbmVyQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvTmV3UHJvamVjdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL05ld1RvZG9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9Qcmlvcml0eUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL1Byb2plY3RDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9UYXNrQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvVG9kb0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3ZpZXdUb2RvQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9pZEFzc2lnbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3ByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZU1hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBtaW4td2lkdGg6IDc1JTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDEuMmZyKSAycHggM2ZyO1xcbiAgYm94LXNoYWRvdzogOHB4IDhweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3A6ICM0NjRlNTUgNHB4IHNvbGlkO1xcbiAgYm9yZGVyLWxlZnQ6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbn1cXG5cXG4uc2VwYXJhdG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XFxufVxcblxcbi5tYWluQ29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBjYWxjKDY1JSAtIDJweCkgMnB4IDM1JTtcXG59XFxuXFxuLnBlbmRpbmcge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1ib3R0b206ICMxNTE4MWMgMnB4IHNvbGlkO1xcbiAgYm9yZGVyLWxlZnQ6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbm1heCgwLCAxMDAlKTtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXRvcDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBib3JkZXItbGVmdDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICB9XFxuICAuc2VwYXJhdG9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5wZW5kaW5nIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICB9XFxufVxcbi5zaWRlYmFyIHtcXG4gIGJvcmRlci1yaWdodDogIzE1MTgxYyAycHggc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eU5hbWUge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgZm9udC1zaXplOiBjbGFtcCg4cHgsIDF2dywgNjRweCk7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eUNvbG9yQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7XFxuICBwYWRkaW5nOiBjbGFtcCg4cHgsIDAuM3JlbSArIDAuM3Z3LCA2NHB4KTtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNmM3NTdkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5Q29sb3Ige1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgaGVpZ2h0OiBjbGFtcCgxNHB4LCAwLjVyZW0gKyAwLjd2dywgNjRweCk7XFxuICB3aWR0aDogY2xhbXAoMTRweCwgMC41cmVtICsgMC43dncsIDY0cHgpO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWNvbG9yXTo6LXdlYmtpdC1jb2xvci1zd2F0Y2gtd3JhcHBlciB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWNvbG9yXTo6LXdlYmtpdC1jb2xvci1zd2F0Y2gge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucGlja2VyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNhMGIxYzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNwcmlvcml0aWVzIHtcXG4gIHdpZHRoOiBjbGFtcCgxMDBweCwgMzAlICsgNHZ3LCA2MDBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogY2xhbXAoNnB4LCAwLjN2dywgMTJweCk7XFxuICBtYXJnaW4tYm90dG9tOiBjbGFtcCgxMHB4LCAwLjd2dywgMTZweCk7XFxufVxcblxcbi5wcmlvcml0eUNvbG9yQ29udGFpbmVyIC5wcmlvcml0eUNvbG9yIHtcXG4gIGhlaWdodDogY2xhbXAoMTRweCwgMC41cmVtICsgMC40dncsIDY0cHgpO1xcbiAgd2lkdGg6IGNsYW1wKDE0cHgsIDAuNXJlbSArIDAuNHZ3LCA2NHB4KTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbi5zaWRlYmFyQnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC42dnc7XFxufVxcblxcbi5Ub2Rvc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDUwcHg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi50YXNrQ29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiBjbGFtcCg0cHgsIDAuNHZ3LCA4cHgpO1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNhMGIxYzM7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IGNsYW1wKDJweCwgMC4zdncsIDhweCkgMDtcXG59XFxuXFxuLnRhc2tNaW5pQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogY2xhbXAoOHB4LCAwLjVyZW0gKyAwLjV2dywgNjRweCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnByaW9yaXR5QnV0dG9uTWluaSB7XFxuICBjdXJzb3I6IGF1dG87XFxufVxcblxcbi50YXNrQ29sb3Ige1xcbiAgaGVpZ2h0OiBjbGFtcCgxNHB4LCAwLjVyZW0gKyAwLjd2dywgNjRweCk7XFxuICB3aWR0aDogY2xhbXAoMTRweCwgMC41cmVtICsgMC43dncsIDY0cHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4MTYxNjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuLnRhc2tCdXR0b24ge1xcbiAgaGVpZ2h0OiBjbGFtcCgxNHB4LCAwLjVyZW0gKyAwLjd2dywgNjRweCk7XFxuICB3aWR0aDogY2xhbXAoMTRweCwgMC41cmVtICsgMC43dncsIDY0cHgpO1xcbn1cXG5cXG4udGFza01pbmlDb250YWluZXI6bnRoLWxhc3Qtb2YtdHlwZSgtbiArIDIpIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNmM3NTdkO1xcbn1cXG5cXG4udGFza01pbmlDb250YWluZXI6bnRoLWNoaWxkKC1uKzIpIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNmM3NTdkO1xcbn1cXG5cXG4udGFza1RpbWUge1xcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKDFyZW0gKyAxdncpO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLnRhc2tUaW1lIHAge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGNvbG9yOiAjYWRiNWJkO1xcbn1cXG5cXG4udGFza1RpdGxlIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICB3aWR0aDogY2xhbXAoMTUwcHgsIDEwdncgKyAxMHJlbSwgNTAwcHgpO1xcbn1cXG4udGFza1RpdGxlIHAge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnRhc2tUaXRsZSxcXG4udGFza1RpbWUge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi50YXNrVGl0bGUgcCxcXG4udGFza1RpbWUgcCB7XFxuICBmb250LXNpemU6IGNsYW1wKDhweCwgMC41cmVtICsgMC43dncsIDY0cHgpO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc3VidGFza3NDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5zdWJ0YXNrIHtcXG4gIG1hcmdpbjogY2xhbXAoMnB4LCAwLjF2dywgNHB4KSAwO1xcbn1cXG4uc3VidGFzayAudGFza01pbmlDb250YWluZXIge1xcbiAgcGFkZGluZzogY2xhbXAoOHB4LCAwLjRyZW0gKyAwLjR2dywgNDhweCk7XFxufVxcbi5zdWJ0YXNrIC50YXNrTWluaUNvbnRhaW5lciAudGFza0J1dHRvbiB7XFxuICBoZWlnaHQ6IGNsYW1wKDEwcHgsIDAuNXJlbSArIDAuNHZ3LCAzNnB4KTtcXG4gIHdpZHRoOiBjbGFtcCgxMHB4LCAwLjVyZW0gKyAwLjR2dywgMzZweCk7XFxufVxcbi5zdWJ0YXNrIC50YXNrTWluaUNvbnRhaW5lciAudGFza0NvbG9yIHtcXG4gIHdpZHRoOiBjbGFtcCgxMHB4LCAwLjVyZW0gKyAwLjR2dywgMzZweCk7XFxuICBoZWlnaHQ6IGNsYW1wKDEwcHgsIDAuNXJlbSArIDAuNHZ3LCAzNnB4KTtcXG59XFxuLnN1YnRhc2sgLnRhc2tUaXRsZSBwLFxcbi5zdWJ0YXNrIC50YXNrVGltZSBwIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoNnB4LCAwLjVyZW0gKyAwLjR2dywgMzZweCk7XFxufVxcblxcbi5jb21wbGV0ZWRUYXNrIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgb3BhY2l0eTogMC42O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSwgaW5zZXQgMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4udGFza0RhdGFDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleDogMSAyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkU3VidGFzayB7XFxuICBtYXJnaW4tdG9wOiAwLjN2dztcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNjb21wbGV0ZWRUb2RvcyA+IC50YXNrQ29udGFpbmVyID4gLnN1YnRhc2tzQ29udGFpbmVyIGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwZGVnLCAwJSwgMCUsIDAuNTAyKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21vZGFsQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XFxuICBib3gtc2hhZG93OiA4cHggOHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICBtYXgtaGVpZ2h0OiA3MHZoO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uY2xvc2VCdXR0b24ge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMXZ3O1xcbiAgbGVmdDogMXZ3O1xcbiAgaGVpZ2h0OiAxLjN2dztcXG4gIHdpZHRoOiAxLjN2dztcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5jbG9zZUJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjR2dztcXG59XFxuLmZpZWxkIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygxdncgKyA2cHgpO1xcbn1cXG4uZmllbGQgaW5wdXQsXFxuLmZpZWxkIHNlbGVjdCxcXG4uZmllbGQgdGV4dGFyZWEge1xcbiAgZm9udC1zaXplOiBjYWxjKDAuOHZ3ICsgNHB4KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMjEyNTI5O1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSwgaW5zZXQgMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgcGFkZGluZzogY2FsYygwLjV2dyArIDJweCk7XFxuICBib3JkZXItcmFkaXVzOiAwLjV2dztcXG4gIGNvbG9yOiAjZjhmOWZhO1xcbn1cXG5cXG4uRHVlZGF0ZUZpZWxkIGlucHV0IHtcXG4gIGZvbnQtc2l6ZTogY2FsYygwLjh2dyArIDRweCk7XFxufVxcbi5EdWVkYXRlRmllbGQgOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblxcbi5uZXdGb3JtIHtcXG4gIG1pbi13aWR0aDogMzV2dztcXG4gIHBhZGRpbmc6IDAgY2FsYygxdncgKyA2cHgpIGNhbGMoMXZ3ICsgNnB4KSBjYWxjKDF2dyArIDZweCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAyZnI7XFxuICBnYXA6IGNhbGMoMC41dncgKyA0cHgpO1xcbn1cXG5cXG4uVGl0bGVGaWVsZCB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG4uRGVzY3JpcHRpb25GaWVsZCB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG4uRGVzY3JpcHRpb25GaWVsZCB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBoZWlnaHQ6IDIwdmg7XFxuICBtYXgtaGVpZ2h0OiAyMHZoO1xcbn1cXG5cXG4uUHJpb3JpdHlGaWVsZCBzZWxlY3Qge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzkvOWQvQ2FyZXRfZG93bl9mb250X2F3ZXNvbWVfd2hpdGV2YXJpYXRpb24uc3ZnKSBuby1yZXBlYXQgcmlnaHQgMC44ZW0gY2VudGVyLzEuNGVtLCAjMjEyNTI5O1xcbiAgLyogUmVtb3ZlIGZvY3VzIG91dGxpbmUgKi9cXG4gIC8qIFJlbW92ZSBJRSBhcnJvdyAqL1xcbn1cXG4uUHJpb3JpdHlGaWVsZCBzZWxlY3Q6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLlByaW9yaXR5RmllbGQgc2VsZWN0OjotbXMtZXhwYW5kIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uZXdUaXRsZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogY2FsYygxdncgKyA2cHgpO1xcbn1cXG5cXG4uY3JlYXRlQnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlVmlldyB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgdXNlci1zZWxlY3Q6IGF1dG87XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi50aXRsZVZpZXdDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDJ2dztcXG59XFxuXFxuLmRlc2NyaXB0aW9uVmlld0NvbnRhaW5lciB7XFxuICBtYXJnaW46IDAgMXZ3O1xcbn1cXG5cXG4uaW5mb0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWluLXdpZHRoOiBjbGFtcCgyNTBweCwgNzB2aCwgMTAwMHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG8gbWF4LWNvbnRlbnQgYXV0byBtYXgtY29udGVudDtcXG59XFxuLmluZm9Db250YWluZXIgLnNlcGFyYXRvciB7XFxuICBoZWlnaHQ6IDFweDtcXG59XFxuLmluZm9Db250YWluZXIgaHIge1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLmRhdGVWaWV3Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5kYXRlU3RyaW5nQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5kYXRlU3RyaW5nQ29udGFpbmVyIHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiBjbGFtcCg4cHgsIDF2dywgNjRweCk7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4ucHJpb3JpdHlWaWV3Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kb0RhdGFDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRvZG9EYXRhQ29udGFpbmVyIC5wcmlvcml0eSB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi50b2RvRGF0YUNvbnRhaW5lciAucHJpb3JpdHkgLnByaW9yaXR5TmFtZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ubWFpblRhc2tDb250YWluZXIge1xcbiAgcGFkZGluZzogMCAxdncgMXZ3IDF2dztcXG4gIGJvcmRlci1ib3R0b206ICMxNTE4MWMgMnB4IHNvbGlkO1xcbn1cXG5cXG4udmlld1N1YkNvbnRhaW5lciB7XFxuICBib3JkZXItdG9wOiAjNDY0ZTU1IDJweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDF2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnZpZXdTdWJDb250YWluZXIgaDEge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uVmlldyB7XFxuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLkJ1dHRvbnNWaWV3IHtcXG4gIGJvcmRlci10b3A6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC44dnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXZ3IDA7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41dnc7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMDBkZWcsIDclLCA4JSwgMC42KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41dncgMCAwLjV2dyAwLjd2dztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dCAwcztcXG59XFxuXFxuLnByb2plY3RDb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwMGRlZywgNyUsIDglKTtcXG59XFxuXFxuI3NlbGVjdGVkUHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjAwZGVnLCA3JSwgOCUpO1xcbn1cXG5cXG5idXR0b24gaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXZ3O1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2Y4ZjlmYTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE5Ljc1ZGVnLCAjNmU5ZWNmIDEzLjAyJSwgIzEyMjYzYSAxMDAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41dnc7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwLjd2dyAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0VGl0bGUge1xcbiAgZm9udC1zaXplOiAxdnc7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogIzI4ODdjODtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgMHB4IDJweCAwcHggIzZiYjJlMztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2Y4ZjlmYTtcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjF2dztcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlQnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IGhzbCgwZGVnLCA4MiUsIDYzJSk7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IDBweCAycHggMHB4IGhzbCgwZGVnLCA2NyUsIDc3JSk7XFxufVxcblxcbi5lZGl0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMTEsIDE4NCwgNTUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAwcHggMnB4IDBweCByZ2IoMTg4LCAyMjksIDE1Nik7XFxufVxcblxcbi50YXNrVGl0bGUsXFxuLnByaW9yaXR5TmFtZSB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL19jb250YWluZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL19wcmlvcml0aWVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9fdGFzay5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvX21vZGFsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9fZm9ybS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvX3ZpZXdUb2RvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9fcHJvamVjdC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1EQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsMkNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQ0NGO0VERUE7SUFDRSxhQUFBO0VDQUY7RURHQTtJQUNFLGlCQUFBO0VDREY7QUFDRjtBRElBO0VBQ0UsK0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBQzFEQTtFQUNFLGtCQUFBO0VBQ0EsZ0NBTnFCO0VBT3JCLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUQ2REY7O0FDMURBO0VBQ0UseUJBQUE7RUFDQSx5Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUQ2REY7O0FDMURBO0VBQ0Usa0JBQUE7RUFDQSx5Q0F2QnVCO0VBd0J2Qix3Q0F4QnVC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LGtDQUFBO0VBQ0EsY0FBQTtBQTZoQkY7O0FBMWhCQTtFQUNFLG9FQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUE2aEJGOztBQTFoQkE7RUFDRSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQTRoQkY7O0FBemhCQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBNGhCRjs7QUF6aEJBO0VBQ0UsYUFBQTtBQTRoQkY7O0FBemhCQTtFQUNFLG1CQUFBO0VBQ0EscUVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtBQTRoQkY7O0FBemhCQTtFQUNFLCtCQUFBO0VBQ0EsaUZBQUE7QUE0aEJGOztBQXpoQkE7RUFDRSw2QkFBQTtFQUNBLGdGQUFBO0FBNGhCRjs7QUF6aEJBOztFQUVFLGlCQUFBO0FBNGhCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIG1pbi13aWR0aDogNzUlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMS4yZnIpIDJweCAzZnI7XFxuICBib3gtc2hhZG93OiA4cHggOHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcDogIzQ2NGU1NSA0cHggc29saWQ7XFxuICBib3JkZXItbGVmdDogIzQ2NGU1NSAycHggc29saWQ7XFxufVxcblxcbi5zZXBhcmF0b3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcXG59XFxuXFxuLm1haW5Db250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGNhbGMoNjUlIC0gMnB4KSAycHggMzUlO1xcbn1cXG5cXG4ucGVuZGluZyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLWJvdHRvbTogIzE1MTgxYyAycHggc29saWQ7XFxuICBib3JkZXItbGVmdDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWlubWF4KDAsIDEwMCUpO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItdG9wOiAjNDY0ZTU1IDJweCBzb2xpZDtcXG4gIGJvcmRlci1sZWZ0OiAjNDY0ZTU1IDJweCBzb2xpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gIH1cXG5cXG4gIC5zZXBhcmF0b3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnBlbmRpbmcge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gIH1cXG59XFxuXFxuLnNpZGViYXIge1xcbiAgYm9yZGVyLXJpZ2h0OiAjMTUxODFjIDJweCBzb2xpZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXCIsXCJAaW1wb3J0IFxcXCIuL2luZGV4XFxcIjtcXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2Y4ZjlmYTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE5Ljc1ZGVnLCAjNmU5ZWNmIDEzLjAyJSwgIzEyMjYzYSAxMDAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC8vIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMXZ3KTtcXG4gIGZvbnQtc2l6ZTogMS41dnc7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwLjd2dyAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0VGl0bGUge1xcbiAgZm9udC1zaXplOiAxdnc7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogIzI4ODdjODtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgMHB4IDJweCAwcHggIzZiYjJlMztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2Y4ZjlmYTtcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjF2dztcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlQnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IGhzbCgwLCA4MiUsIDYzJSk7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IDBweCAycHggMHB4IGhzbCgwLCA2NyUsIDc3JSk7XFxufVxcblxcbi5lZGl0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMTEsIDE4NCwgNTUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAwcHggMnB4IDBweCByZ2IoMTg4LCAyMjksIDE1Nik7XFxufVxcblxcbi50YXNrVGl0bGUsXFxuLnByaW9yaXR5TmFtZSB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXCIsXCIkcmVzcG9uc2l2ZS10ZXh0LXNpemU6IGNsYW1wKDhweCwgMXZ3LCA2NHB4KTtcXG4kcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTogY2xhbXAoMTRweCwgY2FsYygwLjVyZW0gKyAwLjd2dyksIDY0cHgpO1xcbiRyZXNwb25zaXZlLXByaW8tc2l6ZTogY2xhbXAoMTRweCwgY2FsYygwLjVyZW0gKyAwLjR2dyksIDY0cHgpO1xcblxcbi5wcmlvcml0eU5hbWUge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAkcmVzcG9uc2l2ZS10ZXh0LXNpemU7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eUNvbG9yQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7XFxuICBwYWRkaW5nOiBjbGFtcCg4cHgsIGNhbGMoMC4zcmVtICsgMC4zdncpLCA2NHB4KTtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNmM3NTdkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5Q29sb3Ige1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgaGVpZ2h0OiAkcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTtcXG4gIHdpZHRoOiAkcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY29sb3JcXFwiXTo6LXdlYmtpdC1jb2xvci1zd2F0Y2gtd3JhcHBlciB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjb2xvclxcXCJdOjotd2Via2l0LWNvbG9yLXN3YXRjaCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5waWNrZXIge1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgI2EwYjFjMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3ByaW9yaXRpZXMge1xcbiAgd2lkdGg6IGNsYW1wKDEwMHB4LCBjYWxjKDMwJSArIDR2dyksIDYwMHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiBjbGFtcCg2cHgsIDAuM3Z3LCAxMnB4KTtcXG4gIG1hcmdpbi1ib3R0b206IGNsYW1wKDEwcHgsIDAuN3Z3LCAxNnB4KTtcXG59XFxuXFxuLnByaW9yaXR5Q29sb3JDb250YWluZXIge1xcbiAgLnByaW9yaXR5Q29sb3Ige1xcbiAgICBoZWlnaHQ6ICRyZXNwb25zaXZlLXByaW8tc2l6ZTtcXG4gICAgd2lkdGg6ICRyZXNwb25zaXZlLXByaW8tc2l6ZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbi5zaWRlYmFyQnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC42dnc7XFxufVxcblwiLFwiJGJpZy1yZXNwb25zaXZlLXRleHQtc2l6ZTogY2xhbXAoOHB4LCBjYWxjKDAuNXJlbSArIDAuN3Z3KSwgNjRweCk7XFxuJGJpZy1yZXNwb25zaXZlLWJ1dHRvbi1zaXplOiBjbGFtcCgxNHB4LCBjYWxjKDAuNXJlbSArIDAuN3Z3KSwgNjRweCk7XFxuJHNtYWxsLXJlc3BvbnNpdmUtdGV4dC1zaXplOiBjbGFtcCg2cHgsIGNhbGMoMC41cmVtICsgMC40dncpLCAzNnB4KTtcXG4kc21hbGwtcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTogY2xhbXAoMTBweCwgY2FsYygwLjVyZW0gKyAwLjR2dyksIDM2cHgpO1xcbi5Ub2Rvc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDUwcHg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi50YXNrQ29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiBjbGFtcCg0cHgsIDAuNHZ3LCA4cHgpO1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNhMGIxYzM7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IGNsYW1wKDJweCwgMC4zdncsIDhweCkgMDtcXG59XFxuXFxuLnRhc2tNaW5pQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogY2xhbXAoOHB4LCBjYWxjKDAuNXJlbSArIDAuNXZ3KSwgNjRweCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnByaW9yaXR5QnV0dG9uTWluaSB7XFxuICBjdXJzb3I6IGF1dG87XFxufVxcblxcbi50YXNrQ29sb3Ige1xcbiAgaGVpZ2h0OiAkYmlnLXJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICB3aWR0aDogJGJpZy1yZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4MTYxNjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuLnRhc2tCdXR0b24ge1xcbiAgaGVpZ2h0OiAkYmlnLXJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICB3aWR0aDogJGJpZy1yZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbn1cXG5cXG4udGFza01pbmlDb250YWluZXI6bnRoLWxhc3Qtb2YtdHlwZSgtbiArIDIpIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNmM3NTdkO1xcbn1cXG5cXG4udGFza01pbmlDb250YWluZXI6bnRoLWNoaWxkKC1uICsgMikge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICM2Yzc1N2Q7XFxufVxcblxcbi50YXNrVGltZSB7XFxuICBwYWRkaW5nLWxlZnQ6IGNhbGMoMXJlbSArIDF2dyk7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcblxcbiAgcCB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGNvbG9yOiAjYWRiNWJkO1xcbiAgfVxcbn1cXG5cXG4udGFza1RpdGxlIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICB3aWR0aDogY2xhbXAoMTUwcHgsIGNhbGMoMTB2dyArIDEwcmVtKSwgNTAwcHgpO1xcblxcbiAgcCB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgfVxcbn1cXG5cXG4udGFza1RpdGxlLFxcbi50YXNrVGltZSB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHAge1xcbiAgICBmb250LXNpemU6ICRiaWctcmVzcG9uc2l2ZS10ZXh0LXNpemU7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG59XFxuXFxuLnN1YnRhc2tzQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uc3VidGFzayB7XFxuICBtYXJnaW46IGNsYW1wKDJweCwgMC4xdncsIDRweCkgMDtcXG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgLnRhc2tNaW5pQ29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogY2xhbXAoOHB4LCBjYWxjKDAuNHJlbSArIDAuNHZ3KSwgNDhweCk7XFxuXFxuICAgIC50YXNrQnV0dG9uIHtcXG4gICAgICBoZWlnaHQ6ICRzbWFsbC1yZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbiAgICAgIHdpZHRoOiAkc21hbGwtcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTtcXG4gICAgfVxcblxcbiAgICAudGFza0NvbG9yIHtcXG4gICAgICB3aWR0aDogJHNtYWxsLXJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICAgICAgaGVpZ2h0OiAkc21hbGwtcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnRhc2tUaXRsZSxcXG4gIC50YXNrVGltZSB7XFxuICAgIHAge1xcbiAgICAgIGZvbnQtc2l6ZTogJHNtYWxsLXJlc3BvbnNpdmUtdGV4dC1zaXplO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5jb21wbGV0ZWRUYXNrIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgb3BhY2l0eTogMC42O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSwgaW5zZXQgMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4udGFza0RhdGFDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleDogMSAyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkU3VidGFzayB7XFxuICBtYXJnaW4tdG9wOiAwLjN2dztcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNjb21wbGV0ZWRUb2RvcyA+IC50YXNrQ29udGFpbmVyID4gLnN1YnRhc2tzQ29udGFpbmVyIHtcXG4gIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblwiLFwiLm1vZGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjUwMik7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtb2RhbENvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xcbiAgYm94LXNoYWRvdzogOHB4IDhweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgbWF4LWhlaWdodDogNzB2aDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNsb3NlQnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDF2dztcXG4gIGxlZnQ6IDF2dztcXG4gIGhlaWdodDogMS4zdnc7XFxuICB3aWR0aDogMS4zdnc7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY2xvc2VCdXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ociB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblwiLFwiLmZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjR2dztcXG5cXG4gIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDF2dyArIDZweCk7XFxuICB9XFxuXFxuICBpbnB1dCxcXG4gIHNlbGVjdCxcXG4gIHRleHRhcmVhIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuOHZ3ICsgNHB4KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjEyNTI5O1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpLCBpbnNldCAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIHBhZGRpbmc6IGNhbGMoMC41dncgKyAycHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjV2dztcXG4gICAgY29sb3I6ICNmOGY5ZmE7XFxuICB9XFxufVxcblxcbi5EdWVkYXRlRmllbGQge1xcbiAgaW5wdXQge1xcbiAgICBmb250LXNpemU6IGNhbGMoMC44dncgKyA0cHgpO1xcbiAgfVxcblxcbiAgOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG4gIH1cXG59XFxuXFxuLm5ld0Zvcm0ge1xcbiAgbWluLXdpZHRoOiAzNXZ3O1xcbiAgcGFkZGluZzogMCBjYWxjKDF2dyArIDZweCkgY2FsYygxdncgKyA2cHgpIGNhbGMoMXZ3ICsgNnB4KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDJmcjtcXG4gIGdhcDogY2FsYygwLjV2dyArIDRweCk7XFxufVxcblxcbi5UaXRsZUZpZWxkIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLkRlc2NyaXB0aW9uRmllbGQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcblxcbiAgdGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgbWF4LWhlaWdodDogMjB2aDtcXG4gIH1cXG59XFxuXFxuLlByaW9yaXR5RmllbGQge1xcbiAgc2VsZWN0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzkvOWQvQ2FyZXRfZG93bl9mb250X2F3ZXNvbWVfd2hpdGV2YXJpYXRpb24uc3ZnKVxcbiAgICAgICAgbm8tcmVwZWF0IHJpZ2h0IDAuOGVtIGNlbnRlciAvIDEuNGVtLFxcbiAgICAgICMyMTI1Mjk7XFxuICAgIC8qIFJlbW92ZSBmb2N1cyBvdXRsaW5lICovXFxuICAgICY6Zm9jdXMge1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIH1cXG4gICAgLyogUmVtb3ZlIElFIGFycm93ICovXFxuICAgICY6Oi1tcy1leHBhbmQge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLm5ld1RpdGxlIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiBjYWxjKDF2dyArIDZweCk7XFxufVxcblxcbi5jcmVhdGVCdXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cIixcIi50aXRsZVZpZXcge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHVzZXItc2VsZWN0OiBhdXRvO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbn1cXG5cXG4udGl0bGVWaWV3Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAydnc7XFxufVxcblxcbi5kZXNjcmlwdGlvblZpZXdDb250YWluZXIge1xcbiAgbWFyZ2luOiAwIDF2dztcXG59XFxuXFxuLmluZm9Db250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1pbi13aWR0aDogY2xhbXAoMjUwcHgsIDcwdmgsIDEwMDBweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvIG1heC1jb250ZW50IGF1dG8gbWF4LWNvbnRlbnQ7XFxuXFxuICAuc2VwYXJhdG9yIHtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICB9XFxuXFxuICBociB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxufVxcblxcbi5kYXRlVmlld0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaDMge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZGF0ZVN0cmluZ0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCg4cHgsIDF2dywgNjRweCk7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICB9XFxufVxcblxcbi5wcmlvcml0eVZpZXdDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvRGF0YUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgLnByaW9yaXR5IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICAucHJpb3JpdHlOYW1lIHtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5tYWluVGFza0NvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwIDF2dyAxdncgMXZ3O1xcbiAgYm9yZGVyLWJvdHRvbTogIzE1MTgxYyAycHggc29saWQ7XFxufVxcblxcbi52aWV3U3ViQ29udGFpbmVyIHtcXG4gIGJvcmRlci10b3A6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbiAgcGFkZGluZzogMXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgaDEge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxufVxcblxcbi5kZXNjcmlwdGlvblZpZXcge1xcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5CdXR0b25zVmlldyB7XFxuICBib3JkZXItdG9wOiAjNDY0ZTU1IDJweCBzb2xpZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuOHZ3O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDF2dyAwO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XFxufVxcblwiLFwiI3Byb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41dnc7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMDAsIDclLCA4JSwgNjAlKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41dncgMCAwLjV2dyAwLjd2dztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dCAwcztcXG59XFxuXFxuLnByb2plY3RDb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMDAsIDclLCA4JSwgMTAwJSk7XFxufVxcblxcbiNzZWxlY3RlZFByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMDAsIDclLCA4JSwgMTAwJSk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBpIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjV2dztcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzdGF0ZSwgdGVtcGxhdGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gIH1cblxuICAvLyBUaGlzIG1ldGhvZCByZXR1cm5zIGEgdGVtcGxhdGUgbGl0ZXJhbCBvZiB0aGUgY29tcG9uZW50XG4gIHZpZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGUodGhpcy5zdGF0ZSk7XG4gIH1cblxuICAvLyBUaGlzIG1ldGhvZCByZXR1cm5zIGFuIEhUTUwgZWxlbWVudCBvYmplY3Qgb2YgdGhlIGNvbXBvbmVudFxuICBET01lbGVtZW50KGUsIGZ1bmMpIHtcbiAgICBsZXQgZWxlbWVudCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcodGhpcy52aWV3KCksIFwidGV4dC9odG1sXCIpLmJvZHlcbiAgICAgIC5maXJzdENoaWxkO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGUsIGZ1bmMpO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgYWRkTGlzdGVuZXIgPSAoZWxlbWVudCwgZXZlbnQsIGZ1bmMpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmMpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG5cbi8vbWFrZSBhbiBldmVudEhhbmRsZXIgY2xhc3MgdGhhdCBhc3NpZ25zIGV2ZW50IGxpc3RlbmVycyB0byBjb21wb25lbnRzXG4iLCJpbXBvcnQgUHJvamVjdENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL1Byb2plY3RDb21wb25lbnRcIjtcblxuY2xhc3MgTmVyb3Mge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgIHRoaXMuTmVyb3NFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7c2VsZWN0b3J9YCk7XG4gIH1cblxuICBzdGF0aWMgcHJvamVjdHMgPSBuZXcgTmVyb3MoXCJwcm9qZWN0c1wiKTtcblxuICBzdGF0aWMgZGVsZXRlTmVyb3NDb21wb25lbnQobmVyb3MsIGNvbXBvbmVudCkge1xuICAgIGxldCBjb21wb25lbnRzID0gbmVyb3MuY29tcG9uZW50cztcbiAgICBkZWxldGUgY29tcG9uZW50c1tjb21wb25lbnQubmFtZV07XG4gICAgbmVyb3MudXBkYXRlVmlldygpO1xuICAgIFByb2plY3RDb21wb25lbnQuc2VsZWN0TGFzdFByb2plY3QoKTtcbiAgfVxuXG4gIHJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHRoaXMuY29tcG9uZW50c1tjb21wb25lbnQubmFtZV0gPSBjb21wb25lbnQ7XG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gIH1cblxuICB1cGRhdGVWaWV3KCkge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudHMpIHtcbiAgICAgIHRoaXMuTmVyb3NFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmNvbXBvbmVudHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB0aGlzLk5lcm9zRWxlbWVudC5hcHBlbmQodGhpcy5jb21wb25lbnRzW2tleV0uRE9NZWxlbWVudCgpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXJvcztcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xuaW1wb3J0IG1vZGFsIGZyb20gXCIuLi9tb2RhbFwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL3Byb2plY3RcIjtcblxuZXhwb3J0IGNsYXNzIERlbGV0ZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHRlbXBsYXRlID0gKHN0YXRlKSA9PlxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPSdkZWxldGVDb250YWluZXInPlxuICAgICAgPGgxPkFyZSB5b3Ugc3VyZT88L2gxPlxuICAgICAgPGRpdiBjbGFzcz0nYnV0dG9uc0NvbnRhaW5lcic+XG4gICAgICAgIDxidXR0b24gaWQ9J2NhbmNlbCc+R28gYmFjazwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkPSdjb25maXJtJz5ZZXMsIGRlbGV0ZSBpdDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcblxuICBET01lbGVtZW50KCkge1xuICAgIGxldCBlbGVtZW50ID0gc3VwZXIuRE9NZWxlbWVudCgpO1xuICAgIGxldCBjYW5jZWxCdG4gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsXCIpO1xuICAgIGxldCBjb25maXJtQnRuID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm1cIik7XG5cbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG1vZGFsLmhpZGUoKTtcbiAgICB9KTtcblxuICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUudG9kby5kZWxldGVUb2RvKHRoaXMuc3RhdGUudG9kbyk7XG4gICAgICBQcm9qZWN0LnNlbGVjdGVkLmNvbXBvbmVudC51cGRhdGUoKTtcbiAgICAgIG1vZGFsLmhpZGUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgZGVsZXRlVGFzayBmcm9tIFwiLi4vLi4vYXNzZXRzL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBlZGl0IGZyb20gXCIuLi8uLi9hc3NldHMvZWRpdC5zdmdcIjtcbmltcG9ydCBjaGVja2VkIGZyb20gXCIuLi8uLi9hc3NldHMvY2hlY2tlZC5zdmdcIjtcbmltcG9ydCB1bmNoZWNrZWQgZnJvbSBcIi4uLy4uL2Fzc2V0cy91bmNoZWNrZWQuc3ZnXCI7XG5cbmNsYXNzIE1pbmlDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICB0ZW1wbGF0ZSA9IChzdGF0ZSkgPT4gYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrTWluaUNvbnRhaW5lciAke3N0YXRlLnR5cGVDbGFzc31cIj5cbiAgICAgICR7c3RhdGUuaHRtbH1cbiAgICA8L2Rpdj5cbiAgYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWluaUNvbnRhaW5lckNvbXBvbmVudDtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL3Byb2plY3RcIjtcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi4vbW9kYWxcIjtcbmltcG9ydCBOZXJvcyBmcm9tIFwiLi4vTmVyb3NcIjtcbmltcG9ydCBQcm9qZWN0Q29tcG9uZW50IGZyb20gXCIuL1Byb2plY3RDb21wb25lbnRcIjtcblxuZXhwb3J0IGNsYXNzIE5ld1Byb2plY3RDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgdGVtcGxhdGUgPSAoKSA9PlxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPSduZXdQcm9qZWN0Q29udGFpbmVyJz5cbiAgICAgIDxoMT5DcmVhdGUgbmV3IFByb2plY3Q8L2gxPlxuICAgICAgPGZvcm0gY2xhc3M9J25ld0Zvcm0nPlxuICAgICAgICA8ZGl2IGNsYXNzPSdmaWVsZCBUaXRsZUZpZWxkJz5cbiAgICAgICAgPGxhYmVsIGZvcj0nVGl0bGUnPlByb2plY3QgVGl0bGU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nVGl0bGUnIGlkPSdUaXRsZSc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPSdjcmVhdGVCdXR0b24nIHR5cGU9J3N1Ym1pdCc+Q3JlYXRlPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgRE9NZWxlbWVudCgpIHtcbiAgICBsZXQgZWxlbWVudCA9IHN1cGVyLkRPTWVsZW1lbnQoKTtcbiAgICBsZXQgZm9ybSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmNyZWF0ZVByb2plY3QoZm9ybSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVQcm9qZWN0KGZvcm0pIHtcbiAgICBsZXQgdGl0bGUgPSBmb3JtLlRpdGxlLnZhbHVlO1xuICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xuICAgIE5lcm9zLnByb2plY3RzLnJlZ2lzdGVyQ29tcG9uZW50KHByb2plY3QuY29tcG9uZW50KTtcbiAgICAvLyBTZWxlY3QgbmV3bHkgY3JlYXRlZCBwcm9qZWN0XG4gICAgUHJvamVjdENvbXBvbmVudC5zZWxlY3RMYXN0UHJvamVjdCgpO1xuICAgIG1vZGFsLmhpZGUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi4vdG9kb1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL3Byb2plY3RcIjtcbmltcG9ydCBOZXJvcyBmcm9tIFwiLi4vTmVyb3NcIjtcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi4vbW9kYWxcIjtcblxuZXhwb3J0IGNsYXNzIE5ld1RvZG9Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICB0ZW1wbGF0ZSA9IChzdGF0ZSkgPT5cbiAgICBgXG4gICAgPGRpdiBjbGFzcz0nbmV3Q29udGFpbmVyJz5cbiAgICAgIDxoMSBjbGFzcz0nbmV3VGl0bGUnPkNyZWF0ZSB0b2RvPC9oMT5cbiAgICAgIDxmb3JtIGNsYXNzPSduZXdGb3JtJz5cbiAgICAgICAgPGRpdiBjbGFzcz0nZmllbGQgVGl0bGVGaWVsZCc+XG4gICAgICAgICAgPGxhYmVsIGZvcj0nVGl0bGUnPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nVGl0bGUnIGlkPSdUaXRsZScgdmFsdWU9XCIke1xuICAgICAgICAgICAgc3RhdGUudG9kbyA/IHN0YXRlLnRvZG8udGl0bGUgOiBcIlwiXG4gICAgICAgICAgfVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nZmllbGQgRHVlZGF0ZUZpZWxkJz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdEdWUgZGF0ZSc+RHVlIGRhdGU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdkYXRlJyBuYW1lPSdEdWVkYXRlJyBpZD0nRHVlIGRhdGUnIHZhbHVlPVwiJHtcbiAgICAgICAgICAgIHN0YXRlLnRvZG8gPyBzdGF0ZS50b2RvLmRhdGUgOiBcIlwiXG4gICAgICAgICAgfVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nZmllbGQgUHJpb3JpdHlGaWVsZCc+XG4gICAgICAgICAgPGxhYmVsIGZvcj0nUHJpb3JpdHknPlByaW9yaXR5PC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJQcmlvcml0eVwiIGlkPVwiUHJpb3JpdHlcIj5cbiAgICAgICAgICAgIDxvcHRpb24gaWQ9J3AxJyB2YWx1ZT1cIlVyZ2VudFwiPlVyZ2VudDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiBpZD0ncDInIHZhbHVlPVwiSGlnaFwiPkhpZ2g8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gaWQ9J3AzJyB2YWx1ZT1cIk1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiBpZD0ncDQnIHZhbHVlPVwiTG93XCI+TG93PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIGlkPSdwNScgdmFsdWU9XCJPcHRpb25hbFwiPk9wdGlvbmFsPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdmaWVsZCBEZXNjcmlwdGlvbkZpZWxkJz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdEZXNjcmlwdGlvbic+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdEZXNjcmlwdGlvbicgaWQ9J0Rlc2NyaXB0aW9uJyB2YWx1ZT1cIiR7XG4gICAgICAgICAgICBzdGF0ZS50b2RvID8gc3RhdGUudG9kby5kZXNjcmlwdGlvbiA6IFwiXCJcbiAgICAgICAgICB9XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPSdjcmVhdGVCdXR0b24nIHR5cGU9J3N1Ym1pdCc+JHtcbiAgICAgICAgICB0aGlzLnN0YXRlLnRvZG8gPyBcIkVkaXRcIiA6IFwiQ3JlYXRlXCJcbiAgICAgICAgfTwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgRE9NZWxlbWVudCgpIHtcbiAgICBsZXQgZWxlbWVudCA9IHN1cGVyLkRPTWVsZW1lbnQoKTtcbiAgICBsZXQgZm9ybSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgLy8gSWYgdGhlIHRvZG8gYWxyZWFkeSBleGlzdHMgKGVkaXQgbW9kZSkgbWFrZSB0aGUgYnV0dG9uIGVkaXQgdGhlIHRvZG8sIGVsc2UganVzdCBjcmVhdGUgYSBuZXcgdGFza1xuICAgIGlmICh0aGlzLnN0YXRlLnRvZG8pIHtcbiAgICAgIGxldCBzZWxlY3QgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCNQcmlvcml0eWApO1xuICAgICAgc2VsZWN0LnNlbGVjdGVkSW5kZXggPSB0aGlzLnN0YXRlLnRvZG8ucHJpb3JpdHkgLSAxO1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5lZGl0VG9kbyhmb3JtKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVRvZG8oZm9ybSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBlZGl0VG9kbyhmb3JtKSB7XG4gICAgbGV0IHRpdGxlID0gZm9ybS5UaXRsZS52YWx1ZTtcbiAgICBsZXQgZGF0ZSA9IGZvcm0uRHVlZGF0ZS52YWx1ZTtcbiAgICBsZXQgcHJpb3JpdHkgPSBmb3JtLlByaW9yaXR5LnNlbGVjdGVkSW5kZXggKyAxO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGZvcm0uRGVzY3JpcHRpb24udmFsdWU7XG4gICAgdGhpcy5zdGF0ZS50b2RvLmVkaXQodGl0bGUsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbik7XG4gICAgUHJvamVjdC5zZWxlY3RlZC5jb21wb25lbnQudXBkYXRlKCk7XG4gICAgbW9kYWwuaGlkZSgpO1xuICB9XG5cbiAgY3JlYXRlVG9kbyhmb3JtKSB7XG4gICAgbGV0IHRpdGxlID0gZm9ybS5UaXRsZS52YWx1ZTtcbiAgICBsZXQgZGF0ZSA9IGZvcm0uRHVlZGF0ZS52YWx1ZTtcbiAgICBsZXQgcHJpb3JpdHkgPSBmb3JtLlByaW9yaXR5LnNlbGVjdGVkSW5kZXggKyAxO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGZvcm0uRGVzY3JpcHRpb24udmFsdWU7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5wYXJlbnQpIHtcbiAgICAgIHRoaXMuc3RhdGUucGFyZW50LmNyZWF0ZVRvZG8odGl0bGUsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXcgVG9kbyh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBmYWxzZSk7XG4gICAgfVxuICAgIFByb2plY3Quc2VsZWN0ZWQuY29tcG9uZW50LnVwZGF0ZSgpO1xuICAgIG1vZGFsLmhpZGUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgTmVyb3MgZnJvbSBcIi4uL05lcm9zXCI7XG5pbXBvcnQgUHJpb3JpdHkgZnJvbSBcIi4uL3ByaW9yaXR5XCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCIuLi9zdG9yYWdlTWFuYWdlbWVudFwiO1xuXG5leHBvcnQgY2xhc3MgUHJpb3JpdHlDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICB0ZW1wbGF0ZSA9IChzdGF0ZSkgPT5cbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cInByaW9yaXR5XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHlDb2xvckNvbnRhaW5lclwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNvbG9yXCIgY2xhc3M9J3ByaW9yaXR5Q29sb3IgcGlja2VyJyB2YWx1ZT0nJHtzdGF0ZS5wcmlvcml0eS5jb2xvcn0nLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHAgY2xhc3M9XCJwcmlvcml0eU5hbWVcIj4ke3N0YXRlLnByaW9yaXR5Lm5hbWV9PC9wPlxuICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgRE9NZWxlbWVudCgpIHtcbiAgICBsZXQgZWxlbWVudCA9IHN1cGVyLkRPTWVsZW1lbnQoKTtcbiAgICBsZXQgcGlja2VyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBpY2tlclwiKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgcGlja2VyLmNsaWNrKCk7XG4gICAgfSk7XG5cbiAgICAvL0NoYW5nZSBwcmlvcml0eSBjb2xvciB3aGVuIHRoZSBjb2xvciBwaWNrZXIgY2hhbmdlc1xuICAgIHBpY2tlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlLnByaW9yaXR5LmNvbG9yID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBTdG9yYWdlLnNhdmVQcmlvcml0eURhdGEoKTtcbiAgICAgIFByb2plY3Quc2VsZWN0ZWQuY29tcG9uZW50LnVwZGF0ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgLy9UaGlzIG1ldGhvZCB1cGRhdGVzIGFuZCBkaXNwbGF5cyB0aGUgcHJpb3JpdGllcyBpbiB0aGUgc2lkZWJhclxuICBzdGF0aWMgZGlzcGxheVByaW9yaXRpZXMoKSB7XG4gICAgbGV0IHByaW9yaXR5TmVyb3MgPSBuZXcgTmVyb3MoXCJwcmlvcml0aWVzXCIpO1xuICAgIFByaW9yaXR5LnByaW9yaXRpZXMuZm9yRWFjaCgocHJpb3JpdHkpID0+IHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBuZXcgUHJpb3JpdHlDb21wb25lbnQocHJpb3JpdHkubmFtZSwge1xuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICB9KTtcbiAgICAgIHByaW9yaXR5TmVyb3MucmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgTmVyb3MgZnJvbSBcIi4uL05lcm9zXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi4vcHJvamVjdFwiO1xuaW1wb3J0IFRvZG9Db21wb25lbnQgZnJvbSBcIi4vVG9kb0NvbXBvbmVudFwiO1xuaW1wb3J0IGhlbHBlciBmcm9tIFwiLi4vaGVscGVyXCI7XG5pbXBvcnQgeyBQcmlvcml0eUNvbXBvbmVudCB9IGZyb20gXCIuL1ByaW9yaXR5Q29tcG9uZW50XCI7XG5cbmNsYXNzIFByb2plY3RDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzdGF0ZSkge1xuICAgIHN1cGVyKG5hbWUsIHN0YXRlKTtcbiAgfVxuXG4gIHN0YXRpYyByZXNldFZpZXcoKSB7XG4gICAgbGV0IHBlbmRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BlbmRpbmdUb2Rvc1wiKTtcbiAgICBsZXQgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wbGV0ZWRUb2Rvc1wiKTtcblxuICAgIHBlbmRpbmcuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb21wbGV0ZWQuaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxuXG4gIC8vIFRoaXMgbWV0aG9kIHNlbGVjdHMgdGhlIGxhc3QgcHJvamVjdCBjcmVhdGVkXG4gIHN0YXRpYyBzZWxlY3RMYXN0UHJvamVjdCgpIHtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdENvbnRhaW5lclwiKTtcbiAgICBpZiAocHJvamVjdC5sZW5ndGggPiAwKSB7XG4gICAgICBwcm9qZWN0W3Byb2plY3QubGVuZ3RoIC0gMV0uY2xpY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUHJvamVjdC5zZWxlY3RlZCA9IG51bGw7XG4gICAgICBQcm9qZWN0Q29tcG9uZW50LnJlc2V0VmlldygpO1xuICAgIH1cbiAgfVxuXG4gIHRlbXBsYXRlID0gKHN0YXRlKSA9PlxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdENvbnRhaW5lclwiPlxuICAgICAgPGgzPiR7c3RhdGUucHJvamVjdC5uYW1lfTwvaDM+XG4gICAgPC9kaXY+XG4gICAgYDtcblxuICAvLyBUaGlzIG1ldGhvZCBkaXNwbGF5cyBhbGwgdG9kb3MgYmVsb25naW5nIHRvIHRoaXMgcHJvamVjdFxuICBkaXNwbGF5VG9kb3Moc2VsZWN0b3IsIHByb2plY3RUb2Rvcykge1xuICAgIFByaW9yaXR5Q29tcG9uZW50LmRpc3BsYXlQcmlvcml0aWVzKCk7XG4gICAgY29uc3QgZWxlbWVudCA9IG5ldyBOZXJvcyhgJHtzZWxlY3Rvcn1Ub2Rvc2ApO1xuICAgIGxldCB0b2RvcyA9IGhlbHBlci5tZXJnZVNvcnQocHJvamVjdFRvZG9zKTtcblxuICAgIGlmICh0b2Rvcy5sZW5ndGggPiAwKSB7XG4gICAgICB0b2RvcyA9IHRvZG9zLm1hcChcbiAgICAgICAgKHRhc2ssIGluZGV4KSA9PlxuICAgICAgICAgIG5ldyBUb2RvQ29tcG9uZW50KGB0b2RvJHtpbmRleH1gLCB7XG4gICAgICAgICAgICB0YXNrOiB0YXNrLFxuICAgICAgICAgICAgc3VidGFza3M6IGhlbHBlci5tZXJnZVNvcnQodGFzay5jaGlsZHJlbiksXG4gICAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgIGVsZW1lbnQucmVnaXN0ZXJDb21wb25lbnQodG9kbyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC51cGRhdGVWaWV3KCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuZGlzcGxheVRvZG9zKFwiY29tcGxldGVkXCIsIHRoaXMuc3RhdGUucHJvamVjdC5jb21wbGV0ZWQpO1xuICAgIHRoaXMuZGlzcGxheVRvZG9zKFwicGVuZGluZ1wiLCB0aGlzLnN0YXRlLnByb2plY3QucGVuZGluZyk7XG4gIH1cblxuICBET01lbGVtZW50KCkge1xuICAgIHJldHVybiBzdXBlci5ET01lbGVtZW50KFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlSUQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgIFByb2plY3Quc2VsZWN0ZWQgPSB0aGlzLnN0YXRlLnByb2plY3Q7XG4gICAgICAvLyBSZXNldCB0aGUgYm9hcmQgYmVmb3JlIGRpc3BsYXlpbmcgdGhpcyBwcm9qZWN0IHRvZG9zXG4gICAgICBQcm9qZWN0Q29tcG9uZW50LnJlc2V0VmlldygpO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRoaXMgbWV0aG9kIHJlbW92ZXMgdGhlIGlkIGZyb20gdGhlIHByZXZpb3VzIGVsZW1lbnQgYW5kIGFzc2lnbnMgaXQgdG8gdGhlIGNsaWNrZWQgZWxlbWVudFxuICBoYW5kbGVJRCh0YXJnZXQpIHtcbiAgICBsZXQgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdGVkUHJvamVjdFwiKTtcbiAgICBpZiAoc2VsZWN0ZWQpIHNlbGVjdGVkLmlkID0gXCJcIjtcbiAgICB0YXJnZXQuaWQgPSBcInNlbGVjdGVkUHJvamVjdFwiO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RDb21wb25lbnQ7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9Db21wb25lbnRcIjtcbmltcG9ydCBNaW5pQ29udGFpbmVyQ29tcG9uZW50IGZyb20gXCIuL01pbmlDb250YWluZXJDb21wb25lbnRcIjtcbmltcG9ydCBQcmlvcml0eSBmcm9tIFwiLi4vcHJpb3JpdHlcIjtcbmltcG9ydCB7IHZpZXdUb2RvQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld1RvZG9Db21wb25lbnRcIjtcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi4vbW9kYWxcIjtcbmltcG9ydCB7IE5ld1RvZG9Db21wb25lbnQgfSBmcm9tIFwiLi9OZXdUb2RvQ29tcG9uZW50XCI7XG5pbXBvcnQgZGVsZXRlVGFzayBmcm9tIFwiLi4vLi4vYXNzZXRzL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBlZGl0IGZyb20gXCIuLi8uLi9hc3NldHMvZWRpdC5zdmdcIjtcbmltcG9ydCBjaGVja2VkIGZyb20gXCIuLi8uLi9hc3NldHMvY2hlY2tlZC5zdmdcIjtcbmltcG9ydCB1bmNoZWNrZWQgZnJvbSBcIi4uLy4uL2Fzc2V0cy91bmNoZWNrZWQuc3ZnXCI7XG5pbXBvcnQgeyBEZWxldGVDb21wb25lbnQgfSBmcm9tIFwiLi9EZWxldGVDb21wb25lbnRcIjtcblxuLy8gMS4tIElmIGEgYmlnIHRvZG8gaXMgY2hlY2tlZCwgaXRzIGNoaWxkcmVuIGFyZSBhbHNvIGNoZWNrZWQg4pyU77iPXG4vLyAyLi0gSWYgYWxsIHRoZSBzdWJ0b2RvcyBhcmUgY2hlY2tlZCwgdGhlIHBhcmVudCBpcyBhbHNvIGNoZWNrZWQg4pyU77iPXG4vLyAzLi0gSWYgYSBiaWcgdG9kbyBhbmQgaXRzIGNoaWxkcmVuIGFyZSBjaGVja2VkLCBidXQgb25lIG9mIHRoZSBjaGlsZHJlblxuLy8gaXMgdW5jaGVja2VkLCB0aGUgcGFyZW50IHRvZG8gd2lsbCBhbHNvIGJlIHVuY2hlY2tlZCDinJTvuI9cbi8vIDQuLSBJZiBhIGJpZyB0b2RvIGFuZCBpdHMgY2hpbGRyZW4gYXJlIGNoZWNrZWQsIGJ1dCB0aGUgcGFyZW50IGlzIHVuY2hlY2tlZCxcbi8vIGFsbCBpdHMgY2hpbGRyZW4gd2lsbCBhbHNvIGJlIHVuY2hlY2tlZCDinJTvuI9cblxuY2xhc3MgVGFza0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHN0YXRlKSB7XG4gICAgc3VwZXIobmFtZSwgc3RhdGUpO1xuICAgIC8vIENyZWF0ZSB0aGUgcHJpb3JpdHkgY29sb3IgaHRtbCBhbmQgY29sb3IsIEkgc2hvdWxkIHB1dCB0aGlzIGludG8gaXRzIG93biBjbGFzc1xuICAgIHRoaXMuY29sb3JIVE1MID0gKHByaW9yaXR5KSA9PlxuICAgICAgYDxkaXYgY2xhc3M9XCJwcmlvcml0eUNvbG9yXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAke3ByaW9yaXR5LmNvbG9yfVwiPjwvZGl2PmA7XG4gICAgdGhpcy5jb2xvck1pbmkgPSBuZXcgTWluaUNvbnRhaW5lckNvbXBvbmVudChcInByaW9yaXR5XCIsIHtcbiAgICAgIGh0bWw6IHRoaXMuY29sb3JIVE1MKFByaW9yaXR5LnByaW9yaXR5KHN0YXRlLnRvZG8ucHJpb3JpdHkpKSxcbiAgICAgIHR5cGVDbGFzczogXCJwcmlvcml0eUJ1dHRvbk1pbmlcIixcbiAgICB9KTtcbiAgICB0aGlzLnN0YXRlLnRvZG8uY29tcG9uZW50ID0gdGhpcztcbiAgICAvLyBJZiB0aGlzIHRvZG8gaXMgY2hlY2tlZCwgdGhlIGRvbSBlbGVtZW50IHdpbGwgaGF2ZSB0aGUgY2xhc3MgXCJjb21wbGV0ZWRUYXNrXCJcbiAgICBpZiAodGhpcy5zdGF0ZS50b2RvLmNoZWNrKSB0aGlzLnN0YXRlLmNsYXNzZXMucHVzaChcImNvbXBsZXRlZFRhc2tcIik7XG4gIH1cblxuICAvLyBDcmVhdGUgYWxsIHRoZSBzdGF0aWMgYnV0dG9ucyBuZWVkZWQgZm9yIGEgdGFzaywgdGhlc2UgYXJlbid0IGR5bmFtaWMgc2luY2UgYWxsIHRhc2tzIGhhdmUgdGhlIHNhbWUgYnV0dG9uc1xuICBzdGF0aWMgaW1nSFRNTCA9IChhY3Rpb25TVkcpID0+IGA8aW1nIGNsYXNzPVwidGFza0J1dHRvblwiIHNyYz0ke2FjdGlvblNWR30+YDtcbiAgc3RhdGljIGVkaXRNaW5pID0gbmV3IE1pbmlDb250YWluZXJDb21wb25lbnQoXCJlZGl0XCIsIHtcbiAgICBodG1sOiBUYXNrQ29tcG9uZW50LmltZ0hUTUwoZWRpdCksXG4gICAgdHlwZUNsYXNzOiBcImVkaXRCdXR0b25NaW5pXCIsXG4gIH0pO1xuICBzdGF0aWMgZGVsZXRlTWluaSA9IG5ldyBNaW5pQ29udGFpbmVyQ29tcG9uZW50KFwiZGVsZXRlXCIsIHtcbiAgICBodG1sOiBUYXNrQ29tcG9uZW50LmltZ0hUTUwoZGVsZXRlVGFzayksXG4gICAgdHlwZUNsYXNzOiBcImRlbGV0ZUJ1dHRvbk1pbmlcIixcbiAgfSk7XG5cbiAgLy8gUmV0dXJuIGEgbWluaUNvbnRhaW5lciB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIHN2ZyBmaWxlLCBjaGVja2VkIGlmIHRvZG8gaXNDaGVja2VkXG4gIC8vIHByb3BlcnR5IGlzIHRydWUsIHVuY2hlY2tlZCBvdGhlcndpc2UuXG4gIGNoZWNrTWluaSA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IE1pbmlDb250YWluZXJDb21wb25lbnQoXCJjaGVja1wiLCB7XG4gICAgICBodG1sOiBUYXNrQ29tcG9uZW50LmltZ0hUTUwodGhpcy5jaGVja1N0YXRlKCkpLFxuICAgICAgdHlwZUNsYXNzOiBcImNoZWNrQnV0dG9uTWluaVwiLFxuICAgIH0pO1xuICB9O1xuXG4gIC8vIFRoaXMgbWV0aG9kIGNoZWNrcyB0aGUgc3RhdGUgb2YgdGhlIGlzQ2hlY2tlZCBwcm9wZXJ0eSBmcm9tIHRvZG9zXG4gIGNoZWNrU3RhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUudG9kby5jaGVjayA/IGNoZWNrZWQgOiB1bmNoZWNrZWQ7XG4gIH07XG5cbiAgdGVtcGxhdGUgPSAoc3RhdGUpID0+XG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCIke3N0YXRlLmNsYXNzZXMuam9pbihcIiBcIil9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFza0RhdGFDb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tUaXRsZVwiPlxuICAgICAgICAgIDxwPiR7c3RhdGUudG9kby50aXRsZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1RpbWVcIj5cbiAgICAgICAgICA8cD41IGRheXMgbGVmdDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICBET01lbGVtZW50KCkge1xuICAgIGxldCBlbGVtZW50ID0gc3VwZXIuRE9NZWxlbWVudCgpO1xuICAgIHRoaXMudmlld0V2ZW50TGlzdGVuZXIoZWxlbWVudCk7XG4gICAgbGV0IGNoZWNrID0gdGhpcy5jaGVja01pbmkoKS5ET01lbGVtZW50KFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgdGhpcy5ldmVudEhhbmRsZXIoKS5jaGVja0J1dHRvblxuICAgICk7XG4gICAgbGV0IHByaW9yaXR5ID0gdGhpcy5jb2xvck1pbmkuRE9NZWxlbWVudChcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIHRoaXMuZXZlbnRIYW5kbGVyKCkucHJpb3JpdHlCdXR0b25cbiAgICApO1xuICAgIGxldCBlZGl0ID0gVGFza0NvbXBvbmVudC5lZGl0TWluaS5ET01lbGVtZW50KFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgdGhpcy5ldmVudEhhbmRsZXIoKS5lZGl0QnV0dG9uXG4gICAgKTtcbiAgICBsZXQgZGVsZXRlQnRuID0gVGFza0NvbXBvbmVudC5kZWxldGVNaW5pLkRPTWVsZW1lbnQoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICB0aGlzLmV2ZW50SGFuZGxlcigpLmRlbGV0ZUJ1dHRvblxuICAgICk7XG5cbiAgICBlbGVtZW50LnByZXBlbmQocHJpb3JpdHkpO1xuICAgIGVsZW1lbnQucHJlcGVuZChjaGVjayk7XG4gICAgZWxlbWVudC5hcHBlbmQoZWRpdCk7XG4gICAgZWxlbWVudC5hcHBlbmQoZGVsZXRlQnRuKTtcbiAgICB0aGlzLnN0YXRlLnRvZG8uZG9tRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICB2aWV3RXZlbnRMaXN0ZW5lcihlbGVtZW50KSB7XG4gICAgbGV0IGlubmVyQ29udGFpbmVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tEYXRhQ29udGFpbmVyXCIpO1xuICAgIGlubmVyQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmV2ZW50SGFuZGxlcigpLnZpZXdCdXR0b24pO1xuICB9XG5cbiAgY2hlY2tDaGlsZHJlbigpIHtcbiAgICB0aGlzLnN0YXRlLnRvZG8uY2hpbGRyZW4uZm9yRWFjaCgoc3VidGFzaykgPT4ge1xuICAgICAgc3VidGFzay5jaGVja1RvZG8oKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVuY2hlY2tDaGlsZHJlbigpIHtcbiAgICB0aGlzLnN0YXRlLnRvZG8uY2hpbGRyZW4uZm9yRWFjaCgoc3VidGFzaykgPT4ge1xuICAgICAgc3VidGFzay51bmNoZWNrVG9kbygpO1xuICAgIH0pO1xuICB9XG5cbiAgY2hlY2tQYXJlbnQoKSB7XG4gICAgbGV0IHBhcmVudCA9IHRoaXMuc3RhdGUudG9kby5wYXJlbnQ7XG4gICAgcGFyZW50LmNoZWNrVG9kbygpO1xuICB9XG5cbiAgdW5jaGVja1BhcmVudCgpIHtcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5zdGF0ZS50b2RvLnBhcmVudDtcbiAgICBwYXJlbnQudW5jaGVja1RvZG8oKTtcbiAgfVxuXG4gIC8vQ2hlY2sgaWYgdGhlIHN1YnRhc2tzIGFycmF5IGNvbnRhaW5zIG9ubHkgY29tcGxldGVkIHRhc2tzXG4gIGFyZVN1YnRhc2tzQ29tcGxldGVkKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnRvZG8uaXNTdWJ0YXNrKCkpIHtcbiAgICAgIGxldCBzdWJ0YXNrcyA9IHRoaXMuc3RhdGUudG9kby5wYXJlbnQuY2hpbGRyZW47XG4gICAgICByZXR1cm4gc3VidGFza3MuZXZlcnkoKHN1YnRhc2spID0+IHN1YnRhc2suY2hlY2spO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBldmVudEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoZWNrQnV0dG9uOiAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRvZG8uY2hlY2spIHtcbiAgICAgICAgICAvLyBJZiB0aGUgYmlnIHRvZG8gaXMgY29tcGxldGVkIGFuZCBhIHN1YnRhc2sgaXMgdW5jaGVja2VkLCB0aGUgYmlnXG4gICAgICAgICAgLy8gdG9kbyBpcyB1bmNoZWNrZWRcbiAgICAgICAgICBpZiAodGhpcy5hcmVTdWJ0YXNrc0NvbXBsZXRlZCgpICYmIHRoaXMuc3RhdGUudG9kby5pc1N1YnRhc2soKSlcbiAgICAgICAgICAgIHRoaXMudW5jaGVja1BhcmVudCgpO1xuICAgICAgICAgIHRoaXMuc3RhdGUudG9kby51bmNoZWNrVG9kbygpO1xuICAgICAgICAgIC8vIElmIHRoZSBiaWcgdG9kbyBpcyB1bmNoZWNrZWQsIG1hcmsgYWxsIGl0cyBjaGlsZHJlbiB1bmNoZWNrZWRcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50b2RvLmNoaWxkcmVuKSB0aGlzLnVuY2hlY2tDaGlsZHJlbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3RhdGUudG9kby5jaGVja1RvZG8oKTtcbiAgICAgICAgICAvLyBJZiBhbGwgdGhlIHN1YnN0YXNrcyBhcmUgY29tcGxldGVkLCBtYXJrIGNoZWNrZWQgdGhlIGJpZyB0b2RvXG4gICAgICAgICAgaWYgKHRoaXMuYXJlU3VidGFza3NDb21wbGV0ZWQoKSAmJiB0aGlzLnN0YXRlLnRvZG8uaXNTdWJ0YXNrKCkpXG4gICAgICAgICAgICB0aGlzLmNoZWNrUGFyZW50KCk7XG4gICAgICAgICAgLy8gSWYgdGhlIGJpZyB0b2RvIGlzIGNoZWNrZWQsIG1hcmsgYWxsIGl0cyBjaGlsZHJlbiBjaGVja2VkXG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUudG9kby5jaGlsZHJlbikgdGhpcy5jaGVja0NoaWxkcmVuKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB2aWV3QnV0dG9uOiAoKSA9PiB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBuZXcgdmlld1RvZG9Db21wb25lbnQoXCJ0YXNrVmlld1wiLCB7XG4gICAgICAgICAgdG9kbzogdGhpcy5zdGF0ZS50b2RvLFxuICAgICAgICB9KTtcbiAgICAgICAgbW9kYWwuc2hvdyhjb21wb25lbnQpO1xuICAgICAgfSxcbiAgICAgIGVkaXRCdXR0b246ICgpID0+IHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5ldyBOZXdUb2RvQ29tcG9uZW50KFwidGFza0VkaXRcIiwge1xuICAgICAgICAgIHRvZG86IHRoaXMuc3RhdGUudG9kbyxcbiAgICAgICAgfSk7XG4gICAgICAgIG1vZGFsLnNob3coY29tcG9uZW50KTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVCdXR0b246ICgpID0+IHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5ldyBEZWxldGVDb21wb25lbnQoXCJkZWxldGVcIiwge1xuICAgICAgICAgIHRvZG86IHRoaXMuc3RhdGUudG9kbyxcbiAgICAgICAgfSk7XG4gICAgICAgIG1vZGFsLnNob3coY29tcG9uZW50KTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFza0NvbXBvbmVudDtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xuaW1wb3J0IE5lcm9zIGZyb20gXCIuLi9OZXJvc1wiO1xuaW1wb3J0IFRhc2tDb21wb25lbnQgZnJvbSBcIi4vVGFza0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmV3VG9kb0NvbXBvbmVudCB9IGZyb20gXCIuL05ld1RvZG9Db21wb25lbnRcIjtcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi4vbW9kYWxcIjtcbmltcG9ydCB7IGFkZCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jbGFzcyBUb2RvQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1vdmVUb0NvbXBsZXRlZChlbGVtZW50KSB7XG4gICAgbGV0IGNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcGxldGVkVG9kb3NcIik7XG4gICAgY29tcGxldGVkLmFwcGVuZChlbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIG1vdmVUb1BlbmRpbmcoZWxlbWVudCkge1xuICAgIGxldCBwZW5kaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwZW5kaW5nVG9kb3NcIik7XG4gICAgcGVuZGluZy5hcHBlbmQoZWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHN0YXRlKSB7XG4gICAgc3VwZXIobmFtZSwgc3RhdGUpO1xuICAgIHRoaXMuY3JlYXRlVGFza0NvbXBvbmVudHMoKTtcbiAgfVxuXG4gIHRlbXBsYXRlID0gKHN0YXRlKSA9PlxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwidGFza0NvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInN1YnRhc2tzQ29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9J2FkZFN1YnRhc2snPisgQWRkIFN1YnRhc2s8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIC8vIFRoaXMgbWV0aG9kIHRha2VzIHRoZSBzdGF0ZSB0YXNrcyBhbmQgc3VidGFza3MgYW5kIGNvbnZlcnRzIHRoZW0gaW50byBUYXNrQ29tcG9uZW50cyxcbiAgLy8gdGhlbiBhc3NpZ24gdGhvc2UgY29tcG9uZW50cyB0byBiZSB0aGUgbmV3IHZhbHVlcyBmb3Igc3RhdGUgdGFza3MgYW5kIHN1YnRhc2tzLlxuICBjcmVhdGVUYXNrQ29tcG9uZW50cygpIHtcbiAgICAvLyBJIGRvbid0IGtub3cgaWYgdGhpcyBzaG91bGQgZ28gaGVyZSwgYnV0IGFsbCB0aGlzIGRvZXMgaXMgY29udmVydCB0aGUgdG9kbyBvYmplY3RcbiAgICAvLyBpbiB0aGUgc3RhdGUgb2JqZWN0IGFuZCB0dXJuIGl0IGludG8gYSB0YXNrQ29tcG9uZW50LCByZWFkeSB0byBiZSB1c2VkLlxuICAgIHRoaXMuc3RhdGUudGFza0RPTSA9IG5ldyBUYXNrQ29tcG9uZW50KFwidGFza1wiLCB7XG4gICAgICB0b2RvOiB0aGlzLnN0YXRlLnRhc2ssXG4gICAgICBjbGFzc2VzOiBbXCJ0YXNrXCJdLFxuICAgIH0pLkRPTWVsZW1lbnQoKTtcbiAgICAvLyBUaGlzIHRha2VzIHRoZSBjaGlsZHJlbiBhcnJheSBhbmQgYXBwbGllcyB0aGUgc2FtZSBwcm9jZXNzIGFib3ZlIHRvIGVhY2ggdGFza1xuICAgIHRoaXMuc3RhdGUuc3VidGFza3NET00gPSB0aGlzLnN0YXRlLnN1YnRhc2tzLm1hcCgodGFzaykgPT5cbiAgICAgIG5ldyBUYXNrQ29tcG9uZW50KFwic3VidGFza1wiLCB7XG4gICAgICAgIHRvZG86IHRhc2ssXG4gICAgICAgIGNsYXNzZXM6IFtcInRhc2tcIiwgXCJzdWJ0YXNrXCJdLFxuICAgICAgfSkuRE9NZWxlbWVudCgpXG4gICAgKTtcbiAgfVxuXG4gIC8vIFRoaXMgbWV0aG9kIHRha2VzIHRoZSBidXR0b24gZWxlbWVudCBhbmQgYWRkcyB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gY3JlYXRlIGEgc3VidGFza1xuICBhZGRTdWJ0YXNrKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5zaG93TW9kYWwodGhpcy5zdGF0ZS50YXNrKTtcbiAgICB9KTtcbiAgfVxuXG4gIERPTWVsZW1lbnQoKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBzdXBlci5ET01lbGVtZW50KCk7XG4gICAgbGV0IHN1YnRhc2sgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VidGFza3NDb250YWluZXJcIik7XG4gICAgbGV0IGJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRTdWJ0YXNrXCIpO1xuICAgIHRoaXMuYWRkU3VidGFzayhidXR0b24pO1xuXG4gICAgZWxlbWVudC5wcmVwZW5kKHRoaXMuc3RhdGUudGFza0RPTSk7XG4gICAgdGhpcy5zdGF0ZS5zdWJ0YXNrc0RPTS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBzdWJ0YXNrLmluc2VydEJlZm9yZSh0YXNrLCBidXR0b24pO1xuICAgIH0pO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc2hvd01vZGFsKHBhcmVudCkge1xuICAgIGxldCBuZXdUb2RvID0gbmV3IE5ld1RvZG9Db21wb25lbnQoXCJuZXdUb2RvXCIsIHsgcGFyZW50OiBwYXJlbnQgfSk7XG4gICAgbW9kYWwuc2hvdyhuZXdUb2RvKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvQ29tcG9uZW50O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgbW9kYWwgZnJvbSBcIi4uL21vZGFsXCI7XG5pbXBvcnQgVGFza0NvbXBvbmVudCBmcm9tIFwiLi9UYXNrQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBjbGFzcyB2aWV3VG9kb0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHRlbXBsYXRlID0gKHN0YXRlKSA9PlxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPSdpbmZvQ29udGFpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3M9J21haW5UYXNrQ29udGFpbmVyJz5cbiAgICAgICAgPGgxIGNsYXNzPSd2aWV3VGl0bGUnPiR7c3RhdGUudG9kby50aXRsZX08L2gxPlxuICAgICAgICA8aHI+XG4gICAgICAgIDxkaXYgY2xhc3M9J2Rlc2NyaXB0aW9uVmlld0NvbnRhaW5lcic+XG4gICAgICAgICAgPHAgY2xhc3M9J3ZpZXdEZXNjcmlwdGlvbic+JHtzdGF0ZS50b2RvLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J3RvZG9EYXRhQ29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdkYXRlVmlld0NvbnRhaW5lcic+XG4gICAgICAgICAgICA8aDM+RHVlIGRhdGU8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZGF0ZVN0cmluZ0NvbnRhaW5lcic+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPSdkYXRlVmlldyc+MDEvMDEvMjAyMzwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9J3RpbWVMZWZ0Vmlldyc+KDQgZGF5cyBsZWZ0KTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9J3ByaW9yaXR5Vmlld0NvbnRhaW5lcic+XG4gICAgICAgICAgICA8aDM+UHJpb3JpdHk8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0nc2VwYXJhdG9yJz48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9J3ZpZXdTdWJDb250YWluZXInPlxuICAgICAgICA8aDEgY2xhc3M9J2xpbmtlZFRhc2tIZWFkZXInPiR7XG4gICAgICAgICAgc3RhdGUudG9kby5pc1N1YnRhc2soKSA/IFwiUGFyZW50XCIgOiBcIlN1YnRhc2tzXCJcbiAgICAgICAgfTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3M9J2xpbmtlZFRhc2tzQ29udGFpbmVyJz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICBET01lbGVtZW50KCkge1xuICAgIGxldCBlbGVtZW50ID0gc3VwZXIuRE9NZWxlbWVudCgpO1xuICAgIGxldCBzdWJ0YXNrQ29udGFpbmVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpbmtlZFRhc2tzQ29udGFpbmVyXCIpO1xuICAgIGlmICghdGhpcy5zdGF0ZS50b2RvLmlzU3VidGFzaygpKSB7XG4gICAgICB0aGlzLnN0YXRlLnRvZG8uY2hpbGRyZW4uZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBsZXQgdGFza0RPTSA9IG5ldyBUYXNrQ29tcG9uZW50KFwic3VidGFza1wiLCB7XG4gICAgICAgICAgdG9kbzogdGFzayxcbiAgICAgICAgICBjbGFzc2VzOiBbXCJ0YXNrXCIsIFwic3VidGFza1wiXSxcbiAgICAgICAgfSkuRE9NZWxlbWVudCgpO1xuICAgICAgICB0YXNrRE9NLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgY2hlY2sgbWluaWNvbnRhaW5lciBzbyB1c2VycyB3b250IGJlIGFibGUgdG8gY2hlY2sgdGhlIHRvZG8gZnJvbSB0aGUgbW9kYWxcbiAgICAgICAgc3VidGFza0NvbnRhaW5lci5hcHBlbmQodGFza0RPTSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHBhcmVudERPTSA9IG5ldyBUYXNrQ29tcG9uZW50KFwidG9kb1wiLCB7XG4gICAgICAgIHRvZG86IHRoaXMuc3RhdGUudG9kby5wYXJlbnQsXG4gICAgICAgIGNsYXNzZXM6IFtcInRhc2sgc3VidGFza1wiXSxcbiAgICAgIH0pLkRPTWVsZW1lbnQoKTtcbiAgICAgIHBhcmVudERPTS5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgLy8gUmVtb3ZlIHRoZSBjaGVjayBtaW5pY29udGFpbmVyIHNvIHVzZXJzIHdvbnQgYmUgYWJsZSB0byBjaGVjayB0aGUgdG9kbyBmcm9tIHRoZSBtb2RhbFxuICAgICAgc3VidGFza0NvbnRhaW5lci5hcHBlbmQocGFyZW50RE9NKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBsaW5rZWRUYXNrcygpIHt9XG59XG4iLCJpbXBvcnQgeyBlbCB9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBQcm9qZWN0Q29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvUHJvamVjdENvbXBvbmVudFwiO1xuaW1wb3J0IE5lcm9zIGZyb20gXCIuL05lcm9zXCI7XG5pbXBvcnQgUHJpb3JpdHkgZnJvbSBcIi4vcHJpb3JpdHlcIjtcbmltcG9ydCB7IFByaW9yaXR5Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9Qcmlvcml0eUNvbXBvbmVudFwiO1xuXG5jb25zdCBoZWxwZXIgPSAoKCkgPT4ge1xuICAvLyBUaGlzIG1ldGhvZCBmaW5kcyB0aGUgZWxlbWVudCBtYXRjaGluZyB0aGUgSUQgb24gdGhlIGdpdmVuIGFycmF5IGFuZCBkZWxldGVzIGl0IGJ5IGluZGV4XG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoYXJyYXksIGlkKSA9PiB7XG4gICAgbGV0IGZvdW5kID0gZmluZFRhc2soWy4uLmFycmF5XSwgaWQpO1xuICAgIGxldCBmb3VuZEluZGV4ID0gYXJyYXkuaW5kZXhPZihmb3VuZCk7XG4gICAgZm91bmRJbmRleCA9PT0gMCA/IGFycmF5LnNoaWZ0KCkgOiBhcnJheS5zcGxpY2UoZm91bmRJbmRleCwgMSk7XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9O1xuXG4gIC8vIEdpdmVuIGFuIGFycmF5IG9mIHRvZG9zIGFuZCBhbiBpZCwgdGhpcyBtZXRob2Qgd2lsbCByZWN1cnNpdmVseSBmaW5kIHRoZSB0b2RvXG4gIGNvbnN0IGZpbmRUYXNrID0gKHF1ZXVlLCBpZCkgPT4ge1xuICAgIGxldCBjdXJyZW50ID0gcXVldWVbMF07XG4gICAgaWYgKGN1cnJlbnQuaWQgPT09IGlkKSByZXR1cm4gY3VycmVudDtcbiAgICBxdWV1ZS5zaGlmdCgpO1xuXG4gICAgaWYgKCFjdXJyZW50LmlzU3VidGFzaygpKSBxdWV1ZSA9IFsuLi5xdWV1ZSwgLi4uY3VycmVudC5jaGlsZHJlbl07XG4gICAgcmV0dXJuIGZpbmRUYXNrKHF1ZXVlLCBpZCk7XG4gIH07XG5cbiAgLy8gTWVyZ2Ugc29ydCBhbGdvcml0aG1cblxuICBjb25zdCBtZXJnZVNvcnQgPSAoYXJyYXkpID0+IHtcbiAgICBpZiAoYXJyYXkubGVuZ3RoIDwgMSkgcmV0dXJuIGFycmF5O1xuICAgIGxldCBzb3J0ZWRBcnJheSA9IFtdO1xuICAgIGlmIChhcnJheS5sZW5ndGggPCAyKSB7XG4gICAgICBzb3J0ZWRBcnJheS5wdXNoKGFycmF5WzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGhhbGYgPSBNYXRoLmZsb29yKGFycmF5Lmxlbmd0aCAvIDIpO1xuICAgICAgbGV0IGFycmF5MSA9IG1lcmdlU29ydChhcnJheS5zcGxpY2UoMCwgaGFsZikpO1xuICAgICAgbGV0IGFycmF5MiA9IG1lcmdlU29ydChhcnJheSk7XG4gICAgICBsZXQgY291bnRlciA9IGFycmF5MS5sZW5ndGggKyBhcnJheTIubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50ZXI7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKGFycmF5MS5sZW5ndGggPT09IDAgfHwgYXJyYXkyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHNvcnRlZEFycmF5ID0gc29ydGVkQXJyYXkuY29uY2F0KGFycmF5MS5jb25jYXQoYXJyYXkyKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFycmF5MVswXS5wcmlvcml0eSA8IGFycmF5MlswXS5wcmlvcml0eSkge1xuICAgICAgICAgIHNvcnRlZEFycmF5LnB1c2goYXJyYXkxLnNoaWZ0KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvcnRlZEFycmF5LnB1c2goYXJyYXkyLnNoaWZ0KCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzb3J0ZWRBcnJheTtcbiAgfTtcblxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gJ2NsZWFyIGNvbXBsZXRlZCcgYnV0dG9uLCB0aGlzIHNob3VsZG4ndCBiZSBoZXJlIGJ1dFxuICAvLyBJIGRvbid0IHRoaW5rIGl0J3Mgd29ydGggY3JlYXRpbmcgYSBuZXcgbW9kdWxlIGp1c3QgZm9yIHRoaXMuXG4gIGxldCBjbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xlYXJDb21wbGV0ZWRcIik7XG4gIGNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKFByb2plY3Quc2VsZWN0ZWQpIHtcbiAgICAgIGxldCBwcm9qZWN0ID0gUHJvamVjdC5zZWxlY3RlZDtcbiAgICAgIGxldCBwcm9qZWN0Q29tcG9uZW50ID0gcHJvamVjdC5jb21wb25lbnQ7XG5cbiAgICAgIFByb2plY3RDb21wb25lbnQucmVzZXRWaWV3KCk7XG4gICAgICBwcm9qZWN0LmNsZWFyQ29tcGxldGVkVG9kb3MoKTtcbiAgICAgIHByb2plY3RDb21wb25lbnQuZGlzcGxheVRvZG9zKFwiY29tcGxldGVkXCIsIHByb2plY3QuY29tcGxldGVkKTtcbiAgICAgIHByb2plY3RDb21wb25lbnQuZGlzcGxheVRvZG9zKFwicGVuZGluZ1wiLCBwcm9qZWN0LnBlbmRpbmcpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvICdEZWxldGUgdGhpcyBwcm9qZWN0JyBidXR0b25cbiAgbGV0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlbGV0ZVByb2plY3RcIik7XG4gIGRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoUHJvamVjdC5zZWxlY3RlZCkge1xuICAgICAgTmVyb3MuZGVsZXRlTmVyb3NDb21wb25lbnQoTmVyb3MucHJvamVjdHMsIFByb2plY3Quc2VsZWN0ZWQuY29tcG9uZW50KTtcbiAgICAgIFByb2plY3QuZGVsZXRlUHJvamVjdChQcm9qZWN0LnNlbGVjdGVkKTtcbiAgICB9XG4gIH0pO1xuXG4gIGxldCByZXNldFByaW9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc2V0UHJpb3JpdGllc1wiKTtcbiAgcmVzZXRQcmlvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgUHJpb3JpdHkucmVzZXRDb2xvdXJzKCk7XG4gICAgUHJpb3JpdHlDb21wb25lbnQuZGlzcGxheVByaW9yaXRpZXMoKTtcbiAgICBpZiAoUHJvamVjdC5zZWxlY3RlZCkgUHJvamVjdC5zZWxlY3RlZC5jb21wb25lbnQudXBkYXRlKCk7XG4gIH0pO1xuXG4gIHJldHVybiB7IGRlbGV0ZUl0ZW0sIGZpbmRUYXNrLCBtZXJnZVNvcnQgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGhlbHBlcjtcbiIsImNvbnN0IGlkQXNzaWduZXIgPSAoKCkgPT4ge1xuICBsZXQgYXNzaWduZXIgPSAxO1xuXG4gIGNvbnN0IGdldElkTnVtYmVyID0gKCkgPT4ge1xuICAgIGFzc2lnbmVyICs9IDE7XG4gICAgcmV0dXJuIGFzc2lnbmVyIC0gMTtcbiAgfTtcblxuICByZXR1cm4geyBnZXRJZE51bWJlciB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaWRBc3NpZ25lcjtcbiIsImltcG9ydCBOZXJvcyBmcm9tIFwiLi9OZXJvc1wiO1xuaW1wb3J0IHsgTmV3VG9kb0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvTmV3VG9kb0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmV3UHJvamVjdENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvTmV3UHJvamVjdENvbXBvbmVudFwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jb25zdCBtb2RhbCA9ICgoKSA9PiB7XG4gIGxldCBtb2RhbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsXCIpO1xuICBsZXQgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsQ29udGFpbmVyXCIpO1xuICBsZXQgYWRkVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkQmlnVG9kb1wiKTtcbiAgbGV0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFByb2plY3RcIik7XG5cbiAgY29uc3QgaGlkZSA9ICgpID0+IHtcbiAgICBtb2RhbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICByZXNldE1vZGFsKCk7XG4gIH07XG5cbiAgY29uc3Qgc2hvdyA9IChjb21wb25lbnQpID0+IHtcbiAgICBsZXQgbW9kYWwgPSBuZXcgTmVyb3MoXCJtb2RhbENvbnRhaW5lclwiKTtcbiAgICBtb2RhbC5yZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQpO1xuICAgIG1vZGFsRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIG1vZGFsRWxlbWVudC5mb2N1cygpO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0TW9kYWwgPSAoKSA9PiB7XG4gICAgbW9kYWxDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgfTtcblxuICAvLyBIaWRlIG1vZGFsIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG91dHNpZGVcbiAgbW9kYWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsRWxlbWVudCkge1xuICAgICAgaGlkZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgbW9kYWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIGhpZGUoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFNob3cgbW9kYWwgd2l0aCBuZXcgdG9kbyBmb3JtIHdoZW4gdGhlICdhZGQgbmV3IHRvZG8nIGJ1dHRvbiBpcyBjbGlja2VkXG4gIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgbmV3VG9kbyA9IG5ldyBOZXdUb2RvQ29tcG9uZW50KFwibmV3VG9kb1wiLCB7IHBhcmVudDogbnVsbCB9KTtcbiAgICBpZiAoUHJvamVjdC5zZWxlY3RlZCkge1xuICAgICAgc2hvdyhuZXdUb2RvKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byAnQWRkIG5ldyBwcm9qZWN0JyBidXR0b25cblxuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgTmV3UHJvamVjdENvbXBvbmVudChcIm5ld1Byb2plY3RcIik7XG5cbiAgICBzaG93KG5ld1Byb2plY3QpO1xuICB9KTtcblxuICAvLyBBZGQgdmlldyBldmVudCBsaXN0ZW5lciB0byB0YXNrc1xuXG4gIHJldHVybiB7XG4gICAgaGlkZSxcbiAgICBzaG93LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kYWw7XG4iLCJpbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZU1hbmFnZW1lbnRcIjtcblxuY2xhc3MgUHJpb3JpdHkge1xuICAjbmFtZTtcbiAgI251bWJlcjtcbiAgY29sb3I7XG5cbiAgc3RhdGljICNwcmlvcml0aWVzQXJyYXkgPSBbXG4gICAgbmV3IFByaW9yaXR5KFwiVXJnZW50XCIsIDEsIFwiI0U4MTYxNlwiKSxcbiAgICBuZXcgUHJpb3JpdHkoXCJIaWdoXCIsIDIsIFwiI0VGNTUxM1wiKSxcbiAgICBuZXcgUHJpb3JpdHkoXCJNZWRpdW1cIiwgMywgXCIjRjNERDExXCIpLFxuICAgIG5ldyBQcmlvcml0eShcIkxvd1wiLCA0LCBcIiMyMkM1MUZcIiksXG4gICAgbmV3IFByaW9yaXR5KFwiT3B0aW9uYWxcIiwgNSwgXCIjMjMzNkUwXCIpLFxuICBdO1xuXG4gIHN0YXRpYyAjZGVmYXVsdENvbG91cnMgPSBbXG4gICAgXCIjRTgxNjE2XCIsXG4gICAgXCIjRUY1NTEzXCIsXG4gICAgXCIjRjNERDExXCIsXG4gICAgXCIjMjJDNTFGXCIsXG4gICAgXCIjMjMzNkUwXCIsXG4gIF07XG5cbiAgc3RhdGljIHJlc2V0Q29sb3VycygpIHtcbiAgICBQcmlvcml0eS4jcHJpb3JpdGllc0FycmF5LmZvckVhY2goKHByaW9yaXR5LCBpbmRleCkgPT4ge1xuICAgICAgcHJpb3JpdHkuY29sb3IgPSBQcmlvcml0eS4jZGVmYXVsdENvbG91cnNbaW5kZXhdO1xuICAgIH0pO1xuICAgIFN0b3JhZ2Uuc2F2ZVByaW9yaXR5RGF0YSgpO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcmlvcml0aWVzKCkge1xuICAgIHJldHVybiBbLi4uUHJpb3JpdHkuI3ByaW9yaXRpZXNBcnJheV07XG4gIH1cblxuICBzdGF0aWMgcHJpb3JpdHkobnVtYmVyKSB7XG4gICAgcmV0dXJuIFByaW9yaXR5LiNwcmlvcml0aWVzQXJyYXlbbnVtYmVyIC0gMV07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihuYW1lLCBudW1iZXIsIGNvbG9yKSB7XG4gICAgdGhpcy4jbmFtZSA9IG5hbWU7XG4gICAgdGhpcy4jbnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLiNuYW1lO1xuICB9XG5cbiAgZ2V0IG51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy4jbnVtYmVyO1xuICB9XG5cbiAgc2V0IGNvbG9yKGNvbG9yKSB7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaW9yaXR5O1xuIiwiLyogMS4tIElmIGEgdG9kbydzIGlzIGEgcGFyZW50LCB0aGV5IGdldCBhZGRlZCB0byB0aGUgcGVuZGluZyB0YXNrcyB3aGVuIGNyZWF0ZWRcbiAgIDIuLSBTb3J0IHRoZSBwZW5kaW5nIHRhc2tzIGFycmF5IGJ5IHByaW9yaXR5LCBhbmQgc29ydCB0aGUgY2hpbGRyZW4gYXJyYXkgYnkgcHJpb3JpdHkgYXMgd2VsbCAqL1xuXG5pbXBvcnQgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IFByb2plY3RDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Qcm9qZWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgTmVyb3MgZnJvbSBcIi4vTmVyb3NcIjtcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlTWFuYWdlbWVudFwiO1xuY2xhc3MgUHJvamVjdCB7XG4gICNwZW5kaW5nVGFza3M7XG4gICNjb21wbGV0ZWRUYXNrcztcblxuICBzdGF0aWMgcHJvamVjdHMgPSBbXTtcblxuICBzdGF0aWMgc2VsZWN0ZWQ7XG5cbiAgY29uc3RydWN0b3IobmFtZSwgZmlyc3RMb2FkID0gZmFsc2UpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29tcG9uZW50ID0gbmV3IFByb2plY3RDb21wb25lbnQobmFtZSwgeyBwcm9qZWN0OiB0aGlzIH0pO1xuICAgIHRoaXMuI3BlbmRpbmdUYXNrcyA9IFtdO1xuICAgIHRoaXMuI2NvbXBsZXRlZFRhc2tzID0gW107XG4gICAgdGhpcy5maXJzdExvYWQgPSBmaXJzdExvYWQ7XG4gICAgUHJvamVjdC5wcm9qZWN0cy5wdXNoKHRoaXMpO1xuICAgIGlmICghdGhpcy5maXJzdExvYWQpIHtcbiAgICAgIFN0b3JhZ2Uuc2F2ZURhdGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maXJzdExvYWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnZXQgcGVuZGluZygpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuI3BlbmRpbmdUYXNrc107XG4gIH1cblxuICBnZXQgY29tcGxldGVkKCkge1xuICAgIHJldHVybiBbLi4udGhpcy4jY29tcGxldGVkVGFza3NdO1xuICB9XG5cbiAgYWRkUGVuZGluZyhpdGVtKSB7XG4gICAgdGhpcy4jcGVuZGluZ1Rhc2tzLnB1c2goaXRlbSk7XG4gIH1cblxuICBhZGRDb21wbGV0ZWQoaXRlbSkge1xuICAgIHRoaXMuI2NvbXBsZXRlZFRhc2tzLnB1c2goaXRlbSk7XG4gIH1cblxuICBjb21wbGV0ZVRvZG8odG9kbykge1xuICAgIGxldCBmb3VuZEluZGV4ID0gdGhpcy4jcGVuZGluZ1Rhc2tzLmluZGV4T2YodG9kbyk7XG4gICAgdGhpcy4jcGVuZGluZ1Rhc2tzLnNwbGljZShmb3VuZEluZGV4LCAxKTtcbiAgICB0aGlzLmFkZENvbXBsZXRlZCh0b2RvKTtcbiAgfVxuXG4gIHJlc3VtZVRvZG8odG9kbykge1xuICAgIGxldCBmb3VuZEluZGV4ID0gdGhpcy4jY29tcGxldGVkVGFza3MuaW5kZXhPZih0b2RvKTtcbiAgICB0aGlzLiNjb21wbGV0ZWRUYXNrcy5zcGxpY2UoZm91bmRJbmRleCwgMSk7XG4gICAgdGhpcy5hZGRQZW5kaW5nKHRvZG8pO1xuICB9XG5cbiAgY2xlYXJDb21wbGV0ZWRUb2RvcygpIHtcbiAgICB0aGlzLiNjb21wbGV0ZWRUYXNrcyA9IFtdO1xuICB9XG5cbiAgZGVsZXRlVG9kbyh0YXNrKSB7XG4gICAgaWYgKHRoaXMuI3BlbmRpbmdUYXNrcy5pbmNsdWRlcyh0YXNrKSkge1xuICAgICAgbGV0IHRhc2tJbmRleCA9IHRoaXMuI3BlbmRpbmdUYXNrcy5pbmRleE9mKHRhc2spO1xuICAgICAgdGFza0luZGV4ID09PSAwXG4gICAgICAgID8gdGhpcy4jcGVuZGluZ1Rhc2tzLnNoaWZ0KClcbiAgICAgICAgOiB0aGlzLiNwZW5kaW5nVGFza3Muc3BsaWNlKHRhc2tJbmRleCwgdGFza0luZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRhc2tJbmRleCA9IHRoaXMuI2NvbXBsZXRlZFRhc2tzLmluZGV4T2YodGFzayk7XG4gICAgICB0YXNrSW5kZXggPT09IDBcbiAgICAgICAgPyB0aGlzLiNjb21wbGV0ZWRUYXNrcy5zaGlmdCgpXG4gICAgICAgIDogdGhpcy4jY29tcGxldGVkVGFza3Muc3BsaWNlKHRhc2tJbmRleCwgdGFza0luZGV4KTtcbiAgICB9XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHBlbmRpbmc6IHt9LFxuICAgICAgY29tcGxldGVkOiB7fSxcbiAgICB9O1xuICAgIHRoaXMuI3BlbmRpbmdUYXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgb2JqLnBlbmRpbmdbYHRhc2ske2luZGV4fWBdID0gdGFzay50b0pTT04oKTtcbiAgICB9KTtcbiAgICB0aGlzLiNjb21wbGV0ZWRUYXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgb2JqLmNvbXBsZXRlZFtgdGFzayR7aW5kZXh9YF0gPSB0YXNrLnRvSlNPTigpO1xuICAgIH0pO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgcHJvamVjdE9CSiA9IEpTT04ucGFyc2UoanNvbik7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gcHJvamVjdE9CSi5wZW5kaW5nKSB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwocHJvamVjdE9CSi5wZW5kaW5nLCBrZXkpKSB7XG4gICAgICAgIHByb2plY3RPQkoucGVuZGluZ1trZXldID0gVG9kby5mcm9tSlNPTihwcm9qZWN0T0JKLnBlbmRpbmdba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIHByb2plY3RPQkouY29tcGxldGVkKSB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwocHJvamVjdE9CSi5jb21wbGV0ZWQsIGtleSkpIHtcbiAgICAgICAgcHJvamVjdE9CSi5jb21wbGV0ZWRba2V5XSA9IFRvZG8uZnJvbUpTT04ocHJvamVjdE9CSi5jb21wbGV0ZWRba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9qZWN0T0JKO1xuICB9XG5cbiAgc3RhdGljIGxvYWRQcm9qZWN0KG9iaikge1xuICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3Qob2JqLm5hbWUsIHRydWUpO1xuICAgIFByb2plY3Quc2VsZWN0ZWQgPSBwcm9qZWN0O1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iai5wZW5kaW5nKSB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwob2JqLnBlbmRpbmcsIGtleSkpIHtcbiAgICAgICAgVG9kby5sb2FkVG9kbyhvYmoucGVuZGluZ1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqLmNvbXBsZXRlZCkge1xuICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iai5jb21wbGV0ZWQsIGtleSkpIHtcbiAgICAgICAgVG9kby5sb2FkVG9kbyhvYmouY29tcGxldGVkW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBOZXJvcy5wcm9qZWN0cy5yZWdpc3RlckNvbXBvbmVudChwcm9qZWN0LmNvbXBvbmVudCk7XG4gIH1cblxuICBzdGF0aWMgZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgbGV0IGZvdW5kSW5kZXggPSBQcm9qZWN0LnByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gICAgUHJvamVjdC5wcm9qZWN0cy5zcGxpY2UoZm91bmRJbmRleCwgMSk7XG4gICAgU3RvcmFnZS5zYXZlRGF0YSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJpbXBvcnQgUHJpb3JpdHkgZnJvbSBcIi4vcHJpb3JpdHlcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFByaW9yaXR5Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9Qcmlvcml0eUNvbXBvbmVudFwiO1xuXG5leHBvcnQgY29uc3QgU3RvcmFnZSA9ICgoKSA9PiB7XG4gIGNvbnN0IHNhdmVEYXRhID0gKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBfc2F2ZVByb2plY3REYXRhKCk7XG4gICAgc2F2ZVByaW9yaXR5RGF0YSgpO1xuICB9O1xuXG4gIC8qKiAgVGhpcyBtZXRob2Qgc2F2ZXMgcHJvamVjdHMgdG8gdGhlIGxvY2FsIHN0b3JhZ2UgYXMgZm9sbG93czpcbiAgICogMS4gRmlyc3QgaXQgY3JlYXRlcyBhIHByb2plY3RzIG9iamVjdCB3aGVyZSBhbGwgcHJvamVjdHMgd2lsbCBiZSBzdG9yZWRcbiAgICogMi4gRm9yIGV2ZXJ5IGV4aXN0ZW50IHByb2plY3QgaXQgd2lsbCBjb252ZXJ0IHRoYXQgcHJvamVjdCB0byBhIGpzb24gc3RyaW5nLCB3aXRoIGl0cyB0b2RvcyBhbmQgc3VidG9kb3NcbiAgICogMy4gVGhlIHByb2plY3QganNvbiBzdHJpbmcgd2lsbCBiZSBzdG9yZWQgaW4gYSBrZXkgd2l0aCB0aGUgaW5kZXggYXMgaWRlbnRpZmllclxuICAgKiA0LiBTYXZlIHRoZSBwcm9qZWN0cyBvYmplY3QgYXMgYSBqc29uIHN0cmluZyBpbiB0aGUgbG9jYWxzdG9yYWdlXG4gICAqICovXG4gIGNvbnN0IF9zYXZlUHJvamVjdERhdGEgPSAoKSA9PiB7XG4gICAgbGV0IHByb2plY3RzID0ge307XG4gICAgUHJvamVjdC5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgbGV0IHByb2plY3RKU09OID0gcHJvamVjdC50b0pTT04oKTtcbiAgICAgIHByb2plY3RzW2Bwcm9qZWN0JHtpbmRleH1gXSA9IHByb2plY3RKU09OO1xuICAgIH0pO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIH07XG5cbiAgLy8gU2FtZSBwcm9jZWR1cmUgYXMgX3NhdmVQcm9qZWN0RGF0YSgpIGJ1dCBvbmx5IHNhdmluZyB0aGUgcHJpb3JpdGllcyBjb2xvdXJzXG4gIGNvbnN0IHNhdmVQcmlvcml0eURhdGEgPSAoKSA9PiB7XG4gICAgbGV0IHByaW9yaXRpZXMgPSB7fTtcbiAgICBQcmlvcml0eS5wcmlvcml0aWVzLmZvckVhY2goKHByaW9yaXR5LCBpbmRleCkgPT4ge1xuICAgICAgbGV0IHByaW9yaXR5Q29sb3IgPSBwcmlvcml0eS5jb2xvcjtcbiAgICAgIHByaW9yaXRpZXNbaW5kZXhdID0gcHJpb3JpdHlDb2xvcjtcbiAgICB9KTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcmlvcml0aWVzXCIsIEpTT04uc3RyaW5naWZ5KHByaW9yaXRpZXMpKTtcbiAgfTtcblxuICAvKiogVGhpcyBtZXRob2QgbG9hZHMgcHJvamVjdHMgdG8gdGhlIGxvY2FsIHN0b3JhZ2UgYXMgZm9sbG93czpcbiAgICogMS4gRmlyc3QgY2hlY2sgaWYgdGhlcmUgYXJlIGFueSBwcm9qZWN0cyBzYXZlZFxuICAgKiAyLiBJZiBpdCBoYXMgcHJvamVjdHMgaXQgd2lsbCByZXRyaWV2ZSB0aGUgcHJvamVjdCBhbmQgaXRzIHRvZG9zIGFuZCBzdWJ0b2RvcyBhcyBhbiBvYmplY3RcbiAgICogMy4gVHJhdmVyc2UgZXZlcnkgcHJvamVjdCBpbiB0aGUgb2JqZWN0IGFuZCBjcmVhdGUgYSBwcm9qZWN0L3RvZG8vc3VidG9kbyBmb3IgZXZlcnkgb25lIG9mIHRoZW1cbiAgICogKi9cblxuICBjb25zdCBfbG9hZFByb2plY3REYXRhID0gKCkgPT4ge1xuICAgIGlmICghd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIiA9PT0gbnVsbCkpIHtcbiAgICAgIGxldCBwcm9qZWN0cyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gcHJvamVjdHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb2plY3RzLCBrZXkpKSB7XG4gICAgICAgICAgbGV0IHByb2plY3RPYmogPSBQcm9qZWN0LmZyb21KU09OKHByb2plY3RzW2tleV0pO1xuICAgICAgICAgIFByb2plY3QubG9hZFByb2plY3QocHJvamVjdE9iaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF9zZWxlY3RMYXN0UHJvamVjdCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBfbG9hZFByaW9yaXR5RGF0YSA9ICgpID0+IHtcbiAgICBpZiAoIXdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByaW9yaXRpZXNcIiA9PT0gbnVsbCkpIHtcbiAgICAgIGxldCBjb2xvcnMgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByaW9yaXRpZXNcIikpO1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29sb3JzKSB7XG4gICAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChjb2xvcnMsIGtleSkpIHtcbiAgICAgICAgICBQcmlvcml0eS5wcmlvcml0aWVzW2tleV0uY29sb3IgPSBjb2xvcnNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBQcmlvcml0eUNvbXBvbmVudC5kaXNwbGF5UHJpb3JpdGllcygpO1xuICB9O1xuXG4gIGNvbnN0IGxvYWREYXRhID0gKCkgPT4ge1xuICAgIF9sb2FkUHJpb3JpdHlEYXRhKCk7XG4gICAgX2xvYWRQcm9qZWN0RGF0YSgpO1xuICB9O1xuXG4gIC8vIFNlbGVjdCB0aGUgbGFzdCBwcm9qZWN0IGNyZWF0ZWQgc28gaXQgYXV0b21hdGljYWxseSBwb3B1bGF0ZXMgdGhlIGRhc2hib2FyZCB3aXRoIHRoZSBsYXRlc3QgcHJvamVjdFxuICBjb25zdCBfc2VsZWN0TGFzdFByb2plY3QgPSAoKSA9PiB7XG4gICAgbGV0IGxhc3RQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Q29udGFpbmVyXCIpO1xuICAgIGlmIChsYXN0UHJvamVjdCkge1xuICAgICAgbGFzdFByb2plY3QuY2xpY2soKTtcbiAgICAgIFByb2plY3Quc2VsZWN0ZWQuY29tcG9uZW50LnVwZGF0ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBzYXZlRGF0YSwgbG9hZERhdGEsIHNhdmVQcmlvcml0eURhdGEgfTtcbn0pKCk7XG4iLCJpbXBvcnQgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IGlkQXNzaWduZXIgZnJvbSBcIi4vaWRBc3NpZ25lclwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRvZG9Db21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Ub2RvQ29tcG9uZW50XCI7XG5pbXBvcnQgY2hlY2tlZCBmcm9tIFwiLi4vYXNzZXRzL2NoZWNrZWQuc3ZnXCI7XG5pbXBvcnQgdW5jaGVja2VkIGZyb20gXCIuLi9hc3NldHMvdW5jaGVja2VkLnN2Z1wiO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VNYW5hZ2VtZW50XCI7XG5cbi8qIDEuLSBCZSBhYmxlIHRvIGNyZWF0ZSBhbmQgZGVsZXRlIHRvZG8ncyDinJTvuI9cbiAgIDIuLSBJZiBhIHRvZG8ncyBpcyBhIHBhcmVudCwgdGhleSBnZXQgYWRkZWQgdG8gdGhlIHBlbmRpbmcgdGFza3Mgd2hlbiBjcmVhdGVkIOKclO+4j1xuICAgMy4tIElmIGEgcGFyZW50IHRvZG8gaXMgZGVsZXRlZCwgYWxsIGl0J3MgY2hpbGRyZW4gYXJlIGRlbGV0ZWQgYXMgd2VsbCDinJTvuI9cbiAgIDQuLSBPbmx5IHBhcmVudCdzIHRvZG8gd2lsbCBiZSBhZGRlZCB0byB0aGUgY29tcGxldGVkIHRhc2tzIGFycmF5LCBpZiBhIHBhcmVudCB0b2RvIGlzIGNoZWNrZWQsIGFsbCBpdCdzIGNoaWxkcmVuIHdpbGwgYmUg4pyU77iPXG4gICA1Li0gU29ydCB0aGUgcGVuZGluZyB0YXNrcyBhcnJheSBieSBwcmlvcml0eSwgYW5kIHNvcnQgdGhlIGNoaWxkcmVuIGFycmF5IGJ5IHByaW9yaXR5IGFzIHdlbGwgKi9cblxuY2xhc3MgVG9kbyB7XG4gICNwYXJlbnQ7XG4gICNjaGlsZHJlbjtcbiAgI2lkO1xuICAjaXNDaGVja2VkO1xuICAjcHJvamVjdDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB0aXRsZSxcbiAgICBkYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGlzQ2hlY2tlZCxcbiAgICBmaXJzdExvYWQgPSBmYWxzZSxcbiAgICBwYXJlbnQgPSBudWxsXG4gICkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy4jaXNDaGVja2VkID0gaXNDaGVja2VkO1xuICAgIHRoaXMuI2lkID0gaWRBc3NpZ25lci5nZXRJZE51bWJlcigpO1xuICAgIHRoaXMuI3BhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLiNwcm9qZWN0ID0gUHJvamVjdC5zZWxlY3RlZDtcbiAgICB0aGlzLmNvbXBvbmVudCA9IG51bGw7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLmZpcnN0TG9hZCA9IGZpcnN0TG9hZDtcbiAgICBpZiAodGhpcy4jcGFyZW50ID09PSBudWxsKSB7XG4gICAgICB0aGlzLiNjaGlsZHJlbiA9IFtdO1xuICAgICAgLy8gSWYgdGhlIHRvZG8gaXMgYWxyZWFkeSBjaGVja2VkIGFkZCBpdCB0byB0aGUgY29tcGxldGVkIHRhc2tzIGFycmF5XG4gICAgICAvLyBvZiB0aGUgcGFyZW50IHByb2plY3RcbiAgICAgIHRoaXMuY2hlY2tcbiAgICAgICAgPyBQcm9qZWN0LnNlbGVjdGVkLmFkZENvbXBsZXRlZCh0aGlzKVxuICAgICAgICA6IFByb2plY3Quc2VsZWN0ZWQuYWRkUGVuZGluZyh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jY2hpbGRyZW4gPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmZpcnN0TG9hZCAmJiAhdGhpcy5pc1N1YnRhc2soKSkge1xuICAgICAgU3RvcmFnZS5zYXZlRGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpcnN0TG9hZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZVRvZG8odGl0bGUsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgaXNDaGVja2VkLCBmaXJzdExvYWQpIHtcbiAgICBsZXQgYSA9IG5ldyBUb2RvKFxuICAgICAgdGl0bGUsXG4gICAgICBkYXRlLFxuICAgICAgcHJpb3JpdHksXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGlzQ2hlY2tlZCxcbiAgICAgIGZpcnN0TG9hZCxcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMuI2NoaWxkcmVuLnB1c2goYSk7XG4gICAgaWYgKCFmaXJzdExvYWQpIHtcbiAgICAgIFN0b3JhZ2Uuc2F2ZURhdGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYS5maXJzdExvYWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBlZGl0KHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIFN0b3JhZ2Uuc2F2ZURhdGEoKTtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jaWQ7XG4gIH1cblxuICBnZXQgY2hpbGRyZW4oKSB7XG4gICAgaWYgKHRoaXMuI2NoaWxkcmVuKSByZXR1cm4gWy4uLnRoaXMuI2NoaWxkcmVuXTtcbiAgICByZXR1cm4gdGhpcy4jY2hpbGRyZW47XG4gIH1cblxuICBnZXQgcGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLiNwYXJlbnQ7XG4gIH1cblxuICB0b2dnbGVDaGVjaygpIHtcbiAgICBpZiAodGhpcy4jaXNDaGVja2VkKSB7XG4gICAgICB0aGlzLnVuY2hlY2tUb2RvKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hlY2tUb2RvKCk7XG4gICAgfVxuICB9XG5cbiAgdW5jaGVja1RvZG8oKSB7XG4gICAgbGV0IGVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7XG4gICAgbGV0IGltZyA9XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGVja0J1dHRvbk1pbmlcIikuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgdGhpcy4jaXNDaGVja2VkID0gZmFsc2U7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkVGFza1wiKTtcbiAgICBpbWcuc3JjID0gdW5jaGVja2VkO1xuICAgIGlmICh0aGlzLiNwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIFRvZG9Db21wb25lbnQubW92ZVRvUGVuZGluZyhlbGVtZW50KTtcbiAgICAgIHRoaXMucHJvamVjdC5yZXN1bWVUb2RvKHRoaXMpO1xuICAgICAgdGhpcy5wcm9qZWN0LmNvbXBvbmVudC51cGRhdGUoKTtcbiAgICB9XG4gICAgU3RvcmFnZS5zYXZlRGF0YSgpO1xuICB9XG5cbiAgY2hlY2tUb2RvKCkge1xuICAgIGxldCBlbGVtZW50ID0gdGhpcy5kb21FbGVtZW50O1xuICAgIGxldCBpbWcgPVxuICAgICAgdGhpcy5kb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2tCdXR0b25NaW5pXCIpLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIHRoaXMuI2lzQ2hlY2tlZCA9IHRydWU7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkVGFza1wiKTtcbiAgICBpbWcuc3JjID0gY2hlY2tlZDtcbiAgICBpZiAodGhpcy4jcGFyZW50ID09PSBudWxsKSB7XG4gICAgICBUb2RvQ29tcG9uZW50Lm1vdmVUb0NvbXBsZXRlZChlbGVtZW50KTtcbiAgICAgIHRoaXMucHJvamVjdC5jb21wbGV0ZVRvZG8odGhpcyk7XG4gICAgICB0aGlzLnByb2plY3QuY29tcG9uZW50LnVwZGF0ZSgpO1xuICAgIH1cbiAgICBTdG9yYWdlLnNhdmVEYXRhKCk7XG4gIH1cblxuICBkZWxldGVUb2RvKHRhc2spIHtcbiAgICBpZiAodGhpcy5pc1N1YnRhc2soKSkge1xuICAgICAgdGhpcy5wYXJlbnQuZGVsZXRlKHRhc2spO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb2plY3QuZGVsZXRlVG9kbyh0YXNrKTtcbiAgICB9XG4gICAgU3RvcmFnZS5zYXZlRGF0YSgpO1xuICB9XG5cbiAgZGVsZXRlKHRhc2spIHtcbiAgICBsZXQgdGFza0luZGV4ID0gdGhpcy4jY2hpbGRyZW4uaW5kZXhPZih0YXNrKTtcbiAgICB0YXNrSW5kZXggPT09IDBcbiAgICAgID8gdGhpcy4jY2hpbGRyZW4uc2hpZnQoKVxuICAgICAgOiB0aGlzLiNjaGlsZHJlbi5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgfVxuXG4gIGdldCBwcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLiNwcm9qZWN0O1xuICB9XG5cbiAgZ2V0IGNoZWNrKCkge1xuICAgIHJldHVybiB0aGlzLiNpc0NoZWNrZWQ7XG4gIH1cblxuICBpc1N1YnRhc2soKSB7XG4gICAgcmV0dXJuIHRoaXMuI3BhcmVudCAhPT0gbnVsbDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgb2JqID0ge1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBkYXRlOiB0aGlzLmRhdGUsXG4gICAgICBwcmlvcml0eTogdGhpcy5wcmlvcml0eSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgaXNDaGVja2VkOiB0aGlzLiNpc0NoZWNrZWQsXG4gICAgfTtcbiAgICBpZiAoIXRoaXMuaXNTdWJ0YXNrKCkpIHtcbiAgICAgIG9iai5jaGlsZHJlbiA9IHt9O1xuICAgICAgdGhpcy4jY2hpbGRyZW4uZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgb2JqLmNoaWxkcmVuW2BzdWJ0YXNrJHtpbmRleH1gXSA9IHRhc2sudG9KU09OKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCB0b2RvT0JKID0gSlNPTi5wYXJzZShqc29uKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0b2RvT0JKLmNoaWxkcmVuKSB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodG9kb09CSi5jaGlsZHJlbiwga2V5KSkge1xuICAgICAgICB0b2RvT0JKLmNoaWxkcmVuW2tleV0gPSBKU09OLnBhcnNlKHRvZG9PQkouY2hpbGRyZW5ba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0b2RvT0JKO1xuICB9XG5cbiAgc3RhdGljIGxvYWRUb2RvKG9iaikge1xuICAgIGxldCB0b2RvID0gbmV3IFRvZG8oXG4gICAgICBvYmoudGl0bGUsXG4gICAgICBvYmouZGF0ZSxcbiAgICAgIG9iai5wcmlvcml0eSxcbiAgICAgIG9iai5kZXNjcmlwdGlvbixcbiAgICAgIG9iai5pc0NoZWNrZWQsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmouY2hpbGRyZW4pIHtcbiAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChvYmouY2hpbGRyZW4sIGtleSkpIHtcbiAgICAgICAgdG9kby5jcmVhdGVUb2RvKFxuICAgICAgICAgIG9iai5jaGlsZHJlbltrZXldLnRpdGxlLFxuICAgICAgICAgIG9iai5jaGlsZHJlbltrZXldLmRhdGUsXG4gICAgICAgICAgb2JqLmNoaWxkcmVuW2tleV0ucHJpb3JpdHksXG4gICAgICAgICAgb2JqLmNoaWxkcmVuW2tleV0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgb2JqLmNoaWxkcmVuW2tleV0uaXNDaGVja2VkLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvZG87XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy9JbXBvcnQgc3RhdGVtZW50c1xuaW1wb3J0IFwiLi9zdHlsZS9tYWluLnNjc3NcIjtcbmltcG9ydCBOZXJvcyBmcm9tIFwiLi9tb2R1bGVzL05lcm9zXCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9tb2R1bGVzL3RvZG9cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdFwiO1xuaW1wb3J0IHsgUHJpb3JpdHlDb21wb25lbnQgfSBmcm9tIFwiLi9tb2R1bGVzL2NvbXBvbmVudHMvUHJpb3JpdHlDb21wb25lbnRcIjtcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiLi9tb2R1bGVzL3N0b3JhZ2VNYW5hZ2VtZW50XCI7XG5cblN0b3JhZ2UubG9hZERhdGEoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==