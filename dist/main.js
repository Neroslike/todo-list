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
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n  background-color: #343a40;\n  height: 90%;\n  min-width: 75%;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: grid;\n  grid-template-columns: minmax(200px, 1.2fr) 2px 3fr;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border-radius: 10px;\n  border-top: #464e55 4px solid;\n  border-left: #464e55 2px solid;\n}\n\n.separator {\n  background-color: #212529;\n}\n\n.mainContent {\n  display: grid;\n  grid-template-rows: 2fr 2px 35vh;\n}\n\n.pending {\n  border-bottom: #15181c 2px solid;\n  border-left: #464e55 2px solid;\n}\n\n.completed {\n  border-top: #464e55 2px solid;\n  border-left: #464e55 2px solid;\n  display: grid;\n  grid-template-rows: min-content 1fr;\n}\n\n@media (max-width: 800px) {\n  .container {\n    width: 100%;\n    height: 100%;\n    grid-template-columns: 1fr;\n    border: none;\n    border-radius: 0;\n  }\n  .separator {\n    display: none;\n  }\n  .pending {\n    border-left: none;\n  }\n}\n.sidebar {\n  border-right: #15181c 2px solid;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.completed {\n  overflow: hidden;\n}\n\n.priorityName {\n  padding-left: 10px;\n  font-size: clamp(8px, 1vw, 64px);\n  margin: 0;\n  font-weight: 300;\n  align-self: center;\n  justify-self: center;\n}\n\n.priorityColorContainer {\n  background-color: #495057;\n  padding: clamp(8px, 0.3rem + 0.3vw, 64px);\n  outline: 2px solid #6c757d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.priorityColor {\n  border-radius: 50%;\n  height: clamp(14px, 0.5rem + 0.7vw, 64px);\n  width: clamp(14px, 0.5rem + 0.7vw, 64px);\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\n.priority {\n  background-color: #212529;\n  border-top: 2px solid #a0b1c3;\n  display: flex;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n}\n\n#priorities {\n  width: clamp(100px, 30% + 4vw, 600px);\n  display: flex;\n  flex-direction: column;\n  gap: clamp(6px, 0.3vw, 12px);\n  margin-bottom: clamp(10px, 0.7vw, 16px);\n}\n\n.priorityColorContainer .priorityColor {\n  height: clamp(14px, 0.5rem + 0.4vw, 64px);\n  width: clamp(14px, 0.5rem + 0.4vw, 64px);\n}\n\n@media (max-width: 800px) {\n  .sidebar {\n    display: none;\n  }\n}\n.sidebarButtons {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6vw;\n}\n\n.TodosContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 50px;\n  overflow-y: scroll;\n}\n\n.taskContainer {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: clamp(4px, 0.4vw, 8px);\n}\n\n.task {\n  display: flex;\n  background-color: #212529;\n  width: 100%;\n  min-width: max-content;\n  border-radius: 14px;\n  overflow: hidden;\n  border-top: 2px solid #a0b1c3;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n  justify-content: space-between;\n  margin: clamp(2px, 0.3vw, 8px) 0;\n}\n\n.taskMiniContainer {\n  background-color: #495057;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: clamp(8px, 0.5rem + 0.5vw, 64px);\n  cursor: pointer;\n  user-select: none;\n}\n\n.taskColor {\n  height: clamp(14px, 0.5rem + 0.7vw, 64px);\n  width: clamp(14px, 0.5rem + 0.7vw, 64px);\n  background-color: #e81616;\n  border-radius: 50%;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\n.taskButton {\n  height: clamp(14px, 0.5rem + 0.7vw, 64px);\n  width: clamp(14px, 0.5rem + 0.7vw, 64px);\n}\n\n.taskMiniContainer:nth-last-of-type(-n + 2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskMiniContainer:nth-child(-n+2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskTime {\n  padding-left: calc(1rem + 1vw);\n  padding-right: 10px;\n}\n.taskTime p {\n  white-space: nowrap;\n  color: #adb5bd;\n}\n\n.taskTitle {\n  margin-right: auto;\n  flex: 1;\n  padding-left: 10px;\n  width: clamp(150px, 10vw + 10rem, 500px);\n}\n.taskTitle p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.taskTitle,\n.taskTime {\n  justify-self: center;\n  align-self: center;\n}\n.taskTitle p,\n.taskTime p {\n  font-size: clamp(8px, 0.5rem + 0.7vw, 64px);\n  margin: 0;\n}\n\n.subtasksContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  align-self: flex-end;\n  width: 90%;\n}\n\n.subtask {\n  margin: clamp(2px, 0.1vw, 4px) 0;\n}\n.subtask .taskMiniContainer {\n  padding: clamp(8px, 0.4rem + 0.4vw, 48px);\n}\n.subtask .taskMiniContainer .taskButton {\n  height: clamp(10px, 0.5rem + 0.4vw, 36px);\n  width: clamp(10px, 0.5rem + 0.4vw, 36px);\n}\n.subtask .taskMiniContainer .taskColor {\n  width: clamp(10px, 0.5rem + 0.4vw, 36px);\n  height: clamp(10px, 0.5rem + 0.4vw, 36px);\n}\n.subtask .taskTitle p,\n.subtask .taskTime p {\n  font-size: clamp(6px, 0.5rem + 0.4vw, 36px);\n}\n\n.completedTask {\n  text-decoration: line-through;\n  opacity: 0.6;\n  border: none;\n  box-shadow: 0px 2px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n}\n\n.taskDataContainer {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  flex: 1 2;\n  cursor: pointer;\n}\n\n.addSubtask {\n  margin-top: 0.3vw;\n  align-self: flex-start;\n}\n\n.modal {\n  background-color: hsla(0deg, 0%, 0%, 0.502);\n  backdrop-filter: blur(3px);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#modalContainer {\n  background-color: #343a40;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border: 1px solid gray;\n  border-radius: 12px;\n  position: relative;\n  height: max-content;\n  max-height: 70vh;\n  width: max-content;\n  overflow-y: scroll;\n}\n\n.closeButton {\n  position: sticky;\n  top: 1vw;\n  left: 1vw;\n  height: 1.3vw;\n  width: 1.3vw;\n  z-index: 1;\n}\n\n.closeButton:hover {\n  cursor: pointer;\n}\n\nhr {\n  background-color: gray;\n  height: 1px;\n  border: none;\n}\n\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4vw;\n}\n.field label {\n  font-size: calc(1vw + 6px);\n}\n.field input,\n.field select,\n.field textarea {\n  font-size: calc(0.8vw + 4px);\n  border: none;\n  outline: none;\n  background: #212529;\n  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n  padding: calc(0.5vw + 2px);\n  border-radius: 0.5vw;\n  color: #f8f9fa;\n}\n\n.DuedateField input {\n  font-size: calc(0.8vw + 4px);\n}\n.DuedateField ::-webkit-calendar-picker-indicator {\n  padding: 5px;\n  cursor: pointer;\n  border-radius: 3px;\n  filter: invert(1);\n}\n\n.newForm {\n  min-width: 35vw;\n  padding: 0 calc(1vw + 6px) calc(1vw + 6px) calc(1vw + 6px);\n  display: grid;\n  grid-template-columns: min-content 2fr;\n  gap: calc(0.5vw + 4px);\n}\n\n.TitleField {\n  grid-column: 1/3;\n}\n\n.DescriptionField {\n  grid-column: 1/3;\n}\n.DescriptionField textarea {\n  resize: none;\n  height: 20vh;\n  max-height: 20vh;\n}\n\n.PriorityField select {\n  height: 100%;\n  appearance: none;\n  cursor: pointer;\n  background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg) no-repeat right 0.8em center/1.4em, #212529;\n  /* Remove focus outline */\n  /* Remove IE arrow */\n}\n.PriorityField select:focus {\n  outline: none;\n}\n.PriorityField select::-ms-expand {\n  display: none;\n}\n\n.newTitle {\n  padding: 0;\n  margin: 0;\n  padding: calc(1vw + 6px);\n}\n\n.createButton {\n  grid-column: 1/3;\n  width: max-content;\n  justify-self: center;\n}\n\n.titleView {\n  padding: 0;\n  margin: 0;\n  user-select: auto;\n  overflow-wrap: break-word;\n  text-align: center;\n  max-width: fit-content;\n  word-break: break-word;\n}\n\n.titleViewContainer {\n  display: flex;\n  justify-content: center;\n  margin: 0 2vw;\n}\n\n.descriptionViewContainer {\n  margin: 0 1vw;\n}\n\n.infoContainer {\n  display: grid;\n  min-width: clamp(250px, 70vh, 1000px);\n  grid-template-rows: 1fr auto max-content auto max-content;\n}\n\n.dateViewContainer {\n  display: flex;\n  flex-direction: column;\n}\n\nh3 {\n  margin: 0;\n}\n\n.dateStringContainer {\n  display: flex;\n}\n.dateStringContainer p {\n  margin: 0;\n  font-size: clamp(8px, 1vw, 64px);\n  font-weight: 300;\n}\n\n.priorityViewContainer {\n  display: flex;\n  flex-direction: column;\n}\n\n.todoDataContainer {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.todoDataContainer .priority {\n  border: none;\n}\n.todoDataContainer .priority .priorityName {\n  padding-right: 10px;\n}\n\n.mainTaskContainer {\n  border-bottom: #15181c 2px solid;\n  padding: 0 1vw 1vw 1vw;\n}\n\n.viewSubContainer {\n  border-top: #464e55 2px solid;\n  border-bottom: #15181c 2px solid;\n  padding: 1vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.viewSubContainer h1 {\n  padding: 0;\n  margin: 0;\n}\n\n.descriptionView {\n  max-width: fit-content;\n  overflow-wrap: break-word;\n}\n\n.ButtonsView {\n  border-top: #464e55 2px solid;\n  display: flex;\n  gap: 0.8vw;\n  justify-content: center;\n  width: 100%;\n  padding: 1vw 0;\n  position: sticky;\n  bottom: 0;\n  background-color: #343a40;\n}\n\n#projects {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5vw;\n  width: 100%;\n}\n\n.projectContainer {\n  background-color: hsla(200deg, 7%, 8%, 0.6);\n  width: 100%;\n  padding: 0.5vw 0 0.5vw 0.7vw;\n  cursor: pointer;\n  transition: background-color 0.2s ease-out 0s;\n}\n\n.projectContainer:hover {\n  background-color: hsl(200deg, 7%, 8%);\n}\n\n#selectedProject {\n  background-color: hsl(200deg, 7%, 8%);\n}\n\nhtml {\n  font-size: 16px;\n  font-family: \"Poppins\", sans-serif;\n  color: #f8f9fa;\n}\n\nbody {\n  background: linear-gradient(119.75deg, #6e9ecf 13.02%, #12263a 100%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nh1 {\n  text-align: center;\n  font-size: 1.5vw;\n  padding: 0;\n  margin: 0.7vw 0;\n  user-select: none;\n}\n\n.projectTitle {\n  font-size: 1vw;\n  font-weight: 500;\n  padding: 0;\n  margin: 0;\n}\n\n.hidden {\n  display: none;\n}\n\nbutton {\n  background: #2887c8;\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px #6bb2e3;\n  border-radius: 8px;\n  outline: none;\n  border: none;\n  color: #f8f9fa;\n  padding: 6px 10px;\n  font-size: 1.1vw;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  cursor: pointer;\n}\n\n.deleteButton {\n  background: hsl(0deg, 82%, 63%);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px hsl(0deg, 67%, 77%);\n}\n\n.editButton {\n  background: rgb(111, 184, 55);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px rgb(188, 229, 156);\n}", "",{"version":3,"sources":["webpack://./src/style/_container.scss","webpack://./src/style/main.scss","webpack://./src/style/_priorities.scss","webpack://./src/style/_task.scss","webpack://./src/style/_modal.scss","webpack://./src/style/_form.scss","webpack://./src/style/_viewTodo.scss","webpack://./src/style/_project.scss"],"names":[],"mappings":"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","sourcesContent":[".container {\n  background-color: #343a40;\n  height: 90%;\n  min-width: 75%;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: grid;\n  grid-template-columns: minmax(200px, 1.2fr) 2px 3fr;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border-radius: 10px;\n  border-top: #464e55 4px solid;\n  border-left: #464e55 2px solid;\n}\n\n.separator {\n  background-color: #212529;\n}\n\n.mainContent {\n  display: grid;\n  grid-template-rows: 2fr 2px 35vh;\n}\n\n.pending {\n  border-bottom: #15181c 2px solid;\n  border-left: #464e55 2px solid;\n}\n\n.completed {\n  border-top: #464e55 2px solid;\n  border-left: #464e55 2px solid;\n  display: grid;\n  grid-template-rows: min-content 1fr;\n}\n\n@media (max-width: 800px) {\n  .container {\n    width: 100%;\n    height: 100%;\n    grid-template-columns: 1fr;\n    border: none;\n    border-radius: 0;\n  }\n\n  .separator {\n    display: none;\n  }\n\n  .pending {\n    border-left: none;\n  }\n}\n\n.sidebar {\n  border-right: #15181c 2px solid;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.completed {\n  overflow: hidden;\n  // overflow-y: scroll;\n}\n","@import \"./index\";\n\nhtml {\n  font-size: 16px;\n  font-family: \"Poppins\", sans-serif;\n  color: #f8f9fa;\n}\n\nbody {\n  background: linear-gradient(119.75deg, #6e9ecf 13.02%, #12263a 100%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nh1 {\n  text-align: center;\n  // font-size: calc(1rem + 1vw);\n  font-size: 1.5vw;\n  padding: 0;\n  margin: 0.7vw 0;\n  user-select: none;\n}\n\n.projectTitle {\n  font-size: 1vw;\n  font-weight: 500;\n  padding: 0;\n  margin: 0;\n}\n\n.hidden {\n  display: none;\n}\n\nbutton {\n  background: #2887c8;\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px #6bb2e3;\n  border-radius: 8px;\n  outline: none;\n  border: none;\n  color: #f8f9fa;\n  padding: 6px 10px;\n  font-size: 1.1vw;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  cursor: pointer;\n}\n\n.deleteButton {\n  background: hsl(0, 82%, 63%);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px hsl(0, 67%, 77%);\n}\n\n.editButton {\n  background: rgb(111, 184, 55);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px rgb(188, 229, 156);\n}\n","$responsive-text-size: clamp(8px, 1vw, 64px);\n$responsive-button-size: clamp(14px, calc(0.5rem + 0.7vw), 64px);\n$responsive-prio-size: clamp(14px, calc(0.5rem + 0.4vw), 64px);\n\n.priorityName {\n  padding-left: 10px;\n  font-size: $responsive-text-size;\n  margin: 0;\n  font-weight: 300;\n  align-self: center;\n  justify-self: center;\n}\n\n.priorityColorContainer {\n  background-color: #495057;\n  padding: clamp(8px, calc(0.3rem + 0.3vw), 64px);\n  outline: 2px solid #6c757d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.priorityColor {\n  border-radius: 50%;\n  height: $responsive-button-size;\n  width: $responsive-button-size;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\n.priority {\n  background-color: #212529;\n  border-top: 2px solid #a0b1c3;\n  display: flex;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n}\n\n#priorities {\n  width: clamp(100px, calc(30% + 4vw), 600px);\n  display: flex;\n  flex-direction: column;\n  gap: clamp(6px, 0.3vw, 12px);\n  margin-bottom: clamp(10px, 0.7vw, 16px);\n}\n\n.priorityColorContainer {\n  .priorityColor {\n    height: $responsive-prio-size;\n    width: $responsive-prio-size;\n  }\n}\n\n@media (max-width: 800px) {\n  .sidebar {\n    display: none;\n  }\n}\n\n.sidebarButtons {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6vw;\n}\n","$big-responsive-text-size: clamp(8px, calc(0.5rem + 0.7vw), 64px);\n$big-responsive-button-size: clamp(14px, calc(0.5rem + 0.7vw), 64px);\n$small-responsive-text-size: clamp(6px, calc(0.5rem + 0.4vw), 36px);\n$small-responsive-button-size: clamp(10px, calc(0.5rem + 0.4vw), 36px);\n.TodosContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 50px;\n  overflow-y: scroll;\n}\n\n.taskContainer {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: clamp(4px, 0.4vw, 8px);\n}\n\n.task {\n  display: flex;\n  background-color: #212529;\n  width: 100%;\n  min-width: max-content;\n  border-radius: 14px;\n  overflow: hidden;\n  border-top: 2px solid #a0b1c3;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n  justify-content: space-between;\n  margin: clamp(2px, 0.3vw, 8px) 0;\n}\n\n.taskMiniContainer {\n  background-color: #495057;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: clamp(8px, calc(0.5rem + 0.5vw), 64px);\n  cursor: pointer;\n  user-select: none;\n}\n\n.taskColor {\n  height: $big-responsive-button-size;\n  width: $big-responsive-button-size;\n  background-color: #e81616;\n  border-radius: 50%;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\n.taskButton {\n  height: $big-responsive-button-size;\n  width: $big-responsive-button-size;\n}\n\n.taskMiniContainer:nth-last-of-type(-n + 2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskMiniContainer:nth-child(-n + 2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskTime {\n  padding-left: calc(1rem + 1vw);\n  padding-right: 10px;\n\n  p {\n    white-space: nowrap;\n    color: #adb5bd;\n  }\n}\n\n.taskTitle {\n  margin-right: auto;\n  flex: 1;\n  padding-left: 10px;\n  width: clamp(150px, calc(10vw + 10rem), 500px);\n\n  p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n}\n\n.taskTitle,\n.taskTime {\n  justify-self: center;\n  align-self: center;\n  p {\n    font-size: $big-responsive-text-size;\n    margin: 0;\n  }\n}\n\n.subtasksContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  align-self: flex-end;\n  width: 90%;\n}\n\n.subtask {\n  margin: clamp(2px, 0.1vw, 4px) 0;\n  // justify-content: center;\n\n  .taskMiniContainer {\n    padding: clamp(8px, calc(0.4rem + 0.4vw), 48px);\n\n    .taskButton {\n      height: $small-responsive-button-size;\n      width: $small-responsive-button-size;\n    }\n\n    .taskColor {\n      width: $small-responsive-button-size;\n      height: $small-responsive-button-size;\n    }\n  }\n\n  .taskTitle,\n  .taskTime {\n    p {\n      font-size: $small-responsive-text-size;\n    }\n  }\n}\n\n.completedTask {\n  text-decoration: line-through;\n  opacity: 0.6;\n  border: none;\n  box-shadow: 0px 2px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n}\n\n.taskDataContainer {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  flex: 1 2;\n  cursor: pointer;\n}\n\n.addSubtask {\n  margin-top: 0.3vw;\n  align-self: flex-start;\n}\n",".modal {\n  background-color: hsla(0, 0%, 0%, 0.502);\n  backdrop-filter: blur(3px);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#modalContainer {\n  background-color: #343a40;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border: 1px solid gray;\n  border-radius: 12px;\n  position: relative;\n  height: max-content;\n  max-height: 70vh;\n  width: max-content;\n  overflow-y: scroll;\n}\n\n.closeButton {\n  position: sticky;\n  top: 1vw;\n  left: 1vw;\n  height: 1.3vw;\n  width: 1.3vw;\n  z-index: 1;\n}\n\n.closeButton:hover {\n  cursor: pointer;\n}\n\nhr {\n  background-color: gray;\n  height: 1px;\n  border: none;\n}\n",".field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4vw;\n\n  label {\n    font-size: calc(1vw + 6px);\n  }\n\n  input,\n  select,\n  textarea {\n    font-size: calc(0.8vw + 4px);\n    border: none;\n    outline: none;\n    background: #212529;\n    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n    padding: calc(0.5vw + 2px);\n    border-radius: 0.5vw;\n    color: #f8f9fa;\n  }\n}\n\n.DuedateField {\n  input {\n    font-size: calc(0.8vw + 4px);\n  }\n\n  ::-webkit-calendar-picker-indicator {\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 3px;\n    filter: invert(1);\n  }\n}\n\n.newForm {\n  min-width: 35vw;\n  padding: 0 calc(1vw + 6px) calc(1vw + 6px) calc(1vw + 6px);\n  display: grid;\n  grid-template-columns: min-content 2fr;\n  gap: calc(0.5vw + 4px);\n}\n\n.TitleField {\n  grid-column: 1 / 3;\n}\n\n.DescriptionField {\n  grid-column: 1 / 3;\n\n  textarea {\n    resize: none;\n    height: 20vh;\n    max-height: 20vh;\n  }\n}\n\n.PriorityField {\n  select {\n    height: 100%;\n    appearance: none;\n    cursor: pointer;\n    background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg)\n        no-repeat right 0.8em center / 1.4em,\n      #212529;\n    /* Remove focus outline */\n    &:focus {\n      outline: none;\n    }\n    /* Remove IE arrow */\n    &::-ms-expand {\n      display: none;\n    }\n  }\n}\n\n.newTitle {\n  padding: 0;\n  margin: 0;\n  padding: calc(1vw + 6px);\n}\n\n.createButton {\n  grid-column: 1/3;\n  width: max-content;\n  justify-self: center;\n}\n",".titleView {\n  padding: 0;\n  margin: 0;\n  user-select: auto;\n  overflow-wrap: break-word;\n  text-align: center;\n  max-width: fit-content;\n  word-break: break-word;\n}\n\n.titleViewContainer {\n  display: flex;\n  justify-content: center;\n  margin: 0 2vw;\n}\n\n.descriptionViewContainer {\n  margin: 0 1vw;\n}\n\n.infoContainer {\n  display: grid;\n  min-width: clamp(250px, 70vh, 1000px);\n  grid-template-rows: 1fr auto max-content auto max-content;\n}\n\n.dateViewContainer {\n  display: flex;\n  flex-direction: column;\n}\n\nh3 {\n  margin: 0;\n}\n\n.dateStringContainer {\n  display: flex;\n\n  p {\n    margin: 0;\n    font-size: clamp(8px, 1vw, 64px);\n    font-weight: 300;\n  }\n}\n\n.priorityViewContainer {\n  display: flex;\n  flex-direction: column;\n}\n\n.todoDataContainer {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n\n  .priority {\n    border: none;\n    .priorityName {\n      padding-right: 10px;\n    }\n  }\n}\n\n.mainTaskContainer {\n  border-bottom: #15181c 2px solid;\n  padding: 0 1vw 1vw 1vw;\n}\n\n.viewSubContainer {\n  border-top: #464e55 2px solid;\n  border-bottom: #15181c 2px solid;\n  padding: 1vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  h1 {\n    padding: 0;\n    margin: 0;\n  }\n}\n\n.descriptionView {\n  max-width: fit-content;\n  overflow-wrap: break-word;\n}\n\n.ButtonsView {\n  border-top: #464e55 2px solid;\n  display: flex;\n  gap: 0.8vw;\n  justify-content: center;\n  width: 100%;\n  padding: 1vw 0;\n  position: sticky;\n  bottom: 0;\n  background-color: #343a40;\n}\n","#projects {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5vw;\n  width: 100%;\n}\n\n.projectContainer {\n  background-color: hsla(200, 7%, 8%, 60%);\n  width: 100%;\n  padding: 0.5vw 0 0.5vw 0.7vw;\n  cursor: pointer;\n  transition: background-color 0.2s ease-out 0s;\n}\n\n.projectContainer:hover {\n  background-color: hsla(200, 7%, 8%, 100%);\n}\n\n#selectedProject {\n  background-color: hsla(200, 7%, 8%, 100%);\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/DOMHandler.js":
/*!***********************************!*\
  !*** ./src/modules/DOMHandler.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DOMHandler = (() => {
  const createElement = (elementTag, className = "", content = "") => {
    let element = document.createElement(elementTag);
    let classes = className.split(" ");
    classes.forEach((clazz) => {
      if (clazz !== "") element.classList.add(clazz);
    });
    element.innerHTML += content;

    return element;
  };

  const createField = (name, element = "input", type = "text") => {
    let container = DOMHandler.createElement(
      "div",
      `field ${name.split(" ").join("")}Field`
    );
    let label = DOMHandler.createElement("label", "", name);
    let field = DOMHandler.createElement(element);

    if (field.tagName === "INPUT") field.type = type;
    field.name = name.split(" ").join("");
    field.id = name;
    label.htmlFor = name;

    container.append(label);
    container.append(field);

    return container;
  };

  return { createElement, createField };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMHandler);


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
class Neros {
  constructor(selector) {
    this.components = {};
    this.NerosElement = document.querySelector(`#${selector}`);
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
/* harmony import */ var _TodoComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoComponent */ "./src/modules/components/TodoComponent.js");




