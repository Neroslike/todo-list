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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/calendar.svg */ "./src/assets/calendar.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n  background-color: #343a40;\n  height: 90%;\n  min-width: 75%;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: grid;\n  grid-template-columns: minmax(200px, 1.2fr) 2px 3fr;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border-radius: 10px;\n  border-top: #464e55 4px solid;\n  border-left: #464e55 2px solid;\n}\n\n.separator {\n  background-color: #212529;\n}\n\n.mainContent {\n  display: grid;\n  grid-template-rows: 1.5fr 2px 1fr;\n  overflow: hidden;\n}\n\n.pending {\n  overflow: hidden;\n  border-bottom: #15181c 2px solid;\n  border-left: #464e55 2px solid;\n  display: grid;\n  max-height: 100%;\n  grid-template-rows: min-content minmax(0, 100%);\n}\n\n.completed {\n  overflow: hidden;\n  border-top: #464e55 2px solid;\n  border-left: #464e55 2px solid;\n  display: grid;\n  grid-template-rows: min-content 1fr;\n  height: 100%;\n}\n\n.dashboardHeader {\n  font-size: calc(1vw + 1rem);\n}\n\n.sidebar {\n  border-right: #15181c 2px solid;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 2;\n}\n.sidebar .dashboardHeader:nth-of-type(2) {\n  margin-top: clamp(0.5rem, 0.5rem + 1vw, 1rem);\n  margin-bottom: clamp(1rem, 1rem + 1vw, 1.5rem);\n}\n\n.burgerMenu,\n.goBack {\n  display: none;\n}\n\n#projectButtons {\n  display: flex;\n  flex-direction: row;\n}\n#projectButtons #deleteProject {\n  background: hsl(0deg, 82%, 63%);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px hsl(0deg, 67%, 77%);\n}\n\n.github {\n  margin-top: auto;\n}\n.github h2 {\n  margin: 0.7rem 0;\n}\n.github h2 a {\n  text-decoration: none;\n  color: #e7e7e7;\n}\n\n.priorityName {\n  padding-left: clamp(0.7rem, 0.7rem + 1vw, 1rem);\n  font-size: clamp(8px, 1vw, 64px);\n  margin: 0;\n  font-weight: 300;\n  align-self: center;\n  justify-self: center;\n}\n\n.priorityColorContainer {\n  background-color: #495057;\n  padding: clamp(8px, 0.3rem + 0.3vw, 64px);\n  outline: 2px solid #6c757d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.priorityColor {\n  border-radius: 50%;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\ninput[type=color]::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n\ninput[type=color]::-webkit-color-swatch {\n  border: none;\n  border-radius: 50%;\n}\n\n.picker {\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  align-self: center;\n  cursor: pointer;\n}\n\n.priority {\n  background-color: #212529;\n  border-top: 2px solid #a0b1c3;\n  display: flex;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n}\n\n#priorities,\n#projects {\n  margin-bottom: clamp(1rem, 1rem + 1vw, 1.5rem);\n}\n\n#priorities {\n  display: flex;\n  flex-direction: column;\n  gap: clamp(6px, 0.3vw, 12px);\n}\n#priorities .priority {\n  padding-right: clamp(1.4rem, 1rem + 1vw, 2rem);\n}\n\n.priorityColorContainer .priorityColor {\n  height: clamp(0.5rem, 0.5rem + 1vw, 1.3rem);\n  width: clamp(0.5rem, 0.5rem + 1vw, 1.3rem);\n}\n\n.sidebarButtons {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6vw;\n}\n\n.hidePriorities {\n  display: none;\n}\n\n.TodosContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 clamp(0.5rem, 0.5rem + 1.5vw, 3rem);\n  overflow-y: auto;\n}\n\n.taskContainer {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: clamp(4px, 0.4vw, 8px);\n}\n\n.task {\n  display: grid;\n  background-color: #212529;\n  grid-template-columns: min-content 1fr min-content;\n  width: 100%;\n  border-radius: clamp(0.5rem, 1vw + 0.4rem, 1rem);\n  overflow: hidden;\n  border-top: 2px solid #a0b1c3;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n  margin: clamp(0.2rem, 0.2rem + 0.4vw, 1rem) 0;\n}\n\n@media (max-width: 260px) {\n  .taskTime {\n    display: none;\n  }\n}\n.taskButtonsRight {\n  justify-self: flex-end;\n}\n\n.taskButtons {\n  display: flex;\n}\n\n.taskMiniContainer {\n  background-color: #495057;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: clamp(0.4rem, 0.3rem + 0.5vw, 3rem);\n  cursor: pointer;\n  user-select: none;\n}\n\n.priorityButtonMini {\n  cursor: auto;\n}\n\n.taskColor {\n  height: clamp(0.8rem, 0.5rem + 1vw, 4rem);\n  width: clamp(0.8rem, 0.5rem + 1vw, 4rem);\n  border-radius: 50%;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\n.taskButton {\n  height: clamp(0.8rem, 0.5rem + 1vw, 4rem);\n  width: clamp(0.8rem, 0.5rem + 1vw, 4rem);\n}\n\n.taskMiniContainer:nth-last-of-type(-n + 2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskMiniContainer:nth-child(-n+2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskTime {\n  padding-left: calc(1rem + 1vw);\n  padding-right: 10px;\n}\n.taskTime p {\n  white-space: nowrap;\n  color: #adb5bd;\n}\n\n.taskTitle {\n  margin-right: auto;\n  flex: 1;\n  padding-left: 10px;\n  min-width: 1rem;\n}\n.taskTitle p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.taskTitle,\n.taskTime {\n  justify-self: center;\n  align-self: center;\n}\n.taskTitle p,\n.taskTime p {\n  font-size: clamp(8px, 0.5rem + 0.7vw, 64px);\n  margin: 0;\n}\n\n.subtasksContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  align-self: flex-end;\n  width: 90%;\n}\n\n.subtask {\n  margin: 0 0 clamp(0.2rem, 0.2rem + 0.4vw, 1rem) 0;\n}\n.subtask .taskMiniContainer {\n  padding: clamp(8px, 0.4rem + 0.4vw, 48px);\n}\n.subtask .taskMiniContainer .taskButton {\n  height: clamp(10px, 0.5rem + 0.4vw, 36px);\n  width: clamp(10px, 0.5rem + 0.4vw, 36px);\n}\n.subtask .taskMiniContainer .taskColor {\n  width: clamp(10px, 0.5rem + 0.4vw, 36px);\n  height: clamp(10px, 0.5rem + 0.4vw, 36px);\n}\n.subtask .taskTitle p,\n.subtask .taskTime p {\n  font-size: clamp(6px, 0.5rem + 0.4vw, 36px);\n}\n\n.completedTask {\n  text-decoration: line-through;\n  opacity: 0.6;\n  border: none;\n  box-shadow: 0px 2px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n}\n\n.taskDataContainer {\n  display: flex;\n  cursor: pointer;\n  overflow: hidden;\n}\n\n.addSubtask {\n  margin-top: 0.3vw;\n  align-self: flex-start;\n}\n\n#completedTodos > .taskContainer > .subtasksContainer button {\n  display: none;\n}\n\n.modal {\n  background-color: hsla(0deg, 0%, 0%, 0.502);\n  backdrop-filter: blur(3px);\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#modalContainer {\n  background-color: #343a40;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border: 1px solid gray;\n  border-radius: 12px;\n  position: relative;\n  height: max-content;\n  max-height: 70vh;\n  width: max-content;\n  max-width: 70vw;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.closeButton:hover {\n  cursor: pointer;\n}\n\nhr {\n  background-color: gray;\n  height: 1px;\n  border: none;\n}\n\n.deleteContainer #confirm {\n  background: hsl(0deg, 82%, 63%);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px hsl(0deg, 67%, 77%);\n}\n.deleteContainer .buttonsContainer {\n  display: flex;\n  gap: 1rem;\n}\n\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4vw;\n}\n.field label {\n  font-size: calc(1vw + 6px);\n}\n.field input,\n.field select,\n.field textarea {\n  font-size: calc(0.8vw + 4px);\n  border: none;\n  outline: none;\n  background: #212529;\n  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n  padding: calc(0.5vw + 2px);\n  border-radius: 0.5vw;\n  color: #f8f9fa;\n}\n\n.DuedateField input {\n  font-size: calc(0.8vw + 4px);\n}\n.DuedateField ::-webkit-calendar-picker-indicator {\n  padding: 5px;\n  cursor: pointer;\n  border-radius: 3px;\n  filter: invert(1);\n}\n\n.newForm {\n  min-width: 35vw;\n  padding: 0 calc(1vw + 6px) calc(1vw + 6px) calc(1vw + 6px);\n  display: grid;\n  grid-template-columns: min-content 2fr;\n  gap: calc(0.5vw + 4px);\n}\n\n.TitleField {\n  grid-column: 1/3;\n}\n\n.DescriptionField {\n  grid-column: 1/3;\n}\n.DescriptionField textarea {\n  resize: none;\n  height: 20vh;\n  max-height: 20vh;\n}\n\n.PriorityField select {\n  height: 100%;\n  appearance: none;\n  cursor: pointer;\n  background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg) no-repeat right 0.8rem center/1.4em, #212529;\n  /* Remove focus outline */\n  /* Remove IE arrow */\n}\n.PriorityField select:focus {\n  outline: none;\n}\n.PriorityField select::-ms-expand {\n  display: none;\n}\n\n.newTitle {\n  padding: 0;\n}\n\n.createButton {\n  grid-column: 1/3;\n  width: max-content;\n  justify-self: center;\n}\n\n.titleView {\n  padding: 0;\n  margin: 0;\n  user-select: auto;\n  overflow-wrap: break-word;\n  text-align: center;\n  max-width: fit-content;\n}\n\n.titleViewContainer {\n  display: flex;\n  justify-content: center;\n  margin: 0 2vw;\n}\n\n.descriptionViewContainer {\n  margin: 0 1vw;\n}\n\n.infoContainer {\n  display: grid;\n  grid-template-rows: 1fr auto max-content auto max-content;\n}\n.infoContainer .separator {\n  height: 1px;\n}\n.infoContainer hr {\n  width: 90%;\n}\n\n.dateViewContainer {\n  display: flex;\n  flex-direction: column;\n}\n\nh3 {\n  margin: 0;\n}\n\n.dateStringContainer {\n  display: flex;\n}\n.dateStringContainer p {\n  margin: 0;\n  font-size: clamp(8px, 1vw, 64px);\n  font-weight: 300;\n}\n\n.priorityViewContainer {\n  display: flex;\n  flex-direction: column;\n}\n.priorityViewContainer .priority .taskColor {\n  height: clamp(0.5rem, 0.5rem + 1vw, 1rem);\n  width: clamp(0.5rem, 0.5rem + 1vw, 1rem);\n}\n\n.todoDataContainer {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 1rem;\n}\n.todoDataContainer .priority {\n  border: none;\n  cursor: auto;\n}\n.todoDataContainer .priority .priorityName {\n  padding-right: 10px;\n}\n\n.mainTaskContainer {\n  border-bottom: #15181c 2px solid;\n}\n\n.mainTaskContainer,\n.newContainer,\n.newProjectContainer,\n.deleteContainer {\n  padding: 0 1vw 1vw 1vw;\n}\n\n.viewSubContainer {\n  border-top: #464e55 2px solid;\n  padding: 1vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.viewSubContainer h1 {\n  padding: 0;\n  margin: 0;\n}\n\n.descriptionView {\n  max-width: fit-content;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n}\n\n.ButtonsView {\n  border-top: #464e55 2px solid;\n  display: flex;\n  gap: 0.8vw;\n  justify-content: center;\n  width: 100%;\n  padding: 1vw 0;\n  position: sticky;\n  bottom: 0;\n  background-color: #343a40;\n}\n\n.headerContainer {\n  position: relative;\n}\n.headerContainer .closeButton {\n  font-size: calc(0.3rem + 1.5vw);\n  position: absolute;\n  justify-self: flex-start;\n  align-self: flex-start;\n  top: 0;\n  z-index: 100;\n}\n\n.viewTitle,\n.viewDescription {\n  word-wrap: break-word;\n  word-break: break-word;\n}\n\n.viewTitle {\n  padding: 0 clamp(1.5rem, 1.5rem + 1vw, 4rem);\n}\n\n#projects {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5vw;\n  width: 100%;\n  max-height: calc(2rem + 10vh);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.projectContainer {\n  background-color: hsla(200deg, 7%, 8%, 0.6);\n  width: 100%;\n  padding: 0.5vw 0 0.5vw 0.7vw;\n  cursor: pointer;\n  transition: background-color 0.2s ease-out 0s;\n}\n\n.projectContainer:hover {\n  background-color: hsl(200deg, 7%, 8%);\n}\n\n#selectedProject {\n  background-color: hsl(200deg, 7%, 8%);\n}\n\nbutton i {\n  margin-right: 0.5vw;\n}\n\n@media (max-width: 300px) {\n  .taskTime {\n    display: none;\n  }\n}\n@media (max-width: 800px) {\n  .taskMiniContainer {\n    padding: clamp(0.6rem, 0.6rem + 1vw, 3rem);\n  }\n  .taskColor,\n  .taskButton {\n    height: clamp(1rem, 1rem + 1vw, 3rem);\n    width: clamp(1rem, 1rem + 1vw, 3rem);\n  }\n  .taskTitle p {\n    font-size: clamp(1rem, 0.8rem + 1vw, 3rem);\n  }\n  .taskTime p {\n    font-size: clamp(0.4rem, 0.4em + 1vw, 1.5rem);\n  }\n  .addSubtask {\n    font-size: clamp(1rem, 0.8rem + 1vw, 3rem);\n  }\n  .subtask .taskMiniContainer {\n    padding: clamp(0.4rem, 0.4rem + 1vw, 2.5rem);\n  }\n  .subtask .taskMiniContainer .taskButton,\n  .subtask .taskMiniContainer .taskColor {\n    height: clamp(0.8rem, 0.8rem + 1vw, 2.5rem);\n    width: clamp(0.8rem, 0.8rem + 1vw, 2.5rem);\n  }\n  .subtask .taskTitle p {\n    font-size: clamp(0.8rem, 0.6rem + 1vw, 2.5rem);\n  }\n  .subtask .taskTime p {\n    font-size: clamp(0.4rem, 0.4rem + 1vw, 1.5rem);\n  }\n}\n@media (max-width: 800px) {\n  .container {\n    width: 100%;\n    height: 100%;\n    grid-template-columns: 1fr;\n    border: none;\n    border-radius: 0;\n  }\n  .container button {\n    font-size: clamp(1rem, 0.8rem + 1vw, 3rem);\n  }\n  .container .dashboardHeader {\n    font-size: clamp(1.5rem, 1.5rem + 1.5vw, 3rem);\n  }\n  .separator {\n    display: none;\n  }\n  .pending {\n    border-left: none;\n  }\n  .mainContent {\n    height: 100vh;\n    grid-template-rows: 2fr 1fr;\n    overflow: hidden;\n  }\n  .mainContent .headerContainer {\n    border-bottom: 1px gray solid;\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  }\n  .headerContainer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 1;\n    position: static;\n  }\n  .burgerMenu,\n  .goBack,\n  .closeButton {\n    font-size: clamp(1.5rem, 1.5rem + 1.5vw, 3rem);\n    position: absolute;\n    left: 1rem;\n    cursor: pointer;\n    user-select: none;\n    display: block;\n  }\n  .sidebar {\n    transition: margin-left 0.5s;\n  }\n  .hideSidebar {\n    margin-left: calc(-100% - 1px);\n    transition: margin-left 0.5s;\n  }\n}\n@media (max-height: 400px) {\n  .container {\n    height: 100%;\n    width: 100%;\n  }\n  .mainContent {\n    overflow-y: scroll;\n  }\n}\n@media (max-width: 800px) {\n  .sidebar {\n    position: absolute;\n    height: 100vh;\n    width: 100vw;\n    background: #343a40;\n  }\n  .sidebar .sidebarButtons {\n    gap: clamp(0.5rem, 0.5rem + 0.5vw, 1rem);\n  }\n  .priority .priorityName {\n    font-size: clamp(1rem, 0.8rem + 1vw, 3rem);\n  }\n  .priority .priorityColorContainer .priorityColor {\n    height: clamp(1rem, 1rem + 1vw, 3rem);\n    width: clamp(1rem, 1rem + 1vw, 3rem);\n  }\n}\n@media (max-width: 800px) {\n  #projects {\n    gap: clamp(0.3rem, 0.3rem + 0.5vw, 0.8rem);\n  }\n  .projectContainer h3 {\n    margin-left: clamp(0.5rem, 0.5rem + 0.5vw, 1rem);\n  }\n}\n@media (max-width: 800px) {\n  .modal {\n    width: auto;\n    height: auto;\n    overflow-y: hidden;\n    border-radius: 0;\n  }\n  #modalContainer {\n    border-radius: 0;\n    width: 100vw;\n    max-height: 100%;\n    max-width: 100vw;\n    height: 100%;\n    position: absolute;\n  }\n  #modalContainer h1 {\n    font-size: clamp(2rem, 2rem + 1.5vw, 4rem);\n  }\n  #modalContainer button {\n    font-size: clamp(1.2rem, 1.2rem + 1vw, 2rem);\n  }\n  #modalContainer form label {\n    font-size: clamp(1.2rem, 1.2rem + 1vw, 2rem);\n  }\n  #modalContainer form select,\n  #modalContainer form input,\n  #modalContainer form textarea {\n    font-size: clamp(1.2rem, 1.2rem + 1vw, 2rem);\n    border-radius: clamp(0.5rem, 0.5rem + 0.5vw, 1rem);\n  }\n  #modalContainer form input,\n  #modalContainer form textarea,\n  #modalContainer form select {\n    padding: clamp(0.3rem, 0.3rem + 1vw, 0.6rem);\n  }\n  .newForm button {\n    align-self: center;\n  }\n  .newForm .PriorityField select {\n    background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg) no-repeat right 0.4rem center/1.4em, #212529;\n  }\n  .newForm .DuedateField input {\n    -webkit-appearance: none;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat right 0.8rem center/1.2rem, #212529;\n    width: max-content;\n  }\n  .newForm .DuedateField ::-webkit-inner-spin-button,\n  .newForm .DuedateField ::-webkit-calendar-picker-indicator {\n    display: none;\n    -webkit-appearance: none;\n  }\n  .deleteContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .headerContainer .closeButton {\n    top: 1vw;\n    font-size: clamp(2rem, 2rem + 1.5vw, 4rem);\n  }\n}\n@media (max-width: 800px) {\n  .infoContainer {\n    min-width: 100%;\n  }\n  .infoContainer .headerContainer {\n    padding-top: calc(2rem + 1vw);\n  }\n  .infoContainer .headerContainer .closeButton {\n    position: fixed;\n    justify-self: flex-start;\n    align-self: flex-start;\n    top: calc(0.5rem + 0.5vw);\n    z-index: 100;\n  }\n  .infoContainer p {\n    font-size: 1rem;\n  }\n  .infoContainer .viewDescription {\n    padding: 0 clamp(1rem, 1rem + 0.5vw, 2rem);\n  }\n  .infoContainer .todoDataContainer {\n    padding-bottom: 1rem;\n  }\n  .viewTitle {\n    word-wrap: break-word;\n    word-break: break-word;\n    padding: 0 clamp(2rem, 2rem + 0.5vw, 4rem);\n  }\n  .viewNavbar {\n    height: clamp(2.5rem, 2.5rem + 1.5vw, 4.5rem);\n    width: 100%;\n    position: fixed;\n    z-index: 99;\n    background: #343a40;\n    overflow-x: hidden;\n  }\n}\nhtml {\n  font-size: 16px;\n  font-family: \"Poppins\", sans-serif;\n  color: #f8f9fa;\n}\n\nbody {\n  background: linear-gradient(119.75deg, #6e9ecf 13.02%, #12263a 100%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-height: 100%;\n}\n\nh1 {\n  text-align: center;\n  font-size: 1.5vw;\n  padding: 0;\n  margin: 0.7vw 0;\n  user-select: none;\n}\n\n.projectTitle {\n  font-size: 1vw;\n  font-weight: 500;\n  padding: 0;\n  margin: 0;\n}\n\n.hidden {\n  display: none;\n}\n\nbutton {\n  background: #2887c8;\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px #6bb2e3;\n  border-radius: 8px;\n  outline: none;\n  border: none;\n  color: #f8f9fa;\n  padding: 6px 10px;\n  font-size: 1.1vw;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  cursor: pointer;\n}\n\n.deleteButton {\n  background: hsl(0deg, 82%, 63%);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px hsl(0deg, 67%, 77%);\n}\n\n.editButton {\n  background: rgb(111, 184, 55);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px rgb(188, 229, 156);\n}\n\n.taskTitle,\n.priorityName {\n  user-select: none;\n}\n\n@media (min-width: 800px) {\n  ::-webkit-scrollbar {\n    width: 12px;\n  }\n  ::-webkit-scrollbar-track {\n    border-radius: 8px;\n    background-color: #212529;\n    border: 1px solid rgb(38, 36, 36);\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  }\n  ::-webkit-scrollbar-thumb {\n    border-radius: 8px;\n    background-color: rgba(231, 231, 231, 0.7725490196);\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/_container.scss","webpack://./src/style/main.scss","webpack://./src/style/_priorities.scss","webpack://./src/style/_task.scss","webpack://./src/style/_modal.scss","webpack://./src/style/_form.scss","webpack://./src/style/_viewTodo.scss","webpack://./src/style/_project.scss","webpack://./src/style/mobile/_task.scss","webpack://./src/style/mobile/_container.scss","webpack://./src/style/mobile/_priorities.scss","webpack://./src/style/mobile/_projects.scss","webpack://./src/style/mobile/_modal.scss","webpack://./src/style/mobile/_viewTodo.scss"],"names":[],"mappings":"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","sourcesContent":[".container {\n  background-color: #343a40;\n  height: 90%;\n  min-width: 75%;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: grid;\n  grid-template-columns: minmax(200px, 1.2fr) 2px 3fr;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border-radius: 10px;\n  border-top: #464e55 4px solid;\n  border-left: #464e55 2px solid;\n}\n\n.separator {\n  background-color: #212529;\n}\n\n.mainContent {\n  display: grid;\n  grid-template-rows: 1.5fr 2px 1fr;\n  overflow: hidden;\n}\n\n.pending {\n  overflow: hidden;\n  border-bottom: #15181c 2px solid;\n  border-left: #464e55 2px solid;\n  display: grid;\n  max-height: 100%;\n  grid-template-rows: min-content minmax(0, 100%);\n}\n\n.completed {\n  overflow: hidden;\n  border-top: #464e55 2px solid;\n  border-left: #464e55 2px solid;\n  display: grid;\n  grid-template-rows: min-content 1fr;\n  height: 100%;\n}\n\n.dashboardHeader {\n  font-size: calc(1vw + 1rem);\n}\n\n.sidebar {\n  border-right: #15181c 2px solid;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 2;\n\n  .dashboardHeader:nth-of-type(2) {\n    margin-top: clamp(0.5rem, 0.5rem + 1vw, 1rem);\n    margin-bottom: clamp(1rem, 1rem + 1vw, 1.5rem);\n  }\n}\n\n.burgerMenu,\n.goBack {\n  display: none;\n}\n\n#projectButtons {\n  display: flex;\n  flex-direction: row;\n\n  #deleteProject {\n    background: hsl(0, 82%, 63%);\n    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px hsl(0, 67%, 77%);\n  }\n}\n\n.github {\n  margin-top: auto;\n\n  h2 {\n    margin: 0.7rem 0;\n\n    a {\n      text-decoration: none;\n      color: #e7e7e7;\n    }\n  }\n}\n","@import \"./index\", \"./mobile/index\";\n\nhtml {\n  font-size: 16px;\n  font-family: \"Poppins\", sans-serif;\n  color: #f8f9fa;\n}\n\nbody {\n  background: linear-gradient(119.75deg, #6e9ecf 13.02%, #12263a 100%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-height: 100%;\n}\n\nh1 {\n  text-align: center;\n  // font-size: calc(1rem + 1vw);\n  font-size: 1.5vw;\n  padding: 0;\n  margin: 0.7vw 0;\n  user-select: none;\n}\n\n.projectTitle {\n  font-size: 1vw;\n  font-weight: 500;\n  padding: 0;\n  margin: 0;\n}\n\n.hidden {\n  display: none;\n}\n\nbutton {\n  background: #2887c8;\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px #6bb2e3;\n  border-radius: 8px;\n  outline: none;\n  border: none;\n  color: #f8f9fa;\n  padding: 6px 10px;\n  font-size: 1.1vw;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  cursor: pointer;\n}\n\n.deleteButton {\n  background: hsl(0, 82%, 63%);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px hsl(0, 67%, 77%);\n}\n\n.editButton {\n  background: rgb(111, 184, 55);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px rgb(188, 229, 156);\n}\n\n.taskTitle,\n.priorityName {\n  user-select: none;\n}\n\n@media (min-width: 800px) {\n  ::-webkit-scrollbar {\n    width: 12px;\n  }\n\n  ::-webkit-scrollbar-track {\n    border-radius: 8px;\n    background-color: #212529;\n    border: 1px solid rgb(38, 36, 36);\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  }\n\n  ::-webkit-scrollbar-thumb {\n    border-radius: 8px;\n    background-color: #e7e7e7c5;\n  }\n}\n","$responsive-text-size: clamp(8px, 1vw, 64px);\n$responsive-button-size: clamp(0.5rem, 0.5rem + 1vw, 1.3rem);\n$responsive-prio-size: clamp(14px, calc(0.5rem + 0.4vw), 64px);\n$responsive-padding: clamp(1.4rem, 1rem + 1vw, 2rem);\n$responsive-margin: clamp(1rem, 1rem + 1vw, 1.5rem);\n.priorityName {\n  padding-left: clamp(0.7rem, 0.7rem + 1vw, 1rem);\n  font-size: $responsive-text-size;\n  margin: 0;\n  font-weight: 300;\n  align-self: center;\n  justify-self: center;\n}\n\n.priorityColorContainer {\n  background-color: #495057;\n  padding: clamp(8px, calc(0.3rem + 0.3vw), 64px);\n  outline: 2px solid #6c757d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.priorityColor {\n  border-radius: 50%;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\ninput[type=\"color\"]::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n\ninput[type=\"color\"]::-webkit-color-swatch {\n  border: none;\n  border-radius: 50%;\n}\n\n.picker {\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  align-self: center;\n  cursor: pointer;\n}\n\n.priority {\n  background-color: #212529;\n  border-top: 2px solid #a0b1c3;\n  display: flex;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n}\n\n#priorities,\n#projects {\n  margin-bottom: $responsive-margin;\n}\n\n#priorities {\n  display: flex;\n  flex-direction: column;\n  gap: clamp(6px, 0.3vw, 12px);\n\n  .priority {\n    padding-right: $responsive-padding;\n  }\n}\n\n.priorityColorContainer {\n  .priorityColor {\n    height: $responsive-button-size;\n    width: $responsive-button-size;\n  }\n}\n\n.sidebarButtons {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6vw;\n}\n\n.hidePriorities {\n  display: none;\n}\n","$big-responsive-text-size: clamp(8px, calc(0.5rem + 0.7vw), 64px);\n$big-responsive-button-size: clamp(14px, calc(0.5rem + 0.7vw), 64px);\n$small-responsive-text-size: clamp(6px, calc(0.5rem + 0.4vw), 36px);\n$small-responsive-button-size: clamp(10px, calc(0.5rem + 0.4vw), 36px);\n$responsive-button-size: clamp(0.8rem, 0.5rem + 1vw, 4rem);\n.TodosContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 clamp(0.5rem, 0.5rem + 1.5vw, 3rem);\n  // padding: 0 clamp(1rem, 1vw + 0.75rem, 3rem);\n  overflow-y: auto;\n}\n\n.taskContainer {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: clamp(4px, 0.4vw, 8px);\n}\n\n.task {\n  display: grid;\n  background-color: #212529;\n  grid-template-columns: min-content 1fr min-content;\n  width: 100%;\n  // min-width: max-content;\n  border-radius: clamp(0.5rem, 1vw + 0.4rem, 1rem);\n  overflow: hidden;\n  border-top: 2px solid #a0b1c3;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n  margin: clamp(0.2rem, 0.2rem + 0.4vw, 1rem) 0;\n}\n\n@media (max-width: 260px) {\n  .taskTime {\n    display: none;\n  }\n}\n\n.taskButtonsRight {\n  justify-self: flex-end;\n}\n\n.taskButtons {\n  display: flex;\n}\n\n.taskMiniContainer {\n  background-color: #495057;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: clamp(0.4rem, calc(0.3rem + 0.5vw), 3rem);\n  cursor: pointer;\n  user-select: none;\n}\n\n.priorityButtonMini {\n  cursor: auto;\n}\n\n.taskColor {\n  height: $responsive-button-size;\n  width: $responsive-button-size;\n  border-radius: 50%;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\n.taskButton {\n  height: $responsive-button-size;\n  width: $responsive-button-size;\n}\n\n.taskMiniContainer:nth-last-of-type(-n + 2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskMiniContainer:nth-child(-n + 2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskTime {\n  padding-left: calc(1rem + 1vw);\n  padding-right: 10px;\n\n  p {\n    white-space: nowrap;\n    color: #adb5bd;\n  }\n}\n\n.taskTitle {\n  margin-right: auto;\n  flex: 1;\n  padding-left: 10px;\n  // width: clamp(150px, calc(10vw + 10rem), 500px);\n  min-width: 1rem;\n\n  p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n}\n\n.taskTitle,\n.taskTime {\n  justify-self: center;\n  align-self: center;\n  p {\n    font-size: $big-responsive-text-size;\n    margin: 0;\n  }\n}\n\n.subtasksContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  align-self: flex-end;\n  width: 90%;\n}\n\n.subtask {\n  margin: 0 0 clamp(0.2rem, 0.2rem + 0.4vw, 1rem) 0;\n  // justify-content: center;\n\n  .taskMiniContainer {\n    padding: clamp(8px, calc(0.4rem + 0.4vw), 48px);\n\n    .taskButton {\n      height: $small-responsive-button-size;\n      width: $small-responsive-button-size;\n    }\n\n    .taskColor {\n      width: $small-responsive-button-size;\n      height: $small-responsive-button-size;\n    }\n  }\n\n  .taskTitle,\n  .taskTime {\n    p {\n      font-size: $small-responsive-text-size;\n    }\n  }\n}\n\n.completedTask {\n  text-decoration: line-through;\n  opacity: 0.6;\n  border: none;\n  box-shadow: 0px 2px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n}\n\n.taskDataContainer {\n  display: flex;\n  cursor: pointer;\n  overflow: hidden;\n}\n\n.addSubtask {\n  margin-top: 0.3vw;\n  align-self: flex-start;\n}\n\n#completedTodos > .taskContainer > .subtasksContainer {\n  button {\n    display: none;\n  }\n}\n",".modal {\n  background-color: hsla(0, 0%, 0%, 0.502);\n  backdrop-filter: blur(3px);\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#modalContainer {\n  background-color: #343a40;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border: 1px solid gray;\n  border-radius: 12px;\n  position: relative;\n  height: max-content;\n  max-height: 70vh;\n  width: max-content;\n  max-width: 70vw;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.closeButton {\n  // position: sticky;\n  // top: 1vw;\n  // left: 1vw;\n  // height: 1.3vw;\n  // width: 1.3vw;\n  // z-index: 1;\n}\n\n.closeButton:hover {\n  cursor: pointer;\n}\n\nhr {\n  background-color: gray;\n  height: 1px;\n  border: none;\n}\n\n.deleteContainer {\n  #confirm {\n    background: hsl(0, 82%, 63%);\n    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px hsl(0, 67%, 77%);\n  }\n\n  .buttonsContainer {\n    display: flex;\n    gap: 1rem;\n  }\n}\n",".field {\n  $responsive-select: clamp(0.3rem, 0.3rem + 0.4vw, 0.8rem);\n\n  display: flex;\n  flex-direction: column;\n  gap: 0.4vw;\n\n  label {\n    font-size: calc(1vw + 6px);\n  }\n\n  input,\n  select,\n  textarea {\n    font-size: calc(0.8vw + 4px);\n    border: none;\n    outline: none;\n    background: #212529;\n    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n    padding: calc(0.5vw + 2px);\n    border-radius: 0.5vw;\n    color: #f8f9fa;\n  }\n}\n\n.DuedateField {\n  input {\n    font-size: calc(0.8vw + 4px);\n  }\n\n  ::-webkit-calendar-picker-indicator {\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 3px;\n    filter: invert(1);\n  }\n}\n\n.newForm {\n  min-width: 35vw;\n  padding: 0 calc(1vw + 6px) calc(1vw + 6px) calc(1vw + 6px);\n  display: grid;\n  grid-template-columns: min-content 2fr;\n  gap: calc(0.5vw + 4px);\n}\n\n.TitleField {\n  grid-column: 1 / 3;\n}\n\n.DescriptionField {\n  grid-column: 1 / 3;\n\n  textarea {\n    resize: none;\n    height: 20vh;\n    max-height: 20vh;\n  }\n}\n\n.PriorityField {\n  select {\n    height: 100%;\n    appearance: none;\n    cursor: pointer;\n    background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg)\n        no-repeat right 0.8rem center / 1.4em,\n      #212529;\n    /* Remove focus outline */\n    &:focus {\n      outline: none;\n    }\n    /* Remove IE arrow */\n    &::-ms-expand {\n      display: none;\n    }\n  }\n}\n\n.newTitle {\n  padding: 0;\n}\n\n.createButton {\n  grid-column: 1/3;\n  width: max-content;\n  justify-self: center;\n}\n",".titleView {\n  padding: 0;\n  margin: 0;\n  user-select: auto;\n  overflow-wrap: break-word;\n  text-align: center;\n  max-width: fit-content;\n}\n\n.titleViewContainer {\n  display: flex;\n  justify-content: center;\n  margin: 0 2vw;\n}\n\n.descriptionViewContainer {\n  margin: 0 1vw;\n}\n\n.infoContainer {\n  display: grid;\n  grid-template-rows: 1fr auto max-content auto max-content;\n\n  .separator {\n    height: 1px;\n  }\n\n  hr {\n    width: 90%;\n  }\n}\n\n.dateViewContainer {\n  display: flex;\n  flex-direction: column;\n}\n\nh3 {\n  margin: 0;\n}\n\n.dateStringContainer {\n  display: flex;\n\n  p {\n    margin: 0;\n    font-size: clamp(8px, 1vw, 64px);\n    font-weight: 300;\n  }\n}\n\n.priorityViewContainer {\n  display: flex;\n  flex-direction: column;\n\n  .priority {\n    .taskColor {\n      height: clamp(0.5rem, 0.5rem + 1vw, 1rem);\n      width: clamp(0.5rem, 0.5rem + 1vw, 1rem);\n    }\n  }\n}\n\n.todoDataContainer {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 1rem;\n\n  .priority {\n    border: none;\n    cursor: auto;\n    .priorityName {\n      padding-right: 10px;\n    }\n  }\n}\n\n.mainTaskContainer {\n  border-bottom: #15181c 2px solid;\n}\n\n.mainTaskContainer,\n.newContainer,\n.newProjectContainer,\n.deleteContainer {\n  padding: 0 1vw 1vw 1vw;\n}\n\n.viewSubContainer {\n  border-top: #464e55 2px solid;\n  padding: 1vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  h1 {\n    padding: 0;\n    margin: 0;\n  }\n}\n\n.descriptionView {\n  max-width: fit-content;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n}\n\n.ButtonsView {\n  border-top: #464e55 2px solid;\n  display: flex;\n  gap: 0.8vw;\n  justify-content: center;\n  width: 100%;\n  padding: 1vw 0;\n  position: sticky;\n  bottom: 0;\n  background-color: #343a40;\n}\n\n.headerContainer {\n  position: relative;\n  .closeButton {\n    font-size: calc(0.3rem + 1.5vw);\n    position: absolute;\n    justify-self: flex-start;\n    align-self: flex-start;\n    top: 0;\n    z-index: 100;\n  }\n}\n\n.viewTitle,\n.viewDescription {\n  word-wrap: break-word;\n  word-break: break-word;\n}\n\n.viewTitle {\n  padding: 0 clamp(1.5rem, 1.5rem + 1vw, 4rem);\n}\n","#projects {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5vw;\n  width: 100%;\n  max-height: calc(2rem + 10vh);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.projectContainer {\n  background-color: hsla(200, 7%, 8%, 60%);\n  width: 100%;\n  padding: 0.5vw 0 0.5vw 0.7vw;\n  cursor: pointer;\n  transition: background-color 0.2s ease-out 0s;\n}\n\n.projectContainer:hover {\n  background-color: hsla(200, 7%, 8%, 100%);\n}\n\n#selectedProject {\n  background-color: hsla(200, 7%, 8%, 100%);\n}\n\nbutton {\n  i {\n    margin-right: 0.5vw;\n  }\n}\n","@media (max-width: 300px) {\n  .taskTime {\n    display: none;\n  }\n}\n\n@media (max-width: 800px) {\n  $responsive-button-size: clamp(1rem, 1rem + 1vw, 3rem);\n  $responsive-padding: clamp(0.6rem, 0.6rem + 1vw, 3rem);\n  $responsive-font-size: clamp(1rem, 0.8rem + 1vw, 3rem);\n  $responsive-subButton-size: clamp(0.8rem, 0.8rem + 1vw, 2.5rem);\n  $responsive-subPadding: clamp(0.4rem, 0.4rem + 1vw, 2.5rem);\n  $responsive-subFont-size: clamp(0.8rem, 0.6rem + 1vw, 2.5rem);\n\n  .taskMiniContainer {\n    padding: $responsive-padding;\n  }\n\n  .taskColor,\n  .taskButton {\n    height: $responsive-button-size;\n    width: $responsive-button-size;\n  }\n\n  .taskTitle {\n    p {\n      font-size: $responsive-font-size;\n    }\n  }\n\n  .taskTime {\n    p {\n      font-size: clamp(0.4rem, 0.4em + 1vw, 1.5rem);\n    }\n  }\n  .addSubtask {\n    font-size: $responsive-font-size;\n  }\n\n  .subtask {\n    .taskMiniContainer {\n      padding: $responsive-subPadding;\n\n      .taskButton,\n      .taskColor {\n        height: $responsive-subButton-size;\n        width: $responsive-subButton-size;\n      }\n    }\n    .taskTitle {\n      p {\n        font-size: $responsive-subFont-size;\n      }\n    }\n\n    .taskTime {\n      p {\n        font-size: clamp(0.4rem, 0.4rem + 1vw, 1.5rem);\n      }\n    }\n  }\n}\n","@media (max-width: 800px) {\n  $responsive-font-size: clamp(1rem, 0.8rem + 1vw, 3rem);\n  $responsive-header-size: clamp(1.5rem, 1.5rem + 1.5vw, 3rem);\n  .container {\n    width: 100%;\n    height: 100%;\n    grid-template-columns: 1fr;\n    border: none;\n    border-radius: 0;\n\n    button {\n      font-size: $responsive-font-size;\n    }\n\n    .dashboardHeader {\n      font-size: $responsive-header-size;\n    }\n  }\n\n  .separator {\n    display: none;\n  }\n\n  .pending {\n    border-left: none;\n  }\n\n  .mainContent {\n    height: 100vh;\n    grid-template-rows: 2fr 1fr;\n    overflow: hidden;\n\n    .headerContainer {\n      border-bottom: 1px gray solid;\n      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    }\n  }\n\n  .headerContainer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 1;\n    position: static;\n  }\n\n  .burgerMenu,\n  .goBack,\n  .closeButton {\n    font-size: $responsive-header-size;\n    position: absolute;\n    left: 1rem;\n    cursor: pointer;\n    user-select: none;\n    display: block;\n  }\n\n  .sidebar {\n    transition: margin-left 0.5s;\n  }\n\n  .hideSidebar {\n    margin-left: calc(-100% - 1px);\n    transition: margin-left 0.5s;\n  }\n}\n\n@media (max-height: 400px) {\n  .container {\n    height: 100%;\n    width: 100%;\n  }\n\n  .mainContent {\n    overflow-y: scroll;\n  }\n}\n","@media (max-width: 800px) {\n  $responsive-font-size: clamp(1rem, 0.8rem + 1vw, 3rem);\n  $responsive-padding: clamp(0.6rem, 0.6rem + 1vw, 3rem);\n  $responsive-button-size: clamp(1rem, 1rem + 1vw, 3rem);\n  $responsive-margin: clamp(1rem, 1rem + 1vw, 1.5rem);\n\n  .sidebar {\n    position: absolute;\n    height: 100vh;\n    width: 100vw;\n    background: #343a40;\n\n    .sidebarButtons {\n      gap: clamp(0.5rem, 0.5rem + 0.5vw, 1rem);\n    }\n  }\n\n  .priority {\n    .priorityName {\n      font-size: $responsive-font-size;\n    }\n\n    .priorityColorContainer {\n      .priorityColor {\n        height: $responsive-button-size;\n        width: $responsive-button-size;\n      }\n    }\n  }\n}\n","@media (max-width: 800px) {\n  #projects {\n    gap: clamp(0.3rem, 0.3rem + 0.5vw, 0.8rem);\n  }\n\n  .projectContainer {\n    h3 {\n      margin-left: clamp(0.5rem, 0.5rem + 0.5vw, 1rem);\n    }\n  }\n}\n","@media (max-width: 800px) {\n  $responsive-font-size: clamp(1.2rem, 1.2rem + 1vw, 2rem);\n  $responsive-header-size: clamp(2rem, 2rem + 1.5vw, 4rem);\n  $responsive-border-radius: clamp(0.5rem, 0.5rem + 0.5vw, 1rem);\n  $responsive-input-padding: clamp(0.3rem, 0.3rem + 1vw, 0.6rem);\n  $responsive-header-margin: clamp(1rem, 0.7rem + 1vw, 1.5rem);\n  .modal {\n    width: auto;\n    height: auto;\n    overflow-y: hidden;\n    border-radius: 0;\n  }\n\n  #modalContainer {\n    border-radius: 0;\n    width: 100vw;\n    max-height: 100%;\n    max-width: 100vw;\n    height: 100%;\n    position: absolute;\n\n    h1 {\n      font-size: $responsive-header-size;\n    }\n    button {\n      font-size: $responsive-font-size;\n    }\n\n    form {\n      label {\n        font-size: $responsive-font-size;\n      }\n\n      select,\n      input,\n      textarea {\n        font-size: $responsive-font-size;\n        border-radius: $responsive-border-radius;\n      }\n\n      input,\n      textarea,\n      select {\n        padding: $responsive-input-padding;\n      }\n    }\n  }\n\n  .newForm {\n    // display: flex;\n    // flex-direction: column;\n    // justify-content: center;\n\n    button {\n      align-self: center;\n    }\n\n    .PriorityField {\n      select {\n        background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg)\n            no-repeat right 0.4rem center / 1.4em,\n          #212529;\n      }\n    }\n\n    .DuedateField {\n      input {\n        -webkit-appearance: none;\n        background: url(\"/src/assets/calendar.svg\") no-repeat right 0.8rem center / 1.2rem, #212529;\n        width: max-content;\n      }\n      ::-webkit-inner-spin-button,\n      ::-webkit-calendar-picker-indicator {\n        display: none;\n        -webkit-appearance: none;\n      }\n    }\n  }\n\n  .deleteContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .headerContainer {\n    .closeButton {\n      top: 1vw;\n      font-size: $responsive-header-size;\n    }\n  }\n}\n","@media (max-width: 800px) {\n  $responsive-p-font-size: 1rem;\n  $navbar-height: clamp(2.5rem, 2.5rem + 1.5vw, 4.5rem);\n  .infoContainer {\n    min-width: 100%;\n\n    .headerContainer {\n      padding-top: calc(2rem + 1vw);\n      .closeButton {\n        position: fixed;\n        justify-self: flex-start;\n        align-self: flex-start;\n        top: calc(0.5rem + 0.5vw);\n        z-index: 100;\n      }\n    }\n\n    p {\n      font-size: $responsive-p-font-size;\n    }\n\n    .viewDescription {\n      padding: 0 clamp(1rem, 1rem + 0.5vw, 2rem);\n    }\n\n    .todoDataContainer {\n      padding-bottom: 1rem;\n    }\n  }\n\n  .viewTitle {\n    word-wrap: break-word;\n    word-break: break-word;\n    padding: 0 clamp(2rem, 2rem + 0.5vw, 4rem);\n  }\n\n  .viewNavbar {\n    height: $navbar-height;\n    width: 100%;\n    position: fixed;\n    z-index: 99;\n    background: #343a40;\n    overflow-x: hidden;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, object) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  for (var property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      ;
      target[property] = object[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(object) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, object);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareDesc/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/compareDesc/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareDesc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareDesc
 * @category Common Helpers
 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return -1 if the first date is after the second,
 * 1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
 * const result = compareDesc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> 1
 *
 * @example
 * // Sort the array of dates in reverse chronological order:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareDesc)
 * //=> [
 * //   Sun Jul 02 1995 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Wed Feb 11 1987 00:00:00
 * // ]
 */

function compareDesc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff > 0) {
    return -1;
  } else if (diff < 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistanceStrict/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceStrict/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistanceStrict)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");








var MILLISECONDS_IN_MINUTE = 1000 * 60;
var MINUTES_IN_DAY = 60 * 24;
var MINUTES_IN_MONTH = MINUTES_IN_DAY * 30;
var MINUTES_IN_YEAR = MINUTES_IN_DAY * 365;
/**
 * @name formatDistanceStrict
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'second'|'minute'|'hour'|'day'|'month'|'year'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.roundingMethod='round'] - which way to round partial units
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.roundingMethod` must be 'floor', 'ceil' or 'round'
 * @throws {RangeError} `options.unit` must be 'second', 'minute', 'hour', 'day', 'month' or 'year'
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistanceStrict(new Date(2014, 6, 2), new Date(2015, 0, 2))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00?
 * const result = formatDistanceStrict(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0)
 * )
 * //=> '15 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistanceStrict(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> '1 year ago'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, in minutes?
 * const result = formatDistanceStrict(new Date(2016, 0, 1), new Date(2015, 0, 1), {
 *   unit: 'minute'
 * })
 * //=> '525600 minutes'
 *
 * @example
 * // What is the distance from 1 January 2015
 * // to 28 January 2015, in months, rounded up?
 * const result = formatDistanceStrict(new Date(2015, 0, 28), new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistanceStrict(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> '1 jaro'
 */

function formatDistanceStrict(dirtyDate, dirtyBaseDate, options) {
  var _ref, _options$locale, _options$roundingMeth;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain localize.formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(options), {
    addSuffix: Boolean(options === null || options === void 0 ? void 0 : options.addSuffix),
    comparison: comparison
  });
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
  }

  var roundingMethod = String((_options$roundingMeth = options === null || options === void 0 ? void 0 : options.roundingMethod) !== null && _options$roundingMeth !== void 0 ? _options$roundingMeth : 'round');
  var roundingMethodFn;

  if (roundingMethod === 'floor') {
    roundingMethodFn = Math.floor;
  } else if (roundingMethod === 'ceil') {
    roundingMethodFn = Math.ceil;
  } else if (roundingMethod === 'round') {
    roundingMethodFn = Math.round;
  } else {
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  }

  var milliseconds = dateRight.getTime() - dateLeft.getTime();
  var minutes = milliseconds / MILLISECONDS_IN_MINUTE;
  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateLeft); // Use DST-normalized difference in minutes for years, months and days;
  // use regular difference in minutes for hours, minutes and seconds.

  var dstNormalizedMinutes = (milliseconds - timezoneOffset) / MILLISECONDS_IN_MINUTE;
  var defaultUnit = options === null || options === void 0 ? void 0 : options.unit;
  var unit;

  if (!defaultUnit) {
    if (minutes < 1) {
      unit = 'second';
    } else if (minutes < 60) {
      unit = 'minute';
    } else if (minutes < MINUTES_IN_DAY) {
      unit = 'hour';
    } else if (dstNormalizedMinutes < MINUTES_IN_MONTH) {
      unit = 'day';
    } else if (dstNormalizedMinutes < MINUTES_IN_YEAR) {
      unit = 'month';
    } else {
      unit = 'year';
    }
  } else {
    unit = String(defaultUnit);
  } // 0 up to 60 seconds


  if (unit === 'second') {
    var seconds = roundingMethodFn(milliseconds / 1000);
    return locale.formatDistance('xSeconds', seconds, localizeOptions); // 1 up to 60 mins
  } else if (unit === 'minute') {
    var roundedMinutes = roundingMethodFn(minutes);
    return locale.formatDistance('xMinutes', roundedMinutes, localizeOptions); // 1 up to 24 hours
  } else if (unit === 'hour') {
    var hours = roundingMethodFn(minutes / 60);
    return locale.formatDistance('xHours', hours, localizeOptions); // 1 up to 30 days
  } else if (unit === 'day') {
    var days = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 up to 12 months
  } else if (unit === 'month') {
    var months = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_MONTH);
    return months === 12 && defaultUnit !== 'month' ? locale.formatDistance('xYears', 1, localizeOptions) : locale.formatDistance('xMonths', months, localizeOptions); // 1 year up to max Date
  } else if (unit === 'year') {
    var years = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_YEAR);
    return locale.formatDistance('xYears', years, localizeOptions);
  }

  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistanceToNowStrict)