class ProjectComponent extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static resetView() {
    let pending = document.querySelector("#pendingTodos");
    let completed = document.querySelector("#completedTodos");

    pending.innerHTML = "";
    completed.innerHTML = "";
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

    let todos = projectTodos.map(
      (task, index) =>
        new _TodoComponent__WEBPACK_IMPORTED_MODULE_2__["default"](`todo${index}`, {
          task: task,
          subtasks: task.children,
        })
    );
    todos.forEach((todo) => {
      element.registerComponent(todo);
    });
  }

  DOMelement() {
    return super.DOMelement("click", (e) => {
      this.handleID(e.currentTarget);
      // Reset the board before displaying this project todos
      ProjectComponent.resetView();
      this.displayTodos("pending", this.state.project.pending);
      this.displayTodos("completed", this.state.project.completed);
    });
  }

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
/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/delete.svg */ "./src/assets/delete.svg");
/* harmony import */ var _assets_edit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/edit.svg */ "./src/assets/edit.svg");
/* harmony import */ var _assets_checked_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/checked.svg */ "./src/assets/checked.svg");
/* harmony import */ var _assets_unchecked_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/unchecked.svg */ "./src/assets/unchecked.svg");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../project */ "./src/modules/project.js");









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
    html: TaskComponent.imgHTML(_assets_edit_svg__WEBPACK_IMPORTED_MODULE_4__),
    typeClass: "editButtonMini",
  });
  static deleteMini = new _MiniContainerComponent__WEBPACK_IMPORTED_MODULE_1__["default"]("delete", {
    html: TaskComponent.imgHTML(_assets_delete_svg__WEBPACK_IMPORTED_MODULE_3__),
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
    return this.state.todo.check ? _assets_checked_svg__WEBPACK_IMPORTED_MODULE_5__ : _assets_unchecked_svg__WEBPACK_IMPORTED_MODULE_6__;
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
      editButton: () => {
        console.log("The edit button was pressed", this.state);
      },
      deleteButton: () => {
        console.log("The delete button was pressed", this.state);
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
      </div>
    </div>
  `;

  // This method takes the state tasks and subtasks and converts them into TaskComponents,
  // then assign those components to be the new values for state tasks and subtasks.
  createTaskComponents() {
    // I don't know if this should go here, but all this does is convert the todo object
    // in the state object and turn it into a taskComponent, ready to be used.
    this.state.task = new _TaskComponent__WEBPACK_IMPORTED_MODULE_2__["default"]("task", {
      todo: this.state.task,
      classes: ["task"],
    }).DOMelement();
    // This takes the children array and applies the same process above to each task
    this.state.subtasks = this.state.subtasks.map((task) =>
      new _TaskComponent__WEBPACK_IMPORTED_MODULE_2__["default"]("subtask", {
        todo: task,
        classes: ["task", "subtask"],
      }).DOMelement()
    );
  }

  DOMelement() {
    let element = super.DOMelement();
    let subtask = element.querySelector(".subtasksContainer");

    element.prepend(this.state.task);
    this.state.subtasks.forEach((task) => {
      subtask.append(task);
    });
    return element;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoComponent);


/***/ }),

/***/ "./src/modules/components/new.js":
/*!***************************************!*\
  !*** ./src/modules/components/new.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOMHandler */ "./src/modules/DOMHandler.js");
/* harmony import */ var _priority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../priority */ "./src/modules/priority.js");
/* harmony import */ var _assets_close_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/close.svg */ "./src/assets/close.svg");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo */ "./src/modules/todo.js");





const DOMNew = (() => {
  let modal = document.querySelector("#modalContainer");
  const _createDropdown = () => {
    let select = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createField("Priority", "select");
    _priority__WEBPACK_IMPORTED_MODULE_1__["default"].priorities.forEach((element) => {
      let option = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("option", "", element.name);
      option.value = element.name;
      //Append the priority option to the <select> element, which is the second in the container
      select.childNodes[1].append(option);
    });
    return select;
  };

  const _createForm = () => {
    let form = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("form", "newForm");

    form.append(_DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createField("Title"));
    form.append(_DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createField("Due date", "input", "date"));
    form.append(_createDropdown());
    form.append(_DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createField("Description", "textarea"));

    return form;
  };

  const createNewTodoModal = (parent = null, todoContainer = null) => {
    let title = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", "newTitle", "Create todo");
    let form = _createForm();
    let createButton = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
      "button",
      "createButton",
      "Create"
    );
    let container = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "newContainer");
    createButton.type = "button";

    container.append(title);
    form.append(createButton);
    container.append(form);
    modal.append(container);

    createButton.addEventListener("click", () => {
      let todo = createTodoObject(form, parent);
      let todoElement = DOMTodo.createTask(todo, true);
      todoContainer.insertBefore(todoElement, todoContainer.lastChild);
      // DOMModal.hideModal();
    });
  };

  const createTodoObject = (form, parent) => {
    let title = form.Title.value;
    let date = form.Duedate.value;
    let priority = form.Priority.selectedIndex + 1;
    let description = form.Description.value;

    let todo = new _todo__WEBPACK_IMPORTED_MODULE_3__["default"](title, date, priority, description, false, parent);
    return todo;
  };

  return { createNewTodoModal };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMNew);


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
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");



const helper = (() => {
  // This method finds the element matching the ID on the given array and deletes it by index
  const deleteItem = (array, id) => {
    let found = findTask(array, id);
    let foundIndex = array.indexOf(found);
    foundIndex === 0 ? array.shift() : array.splice(foundIndex, foundIndex);
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

  return { deleteItem, findTask };
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
/* 1.- If a todo's is a parent, they get added to the pending tasks when created
   2.- Sort the pending tasks array by priority, and sort the children array by priority as well */


class Project {
  #pendingTasks;
  #completedTasks;

  static selected;

  constructor(name) {
    this.name = name;
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
    }
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

/***/ "./src/assets/close.svg":
/*!******************************!*\
  !*** ./src/assets/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c47c628f54e684079a8f.svg";

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
/* harmony import */ var _modules_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/helper */ "./src/modules/helper.js");
/* harmony import */ var _modules_components_new__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/components/new */ "./src/modules/components/new.js");
//Import statements










//Initialize modules
const project = new _modules_project__WEBPACK_IMPORTED_MODULE_6__["default"]("Big project");
_modules_project__WEBPACK_IMPORTED_MODULE_6__["default"].selected = project;
const projectModule = new _modules_Neros__WEBPACK_IMPORTED_MODULE_1__["default"]("projects");

let todo1 = new _modules_todo__WEBPACK_IMPORTED_MODULE_2__["default"](
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

const project2 = new _modules_project__WEBPACK_IMPORTED_MODULE_6__["default"]("Second big project");
_modules_project__WEBPACK_IMPORTED_MODULE_6__["default"].selected = project2;

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

let projectComponent = new _modules_components_ProjectComponent__WEBPACK_IMPORTED_MODULE_5__["default"]("bigtodo", { project: project });
let project2Component = new _modules_components_ProjectComponent__WEBPACK_IMPORTED_MODULE_5__["default"]("secondbigtodo", {
  project: project2,
});

let modal = new _modules_Neros__WEBPACK_IMPORTED_MODULE_1__["default"]("modalContainer");

// Project.selected = null;

projectModule.registerComponent(projectComponent);
projectModule.registerComponent(project2Component);

// priorities.registerComponent(TestComponent);
// let a = new TextComponent("text", {
//   name: "Domestic animals",
//   contents: "Cats and dogs",
// });
// priorities.registerComponent(a);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esc0RBQXNELDhCQUE4QixnQkFBZ0IsbUJBQW1CLG9CQUFvQixhQUFhLGNBQWMscUNBQXFDLGtCQUFrQix3REFBd0QsK0NBQStDLHdCQUF3QixrQ0FBa0MsbUNBQW1DLEdBQUcsZ0JBQWdCLDhCQUE4QixHQUFHLGtCQUFrQixrQkFBa0IscUNBQXFDLEdBQUcsY0FBYyxxQ0FBcUMsbUNBQW1DLEdBQUcsZ0JBQWdCLGtDQUFrQyxtQ0FBbUMsa0JBQWtCLHdDQUF3QyxHQUFHLCtCQUErQixnQkFBZ0Isa0JBQWtCLG1CQUFtQixpQ0FBaUMsbUJBQW1CLHVCQUF1QixLQUFLLGdCQUFnQixvQkFBb0IsS0FBSyxjQUFjLHdCQUF3QixLQUFLLEdBQUcsWUFBWSxvQ0FBb0Msa0JBQWtCLDJCQUEyQix3QkFBd0IsR0FBRyxnQkFBZ0IscUJBQXFCLEdBQUcsbUJBQW1CLHVCQUF1QixxQ0FBcUMsY0FBYyxxQkFBcUIsdUJBQXVCLHlCQUF5QixHQUFHLDZCQUE2Qiw4QkFBOEIsOENBQThDLCtCQUErQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLG9CQUFvQix1QkFBdUIsOENBQThDLDZDQUE2QywrQ0FBK0MsR0FBRyxlQUFlLDhCQUE4QixrQ0FBa0Msa0JBQWtCLHdCQUF3QixxQkFBcUIsK0NBQStDLEdBQUcsaUJBQWlCLDBDQUEwQyxrQkFBa0IsMkJBQTJCLGlDQUFpQyw0Q0FBNEMsR0FBRyw0Q0FBNEMsOENBQThDLDZDQUE2QyxHQUFHLCtCQUErQixjQUFjLG9CQUFvQixLQUFLLEdBQUcsbUJBQW1CLGtCQUFrQiwyQkFBMkIsZUFBZSxHQUFHLHFCQUFxQixrQkFBa0IsMkJBQTJCLHdCQUF3QixvQkFBb0IsdUJBQXVCLEdBQUcsb0JBQW9CLGdCQUFnQixrQkFBa0IsMkJBQTJCLDBDQUEwQyxHQUFHLFdBQVcsa0JBQWtCLDhCQUE4QixnQkFBZ0IsMkJBQTJCLHdCQUF3QixxQkFBcUIsa0NBQWtDLCtDQUErQyxtQ0FBbUMscUNBQXFDLEdBQUcsd0JBQXdCLDhCQUE4QixrQkFBa0IsNEJBQTRCLHdCQUF3Qiw4Q0FBOEMsb0JBQW9CLHNCQUFzQixHQUFHLGdCQUFnQiw4Q0FBOEMsNkNBQTZDLDhCQUE4Qix1QkFBdUIsK0NBQStDLEdBQUcsaUJBQWlCLDhDQUE4Qyw2Q0FBNkMsR0FBRyxpREFBaUQsK0JBQStCLEdBQUcsd0NBQXdDLCtCQUErQixHQUFHLGVBQWUsbUNBQW1DLHdCQUF3QixHQUFHLGVBQWUsd0JBQXdCLG1CQUFtQixHQUFHLGdCQUFnQix1QkFBdUIsWUFBWSx1QkFBdUIsNkNBQTZDLEdBQUcsZ0JBQWdCLHFCQUFxQiw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHlCQUF5Qix1QkFBdUIsR0FBRyw4QkFBOEIsZ0RBQWdELGNBQWMsR0FBRyx3QkFBd0Isa0JBQWtCLDJCQUEyQiwwQkFBMEIseUJBQXlCLGVBQWUsR0FBRyxjQUFjLHFDQUFxQyxHQUFHLCtCQUErQiw4Q0FBOEMsR0FBRywyQ0FBMkMsOENBQThDLDZDQUE2QyxHQUFHLDBDQUEwQyw2Q0FBNkMsOENBQThDLEdBQUcsZ0RBQWdELGdEQUFnRCxHQUFHLG9CQUFvQixrQ0FBa0MsaUJBQWlCLGlCQUFpQiw0RkFBNEYsR0FBRyx3QkFBd0Isa0JBQWtCLG1DQUFtQyxnQkFBZ0IsY0FBYyxvQkFBb0IsR0FBRyxpQkFBaUIsc0JBQXNCLDJCQUEyQixHQUFHLFlBQVksZ0RBQWdELCtCQUErQixnQkFBZ0IsaUJBQWlCLHVCQUF1QixlQUFlLFlBQVksYUFBYSxXQUFXLGNBQWMsaUJBQWlCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcscUJBQXFCLDhCQUE4QiwrQ0FBK0MsMkJBQTJCLHdCQUF3Qix1QkFBdUIsd0JBQXdCLHFCQUFxQix1QkFBdUIsdUJBQXVCLEdBQUcsa0JBQWtCLHFCQUFxQixhQUFhLGNBQWMsa0JBQWtCLGlCQUFpQixlQUFlLEdBQUcsd0JBQXdCLG9CQUFvQixHQUFHLFFBQVEsMkJBQTJCLGdCQUFnQixpQkFBaUIsR0FBRyxZQUFZLGtCQUFrQiwyQkFBMkIsZUFBZSxHQUFHLGdCQUFnQiwrQkFBK0IsR0FBRyxrREFBa0QsaUNBQWlDLGlCQUFpQixrQkFBa0Isd0JBQXdCLDRGQUE0RiwrQkFBK0IseUJBQXlCLG1CQUFtQixHQUFHLHlCQUF5QixpQ0FBaUMsR0FBRyxxREFBcUQsaUJBQWlCLG9CQUFvQix1QkFBdUIsc0JBQXNCLEdBQUcsY0FBYyxvQkFBb0IsK0RBQStELGtCQUFrQiwyQ0FBMkMsMkJBQTJCLEdBQUcsaUJBQWlCLHFCQUFxQixHQUFHLHVCQUF1QixxQkFBcUIsR0FBRyw4QkFBOEIsaUJBQWlCLGlCQUFpQixxQkFBcUIsR0FBRywyQkFBMkIsaUJBQWlCLHFCQUFxQixvQkFBb0IsZ0tBQWdLLDBEQUEwRCwrQkFBK0Isa0JBQWtCLEdBQUcscUNBQXFDLGtCQUFrQixHQUFHLGVBQWUsZUFBZSxjQUFjLDZCQUE2QixHQUFHLG1CQUFtQixxQkFBcUIsdUJBQXVCLHlCQUF5QixHQUFHLGdCQUFnQixlQUFlLGNBQWMsc0JBQXNCLDhCQUE4Qix1QkFBdUIsMkJBQTJCLDJCQUEyQixHQUFHLHlCQUF5QixrQkFBa0IsNEJBQTRCLGtCQUFrQixHQUFHLCtCQUErQixrQkFBa0IsR0FBRyxvQkFBb0Isa0JBQWtCLDBDQUEwQyw4REFBOEQsR0FBRyx3QkFBd0Isa0JBQWtCLDJCQUEyQixHQUFHLFFBQVEsY0FBYyxHQUFHLDBCQUEwQixrQkFBa0IsR0FBRywwQkFBMEIsY0FBYyxxQ0FBcUMscUJBQXFCLEdBQUcsNEJBQTRCLGtCQUFrQiwyQkFBMkIsR0FBRyx3QkFBd0Isa0JBQWtCLGtDQUFrQyx3QkFBd0IsR0FBRyxnQ0FBZ0MsaUJBQWlCLEdBQUcsOENBQThDLHdCQUF3QixHQUFHLHdCQUF3QixxQ0FBcUMsMkJBQTJCLEdBQUcsdUJBQXVCLGtDQUFrQyxxQ0FBcUMsaUJBQWlCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcsd0JBQXdCLGVBQWUsY0FBYyxHQUFHLHNCQUFzQiwyQkFBMkIsOEJBQThCLEdBQUcsa0JBQWtCLGtDQUFrQyxrQkFBa0IsZUFBZSw0QkFBNEIsZ0JBQWdCLG1CQUFtQixxQkFBcUIsY0FBYyw4QkFBOEIsR0FBRyxlQUFlLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGVBQWUsZ0JBQWdCLEdBQUcsdUJBQXVCLGdEQUFnRCxnQkFBZ0IsaUNBQWlDLG9CQUFvQixrREFBa0QsR0FBRyw2QkFBNkIsMENBQTBDLEdBQUcsc0JBQXNCLDBDQUEwQyxHQUFHLFVBQVUsb0JBQW9CLHlDQUF5QyxtQkFBbUIsR0FBRyxVQUFVLHlFQUF5RSxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLFFBQVEsdUJBQXVCLHFCQUFxQixlQUFlLG9CQUFvQixzQkFBc0IsR0FBRyxtQkFBbUIsbUJBQW1CLHFCQUFxQixlQUFlLGNBQWMsR0FBRyxhQUFhLGtCQUFrQixHQUFHLFlBQVksd0JBQXdCLDBFQUEwRSx1QkFBdUIsa0JBQWtCLGlCQUFpQixtQkFBbUIsc0JBQXNCLHFCQUFxQixxQkFBcUIseUNBQXlDLG9CQUFvQixHQUFHLG1CQUFtQixvQ0FBb0Msc0ZBQXNGLEdBQUcsaUJBQWlCLGtDQUFrQyxxRkFBcUYsR0FBRyxPQUFPLDhWQUE4VixXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLGFBQWEsZUFBZSxhQUFhLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxhQUFhLGVBQWUsUUFBUSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxhQUFhLGVBQWUsYUFBYSxXQUFXLFdBQVcsT0FBTyxNQUFNLGFBQWEsZUFBZSxRQUFRLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsTUFBTSxPQUFPLGFBQWEsWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxhQUFhLGVBQWUsT0FBTyxNQUFNLGFBQWEsZUFBZSxPQUFPLE9BQU8sYUFBYSxRQUFRLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxRQUFRLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHdEQUFPO0FBQzVCLGlFQUFnQjs7QUFFaEIsZ0JBQWdCLHFEQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsNEVBQWdCLGNBQWMsa0JBQWtCO0FBQzNFLDRCQUE0Qiw0RUFBZ0I7QUFDNUM7QUFDQSxDQUFDOztBQUVELGdCQUFnQixzREFBSzs7QUFFckI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvbWFpbi5zY3NzP2EyMjEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvRE9NSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9OZXJvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL01pbmlDb250YWluZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9Qcm9qZWN0Q29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvVGFza0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL1RvZG9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9uZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaGVscGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2lkQXNzaWduZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIG1pbi13aWR0aDogNzUlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMS4yZnIpIDJweCAzZnI7XFxuICBib3gtc2hhZG93OiA4cHggOHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcDogIzQ2NGU1NSA0cHggc29saWQ7XFxuICBib3JkZXItbGVmdDogIzQ2NGU1NSAycHggc29saWQ7XFxufVxcblxcbi5zZXBhcmF0b3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcXG59XFxuXFxuLm1haW5Db250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAycHggMzV2aDtcXG59XFxuXFxuLnBlbmRpbmcge1xcbiAgYm9yZGVyLWJvdHRvbTogIzE1MTgxYyAycHggc29saWQ7XFxuICBib3JkZXItbGVmdDogIzQ2NGU1NSAycHggc29saWQ7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgYm9yZGVyLXRvcDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBib3JkZXItbGVmdDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICB9XFxuICAuc2VwYXJhdG9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5wZW5kaW5nIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICB9XFxufVxcbi5zaWRlYmFyIHtcXG4gIGJvcmRlci1yaWdodDogIzE1MTgxYyAycHggc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnByaW9yaXR5TmFtZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6IGNsYW1wKDhweCwgMXZ3LCA2NHB4KTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5Q29sb3JDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NztcXG4gIHBhZGRpbmc6IGNsYW1wKDhweCwgMC4zcmVtICsgMC4zdncsIDY0cHgpO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICM2Yzc1N2Q7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJpb3JpdHlDb2xvciB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBoZWlnaHQ6IGNsYW1wKDE0cHgsIDAuNXJlbSArIDAuN3Z3LCA2NHB4KTtcXG4gIHdpZHRoOiBjbGFtcCgxNHB4LCAwLjVyZW0gKyAwLjd2dywgNjRweCk7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNhMGIxYzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbiNwcmlvcml0aWVzIHtcXG4gIHdpZHRoOiBjbGFtcCgxMDBweCwgMzAlICsgNHZ3LCA2MDBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogY2xhbXAoNnB4LCAwLjN2dywgMTJweCk7XFxuICBtYXJnaW4tYm90dG9tOiBjbGFtcCgxMHB4LCAwLjd2dywgMTZweCk7XFxufVxcblxcbi5wcmlvcml0eUNvbG9yQ29udGFpbmVyIC5wcmlvcml0eUNvbG9yIHtcXG4gIGhlaWdodDogY2xhbXAoMTRweCwgMC41cmVtICsgMC40dncsIDY0cHgpO1xcbiAgd2lkdGg6IGNsYW1wKDE0cHgsIDAuNXJlbSArIDAuNHZ3LCA2NHB4KTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbi5zaWRlYmFyQnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC42dnc7XFxufVxcblxcbi5Ub2Rvc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDUwcHg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi50YXNrQ29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiBjbGFtcCg0cHgsIDAuNHZ3LCA4cHgpO1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNhMGIxYzM7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IGNsYW1wKDJweCwgMC4zdncsIDhweCkgMDtcXG59XFxuXFxuLnRhc2tNaW5pQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogY2xhbXAoOHB4LCAwLjVyZW0gKyAwLjV2dywgNjRweCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnRhc2tDb2xvciB7XFxuICBoZWlnaHQ6IGNsYW1wKDE0cHgsIDAuNXJlbSArIDAuN3Z3LCA2NHB4KTtcXG4gIHdpZHRoOiBjbGFtcCgxNHB4LCAwLjVyZW0gKyAwLjd2dywgNjRweCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTgxNjE2O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4udGFza0J1dHRvbiB7XFxuICBoZWlnaHQ6IGNsYW1wKDE0cHgsIDAuNXJlbSArIDAuN3Z3LCA2NHB4KTtcXG4gIHdpZHRoOiBjbGFtcCgxNHB4LCAwLjVyZW0gKyAwLjd2dywgNjRweCk7XFxufVxcblxcbi50YXNrTWluaUNvbnRhaW5lcjpudGgtbGFzdC1vZi10eXBlKC1uICsgMikge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICM2Yzc1N2Q7XFxufVxcblxcbi50YXNrTWluaUNvbnRhaW5lcjpudGgtY2hpbGQoLW4rMikge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICM2Yzc1N2Q7XFxufVxcblxcbi50YXNrVGltZSB7XFxuICBwYWRkaW5nLWxlZnQ6IGNhbGMoMXJlbSArIDF2dyk7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4udGFza1RpbWUgcCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgY29sb3I6ICNhZGI1YmQ7XFxufVxcblxcbi50YXNrVGl0bGUge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHdpZHRoOiBjbGFtcCgxNTBweCwgMTB2dyArIDEwcmVtLCA1MDBweCk7XFxufVxcbi50YXNrVGl0bGUgcCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4udGFza1RpdGxlLFxcbi50YXNrVGltZSB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLnRhc2tUaXRsZSBwLFxcbi50YXNrVGltZSBwIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoOHB4LCAwLjVyZW0gKyAwLjd2dywgNjRweCk7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zdWJ0YXNrc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnN1YnRhc2sge1xcbiAgbWFyZ2luOiBjbGFtcCgycHgsIDAuMXZ3LCA0cHgpIDA7XFxufVxcbi5zdWJ0YXNrIC50YXNrTWluaUNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiBjbGFtcCg4cHgsIDAuNHJlbSArIDAuNHZ3LCA0OHB4KTtcXG59XFxuLnN1YnRhc2sgLnRhc2tNaW5pQ29udGFpbmVyIC50YXNrQnV0dG9uIHtcXG4gIGhlaWdodDogY2xhbXAoMTBweCwgMC41cmVtICsgMC40dncsIDM2cHgpO1xcbiAgd2lkdGg6IGNsYW1wKDEwcHgsIDAuNXJlbSArIDAuNHZ3LCAzNnB4KTtcXG59XFxuLnN1YnRhc2sgLnRhc2tNaW5pQ29udGFpbmVyIC50YXNrQ29sb3Ige1xcbiAgd2lkdGg6IGNsYW1wKDEwcHgsIDAuNXJlbSArIDAuNHZ3LCAzNnB4KTtcXG4gIGhlaWdodDogY2xhbXAoMTBweCwgMC41cmVtICsgMC40dncsIDM2cHgpO1xcbn1cXG4uc3VidGFzayAudGFza1RpdGxlIHAsXFxuLnN1YnRhc2sgLnRhc2tUaW1lIHAge1xcbiAgZm9udC1zaXplOiBjbGFtcCg2cHgsIDAuNXJlbSArIDAuNHZ3LCAzNnB4KTtcXG59XFxuXFxuLmNvbXBsZXRlZFRhc2sge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBvcGFjaXR5OiAwLjY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpLCBpbnNldCAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi50YXNrRGF0YUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4OiAxIDI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGRTdWJ0YXNrIHtcXG4gIG1hcmdpbi10b3A6IDAuM3Z3O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMGRlZywgMCUsIDAlLCAwLjUwMik7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtb2RhbENvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xcbiAgYm94LXNoYWRvdzogOHB4IDhweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgbWF4LWhlaWdodDogNzB2aDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNsb3NlQnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDF2dztcXG4gIGxlZnQ6IDF2dztcXG4gIGhlaWdodDogMS4zdnc7XFxuICB3aWR0aDogMS4zdnc7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY2xvc2VCdXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ociB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5maWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC40dnc7XFxufVxcbi5maWVsZCBsYWJlbCB7XFxuICBmb250LXNpemU6IGNhbGMoMXZ3ICsgNnB4KTtcXG59XFxuLmZpZWxkIGlucHV0LFxcbi5maWVsZCBzZWxlY3QsXFxuLmZpZWxkIHRleHRhcmVhIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygwLjh2dyArIDRweCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzIxMjUyOTtcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSksIGluc2V0IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHBhZGRpbmc6IGNhbGMoMC41dncgKyAycHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41dnc7XFxuICBjb2xvcjogI2Y4ZjlmYTtcXG59XFxuXFxuLkR1ZWRhdGVGaWVsZCBpbnB1dCB7XFxuICBmb250LXNpemU6IGNhbGMoMC44dncgKyA0cHgpO1xcbn1cXG4uRHVlZGF0ZUZpZWxkIDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cXG5cXG4ubmV3Rm9ybSB7XFxuICBtaW4td2lkdGg6IDM1dnc7XFxuICBwYWRkaW5nOiAwIGNhbGMoMXZ3ICsgNnB4KSBjYWxjKDF2dyArIDZweCkgY2FsYygxdncgKyA2cHgpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMmZyO1xcbiAgZ2FwOiBjYWxjKDAuNXZ3ICsgNHB4KTtcXG59XFxuXFxuLlRpdGxlRmllbGQge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuLkRlc2NyaXB0aW9uRmllbGQge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuLkRlc2NyaXB0aW9uRmllbGQgdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgaGVpZ2h0OiAyMHZoO1xcbiAgbWF4LWhlaWdodDogMjB2aDtcXG59XFxuXFxuLlByaW9yaXR5RmllbGQgc2VsZWN0IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy85LzlkL0NhcmV0X2Rvd25fZm9udF9hd2Vzb21lX3doaXRldmFyaWF0aW9uLnN2Zykgbm8tcmVwZWF0IHJpZ2h0IDAuOGVtIGNlbnRlci8xLjRlbSwgIzIxMjUyOTtcXG4gIC8qIFJlbW92ZSBmb2N1cyBvdXRsaW5lICovXFxuICAvKiBSZW1vdmUgSUUgYXJyb3cgKi9cXG59XFxuLlByaW9yaXR5RmllbGQgc2VsZWN0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5Qcmlvcml0eUZpZWxkIHNlbGVjdDo6LW1zLWV4cGFuZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmV3VGl0bGUge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IGNhbGMoMXZ3ICsgNnB4KTtcXG59XFxuXFxuLmNyZWF0ZUJ1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZVZpZXcge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHVzZXItc2VsZWN0OiBhdXRvO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbn1cXG5cXG4udGl0bGVWaWV3Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAydnc7XFxufVxcblxcbi5kZXNjcmlwdGlvblZpZXdDb250YWluZXIge1xcbiAgbWFyZ2luOiAwIDF2dztcXG59XFxuXFxuLmluZm9Db250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1pbi13aWR0aDogY2xhbXAoMjUwcHgsIDcwdmgsIDEwMDBweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvIG1heC1jb250ZW50IGF1dG8gbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5kYXRlVmlld0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaDMge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZGF0ZVN0cmluZ0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZGF0ZVN0cmluZ0NvbnRhaW5lciBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoOHB4LCAxdncsIDY0cHgpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLnByaW9yaXR5Vmlld0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG9EYXRhQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50b2RvRGF0YUNvbnRhaW5lciAucHJpb3JpdHkge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4udG9kb0RhdGFDb250YWluZXIgLnByaW9yaXR5IC5wcmlvcml0eU5hbWUge1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLm1haW5UYXNrQ29udGFpbmVyIHtcXG4gIGJvcmRlci1ib3R0b206ICMxNTE4MWMgMnB4IHNvbGlkO1xcbiAgcGFkZGluZzogMCAxdncgMXZ3IDF2dztcXG59XFxuXFxuLnZpZXdTdWJDb250YWluZXIge1xcbiAgYm9yZGVyLXRvcDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBib3JkZXItYm90dG9tOiAjMTUxODFjIDJweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDF2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnZpZXdTdWJDb250YWluZXIgaDEge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uVmlldyB7XFxuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLkJ1dHRvbnNWaWV3IHtcXG4gIGJvcmRlci10b3A6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC44dnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXZ3IDA7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41dnc7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMDBkZWcsIDclLCA4JSwgMC42KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41dncgMCAwLjV2dyAwLjd2dztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dCAwcztcXG59XFxuXFxuLnByb2plY3RDb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwMGRlZywgNyUsIDglKTtcXG59XFxuXFxuI3NlbGVjdGVkUHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjAwZGVnLCA3JSwgOCUpO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2Y4ZjlmYTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE5Ljc1ZGVnLCAjNmU5ZWNmIDEzLjAyJSwgIzEyMjYzYSAxMDAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41dnc7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwLjd2dyAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0VGl0bGUge1xcbiAgZm9udC1zaXplOiAxdnc7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogIzI4ODdjODtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgMHB4IDJweCAwcHggIzZiYjJlMztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2Y4ZjlmYTtcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjF2dztcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlQnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IGhzbCgwZGVnLCA4MiUsIDYzJSk7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IDBweCAycHggMHB4IGhzbCgwZGVnLCA2NyUsIDc3JSk7XFxufVxcblxcbi5lZGl0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMTEsIDE4NCwgNTUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAwcHggMnB4IDBweCByZ2IoMTg4LCAyMjksIDE1Nik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9fY29udGFpbmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9fcHJpb3JpdGllcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvX3Rhc2suc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL19tb2RhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvX2Zvcm0uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL192aWV3VG9kby5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvX3Byb2plY3Quc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNB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RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FMaVlGO0FLL1hFO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUxpWUo7O0FLN1hBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtBTGdZRjs7QUs3WEE7RUFDRSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FMZ1lGOztBTWhlQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QU5tZUY7O0FNaGVBO0VBQ0UsMkNBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7QU5tZUY7O0FNaGVBO0VBQ0UscUNBQUE7QU5tZUY7O0FNaGVBO0VBQ0UscUNBQUE7QU5tZUY7O0FBdGZBO0VBQ0UsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtBQXlmRjs7QUF0ZkE7RUFDRSxvRUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBeWZGOztBQXRmQTtFQUNFLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBd2ZGOztBQXJmQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBd2ZGOztBQXJmQTtFQUNFLGFBQUE7QUF3ZkY7O0FBcmZBO0VBQ0UsbUJBQUE7RUFDQSxxRUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FBd2ZGOztBQXJmQTtFQUNFLCtCQUFBO0VBQ0EsaUZBQUE7QUF3ZkY7O0FBcmZBO0VBQ0UsNkJBQUE7RUFDQSxnRkFBQTtBQXdmRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIG1pbi13aWR0aDogNzUlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMS4yZnIpIDJweCAzZnI7XFxuICBib3gtc2hhZG93OiA4cHggOHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcDogIzQ2NGU1NSA0cHggc29saWQ7XFxuICBib3JkZXItbGVmdDogIzQ2NGU1NSAycHggc29saWQ7XFxufVxcblxcbi5zZXBhcmF0b3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcXG59XFxuXFxuLm1haW5Db250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAycHggMzV2aDtcXG59XFxuXFxuLnBlbmRpbmcge1xcbiAgYm9yZGVyLWJvdHRvbTogIzE1MTgxYyAycHggc29saWQ7XFxuICBib3JkZXItbGVmdDogIzQ2NGU1NSAycHggc29saWQ7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgYm9yZGVyLXRvcDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBib3JkZXItbGVmdDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICB9XFxuXFxuICAuc2VwYXJhdG9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5wZW5kaW5nIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICB9XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGJvcmRlci1yaWdodDogIzE1MTgxYyAycHggc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC8vIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXCIsXCJAaW1wb3J0IFxcXCIuL2luZGV4XFxcIjtcXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2Y4ZjlmYTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE5Ljc1ZGVnLCAjNmU5ZWNmIDEzLjAyJSwgIzEyMjYzYSAxMDAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC8vIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMXZ3KTtcXG4gIGZvbnQtc2l6ZTogMS41dnc7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwLjd2dyAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0VGl0bGUge1xcbiAgZm9udC1zaXplOiAxdnc7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogIzI4ODdjODtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgMHB4IDJweCAwcHggIzZiYjJlMztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2Y4ZjlmYTtcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjF2dztcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlQnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IGhzbCgwLCA4MiUsIDYzJSk7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IDBweCAycHggMHB4IGhzbCgwLCA2NyUsIDc3JSk7XFxufVxcblxcbi5lZGl0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMTEsIDE4NCwgNTUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAwcHggMnB4IDBweCByZ2IoMTg4LCAyMjksIDE1Nik7XFxufVxcblwiLFwiJHJlc3BvbnNpdmUtdGV4dC1zaXplOiBjbGFtcCg4cHgsIDF2dywgNjRweCk7XFxuJHJlc3BvbnNpdmUtYnV0dG9uLXNpemU6IGNsYW1wKDE0cHgsIGNhbGMoMC41cmVtICsgMC43dncpLCA2NHB4KTtcXG4kcmVzcG9uc2l2ZS1wcmlvLXNpemU6IGNsYW1wKDE0cHgsIGNhbGMoMC41cmVtICsgMC40dncpLCA2NHB4KTtcXG5cXG4ucHJpb3JpdHlOYW1lIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGZvbnQtc2l6ZTogJHJlc3BvbnNpdmUtdGV4dC1zaXplO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucHJpb3JpdHlDb2xvckNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3O1xcbiAgcGFkZGluZzogY2xhbXAoOHB4LCBjYWxjKDAuM3JlbSArIDAuM3Z3KSwgNjRweCk7XFxuICBvdXRsaW5lOiAycHggc29saWQgIzZjNzU3ZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eUNvbG9yIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogJHJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICB3aWR0aDogJHJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNhMGIxYzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbiNwcmlvcml0aWVzIHtcXG4gIHdpZHRoOiBjbGFtcCgxMDBweCwgY2FsYygzMCUgKyA0dncpLCA2MDBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogY2xhbXAoNnB4LCAwLjN2dywgMTJweCk7XFxuICBtYXJnaW4tYm90dG9tOiBjbGFtcCgxMHB4LCAwLjd2dywgMTZweCk7XFxufVxcblxcbi5wcmlvcml0eUNvbG9yQ29udGFpbmVyIHtcXG4gIC5wcmlvcml0eUNvbG9yIHtcXG4gICAgaGVpZ2h0OiAkcmVzcG9uc2l2ZS1wcmlvLXNpemU7XFxuICAgIHdpZHRoOiAkcmVzcG9uc2l2ZS1wcmlvLXNpemU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG4uc2lkZWJhckJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNnZ3O1xcbn1cXG5cIixcIiRiaWctcmVzcG9uc2l2ZS10ZXh0LXNpemU6IGNsYW1wKDhweCwgY2FsYygwLjVyZW0gKyAwLjd2dyksIDY0cHgpO1xcbiRiaWctcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTogY2xhbXAoMTRweCwgY2FsYygwLjVyZW0gKyAwLjd2dyksIDY0cHgpO1xcbiRzbWFsbC1yZXNwb25zaXZlLXRleHQtc2l6ZTogY2xhbXAoNnB4LCBjYWxjKDAuNXJlbSArIDAuNHZ3KSwgMzZweCk7XFxuJHNtYWxsLXJlc3BvbnNpdmUtYnV0dG9uLXNpemU6IGNsYW1wKDEwcHgsIGNhbGMoMC41cmVtICsgMC40dncpLCAzNnB4KTtcXG4uVG9kb3NDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCA1MHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWJvdHRvbTogY2xhbXAoNHB4LCAwLjR2dywgOHB4KTtcXG59XFxuXFxuLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjYTBiMWMzO1xcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiBjbGFtcCgycHgsIDAuM3Z3LCA4cHgpIDA7XFxufVxcblxcbi50YXNrTWluaUNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IGNsYW1wKDhweCwgY2FsYygwLjVyZW0gKyAwLjV2dyksIDY0cHgpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50YXNrQ29sb3Ige1xcbiAgaGVpZ2h0OiAkYmlnLXJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICB3aWR0aDogJGJpZy1yZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4MTYxNjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuLnRhc2tCdXR0b24ge1xcbiAgaGVpZ2h0OiAkYmlnLXJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICB3aWR0aDogJGJpZy1yZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbn1cXG5cXG4udGFza01pbmlDb250YWluZXI6bnRoLWxhc3Qtb2YtdHlwZSgtbiArIDIpIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNmM3NTdkO1xcbn1cXG5cXG4udGFza01pbmlDb250YWluZXI6bnRoLWNoaWxkKC1uICsgMikge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICM2Yzc1N2Q7XFxufVxcblxcbi50YXNrVGltZSB7XFxuICBwYWRkaW5nLWxlZnQ6IGNhbGMoMXJlbSArIDF2dyk7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcblxcbiAgcCB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGNvbG9yOiAjYWRiNWJkO1xcbiAgfVxcbn1cXG5cXG4udGFza1RpdGxlIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICB3aWR0aDogY2xhbXAoMTUwcHgsIGNhbGMoMTB2dyArIDEwcmVtKSwgNTAwcHgpO1xcblxcbiAgcCB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgfVxcbn1cXG5cXG4udGFza1RpdGxlLFxcbi50YXNrVGltZSB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHAge1xcbiAgICBmb250LXNpemU6ICRiaWctcmVzcG9uc2l2ZS10ZXh0LXNpemU7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG59XFxuXFxuLnN1YnRhc2tzQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uc3VidGFzayB7XFxuICBtYXJnaW46IGNsYW1wKDJweCwgMC4xdncsIDRweCkgMDtcXG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgLnRhc2tNaW5pQ29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogY2xhbXAoOHB4LCBjYWxjKDAuNHJlbSArIDAuNHZ3KSwgNDhweCk7XFxuXFxuICAgIC50YXNrQnV0dG9uIHtcXG4gICAgICBoZWlnaHQ6ICRzbWFsbC1yZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbiAgICAgIHdpZHRoOiAkc21hbGwtcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTtcXG4gICAgfVxcblxcbiAgICAudGFza0NvbG9yIHtcXG4gICAgICB3aWR0aDogJHNtYWxsLXJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICAgICAgaGVpZ2h0OiAkc21hbGwtcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnRhc2tUaXRsZSxcXG4gIC50YXNrVGltZSB7XFxuICAgIHAge1xcbiAgICAgIGZvbnQtc2l6ZTogJHNtYWxsLXJlc3BvbnNpdmUtdGV4dC1zaXplO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5jb21wbGV0ZWRUYXNrIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgb3BhY2l0eTogMC42O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSwgaW5zZXQgMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4udGFza0RhdGFDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleDogMSAyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkU3VidGFzayB7XFxuICBtYXJnaW4tdG9wOiAwLjN2dztcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblwiLFwiLm1vZGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjUwMik7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtb2RhbENvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xcbiAgYm94LXNoYWRvdzogOHB4IDhweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgbWF4LWhlaWdodDogNzB2aDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNsb3NlQnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDF2dztcXG4gIGxlZnQ6IDF2dztcXG4gIGhlaWdodDogMS4zdnc7XFxuICB3aWR0aDogMS4zdnc7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY2xvc2VCdXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ociB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblwiLFwiLmZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjR2dztcXG5cXG4gIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDF2dyArIDZweCk7XFxuICB9XFxuXFxuICBpbnB1dCxcXG4gIHNlbGVjdCxcXG4gIHRleHRhcmVhIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuOHZ3ICsgNHB4KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjEyNTI5O1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpLCBpbnNldCAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIHBhZGRpbmc6IGNhbGMoMC41dncgKyAycHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjV2dztcXG4gICAgY29sb3I6ICNmOGY5ZmE7XFxuICB9XFxufVxcblxcbi5EdWVkYXRlRmllbGQge1xcbiAgaW5wdXQge1xcbiAgICBmb250LXNpemU6IGNhbGMoMC44dncgKyA0cHgpO1xcbiAgfVxcblxcbiAgOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG4gIH1cXG59XFxuXFxuLm5ld0Zvcm0ge1xcbiAgbWluLXdpZHRoOiAzNXZ3O1xcbiAgcGFkZGluZzogMCBjYWxjKDF2dyArIDZweCkgY2FsYygxdncgKyA2cHgpIGNhbGMoMXZ3ICsgNnB4KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDJmcjtcXG4gIGdhcDogY2FsYygwLjV2dyArIDRweCk7XFxufVxcblxcbi5UaXRsZUZpZWxkIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLkRlc2NyaXB0aW9uRmllbGQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcblxcbiAgdGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgbWF4LWhlaWdodDogMjB2aDtcXG4gIH1cXG59XFxuXFxuLlByaW9yaXR5RmllbGQge1xcbiAgc2VsZWN0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzkvOWQvQ2FyZXRfZG93bl9mb250X2F3ZXNvbWVfd2hpdGV2YXJpYXRpb24uc3ZnKVxcbiAgICAgICAgbm8tcmVwZWF0IHJpZ2h0IDAuOGVtIGNlbnRlciAvIDEuNGVtLFxcbiAgICAgICMyMTI1Mjk7XFxuICAgIC8qIFJlbW92ZSBmb2N1cyBvdXRsaW5lICovXFxuICAgICY6Zm9jdXMge1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIH1cXG4gICAgLyogUmVtb3ZlIElFIGFycm93ICovXFxuICAgICY6Oi1tcy1leHBhbmQge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLm5ld1RpdGxlIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiBjYWxjKDF2dyArIDZweCk7XFxufVxcblxcbi5jcmVhdGVCdXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cIixcIi50aXRsZVZpZXcge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHVzZXItc2VsZWN0OiBhdXRvO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbn1cXG5cXG4udGl0bGVWaWV3Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAydnc7XFxufVxcblxcbi5kZXNjcmlwdGlvblZpZXdDb250YWluZXIge1xcbiAgbWFyZ2luOiAwIDF2dztcXG59XFxuXFxuLmluZm9Db250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1pbi13aWR0aDogY2xhbXAoMjUwcHgsIDcwdmgsIDEwMDBweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvIG1heC1jb250ZW50IGF1dG8gbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5kYXRlVmlld0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaDMge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZGF0ZVN0cmluZ0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCg4cHgsIDF2dywgNjRweCk7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICB9XFxufVxcblxcbi5wcmlvcml0eVZpZXdDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvRGF0YUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgLnByaW9yaXR5IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICAucHJpb3JpdHlOYW1lIHtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5tYWluVGFza0NvbnRhaW5lciB7XFxuICBib3JkZXItYm90dG9tOiAjMTUxODFjIDJweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDAgMXZ3IDF2dyAxdnc7XFxufVxcblxcbi52aWV3U3ViQ29udGFpbmVyIHtcXG4gIGJvcmRlci10b3A6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbiAgYm9yZGVyLWJvdHRvbTogIzE1MTgxYyAycHggc29saWQ7XFxuICBwYWRkaW5nOiAxdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBoMSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG59XFxuXFxuLmRlc2NyaXB0aW9uVmlldyB7XFxuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLkJ1dHRvbnNWaWV3IHtcXG4gIGJvcmRlci10b3A6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC44dnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXZ3IDA7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcXG59XFxuXCIsXCIjcHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjV2dztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwMCwgNyUsIDglLCA2MCUpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjV2dyAwIDAuNXZ3IDAuN3Z3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0IDBzO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwMCwgNyUsIDglLCAxMDAlKTtcXG59XFxuXFxuI3NlbGVjdGVkUHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwMCwgNyUsIDglLCAxMDAlKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzdGF0ZSwgdGVtcGxhdGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gIH1cblxuICAvLyBUaGlzIG1ldGhvZCByZXR1cm5zIGEgdGVtcGxhdGUgbGl0ZXJhbCBvZiB0aGUgY29tcG9uZW50XG4gIHZpZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGUodGhpcy5zdGF0ZSk7XG4gIH1cblxuICAvLyBUaGlzIG1ldGhvZCByZXR1cm5zIGFuIEhUTUwgZWxlbWVudCBvYmplY3Qgb2YgdGhlIGNvbXBvbmVudFxuICBET01lbGVtZW50KGUsIGZ1bmMpIHtcbiAgICBsZXQgZWxlbWVudCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcodGhpcy52aWV3KCksIFwidGV4dC9odG1sXCIpLmJvZHlcbiAgICAgIC5maXJzdENoaWxkO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGUsIGZ1bmMpO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgYWRkTGlzdGVuZXIgPSAoZWxlbWVudCwgZXZlbnQsIGZ1bmMpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmMpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG5cbi8vbWFrZSBhbiBldmVudEhhbmRsZXIgY2xhc3MgdGhhdCBhc3NpZ25zIGV2ZW50IGxpc3RlbmVycyB0byBjb21wb25lbnRzXG4iLCJjb25zdCBET01IYW5kbGVyID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlRWxlbWVudCA9IChlbGVtZW50VGFnLCBjbGFzc05hbWUgPSBcIlwiLCBjb250ZW50ID0gXCJcIikgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VGFnKTtcbiAgICBsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdChcIiBcIik7XG4gICAgY2xhc3Nlcy5mb3JFYWNoKChjbGF6eikgPT4ge1xuICAgICAgaWYgKGNsYXp6ICE9PSBcIlwiKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhenopO1xuICAgIH0pO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVGaWVsZCA9IChuYW1lLCBlbGVtZW50ID0gXCJpbnB1dFwiLCB0eXBlID0gXCJ0ZXh0XCIpID0+IHtcbiAgICBsZXQgY29udGFpbmVyID0gRE9NSGFuZGxlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIGBmaWVsZCAke25hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIil9RmllbGRgXG4gICAgKTtcbiAgICBsZXQgbGFiZWwgPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBcIlwiLCBuYW1lKTtcbiAgICBsZXQgZmllbGQgPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICBpZiAoZmllbGQudGFnTmFtZSA9PT0gXCJJTlBVVFwiKSBmaWVsZC50eXBlID0gdHlwZTtcbiAgICBmaWVsZC5uYW1lID0gbmFtZS5zcGxpdChcIiBcIikuam9pbihcIlwiKTtcbiAgICBmaWVsZC5pZCA9IG5hbWU7XG4gICAgbGFiZWwuaHRtbEZvciA9IG5hbWU7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGZpZWxkKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH07XG5cbiAgcmV0dXJuIHsgY3JlYXRlRWxlbWVudCwgY3JlYXRlRmllbGQgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTUhhbmRsZXI7XG4iLCJjbGFzcyBOZXJvcyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgdGhpcy5OZXJvc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtzZWxlY3Rvcn1gKTtcbiAgfVxuXG4gIHJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHRoaXMuY29tcG9uZW50c1tjb21wb25lbnQubmFtZV0gPSBjb21wb25lbnQ7XG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gIH1cblxuICB1cGRhdGVWaWV3KCkge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudHMpIHtcbiAgICAgIHRoaXMuTmVyb3NFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmNvbXBvbmVudHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB0aGlzLk5lcm9zRWxlbWVudC5hcHBlbmQodGhpcy5jb21wb25lbnRzW2tleV0uRE9NZWxlbWVudCgpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXJvcztcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xuaW1wb3J0IGRlbGV0ZVRhc2sgZnJvbSBcIi4uLy4uL2Fzc2V0cy9kZWxldGUuc3ZnXCI7XG5pbXBvcnQgZWRpdCBmcm9tIFwiLi4vLi4vYXNzZXRzL2VkaXQuc3ZnXCI7XG5pbXBvcnQgY2hlY2tlZCBmcm9tIFwiLi4vLi4vYXNzZXRzL2NoZWNrZWQuc3ZnXCI7XG5pbXBvcnQgdW5jaGVja2VkIGZyb20gXCIuLi8uLi9hc3NldHMvdW5jaGVja2VkLnN2Z1wiO1xuXG5jbGFzcyBNaW5pQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgdGVtcGxhdGUgPSAoc3RhdGUpID0+IGBcbiAgICA8ZGl2IGNsYXNzPVwidGFza01pbmlDb250YWluZXIgJHtzdGF0ZS50eXBlQ2xhc3N9XCI+XG4gICAgICAke3N0YXRlLmh0bWx9XG4gICAgPC9kaXY+XG4gIGA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1pbmlDb250YWluZXJDb21wb25lbnQ7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9Db21wb25lbnRcIjtcbmltcG9ydCBOZXJvcyBmcm9tIFwiLi4vTmVyb3NcIjtcbmltcG9ydCBUb2RvQ29tcG9uZW50IGZyb20gXCIuL1RvZG9Db21wb25lbnRcIjtcblxuY2xhc3MgUHJvamVjdENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyByZXNldFZpZXcoKSB7XG4gICAgbGV0IHBlbmRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BlbmRpbmdUb2Rvc1wiKTtcbiAgICBsZXQgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wbGV0ZWRUb2Rvc1wiKTtcblxuICAgIHBlbmRpbmcuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb21wbGV0ZWQuaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxuXG4gIHRlbXBsYXRlID0gKHN0YXRlKSA9PlxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdENvbnRhaW5lclwiPlxuICAgICAgPGgzPiR7c3RhdGUucHJvamVjdC5uYW1lfTwvaDM+XG4gICAgPC9kaXY+XG4gICAgYDtcblxuICAvLyBUaGlzIG1ldGhvZCBkaXNwbGF5cyBhbGwgdG9kb3MgYmVsb25naW5nIHRvIHRoaXMgcHJvamVjdFxuICBkaXNwbGF5VG9kb3Moc2VsZWN0b3IsIHByb2plY3RUb2Rvcykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgTmVyb3MoYCR7c2VsZWN0b3J9VG9kb3NgKTtcblxuICAgIGxldCB0b2RvcyA9IHByb2plY3RUb2Rvcy5tYXAoXG4gICAgICAodGFzaywgaW5kZXgpID0+XG4gICAgICAgIG5ldyBUb2RvQ29tcG9uZW50KGB0b2RvJHtpbmRleH1gLCB7XG4gICAgICAgICAgdGFzazogdGFzayxcbiAgICAgICAgICBzdWJ0YXNrczogdGFzay5jaGlsZHJlbixcbiAgICAgICAgfSlcbiAgICApO1xuICAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGVsZW1lbnQucmVnaXN0ZXJDb21wb25lbnQodG9kbyk7XG4gICAgfSk7XG4gIH1cblxuICBET01lbGVtZW50KCkge1xuICAgIHJldHVybiBzdXBlci5ET01lbGVtZW50KFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlSUQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgIC8vIFJlc2V0IHRoZSBib2FyZCBiZWZvcmUgZGlzcGxheWluZyB0aGlzIHByb2plY3QgdG9kb3NcbiAgICAgIFByb2plY3RDb21wb25lbnQucmVzZXRWaWV3KCk7XG4gICAgICB0aGlzLmRpc3BsYXlUb2RvcyhcInBlbmRpbmdcIiwgdGhpcy5zdGF0ZS5wcm9qZWN0LnBlbmRpbmcpO1xuICAgICAgdGhpcy5kaXNwbGF5VG9kb3MoXCJjb21wbGV0ZWRcIiwgdGhpcy5zdGF0ZS5wcm9qZWN0LmNvbXBsZXRlZCk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVJRCh0YXJnZXQpIHtcbiAgICBsZXQgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdGVkUHJvamVjdFwiKTtcbiAgICBpZiAoc2VsZWN0ZWQpIHNlbGVjdGVkLmlkID0gXCJcIjtcbiAgICB0YXJnZXQuaWQgPSBcInNlbGVjdGVkUHJvamVjdFwiO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RDb21wb25lbnQ7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9Db21wb25lbnRcIjtcbmltcG9ydCBNaW5pQ29udGFpbmVyQ29tcG9uZW50IGZyb20gXCIuL01pbmlDb250YWluZXJDb21wb25lbnRcIjtcbmltcG9ydCBQcmlvcml0eSBmcm9tIFwiLi4vcHJpb3JpdHlcIjtcbmltcG9ydCBkZWxldGVUYXNrIGZyb20gXCIuLi8uLi9hc3NldHMvZGVsZXRlLnN2Z1wiO1xuaW1wb3J0IGVkaXQgZnJvbSBcIi4uLy4uL2Fzc2V0cy9lZGl0LnN2Z1wiO1xuaW1wb3J0IGNoZWNrZWQgZnJvbSBcIi4uLy4uL2Fzc2V0cy9jaGVja2VkLnN2Z1wiO1xuaW1wb3J0IHVuY2hlY2tlZCBmcm9tIFwiLi4vLi4vYXNzZXRzL3VuY2hlY2tlZC5zdmdcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuLi9wcm9qZWN0XCI7XG5cbi8vIDEuLSBJZiBhIGJpZyB0b2RvIGlzIGNoZWNrZWQsIGl0cyBjaGlsZHJlbiBhcmUgYWxzbyBjaGVja2VkIOKclO+4j1xuLy8gMi4tIElmIGFsbCB0aGUgc3VidG9kb3MgYXJlIGNoZWNrZWQsIHRoZSBwYXJlbnQgaXMgYWxzbyBjaGVja2VkIOKclO+4j1xuLy8gMy4tIElmIGEgYmlnIHRvZG8gYW5kIGl0cyBjaGlsZHJlbiBhcmUgY2hlY2tlZCwgYnV0IG9uZSBvZiB0aGUgY2hpbGRyZW5cbi8vIGlzIHVuY2hlY2tlZCwgdGhlIHBhcmVudCB0b2RvIHdpbGwgYWxzbyBiZSB1bmNoZWNrZWQg4pyU77iPXG4vLyA0Li0gSWYgYSBiaWcgdG9kbyBhbmQgaXRzIGNoaWxkcmVuIGFyZSBjaGVja2VkLCBidXQgdGhlIHBhcmVudCBpcyB1bmNoZWNrZWQsXG4vLyBhbGwgaXRzIGNoaWxkcmVuIHdpbGwgYWxzbyBiZSB1bmNoZWNrZWQg4pyU77iPXG5cbmNsYXNzIFRhc2tDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzdGF0ZSkge1xuICAgIHN1cGVyKG5hbWUsIHN0YXRlKTtcbiAgICAvLyBDcmVhdGUgdGhlIHByaW9yaXR5IGNvbG9yIGh0bWwgYW5kIGNvbG9yLCBJIHNob3VsZCBwdXQgdGhpcyBpbnRvIGl0cyBvd24gY2xhc3NcbiAgICB0aGlzLmNvbG9ySFRNTCA9IChwcmlvcml0eSkgPT5cbiAgICAgIGA8ZGl2IGNsYXNzPVwicHJpb3JpdHlDb2xvclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJHtwcmlvcml0eS5jb2xvcn1cIj48L2Rpdj5gO1xuICAgIHRoaXMuY29sb3JNaW5pID0gbmV3IE1pbmlDb250YWluZXJDb21wb25lbnQoXCJwcmlvcml0eVwiLCB7XG4gICAgICBodG1sOiB0aGlzLmNvbG9ySFRNTChQcmlvcml0eS5wcmlvcml0eShzdGF0ZS50b2RvLnByaW9yaXR5KSksXG4gICAgICB0eXBlQ2xhc3M6IFwicHJpb3JpdHlCdXR0b25NaW5pXCIsXG4gICAgfSk7XG4gICAgdGhpcy5zdGF0ZS50b2RvLmNvbXBvbmVudCA9IHRoaXM7XG4gICAgLy8gSWYgdGhpcyB0b2RvIGlzIGNoZWNrZWQsIHRoZSBkb20gZWxlbWVudCB3aWxsIGhhdmUgdGhlIGNsYXNzIFwiY29tcGxldGVkVGFza1wiXG4gICAgaWYgKHRoaXMuc3RhdGUudG9kby5jaGVjaykgdGhpcy5zdGF0ZS5jbGFzc2VzLnB1c2goXCJjb21wbGV0ZWRUYXNrXCIpO1xuICB9XG5cbiAgLy8gQ3JlYXRlIGFsbCB0aGUgc3RhdGljIGJ1dHRvbnMgbmVlZGVkIGZvciBhIHRhc2ssIHRoZXNlIGFyZW4ndCBkeW5hbWljIHNpbmNlIGFsbCB0YXNrcyBoYXZlIHRoZSBzYW1lIGJ1dHRvbnNcbiAgc3RhdGljIGltZ0hUTUwgPSAoYWN0aW9uU1ZHKSA9PiBgPGltZyBjbGFzcz1cInRhc2tCdXR0b25cIiBzcmM9JHthY3Rpb25TVkd9PmA7XG4gIHN0YXRpYyBlZGl0TWluaSA9IG5ldyBNaW5pQ29udGFpbmVyQ29tcG9uZW50KFwiZWRpdFwiLCB7XG4gICAgaHRtbDogVGFza0NvbXBvbmVudC5pbWdIVE1MKGVkaXQpLFxuICAgIHR5cGVDbGFzczogXCJlZGl0QnV0dG9uTWluaVwiLFxuICB9KTtcbiAgc3RhdGljIGRlbGV0ZU1pbmkgPSBuZXcgTWluaUNvbnRhaW5lckNvbXBvbmVudChcImRlbGV0ZVwiLCB7XG4gICAgaHRtbDogVGFza0NvbXBvbmVudC5pbWdIVE1MKGRlbGV0ZVRhc2spLFxuICAgIHR5cGVDbGFzczogXCJkZWxldGVCdXR0b25NaW5pXCIsXG4gIH0pO1xuXG4gIC8vIFJldHVybiBhIG1pbmlDb250YWluZXIgd2l0aCB0aGUgY29ycmVzcG9uZGluZyBzdmcgZmlsZSwgY2hlY2tlZCBpZiB0b2RvIGlzQ2hlY2tlZFxuICAvLyBwcm9wZXJ0eSBpcyB0cnVlLCB1bmNoZWNrZWQgb3RoZXJ3aXNlLlxuICBjaGVja01pbmkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBNaW5pQ29udGFpbmVyQ29tcG9uZW50KFwiY2hlY2tcIiwge1xuICAgICAgaHRtbDogVGFza0NvbXBvbmVudC5pbWdIVE1MKHRoaXMuY2hlY2tTdGF0ZSgpKSxcbiAgICAgIHR5cGVDbGFzczogXCJjaGVja0J1dHRvbk1pbmlcIixcbiAgICB9KTtcbiAgfTtcblxuICAvLyBUaGlzIG1ldGhvZCBjaGVja3MgdGhlIHN0YXRlIG9mIHRoZSBpc0NoZWNrZWQgcHJvcGVydHkgZnJvbSB0b2Rvc1xuICBjaGVja1N0YXRlID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnRvZG8uY2hlY2sgPyBjaGVja2VkIDogdW5jaGVja2VkO1xuICB9O1xuXG4gIHRlbXBsYXRlID0gKHN0YXRlKSA9PlxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwiJHtzdGF0ZS5jbGFzc2VzLmpvaW4oXCIgXCIpfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2tEYXRhQ29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrVGl0bGVcIj5cbiAgICAgICAgICA8cD4ke3N0YXRlLnRvZG8udGl0bGV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tUaW1lXCI+XG4gICAgICAgICAgPHA+NSBkYXlzIGxlZnQ8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgRE9NZWxlbWVudCgpIHtcbiAgICBsZXQgZWxlbWVudCA9IHN1cGVyLkRPTWVsZW1lbnQoKTtcbiAgICBsZXQgY2hlY2sgPSB0aGlzLmNoZWNrTWluaSgpLkRPTWVsZW1lbnQoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICB0aGlzLmV2ZW50SGFuZGxlcigpLmNoZWNrQnV0dG9uXG4gICAgKTtcbiAgICBsZXQgcHJpb3JpdHkgPSB0aGlzLmNvbG9yTWluaS5ET01lbGVtZW50KFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgdGhpcy5ldmVudEhhbmRsZXIoKS5wcmlvcml0eUJ1dHRvblxuICAgICk7XG4gICAgbGV0IGVkaXQgPSBUYXNrQ29tcG9uZW50LmVkaXRNaW5pLkRPTWVsZW1lbnQoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICB0aGlzLmV2ZW50SGFuZGxlcigpLmVkaXRCdXR0b25cbiAgICApO1xuICAgIGxldCBkZWxldGVCdG4gPSBUYXNrQ29tcG9uZW50LmRlbGV0ZU1pbmkuRE9NZWxlbWVudChcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIHRoaXMuZXZlbnRIYW5kbGVyKCkuZGVsZXRlQnV0dG9uXG4gICAgKTtcblxuICAgIGVsZW1lbnQucHJlcGVuZChwcmlvcml0eSk7XG4gICAgZWxlbWVudC5wcmVwZW5kKGNoZWNrKTtcbiAgICBlbGVtZW50LmFwcGVuZChlZGl0KTtcbiAgICBlbGVtZW50LmFwcGVuZChkZWxldGVCdG4pO1xuICAgIHRoaXMuc3RhdGUudG9kby5kb21FbGVtZW50ID0gZWxlbWVudDtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIGNoZWNrQ2hpbGRyZW4oKSB7XG4gICAgdGhpcy5zdGF0ZS50b2RvLmNoaWxkcmVuLmZvckVhY2goKHN1YnRhc2spID0+IHtcbiAgICAgIHN1YnRhc2suY2hlY2tUb2RvKCk7XG4gICAgfSk7XG4gIH1cblxuICB1bmNoZWNrQ2hpbGRyZW4oKSB7XG4gICAgdGhpcy5zdGF0ZS50b2RvLmNoaWxkcmVuLmZvckVhY2goKHN1YnRhc2spID0+IHtcbiAgICAgIHN1YnRhc2sudW5jaGVja1RvZG8oKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNoZWNrUGFyZW50KCkge1xuICAgIGxldCBwYXJlbnQgPSB0aGlzLnN0YXRlLnRvZG8ucGFyZW50O1xuICAgIHBhcmVudC5jaGVja1RvZG8oKTtcbiAgfVxuXG4gIHVuY2hlY2tQYXJlbnQoKSB7XG4gICAgbGV0IHBhcmVudCA9IHRoaXMuc3RhdGUudG9kby5wYXJlbnQ7XG4gICAgcGFyZW50LnVuY2hlY2tUb2RvKCk7XG4gIH1cblxuICAvL0NoZWNrIGlmIHRoZSBzdWJ0YXNrcyBhcnJheSBjb250YWlucyBvbmx5IGNvbXBsZXRlZCB0YXNrc1xuICBhcmVTdWJ0YXNrc0NvbXBsZXRlZCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS50b2RvLmlzU3VidGFzaygpKSB7XG4gICAgICBsZXQgc3VidGFza3MgPSB0aGlzLnN0YXRlLnRvZG8ucGFyZW50LmNoaWxkcmVuO1xuICAgICAgcmV0dXJuIHN1YnRhc2tzLmV2ZXJ5KChzdWJ0YXNrKSA9PiBzdWJ0YXNrLmNoZWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZXZlbnRIYW5kbGVyID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBjaGVja0J1dHRvbjogKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS50b2RvLmNoZWNrKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGJpZyB0b2RvIGlzIGNvbXBsZXRlZCBhbmQgYSBzdWJ0YXNrIGlzIHVuY2hlY2tlZCwgdGhlIGJpZ1xuICAgICAgICAgIC8vIHRvZG8gaXMgdW5jaGVja2VkXG4gICAgICAgICAgaWYgKHRoaXMuYXJlU3VidGFza3NDb21wbGV0ZWQoKSAmJiB0aGlzLnN0YXRlLnRvZG8uaXNTdWJ0YXNrKCkpXG4gICAgICAgICAgICB0aGlzLnVuY2hlY2tQYXJlbnQoKTtcbiAgICAgICAgICB0aGlzLnN0YXRlLnRvZG8udW5jaGVja1RvZG8oKTtcbiAgICAgICAgICAvLyBJZiB0aGUgYmlnIHRvZG8gaXMgdW5jaGVja2VkLCBtYXJrIGFsbCBpdHMgY2hpbGRyZW4gdW5jaGVja2VkXG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUudG9kby5jaGlsZHJlbikgdGhpcy51bmNoZWNrQ2hpbGRyZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLnRvZG8uY2hlY2tUb2RvKCk7XG4gICAgICAgICAgLy8gSWYgYWxsIHRoZSBzdWJzdGFza3MgYXJlIGNvbXBsZXRlZCwgbWFyayBjaGVja2VkIHRoZSBiaWcgdG9kb1xuICAgICAgICAgIGlmICh0aGlzLmFyZVN1YnRhc2tzQ29tcGxldGVkKCkgJiYgdGhpcy5zdGF0ZS50b2RvLmlzU3VidGFzaygpKVxuICAgICAgICAgICAgdGhpcy5jaGVja1BhcmVudCgpO1xuICAgICAgICAgIC8vIElmIHRoZSBiaWcgdG9kbyBpcyBjaGVja2VkLCBtYXJrIGFsbCBpdHMgY2hpbGRyZW4gY2hlY2tlZFxuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvZG8uY2hpbGRyZW4pIHRoaXMuY2hlY2tDaGlsZHJlbigpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJpb3JpdHlCdXR0b246ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgcHJpb3JpdHkgYnV0dG9uIHdhcyBwcmVzc2VkXCIsIHRoaXMuc3RhdGUpO1xuICAgICAgfSxcbiAgICAgIGVkaXRCdXR0b246ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgZWRpdCBidXR0b24gd2FzIHByZXNzZWRcIiwgdGhpcy5zdGF0ZSk7XG4gICAgICB9LFxuICAgICAgZGVsZXRlQnV0dG9uOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGRlbGV0ZSBidXR0b24gd2FzIHByZXNzZWRcIiwgdGhpcy5zdGF0ZSk7XG4gICAgICB9LFxuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tDb21wb25lbnQ7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9Db21wb25lbnRcIjtcbmltcG9ydCBOZXJvcyBmcm9tIFwiLi4vTmVyb3NcIjtcbmltcG9ydCBUYXNrQ29tcG9uZW50IGZyb20gXCIuL1Rhc2tDb21wb25lbnRcIjtcblxuY2xhc3MgVG9kb0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtb3ZlVG9Db21wbGV0ZWQoZWxlbWVudCkge1xuICAgIGxldCBjb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbXBsZXRlZFRvZG9zXCIpO1xuICAgIGNvbXBsZXRlZC5hcHBlbmQoZWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBtb3ZlVG9QZW5kaW5nKGVsZW1lbnQpIHtcbiAgICBsZXQgcGVuZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVuZGluZ1RvZG9zXCIpO1xuICAgIHBlbmRpbmcuYXBwZW5kKGVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihuYW1lLCBzdGF0ZSkge1xuICAgIHN1cGVyKG5hbWUsIHN0YXRlKTtcbiAgICB0aGlzLmNyZWF0ZVRhc2tDb21wb25lbnRzKCk7XG4gIH1cblxuICB0ZW1wbGF0ZSA9IChzdGF0ZSkgPT5cbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cInRhc2tDb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdWJ0YXNrc0NvbnRhaW5lclwiPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgLy8gVGhpcyBtZXRob2QgdGFrZXMgdGhlIHN0YXRlIHRhc2tzIGFuZCBzdWJ0YXNrcyBhbmQgY29udmVydHMgdGhlbSBpbnRvIFRhc2tDb21wb25lbnRzLFxuICAvLyB0aGVuIGFzc2lnbiB0aG9zZSBjb21wb25lbnRzIHRvIGJlIHRoZSBuZXcgdmFsdWVzIGZvciBzdGF0ZSB0YXNrcyBhbmQgc3VidGFza3MuXG4gIGNyZWF0ZVRhc2tDb21wb25lbnRzKCkge1xuICAgIC8vIEkgZG9uJ3Qga25vdyBpZiB0aGlzIHNob3VsZCBnbyBoZXJlLCBidXQgYWxsIHRoaXMgZG9lcyBpcyBjb252ZXJ0IHRoZSB0b2RvIG9iamVjdFxuICAgIC8vIGluIHRoZSBzdGF0ZSBvYmplY3QgYW5kIHR1cm4gaXQgaW50byBhIHRhc2tDb21wb25lbnQsIHJlYWR5IHRvIGJlIHVzZWQuXG4gICAgdGhpcy5zdGF0ZS50YXNrID0gbmV3IFRhc2tDb21wb25lbnQoXCJ0YXNrXCIsIHtcbiAgICAgIHRvZG86IHRoaXMuc3RhdGUudGFzayxcbiAgICAgIGNsYXNzZXM6IFtcInRhc2tcIl0sXG4gICAgfSkuRE9NZWxlbWVudCgpO1xuICAgIC8vIFRoaXMgdGFrZXMgdGhlIGNoaWxkcmVuIGFycmF5IGFuZCBhcHBsaWVzIHRoZSBzYW1lIHByb2Nlc3MgYWJvdmUgdG8gZWFjaCB0YXNrXG4gICAgdGhpcy5zdGF0ZS5zdWJ0YXNrcyA9IHRoaXMuc3RhdGUuc3VidGFza3MubWFwKCh0YXNrKSA9PlxuICAgICAgbmV3IFRhc2tDb21wb25lbnQoXCJzdWJ0YXNrXCIsIHtcbiAgICAgICAgdG9kbzogdGFzayxcbiAgICAgICAgY2xhc3NlczogW1widGFza1wiLCBcInN1YnRhc2tcIl0sXG4gICAgICB9KS5ET01lbGVtZW50KClcbiAgICApO1xuICB9XG5cbiAgRE9NZWxlbWVudCgpIHtcbiAgICBsZXQgZWxlbWVudCA9IHN1cGVyLkRPTWVsZW1lbnQoKTtcbiAgICBsZXQgc3VidGFzayA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJ0YXNrc0NvbnRhaW5lclwiKTtcblxuICAgIGVsZW1lbnQucHJlcGVuZCh0aGlzLnN0YXRlLnRhc2spO1xuICAgIHRoaXMuc3RhdGUuc3VidGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgc3VidGFzay5hcHBlbmQodGFzayk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kb0NvbXBvbmVudDtcbiIsImltcG9ydCBET01IYW5kbGVyIGZyb20gXCIuLi9ET01IYW5kbGVyXCI7XG5pbXBvcnQgUHJpb3JpdHkgZnJvbSBcIi4uL3ByaW9yaXR5XCI7XG5pbXBvcnQgY2xvc2UgZnJvbSBcIi4uLy4uL2Fzc2V0cy9jbG9zZS5zdmdcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuLi90b2RvXCI7XG5cbmNvbnN0IERPTU5ldyA9ICgoKSA9PiB7XG4gIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWxDb250YWluZXJcIik7XG4gIGNvbnN0IF9jcmVhdGVEcm9wZG93biA9ICgpID0+IHtcbiAgICBsZXQgc2VsZWN0ID0gRE9NSGFuZGxlci5jcmVhdGVGaWVsZChcIlByaW9yaXR5XCIsIFwic2VsZWN0XCIpO1xuICAgIFByaW9yaXR5LnByaW9yaXRpZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgbGV0IG9wdGlvbiA9IERPTUhhbmRsZXIuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBcIlwiLCBlbGVtZW50Lm5hbWUpO1xuICAgICAgb3B0aW9uLnZhbHVlID0gZWxlbWVudC5uYW1lO1xuICAgICAgLy9BcHBlbmQgdGhlIHByaW9yaXR5IG9wdGlvbiB0byB0aGUgPHNlbGVjdD4gZWxlbWVudCwgd2hpY2ggaXMgdGhlIHNlY29uZCBpbiB0aGUgY29udGFpbmVyXG4gICAgICBzZWxlY3QuY2hpbGROb2Rlc1sxXS5hcHBlbmQob3B0aW9uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZWN0O1xuICB9O1xuXG4gIGNvbnN0IF9jcmVhdGVGb3JtID0gKCkgPT4ge1xuICAgIGxldCBmb3JtID0gRE9NSGFuZGxlci5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBcIm5ld0Zvcm1cIik7XG5cbiAgICBmb3JtLmFwcGVuZChET01IYW5kbGVyLmNyZWF0ZUZpZWxkKFwiVGl0bGVcIikpO1xuICAgIGZvcm0uYXBwZW5kKERPTUhhbmRsZXIuY3JlYXRlRmllbGQoXCJEdWUgZGF0ZVwiLCBcImlucHV0XCIsIFwiZGF0ZVwiKSk7XG4gICAgZm9ybS5hcHBlbmQoX2NyZWF0ZURyb3Bkb3duKCkpO1xuICAgIGZvcm0uYXBwZW5kKERPTUhhbmRsZXIuY3JlYXRlRmllbGQoXCJEZXNjcmlwdGlvblwiLCBcInRleHRhcmVhXCIpKTtcblxuICAgIHJldHVybiBmb3JtO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZU5ld1RvZG9Nb2RhbCA9IChwYXJlbnQgPSBudWxsLCB0b2RvQ29udGFpbmVyID0gbnVsbCkgPT4ge1xuICAgIGxldCB0aXRsZSA9IERPTUhhbmRsZXIuY3JlYXRlRWxlbWVudChcImgxXCIsIFwibmV3VGl0bGVcIiwgXCJDcmVhdGUgdG9kb1wiKTtcbiAgICBsZXQgZm9ybSA9IF9jcmVhdGVGb3JtKCk7XG4gICAgbGV0IGNyZWF0ZUJ1dHRvbiA9IERPTUhhbmRsZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICBcImNyZWF0ZUJ1dHRvblwiLFxuICAgICAgXCJDcmVhdGVcIlxuICAgICk7XG4gICAgbGV0IGNvbnRhaW5lciA9IERPTUhhbmRsZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm5ld0NvbnRhaW5lclwiKTtcbiAgICBjcmVhdGVCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKHRpdGxlKTtcbiAgICBmb3JtLmFwcGVuZChjcmVhdGVCdXR0b24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoZm9ybSk7XG4gICAgbW9kYWwuYXBwZW5kKGNvbnRhaW5lcik7XG5cbiAgICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxldCB0b2RvID0gY3JlYXRlVG9kb09iamVjdChmb3JtLCBwYXJlbnQpO1xuICAgICAgbGV0IHRvZG9FbGVtZW50ID0gRE9NVG9kby5jcmVhdGVUYXNrKHRvZG8sIHRydWUpO1xuICAgICAgdG9kb0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodG9kb0VsZW1lbnQsIHRvZG9Db250YWluZXIubGFzdENoaWxkKTtcbiAgICAgIC8vIERPTU1vZGFsLmhpZGVNb2RhbCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRvZG9PYmplY3QgPSAoZm9ybSwgcGFyZW50KSA9PiB7XG4gICAgbGV0IHRpdGxlID0gZm9ybS5UaXRsZS52YWx1ZTtcbiAgICBsZXQgZGF0ZSA9IGZvcm0uRHVlZGF0ZS52YWx1ZTtcbiAgICBsZXQgcHJpb3JpdHkgPSBmb3JtLlByaW9yaXR5LnNlbGVjdGVkSW5kZXggKyAxO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGZvcm0uRGVzY3JpcHRpb24udmFsdWU7XG5cbiAgICBsZXQgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGZhbHNlLCBwYXJlbnQpO1xuICAgIHJldHVybiB0b2RvO1xuICB9O1xuXG4gIHJldHVybiB7IGNyZWF0ZU5ld1RvZG9Nb2RhbCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NTmV3O1xuIiwiaW1wb3J0IHsgZWwgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5cbmNvbnN0IGhlbHBlciA9ICgoKSA9PiB7XG4gIC8vIFRoaXMgbWV0aG9kIGZpbmRzIHRoZSBlbGVtZW50IG1hdGNoaW5nIHRoZSBJRCBvbiB0aGUgZ2l2ZW4gYXJyYXkgYW5kIGRlbGV0ZXMgaXQgYnkgaW5kZXhcbiAgY29uc3QgZGVsZXRlSXRlbSA9IChhcnJheSwgaWQpID0+IHtcbiAgICBsZXQgZm91bmQgPSBmaW5kVGFzayhhcnJheSwgaWQpO1xuICAgIGxldCBmb3VuZEluZGV4ID0gYXJyYXkuaW5kZXhPZihmb3VuZCk7XG4gICAgZm91bmRJbmRleCA9PT0gMCA/IGFycmF5LnNoaWZ0KCkgOiBhcnJheS5zcGxpY2UoZm91bmRJbmRleCwgZm91bmRJbmRleCk7XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9O1xuXG4gIC8vIEdpdmVuIGFuIGFycmF5IG9mIHRvZG9zIGFuZCBhbiBpZCwgdGhpcyBtZXRob2Qgd2lsbCByZWN1cnNpdmVseSBmaW5kIHRoZSB0b2RvXG4gIGNvbnN0IGZpbmRUYXNrID0gKHF1ZXVlLCBpZCkgPT4ge1xuICAgIGxldCBjdXJyZW50ID0gcXVldWVbMF07XG4gICAgaWYgKGN1cnJlbnQuaWQgPT09IGlkKSByZXR1cm4gY3VycmVudDtcbiAgICBxdWV1ZS5zaGlmdCgpO1xuXG4gICAgaWYgKCFjdXJyZW50LmlzU3VidGFzaygpKSBxdWV1ZSA9IFsuLi5xdWV1ZSwgLi4uY3VycmVudC5jaGlsZHJlbl07XG4gICAgcmV0dXJuIGZpbmRUYXNrKHF1ZXVlLCBpZCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZGVsZXRlSXRlbSwgZmluZFRhc2sgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGhlbHBlcjtcbiIsImNvbnN0IGlkQXNzaWduZXIgPSAoKCkgPT4ge1xuICBsZXQgYXNzaWduZXIgPSAxO1xuXG4gIGNvbnN0IGdldElkTnVtYmVyID0gKCkgPT4ge1xuICAgIGFzc2lnbmVyICs9IDE7XG4gICAgcmV0dXJuIGFzc2lnbmVyIC0gMTtcbiAgfTtcblxuICByZXR1cm4geyBnZXRJZE51bWJlciB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaWRBc3NpZ25lcjtcbiIsImNsYXNzIFByaW9yaXR5IHtcbiAgI25hbWU7XG4gICNudW1iZXI7XG4gIGNvbG9yO1xuXG4gIHN0YXRpYyAjcHJpb3JpdGllc0FycmF5ID0gW1xuICAgIG5ldyBQcmlvcml0eShcIlVyZ2VudFwiLCAxLCBcIiNFODE2MTZcIiksXG4gICAgbmV3IFByaW9yaXR5KFwiSGlnaFwiLCAyLCBcIiNFRjU1MTNcIiksXG4gICAgbmV3IFByaW9yaXR5KFwiTWVkaXVtXCIsIDMsIFwiI0YzREQxMVwiKSxcbiAgICBuZXcgUHJpb3JpdHkoXCJMb3dcIiwgNCwgXCIjMjJDNTFGXCIpLFxuICAgIG5ldyBQcmlvcml0eShcIk9wdGlvbmFsXCIsIDUsIFwiIzIzMzZFMFwiKSxcbiAgXTtcblxuICBzdGF0aWMgZ2V0IHByaW9yaXRpZXMoKSB7XG4gICAgcmV0dXJuIFsuLi5Qcmlvcml0eS4jcHJpb3JpdGllc0FycmF5XTtcbiAgfVxuXG4gIHN0YXRpYyBwcmlvcml0eShudW1iZXIpIHtcbiAgICByZXR1cm4gUHJpb3JpdHkuI3ByaW9yaXRpZXNBcnJheVtudW1iZXIgLSAxXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIG51bWJlciwgY29sb3IpIHtcbiAgICB0aGlzLiNuYW1lID0gbmFtZTtcbiAgICB0aGlzLiNudW1iZXIgPSBudW1iZXI7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI25hbWU7XG4gIH1cblxuICBnZXQgbnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLiNudW1iZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpb3JpdHk7XG4iLCIvKiAxLi0gSWYgYSB0b2RvJ3MgaXMgYSBwYXJlbnQsIHRoZXkgZ2V0IGFkZGVkIHRvIHRoZSBwZW5kaW5nIHRhc2tzIHdoZW4gY3JlYXRlZFxuICAgMi4tIFNvcnQgdGhlIHBlbmRpbmcgdGFza3MgYXJyYXkgYnkgcHJpb3JpdHksIGFuZCBzb3J0IHRoZSBjaGlsZHJlbiBhcnJheSBieSBwcmlvcml0eSBhcyB3ZWxsICovXG5cbmltcG9ydCBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5jbGFzcyBQcm9qZWN0IHtcbiAgI3BlbmRpbmdUYXNrcztcbiAgI2NvbXBsZXRlZFRhc2tzO1xuXG4gIHN0YXRpYyBzZWxlY3RlZDtcblxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLiNwZW5kaW5nVGFza3MgPSBbXTtcbiAgICB0aGlzLiNjb21wbGV0ZWRUYXNrcyA9IFtdO1xuICB9XG5cbiAgZ2V0IHBlbmRpbmcoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLiNwZW5kaW5nVGFza3NdO1xuICB9XG5cbiAgZ2V0IGNvbXBsZXRlZCgpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuI2NvbXBsZXRlZFRhc2tzXTtcbiAgfVxuXG4gIGFkZFBlbmRpbmcoaXRlbSkge1xuICAgIHRoaXMuI3BlbmRpbmdUYXNrcy5wdXNoKGl0ZW0pO1xuICB9XG5cbiAgYWRkQ29tcGxldGVkKGl0ZW0pIHtcbiAgICB0aGlzLiNjb21wbGV0ZWRUYXNrcy5wdXNoKGl0ZW0pO1xuICB9XG5cbiAgY29tcGxldGVUb2RvKGlkKSB7XG4gICAgbGV0IHRhc2sgPSBoZWxwZXIuZGVsZXRlSXRlbSh0aGlzLiNwZW5kaW5nVGFza3MsIGlkKTtcbiAgICB0aGlzLmFkZENvbXBsZXRlZCh0YXNrKTtcbiAgfVxuXG4gIHJlc3VtZVRvZG8oaWQpIHtcbiAgICBsZXQgdGFzayA9IGhlbHBlci5kZWxldGVJdGVtKHRoaXMuI2NvbXBsZXRlZFRhc2tzLCBpZCk7XG4gICAgdGhpcy5hZGRQZW5kaW5nKHRhc2spO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJpbXBvcnQgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IGlkQXNzaWduZXIgZnJvbSBcIi4vaWRBc3NpZ25lclwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRvZG9Db21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Ub2RvQ29tcG9uZW50XCI7XG5pbXBvcnQgY2hlY2tlZCBmcm9tIFwiLi4vYXNzZXRzL2NoZWNrZWQuc3ZnXCI7XG5pbXBvcnQgdW5jaGVja2VkIGZyb20gXCIuLi9hc3NldHMvdW5jaGVja2VkLnN2Z1wiO1xuXG4vKiAxLi0gQmUgYWJsZSB0byBjcmVhdGUgYW5kIGRlbGV0ZSB0b2RvJ3Mg4pyU77iPXG4gICAyLi0gSWYgYSB0b2RvJ3MgaXMgYSBwYXJlbnQsIHRoZXkgZ2V0IGFkZGVkIHRvIHRoZSBwZW5kaW5nIHRhc2tzIHdoZW4gY3JlYXRlZCDinJTvuI9cbiAgIDMuLSBJZiBhIHBhcmVudCB0b2RvIGlzIGRlbGV0ZWQsIGFsbCBpdCdzIGNoaWxkcmVuIGFyZSBkZWxldGVkIGFzIHdlbGwg4pyU77iPXG4gICA0Li0gT25seSBwYXJlbnQncyB0b2RvIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGNvbXBsZXRlZCB0YXNrcyBhcnJheSwgaWYgYSBwYXJlbnQgdG9kbyBpcyBjaGVja2VkLCBhbGwgaXQncyBjaGlsZHJlbiB3aWxsIGJlIOKclO+4j1xuICAgNS4tIFNvcnQgdGhlIHBlbmRpbmcgdGFza3MgYXJyYXkgYnkgcHJpb3JpdHksIGFuZCBzb3J0IHRoZSBjaGlsZHJlbiBhcnJheSBieSBwcmlvcml0eSBhcyB3ZWxsICovXG5cbmNsYXNzIFRvZG8ge1xuICAjcGFyZW50O1xuICAjY2hpbGRyZW47XG4gICNpZDtcbiAgI2lzQ2hlY2tlZDtcbiAgI3Byb2plY3Q7XG5cbiAgY29uc3RydWN0b3IodGl0bGUsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgaXNDaGVja2VkLCBwYXJlbnQgPSBudWxsKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLiNpc0NoZWNrZWQgPSBpc0NoZWNrZWQ7XG4gICAgdGhpcy4jaWQgPSBpZEFzc2lnbmVyLmdldElkTnVtYmVyKCk7XG4gICAgdGhpcy4jcGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuI3Byb2plY3QgPSBQcm9qZWN0LnNlbGVjdGVkO1xuICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBudWxsO1xuICAgIGlmICh0aGlzLiNwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuI2NoaWxkcmVuID0gW107XG4gICAgICAvLyBJZiB0aGUgdG9kbyBpcyBhbHJlYWR5IGNoZWNrZWQgYWRkIGl0IHRvIHRoZSBjb21wbGV0ZWQgdGFza3MgYXJyYXlcbiAgICAgIC8vIG9mIHRoZSBwYXJlbnQgcHJvamVjdFxuICAgICAgdGhpcy5jaGVja1xuICAgICAgICA/IFByb2plY3Quc2VsZWN0ZWQuYWRkQ29tcGxldGVkKHRoaXMpXG4gICAgICAgIDogUHJvamVjdC5zZWxlY3RlZC5hZGRQZW5kaW5nKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiNjaGlsZHJlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZVRvZG8odGl0bGUsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgaXNDaGVja2VkKSB7XG4gICAgbGV0IGEgPSBuZXcgVG9kbyh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBpc0NoZWNrZWQsIHRoaXMpO1xuICAgIHRoaXMuI2NoaWxkcmVuLnB1c2goYSk7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lkO1xuICB9XG5cbiAgZ2V0IGNoaWxkcmVuKCkge1xuICAgIGlmICh0aGlzLiNjaGlsZHJlbikgcmV0dXJuIFsuLi50aGlzLiNjaGlsZHJlbl07XG4gICAgcmV0dXJuIHRoaXMuI2NoaWxkcmVuO1xuICB9XG5cbiAgZ2V0IHBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4jcGFyZW50O1xuICB9XG5cbiAgdG9nZ2xlQ2hlY2soKSB7XG4gICAgaWYgKHRoaXMuI2lzQ2hlY2tlZCkge1xuICAgICAgdGhpcy51bmNoZWNrVG9kbygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoZWNrVG9kbygpO1xuICAgIH1cbiAgfVxuXG4gIHVuY2hlY2tUb2RvKCkge1xuICAgIGxldCBlbGVtZW50ID0gdGhpcy5kb21FbGVtZW50O1xuICAgIGxldCBpbWcgPVxuICAgICAgdGhpcy5kb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2tCdXR0b25NaW5pXCIpLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIHRoaXMuI2lzQ2hlY2tlZCA9IGZhbHNlO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlZFRhc2tcIik7XG4gICAgaW1nLnNyYyA9IHVuY2hlY2tlZDtcbiAgICBpZiAodGhpcy4jcGFyZW50ID09PSBudWxsKSB7XG4gICAgICBUb2RvQ29tcG9uZW50Lm1vdmVUb1BlbmRpbmcoZWxlbWVudCk7XG4gICAgICB0aGlzLnByb2plY3QucmVzdW1lVG9kbyh0aGlzLmlkKTtcbiAgICB9XG4gIH1cblxuICBjaGVja1RvZG8oKSB7XG4gICAgbGV0IGVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7XG4gICAgbGV0IGltZyA9XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGVja0J1dHRvbk1pbmlcIikuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgdGhpcy4jaXNDaGVja2VkID0gdHJ1ZTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRUYXNrXCIpO1xuICAgIGltZy5zcmMgPSBjaGVja2VkO1xuICAgIGlmICh0aGlzLiNwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIFRvZG9Db21wb25lbnQubW92ZVRvQ29tcGxldGVkKGVsZW1lbnQpO1xuICAgICAgdGhpcy5wcm9qZWN0LmNvbXBsZXRlVG9kbyh0aGlzLmlkKTtcbiAgICB9XG4gIH1cblxuICBnZXQgcHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy4jcHJvamVjdDtcbiAgfVxuXG4gIGdldCBjaGVjaygpIHtcbiAgICByZXR1cm4gdGhpcy4jaXNDaGVja2VkO1xuICB9XG5cbiAgaXNTdWJ0YXNrKCkge1xuICAgIHJldHVybiB0aGlzLiNwYXJlbnQgIT09IG51bGw7XG4gIH1cblxuICAjcmVjdXJzaXZlQ2hlY2soYXJyYXksIGluZGV4ID0gMCkge1xuICAgIGlmIChhcnJheVtpbmRleF0gJiYgYXJyYXlbaW5kZXhdLmNoZWNrID09PSBmYWxzZSkge1xuICAgICAgYXJyYXlbaW5kZXhdLnRvZ2dsZUNoZWNrKCk7XG4gICAgICByZXR1cm4gdGhpcy4jcmVjdXJzaXZlQ2hlY2soYXJyYXksIGluZGV4ICsgMSk7XG4gICAgfVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vSW1wb3J0IHN0YXRlbWVudHNcbmltcG9ydCBcIi4vc3R5bGUvbWFpbi5zY3NzXCI7XG5pbXBvcnQgTmVyb3MgZnJvbSBcIi4vbW9kdWxlcy9OZXJvc1wiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vbW9kdWxlcy90b2RvXCI7XG5pbXBvcnQgVGFza0NvbXBvbmVudCBmcm9tIFwiLi9tb2R1bGVzL2NvbXBvbmVudHMvVGFza0NvbXBvbmVudFwiO1xuaW1wb3J0IFRvZG9Db21wb25lbnQgZnJvbSBcIi4vbW9kdWxlcy9jb21wb25lbnRzL1RvZG9Db21wb25lbnRcIjtcbmltcG9ydCBQcm9qZWN0Q29tcG9uZW50IGZyb20gXCIuL21vZHVsZXMvY29tcG9uZW50cy9Qcm9qZWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RcIjtcbmltcG9ydCBoZWxwZXIgZnJvbSBcIi4vbW9kdWxlcy9oZWxwZXJcIjtcbmltcG9ydCBET01OZXcgZnJvbSBcIi4vbW9kdWxlcy9jb21wb25lbnRzL25ld1wiO1xuXG4vL0luaXRpYWxpemUgbW9kdWxlc1xuY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiQmlnIHByb2plY3RcIik7XG5Qcm9qZWN0LnNlbGVjdGVkID0gcHJvamVjdDtcbmNvbnN0IHByb2plY3RNb2R1bGUgPSBuZXcgTmVyb3MoXCJwcm9qZWN0c1wiKTtcblxubGV0IHRvZG8xID0gbmV3IFRvZG8oXG4gIFwiRmlyc3QgT09QIHRvZG9cIixcbiAgXCIyNC0wNS0yMDIzXCIsXG4gIDQsXG4gIFwiVGhpcyBpcyBhIHRvZG8gbWFkZSB3aXRoIE9PUCBwcmluY2lwbGVzXCIsXG4gIHRydWVcbik7XG5cbnRvZG8xLmNyZWF0ZVRvZG8oXG4gIFwiZmlyc3Qgb2YgRmlyc3QgT09QIHRvZG9cIixcbiAgXCIyNC0wNS0yMDIzXCIsXG4gIDIsXG4gIFwiVGhpcyBpcyBhIHRvZG8gbWFkZSB3aXRoIE9PUCBwcmluY2lwbGVzIDFcIixcbiAgdHJ1ZVxuKTtcblxudG9kbzEuY3JlYXRlVG9kbyhcbiAgXCJzZWNvbmQgb2YgRmlyc3QgT09QIHRvZG9cIixcbiAgXCIyNC0wNS0yMDIzXCIsXG4gIDUsXG4gIFwiVGhpcyBpcyBhIHRvZG8gbWFkZSB3aXRoIE9PUCBwcmluY2lwbGVzIDJcIixcbiAgdHJ1ZVxuKTtcblxuY29uc3QgcHJvamVjdDIgPSBuZXcgUHJvamVjdChcIlNlY29uZCBiaWcgcHJvamVjdFwiKTtcblByb2plY3Quc2VsZWN0ZWQgPSBwcm9qZWN0MjtcblxubGV0IHRvZG8yID0gbmV3IFRvZG8oXG4gIFwic2Vjb25kIE9PUCB0b2RvXCIsXG4gIFwiMjQtMDUtMjAyM1wiLFxuICAxLFxuICBcIlRoaXMgaXMgYSB0b2RvIG1hZGUgd2l0aCBPT1AgcHJpbmNpcGxlc1wiLFxuICBmYWxzZVxuKTtcblxudG9kbzIuY3JlYXRlVG9kbyhcbiAgXCJmaXJzdCBvZiBzZWNvbmQgT09QIHRvZG9cIixcbiAgXCIyNC0wNS0yMDIzXCIsXG4gIDIsXG4gIFwiVGhpcyBpcyBhIHRvZG8gbWFkZSB3aXRoIE9PUCBwcmluY2lwbGVzIDFcIixcbiAgZmFsc2Vcbik7XG5cbnRvZG8yLmNyZWF0ZVRvZG8oXG4gIFwic2Vjb25kIG9mIHNlY29uZCBPT1AgdG9kb1wiLFxuICBcIjI0LTA1LTIwMjNcIixcbiAgMyxcbiAgXCJUaGlzIGlzIGEgdG9kbyBtYWRlIHdpdGggT09QIHByaW5jaXBsZXMgMlwiLFxuICBmYWxzZVxuKTtcblxubGV0IHByb2plY3RDb21wb25lbnQgPSBuZXcgUHJvamVjdENvbXBvbmVudChcImJpZ3RvZG9cIiwgeyBwcm9qZWN0OiBwcm9qZWN0IH0pO1xubGV0IHByb2plY3QyQ29tcG9uZW50ID0gbmV3IFByb2plY3RDb21wb25lbnQoXCJzZWNvbmRiaWd0b2RvXCIsIHtcbiAgcHJvamVjdDogcHJvamVjdDIsXG59KTtcblxubGV0IG1vZGFsID0gbmV3IE5lcm9zKFwibW9kYWxDb250YWluZXJcIik7XG5cbi8vIFByb2plY3Quc2VsZWN0ZWQgPSBudWxsO1xuXG5wcm9qZWN0TW9kdWxlLnJlZ2lzdGVyQ29tcG9uZW50KHByb2plY3RDb21wb25lbnQpO1xucHJvamVjdE1vZHVsZS5yZWdpc3RlckNvbXBvbmVudChwcm9qZWN0MkNvbXBvbmVudCk7XG5cbi8vIHByaW9yaXRpZXMucmVnaXN0ZXJDb21wb25lbnQoVGVzdENvbXBvbmVudCk7XG4vLyBsZXQgYSA9IG5ldyBUZXh0Q29tcG9uZW50KFwidGV4dFwiLCB7XG4vLyAgIG5hbWU6IFwiRG9tZXN0aWMgYW5pbWFsc1wiLFxuLy8gICBjb250ZW50czogXCJDYXRzIGFuZCBkb2dzXCIsXG4vLyB9KTtcbi8vIHByaW9yaXRpZXMucmVnaXN0ZXJDb21wb25lbnQoYSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=