/* harmony export */ });
/* harmony import */ var _formatDistanceStrict_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../formatDistanceStrict/index.js */ "./node_modules/date-fns/esm/formatDistanceStrict/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name formatDistanceToNowStrict
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'second'|'minute'|'hour'|'day'|'month'|'year'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.roundingMethod='round'] - which way to round partial units
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * const result = formatDistanceToNowStrict(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * const result = formatDistanceToNowStrict(
 *   new Date(2015, 0, 1, 0, 0, 15)
 * )
 * //=> '15 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * const result = formatDistanceToNowStrict(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in 1 year'
 *
 * @example
 * // If today is 28 January 2015,
 * // what is the distance to 1 January 2015, in months, rounded up??
 * const result = formatDistanceToNowStrict(new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016 in Esperanto?
 * const eoLocale = require('date-fns/locale/eo')
 * const result = formatDistanceToNowStrict(
 *   new Date(2016, 0, 1),
 *   {locale: eoLocale}
 * )
 * //=> '1 jaro'
 */

function formatDistanceToNowStrict(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_formatDistanceStrict_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

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
      <div class='headerContainer'>
        <h1>New Project</h1>
      </div>
      <form class='newForm'>
        <div class='field TitleField'>
        <label for='Title'>Project Title</label>
        <input type='text' name='Title' id='Title' required>
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");








class NewTodoComponent extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  template = (state) =>
    `
    <div class='newContainer'>
      <div class='headerContainer'>
        <h1 class='newTitle'>${state.todo ? "Edit Todo" : "New Todo"}</h1>
      </div>
      <form class='newForm'>
        <div class='field TitleField'>
          <label for='Title'>Title</label>
          <input type='text' name='Title' id='Title' value="${
            state.todo ? state.todo.title : ""
          }" required>
        </div>
        <div class='field DuedateField'>
          <label for='Due date'>Due date</label>
          <input type='date' name='Duedate' id='Due date' value="${this.startingDate(
            state.todo,
            state.parent
          )}" required>
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
          <textarea name='Description' id='Description' rows='5'></textarea>
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
    let description = element.querySelector("textarea");
    description.value = this.state.todo ? this.state.todo.description : "";
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

  startingDate(todo, parent) {
    let date = "";
    if (todo) {
      date = todo.date;
    } else {
      date = parent ? parent.date : (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), "yyyy-MM-dd");
    }
    return date;
  }

  createTodo(form) {
    let title = form.Title.value;

    let priority = form.Priority.selectedIndex + 1;
    let description = form.Description.value;

    if (this.state.parent) {
      let date =
        form.Duedate.value === "" ? this.state.parent.date : form.Duedate.value;
      this.state.parent.createTodo(title, date, priority, description, false);
    } else {
      let date =
        form.Duedate.value === ""
          ? (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(Date.now()), "yyyy-MM-dd")
          : form.Duedate.value;
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
        ${
          state.picker
            ? `<input type="color" class='priorityColor picker' value='${state.priority.color}'/>`
            : `<div class='taskColor' style='background-color: ${state.priority.color}'></div>`
        }
      </div>
      <p class="priorityName">${state.priority.name}</p>
    </div>
    `;

  DOMelement() {
    let element = super.DOMelement();
    let picker = element.querySelector(".picker");
    if (picker) {
      element.addEventListener("click", (e) => {
        picker.click();
      });

      //Change priority color when the color picker changes
      picker.addEventListener("change", (e) => {
        this.state.priority.color = e.target.value;
        _storageManagement__WEBPACK_IMPORTED_MODULE_4__.Storage.savePriorityData();
        PriorityComponent.displayPriorities();
        if (_project__WEBPACK_IMPORTED_MODULE_3__["default"].selected) {
          _project__WEBPACK_IMPORTED_MODULE_3__["default"].selected.component.update();
        }
      });
    }

    return element;
  }

  //This method updates and displays the priorities in the sidebar
  static displayPriorities() {
    let priorityNeros = new _Neros__WEBPACK_IMPORTED_MODULE_1__["default"]("priorities");
    _priority__WEBPACK_IMPORTED_MODULE_2__["default"].priorities.forEach((priority) => {
      let component = new PriorityComponent(priority.name, {
        priority: priority,
        picker: true,
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
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helper */ "./src/modules/helper.js");
/* harmony import */ var date_fns_esm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns/esm */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns_esm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns/esm */ "./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js");















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
      `<div class="taskColor" style="background-color: ${priority.color}"></div>`;
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
      <div class='taskButtons taskButtonsLeft'>
      </div>
      <div class="taskDataContainer">
        <div class="taskTitle">
          <p>${state.todo.title}</p>
        </div>
        <div class="taskTime">
          <p>${
            (0,date_fns_esm__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(_helper__WEBPACK_IMPORTED_MODULE_11__["default"].parseStringDate(state.todo.date)))
              ? "Today"
              : (0,date_fns_esm__WEBPACK_IMPORTED_MODULE_13__["default"])(
                  new Date(_helper__WEBPACK_IMPORTED_MODULE_11__["default"].parseStringDate(state.todo.date)),
                  { addSuffix: true }
                )
          }</p>
        </div>
      </div>
      <div class='taskButtons taskButtonsRight'>
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
    let miniButtons = element.querySelectorAll(".taskButtons");

    miniButtons[0].append(check);
    miniButtons[0].append(priority);
    miniButtons[1].append(edit);
    miniButtons[1].append(deleteBtn);
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/modules/Component.js");
/* harmony import */ var _TaskComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskComponent */ "./src/modules/components/TaskComponent.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper */ "./src/modules/helper.js");
/* harmony import */ var _PriorityComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PriorityComponent */ "./src/modules/components/PriorityComponent.js");
/* harmony import */ var date_fns_esm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/esm */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns_esm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/esm */ "./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js");
/* harmony import */ var _priority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../priority */ "./src/modules/priority.js");








class viewTodoComponent extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  template = (state) =>
    `
    <div class='infoContainer'>
      <div class='viewNavbar'></div>
      <div class='mainTaskContainer'>
        <div class='headerContainer'>
          <h1 class='viewTitle'>${state.todo.title}</h1>
        </div>
        <hr>
        <div class='descriptionViewContainer'>
          <p class='viewDescription'>${state.todo.description.replace(
            /\n/g,
            "<br>"
          )}</p>
        </div>
        <div class='todoDataContainer'>
          <div class='dateViewContainer'>
            <h3>Due date</h3>
            <div class='dateStringContainer'>
              <p class='dateView'>${(0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(
                new Date(_helper__WEBPACK_IMPORTED_MODULE_2__["default"].parseStringDate(state.todo.date)),
                "P"
              )}</p>
              <p class='timeLeftView'>(${
                (0,date_fns_esm__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(_helper__WEBPACK_IMPORTED_MODULE_2__["default"].parseStringDate(state.todo.date)))
                  ? "Today"
                  : (0,date_fns_esm__WEBPACK_IMPORTED_MODULE_7__["default"])(
                      new Date(_helper__WEBPACK_IMPORTED_MODULE_2__["default"].parseStringDate(state.todo.date)),
                      { addSuffix: true }
                    )
              })</p>
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
        let taskDOM = new _TaskComponent__WEBPACK_IMPORTED_MODULE_1__["default"]("subtask", {
          todo: task,
          classes: ["task", "subtask"],
        }).DOMelement();
        taskDOM.firstChild.remove();
        // Remove the check minicontainer so users wont be able to check the todo from the modal
        subtaskContainer.append(taskDOM);
      });
    } else {
      let parentDOM = new _TaskComponent__WEBPACK_IMPORTED_MODULE_1__["default"]("todo", {
        todo: this.state.todo.parent,
        classes: ["task subtask"],
      }).DOMelement();
      parentDOM.firstChild.remove();
      // Remove the check minicontainer so users wont be able to check the todo from the modal
      subtaskContainer.append(parentDOM);
    }
    this.createPriority(element, this.state.todo.priority);
    return element;
  }

  createPriority(element, prioNumber) {
    let priorityContainer = element.querySelector(".priorityViewContainer");
    let priority = _priority__WEBPACK_IMPORTED_MODULE_4__["default"].priorities[prioNumber - 1];
    let priorityComponent = new _PriorityComponent__WEBPACK_IMPORTED_MODULE_3__.PriorityComponent("todoPriority", {
      priority: priority,
      picker: false,
    }).DOMelement();
    priorityContainer.append(priorityComponent);
  }
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns_esm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/esm */ "./node_modules/date-fns/esm/compareDesc/index.js");









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
        } else if (array1[0].priority < array2[0].priority) {
          sortedArray.push(array2.shift());
        } else {
          // If the todos have the same priority, push the earliest todo to the sorted array
          (0,date_fns_esm__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(array1[0].date), (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(array2[0].date)) === 1
            ? sortedArray.push(array1.shift())
            : sortedArray.push(array2.shift());
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

  const parseStringDate = (dateString) => {
    let dateStr = dateString.split("-").join("/");
    return dateStr;
  };

  return { deleteItem, findTask, mergeSort, parseStringDate };
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
/* harmony import */ var _assets_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/close.svg */ "./src/assets/close.svg");






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
    let closeBtn = _createCloseButton();
    let headerDiv = modalElement.querySelector(".headerContainer");
    if (headerDiv) headerDiv.append(closeBtn);
    modalElement.classList.remove("hidden");
    let input = modalElement.querySelector("input");
    // modalElement.focus();
    if (input) input.focus();
  };

  const _createCloseButton = () => {
    let closeBtn = document.createElement("i");
    closeBtn.classList.add("closeButton");
    closeBtn.classList.add("fa-xmark");
    closeBtn.classList.add("fa-solid");
    closeBtn.addEventListener("click", () => {
      hide();
    });
    return closeBtn;
  };

  const resetModal = () => {
    modalElement.innerHTML = "<div id='modalContainer'></div>";
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

  // Add event listener to burger menu button to show the sidebar in mobile version
  let burger = document.querySelector(".burgerMenu");
  burger.addEventListener("click", () => {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("hideSidebar");
  });

  // Add event listener to back menu button to hide the sidebar in mobile version
  let goBack = document.querySelector(".goBack");
  goBack.addEventListener("click", () => {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("hideSidebar");
  });
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

/***/ "./src/assets/calendar.svg":
/*!*********************************!*\
  !*** ./src/assets/calendar.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9ba1225176d55c642a7.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxhQUFhLFFBQVEsTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sYUFBYSxRQUFRLE1BQU0sYUFBYSxlQUFlLFFBQVEsTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLGFBQWEsZUFBZSxhQUFhLFdBQVcsT0FBTyxNQUFNLGFBQWEsZUFBZSxRQUFRLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsTUFBTSxPQUFPLGFBQWEsWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxhQUFhLGVBQWUsT0FBTyxNQUFNLGFBQWEsZUFBZSxPQUFPLE9BQU8sYUFBYSxRQUFRLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxRQUFRLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLFNBQVMsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssWUFBWSxRQUFRLFFBQVEsWUFBWSxhQUFhLFFBQVEsT0FBTyxhQUFhLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxhQUFhLFFBQVEsT0FBTyxhQUFhLFFBQVEsUUFBUSxhQUFhLGVBQWUsUUFBUSxPQUFPLGFBQWEsUUFBUSxPQUFPLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFlBQVksUUFBUSxPQUFPLFlBQVksUUFBUSxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLFNBQVMsYUFBYSxhQUFhLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLGFBQWEsUUFBUSxPQUFPLGFBQWEsZUFBZSxRQUFRLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sYUFBYSxRQUFRLE9BQU8sYUFBYSxRQUFRLE9BQU8sYUFBYSxRQUFRLFNBQVMsYUFBYSxlQUFlLFFBQVEsU0FBUyxhQUFhLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLFFBQVEsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxhQUFhLFFBQVEsS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxZQUFZLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFVBQVUsUUFBUSxPQUFPLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsUUFBUSxXQUFXLFFBQVEsT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLHFDQUFxQyw4QkFBOEIsZ0JBQWdCLG1CQUFtQixvQkFBb0IsYUFBYSxjQUFjLHFDQUFxQyxrQkFBa0Isd0RBQXdELCtDQUErQyx3QkFBd0Isa0NBQWtDLG1DQUFtQyxHQUFHLGdCQUFnQiw4QkFBOEIsR0FBRyxrQkFBa0Isa0JBQWtCLHNDQUFzQyxxQkFBcUIsR0FBRyxjQUFjLHFCQUFxQixxQ0FBcUMsbUNBQW1DLGtCQUFrQixxQkFBcUIsb0RBQW9ELEdBQUcsZ0JBQWdCLHFCQUFxQixrQ0FBa0MsbUNBQW1DLGtCQUFrQix3Q0FBd0MsaUJBQWlCLEdBQUcsc0JBQXNCLGdDQUFnQyxHQUFHLGNBQWMsb0NBQW9DLGtCQUFrQiwyQkFBMkIsd0JBQXdCLHFCQUFxQix1QkFBdUIsZUFBZSx1Q0FBdUMsb0RBQW9ELHFEQUFxRCxLQUFLLEdBQUcsMkJBQTJCLGtCQUFrQixHQUFHLHFCQUFxQixrQkFBa0Isd0JBQXdCLHNCQUFzQixtQ0FBbUMscUZBQXFGLEtBQUssR0FBRyxhQUFhLHFCQUFxQixVQUFVLHVCQUF1QixXQUFXLDhCQUE4Qix1QkFBdUIsT0FBTyxLQUFLLEdBQUcsNkNBQTZDLFVBQVUsb0JBQW9CLHlDQUF5QyxtQkFBbUIsR0FBRyxVQUFVLHlFQUF5RSxrQkFBa0IsNEJBQTRCLHdCQUF3QixxQkFBcUIsR0FBRyxRQUFRLHVCQUF1QixtQ0FBbUMscUJBQXFCLGVBQWUsb0JBQW9CLHNCQUFzQixHQUFHLG1CQUFtQixtQkFBbUIscUJBQXFCLGVBQWUsY0FBYyxHQUFHLGFBQWEsa0JBQWtCLEdBQUcsWUFBWSx3QkFBd0IsMEVBQTBFLHVCQUF1QixrQkFBa0IsaUJBQWlCLG1CQUFtQixzQkFBc0IscUJBQXFCLHFCQUFxQix5Q0FBeUMsb0JBQW9CLEdBQUcsbUJBQW1CLGlDQUFpQyxtRkFBbUYsR0FBRyxpQkFBaUIsa0NBQWtDLHFGQUFxRixHQUFHLGdDQUFnQyxzQkFBc0IsR0FBRywrQkFBK0IseUJBQXlCLGtCQUFrQixLQUFLLGlDQUFpQyx5QkFBeUIsZ0NBQWdDLHdDQUF3QyxtREFBbUQsS0FBSyxpQ0FBaUMseUJBQXlCLGtDQUFrQyxLQUFLLEdBQUcsa0RBQWtELCtEQUErRCxpRUFBaUUsdURBQXVELHNEQUFzRCxpQkFBaUIsb0RBQW9ELHFDQUFxQyxjQUFjLHFCQUFxQix1QkFBdUIseUJBQXlCLEdBQUcsNkJBQTZCLDhCQUE4QixvREFBb0QsK0JBQStCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsb0JBQW9CLHVCQUF1QiwrQ0FBK0MsR0FBRyx5REFBeUQsZUFBZSxHQUFHLGlEQUFpRCxpQkFBaUIsdUJBQXVCLEdBQUcsYUFBYSxlQUFlLGlCQUFpQix1QkFBdUIsdUJBQXVCLG9CQUFvQixHQUFHLGVBQWUsOEJBQThCLGtDQUFrQyxrQkFBa0Isd0JBQXdCLHFCQUFxQiwrQ0FBK0Msb0JBQW9CLEdBQUcsNkJBQTZCLHNDQUFzQyxHQUFHLGlCQUFpQixrQkFBa0IsMkJBQTJCLGlDQUFpQyxpQkFBaUIseUNBQXlDLEtBQUssR0FBRyw2QkFBNkIsb0JBQW9CLHNDQUFzQyxxQ0FBcUMsS0FBSyxHQUFHLHFCQUFxQixrQkFBa0IsMkJBQTJCLGVBQWUsR0FBRyxxQkFBcUIsa0JBQWtCLEdBQUcsdUVBQXVFLHVFQUF1RSxzRUFBc0UseUVBQXlFLDZEQUE2RCxtQkFBbUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsbURBQW1ELG1EQUFtRCxxQkFBcUIsR0FBRyxvQkFBb0IsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsMENBQTBDLEdBQUcsV0FBVyxrQkFBa0IsOEJBQThCLHVEQUF1RCxnQkFBZ0IsOEJBQThCLHFEQUFxRCxxQkFBcUIsa0NBQWtDLCtDQUErQyxrREFBa0QsR0FBRywrQkFBK0IsZUFBZSxvQkFBb0IsS0FBSyxHQUFHLHVCQUF1QiwyQkFBMkIsR0FBRyxrQkFBa0Isa0JBQWtCLEdBQUcsd0JBQXdCLDhCQUE4QixrQkFBa0IsNEJBQTRCLHdCQUF3Qix1REFBdUQsb0JBQW9CLHNCQUFzQixHQUFHLHlCQUF5QixpQkFBaUIsR0FBRyxnQkFBZ0Isb0NBQW9DLG1DQUFtQyx1QkFBdUIsK0NBQStDLEdBQUcsaUJBQWlCLG9DQUFvQyxtQ0FBbUMsR0FBRyxpREFBaUQsK0JBQStCLEdBQUcsMENBQTBDLCtCQUErQixHQUFHLGVBQWUsbUNBQW1DLHdCQUF3QixTQUFTLDBCQUEwQixxQkFBcUIsS0FBSyxHQUFHLGdCQUFnQix1QkFBdUIsWUFBWSx1QkFBdUIsc0RBQXNELG9CQUFvQixTQUFTLHVCQUF1Qiw4QkFBOEIsMEJBQTBCLEtBQUssR0FBRyw0QkFBNEIseUJBQXlCLHVCQUF1QixPQUFPLDJDQUEyQyxnQkFBZ0IsS0FBSyxHQUFHLHdCQUF3QixrQkFBa0IsMkJBQTJCLDBCQUEwQix5QkFBeUIsZUFBZSxHQUFHLGNBQWMsc0RBQXNELCtCQUErQiwwQkFBMEIsc0RBQXNELHFCQUFxQiw4Q0FBOEMsNkNBQTZDLE9BQU8sb0JBQW9CLDZDQUE2Qyw4Q0FBOEMsT0FBTyxLQUFLLGdDQUFnQyxTQUFTLCtDQUErQyxPQUFPLEtBQUssR0FBRyxvQkFBb0Isa0NBQWtDLGlCQUFpQixpQkFBaUIsNEZBQTRGLEdBQUcsd0JBQXdCLGtCQUFrQixvQkFBb0IscUJBQXFCLEdBQUcsaUJBQWlCLHNCQUFzQiwyQkFBMkIsR0FBRywyREFBMkQsWUFBWSxvQkFBb0IsS0FBSyxHQUFHLGFBQWEsNkNBQTZDLCtCQUErQixpQkFBaUIsa0JBQWtCLHVCQUF1QixlQUFlLFlBQVksYUFBYSxXQUFXLGNBQWMsaUJBQWlCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcscUJBQXFCLDhCQUE4QiwrQ0FBK0MsMkJBQTJCLHdCQUF3Qix1QkFBdUIsd0JBQXdCLHFCQUFxQix1QkFBdUIsb0JBQW9CLHFCQUFxQix1QkFBdUIsR0FBRyxrQkFBa0Isd0JBQXdCLGdCQUFnQixpQkFBaUIscUJBQXFCLG9CQUFvQixrQkFBa0IsR0FBRyx3QkFBd0Isb0JBQW9CLEdBQUcsUUFBUSwyQkFBMkIsZ0JBQWdCLGlCQUFpQixHQUFHLHNCQUFzQixjQUFjLG1DQUFtQyxxRkFBcUYsS0FBSyx5QkFBeUIsb0JBQW9CLGdCQUFnQixLQUFLLEdBQUcsYUFBYSw4REFBOEQsb0JBQW9CLDJCQUEyQixlQUFlLGFBQWEsaUNBQWlDLEtBQUsscUNBQXFDLG1DQUFtQyxtQkFBbUIsb0JBQW9CLDBCQUEwQiw4RkFBOEYsaUNBQWlDLDJCQUEyQixxQkFBcUIsS0FBSyxHQUFHLG1CQUFtQixXQUFXLG1DQUFtQyxLQUFLLDJDQUEyQyxtQkFBbUIsc0JBQXNCLHlCQUF5Qix3QkFBd0IsS0FBSyxHQUFHLGNBQWMsb0JBQW9CLCtEQUErRCxrQkFBa0IsMkNBQTJDLDJCQUEyQixHQUFHLGlCQUFpQix1QkFBdUIsR0FBRyx1QkFBdUIsdUJBQXVCLGdCQUFnQixtQkFBbUIsbUJBQW1CLHVCQUF1QixLQUFLLEdBQUcsb0JBQW9CLFlBQVksbUJBQW1CLHVCQUF1QixzQkFBc0IscUxBQXFMLCtDQUErQyxzQkFBc0IsT0FBTyxnREFBZ0Qsc0JBQXNCLE9BQU8sS0FBSyxHQUFHLGVBQWUsZUFBZSxHQUFHLG1CQUFtQixxQkFBcUIsdUJBQXVCLHlCQUF5QixHQUFHLGlCQUFpQixlQUFlLGNBQWMsc0JBQXNCLDhCQUE4Qix1QkFBdUIsMkJBQTJCLEdBQUcseUJBQXlCLGtCQUFrQiw0QkFBNEIsa0JBQWtCLEdBQUcsK0JBQStCLGtCQUFrQixHQUFHLG9CQUFvQixrQkFBa0IsOERBQThELGtCQUFrQixrQkFBa0IsS0FBSyxVQUFVLGlCQUFpQixLQUFLLEdBQUcsd0JBQXdCLGtCQUFrQiwyQkFBMkIsR0FBRyxRQUFRLGNBQWMsR0FBRywwQkFBMEIsa0JBQWtCLFNBQVMsZ0JBQWdCLHVDQUF1Qyx1QkFBdUIsS0FBSyxHQUFHLDRCQUE0QixrQkFBa0IsMkJBQTJCLGlCQUFpQixrQkFBa0Isa0RBQWtELGlEQUFpRCxPQUFPLEtBQUssR0FBRyx3QkFBd0Isa0JBQWtCLGtDQUFrQyx3QkFBd0IsY0FBYyxpQkFBaUIsbUJBQW1CLG1CQUFtQixxQkFBcUIsNEJBQTRCLE9BQU8sS0FBSyxHQUFHLHdCQUF3QixxQ0FBcUMsR0FBRyxrRkFBa0YsMkJBQTJCLEdBQUcsdUJBQXVCLGtDQUFrQyxpQkFBaUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsVUFBVSxpQkFBaUIsZ0JBQWdCLEtBQUssR0FBRyxzQkFBc0IsMkJBQTJCLDhCQUE4QiwwQkFBMEIsMkJBQTJCLEdBQUcsa0JBQWtCLGtDQUFrQyxrQkFBa0IsZUFBZSw0QkFBNEIsZ0JBQWdCLG1CQUFtQixxQkFBcUIsY0FBYyw4QkFBOEIsR0FBRyxzQkFBc0IsdUJBQXVCLGtCQUFrQixzQ0FBc0MseUJBQXlCLCtCQUErQiw2QkFBNkIsYUFBYSxtQkFBbUIsS0FBSyxHQUFHLG1DQUFtQywwQkFBMEIsMkJBQTJCLEdBQUcsZ0JBQWdCLGlEQUFpRCxHQUFHLGdCQUFnQixrQkFBa0IsMkJBQTJCLHdCQUF3QixlQUFlLGdCQUFnQixrQ0FBa0MscUJBQXFCLHVCQUF1QixHQUFHLHVCQUF1Qiw2Q0FBNkMsZ0JBQWdCLGlDQUFpQyxvQkFBb0Isa0RBQWtELEdBQUcsNkJBQTZCLDhDQUE4QyxHQUFHLHNCQUFzQiw4Q0FBOEMsR0FBRyxZQUFZLE9BQU8sMEJBQTBCLEtBQUssR0FBRyxnQ0FBZ0MsZUFBZSxvQkFBb0IsS0FBSyxHQUFHLCtCQUErQiwyREFBMkQsMkRBQTJELDJEQUEyRCxvRUFBb0UsZ0VBQWdFLGtFQUFrRSwwQkFBMEIsbUNBQW1DLEtBQUssa0NBQWtDLHNDQUFzQyxxQ0FBcUMsS0FBSyxrQkFBa0IsU0FBUyx5Q0FBeUMsT0FBTyxLQUFLLGlCQUFpQixTQUFTLHNEQUFzRCxPQUFPLEtBQUssaUJBQWlCLHVDQUF1QyxLQUFLLGdCQUFnQiwwQkFBMEIsd0NBQXdDLDBDQUEwQyw2Q0FBNkMsNENBQTRDLFNBQVMsT0FBTyxrQkFBa0IsV0FBVyw4Q0FBOEMsU0FBUyxPQUFPLG1CQUFtQixXQUFXLHlEQUF5RCxTQUFTLE9BQU8sS0FBSyxHQUFHLGdDQUFnQywyREFBMkQsaUVBQWlFLGdCQUFnQixrQkFBa0IsbUJBQW1CLGlDQUFpQyxtQkFBbUIsdUJBQXVCLGdCQUFnQix5Q0FBeUMsT0FBTywwQkFBMEIsMkNBQTJDLE9BQU8sS0FBSyxrQkFBa0Isb0JBQW9CLEtBQUssZ0JBQWdCLHdCQUF3QixLQUFLLG9CQUFvQixvQkFBb0Isa0NBQWtDLHVCQUF1QiwwQkFBMEIsc0NBQXNDLG9EQUFvRCxPQUFPLEtBQUssd0JBQXdCLG9CQUFvQiwwQkFBMEIsOEJBQThCLGlCQUFpQix1QkFBdUIsS0FBSyxnREFBZ0QseUNBQXlDLHlCQUF5QixpQkFBaUIsc0JBQXNCLHdCQUF3QixxQkFBcUIsS0FBSyxnQkFBZ0IsbUNBQW1DLEtBQUssb0JBQW9CLHFDQUFxQyxtQ0FBbUMsS0FBSyxHQUFHLGdDQUFnQyxnQkFBZ0IsbUJBQW1CLGtCQUFrQixLQUFLLG9CQUFvQix5QkFBeUIsS0FBSyxHQUFHLGdDQUFnQywyREFBMkQsMkRBQTJELDJEQUEyRCx3REFBd0QsZ0JBQWdCLHlCQUF5QixvQkFBb0IsbUJBQW1CLDBCQUEwQix5QkFBeUIsaURBQWlELE9BQU8sS0FBSyxpQkFBaUIscUJBQXFCLHlDQUF5QyxPQUFPLGlDQUFpQyx3QkFBd0IsMENBQTBDLHlDQUF5QyxTQUFTLE9BQU8sS0FBSyxHQUFHLGdDQUFnQyxlQUFlLGlEQUFpRCxLQUFLLHlCQUF5QixVQUFVLHlEQUF5RCxPQUFPLEtBQUssR0FBRyxnQ0FBZ0MsNkRBQTZELDZEQUE2RCxtRUFBbUUsbUVBQW1FLGlFQUFpRSxZQUFZLGtCQUFrQixtQkFBbUIseUJBQXlCLHVCQUF1QixLQUFLLHVCQUF1Qix1QkFBdUIsbUJBQW1CLHVCQUF1Qix1QkFBdUIsbUJBQW1CLHlCQUF5QixZQUFZLDJDQUEyQyxPQUFPLGNBQWMseUNBQXlDLE9BQU8sY0FBYyxlQUFlLDJDQUEyQyxTQUFTLGlEQUFpRCwyQ0FBMkMsbURBQW1ELFNBQVMsaURBQWlELDZDQUE2QyxTQUFTLE9BQU8sS0FBSyxnQkFBZ0IsdUJBQXVCLGdDQUFnQyxpQ0FBaUMsZ0JBQWdCLDJCQUEyQixPQUFPLHdCQUF3QixnQkFBZ0IsaU1BQWlNLFNBQVMsT0FBTyx1QkFBdUIsZUFBZSxtQ0FBbUMsd0dBQXdHLDZCQUE2QixTQUFTLGlGQUFpRix3QkFBd0IsbUNBQW1DLFNBQVMsT0FBTyxLQUFLLHdCQUF3QixvQkFBb0IsNkJBQTZCLDBCQUEwQixLQUFLLHdCQUF3QixvQkFBb0IsaUJBQWlCLDJDQUEyQyxPQUFPLEtBQUssR0FBRyxnQ0FBZ0Msa0NBQWtDLDBEQUEwRCxvQkFBb0Isc0JBQXNCLDBCQUEwQixzQ0FBc0Msc0JBQXNCLDBCQUEwQixtQ0FBbUMsaUNBQWlDLG9DQUFvQyx1QkFBdUIsU0FBUyxPQUFPLFdBQVcsMkNBQTJDLE9BQU8sMEJBQTBCLG1EQUFtRCxPQUFPLDRCQUE0Qiw2QkFBNkIsT0FBTyxLQUFLLGtCQUFrQiw0QkFBNEIsNkJBQTZCLGlEQUFpRCxLQUFLLG1CQUFtQiw2QkFBNkIsa0JBQWtCLHNCQUFzQixrQkFBa0IsMEJBQTBCLHlCQUF5QixLQUFLLEdBQUcscUJBQXFCO0FBQ3YrOEM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNUZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYndDO0FBQ3pCO0FBQ2YsU0FBUyw0REFBTSxHQUFHO0FBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7QUNId0Q7QUFDeEQsaUVBQWUsOERBQWE7Ozs7Ozs7Ozs7Ozs7OztBQ0Q1QjtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFFO0FBQ0o7QUFDUTtBQUNkO0FBQ1E7QUFDTjtBQUNIO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EseUJBQXlCLHdFQUFjLGlCQUFpQjs7QUFFeEQsNkVBQTZFOztBQUU3RTtBQUNBO0FBQ0EsYUFBYSxxRUFBZTtBQUM1QixNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTs7O0FBR04sV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQiwyRUFBaUIsUUFBUTs7QUFFL0MsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1FQUFpQjtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGVBQWUsb0VBQVU7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLHVFQUFhOztBQUUvQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQix5RUFBZTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FB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QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdExtQztBQUNnQjtBQUNsQjtBQUNvQjtBQUNRO0FBQzJCO0FBQzZCO0FBQ3pFO0FBQ007QUFDVztBQUNULENBQUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXNGO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZOcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQzJCO0FBQ1M7QUFDRjtBQUNNO0FBQ21DO0FBQ3JCOztBQUV0RCx3RUFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvbWFpbi5zY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb21wYXJlQXNjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZURlc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXREaXN0YW5jZVN0cmljdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvbWFpbi5zY3NzP2EyMjEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvTmVyb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9EZWxldGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9NaW5pQ29udGFpbmVyQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvTmV3UHJvamVjdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL05ld1RvZG9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9Qcmlvcml0eUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL1Byb2plY3RDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9UYXNrQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvVG9kb0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3ZpZXdUb2RvQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9pZEFzc2lnbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3ByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZU1hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvY2FsZW5kYXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBtaW4td2lkdGg6IDc1JTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDEuMmZyKSAycHggM2ZyO1xcbiAgYm94LXNoYWRvdzogOHB4IDhweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3A6ICM0NjRlNTUgNHB4IHNvbGlkO1xcbiAgYm9yZGVyLWxlZnQ6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbn1cXG5cXG4uc2VwYXJhdG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XFxufVxcblxcbi5tYWluQ29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVmciAycHggMWZyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnBlbmRpbmcge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1ib3R0b206ICMxNTE4MWMgMnB4IHNvbGlkO1xcbiAgYm9yZGVyLWxlZnQ6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbm1heCgwLCAxMDAlKTtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXRvcDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBib3JkZXItbGVmdDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5kYXNoYm9hcmRIZWFkZXIge1xcbiAgZm9udC1zaXplOiBjYWxjKDF2dyArIDFyZW0pO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBib3JkZXItcmlnaHQ6ICMxNTE4MWMgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHotaW5kZXg6IDI7XFxufVxcbi5zaWRlYmFyIC5kYXNoYm9hcmRIZWFkZXI6bnRoLW9mLXR5cGUoMikge1xcbiAgbWFyZ2luLXRvcDogY2xhbXAoMC41cmVtLCAwLjVyZW0gKyAxdncsIDFyZW0pO1xcbiAgbWFyZ2luLWJvdHRvbTogY2xhbXAoMXJlbSwgMXJlbSArIDF2dywgMS41cmVtKTtcXG59XFxuXFxuLmJ1cmdlck1lbnUsXFxuLmdvQmFjayB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdEJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbiNwcm9qZWN0QnV0dG9ucyAjZGVsZXRlUHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kOiBoc2woMGRlZywgODIlLCA2MyUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAwcHggMnB4IDBweCBoc2woMGRlZywgNjclLCA3NyUpO1xcbn1cXG5cXG4uZ2l0aHViIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcbi5naXRodWIgaDIge1xcbiAgbWFyZ2luOiAwLjdyZW0gMDtcXG59XFxuLmdpdGh1YiBoMiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZTdlN2U3O1xcbn1cXG5cXG4ucHJpb3JpdHlOYW1lIHtcXG4gIHBhZGRpbmctbGVmdDogY2xhbXAoMC43cmVtLCAwLjdyZW0gKyAxdncsIDFyZW0pO1xcbiAgZm9udC1zaXplOiBjbGFtcCg4cHgsIDF2dywgNjRweCk7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eUNvbG9yQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7XFxuICBwYWRkaW5nOiBjbGFtcCg4cHgsIDAuM3JlbSArIDAuM3Z3LCA2NHB4KTtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNmM3NTdkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5Q29sb3Ige1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWNvbG9yXTo6LXdlYmtpdC1jb2xvci1zd2F0Y2gtd3JhcHBlciB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPWNvbG9yXTo6LXdlYmtpdC1jb2xvci1zd2F0Y2gge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucGlja2VyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNhMGIxYzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNwcmlvcml0aWVzLFxcbiNwcm9qZWN0cyB7XFxuICBtYXJnaW4tYm90dG9tOiBjbGFtcCgxcmVtLCAxcmVtICsgMXZ3LCAxLjVyZW0pO1xcbn1cXG5cXG4jcHJpb3JpdGllcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogY2xhbXAoNnB4LCAwLjN2dywgMTJweCk7XFxufVxcbiNwcmlvcml0aWVzIC5wcmlvcml0eSB7XFxuICBwYWRkaW5nLXJpZ2h0OiBjbGFtcCgxLjRyZW0sIDFyZW0gKyAxdncsIDJyZW0pO1xcbn1cXG5cXG4ucHJpb3JpdHlDb2xvckNvbnRhaW5lciAucHJpb3JpdHlDb2xvciB7XFxuICBoZWlnaHQ6IGNsYW1wKDAuNXJlbSwgMC41cmVtICsgMXZ3LCAxLjNyZW0pO1xcbiAgd2lkdGg6IGNsYW1wKDAuNXJlbSwgMC41cmVtICsgMXZ3LCAxLjNyZW0pO1xcbn1cXG5cXG4uc2lkZWJhckJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNnZ3O1xcbn1cXG5cXG4uaGlkZVByaW9yaXRpZXMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLlRvZG9zQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgY2xhbXAoMC41cmVtLCAwLjVyZW0gKyAxLjV2dywgM3JlbSk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWJvdHRvbTogY2xhbXAoNHB4LCAwLjR2dywgOHB4KTtcXG59XFxuXFxuLnRhc2sge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmciBtaW4tY29udGVudDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogY2xhbXAoMC41cmVtLCAxdncgKyAwLjRyZW0sIDFyZW0pO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjYTBiMWMzO1xcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgbWFyZ2luOiBjbGFtcCgwLjJyZW0sIDAuMnJlbSArIDAuNHZ3LCAxcmVtKSAwO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMjYwcHgpIHtcXG4gIC50YXNrVGltZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbi50YXNrQnV0dG9uc1JpZ2h0IHtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi50YXNrQnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGFza01pbmlDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiBjbGFtcCgwLjRyZW0sIDAuM3JlbSArIDAuNXZ3LCAzcmVtKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ucHJpb3JpdHlCdXR0b25NaW5pIHtcXG4gIGN1cnNvcjogYXV0bztcXG59XFxuXFxuLnRhc2tDb2xvciB7XFxuICBoZWlnaHQ6IGNsYW1wKDAuOHJlbSwgMC41cmVtICsgMXZ3LCA0cmVtKTtcXG4gIHdpZHRoOiBjbGFtcCgwLjhyZW0sIDAuNXJlbSArIDF2dywgNHJlbSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbi50YXNrQnV0dG9uIHtcXG4gIGhlaWdodDogY2xhbXAoMC44cmVtLCAwLjVyZW0gKyAxdncsIDRyZW0pO1xcbiAgd2lkdGg6IGNsYW1wKDAuOHJlbSwgMC41cmVtICsgMXZ3LCA0cmVtKTtcXG59XFxuXFxuLnRhc2tNaW5pQ29udGFpbmVyOm50aC1sYXN0LW9mLXR5cGUoLW4gKyAyKSB7XFxuICBvdXRsaW5lOiAycHggc29saWQgIzZjNzU3ZDtcXG59XFxuXFxuLnRhc2tNaW5pQ29udGFpbmVyOm50aC1jaGlsZCgtbisyKSB7XFxuICBvdXRsaW5lOiAycHggc29saWQgIzZjNzU3ZDtcXG59XFxuXFxuLnRhc2tUaW1lIHtcXG4gIHBhZGRpbmctbGVmdDogY2FsYygxcmVtICsgMXZ3KTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcbi50YXNrVGltZSBwIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBjb2xvcjogI2FkYjViZDtcXG59XFxuXFxuLnRhc2tUaXRsZSB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgbWluLXdpZHRoOiAxcmVtO1xcbn1cXG4udGFza1RpdGxlIHAge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnRhc2tUaXRsZSxcXG4udGFza1RpbWUge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi50YXNrVGl0bGUgcCxcXG4udGFza1RpbWUgcCB7XFxuICBmb250LXNpemU6IGNsYW1wKDhweCwgMC41cmVtICsgMC43dncsIDY0cHgpO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc3VidGFza3NDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5zdWJ0YXNrIHtcXG4gIG1hcmdpbjogMCAwIGNsYW1wKDAuMnJlbSwgMC4ycmVtICsgMC40dncsIDFyZW0pIDA7XFxufVxcbi5zdWJ0YXNrIC50YXNrTWluaUNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiBjbGFtcCg4cHgsIDAuNHJlbSArIDAuNHZ3LCA0OHB4KTtcXG59XFxuLnN1YnRhc2sgLnRhc2tNaW5pQ29udGFpbmVyIC50YXNrQnV0dG9uIHtcXG4gIGhlaWdodDogY2xhbXAoMTBweCwgMC41cmVtICsgMC40dncsIDM2cHgpO1xcbiAgd2lkdGg6IGNsYW1wKDEwcHgsIDAuNXJlbSArIDAuNHZ3LCAzNnB4KTtcXG59XFxuLnN1YnRhc2sgLnRhc2tNaW5pQ29udGFpbmVyIC50YXNrQ29sb3Ige1xcbiAgd2lkdGg6IGNsYW1wKDEwcHgsIDAuNXJlbSArIDAuNHZ3LCAzNnB4KTtcXG4gIGhlaWdodDogY2xhbXAoMTBweCwgMC41cmVtICsgMC40dncsIDM2cHgpO1xcbn1cXG4uc3VidGFzayAudGFza1RpdGxlIHAsXFxuLnN1YnRhc2sgLnRhc2tUaW1lIHAge1xcbiAgZm9udC1zaXplOiBjbGFtcCg2cHgsIDAuNXJlbSArIDAuNHZ3LCAzNnB4KTtcXG59XFxuXFxuLmNvbXBsZXRlZFRhc2sge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBvcGFjaXR5OiAwLjY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpLCBpbnNldCAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi50YXNrRGF0YUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmFkZFN1YnRhc2sge1xcbiAgbWFyZ2luLXRvcDogMC4zdnc7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jY29tcGxldGVkVG9kb3MgPiAudGFza0NvbnRhaW5lciA+IC5zdWJ0YXNrc0NvbnRhaW5lciBidXR0b24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMGRlZywgMCUsIDAlLCAwLjUwMik7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21vZGFsQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XFxuICBib3gtc2hhZG93OiA4cHggOHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICBtYXgtaGVpZ2h0OiA3MHZoO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgbWF4LXdpZHRoOiA3MHZ3O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmNsb3NlQnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaHIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZGVsZXRlQ29udGFpbmVyICNjb25maXJtIHtcXG4gIGJhY2tncm91bmQ6IGhzbCgwZGVnLCA4MiUsIDYzJSk7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IDBweCAycHggMHB4IGhzbCgwZGVnLCA2NyUsIDc3JSk7XFxufVxcbi5kZWxldGVDb250YWluZXIgLmJ1dHRvbnNDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjR2dztcXG59XFxuLmZpZWxkIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygxdncgKyA2cHgpO1xcbn1cXG4uZmllbGQgaW5wdXQsXFxuLmZpZWxkIHNlbGVjdCxcXG4uZmllbGQgdGV4dGFyZWEge1xcbiAgZm9udC1zaXplOiBjYWxjKDAuOHZ3ICsgNHB4KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMjEyNTI5O1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSwgaW5zZXQgMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgcGFkZGluZzogY2FsYygwLjV2dyArIDJweCk7XFxuICBib3JkZXItcmFkaXVzOiAwLjV2dztcXG4gIGNvbG9yOiAjZjhmOWZhO1xcbn1cXG5cXG4uRHVlZGF0ZUZpZWxkIGlucHV0IHtcXG4gIGZvbnQtc2l6ZTogY2FsYygwLjh2dyArIDRweCk7XFxufVxcbi5EdWVkYXRlRmllbGQgOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblxcbi5uZXdGb3JtIHtcXG4gIG1pbi13aWR0aDogMzV2dztcXG4gIHBhZGRpbmc6IDAgY2FsYygxdncgKyA2cHgpIGNhbGMoMXZ3ICsgNnB4KSBjYWxjKDF2dyArIDZweCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAyZnI7XFxuICBnYXA6IGNhbGMoMC41dncgKyA0cHgpO1xcbn1cXG5cXG4uVGl0bGVGaWVsZCB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG4uRGVzY3JpcHRpb25GaWVsZCB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG4uRGVzY3JpcHRpb25GaWVsZCB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBoZWlnaHQ6IDIwdmg7XFxuICBtYXgtaGVpZ2h0OiAyMHZoO1xcbn1cXG5cXG4uUHJpb3JpdHlGaWVsZCBzZWxlY3Qge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzkvOWQvQ2FyZXRfZG93bl9mb250X2F3ZXNvbWVfd2hpdGV2YXJpYXRpb24uc3ZnKSBuby1yZXBlYXQgcmlnaHQgMC44cmVtIGNlbnRlci8xLjRlbSwgIzIxMjUyOTtcXG4gIC8qIFJlbW92ZSBmb2N1cyBvdXRsaW5lICovXFxuICAvKiBSZW1vdmUgSUUgYXJyb3cgKi9cXG59XFxuLlByaW9yaXR5RmllbGQgc2VsZWN0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5Qcmlvcml0eUZpZWxkIHNlbGVjdDo6LW1zLWV4cGFuZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmV3VGl0bGUge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNyZWF0ZUJ1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZVZpZXcge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHVzZXItc2VsZWN0OiBhdXRvO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi50aXRsZVZpZXdDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDJ2dztcXG59XFxuXFxuLmRlc2NyaXB0aW9uVmlld0NvbnRhaW5lciB7XFxuICBtYXJnaW46IDAgMXZ3O1xcbn1cXG5cXG4uaW5mb0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0byBtYXgtY29udGVudCBhdXRvIG1heC1jb250ZW50O1xcbn1cXG4uaW5mb0NvbnRhaW5lciAuc2VwYXJhdG9yIHtcXG4gIGhlaWdodDogMXB4O1xcbn1cXG4uaW5mb0NvbnRhaW5lciBociB7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uZGF0ZVZpZXdDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmgzIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmRhdGVTdHJpbmdDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmRhdGVTdHJpbmdDb250YWluZXIgcCB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IGNsYW1wKDhweCwgMXZ3LCA2NHB4KTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5wcmlvcml0eVZpZXdDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5wcmlvcml0eVZpZXdDb250YWluZXIgLnByaW9yaXR5IC50YXNrQ29sb3Ige1xcbiAgaGVpZ2h0OiBjbGFtcCgwLjVyZW0sIDAuNXJlbSArIDF2dywgMXJlbSk7XFxuICB3aWR0aDogY2xhbXAoMC41cmVtLCAwLjVyZW0gKyAxdncsIDFyZW0pO1xcbn1cXG5cXG4udG9kb0RhdGFDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuLnRvZG9EYXRhQ29udGFpbmVyIC5wcmlvcml0eSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IGF1dG87XFxufVxcbi50b2RvRGF0YUNvbnRhaW5lciAucHJpb3JpdHkgLnByaW9yaXR5TmFtZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ubWFpblRhc2tDb250YWluZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogIzE1MTgxYyAycHggc29saWQ7XFxufVxcblxcbi5tYWluVGFza0NvbnRhaW5lcixcXG4ubmV3Q29udGFpbmVyLFxcbi5uZXdQcm9qZWN0Q29udGFpbmVyLFxcbi5kZWxldGVDb250YWluZXIge1xcbiAgcGFkZGluZzogMCAxdncgMXZ3IDF2dztcXG59XFxuXFxuLnZpZXdTdWJDb250YWluZXIge1xcbiAgYm9yZGVyLXRvcDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBwYWRkaW5nOiAxdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi52aWV3U3ViQ29udGFpbmVyIGgxIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5kZXNjcmlwdGlvblZpZXcge1xcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbn1cXG5cXG4uQnV0dG9uc1ZpZXcge1xcbiAgYm9yZGVyLXRvcDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjh2dztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxdncgMDtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xcbn1cXG5cXG4uaGVhZGVyQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmhlYWRlckNvbnRhaW5lciAuY2xvc2VCdXR0b24ge1xcbiAgZm9udC1zaXplOiBjYWxjKDAuM3JlbSArIDEuNXZ3KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi52aWV3VGl0bGUsXFxuLnZpZXdEZXNjcmlwdGlvbiB7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbn1cXG5cXG4udmlld1RpdGxlIHtcXG4gIHBhZGRpbmc6IDAgY2xhbXAoMS41cmVtLCAxLjVyZW0gKyAxdncsIDRyZW0pO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjV2dztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogY2FsYygycmVtICsgMTB2aCk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwMGRlZywgNyUsIDglLCAwLjYpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjV2dyAwIDAuNXZ3IDAuN3Z3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0IDBzO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjAwZGVnLCA3JSwgOCUpO1xcbn1cXG5cXG4jc2VsZWN0ZWRQcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDBkZWcsIDclLCA4JSk7XFxufVxcblxcbmJ1dHRvbiBpIHtcXG4gIG1hcmdpbi1yaWdodDogMC41dnc7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAzMDBweCkge1xcbiAgLnRhc2tUaW1lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAudGFza01pbmlDb250YWluZXIge1xcbiAgICBwYWRkaW5nOiBjbGFtcCgwLjZyZW0sIDAuNnJlbSArIDF2dywgM3JlbSk7XFxuICB9XFxuICAudGFza0NvbG9yLFxcbiAgLnRhc2tCdXR0b24ge1xcbiAgICBoZWlnaHQ6IGNsYW1wKDFyZW0sIDFyZW0gKyAxdncsIDNyZW0pO1xcbiAgICB3aWR0aDogY2xhbXAoMXJlbSwgMXJlbSArIDF2dywgM3JlbSk7XFxuICB9XFxuICAudGFza1RpdGxlIHAge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDAuOHJlbSArIDF2dywgM3JlbSk7XFxuICB9XFxuICAudGFza1RpbWUgcCB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMC40cmVtLCAwLjRlbSArIDF2dywgMS41cmVtKTtcXG4gIH1cXG4gIC5hZGRTdWJ0YXNrIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAwLjhyZW0gKyAxdncsIDNyZW0pO1xcbiAgfVxcbiAgLnN1YnRhc2sgLnRhc2tNaW5pQ29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogY2xhbXAoMC40cmVtLCAwLjRyZW0gKyAxdncsIDIuNXJlbSk7XFxuICB9XFxuICAuc3VidGFzayAudGFza01pbmlDb250YWluZXIgLnRhc2tCdXR0b24sXFxuICAuc3VidGFzayAudGFza01pbmlDb250YWluZXIgLnRhc2tDb2xvciB7XFxuICAgIGhlaWdodDogY2xhbXAoMC44cmVtLCAwLjhyZW0gKyAxdncsIDIuNXJlbSk7XFxuICAgIHdpZHRoOiBjbGFtcCgwLjhyZW0sIDAuOHJlbSArIDF2dywgMi41cmVtKTtcXG4gIH1cXG4gIC5zdWJ0YXNrIC50YXNrVGl0bGUgcCB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAwLjZyZW0gKyAxdncsIDIuNXJlbSk7XFxuICB9XFxuICAuc3VidGFzayAudGFza1RpbWUgcCB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMC40cmVtLCAwLjRyZW0gKyAxdncsIDEuNXJlbSk7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICB9XFxuICAuY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMC44cmVtICsgMXZ3LCAzcmVtKTtcXG4gIH1cXG4gIC5jb250YWluZXIgLmRhc2hib2FyZEhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCAxLjVyZW0gKyAxLjV2dywgM3JlbSk7XFxuICB9XFxuICAuc2VwYXJhdG9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5wZW5kaW5nIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICB9XFxuICAubWFpbkNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuICAubWFpbkNvbnRlbnQgLmhlYWRlckNvbnRhaW5lciB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBncmF5IHNvbGlkO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xcbiAgfVxcbiAgLmhlYWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgfVxcbiAgLmJ1cmdlck1lbnUsXFxuICAuZ29CYWNrLFxcbiAgLmNsb3NlQnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIDEuNXJlbSArIDEuNXZ3LCAzcmVtKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIC5zaWRlYmFyIHtcXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC41cztcXG4gIH1cXG4gIC5oaWRlU2lkZWJhciB7XFxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKC0xMDAlIC0gMXB4KTtcXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC41cztcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtaGVpZ2h0OiA0MDBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAubWFpbkNvbnRlbnQge1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLnNpZGViYXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZDogIzM0M2E0MDtcXG4gIH1cXG4gIC5zaWRlYmFyIC5zaWRlYmFyQnV0dG9ucyB7XFxuICAgIGdhcDogY2xhbXAoMC41cmVtLCAwLjVyZW0gKyAwLjV2dywgMXJlbSk7XFxuICB9XFxuICAucHJpb3JpdHkgLnByaW9yaXR5TmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMC44cmVtICsgMXZ3LCAzcmVtKTtcXG4gIH1cXG4gIC5wcmlvcml0eSAucHJpb3JpdHlDb2xvckNvbnRhaW5lciAucHJpb3JpdHlDb2xvciB7XFxuICAgIGhlaWdodDogY2xhbXAoMXJlbSwgMXJlbSArIDF2dywgM3JlbSk7XFxuICAgIHdpZHRoOiBjbGFtcCgxcmVtLCAxcmVtICsgMXZ3LCAzcmVtKTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAjcHJvamVjdHMge1xcbiAgICBnYXA6IGNsYW1wKDAuM3JlbSwgMC4zcmVtICsgMC41dncsIDAuOHJlbSk7XFxuICB9XFxuICAucHJvamVjdENvbnRhaW5lciBoMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiBjbGFtcCgwLjVyZW0sIDAuNXJlbSArIDAuNXZ3LCAxcmVtKTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAubW9kYWwge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICB9XFxuICAjbW9kYWxDb250YWluZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgfVxcbiAgI21vZGFsQ29udGFpbmVyIGgxIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgycmVtLCAycmVtICsgMS41dncsIDRyZW0pO1xcbiAgfVxcbiAgI21vZGFsQ29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAxLjJyZW0gKyAxdncsIDJyZW0pO1xcbiAgfVxcbiAgI21vZGFsQ29udGFpbmVyIGZvcm0gbGFiZWwge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMS4ycmVtICsgMXZ3LCAycmVtKTtcXG4gIH1cXG4gICNtb2RhbENvbnRhaW5lciBmb3JtIHNlbGVjdCxcXG4gICNtb2RhbENvbnRhaW5lciBmb3JtIGlucHV0LFxcbiAgI21vZGFsQ29udGFpbmVyIGZvcm0gdGV4dGFyZWEge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMS4ycmVtICsgMXZ3LCAycmVtKTtcXG4gICAgYm9yZGVyLXJhZGl1czogY2xhbXAoMC41cmVtLCAwLjVyZW0gKyAwLjV2dywgMXJlbSk7XFxuICB9XFxuICAjbW9kYWxDb250YWluZXIgZm9ybSBpbnB1dCxcXG4gICNtb2RhbENvbnRhaW5lciBmb3JtIHRleHRhcmVhLFxcbiAgI21vZGFsQ29udGFpbmVyIGZvcm0gc2VsZWN0IHtcXG4gICAgcGFkZGluZzogY2xhbXAoMC4zcmVtLCAwLjNyZW0gKyAxdncsIDAuNnJlbSk7XFxuICB9XFxuICAubmV3Rm9ybSBidXR0b24ge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB9XFxuICAubmV3Rm9ybSAuUHJpb3JpdHlGaWVsZCBzZWxlY3Qge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy85LzlkL0NhcmV0X2Rvd25fZm9udF9hd2Vzb21lX3doaXRldmFyaWF0aW9uLnN2Zykgbm8tcmVwZWF0IHJpZ2h0IDAuNHJlbSBjZW50ZXIvMS40ZW0sICMyMTI1Mjk7XFxuICB9XFxuICAubmV3Rm9ybSAuRHVlZGF0ZUZpZWxkIGlucHV0IHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCByaWdodCAwLjhyZW0gY2VudGVyLzEuMnJlbSwgIzIxMjUyOTtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgfVxcbiAgLm5ld0Zvcm0gLkR1ZWRhdGVGaWVsZCA6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuICAubmV3Rm9ybSAuRHVlZGF0ZUZpZWxkIDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgfVxcbiAgLmRlbGV0ZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuaGVhZGVyQ29udGFpbmVyIC5jbG9zZUJ1dHRvbiB7XFxuICAgIHRvcDogMXZ3O1xcbiAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDJyZW0gKyAxLjV2dywgNHJlbSk7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmluZm9Db250YWluZXIge1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICB9XFxuICAuaW5mb0NvbnRhaW5lciAuaGVhZGVyQ29udGFpbmVyIHtcXG4gICAgcGFkZGluZy10b3A6IGNhbGMoMnJlbSArIDF2dyk7XFxuICB9XFxuICAuaW5mb0NvbnRhaW5lciAuaGVhZGVyQ29udGFpbmVyIC5jbG9zZUJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICB0b3A6IGNhbGMoMC41cmVtICsgMC41dncpO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICB9XFxuICAuaW5mb0NvbnRhaW5lciBwIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgLmluZm9Db250YWluZXIgLnZpZXdEZXNjcmlwdGlvbiB7XFxuICAgIHBhZGRpbmc6IDAgY2xhbXAoMXJlbSwgMXJlbSArIDAuNXZ3LCAycmVtKTtcXG4gIH1cXG4gIC5pbmZvQ29udGFpbmVyIC50b2RvRGF0YUNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgfVxcbiAgLnZpZXdUaXRsZSB7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gICAgcGFkZGluZzogMCBjbGFtcCgycmVtLCAycmVtICsgMC41dncsIDRyZW0pO1xcbiAgfVxcbiAgLnZpZXdOYXZiYXIge1xcbiAgICBoZWlnaHQ6IGNsYW1wKDIuNXJlbSwgMi41cmVtICsgMS41dncsIDQuNXJlbSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDk5O1xcbiAgICBiYWNrZ3JvdW5kOiAjMzQzYTQwO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICB9XFxufVxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZjhmOWZhO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTkuNzVkZWcsICM2ZTllY2YgMTMuMDIlLCAjMTIyNjNhIDEwMCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41dnc7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwLjd2dyAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0VGl0bGUge1xcbiAgZm9udC1zaXplOiAxdnc7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogIzI4ODdjODtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgMHB4IDJweCAwcHggIzZiYjJlMztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2Y4ZjlmYTtcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjF2dztcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlQnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IGhzbCgwZGVnLCA4MiUsIDYzJSk7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IDBweCAycHggMHB4IGhzbCgwZGVnLCA2NyUsIDc3JSk7XFxufVxcblxcbi5lZGl0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMTEsIDE4NCwgNTUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAwcHggMnB4IDBweCByZ2IoMTg4LCAyMjksIDE1Nik7XFxufVxcblxcbi50YXNrVGl0bGUsXFxuLnByaW9yaXR5TmFtZSB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDEycHg7XFxuICB9XFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMzgsIDM2LCAzNik7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgfVxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzEsIDIzMSwgMjMxLCAwLjc3MjU0OTAxOTYpO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvX2NvbnRhaW5lci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvX3ByaW9yaXRpZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL190YXNrLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9fbW9kYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL19mb3JtLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9fdmlld1RvZG8uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL19wcm9qZWN0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9tb2JpbGUvX3Rhc2suc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL21vYmlsZS9fY29udGFpbmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9tb2JpbGUvX3ByaW9yaXRpZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL21vYmlsZS9fcHJvamVjdHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL21vYmlsZS9fbW9kYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL21vYmlsZS9fdmlld1RvZG8uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxtREFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0Y7QURDRTtFQUNFLDZDQUFBO0VBQ0EsOENBQUE7QUNDSjs7QURHQTs7RUFFRSxhQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNBRjtBREVFO0VBQ0UsK0JBQUE7RUFDQSxpRkFBQTtBQ0FKOztBRElBO0VBQ0UsZ0JBQUE7QUNERjtBREdFO0VBQ0UsZ0JBQUE7QUNESjtBREdJO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDRE47O0FDaEZBO0VBQ0UsK0NBQUE7RUFDQSxnQ0FQcUI7RUFRckIsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBRG1GRjs7QUNoRkE7RUFDRSx5QkFBQTtFQUNBLHlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRG1GRjs7QUNoRkE7RUFDRSxrQkFBQTtFQUNBLDBDQUFBO0FEbUZGOztBQ2hGQTtFQUNFLFVBQUE7QURtRkY7O0FDaEZBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FEbUZGOztBQ2hGQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QURtRkY7O0FDaEZBO0VBQ0UseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxlQUFBO0FEbUZGOztBQ2hGQTs7RUFFRSw4Q0FyRGtCO0FEd0lwQjs7QUNoRkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBRG1GRjtBQ2pGRTtFQUNFLDhDQS9EaUI7QURrSnJCOztBQzlFRTtFQUNFLDJDQXZFcUI7RUF3RXJCLDBDQXhFcUI7QUR5SnpCOztBQzdFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QURnRkY7O0FDN0VBO0VBQ0UsYUFBQTtBRGdGRjs7QUUvSkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0VBRUEsZ0JBQUE7QUZpS0Y7O0FFOUpBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFDQUFBO0FGaUtGOztBRTlKQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtEQUFBO0VBQ0EsV0FBQTtFQUVBLGdEQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBDQUFBO0VBQ0EsNkNBQUE7QUZnS0Y7O0FFN0pBO0VBQ0U7SUFDRSxhQUFBO0VGZ0tGO0FBQ0Y7QUU3SkE7RUFDRSxzQkFBQTtBRitKRjs7QUU1SkE7RUFDRSxhQUFBO0FGK0pGOztBRTVKQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRitKRjs7QUU1SkE7RUFDRSxZQUFBO0FGK0pGOztBRTVKQTtFQUNFLHlDQTNEdUI7RUE0RHZCLHdDQTVEdUI7RUE2RHZCLGtCQUFBO0VBQ0EsMENBQUE7QUYrSkY7O0FFNUpBO0VBQ0UseUNBbEV1QjtFQW1FdkIsd0NBbkV1QjtBRmtPekI7O0FFNUpBO0VBQ0UsMEJBQUE7QUYrSkY7O0FFNUpBO0VBQ0UsMEJBQUE7QUYrSkY7O0FFNUpBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBRitKRjtBRTdKRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBRitKSjs7QUUzSkE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7QUY2SkY7QUUzSkU7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUY2Sko7O0FFekpBOztFQUVFLG9CQUFBO0VBQ0Esa0JBQUE7QUY0SkY7QUUzSkU7O0VBQ0UsMkNBL0d1QjtFQWdIdkIsU0FBQTtBRjhKSjs7QUUxSkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBRjZKRjs7QUUxSkE7RUFDRSxpREFBQTtBRjZKRjtBRTFKRTtFQUNFLHlDQUFBO0FGNEpKO0FFMUpJO0VBQ0UseUNBakl5QjtFQWtJekIsd0NBbEl5QjtBRjhSL0I7QUV6Skk7RUFDRSx3Q0F0SXlCO0VBdUl6Qix5Q0F2SXlCO0FGa1MvQjtBRXJKSTs7RUFDRSwyQ0EvSXVCO0FGdVM3Qjs7QUVuSkE7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUZBQUE7QUZzSkY7O0FFbkpBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRnNKRjs7QUVuSkE7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0FGc0pGOztBRWxKRTtFQUNFLGFBQUE7QUZxSko7O0FHL1RBO0VBQ0UsMkNBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBSGtVRjs7QUcvVEE7RUFDRSx5QkFBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUhrVUY7O0FHdFRBO0VBQ0UsZUFBQTtBSHlURjs7QUd0VEE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FIeVRGOztBR3JURTtFQUNFLCtCQUFBO0VBQ0EsaUZBQUE7QUh3VEo7QUdyVEU7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBSHVUSjs7QUlqWEE7RUFHRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FKa1hGO0FJaFhFO0VBQ0UsMEJBQUE7QUprWEo7QUkvV0U7OztFQUdFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVGQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUppWEo7O0FJNVdFO0VBQ0UsNEJBQUE7QUorV0o7QUk1V0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUo4V0o7O0FJMVdBO0VBQ0UsZUFBQTtFQUNBLDBEQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7QUo2V0Y7O0FJMVdBO0VBQ0UsZ0JBQUE7QUo2V0Y7O0FJMVdBO0VBQ0UsZ0JBQUE7QUo2V0Y7QUkzV0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FKNldKOztBSXhXRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw0SkFBQTtFQUdBLHlCQUFBO0VBSUEsb0JBQUE7QUpzV0o7QUl6V0k7RUFDRSxhQUFBO0FKMldOO0FJeFdJO0VBQ0UsYUFBQTtBSjBXTjs7QUlyV0E7RUFDRSxVQUFBO0FKd1dGOztBSXJXQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBSndXRjs7QUs5YkE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FMaWNGOztBSzliQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUxpY0Y7O0FLOWJBO0VBQ0UsYUFBQTtBTGljRjs7QUs5YkE7RUFDRSxhQUFBO0VBQ0EseURBQUE7QUxpY0Y7QUsvYkU7RUFDRSxXQUFBO0FMaWNKO0FLOWJFO0VBQ0UsVUFBQTtBTGdjSjs7QUs1YkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUwrYkY7O0FLNWJBO0VBQ0UsU0FBQTtBTCtiRjs7QUs1YkE7RUFDRSxhQUFBO0FMK2JGO0FLN2JFO0VBQ0UsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUwrYko7O0FLM2JBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FMOGJGO0FLM2JJO0VBQ0UseUNBQUE7RUFDQSx3Q0FBQTtBTDZiTjs7QUt4YkE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUwyYkY7QUt6YkU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBTDJiSjtBSzFiSTtFQUNFLG1CQUFBO0FMNGJOOztBS3ZiQTtFQUNFLGdDQUFBO0FMMGJGOztBS3ZiQTs7OztFQUlFLHNCQUFBO0FMMGJGOztBS3ZiQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FMMGJGO0FLeGJFO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUwwYko7O0FLdGJBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUx5YkY7O0FLdGJBO0VBQ0UsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBTHliRjs7QUt0YkE7RUFDRSxrQkFBQTtBTHliRjtBS3hiRTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUwwYko7O0FLdGJBOztFQUVFLHFCQUFBO0VBQ0Esc0JBQUE7QUx5YkY7O0FLdGJBO0VBQ0UsNENBQUE7QUx5YkY7O0FNcmtCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QU53a0JGOztBTXJrQkE7RUFDRSwyQ0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtBTndrQkY7O0FNcmtCQTtFQUNFLHFDQUFBO0FOd2tCRjs7QU1ya0JBO0VBQ0UscUNBQUE7QU53a0JGOztBTXBrQkU7RUFDRSxtQkFBQTtBTnVrQko7O0FPcG1CQTtFQUNFO0lBQ0UsYUFBQTtFUHVtQkY7QUFDRjtBT3BtQkE7RUFRRTtJQUNFLDBDQVBtQjtFUHNtQnJCO0VPNWxCQTs7SUFFRSxxQ0FidUI7SUFjdkIsb0NBZHVCO0VQNG1CekI7RU8xbEJFO0lBQ0UsMENBakJtQjtFUDZtQnZCO0VPdmxCRTtJQUNFLDZDQUFBO0VQeWxCSjtFT3RsQkE7SUFDRSwwQ0EzQnFCO0VQbW5CdkI7RU9wbEJFO0lBQ0UsNENBOUJvQjtFUG9uQnhCO0VPcGxCSTs7SUFFRSwyQ0FuQ3NCO0lBb0N0QiwwQ0FwQ3NCO0VQMG5CNUI7RU9sbEJJO0lBQ0UsOENBdkNvQjtFUDJuQjFCO0VPL2tCSTtJQUNFLDhDQUFBO0VQaWxCTjtBQUNGO0FRM29CQTtFQUdFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFUjJvQkY7RVF6b0JFO0lBQ0UsMENBVm1CO0VScXBCdkI7RVF4b0JFO0lBQ0UsOENBYnFCO0VSdXBCekI7RVF0b0JBO0lBQ0UsYUFBQTtFUndvQkY7RVFyb0JBO0lBQ0UsaUJBQUE7RVJ1b0JGO0VRcG9CQTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtJQUNBLGdCQUFBO0VSc29CRjtFUXBvQkU7SUFDRSw2QkFBQTtJQUNBLDJDQUFBO0VSc29CSjtFUWxvQkE7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtFUm9vQkY7RVFqb0JBOzs7SUFHRSw4Q0EvQ3VCO0lBZ0R2QixrQkFBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0VSbW9CRjtFUWhvQkE7SUFDRSw0QkFBQTtFUmtvQkY7RVEvbkJBO0lBQ0UsOEJBQUE7SUFDQSw0QkFBQTtFUmlvQkY7QUFDRjtBUTluQkE7RUFDRTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VSZ29CRjtFUTduQkE7SUFDRSxrQkFBQTtFUituQkY7QUFDRjtBUzFzQkE7RUFNRTtJQUNFLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtFVHVzQkY7RVNyc0JFO0lBQ0Usd0NBQUE7RVR1c0JKO0VTbHNCRTtJQUNFLDBDQWxCbUI7RVRzdEJ2QjtFU2hzQkk7SUFDRSxxQ0FyQm1CO0lBc0JuQixvQ0F0Qm1CO0VUd3RCekI7QUFDRjtBVTV0QkE7RUFDRTtJQUNFLDBDQUFBO0VWOHRCRjtFVTF0QkU7SUFDRSxnREFBQTtFVjR0Qko7QUFDRjtBV3B1QkE7RUFNRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFWGl1QkY7RVc5dEJBO0lBQ0UsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFWGd1QkY7RVc5dEJFO0lBQ0UsMENBcEJxQjtFWG92QnpCO0VXOXRCRTtJQUNFLDRDQXhCbUI7RVh3dkJ2QjtFVzV0Qkk7SUFDRSw0Q0E3QmlCO0VYMnZCdkI7RVczdEJJOzs7SUFHRSw0Q0FuQ2lCO0lBb0NqQixrREFsQ3FCO0VYK3ZCM0I7RVcxdEJJOzs7SUFHRSw0Q0F2Q3FCO0VYbXdCM0I7RVdsdEJFO0lBQ0Usa0JBQUE7RVhvdEJKO0VXaHRCSTtJQUNFLDRKQUFBO0VYa3RCTjtFVzNzQkk7SUFDRSx3QkFBQTtJQUNBLGlHQUFBO0lBQ0Esa0JBQUE7RVg2c0JOO0VXM3NCSTs7SUFFRSxhQUFBO0lBQ0Esd0JBQUE7RVg2c0JOO0VXeHNCQTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VYMHNCRjtFV3RzQkU7SUFDRSxRQUFBO0lBQ0EsMENBdEZxQjtFWDh4QnpCO0FBQ0Y7QVlqeUJBO0VBR0U7SUFDRSxlQUFBO0VaaXlCRjtFWS94QkU7SUFDRSw2QkFBQTtFWml5Qko7RVloeUJJO0lBQ0UsZUFBQTtJQUNBLHdCQUFBO0lBQ0Esc0JBQUE7SUFDQSx5QkFBQTtJQUNBLFlBQUE7RVpreUJOO0VZOXhCRTtJQUNFLGVBakJxQjtFWml6QnpCO0VZN3hCRTtJQUNFLDBDQUFBO0VaK3hCSjtFWTV4QkU7SUFDRSxvQkFBQTtFWjh4Qko7RVkxeEJBO0lBQ0UscUJBQUE7SUFDQSxzQkFBQTtJQUNBLDBDQUFBO0VaNHhCRjtFWXp4QkE7SUFDRSw2Q0FuQ2M7SUFvQ2QsV0FBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFWjJ4QkY7QUFDRjtBQXAwQkE7RUFDRSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0FBczBCRjs7QUFuMEJBO0VBQ0Usb0VBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBczBCRjs7QUFuMEJBO0VBQ0Usa0JBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFxMEJGOztBQWwwQkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQXEwQkY7O0FBbDBCQTtFQUNFLGFBQUE7QUFxMEJGOztBQWwwQkE7RUFDRSxtQkFBQTtFQUNBLHFFQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7QUFxMEJGOztBQWwwQkE7RUFDRSwrQkFBQTtFQUNBLGlGQUFBO0FBcTBCRjs7QUFsMEJBO0VBQ0UsNkJBQUE7RUFDQSxnRkFBQTtBQXEwQkY7O0FBbDBCQTs7RUFFRSxpQkFBQTtBQXEwQkY7O0FBbDBCQTtFQUNFO0lBQ0UsV0FBQTtFQXEwQkY7RUFsMEJBO0lBQ0Usa0JBQUE7SUFDQSx5QkFBQTtJQUNBLGlDQUFBO0lBQ0EsNENBQUE7RUFvMEJGO0VBajBCQTtJQUNFLGtCQUFBO0lBQ0EsbURBQUE7RUFtMEJGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBtaW4td2lkdGg6IDc1JTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDEuMmZyKSAycHggM2ZyO1xcbiAgYm94LXNoYWRvdzogOHB4IDhweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3A6ICM0NjRlNTUgNHB4IHNvbGlkO1xcbiAgYm9yZGVyLWxlZnQ6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbn1cXG5cXG4uc2VwYXJhdG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XFxufVxcblxcbi5tYWluQ29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVmciAycHggMWZyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnBlbmRpbmcge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1ib3R0b206ICMxNTE4MWMgMnB4IHNvbGlkO1xcbiAgYm9yZGVyLWxlZnQ6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbm1heCgwLCAxMDAlKTtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXRvcDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBib3JkZXItbGVmdDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5kYXNoYm9hcmRIZWFkZXIge1xcbiAgZm9udC1zaXplOiBjYWxjKDF2dyArIDFyZW0pO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBib3JkZXItcmlnaHQ6ICMxNTE4MWMgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHotaW5kZXg6IDI7XFxuXFxuICAuZGFzaGJvYXJkSGVhZGVyOm50aC1vZi10eXBlKDIpIHtcXG4gICAgbWFyZ2luLXRvcDogY2xhbXAoMC41cmVtLCAwLjVyZW0gKyAxdncsIDFyZW0pO1xcbiAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCgxcmVtLCAxcmVtICsgMXZ3LCAxLjVyZW0pO1xcbiAgfVxcbn1cXG5cXG4uYnVyZ2VyTWVudSxcXG4uZ29CYWNrIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNwcm9qZWN0QnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gICNkZWxldGVQcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZDogaHNsKDAsIDgyJSwgNjMlKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAwcHggMnB4IDBweCBoc2woMCwgNjclLCA3NyUpO1xcbiAgfVxcbn1cXG5cXG4uZ2l0aHViIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuXFxuICBoMiB7XFxuICAgIG1hcmdpbjogMC43cmVtIDA7XFxuXFxuICAgIGEge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBjb2xvcjogI2U3ZTdlNztcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgXFxcIi4vaW5kZXhcXFwiLCBcXFwiLi9tb2JpbGUvaW5kZXhcXFwiO1xcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZjhmOWZhO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTkuNzVkZWcsICM2ZTllY2YgMTMuMDIlLCAjMTIyNjNhIDEwMCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC8vIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMXZ3KTtcXG4gIGZvbnQtc2l6ZTogMS41dnc7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwLjd2dyAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0VGl0bGUge1xcbiAgZm9udC1zaXplOiAxdnc7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogIzI4ODdjODtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgMHB4IDJweCAwcHggIzZiYjJlMztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2Y4ZjlmYTtcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjF2dztcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlQnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IGhzbCgwLCA4MiUsIDYzJSk7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IDBweCAycHggMHB4IGhzbCgwLCA2NyUsIDc3JSk7XFxufVxcblxcbi5lZGl0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMTEsIDE4NCwgNTUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAwcHggMnB4IDBweCByZ2IoMTg4LCAyMjksIDE1Nik7XFxufVxcblxcbi50YXNrVGl0bGUsXFxuLnByaW9yaXR5TmFtZSB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDEycHg7XFxuICB9XFxuXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMzgsIDM2LCAzNik7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgfVxcblxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlN2M1O1xcbiAgfVxcbn1cXG5cIixcIiRyZXNwb25zaXZlLXRleHQtc2l6ZTogY2xhbXAoOHB4LCAxdncsIDY0cHgpO1xcbiRyZXNwb25zaXZlLWJ1dHRvbi1zaXplOiBjbGFtcCgwLjVyZW0sIDAuNXJlbSArIDF2dywgMS4zcmVtKTtcXG4kcmVzcG9uc2l2ZS1wcmlvLXNpemU6IGNsYW1wKDE0cHgsIGNhbGMoMC41cmVtICsgMC40dncpLCA2NHB4KTtcXG4kcmVzcG9uc2l2ZS1wYWRkaW5nOiBjbGFtcCgxLjRyZW0sIDFyZW0gKyAxdncsIDJyZW0pO1xcbiRyZXNwb25zaXZlLW1hcmdpbjogY2xhbXAoMXJlbSwgMXJlbSArIDF2dywgMS41cmVtKTtcXG4ucHJpb3JpdHlOYW1lIHtcXG4gIHBhZGRpbmctbGVmdDogY2xhbXAoMC43cmVtLCAwLjdyZW0gKyAxdncsIDFyZW0pO1xcbiAgZm9udC1zaXplOiAkcmVzcG9uc2l2ZS10ZXh0LXNpemU7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eUNvbG9yQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7XFxuICBwYWRkaW5nOiBjbGFtcCg4cHgsIGNhbGMoMC4zcmVtICsgMC4zdncpLCA2NHB4KTtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNmM3NTdkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5Q29sb3Ige1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjb2xvclxcXCJdOjotd2Via2l0LWNvbG9yLXN3YXRjaC13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNvbG9yXFxcIl06Oi13ZWJraXQtY29sb3Itc3dhdGNoIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnBpY2tlciB7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjYTBiMWMzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcHJpb3JpdGllcyxcXG4jcHJvamVjdHMge1xcbiAgbWFyZ2luLWJvdHRvbTogJHJlc3BvbnNpdmUtbWFyZ2luO1xcbn1cXG5cXG4jcHJpb3JpdGllcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogY2xhbXAoNnB4LCAwLjN2dywgMTJweCk7XFxuXFxuICAucHJpb3JpdHkge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAkcmVzcG9uc2l2ZS1wYWRkaW5nO1xcbiAgfVxcbn1cXG5cXG4ucHJpb3JpdHlDb2xvckNvbnRhaW5lciB7XFxuICAucHJpb3JpdHlDb2xvciB7XFxuICAgIGhlaWdodDogJHJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICAgIHdpZHRoOiAkcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTtcXG4gIH1cXG59XFxuXFxuLnNpZGViYXJCdXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjZ2dztcXG59XFxuXFxuLmhpZGVQcmlvcml0aWVzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLFwiJGJpZy1yZXNwb25zaXZlLXRleHQtc2l6ZTogY2xhbXAoOHB4LCBjYWxjKDAuNXJlbSArIDAuN3Z3KSwgNjRweCk7XFxuJGJpZy1yZXNwb25zaXZlLWJ1dHRvbi1zaXplOiBjbGFtcCgxNHB4LCBjYWxjKDAuNXJlbSArIDAuN3Z3KSwgNjRweCk7XFxuJHNtYWxsLXJlc3BvbnNpdmUtdGV4dC1zaXplOiBjbGFtcCg2cHgsIGNhbGMoMC41cmVtICsgMC40dncpLCAzNnB4KTtcXG4kc21hbGwtcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTogY2xhbXAoMTBweCwgY2FsYygwLjVyZW0gKyAwLjR2dyksIDM2cHgpO1xcbiRyZXNwb25zaXZlLWJ1dHRvbi1zaXplOiBjbGFtcCgwLjhyZW0sIDAuNXJlbSArIDF2dywgNHJlbSk7XFxuLlRvZG9zQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgY2xhbXAoMC41cmVtLCAwLjVyZW0gKyAxLjV2dywgM3JlbSk7XFxuICAvLyBwYWRkaW5nOiAwIGNsYW1wKDFyZW0sIDF2dyArIDAuNzVyZW0sIDNyZW0pO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnRhc2tDb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1ib3R0b206IGNsYW1wKDRweCwgMC40dncsIDhweCk7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnIgbWluLWNvbnRlbnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIC8vIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBib3JkZXItcmFkaXVzOiBjbGFtcCgwLjVyZW0sIDF2dyArIDAuNHJlbSwgMXJlbSk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNhMGIxYzM7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBtYXJnaW46IGNsYW1wKDAuMnJlbSwgMC4ycmVtICsgMC40dncsIDFyZW0pIDA7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAyNjBweCkge1xcbiAgLnRhc2tUaW1lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLnRhc2tCdXR0b25zUmlnaHQge1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLnRhc2tCdXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50YXNrTWluaUNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IGNsYW1wKDAuNHJlbSwgY2FsYygwLjNyZW0gKyAwLjV2dyksIDNyZW0pO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5wcmlvcml0eUJ1dHRvbk1pbmkge1xcbiAgY3Vyc29yOiBhdXRvO1xcbn1cXG5cXG4udGFza0NvbG9yIHtcXG4gIGhlaWdodDogJHJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICB3aWR0aDogJHJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbi50YXNrQnV0dG9uIHtcXG4gIGhlaWdodDogJHJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICB3aWR0aDogJHJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxufVxcblxcbi50YXNrTWluaUNvbnRhaW5lcjpudGgtbGFzdC1vZi10eXBlKC1uICsgMikge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICM2Yzc1N2Q7XFxufVxcblxcbi50YXNrTWluaUNvbnRhaW5lcjpudGgtY2hpbGQoLW4gKyAyKSB7XFxuICBvdXRsaW5lOiAycHggc29saWQgIzZjNzU3ZDtcXG59XFxuXFxuLnRhc2tUaW1lIHtcXG4gIHBhZGRpbmctbGVmdDogY2FsYygxcmVtICsgMXZ3KTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuXFxuICBwIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgY29sb3I6ICNhZGI1YmQ7XFxuICB9XFxufVxcblxcbi50YXNrVGl0bGUge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIC8vIHdpZHRoOiBjbGFtcCgxNTBweCwgY2FsYygxMHZ3ICsgMTByZW0pLCA1MDBweCk7XFxuICBtaW4td2lkdGg6IDFyZW07XFxuXFxuICBwIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB9XFxufVxcblxcbi50YXNrVGl0bGUsXFxuLnRhc2tUaW1lIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcCB7XFxuICAgIGZvbnQtc2l6ZTogJGJpZy1yZXNwb25zaXZlLXRleHQtc2l6ZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbn1cXG5cXG4uc3VidGFza3NDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5zdWJ0YXNrIHtcXG4gIG1hcmdpbjogMCAwIGNsYW1wKDAuMnJlbSwgMC4ycmVtICsgMC40dncsIDFyZW0pIDA7XFxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIC50YXNrTWluaUNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IGNsYW1wKDhweCwgY2FsYygwLjRyZW0gKyAwLjR2dyksIDQ4cHgpO1xcblxcbiAgICAudGFza0J1dHRvbiB7XFxuICAgICAgaGVpZ2h0OiAkc21hbGwtcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTtcXG4gICAgICB3aWR0aDogJHNtYWxsLXJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICAgIH1cXG5cXG4gICAgLnRhc2tDb2xvciB7XFxuICAgICAgd2lkdGg6ICRzbWFsbC1yZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbiAgICAgIGhlaWdodDogJHNtYWxsLXJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC50YXNrVGl0bGUsXFxuICAudGFza1RpbWUge1xcbiAgICBwIHtcXG4gICAgICBmb250LXNpemU6ICRzbWFsbC1yZXNwb25zaXZlLXRleHQtc2l6ZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uY29tcGxldGVkVGFzayB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIG9wYWNpdHk6IDAuNjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSksIGluc2V0IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLnRhc2tEYXRhQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uYWRkU3VidGFzayB7XFxuICBtYXJnaW4tdG9wOiAwLjN2dztcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNjb21wbGV0ZWRUb2RvcyA+IC50YXNrQ29udGFpbmVyID4gLnN1YnRhc2tzQ29udGFpbmVyIHtcXG4gIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblwiLFwiLm1vZGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjUwMik7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21vZGFsQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XFxuICBib3gtc2hhZG93OiA4cHggOHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICBtYXgtaGVpZ2h0OiA3MHZoO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgbWF4LXdpZHRoOiA3MHZ3O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmNsb3NlQnV0dG9uIHtcXG4gIC8vIHBvc2l0aW9uOiBzdGlja3k7XFxuICAvLyB0b3A6IDF2dztcXG4gIC8vIGxlZnQ6IDF2dztcXG4gIC8vIGhlaWdodDogMS4zdnc7XFxuICAvLyB3aWR0aDogMS4zdnc7XFxuICAvLyB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY2xvc2VCdXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ociB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kZWxldGVDb250YWluZXIge1xcbiAgI2NvbmZpcm0ge1xcbiAgICBiYWNrZ3JvdW5kOiBoc2woMCwgODIlLCA2MyUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IDBweCAycHggMHB4IGhzbCgwLCA2NyUsIDc3JSk7XFxuICB9XFxuXFxuICAuYnV0dG9uc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gIH1cXG59XFxuXCIsXCIuZmllbGQge1xcbiAgJHJlc3BvbnNpdmUtc2VsZWN0OiBjbGFtcCgwLjNyZW0sIDAuM3JlbSArIDAuNHZ3LCAwLjhyZW0pO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNHZ3O1xcblxcbiAgbGFiZWwge1xcbiAgICBmb250LXNpemU6IGNhbGMoMXZ3ICsgNnB4KTtcXG4gIH1cXG5cXG4gIGlucHV0LFxcbiAgc2VsZWN0LFxcbiAgdGV4dGFyZWEge1xcbiAgICBmb250LXNpemU6IGNhbGMoMC44dncgKyA0cHgpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICMyMTI1Mjk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSksIGluc2V0IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgcGFkZGluZzogY2FsYygwLjV2dyArIDJweCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXZ3O1xcbiAgICBjb2xvcjogI2Y4ZjlmYTtcXG4gIH1cXG59XFxuXFxuLkR1ZWRhdGVGaWVsZCB7XFxuICBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjh2dyArIDRweCk7XFxuICB9XFxuXFxuICA6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgfVxcbn1cXG5cXG4ubmV3Rm9ybSB7XFxuICBtaW4td2lkdGg6IDM1dnc7XFxuICBwYWRkaW5nOiAwIGNhbGMoMXZ3ICsgNnB4KSBjYWxjKDF2dyArIDZweCkgY2FsYygxdncgKyA2cHgpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMmZyO1xcbiAgZ2FwOiBjYWxjKDAuNXZ3ICsgNHB4KTtcXG59XFxuXFxuLlRpdGxlRmllbGQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4uRGVzY3JpcHRpb25GaWVsZCB7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuXFxuICB0ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICBtYXgtaGVpZ2h0OiAyMHZoO1xcbiAgfVxcbn1cXG5cXG4uUHJpb3JpdHlGaWVsZCB7XFxuICBzZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvOS85ZC9DYXJldF9kb3duX2ZvbnRfYXdlc29tZV93aGl0ZXZhcmlhdGlvbi5zdmcpXFxuICAgICAgICBuby1yZXBlYXQgcmlnaHQgMC44cmVtIGNlbnRlciAvIDEuNGVtLFxcbiAgICAgICMyMTI1Mjk7XFxuICAgIC8qIFJlbW92ZSBmb2N1cyBvdXRsaW5lICovXFxuICAgICY6Zm9jdXMge1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIH1cXG4gICAgLyogUmVtb3ZlIElFIGFycm93ICovXFxuICAgICY6Oi1tcy1leHBhbmQge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLm5ld1RpdGxlIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jcmVhdGVCdXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cIixcIi50aXRsZVZpZXcge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHVzZXItc2VsZWN0OiBhdXRvO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi50aXRsZVZpZXdDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDJ2dztcXG59XFxuXFxuLmRlc2NyaXB0aW9uVmlld0NvbnRhaW5lciB7XFxuICBtYXJnaW46IDAgMXZ3O1xcbn1cXG5cXG4uaW5mb0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0byBtYXgtY29udGVudCBhdXRvIG1heC1jb250ZW50O1xcblxcbiAgLnNlcGFyYXRvciB7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgfVxcblxcbiAgaHIge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbn1cXG5cXG4uZGF0ZVZpZXdDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmgzIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmRhdGVTdHJpbmdDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG5cXG4gIHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoOHB4LCAxdncsIDY0cHgpO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgfVxcbn1cXG5cXG4ucHJpb3JpdHlWaWV3Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgLnByaW9yaXR5IHtcXG4gICAgLnRhc2tDb2xvciB7XFxuICAgICAgaGVpZ2h0OiBjbGFtcCgwLjVyZW0sIDAuNXJlbSArIDF2dywgMXJlbSk7XFxuICAgICAgd2lkdGg6IGNsYW1wKDAuNXJlbSwgMC41cmVtICsgMXZ3LCAxcmVtKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4udG9kb0RhdGFDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG5cXG4gIC5wcmlvcml0eSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBhdXRvO1xcbiAgICAucHJpb3JpdHlOYW1lIHtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5tYWluVGFza0NvbnRhaW5lciB7XFxuICBib3JkZXItYm90dG9tOiAjMTUxODFjIDJweCBzb2xpZDtcXG59XFxuXFxuLm1haW5UYXNrQ29udGFpbmVyLFxcbi5uZXdDb250YWluZXIsXFxuLm5ld1Byb2plY3RDb250YWluZXIsXFxuLmRlbGV0ZUNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwIDF2dyAxdncgMXZ3O1xcbn1cXG5cXG4udmlld1N1YkNvbnRhaW5lciB7XFxuICBib3JkZXItdG9wOiAjNDY0ZTU1IDJweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDF2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGgxIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbn1cXG5cXG4uZGVzY3JpcHRpb25WaWV3IHtcXG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG59XFxuXFxuLkJ1dHRvbnNWaWV3IHtcXG4gIGJvcmRlci10b3A6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC44dnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXZ3IDA7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcXG59XFxuXFxuLmhlYWRlckNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAuY2xvc2VCdXR0b24ge1xcbiAgICBmb250LXNpemU6IGNhbGMoMC4zcmVtICsgMS41dncpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICB9XFxufVxcblxcbi52aWV3VGl0bGUsXFxuLnZpZXdEZXNjcmlwdGlvbiB7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbn1cXG5cXG4udmlld1RpdGxlIHtcXG4gIHBhZGRpbmc6IDAgY2xhbXAoMS41cmVtLCAxLjVyZW0gKyAxdncsIDRyZW0pO1xcbn1cXG5cIixcIiNwcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXZ3O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiBjYWxjKDJyZW0gKyAxMHZoKTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjAwLCA3JSwgOCUsIDYwJSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNXZ3IDAgMC41dncgMC43dnc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQgMHM7XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjAwLCA3JSwgOCUsIDEwMCUpO1xcbn1cXG5cXG4jc2VsZWN0ZWRQcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjAwLCA3JSwgOCUsIDEwMCUpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgaSB7XFxuICAgIG1hcmdpbi1yaWdodDogMC41dnc7XFxuICB9XFxufVxcblwiLFwiQG1lZGlhIChtYXgtd2lkdGg6IDMwMHB4KSB7XFxuICAudGFza1RpbWUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gICRyZXNwb25zaXZlLWJ1dHRvbi1zaXplOiBjbGFtcCgxcmVtLCAxcmVtICsgMXZ3LCAzcmVtKTtcXG4gICRyZXNwb25zaXZlLXBhZGRpbmc6IGNsYW1wKDAuNnJlbSwgMC42cmVtICsgMXZ3LCAzcmVtKTtcXG4gICRyZXNwb25zaXZlLWZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMC44cmVtICsgMXZ3LCAzcmVtKTtcXG4gICRyZXNwb25zaXZlLXN1YkJ1dHRvbi1zaXplOiBjbGFtcCgwLjhyZW0sIDAuOHJlbSArIDF2dywgMi41cmVtKTtcXG4gICRyZXNwb25zaXZlLXN1YlBhZGRpbmc6IGNsYW1wKDAuNHJlbSwgMC40cmVtICsgMXZ3LCAyLjVyZW0pO1xcbiAgJHJlc3BvbnNpdmUtc3ViRm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDAuNnJlbSArIDF2dywgMi41cmVtKTtcXG5cXG4gIC50YXNrTWluaUNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6ICRyZXNwb25zaXZlLXBhZGRpbmc7XFxuICB9XFxuXFxuICAudGFza0NvbG9yLFxcbiAgLnRhc2tCdXR0b24ge1xcbiAgICBoZWlnaHQ6ICRyZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbiAgICB3aWR0aDogJHJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICB9XFxuXFxuICAudGFza1RpdGxlIHtcXG4gICAgcCB7XFxuICAgICAgZm9udC1zaXplOiAkcmVzcG9uc2l2ZS1mb250LXNpemU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC50YXNrVGltZSB7XFxuICAgIHAge1xcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC40cmVtLCAwLjRlbSArIDF2dywgMS41cmVtKTtcXG4gICAgfVxcbiAgfVxcbiAgLmFkZFN1YnRhc2sge1xcbiAgICBmb250LXNpemU6ICRyZXNwb25zaXZlLWZvbnQtc2l6ZTtcXG4gIH1cXG5cXG4gIC5zdWJ0YXNrIHtcXG4gICAgLnRhc2tNaW5pQ29udGFpbmVyIHtcXG4gICAgICBwYWRkaW5nOiAkcmVzcG9uc2l2ZS1zdWJQYWRkaW5nO1xcblxcbiAgICAgIC50YXNrQnV0dG9uLFxcbiAgICAgIC50YXNrQ29sb3Ige1xcbiAgICAgICAgaGVpZ2h0OiAkcmVzcG9uc2l2ZS1zdWJCdXR0b24tc2l6ZTtcXG4gICAgICAgIHdpZHRoOiAkcmVzcG9uc2l2ZS1zdWJCdXR0b24tc2l6ZTtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLnRhc2tUaXRsZSB7XFxuICAgICAgcCB7XFxuICAgICAgICBmb250LXNpemU6ICRyZXNwb25zaXZlLXN1YkZvbnQtc2l6ZTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnRhc2tUaW1lIHtcXG4gICAgICBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC40cmVtLCAwLjRyZW0gKyAxdncsIDEuNXJlbSk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiLFwiQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAkcmVzcG9uc2l2ZS1mb250LXNpemU6IGNsYW1wKDFyZW0sIDAuOHJlbSArIDF2dywgM3JlbSk7XFxuICAkcmVzcG9uc2l2ZS1oZWFkZXItc2l6ZTogY2xhbXAoMS41cmVtLCAxLjVyZW0gKyAxLjV2dywgM3JlbSk7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBmb250LXNpemU6ICRyZXNwb25zaXZlLWZvbnQtc2l6ZTtcXG4gICAgfVxcblxcbiAgICAuZGFzaGJvYXJkSGVhZGVyIHtcXG4gICAgICBmb250LXNpemU6ICRyZXNwb25zaXZlLWhlYWRlci1zaXplO1xcbiAgICB9XFxuICB9XFxuXFxuICAuc2VwYXJhdG9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5wZW5kaW5nIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICB9XFxuXFxuICAubWFpbkNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgIC5oZWFkZXJDb250YWluZXIge1xcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBncmF5IHNvbGlkO1xcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5oZWFkZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXG4gIH1cXG5cXG4gIC5idXJnZXJNZW51LFxcbiAgLmdvQmFjayxcXG4gIC5jbG9zZUJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogJHJlc3BvbnNpdmUtaGVhZGVyLXNpemU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAuc2lkZWJhciB7XFxuICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuNXM7XFxuICB9XFxuXFxuICAuaGlkZVNpZGViYXIge1xcbiAgICBtYXJnaW4tbGVmdDogY2FsYygtMTAwJSAtIDFweCk7XFxuICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuNXM7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LWhlaWdodDogNDAwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLm1haW5Db250ZW50IHtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgfVxcbn1cXG5cIixcIkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgJHJlc3BvbnNpdmUtZm9udC1zaXplOiBjbGFtcCgxcmVtLCAwLjhyZW0gKyAxdncsIDNyZW0pO1xcbiAgJHJlc3BvbnNpdmUtcGFkZGluZzogY2xhbXAoMC42cmVtLCAwLjZyZW0gKyAxdncsIDNyZW0pO1xcbiAgJHJlc3BvbnNpdmUtYnV0dG9uLXNpemU6IGNsYW1wKDFyZW0sIDFyZW0gKyAxdncsIDNyZW0pO1xcbiAgJHJlc3BvbnNpdmUtbWFyZ2luOiBjbGFtcCgxcmVtLCAxcmVtICsgMXZ3LCAxLjVyZW0pO1xcblxcbiAgLnNpZGViYXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZDogIzM0M2E0MDtcXG5cXG4gICAgLnNpZGViYXJCdXR0b25zIHtcXG4gICAgICBnYXA6IGNsYW1wKDAuNXJlbSwgMC41cmVtICsgMC41dncsIDFyZW0pO1xcbiAgICB9XFxuICB9XFxuXFxuICAucHJpb3JpdHkge1xcbiAgICAucHJpb3JpdHlOYW1lIHtcXG4gICAgICBmb250LXNpemU6ICRyZXNwb25zaXZlLWZvbnQtc2l6ZTtcXG4gICAgfVxcblxcbiAgICAucHJpb3JpdHlDb2xvckNvbnRhaW5lciB7XFxuICAgICAgLnByaW9yaXR5Q29sb3Ige1xcbiAgICAgICAgaGVpZ2h0OiAkcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTtcXG4gICAgICAgIHdpZHRoOiAkcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCJAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gICNwcm9qZWN0cyB7XFxuICAgIGdhcDogY2xhbXAoMC4zcmVtLCAwLjNyZW0gKyAwLjV2dywgMC44cmVtKTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgaDMge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBjbGFtcCgwLjVyZW0sIDAuNXJlbSArIDAuNXZ3LCAxcmVtKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgJHJlc3BvbnNpdmUtZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDEuMnJlbSArIDF2dywgMnJlbSk7XFxuICAkcmVzcG9uc2l2ZS1oZWFkZXItc2l6ZTogY2xhbXAoMnJlbSwgMnJlbSArIDEuNXZ3LCA0cmVtKTtcXG4gICRyZXNwb25zaXZlLWJvcmRlci1yYWRpdXM6IGNsYW1wKDAuNXJlbSwgMC41cmVtICsgMC41dncsIDFyZW0pO1xcbiAgJHJlc3BvbnNpdmUtaW5wdXQtcGFkZGluZzogY2xhbXAoMC4zcmVtLCAwLjNyZW0gKyAxdncsIDAuNnJlbSk7XFxuICAkcmVzcG9uc2l2ZS1oZWFkZXItbWFyZ2luOiBjbGFtcCgxcmVtLCAwLjdyZW0gKyAxdncsIDEuNXJlbSk7XFxuICAubW9kYWwge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICB9XFxuXFxuICAjbW9kYWxDb250YWluZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgICBoMSB7XFxuICAgICAgZm9udC1zaXplOiAkcmVzcG9uc2l2ZS1oZWFkZXItc2l6ZTtcXG4gICAgfVxcbiAgICBidXR0b24ge1xcbiAgICAgIGZvbnQtc2l6ZTogJHJlc3BvbnNpdmUtZm9udC1zaXplO1xcbiAgICB9XFxuXFxuICAgIGZvcm0ge1xcbiAgICAgIGxhYmVsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogJHJlc3BvbnNpdmUtZm9udC1zaXplO1xcbiAgICAgIH1cXG5cXG4gICAgICBzZWxlY3QsXFxuICAgICAgaW5wdXQsXFxuICAgICAgdGV4dGFyZWEge1xcbiAgICAgICAgZm9udC1zaXplOiAkcmVzcG9uc2l2ZS1mb250LXNpemU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAkcmVzcG9uc2l2ZS1ib3JkZXItcmFkaXVzO1xcbiAgICAgIH1cXG5cXG4gICAgICBpbnB1dCxcXG4gICAgICB0ZXh0YXJlYSxcXG4gICAgICBzZWxlY3Qge1xcbiAgICAgICAgcGFkZGluZzogJHJlc3BvbnNpdmUtaW5wdXQtcGFkZGluZztcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5uZXdGb3JtIHtcXG4gICAgLy8gZGlzcGxheTogZmxleDtcXG4gICAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5Qcmlvcml0eUZpZWxkIHtcXG4gICAgICBzZWxlY3Qge1xcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvOS85ZC9DYXJldF9kb3duX2ZvbnRfYXdlc29tZV93aGl0ZXZhcmlhdGlvbi5zdmcpXFxuICAgICAgICAgICAgbm8tcmVwZWF0IHJpZ2h0IDAuNHJlbSBjZW50ZXIgLyAxLjRlbSxcXG4gICAgICAgICAgIzIxMjUyOTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLkR1ZWRhdGVGaWVsZCB7XFxuICAgICAgaW5wdXQge1xcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFxcXCIvc3JjL2Fzc2V0cy9jYWxlbmRhci5zdmdcXFwiKSBuby1yZXBlYXQgcmlnaHQgMC44cmVtIGNlbnRlciAvIDEuMnJlbSwgIzIxMjUyOTtcXG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgICB9XFxuICAgICAgOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbiAgICAgIDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAuZGVsZXRlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5oZWFkZXJDb250YWluZXIge1xcbiAgICAuY2xvc2VCdXR0b24ge1xcbiAgICAgIHRvcDogMXZ3O1xcbiAgICAgIGZvbnQtc2l6ZTogJHJlc3BvbnNpdmUtaGVhZGVyLXNpemU7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCJAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gICRyZXNwb25zaXZlLXAtZm9udC1zaXplOiAxcmVtO1xcbiAgJG5hdmJhci1oZWlnaHQ6IGNsYW1wKDIuNXJlbSwgMi41cmVtICsgMS41dncsIDQuNXJlbSk7XFxuICAuaW5mb0NvbnRhaW5lciB7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG5cXG4gICAgLmhlYWRlckNvbnRhaW5lciB7XFxuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMnJlbSArIDF2dyk7XFxuICAgICAgLmNsb3NlQnV0dG9uIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgICAgICB0b3A6IGNhbGMoMC41cmVtICsgMC41dncpO1xcbiAgICAgICAgei1pbmRleDogMTAwO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBwIHtcXG4gICAgICBmb250LXNpemU6ICRyZXNwb25zaXZlLXAtZm9udC1zaXplO1xcbiAgICB9XFxuXFxuICAgIC52aWV3RGVzY3JpcHRpb24ge1xcbiAgICAgIHBhZGRpbmc6IDAgY2xhbXAoMXJlbSwgMXJlbSArIDAuNXZ3LCAycmVtKTtcXG4gICAgfVxcblxcbiAgICAudG9kb0RhdGFDb250YWluZXIge1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICAudmlld1RpdGxlIHtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgICBwYWRkaW5nOiAwIGNsYW1wKDJyZW0sIDJyZW0gKyAwLjV2dywgNHJlbSk7XFxuICB9XFxuXFxuICAudmlld05hdmJhciB7XFxuICAgIGhlaWdodDogJG5hdmJhci1oZWlnaHQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDk5O1xcbiAgICBiYWNrZ3JvdW5kOiAjMzQzYTQwO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcblxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIG9iamVjdCkge1xuICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhc3NpZ24gcmVxdWlyZXMgdGhhdCBpbnB1dCBwYXJhbWV0ZXIgbm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gIH1cblxuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgICA7XG4gICAgICB0YXJnZXRbcHJvcGVydHldID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBhc3NpZ24gZnJvbSBcIi4uL2Fzc2lnbi9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiBhc3NpZ24oe30sIG9iamVjdCk7XG59IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIEcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcblxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gWShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyOyAvLyBUd28gZGlnaXQgeWVhclxuXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfSAvLyBPcmRpbmFsIG51bWJlclxuXG5cbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIFIoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTsgLy8gUGFkZGluZ1xuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gdShkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiBRKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIHEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIEwoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIHcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIEkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIEQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gRShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gZShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIGMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIGkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIGIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiBCKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIEsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gayhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gWChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcblxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24geChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiBPKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24geihkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIHQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gVChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG5cbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsInZhciBkYXRlTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIHRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xuXG52YXIgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcblxudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVEZXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyByZXZlcnNlIGNocm9ub2xvZ2ljYWxseSBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5IHJldmVyc2UgY2hyb25vbG9naWNhbGx5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZURlc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IDFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXMgaW4gcmV2ZXJzZSBjaHJvbm9sb2dpY2FsIG9yZGVyOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlRGVzYylcbiAqIC8vPT4gW1xuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZURlc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5cbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nOyAvLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5cbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGUsIF9yZWYyLCBfcmVmMywgX3JlZjQsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlMiwgX29wdGlvbnMkbG9jYWxlMiRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIsIF9yZWY1LCBfcmVmNiwgX3JlZjcsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlMywgX29wdGlvbnMkbG9jYWxlMyRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0O1xuXG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGxvY2FsZSA9IChfcmVmID0gKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9vcHRpb25zJGxvY2FsZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbG9jYWxlIDogZGVmYXVsdE9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogZGVmYXVsdExvY2FsZTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZjIgPSAoX3JlZjMgPSAoX3JlZjQgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUyLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMiRvcHRpLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjQgIT09IHZvaWQgMCA/IF9yZWY0IDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAxKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmNSA9IChfcmVmNiA9IChfcmVmNyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTMub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUzJG9wdGkud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNyAhPT0gdm9pZCAwID8gX3JlZjcgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY2ICE9PSB2b2lkIDAgPyBfcmVmNiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsNC53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY1ICE9PSB2b2lkIDAgPyBfcmVmNSA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH0gLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5cbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuXG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHZhciBtYXRjaGVkID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XG5cbiAgaWYgKCFtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZWRbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCBjb21wYXJlQXNjIGZyb20gXCIuLi9jb21wYXJlQXNjL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBjbG9uZU9iamVjdCBmcm9tIFwiLi4vX2xpYi9jbG9uZU9iamVjdC9pbmRleC5qc1wiO1xuaW1wb3J0IGFzc2lnbiBmcm9tIFwiLi4vX2xpYi9hc3NpZ24vaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX01JTlVURSA9IDEwMDAgKiA2MDtcbnZhciBNSU5VVEVTX0lOX0RBWSA9IDYwICogMjQ7XG52YXIgTUlOVVRFU19JTl9NT05USCA9IE1JTlVURVNfSU5fREFZICogMzA7XG52YXIgTUlOVVRFU19JTl9ZRUFSID0gTUlOVVRFU19JTl9EQVkgKiAzNjU7XG4vKipcbiAqIEBuYW1lIGZvcm1hdERpc3RhbmNlU3RyaWN0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLCB1c2luZyBzdHJpY3QgdW5pdHMuXG4gKiBUaGlzIGlzIGxpa2UgYGZvcm1hdERpc3RhbmNlYCwgYnV0IGRvZXMgbm90IHVzZSBoZWxwZXJzIGxpa2UgJ2FsbW9zdCcsICdvdmVyJyxcbiAqICdsZXNzIHRoYW4nIGFuZCB0aGUgbGlrZS5cbiAqXG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgfCBSZXN1bHQgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIC4uLiA1OSBzZWNzICAgICAgICAgIHwgWzAuLjU5XSBzZWNvbmRzICAgICB8XG4gKiB8IDEgLi4uIDU5IG1pbnMgICAgICAgICAgfCBbMS4uNTldIG1pbnV0ZXMgICAgIHxcbiAqIHwgMSAuLi4gMjMgaHJzICAgICAgICAgICB8IFsxLi4yM10gaG91cnMgICAgICAgfFxuICogfCAxIC4uLiAyOSBkYXlzICAgICAgICAgIHwgWzEuLjI5XSBkYXlzICAgICAgICB8XG4gKiB8IDEgLi4uIDExIG1vbnRocyAgICAgICAgfCBbMS4uMTFdIG1vbnRocyAgICAgIHxcbiAqIHwgMSAuLi4gTiB5ZWFycyAgICAgICAgICB8IFsxLi5OXSAgeWVhcnMgICAgICAgfFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYmFzZURhdGUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hZGRTdWZmaXg9ZmFsc2VdIC0gcmVzdWx0IGluZGljYXRlcyBpZiB0aGUgc2Vjb25kIGRhdGUgaXMgZWFybGllciBvciBsYXRlciB0aGFuIHRoZSBmaXJzdFxuICogQHBhcmFtIHsnc2Vjb25kJ3wnbWludXRlJ3wnaG91cid8J2RheSd8J21vbnRoJ3wneWVhcid9IFtvcHRpb25zLnVuaXRdIC0gaWYgc3BlY2lmaWVkLCB3aWxsIGZvcmNlIGEgdW5pdFxuICogQHBhcmFtIHsnZmxvb3InfCdjZWlsJ3wncm91bmQnfSBbb3B0aW9ucy5yb3VuZGluZ01ldGhvZD0ncm91bmQnXSAtIHdoaWNoIHdheSB0byByb3VuZCBwYXJ0aWFsIHVuaXRzXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBkaXN0YW5jZSBpbiB3b3Jkc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGJhc2VEYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLnJvdW5kaW5nTWV0aG9kYCBtdXN0IGJlICdmbG9vcicsICdjZWlsJyBvciAncm91bmQnXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy51bml0YCBtdXN0IGJlICdzZWNvbmQnLCAnbWludXRlJywgJ2hvdXInLCAnZGF5JywgJ21vbnRoJyBvciAneWVhcidcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXREaXN0YW5jZWAgcHJvcGVydHlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIEp1bHkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTU/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVN0cmljdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgbmV3IERhdGUoMjAxNSwgMCwgMikpXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEphbnVhcnkgMjAxNSAwMDowMDoxNVxuICogLy8gYW5kIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VTdHJpY3QoXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDE1KSxcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMClcbiAqIClcbiAqIC8vPT4gJzE1IHNlY29uZHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGZyb20gMSBKYW51YXJ5IDIwMTZcbiAqIC8vIHRvIDEgSmFudWFyeSAyMDE1LCB3aXRoIGEgc3VmZml4P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VTdHJpY3QobmV3IERhdGUoMjAxNSwgMCwgMSksIG5ldyBEYXRlKDIwMTYsIDAsIDEpLCB7XG4gKiAgIGFkZFN1ZmZpeDogdHJ1ZVxuICogfSlcbiAqIC8vPT4gJzEgeWVhciBhZ28nXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGZyb20gMSBKYW51YXJ5IDIwMTZcbiAqIC8vIHRvIDEgSmFudWFyeSAyMDE1LCBpbiBtaW51dGVzP1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VTdHJpY3QobmV3IERhdGUoMjAxNiwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpLCB7XG4gKiAgIHVuaXQ6ICdtaW51dGUnXG4gKiB9KVxuICogLy89PiAnNTI1NjAwIG1pbnV0ZXMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGZyb20gMSBKYW51YXJ5IDIwMTVcbiAqIC8vIHRvIDI4IEphbnVhcnkgMjAxNSwgaW4gbW9udGhzLCByb3VuZGVkIHVwP1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VTdHJpY3QobmV3IERhdGUoMjAxNSwgMCwgMjgpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSwge1xuICogICB1bml0OiAnbW9udGgnLFxuICogICByb3VuZGluZ01ldGhvZDogJ2NlaWwnXG4gKiB9KVxuICogLy89PiAnMSBtb250aCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEF1Z3VzdCAyMDE2IGFuZCAxIEphbnVhcnkgMjAxNSBpbiBFc3BlcmFudG8/XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlU3RyaWN0KG5ldyBEYXRlKDIwMTYsIDcsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMSBqYXJvJ1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlU3RyaWN0KGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRyb3VuZGluZ01ldGg7XG5cbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0RGlzdGFuY2UpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZS5mb3JtYXREaXN0YW5jZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIGNvbXBhcmlzb24gPSBjb21wYXJlQXNjKGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSk7XG5cbiAgaWYgKGlzTmFOKGNvbXBhcmlzb24pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9XG5cbiAgdmFyIGxvY2FsaXplT3B0aW9ucyA9IGFzc2lnbihjbG9uZU9iamVjdChvcHRpb25zKSwge1xuICAgIGFkZFN1ZmZpeDogQm9vbGVhbihvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkU3VmZml4KSxcbiAgICBjb21wYXJpc29uOiBjb21wYXJpc29uXG4gIH0pO1xuICB2YXIgZGF0ZUxlZnQ7XG4gIHZhciBkYXRlUmlnaHQ7XG5cbiAgaWYgKGNvbXBhcmlzb24gPiAwKSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gIH1cblxuICB2YXIgcm91bmRpbmdNZXRob2QgPSBTdHJpbmcoKF9vcHRpb25zJHJvdW5kaW5nTWV0aCA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yb3VuZGluZ01ldGhvZCkgIT09IG51bGwgJiYgX29wdGlvbnMkcm91bmRpbmdNZXRoICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRyb3VuZGluZ01ldGggOiAncm91bmQnKTtcbiAgdmFyIHJvdW5kaW5nTWV0aG9kRm47XG5cbiAgaWYgKHJvdW5kaW5nTWV0aG9kID09PSAnZmxvb3InKSB7XG4gICAgcm91bmRpbmdNZXRob2RGbiA9IE1hdGguZmxvb3I7XG4gIH0gZWxzZSBpZiAocm91bmRpbmdNZXRob2QgPT09ICdjZWlsJykge1xuICAgIHJvdW5kaW5nTWV0aG9kRm4gPSBNYXRoLmNlaWw7XG4gIH0gZWxzZSBpZiAocm91bmRpbmdNZXRob2QgPT09ICdyb3VuZCcpIHtcbiAgICByb3VuZGluZ01ldGhvZEZuID0gTWF0aC5yb3VuZDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcInJvdW5kaW5nTWV0aG9kIG11c3QgYmUgJ2Zsb29yJywgJ2NlaWwnIG9yICdyb3VuZCdcIik7XG4gIH1cblxuICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZVJpZ2h0LmdldFRpbWUoKSAtIGRhdGVMZWZ0LmdldFRpbWUoKTtcbiAgdmFyIG1pbnV0ZXMgPSBtaWxsaXNlY29uZHMgLyBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFO1xuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVSaWdodCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0KTsgLy8gVXNlIERTVC1ub3JtYWxpemVkIGRpZmZlcmVuY2UgaW4gbWludXRlcyBmb3IgeWVhcnMsIG1vbnRocyBhbmQgZGF5cztcbiAgLy8gdXNlIHJlZ3VsYXIgZGlmZmVyZW5jZSBpbiBtaW51dGVzIGZvciBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcy5cblxuICB2YXIgZHN0Tm9ybWFsaXplZE1pbnV0ZXMgPSAobWlsbGlzZWNvbmRzIC0gdGltZXpvbmVPZmZzZXQpIC8gTUlMTElTRUNPTkRTX0lOX01JTlVURTtcbiAgdmFyIGRlZmF1bHRVbml0ID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnVuaXQ7XG4gIHZhciB1bml0O1xuXG4gIGlmICghZGVmYXVsdFVuaXQpIHtcbiAgICBpZiAobWludXRlcyA8IDEpIHtcbiAgICAgIHVuaXQgPSAnc2Vjb25kJztcbiAgICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA2MCkge1xuICAgICAgdW5pdCA9ICdtaW51dGUnO1xuICAgIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fREFZKSB7XG4gICAgICB1bml0ID0gJ2hvdXInO1xuICAgIH0gZWxzZSBpZiAoZHN0Tm9ybWFsaXplZE1pbnV0ZXMgPCBNSU5VVEVTX0lOX01PTlRIKSB7XG4gICAgICB1bml0ID0gJ2RheSc7XG4gICAgfSBlbHNlIGlmIChkc3ROb3JtYWxpemVkTWludXRlcyA8IE1JTlVURVNfSU5fWUVBUikge1xuICAgICAgdW5pdCA9ICdtb250aCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVuaXQgPSAneWVhcic7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHVuaXQgPSBTdHJpbmcoZGVmYXVsdFVuaXQpO1xuICB9IC8vIDAgdXAgdG8gNjAgc2Vjb25kc1xuXG5cbiAgaWYgKHVuaXQgPT09ICdzZWNvbmQnKSB7XG4gICAgdmFyIHNlY29uZHMgPSByb3VuZGluZ01ldGhvZEZuKG1pbGxpc2Vjb25kcyAvIDEwMDApO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hTZWNvbmRzJywgc2Vjb25kcywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSB1cCB0byA2MCBtaW5zXG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ21pbnV0ZScpIHtcbiAgICB2YXIgcm91bmRlZE1pbnV0ZXMgPSByb3VuZGluZ01ldGhvZEZuKG1pbnV0ZXMpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgcm91bmRlZE1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgdXAgdG8gMjQgaG91cnNcbiAgfSBlbHNlIGlmICh1bml0ID09PSAnaG91cicpIHtcbiAgICB2YXIgaG91cnMgPSByb3VuZGluZ01ldGhvZEZuKG1pbnV0ZXMgLyA2MCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneEhvdXJzJywgaG91cnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgdXAgdG8gMzAgZGF5c1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICdkYXknKSB7XG4gICAgdmFyIGRheXMgPSByb3VuZGluZ01ldGhvZEZuKGRzdE5vcm1hbGl6ZWRNaW51dGVzIC8gTUlOVVRFU19JTl9EQVkpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hEYXlzJywgZGF5cywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSB1cCB0byAxMiBtb250aHNcbiAgfSBlbHNlIGlmICh1bml0ID09PSAnbW9udGgnKSB7XG4gICAgdmFyIG1vbnRocyA9IHJvdW5kaW5nTWV0aG9kRm4oZHN0Tm9ybWFsaXplZE1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbW9udGhzID09PSAxMiAmJiBkZWZhdWx0VW5pdCAhPT0gJ21vbnRoJyA/IGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneFllYXJzJywgMSwgbG9jYWxpemVPcHRpb25zKSA6IGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1vbnRocycsIG1vbnRocywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSB5ZWFyIHVwIHRvIG1heCBEYXRlXG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3llYXInKSB7XG4gICAgdmFyIHllYXJzID0gcm91bmRpbmdNZXRob2RGbihkc3ROb3JtYWxpemVkTWludXRlcyAvIE1JTlVURVNfSU5fWUVBUik7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneFllYXJzJywgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7XG4gIH1cblxuICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcInVuaXQgbXVzdCBiZSAnc2Vjb25kJywgJ21pbnV0ZScsICdob3VyJywgJ2RheScsICdtb250aCcgb3IgJ3llYXInXCIpO1xufSIsImltcG9ydCBmb3JtYXREaXN0YW5jZVN0cmljdCBmcm9tIFwiLi4vZm9ybWF0RGlzdGFuY2VTdHJpY3QvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3RcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlIGFuZCBub3cgaW4gd29yZHMuXG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3JkcywgdXNpbmcgc3RyaWN0IHVuaXRzLlxuICogVGhpcyBpcyBsaWtlIGBmb3JtYXREaXN0YW5jZWAsIGJ1dCBkb2VzIG5vdCB1c2UgaGVscGVycyBsaWtlICdhbG1vc3QnLCAnb3ZlcicsXG4gKiAnbGVzcyB0aGFuJyBhbmQgdGhlIGxpa2UuXG4gKlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gNTkgc2VjcyAgICAgICAgICB8IFswLi41OV0gc2Vjb25kcyAgICAgfFxuICogfCAxIC4uLiA1OSBtaW5zICAgICAgICAgIHwgWzEuLjU5XSBtaW51dGVzICAgICB8XG4gKiB8IDEgLi4uIDIzIGhycyAgICAgICAgICAgfCBbMS4uMjNdIGhvdXJzICAgICAgIHxcbiAqIHwgMSAuLi4gMjkgZGF5cyAgICAgICAgICB8IFsxLi4yOV0gZGF5cyAgICAgICAgfFxuICogfCAxIC4uLiAxMSBtb250aHMgICAgICAgIHwgWzEuLjExXSBtb250aHMgICAgICB8XG4gKiB8IDEgLi4uIE4geWVhcnMgICAgICAgICAgfCBbMS4uTl0gIHllYXJzICAgICAgIHxcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hZGRTdWZmaXg9ZmFsc2VdIC0gcmVzdWx0IGluZGljYXRlcyBpZiB0aGUgc2Vjb25kIGRhdGUgaXMgZWFybGllciBvciBsYXRlciB0aGFuIHRoZSBmaXJzdFxuICogQHBhcmFtIHsnc2Vjb25kJ3wnbWludXRlJ3wnaG91cid8J2RheSd8J21vbnRoJ3wneWVhcid9IFtvcHRpb25zLnVuaXRdIC0gaWYgc3BlY2lmaWVkLCB3aWxsIGZvcmNlIGEgdW5pdFxuICogQHBhcmFtIHsnZmxvb3InfCdjZWlsJ3wncm91bmQnfSBbb3B0aW9ucy5yb3VuZGluZ01ldGhvZD0ncm91bmQnXSAtIHdoaWNoIHdheSB0byByb3VuZCBwYXJ0aWFsIHVuaXRzXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBkaXN0YW5jZSBpbiB3b3Jkc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0RGlzdGFuY2VgIHByb3BlcnR5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LCB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAyIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIpXG4gKiApXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgbm93IGlzIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwLFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBKYW51YXJ5IDIwMTUgMDA6MDA6MTUsIGluY2x1ZGluZyBzZWNvbmRzP1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMTUpXG4gKiApXG4gKiAvLz0+ICcxNSBzZWNvbmRzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAxIEphbnVhcnkgMjAxNSxcbiAqIC8vIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDEgSmFudWFyeSAyMDE2LCB3aXRoIGEgc3VmZml4P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChcbiAqICAgbmV3IERhdGUoMjAxNiwgMCwgMSksXG4gKiAgIHthZGRTdWZmaXg6IHRydWV9XG4gKiApXG4gKiAvLz0+ICdpbiAxIHllYXInXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI4IEphbnVhcnkgMjAxNSxcbiAqIC8vIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDEgSmFudWFyeSAyMDE1LCBpbiBtb250aHMsIHJvdW5kZWQgdXA/P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChuZXcgRGF0ZSgyMDE1LCAwLCAxKSwge1xuICogICB1bml0OiAnbW9udGgnLFxuICogICByb3VuZGluZ01ldGhvZDogJ2NlaWwnXG4gKiB9KVxuICogLy89PiAnMSBtb250aCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMSBKYW51YXJ5IDIwMTUsXG4gKiAvLyB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAxIEphbnVhcnkgMjAxNiBpbiBFc3BlcmFudG8/XG4gKiBjb25zdCBlb0xvY2FsZSA9IHJlcXVpcmUoJ2RhdGUtZm5zL2xvY2FsZS9lbycpXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KFxuICogICBuZXcgRGF0ZSgyMDE2LCAwLCAxKSxcbiAqICAge2xvY2FsZTogZW9Mb2NhbGV9XG4gKiApXG4gKiAvLz0+ICcxIGphcm8nXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBmb3JtYXREaXN0YW5jZVN0cmljdChkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG5cbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRhZGRpdGlvbmFsRGk7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gdG9JbnRlZ2VyKChfb3B0aW9ucyRhZGRpdGlvbmFsRGkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cykgIT09IG51bGwgJiYgX29wdGlvbnMkYWRkaXRpb25hbERpICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgOiAyKTtcblxuICBpZiAoYWRkaXRpb25hbERpZ2l0cyAhPT0gMiAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAxICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYWRkaXRpb25hbERpZ2l0cyBtdXN0IGJlIDAsIDEgb3IgMicpO1xuICB9XG5cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuXG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG5cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuXG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcblxuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpOyAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5cbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7IC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cblxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG5cbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJyk7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4ge1xuICAgIHllYXI6IE5hTixcbiAgICByZXN0RGF0ZVN0cmluZzogJydcbiAgfTtcbiAgdmFyIHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XG4gIHZhciBjZW50dXJ5ID0gY2FwdHVyZXNbMl0gPyBwYXJzZUludChjYXB0dXJlc1syXSkgOiBudWxsOyAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG5cbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBjZW50dXJ5ID09PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XG4gIGlmICh0aW1lem9uZVN0cmluZyA9PT0gJ1onKSByZXR1cm4gMDtcbiAgdmFyIGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xuICB2YXIgc2lnbiA9IGNhcHR1cmVzWzFdID09PSAnKycgPyAtMSA6IDE7XG4gIHZhciBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgdmFyIG1pbnV0ZXMgPSBjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkgfHwgMDtcblxuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufSAvLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5cblxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzdGF0ZSwgdGVtcGxhdGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gIH1cblxuICAvLyBUaGlzIG1ldGhvZCByZXR1cm5zIGEgdGVtcGxhdGUgbGl0ZXJhbCBvZiB0aGUgY29tcG9uZW50XG4gIHZpZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGUodGhpcy5zdGF0ZSk7XG4gIH1cblxuICAvLyBUaGlzIG1ldGhvZCByZXR1cm5zIGFuIEhUTUwgZWxlbWVudCBvYmplY3Qgb2YgdGhlIGNvbXBvbmVudFxuICBET01lbGVtZW50KGUsIGZ1bmMpIHtcbiAgICBsZXQgZWxlbWVudCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcodGhpcy52aWV3KCksIFwidGV4dC9odG1sXCIpLmJvZHlcbiAgICAgIC5maXJzdENoaWxkO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGUsIGZ1bmMpO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgYWRkTGlzdGVuZXIgPSAoZWxlbWVudCwgZXZlbnQsIGZ1bmMpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmMpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG5cbi8vbWFrZSBhbiBldmVudEhhbmRsZXIgY2xhc3MgdGhhdCBhc3NpZ25zIGV2ZW50IGxpc3RlbmVycyB0byBjb21wb25lbnRzXG4iLCJpbXBvcnQgUHJvamVjdENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL1Byb2plY3RDb21wb25lbnRcIjtcblxuY2xhc3MgTmVyb3Mge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgIHRoaXMuTmVyb3NFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7c2VsZWN0b3J9YCk7XG4gIH1cblxuICBzdGF0aWMgcHJvamVjdHMgPSBuZXcgTmVyb3MoXCJwcm9qZWN0c1wiKTtcblxuICBzdGF0aWMgZGVsZXRlTmVyb3NDb21wb25lbnQobmVyb3MsIGNvbXBvbmVudCkge1xuICAgIGxldCBjb21wb25lbnRzID0gbmVyb3MuY29tcG9uZW50cztcbiAgICBkZWxldGUgY29tcG9uZW50c1tjb21wb25lbnQubmFtZV07XG4gICAgbmVyb3MudXBkYXRlVmlldygpO1xuICAgIFByb2plY3RDb21wb25lbnQuc2VsZWN0TGFzdFByb2plY3QoKTtcbiAgfVxuXG4gIHJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHRoaXMuY29tcG9uZW50c1tjb21wb25lbnQubmFtZV0gPSBjb21wb25lbnQ7XG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gIH1cblxuICB1cGRhdGVWaWV3KCkge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudHMpIHtcbiAgICAgIHRoaXMuTmVyb3NFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmNvbXBvbmVudHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB0aGlzLk5lcm9zRWxlbWVudC5hcHBlbmQodGhpcy5jb21wb25lbnRzW2tleV0uRE9NZWxlbWVudCgpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXJvcztcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xuaW1wb3J0IG1vZGFsIGZyb20gXCIuLi9tb2RhbFwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL3Byb2plY3RcIjtcblxuZXhwb3J0IGNsYXNzIERlbGV0ZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHRlbXBsYXRlID0gKHN0YXRlKSA9PlxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPSdkZWxldGVDb250YWluZXInPlxuICAgICAgPGgxPkFyZSB5b3Ugc3VyZT88L2gxPlxuICAgICAgPGRpdiBjbGFzcz0nYnV0dG9uc0NvbnRhaW5lcic+XG4gICAgICAgIDxidXR0b24gaWQ9J2NhbmNlbCc+R28gYmFjazwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkPSdjb25maXJtJz5ZZXMsIGRlbGV0ZSBpdDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcblxuICBET01lbGVtZW50KCkge1xuICAgIGxldCBlbGVtZW50ID0gc3VwZXIuRE9NZWxlbWVudCgpO1xuICAgIGxldCBjYW5jZWxCdG4gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsXCIpO1xuICAgIGxldCBjb25maXJtQnRuID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm1cIik7XG5cbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG1vZGFsLmhpZGUoKTtcbiAgICB9KTtcblxuICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUudG9kby5kZWxldGVUb2RvKHRoaXMuc3RhdGUudG9kbyk7XG4gICAgICBQcm9qZWN0LnNlbGVjdGVkLmNvbXBvbmVudC51cGRhdGUoKTtcbiAgICAgIG1vZGFsLmhpZGUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgZGVsZXRlVGFzayBmcm9tIFwiLi4vLi4vYXNzZXRzL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBlZGl0IGZyb20gXCIuLi8uLi9hc3NldHMvZWRpdC5zdmdcIjtcbmltcG9ydCBjaGVja2VkIGZyb20gXCIuLi8uLi9hc3NldHMvY2hlY2tlZC5zdmdcIjtcbmltcG9ydCB1bmNoZWNrZWQgZnJvbSBcIi4uLy4uL2Fzc2V0cy91bmNoZWNrZWQuc3ZnXCI7XG5cbmNsYXNzIE1pbmlDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICB0ZW1wbGF0ZSA9IChzdGF0ZSkgPT4gYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrTWluaUNvbnRhaW5lciAke3N0YXRlLnR5cGVDbGFzc31cIj5cbiAgICAgICR7c3RhdGUuaHRtbH1cbiAgICA8L2Rpdj5cbiAgYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWluaUNvbnRhaW5lckNvbXBvbmVudDtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL3Byb2plY3RcIjtcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi4vbW9kYWxcIjtcbmltcG9ydCBOZXJvcyBmcm9tIFwiLi4vTmVyb3NcIjtcbmltcG9ydCBQcm9qZWN0Q29tcG9uZW50IGZyb20gXCIuL1Byb2plY3RDb21wb25lbnRcIjtcblxuZXhwb3J0IGNsYXNzIE5ld1Byb2plY3RDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgdGVtcGxhdGUgPSAoKSA9PlxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPSduZXdQcm9qZWN0Q29udGFpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3M9J2hlYWRlckNvbnRhaW5lcic+XG4gICAgICAgIDxoMT5OZXcgUHJvamVjdDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb3JtIGNsYXNzPSduZXdGb3JtJz5cbiAgICAgICAgPGRpdiBjbGFzcz0nZmllbGQgVGl0bGVGaWVsZCc+XG4gICAgICAgIDxsYWJlbCBmb3I9J1RpdGxlJz5Qcm9qZWN0IFRpdGxlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J1RpdGxlJyBpZD0nVGl0bGUnIHJlcXVpcmVkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz0nY3JlYXRlQnV0dG9uJyB0eXBlPSdzdWJtaXQnPkNyZWF0ZTwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIERPTWVsZW1lbnQoKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBzdXBlci5ET01lbGVtZW50KCk7XG4gICAgbGV0IGZvcm0gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5jcmVhdGVQcm9qZWN0KGZvcm0pO1xuICAgIH0pO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgY3JlYXRlUHJvamVjdChmb3JtKSB7XG4gICAgbGV0IHRpdGxlID0gZm9ybS5UaXRsZS52YWx1ZTtcbiAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgICBOZXJvcy5wcm9qZWN0cy5yZWdpc3RlckNvbXBvbmVudChwcm9qZWN0LmNvbXBvbmVudCk7XG4gICAgLy8gU2VsZWN0IG5ld2x5IGNyZWF0ZWQgcHJvamVjdFxuICAgIFByb2plY3RDb21wb25lbnQuc2VsZWN0TGFzdFByb2plY3QoKTtcbiAgICBtb2RhbC5oaWRlKCk7XG4gIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4uL3RvZG9cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuLi9wcm9qZWN0XCI7XG5pbXBvcnQgTmVyb3MgZnJvbSBcIi4uL05lcm9zXCI7XG5pbXBvcnQgbW9kYWwgZnJvbSBcIi4uL21vZGFsXCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGRhIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xuXG5leHBvcnQgY2xhc3MgTmV3VG9kb0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHRlbXBsYXRlID0gKHN0YXRlKSA9PlxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPSduZXdDb250YWluZXInPlxuICAgICAgPGRpdiBjbGFzcz0naGVhZGVyQ29udGFpbmVyJz5cbiAgICAgICAgPGgxIGNsYXNzPSduZXdUaXRsZSc+JHtzdGF0ZS50b2RvID8gXCJFZGl0IFRvZG9cIiA6IFwiTmV3IFRvZG9cIn08L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9ybSBjbGFzcz0nbmV3Rm9ybSc+XG4gICAgICAgIDxkaXYgY2xhc3M9J2ZpZWxkIFRpdGxlRmllbGQnPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J1RpdGxlJz5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J1RpdGxlJyBpZD0nVGl0bGUnIHZhbHVlPVwiJHtcbiAgICAgICAgICAgIHN0YXRlLnRvZG8gPyBzdGF0ZS50b2RvLnRpdGxlIDogXCJcIlxuICAgICAgICAgIH1cIiByZXF1aXJlZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J2ZpZWxkIER1ZWRhdGVGaWVsZCc+XG4gICAgICAgICAgPGxhYmVsIGZvcj0nRHVlIGRhdGUnPkR1ZSBkYXRlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0nZGF0ZScgbmFtZT0nRHVlZGF0ZScgaWQ9J0R1ZSBkYXRlJyB2YWx1ZT1cIiR7dGhpcy5zdGFydGluZ0RhdGUoXG4gICAgICAgICAgICBzdGF0ZS50b2RvLFxuICAgICAgICAgICAgc3RhdGUucGFyZW50XG4gICAgICAgICAgKX1cIiByZXF1aXJlZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J2ZpZWxkIFByaW9yaXR5RmllbGQnPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J1ByaW9yaXR5Jz5Qcmlvcml0eTwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdCBuYW1lPVwiUHJpb3JpdHlcIiBpZD1cIlByaW9yaXR5XCI+XG4gICAgICAgICAgICA8b3B0aW9uIGlkPSdwMScgdmFsdWU9XCJVcmdlbnRcIj5VcmdlbnQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gaWQ9J3AyJyB2YWx1ZT1cIkhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIGlkPSdwMycgdmFsdWU9XCJNZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gaWQ9J3A0JyB2YWx1ZT1cIkxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiBpZD0ncDUnIHZhbHVlPVwiT3B0aW9uYWxcIj5PcHRpb25hbDwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nZmllbGQgRGVzY3JpcHRpb25GaWVsZCc+XG4gICAgICAgICAgPGxhYmVsIGZvcj0nRGVzY3JpcHRpb24nPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWEgbmFtZT0nRGVzY3JpcHRpb24nIGlkPSdEZXNjcmlwdGlvbicgcm93cz0nNSc+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9J2NyZWF0ZUJ1dHRvbicgdHlwZT0nc3VibWl0Jz4ke1xuICAgICAgICAgIHRoaXMuc3RhdGUudG9kbyA/IFwiRWRpdFwiIDogXCJDcmVhdGVcIlxuICAgICAgICB9PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICAgYDtcblxuICBET01lbGVtZW50KCkge1xuICAgIGxldCBlbGVtZW50ID0gc3VwZXIuRE9NZWxlbWVudCgpO1xuICAgIGxldCBmb3JtID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICAvLyBJZiB0aGUgdG9kbyBhbHJlYWR5IGV4aXN0cyAoZWRpdCBtb2RlKSBtYWtlIHRoZSBidXR0b24gZWRpdCB0aGUgdG9kbywgZWxzZSBqdXN0IGNyZWF0ZSBhIG5ldyB0YXNrXG4gICAgaWYgKHRoaXMuc3RhdGUudG9kbykge1xuICAgICAgbGV0IHNlbGVjdCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihgI1ByaW9yaXR5YCk7XG4gICAgICBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9IHRoaXMuc3RhdGUudG9kby5wcmlvcml0eSAtIDE7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmVkaXRUb2RvKGZvcm0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlVG9kbyhmb3JtKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVwiKTtcbiAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRoaXMuc3RhdGUudG9kbyA/IHRoaXMuc3RhdGUudG9kby5kZXNjcmlwdGlvbiA6IFwiXCI7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBlZGl0VG9kbyhmb3JtKSB7XG4gICAgbGV0IHRpdGxlID0gZm9ybS5UaXRsZS52YWx1ZTtcbiAgICBsZXQgZGF0ZSA9IGZvcm0uRHVlZGF0ZS52YWx1ZTtcbiAgICBsZXQgcHJpb3JpdHkgPSBmb3JtLlByaW9yaXR5LnNlbGVjdGVkSW5kZXggKyAxO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGZvcm0uRGVzY3JpcHRpb24udmFsdWU7XG4gICAgdGhpcy5zdGF0ZS50b2RvLmVkaXQodGl0bGUsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbik7XG4gICAgUHJvamVjdC5zZWxlY3RlZC5jb21wb25lbnQudXBkYXRlKCk7XG4gICAgbW9kYWwuaGlkZSgpO1xuICB9XG5cbiAgc3RhcnRpbmdEYXRlKHRvZG8sIHBhcmVudCkge1xuICAgIGxldCBkYXRlID0gXCJcIjtcbiAgICBpZiAodG9kbykge1xuICAgICAgZGF0ZSA9IHRvZG8uZGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZSA9IHBhcmVudCA/IHBhcmVudC5kYXRlIDogZm9ybWF0KG5ldyBEYXRlKCksIFwieXl5eS1NTS1kZFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBjcmVhdGVUb2RvKGZvcm0pIHtcbiAgICBsZXQgdGl0bGUgPSBmb3JtLlRpdGxlLnZhbHVlO1xuXG4gICAgbGV0IHByaW9yaXR5ID0gZm9ybS5Qcmlvcml0eS5zZWxlY3RlZEluZGV4ICsgMTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBmb3JtLkRlc2NyaXB0aW9uLnZhbHVlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUucGFyZW50KSB7XG4gICAgICBsZXQgZGF0ZSA9XG4gICAgICAgIGZvcm0uRHVlZGF0ZS52YWx1ZSA9PT0gXCJcIiA/IHRoaXMuc3RhdGUucGFyZW50LmRhdGUgOiBmb3JtLkR1ZWRhdGUudmFsdWU7XG4gICAgICB0aGlzLnN0YXRlLnBhcmVudC5jcmVhdGVUb2RvKHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGRhdGUgPVxuICAgICAgICBmb3JtLkR1ZWRhdGUudmFsdWUgPT09IFwiXCJcbiAgICAgICAgICA/IGZvcm1hdChuZXcgRGF0ZShEYXRlLm5vdygpKSwgXCJ5eXl5LU1NLWRkXCIpXG4gICAgICAgICAgOiBmb3JtLkR1ZWRhdGUudmFsdWU7XG4gICAgICBuZXcgVG9kbyh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBmYWxzZSk7XG4gICAgfVxuICAgIFByb2plY3Quc2VsZWN0ZWQuY29tcG9uZW50LnVwZGF0ZSgpO1xuICAgIG1vZGFsLmhpZGUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgTmVyb3MgZnJvbSBcIi4uL05lcm9zXCI7XG5pbXBvcnQgUHJpb3JpdHkgZnJvbSBcIi4uL3ByaW9yaXR5XCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCIuLi9zdG9yYWdlTWFuYWdlbWVudFwiO1xuXG5leHBvcnQgY2xhc3MgUHJpb3JpdHlDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICB0ZW1wbGF0ZSA9IChzdGF0ZSkgPT5cbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cInByaW9yaXR5XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHlDb2xvckNvbnRhaW5lclwiPlxuICAgICAgICAke1xuICAgICAgICAgIHN0YXRlLnBpY2tlclxuICAgICAgICAgICAgPyBgPGlucHV0IHR5cGU9XCJjb2xvclwiIGNsYXNzPSdwcmlvcml0eUNvbG9yIHBpY2tlcicgdmFsdWU9JyR7c3RhdGUucHJpb3JpdHkuY29sb3J9Jy8+YFxuICAgICAgICAgICAgOiBgPGRpdiBjbGFzcz0ndGFza0NvbG9yJyBzdHlsZT0nYmFja2dyb3VuZC1jb2xvcjogJHtzdGF0ZS5wcmlvcml0eS5jb2xvcn0nPjwvZGl2PmBcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzcz1cInByaW9yaXR5TmFtZVwiPiR7c3RhdGUucHJpb3JpdHkubmFtZX08L3A+XG4gICAgPC9kaXY+XG4gICAgYDtcblxuICBET01lbGVtZW50KCkge1xuICAgIGxldCBlbGVtZW50ID0gc3VwZXIuRE9NZWxlbWVudCgpO1xuICAgIGxldCBwaWNrZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGlja2VyXCIpO1xuICAgIGlmIChwaWNrZXIpIHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIHBpY2tlci5jbGljaygpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vQ2hhbmdlIHByaW9yaXR5IGNvbG9yIHdoZW4gdGhlIGNvbG9yIHBpY2tlciBjaGFuZ2VzXG4gICAgICBwaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlLnByaW9yaXR5LmNvbG9yID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVByaW9yaXR5RGF0YSgpO1xuICAgICAgICBQcmlvcml0eUNvbXBvbmVudC5kaXNwbGF5UHJpb3JpdGllcygpO1xuICAgICAgICBpZiAoUHJvamVjdC5zZWxlY3RlZCkge1xuICAgICAgICAgIFByb2plY3Quc2VsZWN0ZWQuY29tcG9uZW50LnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIC8vVGhpcyBtZXRob2QgdXBkYXRlcyBhbmQgZGlzcGxheXMgdGhlIHByaW9yaXRpZXMgaW4gdGhlIHNpZGViYXJcbiAgc3RhdGljIGRpc3BsYXlQcmlvcml0aWVzKCkge1xuICAgIGxldCBwcmlvcml0eU5lcm9zID0gbmV3IE5lcm9zKFwicHJpb3JpdGllc1wiKTtcbiAgICBQcmlvcml0eS5wcmlvcml0aWVzLmZvckVhY2goKHByaW9yaXR5KSA9PiB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gbmV3IFByaW9yaXR5Q29tcG9uZW50KHByaW9yaXR5Lm5hbWUsIHtcbiAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgICAgICBwaWNrZXI6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHByaW9yaXR5TmVyb3MucmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgTmVyb3MgZnJvbSBcIi4uL05lcm9zXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi4vcHJvamVjdFwiO1xuaW1wb3J0IFRvZG9Db21wb25lbnQgZnJvbSBcIi4vVG9kb0NvbXBvbmVudFwiO1xuaW1wb3J0IGhlbHBlciBmcm9tIFwiLi4vaGVscGVyXCI7XG5pbXBvcnQgeyBQcmlvcml0eUNvbXBvbmVudCB9IGZyb20gXCIuL1ByaW9yaXR5Q29tcG9uZW50XCI7XG5cbmNsYXNzIFByb2plY3RDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzdGF0ZSkge1xuICAgIHN1cGVyKG5hbWUsIHN0YXRlKTtcbiAgfVxuXG4gIHN0YXRpYyByZXNldFZpZXcoKSB7XG4gICAgbGV0IHBlbmRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BlbmRpbmdUb2Rvc1wiKTtcbiAgICBsZXQgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wbGV0ZWRUb2Rvc1wiKTtcblxuICAgIHBlbmRpbmcuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb21wbGV0ZWQuaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxuXG4gIC8vIFRoaXMgbWV0aG9kIHNlbGVjdHMgdGhlIGxhc3QgcHJvamVjdCBjcmVhdGVkXG4gIHN0YXRpYyBzZWxlY3RMYXN0UHJvamVjdCgpIHtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdENvbnRhaW5lclwiKTtcbiAgICBpZiAocHJvamVjdC5sZW5ndGggPiAwKSB7XG4gICAgICBwcm9qZWN0W3Byb2plY3QubGVuZ3RoIC0gMV0uY2xpY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUHJvamVjdC5zZWxlY3RlZCA9IG51bGw7XG4gICAgICBQcm9qZWN0Q29tcG9uZW50LnJlc2V0VmlldygpO1xuICAgIH1cbiAgfVxuXG4gIHRlbXBsYXRlID0gKHN0YXRlKSA9PlxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdENvbnRhaW5lclwiPlxuICAgICAgPGgzPiR7c3RhdGUucHJvamVjdC5uYW1lfTwvaDM+XG4gICAgPC9kaXY+XG4gICAgYDtcblxuICAvLyBUaGlzIG1ldGhvZCBkaXNwbGF5cyBhbGwgdG9kb3MgYmVsb25naW5nIHRvIHRoaXMgcHJvamVjdFxuICBkaXNwbGF5VG9kb3Moc2VsZWN0b3IsIHByb2plY3RUb2Rvcykge1xuICAgIFByaW9yaXR5Q29tcG9uZW50LmRpc3BsYXlQcmlvcml0aWVzKCk7XG4gICAgY29uc3QgZWxlbWVudCA9IG5ldyBOZXJvcyhgJHtzZWxlY3Rvcn1Ub2Rvc2ApO1xuICAgIGxldCB0b2RvcyA9IGhlbHBlci5tZXJnZVNvcnQocHJvamVjdFRvZG9zKTtcblxuICAgIGlmICh0b2Rvcy5sZW5ndGggPiAwKSB7XG4gICAgICB0b2RvcyA9IHRvZG9zLm1hcChcbiAgICAgICAgKHRhc2ssIGluZGV4KSA9PlxuICAgICAgICAgIG5ldyBUb2RvQ29tcG9uZW50KGB0b2RvJHtpbmRleH1gLCB7XG4gICAgICAgICAgICB0YXNrOiB0YXNrLFxuICAgICAgICAgICAgc3VidGFza3M6IGhlbHBlci5tZXJnZVNvcnQodGFzay5jaGlsZHJlbiksXG4gICAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgIGVsZW1lbnQucmVnaXN0ZXJDb21wb25lbnQodG9kbyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC51cGRhdGVWaWV3KCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuZGlzcGxheVRvZG9zKFwiY29tcGxldGVkXCIsIHRoaXMuc3RhdGUucHJvamVjdC5jb21wbGV0ZWQpO1xuICAgIHRoaXMuZGlzcGxheVRvZG9zKFwicGVuZGluZ1wiLCB0aGlzLnN0YXRlLnByb2plY3QucGVuZGluZyk7XG4gIH1cblxuICBET01lbGVtZW50KCkge1xuICAgIHJldHVybiBzdXBlci5ET01lbGVtZW50KFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlSUQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgIFByb2plY3Quc2VsZWN0ZWQgPSB0aGlzLnN0YXRlLnByb2plY3Q7XG4gICAgICAvLyBSZXNldCB0aGUgYm9hcmQgYmVmb3JlIGRpc3BsYXlpbmcgdGhpcyBwcm9qZWN0IHRvZG9zXG4gICAgICBQcm9qZWN0Q29tcG9uZW50LnJlc2V0VmlldygpO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRoaXMgbWV0aG9kIHJlbW92ZXMgdGhlIGlkIGZyb20gdGhlIHByZXZpb3VzIGVsZW1lbnQgYW5kIGFzc2lnbnMgaXQgdG8gdGhlIGNsaWNrZWQgZWxlbWVudFxuICBoYW5kbGVJRCh0YXJnZXQpIHtcbiAgICBsZXQgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdGVkUHJvamVjdFwiKTtcbiAgICBpZiAoc2VsZWN0ZWQpIHNlbGVjdGVkLmlkID0gXCJcIjtcbiAgICB0YXJnZXQuaWQgPSBcInNlbGVjdGVkUHJvamVjdFwiO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RDb21wb25lbnQ7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9Db21wb25lbnRcIjtcbmltcG9ydCBNaW5pQ29udGFpbmVyQ29tcG9uZW50IGZyb20gXCIuL01pbmlDb250YWluZXJDb21wb25lbnRcIjtcbmltcG9ydCBQcmlvcml0eSBmcm9tIFwiLi4vcHJpb3JpdHlcIjtcbmltcG9ydCB7IHZpZXdUb2RvQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld1RvZG9Db21wb25lbnRcIjtcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi4vbW9kYWxcIjtcbmltcG9ydCB7IE5ld1RvZG9Db21wb25lbnQgfSBmcm9tIFwiLi9OZXdUb2RvQ29tcG9uZW50XCI7XG5pbXBvcnQgZGVsZXRlVGFzayBmcm9tIFwiLi4vLi4vYXNzZXRzL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBlZGl0IGZyb20gXCIuLi8uLi9hc3NldHMvZWRpdC5zdmdcIjtcbmltcG9ydCBjaGVja2VkIGZyb20gXCIuLi8uLi9hc3NldHMvY2hlY2tlZC5zdmdcIjtcbmltcG9ydCB1bmNoZWNrZWQgZnJvbSBcIi4uLy4uL2Fzc2V0cy91bmNoZWNrZWQuc3ZnXCI7XG5pbXBvcnQgeyBEZWxldGVDb21wb25lbnQgfSBmcm9tIFwiLi9EZWxldGVDb21wb25lbnRcIjtcbmltcG9ydCB7IGZvcm1hdCwgZm9ybWF0RGlzdGFuY2UsIGZvcm1hdFJlbGF0aXZlLCBzdWJEYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgaGVscGVyIGZyb20gXCIuLi9oZWxwZXJcIjtcbmltcG9ydCB7XG4gIGZvcm1hdERpc3RhbmNlVG9Ob3csXG4gIGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QsXG4gIGlzVG9kYXksXG59IGZyb20gXCJkYXRlLWZucy9lc21cIjtcblxuLy8gMS4tIElmIGEgYmlnIHRvZG8gaXMgY2hlY2tlZCwgaXRzIGNoaWxkcmVuIGFyZSBhbHNvIGNoZWNrZWQg4pyU77iPXG4vLyAyLi0gSWYgYWxsIHRoZSBzdWJ0b2RvcyBhcmUgY2hlY2tlZCwgdGhlIHBhcmVudCBpcyBhbHNvIGNoZWNrZWQg4pyU77iPXG4vLyAzLi0gSWYgYSBiaWcgdG9kbyBhbmQgaXRzIGNoaWxkcmVuIGFyZSBjaGVja2VkLCBidXQgb25lIG9mIHRoZSBjaGlsZHJlblxuLy8gaXMgdW5jaGVja2VkLCB0aGUgcGFyZW50IHRvZG8gd2lsbCBhbHNvIGJlIHVuY2hlY2tlZCDinJTvuI9cbi8vIDQuLSBJZiBhIGJpZyB0b2RvIGFuZCBpdHMgY2hpbGRyZW4gYXJlIGNoZWNrZWQsIGJ1dCB0aGUgcGFyZW50IGlzIHVuY2hlY2tlZCxcbi8vIGFsbCBpdHMgY2hpbGRyZW4gd2lsbCBhbHNvIGJlIHVuY2hlY2tlZCDinJTvuI9cblxuY2xhc3MgVGFza0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHN0YXRlKSB7XG4gICAgc3VwZXIobmFtZSwgc3RhdGUpO1xuICAgIC8vIENyZWF0ZSB0aGUgcHJpb3JpdHkgY29sb3IgaHRtbCBhbmQgY29sb3IsIEkgc2hvdWxkIHB1dCB0aGlzIGludG8gaXRzIG93biBjbGFzc1xuICAgIHRoaXMuY29sb3JIVE1MID0gKHByaW9yaXR5KSA9PlxuICAgICAgYDxkaXYgY2xhc3M9XCJ0YXNrQ29sb3JcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICR7cHJpb3JpdHkuY29sb3J9XCI+PC9kaXY+YDtcbiAgICB0aGlzLmNvbG9yTWluaSA9IG5ldyBNaW5pQ29udGFpbmVyQ29tcG9uZW50KFwicHJpb3JpdHlcIiwge1xuICAgICAgaHRtbDogdGhpcy5jb2xvckhUTUwoUHJpb3JpdHkucHJpb3JpdHkoc3RhdGUudG9kby5wcmlvcml0eSkpLFxuICAgICAgdHlwZUNsYXNzOiBcInByaW9yaXR5QnV0dG9uTWluaVwiLFxuICAgIH0pO1xuICAgIHRoaXMuc3RhdGUudG9kby5jb21wb25lbnQgPSB0aGlzO1xuICAgIC8vIElmIHRoaXMgdG9kbyBpcyBjaGVja2VkLCB0aGUgZG9tIGVsZW1lbnQgd2lsbCBoYXZlIHRoZSBjbGFzcyBcImNvbXBsZXRlZFRhc2tcIlxuICAgIGlmICh0aGlzLnN0YXRlLnRvZG8uY2hlY2spIHRoaXMuc3RhdGUuY2xhc3Nlcy5wdXNoKFwiY29tcGxldGVkVGFza1wiKTtcbiAgfVxuXG4gIC8vIENyZWF0ZSBhbGwgdGhlIHN0YXRpYyBidXR0b25zIG5lZWRlZCBmb3IgYSB0YXNrLCB0aGVzZSBhcmVuJ3QgZHluYW1pYyBzaW5jZSBhbGwgdGFza3MgaGF2ZSB0aGUgc2FtZSBidXR0b25zXG4gIHN0YXRpYyBpbWdIVE1MID0gKGFjdGlvblNWRykgPT4gYDxpbWcgY2xhc3M9XCJ0YXNrQnV0dG9uXCIgc3JjPSR7YWN0aW9uU1ZHfT5gO1xuICBzdGF0aWMgZWRpdE1pbmkgPSBuZXcgTWluaUNvbnRhaW5lckNvbXBvbmVudChcImVkaXRcIiwge1xuICAgIGh0bWw6IFRhc2tDb21wb25lbnQuaW1nSFRNTChlZGl0KSxcbiAgICB0eXBlQ2xhc3M6IFwiZWRpdEJ1dHRvbk1pbmlcIixcbiAgfSk7XG4gIHN0YXRpYyBkZWxldGVNaW5pID0gbmV3IE1pbmlDb250YWluZXJDb21wb25lbnQoXCJkZWxldGVcIiwge1xuICAgIGh0bWw6IFRhc2tDb21wb25lbnQuaW1nSFRNTChkZWxldGVUYXNrKSxcbiAgICB0eXBlQ2xhc3M6IFwiZGVsZXRlQnV0dG9uTWluaVwiLFxuICB9KTtcblxuICAvLyBSZXR1cm4gYSBtaW5pQ29udGFpbmVyIHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgc3ZnIGZpbGUsIGNoZWNrZWQgaWYgdG9kbyBpc0NoZWNrZWRcbiAgLy8gcHJvcGVydHkgaXMgdHJ1ZSwgdW5jaGVja2VkIG90aGVyd2lzZS5cbiAgY2hlY2tNaW5pID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgTWluaUNvbnRhaW5lckNvbXBvbmVudChcImNoZWNrXCIsIHtcbiAgICAgIGh0bWw6IFRhc2tDb21wb25lbnQuaW1nSFRNTCh0aGlzLmNoZWNrU3RhdGUoKSksXG4gICAgICB0eXBlQ2xhc3M6IFwiY2hlY2tCdXR0b25NaW5pXCIsXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gVGhpcyBtZXRob2QgY2hlY2tzIHRoZSBzdGF0ZSBvZiB0aGUgaXNDaGVja2VkIHByb3BlcnR5IGZyb20gdG9kb3NcbiAgY2hlY2tTdGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS50b2RvLmNoZWNrID8gY2hlY2tlZCA6IHVuY2hlY2tlZDtcbiAgfTtcblxuICB0ZW1wbGF0ZSA9IChzdGF0ZSkgPT5cbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cIiR7c3RhdGUuY2xhc3Nlcy5qb2luKFwiIFwiKX1cIj5cbiAgICAgIDxkaXYgY2xhc3M9J3Rhc2tCdXR0b25zIHRhc2tCdXR0b25zTGVmdCc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrRGF0YUNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1RpdGxlXCI+XG4gICAgICAgICAgPHA+JHtzdGF0ZS50b2RvLnRpdGxlfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrVGltZVwiPlxuICAgICAgICAgIDxwPiR7XG4gICAgICAgICAgICBpc1RvZGF5KG5ldyBEYXRlKGhlbHBlci5wYXJzZVN0cmluZ0RhdGUoc3RhdGUudG9kby5kYXRlKSkpXG4gICAgICAgICAgICAgID8gXCJUb2RheVwiXG4gICAgICAgICAgICAgIDogZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChcbiAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKGhlbHBlci5wYXJzZVN0cmluZ0RhdGUoc3RhdGUudG9kby5kYXRlKSksXG4gICAgICAgICAgICAgICAgICB7IGFkZFN1ZmZpeDogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgIH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSd0YXNrQnV0dG9ucyB0YXNrQnV0dG9uc1JpZ2h0Jz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIERPTWVsZW1lbnQoKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBzdXBlci5ET01lbGVtZW50KCk7XG4gICAgdGhpcy52aWV3RXZlbnRMaXN0ZW5lcihlbGVtZW50KTtcbiAgICBsZXQgY2hlY2sgPSB0aGlzLmNoZWNrTWluaSgpLkRPTWVsZW1lbnQoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICB0aGlzLmV2ZW50SGFuZGxlcigpLmNoZWNrQnV0dG9uXG4gICAgKTtcbiAgICBsZXQgcHJpb3JpdHkgPSB0aGlzLmNvbG9yTWluaS5ET01lbGVtZW50KFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgdGhpcy5ldmVudEhhbmRsZXIoKS5wcmlvcml0eUJ1dHRvblxuICAgICk7XG4gICAgbGV0IGVkaXQgPSBUYXNrQ29tcG9uZW50LmVkaXRNaW5pLkRPTWVsZW1lbnQoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICB0aGlzLmV2ZW50SGFuZGxlcigpLmVkaXRCdXR0b25cbiAgICApO1xuICAgIGxldCBkZWxldGVCdG4gPSBUYXNrQ29tcG9uZW50LmRlbGV0ZU1pbmkuRE9NZWxlbWVudChcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIHRoaXMuZXZlbnRIYW5kbGVyKCkuZGVsZXRlQnV0dG9uXG4gICAgKTtcbiAgICBsZXQgbWluaUJ1dHRvbnMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza0J1dHRvbnNcIik7XG5cbiAgICBtaW5pQnV0dG9uc1swXS5hcHBlbmQoY2hlY2spO1xuICAgIG1pbmlCdXR0b25zWzBdLmFwcGVuZChwcmlvcml0eSk7XG4gICAgbWluaUJ1dHRvbnNbMV0uYXBwZW5kKGVkaXQpO1xuICAgIG1pbmlCdXR0b25zWzFdLmFwcGVuZChkZWxldGVCdG4pO1xuICAgIHRoaXMuc3RhdGUudG9kby5kb21FbGVtZW50ID0gZWxlbWVudDtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHZpZXdFdmVudExpc3RlbmVyKGVsZW1lbnQpIHtcbiAgICBsZXQgaW5uZXJDb250YWluZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0RhdGFDb250YWluZXJcIik7XG4gICAgaW5uZXJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZXZlbnRIYW5kbGVyKCkudmlld0J1dHRvbik7XG4gIH1cblxuICBjaGVja0NoaWxkcmVuKCkge1xuICAgIHRoaXMuc3RhdGUudG9kby5jaGlsZHJlbi5mb3JFYWNoKChzdWJ0YXNrKSA9PiB7XG4gICAgICBzdWJ0YXNrLmNoZWNrVG9kbygpO1xuICAgIH0pO1xuICB9XG5cbiAgdW5jaGVja0NoaWxkcmVuKCkge1xuICAgIHRoaXMuc3RhdGUudG9kby5jaGlsZHJlbi5mb3JFYWNoKChzdWJ0YXNrKSA9PiB7XG4gICAgICBzdWJ0YXNrLnVuY2hlY2tUb2RvKCk7XG4gICAgfSk7XG4gIH1cblxuICBjaGVja1BhcmVudCgpIHtcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5zdGF0ZS50b2RvLnBhcmVudDtcbiAgICBwYXJlbnQuY2hlY2tUb2RvKCk7XG4gIH1cblxuICB1bmNoZWNrUGFyZW50KCkge1xuICAgIGxldCBwYXJlbnQgPSB0aGlzLnN0YXRlLnRvZG8ucGFyZW50O1xuICAgIHBhcmVudC51bmNoZWNrVG9kbygpO1xuICB9XG5cbiAgLy9DaGVjayBpZiB0aGUgc3VidGFza3MgYXJyYXkgY29udGFpbnMgb25seSBjb21wbGV0ZWQgdGFza3NcbiAgYXJlU3VidGFza3NDb21wbGV0ZWQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUudG9kby5pc1N1YnRhc2soKSkge1xuICAgICAgbGV0IHN1YnRhc2tzID0gdGhpcy5zdGF0ZS50b2RvLnBhcmVudC5jaGlsZHJlbjtcbiAgICAgIHJldHVybiBzdWJ0YXNrcy5ldmVyeSgoc3VidGFzaykgPT4gc3VidGFzay5jaGVjayk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGV2ZW50SGFuZGxlciA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY2hlY2tCdXR0b246ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudG9kby5jaGVjaykge1xuICAgICAgICAgIC8vIElmIHRoZSBiaWcgdG9kbyBpcyBjb21wbGV0ZWQgYW5kIGEgc3VidGFzayBpcyB1bmNoZWNrZWQsIHRoZSBiaWdcbiAgICAgICAgICAvLyB0b2RvIGlzIHVuY2hlY2tlZFxuICAgICAgICAgIGlmICh0aGlzLmFyZVN1YnRhc2tzQ29tcGxldGVkKCkgJiYgdGhpcy5zdGF0ZS50b2RvLmlzU3VidGFzaygpKVxuICAgICAgICAgICAgdGhpcy51bmNoZWNrUGFyZW50KCk7XG4gICAgICAgICAgdGhpcy5zdGF0ZS50b2RvLnVuY2hlY2tUb2RvKCk7XG4gICAgICAgICAgLy8gSWYgdGhlIGJpZyB0b2RvIGlzIHVuY2hlY2tlZCwgbWFyayBhbGwgaXRzIGNoaWxkcmVuIHVuY2hlY2tlZFxuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvZG8uY2hpbGRyZW4pIHRoaXMudW5jaGVja0NoaWxkcmVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS50b2RvLmNoZWNrVG9kbygpO1xuICAgICAgICAgIC8vIElmIGFsbCB0aGUgc3Vic3Rhc2tzIGFyZSBjb21wbGV0ZWQsIG1hcmsgY2hlY2tlZCB0aGUgYmlnIHRvZG9cbiAgICAgICAgICBpZiAodGhpcy5hcmVTdWJ0YXNrc0NvbXBsZXRlZCgpICYmIHRoaXMuc3RhdGUudG9kby5pc1N1YnRhc2soKSlcbiAgICAgICAgICAgIHRoaXMuY2hlY2tQYXJlbnQoKTtcbiAgICAgICAgICAvLyBJZiB0aGUgYmlnIHRvZG8gaXMgY2hlY2tlZCwgbWFyayBhbGwgaXRzIGNoaWxkcmVuIGNoZWNrZWRcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50b2RvLmNoaWxkcmVuKSB0aGlzLmNoZWNrQ2hpbGRyZW4oKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHZpZXdCdXR0b246ICgpID0+IHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5ldyB2aWV3VG9kb0NvbXBvbmVudChcInRhc2tWaWV3XCIsIHtcbiAgICAgICAgICB0b2RvOiB0aGlzLnN0YXRlLnRvZG8sXG4gICAgICAgIH0pO1xuICAgICAgICBtb2RhbC5zaG93KGNvbXBvbmVudCk7XG4gICAgICB9LFxuICAgICAgZWRpdEJ1dHRvbjogKCkgPT4ge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IE5ld1RvZG9Db21wb25lbnQoXCJ0YXNrRWRpdFwiLCB7XG4gICAgICAgICAgdG9kbzogdGhpcy5zdGF0ZS50b2RvLFxuICAgICAgICB9KTtcbiAgICAgICAgbW9kYWwuc2hvdyhjb21wb25lbnQpO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZUJ1dHRvbjogKCkgPT4ge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IERlbGV0ZUNvbXBvbmVudChcImRlbGV0ZVwiLCB7XG4gICAgICAgICAgdG9kbzogdGhpcy5zdGF0ZS50b2RvLFxuICAgICAgICB9KTtcbiAgICAgICAgbW9kYWwuc2hvdyhjb21wb25lbnQpO1xuICAgICAgfSxcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrQ29tcG9uZW50O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgTmVyb3MgZnJvbSBcIi4uL05lcm9zXCI7XG5pbXBvcnQgVGFza0NvbXBvbmVudCBmcm9tIFwiLi9UYXNrQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBOZXdUb2RvQ29tcG9uZW50IH0gZnJvbSBcIi4vTmV3VG9kb0NvbXBvbmVudFwiO1xuaW1wb3J0IG1vZGFsIGZyb20gXCIuLi9tb2RhbFwiO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNsYXNzIFRvZG9Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbW92ZVRvQ29tcGxldGVkKGVsZW1lbnQpIHtcbiAgICBsZXQgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wbGV0ZWRUb2Rvc1wiKTtcbiAgICBjb21wbGV0ZWQuYXBwZW5kKGVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgbW92ZVRvUGVuZGluZyhlbGVtZW50KSB7XG4gICAgbGV0IHBlbmRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BlbmRpbmdUb2Rvc1wiKTtcbiAgICBwZW5kaW5nLmFwcGVuZChlbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IobmFtZSwgc3RhdGUpIHtcbiAgICBzdXBlcihuYW1lLCBzdGF0ZSk7XG4gICAgdGhpcy5jcmVhdGVUYXNrQ29tcG9uZW50cygpO1xuICB9XG5cbiAgdGVtcGxhdGUgPSAoc3RhdGUpID0+XG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrQ29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic3VidGFza3NDb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYWRkU3VidGFzayc+KyBBZGQgU3VidGFzazwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgLy8gVGhpcyBtZXRob2QgdGFrZXMgdGhlIHN0YXRlIHRhc2tzIGFuZCBzdWJ0YXNrcyBhbmQgY29udmVydHMgdGhlbSBpbnRvIFRhc2tDb21wb25lbnRzLFxuICAvLyB0aGVuIGFzc2lnbiB0aG9zZSBjb21wb25lbnRzIHRvIGJlIHRoZSBuZXcgdmFsdWVzIGZvciBzdGF0ZSB0YXNrcyBhbmQgc3VidGFza3MuXG4gIGNyZWF0ZVRhc2tDb21wb25lbnRzKCkge1xuICAgIC8vIEkgZG9uJ3Qga25vdyBpZiB0aGlzIHNob3VsZCBnbyBoZXJlLCBidXQgYWxsIHRoaXMgZG9lcyBpcyBjb252ZXJ0IHRoZSB0b2RvIG9iamVjdFxuICAgIC8vIGluIHRoZSBzdGF0ZSBvYmplY3QgYW5kIHR1cm4gaXQgaW50byBhIHRhc2tDb21wb25lbnQsIHJlYWR5IHRvIGJlIHVzZWQuXG4gICAgdGhpcy5zdGF0ZS50YXNrRE9NID0gbmV3IFRhc2tDb21wb25lbnQoXCJ0YXNrXCIsIHtcbiAgICAgIHRvZG86IHRoaXMuc3RhdGUudGFzayxcbiAgICAgIGNsYXNzZXM6IFtcInRhc2tcIl0sXG4gICAgfSkuRE9NZWxlbWVudCgpO1xuICAgIC8vIFRoaXMgdGFrZXMgdGhlIGNoaWxkcmVuIGFycmF5IGFuZCBhcHBsaWVzIHRoZSBzYW1lIHByb2Nlc3MgYWJvdmUgdG8gZWFjaCB0YXNrXG4gICAgdGhpcy5zdGF0ZS5zdWJ0YXNrc0RPTSA9IHRoaXMuc3RhdGUuc3VidGFza3MubWFwKCh0YXNrKSA9PlxuICAgICAgbmV3IFRhc2tDb21wb25lbnQoXCJzdWJ0YXNrXCIsIHtcbiAgICAgICAgdG9kbzogdGFzayxcbiAgICAgICAgY2xhc3NlczogW1widGFza1wiLCBcInN1YnRhc2tcIl0sXG4gICAgICB9KS5ET01lbGVtZW50KClcbiAgICApO1xuICB9XG5cbiAgLy8gVGhpcyBtZXRob2QgdGFrZXMgdGhlIGJ1dHRvbiBlbGVtZW50IGFuZCBhZGRzIHRoZSBldmVudCBsaXN0ZW5lciB0byBjcmVhdGUgYSBzdWJ0YXNrXG4gIGFkZFN1YnRhc2soYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLnNob3dNb2RhbCh0aGlzLnN0YXRlLnRhc2spO1xuICAgIH0pO1xuICB9XG5cbiAgRE9NZWxlbWVudCgpIHtcbiAgICBsZXQgZWxlbWVudCA9IHN1cGVyLkRPTWVsZW1lbnQoKTtcbiAgICBsZXQgc3VidGFzayA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJ0YXNrc0NvbnRhaW5lclwiKTtcbiAgICBsZXQgYnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFN1YnRhc2tcIik7XG4gICAgdGhpcy5hZGRTdWJ0YXNrKGJ1dHRvbik7XG5cbiAgICBlbGVtZW50LnByZXBlbmQodGhpcy5zdGF0ZS50YXNrRE9NKTtcbiAgICB0aGlzLnN0YXRlLnN1YnRhc2tzRE9NLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHN1YnRhc2suaW5zZXJ0QmVmb3JlKHRhc2ssIGJ1dHRvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzaG93TW9kYWwocGFyZW50KSB7XG4gICAgbGV0IG5ld1RvZG8gPSBuZXcgTmV3VG9kb0NvbXBvbmVudChcIm5ld1RvZG9cIiwgeyBwYXJlbnQ6IHBhcmVudCB9KTtcbiAgICBtb2RhbC5zaG93KG5ld1RvZG8pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9Db21wb25lbnQ7XG4iLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xuaW1wb3J0IFRhc2tDb21wb25lbnQgZnJvbSBcIi4vVGFza0NvbXBvbmVudFwiO1xuaW1wb3J0IGhlbHBlciBmcm9tIFwiLi4vaGVscGVyXCI7XG5pbXBvcnQgeyBQcmlvcml0eUNvbXBvbmVudCB9IGZyb20gXCIuL1ByaW9yaXR5Q29tcG9uZW50XCI7XG5pbXBvcnQge1xuICBmb3JtYXREaXN0YW5jZVRvTm93LFxuICBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0LFxuICBpc1RvZGF5LFxufSBmcm9tIFwiZGF0ZS1mbnMvZXNtXCI7XG5pbXBvcnQgUHJpb3JpdHkgZnJvbSBcIi4uL3ByaW9yaXR5XCI7XG5cbmV4cG9ydCBjbGFzcyB2aWV3VG9kb0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHRlbXBsYXRlID0gKHN0YXRlKSA9PlxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPSdpbmZvQ29udGFpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3M9J3ZpZXdOYXZiYXInPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0nbWFpblRhc2tDb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzPSdoZWFkZXJDb250YWluZXInPlxuICAgICAgICAgIDxoMSBjbGFzcz0ndmlld1RpdGxlJz4ke3N0YXRlLnRvZG8udGl0bGV9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxocj5cbiAgICAgICAgPGRpdiBjbGFzcz0nZGVzY3JpcHRpb25WaWV3Q29udGFpbmVyJz5cbiAgICAgICAgICA8cCBjbGFzcz0ndmlld0Rlc2NyaXB0aW9uJz4ke3N0YXRlLnRvZG8uZGVzY3JpcHRpb24ucmVwbGFjZShcbiAgICAgICAgICAgIC9cXG4vZyxcbiAgICAgICAgICAgIFwiPGJyPlwiXG4gICAgICAgICAgKX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSd0b2RvRGF0YUNvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nZGF0ZVZpZXdDb250YWluZXInPlxuICAgICAgICAgICAgPGgzPkR1ZSBkYXRlPC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2RhdGVTdHJpbmdDb250YWluZXInPlxuICAgICAgICAgICAgICA8cCBjbGFzcz0nZGF0ZVZpZXcnPiR7Zm9ybWF0KFxuICAgICAgICAgICAgICAgIG5ldyBEYXRlKGhlbHBlci5wYXJzZVN0cmluZ0RhdGUoc3RhdGUudG9kby5kYXRlKSksXG4gICAgICAgICAgICAgICAgXCJQXCJcbiAgICAgICAgICAgICAgKX08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPSd0aW1lTGVmdFZpZXcnPigke1xuICAgICAgICAgICAgICAgIGlzVG9kYXkobmV3IERhdGUoaGVscGVyLnBhcnNlU3RyaW5nRGF0ZShzdGF0ZS50b2RvLmRhdGUpKSlcbiAgICAgICAgICAgICAgICAgID8gXCJUb2RheVwiXG4gICAgICAgICAgICAgICAgICA6IGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QoXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoaGVscGVyLnBhcnNlU3RyaW5nRGF0ZShzdGF0ZS50b2RvLmRhdGUpKSxcbiAgICAgICAgICAgICAgICAgICAgICB7IGFkZFN1ZmZpeDogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSk8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdwcmlvcml0eVZpZXdDb250YWluZXInPlxuICAgICAgICAgICAgPGgzPlByaW9yaXR5PC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9J3NlcGFyYXRvcic+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSd2aWV3U3ViQ29udGFpbmVyJz5cbiAgICAgICAgPGgxIGNsYXNzPSdsaW5rZWRUYXNrSGVhZGVyJz4ke1xuICAgICAgICAgIHN0YXRlLnRvZG8uaXNTdWJ0YXNrKCkgPyBcIlBhcmVudFwiIDogXCJTdWJ0YXNrc1wiXG4gICAgICAgIH08L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPSdsaW5rZWRUYXNrc0NvbnRhaW5lcic+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgRE9NZWxlbWVudCgpIHtcbiAgICBsZXQgZWxlbWVudCA9IHN1cGVyLkRPTWVsZW1lbnQoKTtcbiAgICBsZXQgc3VidGFza0NvbnRhaW5lciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5saW5rZWRUYXNrc0NvbnRhaW5lclwiKTtcbiAgICBpZiAoIXRoaXMuc3RhdGUudG9kby5pc1N1YnRhc2soKSkge1xuICAgICAgdGhpcy5zdGF0ZS50b2RvLmNoaWxkcmVuLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgbGV0IHRhc2tET00gPSBuZXcgVGFza0NvbXBvbmVudChcInN1YnRhc2tcIiwge1xuICAgICAgICAgIHRvZG86IHRhc2ssXG4gICAgICAgICAgY2xhc3NlczogW1widGFza1wiLCBcInN1YnRhc2tcIl0sXG4gICAgICAgIH0pLkRPTWVsZW1lbnQoKTtcbiAgICAgICAgdGFza0RPTS5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICAvLyBSZW1vdmUgdGhlIGNoZWNrIG1pbmljb250YWluZXIgc28gdXNlcnMgd29udCBiZSBhYmxlIHRvIGNoZWNrIHRoZSB0b2RvIGZyb20gdGhlIG1vZGFsXG4gICAgICAgIHN1YnRhc2tDb250YWluZXIuYXBwZW5kKHRhc2tET00pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwYXJlbnRET00gPSBuZXcgVGFza0NvbXBvbmVudChcInRvZG9cIiwge1xuICAgICAgICB0b2RvOiB0aGlzLnN0YXRlLnRvZG8ucGFyZW50LFxuICAgICAgICBjbGFzc2VzOiBbXCJ0YXNrIHN1YnRhc2tcIl0sXG4gICAgICB9KS5ET01lbGVtZW50KCk7XG4gICAgICBwYXJlbnRET00uZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgIC8vIFJlbW92ZSB0aGUgY2hlY2sgbWluaWNvbnRhaW5lciBzbyB1c2VycyB3b250IGJlIGFibGUgdG8gY2hlY2sgdGhlIHRvZG8gZnJvbSB0aGUgbW9kYWxcbiAgICAgIHN1YnRhc2tDb250YWluZXIuYXBwZW5kKHBhcmVudERPTSk7XG4gICAgfVxuICAgIHRoaXMuY3JlYXRlUHJpb3JpdHkoZWxlbWVudCwgdGhpcy5zdGF0ZS50b2RvLnByaW9yaXR5KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIGNyZWF0ZVByaW9yaXR5KGVsZW1lbnQsIHByaW9OdW1iZXIpIHtcbiAgICBsZXQgcHJpb3JpdHlDb250YWluZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlWaWV3Q29udGFpbmVyXCIpO1xuICAgIGxldCBwcmlvcml0eSA9IFByaW9yaXR5LnByaW9yaXRpZXNbcHJpb051bWJlciAtIDFdO1xuICAgIGxldCBwcmlvcml0eUNvbXBvbmVudCA9IG5ldyBQcmlvcml0eUNvbXBvbmVudChcInRvZG9Qcmlvcml0eVwiLCB7XG4gICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICBwaWNrZXI6IGZhbHNlLFxuICAgIH0pLkRPTWVsZW1lbnQoKTtcbiAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmQocHJpb3JpdHlDb21wb25lbnQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBlbCB9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBQcm9qZWN0Q29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvUHJvamVjdENvbXBvbmVudFwiO1xuaW1wb3J0IE5lcm9zIGZyb20gXCIuL05lcm9zXCI7XG5pbXBvcnQgUHJpb3JpdHkgZnJvbSBcIi4vcHJpb3JpdHlcIjtcbmltcG9ydCB7IFByaW9yaXR5Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9Qcmlvcml0eUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgcGFyc2VJU08gfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGNvbXBhcmVEZXNjIH0gZnJvbSBcImRhdGUtZm5zL2VzbVwiO1xuXG5jb25zdCBoZWxwZXIgPSAoKCkgPT4ge1xuICAvLyBUaGlzIG1ldGhvZCBmaW5kcyB0aGUgZWxlbWVudCBtYXRjaGluZyB0aGUgSUQgb24gdGhlIGdpdmVuIGFycmF5IGFuZCBkZWxldGVzIGl0IGJ5IGluZGV4XG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoYXJyYXksIGlkKSA9PiB7XG4gICAgbGV0IGZvdW5kID0gZmluZFRhc2soWy4uLmFycmF5XSwgaWQpO1xuICAgIGxldCBmb3VuZEluZGV4ID0gYXJyYXkuaW5kZXhPZihmb3VuZCk7XG4gICAgZm91bmRJbmRleCA9PT0gMCA/IGFycmF5LnNoaWZ0KCkgOiBhcnJheS5zcGxpY2UoZm91bmRJbmRleCwgMSk7XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9O1xuXG4gIC8vIEdpdmVuIGFuIGFycmF5IG9mIHRvZG9zIGFuZCBhbiBpZCwgdGhpcyBtZXRob2Qgd2lsbCByZWN1cnNpdmVseSBmaW5kIHRoZSB0b2RvXG4gIGNvbnN0IGZpbmRUYXNrID0gKHF1ZXVlLCBpZCkgPT4ge1xuICAgIGxldCBjdXJyZW50ID0gcXVldWVbMF07XG4gICAgaWYgKGN1cnJlbnQuaWQgPT09IGlkKSByZXR1cm4gY3VycmVudDtcbiAgICBxdWV1ZS5zaGlmdCgpO1xuXG4gICAgaWYgKCFjdXJyZW50LmlzU3VidGFzaygpKSBxdWV1ZSA9IFsuLi5xdWV1ZSwgLi4uY3VycmVudC5jaGlsZHJlbl07XG4gICAgcmV0dXJuIGZpbmRUYXNrKHF1ZXVlLCBpZCk7XG4gIH07XG5cbiAgLy8gTWVyZ2Ugc29ydCBhbGdvcml0aG1cblxuICBjb25zdCBtZXJnZVNvcnQgPSAoYXJyYXkpID0+IHtcbiAgICBpZiAoYXJyYXkubGVuZ3RoIDwgMSkgcmV0dXJuIGFycmF5O1xuICAgIGxldCBzb3J0ZWRBcnJheSA9IFtdO1xuICAgIGlmIChhcnJheS5sZW5ndGggPCAyKSB7XG4gICAgICBzb3J0ZWRBcnJheS5wdXNoKGFycmF5WzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGhhbGYgPSBNYXRoLmZsb29yKGFycmF5Lmxlbmd0aCAvIDIpO1xuICAgICAgbGV0IGFycmF5MSA9IG1lcmdlU29ydChhcnJheS5zcGxpY2UoMCwgaGFsZikpO1xuICAgICAgbGV0IGFycmF5MiA9IG1lcmdlU29ydChhcnJheSk7XG4gICAgICBsZXQgY291bnRlciA9IGFycmF5MS5sZW5ndGggKyBhcnJheTIubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50ZXI7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKGFycmF5MS5sZW5ndGggPT09IDAgfHwgYXJyYXkyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHNvcnRlZEFycmF5ID0gc29ydGVkQXJyYXkuY29uY2F0KGFycmF5MS5jb25jYXQoYXJyYXkyKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFycmF5MVswXS5wcmlvcml0eSA8IGFycmF5MlswXS5wcmlvcml0eSkge1xuICAgICAgICAgIHNvcnRlZEFycmF5LnB1c2goYXJyYXkxLnNoaWZ0KCkpO1xuICAgICAgICB9IGVsc2UgaWYgKGFycmF5MVswXS5wcmlvcml0eSA8IGFycmF5MlswXS5wcmlvcml0eSkge1xuICAgICAgICAgIHNvcnRlZEFycmF5LnB1c2goYXJyYXkyLnNoaWZ0KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIElmIHRoZSB0b2RvcyBoYXZlIHRoZSBzYW1lIHByaW9yaXR5LCBwdXNoIHRoZSBlYXJsaWVzdCB0b2RvIHRvIHRoZSBzb3J0ZWQgYXJyYXlcbiAgICAgICAgICBjb21wYXJlRGVzYyhwYXJzZUlTTyhhcnJheTFbMF0uZGF0ZSksIHBhcnNlSVNPKGFycmF5MlswXS5kYXRlKSkgPT09IDFcbiAgICAgICAgICAgID8gc29ydGVkQXJyYXkucHVzaChhcnJheTEuc2hpZnQoKSlcbiAgICAgICAgICAgIDogc29ydGVkQXJyYXkucHVzaChhcnJheTIuc2hpZnQoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNvcnRlZEFycmF5O1xuICB9O1xuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byAnY2xlYXIgY29tcGxldGVkJyBidXR0b24sIHRoaXMgc2hvdWxkbid0IGJlIGhlcmUgYnV0XG4gIC8vIEkgZG9uJ3QgdGhpbmsgaXQncyB3b3J0aCBjcmVhdGluZyBhIG5ldyBtb2R1bGUganVzdCBmb3IgdGhpcy5cbiAgbGV0IGNsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbGVhckNvbXBsZXRlZFwiKTtcbiAgY2xlYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoUHJvamVjdC5zZWxlY3RlZCkge1xuICAgICAgbGV0IHByb2plY3QgPSBQcm9qZWN0LnNlbGVjdGVkO1xuICAgICAgbGV0IHByb2plY3RDb21wb25lbnQgPSBwcm9qZWN0LmNvbXBvbmVudDtcblxuICAgICAgUHJvamVjdENvbXBvbmVudC5yZXNldFZpZXcoKTtcbiAgICAgIHByb2plY3QuY2xlYXJDb21wbGV0ZWRUb2RvcygpO1xuICAgICAgcHJvamVjdENvbXBvbmVudC5kaXNwbGF5VG9kb3MoXCJjb21wbGV0ZWRcIiwgcHJvamVjdC5jb21wbGV0ZWQpO1xuICAgICAgcHJvamVjdENvbXBvbmVudC5kaXNwbGF5VG9kb3MoXCJwZW5kaW5nXCIsIHByb2plY3QucGVuZGluZyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gJ0RlbGV0ZSB0aGlzIHByb2plY3QnIGJ1dHRvblxuICBsZXQgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVsZXRlUHJvamVjdFwiKTtcbiAgZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChQcm9qZWN0LnNlbGVjdGVkKSB7XG4gICAgICBOZXJvcy5kZWxldGVOZXJvc0NvbXBvbmVudChOZXJvcy5wcm9qZWN0cywgUHJvamVjdC5zZWxlY3RlZC5jb21wb25lbnQpO1xuICAgICAgUHJvamVjdC5kZWxldGVQcm9qZWN0KFByb2plY3Quc2VsZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG5cbiAgbGV0IHJlc2V0UHJpb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzZXRQcmlvcml0aWVzXCIpO1xuICByZXNldFByaW9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBQcmlvcml0eS5yZXNldENvbG91cnMoKTtcbiAgICBQcmlvcml0eUNvbXBvbmVudC5kaXNwbGF5UHJpb3JpdGllcygpO1xuICAgIGlmIChQcm9qZWN0LnNlbGVjdGVkKSBQcm9qZWN0LnNlbGVjdGVkLmNvbXBvbmVudC51cGRhdGUoKTtcbiAgfSk7XG5cbiAgY29uc3QgcGFyc2VTdHJpbmdEYXRlID0gKGRhdGVTdHJpbmcpID0+IHtcbiAgICBsZXQgZGF0ZVN0ciA9IGRhdGVTdHJpbmcuc3BsaXQoXCItXCIpLmpvaW4oXCIvXCIpO1xuICAgIHJldHVybiBkYXRlU3RyO1xuICB9O1xuXG4gIHJldHVybiB7IGRlbGV0ZUl0ZW0sIGZpbmRUYXNrLCBtZXJnZVNvcnQsIHBhcnNlU3RyaW5nRGF0ZSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaGVscGVyO1xuIiwiY29uc3QgaWRBc3NpZ25lciA9ICgoKSA9PiB7XG4gIGxldCBhc3NpZ25lciA9IDE7XG5cbiAgY29uc3QgZ2V0SWROdW1iZXIgPSAoKSA9PiB7XG4gICAgYXNzaWduZXIgKz0gMTtcbiAgICByZXR1cm4gYXNzaWduZXIgLSAxO1xuICB9O1xuXG4gIHJldHVybiB7IGdldElkTnVtYmVyIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBpZEFzc2lnbmVyO1xuIiwiaW1wb3J0IE5lcm9zIGZyb20gXCIuL05lcm9zXCI7XG5pbXBvcnQgeyBOZXdUb2RvQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9OZXdUb2RvQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBOZXdQcm9qZWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9OZXdQcm9qZWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgY2xvc2UgZnJvbSBcIi4uL2Fzc2V0cy9jbG9zZS5zdmdcIjtcblxuY29uc3QgbW9kYWwgPSAoKCkgPT4ge1xuICBsZXQgbW9kYWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbFwiKTtcbiAgbGV0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbENvbnRhaW5lclwiKTtcbiAgbGV0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZEJpZ1RvZG9cIik7XG4gIGxldCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQcm9qZWN0XCIpO1xuXG4gIGNvbnN0IGhpZGUgPSAoKSA9PiB7XG4gICAgbW9kYWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgcmVzZXRNb2RhbCgpO1xuICB9O1xuXG4gIGNvbnN0IHNob3cgPSAoY29tcG9uZW50KSA9PiB7XG4gICAgbGV0IG1vZGFsID0gbmV3IE5lcm9zKFwibW9kYWxDb250YWluZXJcIik7XG4gICAgbW9kYWwucmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICBsZXQgY2xvc2VCdG4gPSBfY3JlYXRlQ2xvc2VCdXR0b24oKTtcbiAgICBsZXQgaGVhZGVyRGl2ID0gbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyQ29udGFpbmVyXCIpO1xuICAgIGlmIChoZWFkZXJEaXYpIGhlYWRlckRpdi5hcHBlbmQoY2xvc2VCdG4pO1xuICAgIG1vZGFsRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIGxldCBpbnB1dCA9IG1vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgLy8gbW9kYWxFbGVtZW50LmZvY3VzKCk7XG4gICAgaWYgKGlucHV0KSBpbnB1dC5mb2N1cygpO1xuICB9O1xuXG4gIGNvbnN0IF9jcmVhdGVDbG9zZUJ1dHRvbiA9ICgpID0+IHtcbiAgICBsZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VCdXR0b25cIik7XG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZChcImZhLXhtYXJrXCIpO1xuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiKTtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaGlkZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBjbG9zZUJ0bjtcbiAgfTtcblxuICBjb25zdCByZXNldE1vZGFsID0gKCkgPT4ge1xuICAgIG1vZGFsRWxlbWVudC5pbm5lckhUTUwgPSBcIjxkaXYgaWQ9J21vZGFsQ29udGFpbmVyJz48L2Rpdj5cIjtcbiAgfTtcblxuICAvLyBIaWRlIG1vZGFsIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG91dHNpZGVcbiAgbW9kYWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsRWxlbWVudCkge1xuICAgICAgaGlkZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgbW9kYWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIGhpZGUoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFNob3cgbW9kYWwgd2l0aCBuZXcgdG9kbyBmb3JtIHdoZW4gdGhlICdhZGQgbmV3IHRvZG8nIGJ1dHRvbiBpcyBjbGlja2VkXG4gIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgbmV3VG9kbyA9IG5ldyBOZXdUb2RvQ29tcG9uZW50KFwibmV3VG9kb1wiLCB7IHBhcmVudDogbnVsbCB9KTtcbiAgICBpZiAoUHJvamVjdC5zZWxlY3RlZCkge1xuICAgICAgc2hvdyhuZXdUb2RvKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byAnQWRkIG5ldyBwcm9qZWN0JyBidXR0b25cblxuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgTmV3UHJvamVjdENvbXBvbmVudChcIm5ld1Byb2plY3RcIik7XG5cbiAgICBzaG93KG5ld1Byb2plY3QpO1xuICB9KTtcblxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gYnVyZ2VyIG1lbnUgYnV0dG9uIHRvIHNob3cgdGhlIHNpZGViYXIgaW4gbW9iaWxlIHZlcnNpb25cbiAgbGV0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyTWVudVwiKTtcbiAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVNpZGViYXJcIik7XG4gIH0pO1xuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBiYWNrIG1lbnUgYnV0dG9uIHRvIGhpZGUgdGhlIHNpZGViYXIgaW4gbW9iaWxlIHZlcnNpb25cbiAgbGV0IGdvQmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29CYWNrXCIpO1xuICBnb0JhY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJoaWRlU2lkZWJhclwiKTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgaGlkZSxcbiAgICBzaG93LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kYWw7XG4iLCJpbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZU1hbmFnZW1lbnRcIjtcblxuY2xhc3MgUHJpb3JpdHkge1xuICAjbmFtZTtcbiAgI251bWJlcjtcbiAgY29sb3I7XG5cbiAgc3RhdGljICNwcmlvcml0aWVzQXJyYXkgPSBbXG4gICAgbmV3IFByaW9yaXR5KFwiVXJnZW50XCIsIDEsIFwiI0U4MTYxNlwiKSxcbiAgICBuZXcgUHJpb3JpdHkoXCJIaWdoXCIsIDIsIFwiI0VGNTUxM1wiKSxcbiAgICBuZXcgUHJpb3JpdHkoXCJNZWRpdW1cIiwgMywgXCIjRjNERDExXCIpLFxuICAgIG5ldyBQcmlvcml0eShcIkxvd1wiLCA0LCBcIiMyMkM1MUZcIiksXG4gICAgbmV3IFByaW9yaXR5KFwiT3B0aW9uYWxcIiwgNSwgXCIjMjMzNkUwXCIpLFxuICBdO1xuXG4gIHN0YXRpYyAjZGVmYXVsdENvbG91cnMgPSBbXG4gICAgXCIjRTgxNjE2XCIsXG4gICAgXCIjRUY1NTEzXCIsXG4gICAgXCIjRjNERDExXCIsXG4gICAgXCIjMjJDNTFGXCIsXG4gICAgXCIjMjMzNkUwXCIsXG4gIF07XG5cbiAgc3RhdGljIHJlc2V0Q29sb3VycygpIHtcbiAgICBQcmlvcml0eS4jcHJpb3JpdGllc0FycmF5LmZvckVhY2goKHByaW9yaXR5LCBpbmRleCkgPT4ge1xuICAgICAgcHJpb3JpdHkuY29sb3IgPSBQcmlvcml0eS4jZGVmYXVsdENvbG91cnNbaW5kZXhdO1xuICAgIH0pO1xuICAgIFN0b3JhZ2Uuc2F2ZVByaW9yaXR5RGF0YSgpO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcmlvcml0aWVzKCkge1xuICAgIHJldHVybiBbLi4uUHJpb3JpdHkuI3ByaW9yaXRpZXNBcnJheV07XG4gIH1cblxuICBzdGF0aWMgcHJpb3JpdHkobnVtYmVyKSB7XG4gICAgcmV0dXJuIFByaW9yaXR5LiNwcmlvcml0aWVzQXJyYXlbbnVtYmVyIC0gMV07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihuYW1lLCBudW1iZXIsIGNvbG9yKSB7XG4gICAgdGhpcy4jbmFtZSA9IG5hbWU7XG4gICAgdGhpcy4jbnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLiNuYW1lO1xuICB9XG5cbiAgZ2V0IG51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy4jbnVtYmVyO1xuICB9XG5cbiAgc2V0IGNvbG9yKGNvbG9yKSB7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaW9yaXR5O1xuIiwiLyogMS4tIElmIGEgdG9kbydzIGlzIGEgcGFyZW50LCB0aGV5IGdldCBhZGRlZCB0byB0aGUgcGVuZGluZyB0YXNrcyB3aGVuIGNyZWF0ZWRcbiAgIDIuLSBTb3J0IHRoZSBwZW5kaW5nIHRhc2tzIGFycmF5IGJ5IHByaW9yaXR5LCBhbmQgc29ydCB0aGUgY2hpbGRyZW4gYXJyYXkgYnkgcHJpb3JpdHkgYXMgd2VsbCAqL1xuXG5pbXBvcnQgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IFByb2plY3RDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Qcm9qZWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgTmVyb3MgZnJvbSBcIi4vTmVyb3NcIjtcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlTWFuYWdlbWVudFwiO1xuY2xhc3MgUHJvamVjdCB7XG4gICNwZW5kaW5nVGFza3M7XG4gICNjb21wbGV0ZWRUYXNrcztcblxuICBzdGF0aWMgcHJvamVjdHMgPSBbXTtcblxuICBzdGF0aWMgc2VsZWN0ZWQ7XG5cbiAgY29uc3RydWN0b3IobmFtZSwgZmlyc3RMb2FkID0gZmFsc2UpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29tcG9uZW50ID0gbmV3IFByb2plY3RDb21wb25lbnQobmFtZSwgeyBwcm9qZWN0OiB0aGlzIH0pO1xuICAgIHRoaXMuI3BlbmRpbmdUYXNrcyA9IFtdO1xuICAgIHRoaXMuI2NvbXBsZXRlZFRhc2tzID0gW107XG4gICAgdGhpcy5maXJzdExvYWQgPSBmaXJzdExvYWQ7XG4gICAgUHJvamVjdC5wcm9qZWN0cy5wdXNoKHRoaXMpO1xuICAgIGlmICghdGhpcy5maXJzdExvYWQpIHtcbiAgICAgIFN0b3JhZ2Uuc2F2ZURhdGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maXJzdExvYWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnZXQgcGVuZGluZygpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuI3BlbmRpbmdUYXNrc107XG4gIH1cblxuICBnZXQgY29tcGxldGVkKCkge1xuICAgIHJldHVybiBbLi4udGhpcy4jY29tcGxldGVkVGFza3NdO1xuICB9XG5cbiAgYWRkUGVuZGluZyhpdGVtKSB7XG4gICAgdGhpcy4jcGVuZGluZ1Rhc2tzLnB1c2goaXRlbSk7XG4gIH1cblxuICBhZGRDb21wbGV0ZWQoaXRlbSkge1xuICAgIHRoaXMuI2NvbXBsZXRlZFRhc2tzLnB1c2goaXRlbSk7XG4gIH1cblxuICBjb21wbGV0ZVRvZG8odG9kbykge1xuICAgIGxldCBmb3VuZEluZGV4ID0gdGhpcy4jcGVuZGluZ1Rhc2tzLmluZGV4T2YodG9kbyk7XG4gICAgdGhpcy4jcGVuZGluZ1Rhc2tzLnNwbGljZShmb3VuZEluZGV4LCAxKTtcbiAgICB0aGlzLmFkZENvbXBsZXRlZCh0b2RvKTtcbiAgfVxuXG4gIHJlc3VtZVRvZG8odG9kbykge1xuICAgIGxldCBmb3VuZEluZGV4ID0gdGhpcy4jY29tcGxldGVkVGFza3MuaW5kZXhPZih0b2RvKTtcbiAgICB0aGlzLiNjb21wbGV0ZWRUYXNrcy5zcGxpY2UoZm91bmRJbmRleCwgMSk7XG4gICAgdGhpcy5hZGRQZW5kaW5nKHRvZG8pO1xuICB9XG5cbiAgY2xlYXJDb21wbGV0ZWRUb2RvcygpIHtcbiAgICB0aGlzLiNjb21wbGV0ZWRUYXNrcyA9IFtdO1xuICB9XG5cbiAgZGVsZXRlVG9kbyh0YXNrKSB7XG4gICAgaWYgKHRoaXMuI3BlbmRpbmdUYXNrcy5pbmNsdWRlcyh0YXNrKSkge1xuICAgICAgbGV0IHRhc2tJbmRleCA9IHRoaXMuI3BlbmRpbmdUYXNrcy5pbmRleE9mKHRhc2spO1xuICAgICAgdGFza0luZGV4ID09PSAwXG4gICAgICAgID8gdGhpcy4jcGVuZGluZ1Rhc2tzLnNoaWZ0KClcbiAgICAgICAgOiB0aGlzLiNwZW5kaW5nVGFza3Muc3BsaWNlKHRhc2tJbmRleCwgdGFza0luZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRhc2tJbmRleCA9IHRoaXMuI2NvbXBsZXRlZFRhc2tzLmluZGV4T2YodGFzayk7XG4gICAgICB0YXNrSW5kZXggPT09IDBcbiAgICAgICAgPyB0aGlzLiNjb21wbGV0ZWRUYXNrcy5zaGlmdCgpXG4gICAgICAgIDogdGhpcy4jY29tcGxldGVkVGFza3Muc3BsaWNlKHRhc2tJbmRleCwgdGFza0luZGV4KTtcbiAgICB9XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHBlbmRpbmc6IHt9LFxuICAgICAgY29tcGxldGVkOiB7fSxcbiAgICB9O1xuICAgIHRoaXMuI3BlbmRpbmdUYXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgb2JqLnBlbmRpbmdbYHRhc2ske2luZGV4fWBdID0gdGFzay50b0pTT04oKTtcbiAgICB9KTtcbiAgICB0aGlzLiNjb21wbGV0ZWRUYXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgb2JqLmNvbXBsZXRlZFtgdGFzayR7aW5kZXh9YF0gPSB0YXNrLnRvSlNPTigpO1xuICAgIH0pO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgcHJvamVjdE9CSiA9IEpTT04ucGFyc2UoanNvbik7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gcHJvamVjdE9CSi5wZW5kaW5nKSB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwocHJvamVjdE9CSi5wZW5kaW5nLCBrZXkpKSB7XG4gICAgICAgIHByb2plY3RPQkoucGVuZGluZ1trZXldID0gVG9kby5mcm9tSlNPTihwcm9qZWN0T0JKLnBlbmRpbmdba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIHByb2plY3RPQkouY29tcGxldGVkKSB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwocHJvamVjdE9CSi5jb21wbGV0ZWQsIGtleSkpIHtcbiAgICAgICAgcHJvamVjdE9CSi5jb21wbGV0ZWRba2V5XSA9IFRvZG8uZnJvbUpTT04ocHJvamVjdE9CSi5jb21wbGV0ZWRba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9qZWN0T0JKO1xuICB9XG5cbiAgc3RhdGljIGxvYWRQcm9qZWN0KG9iaikge1xuICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3Qob2JqLm5hbWUsIHRydWUpO1xuICAgIFByb2plY3Quc2VsZWN0ZWQgPSBwcm9qZWN0O1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iai5wZW5kaW5nKSB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwob2JqLnBlbmRpbmcsIGtleSkpIHtcbiAgICAgICAgVG9kby5sb2FkVG9kbyhvYmoucGVuZGluZ1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqLmNvbXBsZXRlZCkge1xuICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iai5jb21wbGV0ZWQsIGtleSkpIHtcbiAgICAgICAgVG9kby5sb2FkVG9kbyhvYmouY29tcGxldGVkW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBOZXJvcy5wcm9qZWN0cy5yZWdpc3RlckNvbXBvbmVudChwcm9qZWN0LmNvbXBvbmVudCk7XG4gIH1cblxuICBzdGF0aWMgZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgbGV0IGZvdW5kSW5kZXggPSBQcm9qZWN0LnByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gICAgUHJvamVjdC5wcm9qZWN0cy5zcGxpY2UoZm91bmRJbmRleCwgMSk7XG4gICAgU3RvcmFnZS5zYXZlRGF0YSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJpbXBvcnQgUHJpb3JpdHkgZnJvbSBcIi4vcHJpb3JpdHlcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFByaW9yaXR5Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9Qcmlvcml0eUNvbXBvbmVudFwiO1xuXG5leHBvcnQgY29uc3QgU3RvcmFnZSA9ICgoKSA9PiB7XG4gIGNvbnN0IHNhdmVEYXRhID0gKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBfc2F2ZVByb2plY3REYXRhKCk7XG4gICAgc2F2ZVByaW9yaXR5RGF0YSgpO1xuICB9O1xuXG4gIC8qKiAgVGhpcyBtZXRob2Qgc2F2ZXMgcHJvamVjdHMgdG8gdGhlIGxvY2FsIHN0b3JhZ2UgYXMgZm9sbG93czpcbiAgICogMS4gRmlyc3QgaXQgY3JlYXRlcyBhIHByb2plY3RzIG9iamVjdCB3aGVyZSBhbGwgcHJvamVjdHMgd2lsbCBiZSBzdG9yZWRcbiAgICogMi4gRm9yIGV2ZXJ5IGV4aXN0ZW50IHByb2plY3QgaXQgd2lsbCBjb252ZXJ0IHRoYXQgcHJvamVjdCB0byBhIGpzb24gc3RyaW5nLCB3aXRoIGl0cyB0b2RvcyBhbmQgc3VidG9kb3NcbiAgICogMy4gVGhlIHByb2plY3QganNvbiBzdHJpbmcgd2lsbCBiZSBzdG9yZWQgaW4gYSBrZXkgd2l0aCB0aGUgaW5kZXggYXMgaWRlbnRpZmllclxuICAgKiA0LiBTYXZlIHRoZSBwcm9qZWN0cyBvYmplY3QgYXMgYSBqc29uIHN0cmluZyBpbiB0aGUgbG9jYWxzdG9yYWdlXG4gICAqICovXG4gIGNvbnN0IF9zYXZlUHJvamVjdERhdGEgPSAoKSA9PiB7XG4gICAgbGV0IHByb2plY3RzID0ge307XG4gICAgUHJvamVjdC5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgbGV0IHByb2plY3RKU09OID0gcHJvamVjdC50b0pTT04oKTtcbiAgICAgIHByb2plY3RzW2Bwcm9qZWN0JHtpbmRleH1gXSA9IHByb2plY3RKU09OO1xuICAgIH0pO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIH07XG5cbiAgLy8gU2FtZSBwcm9jZWR1cmUgYXMgX3NhdmVQcm9qZWN0RGF0YSgpIGJ1dCBvbmx5IHNhdmluZyB0aGUgcHJpb3JpdGllcyBjb2xvdXJzXG4gIGNvbnN0IHNhdmVQcmlvcml0eURhdGEgPSAoKSA9PiB7XG4gICAgbGV0IHByaW9yaXRpZXMgPSB7fTtcbiAgICBQcmlvcml0eS5wcmlvcml0aWVzLmZvckVhY2goKHByaW9yaXR5LCBpbmRleCkgPT4ge1xuICAgICAgbGV0IHByaW9yaXR5Q29sb3IgPSBwcmlvcml0eS5jb2xvcjtcbiAgICAgIHByaW9yaXRpZXNbaW5kZXhdID0gcHJpb3JpdHlDb2xvcjtcbiAgICB9KTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcmlvcml0aWVzXCIsIEpTT04uc3RyaW5naWZ5KHByaW9yaXRpZXMpKTtcbiAgfTtcblxuICAvKiogVGhpcyBtZXRob2QgbG9hZHMgcHJvamVjdHMgdG8gdGhlIGxvY2FsIHN0b3JhZ2UgYXMgZm9sbG93czpcbiAgICogMS4gRmlyc3QgY2hlY2sgaWYgdGhlcmUgYXJlIGFueSBwcm9qZWN0cyBzYXZlZFxuICAgKiAyLiBJZiBpdCBoYXMgcHJvamVjdHMgaXQgd2lsbCByZXRyaWV2ZSB0aGUgcHJvamVjdCBhbmQgaXRzIHRvZG9zIGFuZCBzdWJ0b2RvcyBhcyBhbiBvYmplY3RcbiAgICogMy4gVHJhdmVyc2UgZXZlcnkgcHJvamVjdCBpbiB0aGUgb2JqZWN0IGFuZCBjcmVhdGUgYSBwcm9qZWN0L3RvZG8vc3VidG9kbyBmb3IgZXZlcnkgb25lIG9mIHRoZW1cbiAgICogKi9cblxuICBjb25zdCBfbG9hZFByb2plY3REYXRhID0gKCkgPT4ge1xuICAgIGlmICghd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIiA9PT0gbnVsbCkpIHtcbiAgICAgIGxldCBwcm9qZWN0cyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gcHJvamVjdHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb2plY3RzLCBrZXkpKSB7XG4gICAgICAgICAgbGV0IHByb2plY3RPYmogPSBQcm9qZWN0LmZyb21KU09OKHByb2plY3RzW2tleV0pO1xuICAgICAgICAgIFByb2plY3QubG9hZFByb2plY3QocHJvamVjdE9iaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF9zZWxlY3RMYXN0UHJvamVjdCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBfbG9hZFByaW9yaXR5RGF0YSA9ICgpID0+IHtcbiAgICBpZiAoIXdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByaW9yaXRpZXNcIiA9PT0gbnVsbCkpIHtcbiAgICAgIGxldCBjb2xvcnMgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByaW9yaXRpZXNcIikpO1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29sb3JzKSB7XG4gICAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChjb2xvcnMsIGtleSkpIHtcbiAgICAgICAgICBQcmlvcml0eS5wcmlvcml0aWVzW2tleV0uY29sb3IgPSBjb2xvcnNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBQcmlvcml0eUNvbXBvbmVudC5kaXNwbGF5UHJpb3JpdGllcygpO1xuICB9O1xuXG4gIGNvbnN0IGxvYWREYXRhID0gKCkgPT4ge1xuICAgIF9sb2FkUHJpb3JpdHlEYXRhKCk7XG4gICAgX2xvYWRQcm9qZWN0RGF0YSgpO1xuICB9O1xuXG4gIC8vIFNlbGVjdCB0aGUgbGFzdCBwcm9qZWN0IGNyZWF0ZWQgc28gaXQgYXV0b21hdGljYWxseSBwb3B1bGF0ZXMgdGhlIGRhc2hib2FyZCB3aXRoIHRoZSBsYXRlc3QgcHJvamVjdFxuICBjb25zdCBfc2VsZWN0TGFzdFByb2plY3QgPSAoKSA9PiB7XG4gICAgbGV0IGxhc3RQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Q29udGFpbmVyXCIpO1xuICAgIGlmIChsYXN0UHJvamVjdCkge1xuICAgICAgbGFzdFByb2plY3QuY2xpY2soKTtcbiAgICAgIFByb2plY3Quc2VsZWN0ZWQuY29tcG9uZW50LnVwZGF0ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBzYXZlRGF0YSwgbG9hZERhdGEsIHNhdmVQcmlvcml0eURhdGEgfTtcbn0pKCk7XG4iLCJpbXBvcnQgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IGlkQXNzaWduZXIgZnJvbSBcIi4vaWRBc3NpZ25lclwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRvZG9Db21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Ub2RvQ29tcG9uZW50XCI7XG5pbXBvcnQgY2hlY2tlZCBmcm9tIFwiLi4vYXNzZXRzL2NoZWNrZWQuc3ZnXCI7XG5pbXBvcnQgdW5jaGVja2VkIGZyb20gXCIuLi9hc3NldHMvdW5jaGVja2VkLnN2Z1wiO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VNYW5hZ2VtZW50XCI7XG5cbi8qIDEuLSBCZSBhYmxlIHRvIGNyZWF0ZSBhbmQgZGVsZXRlIHRvZG8ncyDinJTvuI9cbiAgIDIuLSBJZiBhIHRvZG8ncyBpcyBhIHBhcmVudCwgdGhleSBnZXQgYWRkZWQgdG8gdGhlIHBlbmRpbmcgdGFza3Mgd2hlbiBjcmVhdGVkIOKclO+4j1xuICAgMy4tIElmIGEgcGFyZW50IHRvZG8gaXMgZGVsZXRlZCwgYWxsIGl0J3MgY2hpbGRyZW4gYXJlIGRlbGV0ZWQgYXMgd2VsbCDinJTvuI9cbiAgIDQuLSBPbmx5IHBhcmVudCdzIHRvZG8gd2lsbCBiZSBhZGRlZCB0byB0aGUgY29tcGxldGVkIHRhc2tzIGFycmF5LCBpZiBhIHBhcmVudCB0b2RvIGlzIGNoZWNrZWQsIGFsbCBpdCdzIGNoaWxkcmVuIHdpbGwgYmUg4pyU77iPXG4gICA1Li0gU29ydCB0aGUgcGVuZGluZyB0YXNrcyBhcnJheSBieSBwcmlvcml0eSwgYW5kIHNvcnQgdGhlIGNoaWxkcmVuIGFycmF5IGJ5IHByaW9yaXR5IGFzIHdlbGwgKi9cblxuY2xhc3MgVG9kbyB7XG4gICNwYXJlbnQ7XG4gICNjaGlsZHJlbjtcbiAgI2lkO1xuICAjaXNDaGVja2VkO1xuICAjcHJvamVjdDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB0aXRsZSxcbiAgICBkYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGlzQ2hlY2tlZCxcbiAgICBmaXJzdExvYWQgPSBmYWxzZSxcbiAgICBwYXJlbnQgPSBudWxsXG4gICkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy4jaXNDaGVja2VkID0gaXNDaGVja2VkO1xuICAgIHRoaXMuI2lkID0gaWRBc3NpZ25lci5nZXRJZE51bWJlcigpO1xuICAgIHRoaXMuI3BhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLiNwcm9qZWN0ID0gUHJvamVjdC5zZWxlY3RlZDtcbiAgICB0aGlzLmNvbXBvbmVudCA9IG51bGw7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLmZpcnN0TG9hZCA9IGZpcnN0TG9hZDtcbiAgICBpZiAodGhpcy4jcGFyZW50ID09PSBudWxsKSB7XG4gICAgICB0aGlzLiNjaGlsZHJlbiA9IFtdO1xuICAgICAgLy8gSWYgdGhlIHRvZG8gaXMgYWxyZWFkeSBjaGVja2VkIGFkZCBpdCB0byB0aGUgY29tcGxldGVkIHRhc2tzIGFycmF5XG4gICAgICAvLyBvZiB0aGUgcGFyZW50IHByb2plY3RcbiAgICAgIHRoaXMuY2hlY2tcbiAgICAgICAgPyBQcm9qZWN0LnNlbGVjdGVkLmFkZENvbXBsZXRlZCh0aGlzKVxuICAgICAgICA6IFByb2plY3Quc2VsZWN0ZWQuYWRkUGVuZGluZyh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jY2hpbGRyZW4gPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmZpcnN0TG9hZCAmJiAhdGhpcy5pc1N1YnRhc2soKSkge1xuICAgICAgU3RvcmFnZS5zYXZlRGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpcnN0TG9hZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZVRvZG8odGl0bGUsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgaXNDaGVja2VkLCBmaXJzdExvYWQpIHtcbiAgICBsZXQgYSA9IG5ldyBUb2RvKFxuICAgICAgdGl0bGUsXG4gICAgICBkYXRlLFxuICAgICAgcHJpb3JpdHksXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGlzQ2hlY2tlZCxcbiAgICAgIGZpcnN0TG9hZCxcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMuI2NoaWxkcmVuLnB1c2goYSk7XG4gICAgaWYgKCFmaXJzdExvYWQpIHtcbiAgICAgIFN0b3JhZ2Uuc2F2ZURhdGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYS5maXJzdExvYWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBlZGl0KHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIFN0b3JhZ2Uuc2F2ZURhdGEoKTtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jaWQ7XG4gIH1cblxuICBnZXQgY2hpbGRyZW4oKSB7XG4gICAgaWYgKHRoaXMuI2NoaWxkcmVuKSByZXR1cm4gWy4uLnRoaXMuI2NoaWxkcmVuXTtcbiAgICByZXR1cm4gdGhpcy4jY2hpbGRyZW47XG4gIH1cblxuICBnZXQgcGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLiNwYXJlbnQ7XG4gIH1cblxuICB0b2dnbGVDaGVjaygpIHtcbiAgICBpZiAodGhpcy4jaXNDaGVja2VkKSB7XG4gICAgICB0aGlzLnVuY2hlY2tUb2RvKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hlY2tUb2RvKCk7XG4gICAgfVxuICB9XG5cbiAgdW5jaGVja1RvZG8oKSB7XG4gICAgbGV0IGVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7XG4gICAgbGV0IGltZyA9XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGVja0J1dHRvbk1pbmlcIikuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgdGhpcy4jaXNDaGVja2VkID0gZmFsc2U7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkVGFza1wiKTtcbiAgICBpbWcuc3JjID0gdW5jaGVja2VkO1xuICAgIGlmICh0aGlzLiNwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIFRvZG9Db21wb25lbnQubW92ZVRvUGVuZGluZyhlbGVtZW50KTtcbiAgICAgIHRoaXMucHJvamVjdC5yZXN1bWVUb2RvKHRoaXMpO1xuICAgICAgdGhpcy5wcm9qZWN0LmNvbXBvbmVudC51cGRhdGUoKTtcbiAgICB9XG4gICAgU3RvcmFnZS5zYXZlRGF0YSgpO1xuICB9XG5cbiAgY2hlY2tUb2RvKCkge1xuICAgIGxldCBlbGVtZW50ID0gdGhpcy5kb21FbGVtZW50O1xuICAgIGxldCBpbWcgPVxuICAgICAgdGhpcy5kb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2tCdXR0b25NaW5pXCIpLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIHRoaXMuI2lzQ2hlY2tlZCA9IHRydWU7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkVGFza1wiKTtcbiAgICBpbWcuc3JjID0gY2hlY2tlZDtcbiAgICBpZiAodGhpcy4jcGFyZW50ID09PSBudWxsKSB7XG4gICAgICBUb2RvQ29tcG9uZW50Lm1vdmVUb0NvbXBsZXRlZChlbGVtZW50KTtcbiAgICAgIHRoaXMucHJvamVjdC5jb21wbGV0ZVRvZG8odGhpcyk7XG4gICAgICB0aGlzLnByb2plY3QuY29tcG9uZW50LnVwZGF0ZSgpO1xuICAgIH1cbiAgICBTdG9yYWdlLnNhdmVEYXRhKCk7XG4gIH1cblxuICBkZWxldGVUb2RvKHRhc2spIHtcbiAgICBpZiAodGhpcy5pc1N1YnRhc2soKSkge1xuICAgICAgdGhpcy5wYXJlbnQuZGVsZXRlKHRhc2spO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb2plY3QuZGVsZXRlVG9kbyh0YXNrKTtcbiAgICB9XG4gICAgU3RvcmFnZS5zYXZlRGF0YSgpO1xuICB9XG5cbiAgZGVsZXRlKHRhc2spIHtcbiAgICBsZXQgdGFza0luZGV4ID0gdGhpcy4jY2hpbGRyZW4uaW5kZXhPZih0YXNrKTtcbiAgICB0YXNrSW5kZXggPT09IDBcbiAgICAgID8gdGhpcy4jY2hpbGRyZW4uc2hpZnQoKVxuICAgICAgOiB0aGlzLiNjaGlsZHJlbi5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgfVxuXG4gIGdldCBwcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLiNwcm9qZWN0O1xuICB9XG5cbiAgZ2V0IGNoZWNrKCkge1xuICAgIHJldHVybiB0aGlzLiNpc0NoZWNrZWQ7XG4gIH1cblxuICBpc1N1YnRhc2soKSB7XG4gICAgcmV0dXJuIHRoaXMuI3BhcmVudCAhPT0gbnVsbDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgb2JqID0ge1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBkYXRlOiB0aGlzLmRhdGUsXG4gICAgICBwcmlvcml0eTogdGhpcy5wcmlvcml0eSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgaXNDaGVja2VkOiB0aGlzLiNpc0NoZWNrZWQsXG4gICAgfTtcbiAgICBpZiAoIXRoaXMuaXNTdWJ0YXNrKCkpIHtcbiAgICAgIG9iai5jaGlsZHJlbiA9IHt9O1xuICAgICAgdGhpcy4jY2hpbGRyZW4uZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgb2JqLmNoaWxkcmVuW2BzdWJ0YXNrJHtpbmRleH1gXSA9IHRhc2sudG9KU09OKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCB0b2RvT0JKID0gSlNPTi5wYXJzZShqc29uKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0b2RvT0JKLmNoaWxkcmVuKSB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodG9kb09CSi5jaGlsZHJlbiwga2V5KSkge1xuICAgICAgICB0b2RvT0JKLmNoaWxkcmVuW2tleV0gPSBKU09OLnBhcnNlKHRvZG9PQkouY2hpbGRyZW5ba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0b2RvT0JKO1xuICB9XG5cbiAgc3RhdGljIGxvYWRUb2RvKG9iaikge1xuICAgIGxldCB0b2RvID0gbmV3IFRvZG8oXG4gICAgICBvYmoudGl0bGUsXG4gICAgICBvYmouZGF0ZSxcbiAgICAgIG9iai5wcmlvcml0eSxcbiAgICAgIG9iai5kZXNjcmlwdGlvbixcbiAgICAgIG9iai5pc0NoZWNrZWQsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmouY2hpbGRyZW4pIHtcbiAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChvYmouY2hpbGRyZW4sIGtleSkpIHtcbiAgICAgICAgdG9kby5jcmVhdGVUb2RvKFxuICAgICAgICAgIG9iai5jaGlsZHJlbltrZXldLnRpdGxlLFxuICAgICAgICAgIG9iai5jaGlsZHJlbltrZXldLmRhdGUsXG4gICAgICAgICAgb2JqLmNoaWxkcmVuW2tleV0ucHJpb3JpdHksXG4gICAgICAgICAgb2JqLmNoaWxkcmVuW2tleV0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgb2JqLmNoaWxkcmVuW2tleV0uaXNDaGVja2VkLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvZG87XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy9JbXBvcnQgc3RhdGVtZW50c1xuaW1wb3J0IFwiLi9zdHlsZS9tYWluLnNjc3NcIjtcbmltcG9ydCBOZXJvcyBmcm9tIFwiLi9tb2R1bGVzL05lcm9zXCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9tb2R1bGVzL3RvZG9cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdFwiO1xuaW1wb3J0IHsgUHJpb3JpdHlDb21wb25lbnQgfSBmcm9tIFwiLi9tb2R1bGVzL2NvbXBvbmVudHMvUHJpb3JpdHlDb21wb25lbnRcIjtcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiLi9tb2R1bGVzL3N0b3JhZ2VNYW5hZ2VtZW50XCI7XG5cblN0b3JhZ2UubG9hZERhdGEoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==