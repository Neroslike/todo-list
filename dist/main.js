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
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n  background-color: #343a40;\n  height: 90%;\n  min-width: 75%;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: grid;\n  grid-template-columns: minmax(200px, 1.2fr) 2px 3fr;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border-radius: 10px;\n  border-top: #464e55 4px solid;\n  border-left: #464e55 2px solid;\n}\n\n.separator {\n  background-color: #212529;\n}\n\n.mainContent {\n  display: grid;\n  grid-template-rows: calc(65% - 2px) 2px 35%;\n}\n\n.pending {\n  overflow: hidden;\n  border-bottom: #15181c 2px solid;\n  border-left: #464e55 2px solid;\n  display: grid;\n  max-height: 100%;\n  grid-template-rows: min-content minmax(0, 100%);\n}\n\n.completed {\n  overflow: hidden;\n  border-top: #464e55 2px solid;\n  border-left: #464e55 2px solid;\n  display: grid;\n  grid-template-rows: min-content 1fr;\n}\n\n@media (max-width: 800px) {\n  .container {\n    width: 100%;\n    height: 100%;\n    grid-template-columns: 1fr;\n    border: none;\n    border-radius: 0;\n  }\n  .separator {\n    display: none;\n  }\n  .pending {\n    border-left: none;\n  }\n}\n.sidebar {\n  border-right: #15181c 2px solid;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.priorityName {\n  padding-left: 10px;\n  font-size: clamp(8px, 1vw, 64px);\n  margin: 0;\n  font-weight: 300;\n  align-self: center;\n  justify-self: center;\n}\n\n.priorityColorContainer {\n  background-color: #495057;\n  padding: clamp(8px, 0.3rem + 0.3vw, 64px);\n  outline: 2px solid #6c757d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.priorityColor {\n  border-radius: 50%;\n  height: clamp(14px, 0.5rem + 0.7vw, 64px);\n  width: clamp(14px, 0.5rem + 0.7vw, 64px);\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\n.priority {\n  background-color: #212529;\n  border-top: 2px solid #a0b1c3;\n  display: flex;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n}\n\n#priorities {\n  width: clamp(100px, 30% + 4vw, 600px);\n  display: flex;\n  flex-direction: column;\n  gap: clamp(6px, 0.3vw, 12px);\n  margin-bottom: clamp(10px, 0.7vw, 16px);\n}\n\n.priorityColorContainer .priorityColor {\n  height: clamp(14px, 0.5rem + 0.4vw, 64px);\n  width: clamp(14px, 0.5rem + 0.4vw, 64px);\n}\n\n@media (max-width: 800px) {\n  .sidebar {\n    display: none;\n  }\n}\n.sidebarButtons {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6vw;\n}\n\n.TodosContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 50px;\n  overflow-y: scroll;\n}\n\n.taskContainer {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: clamp(4px, 0.4vw, 8px);\n}\n\n.task {\n  display: flex;\n  background-color: #212529;\n  width: 100%;\n  min-width: max-content;\n  border-radius: 14px;\n  overflow: hidden;\n  border-top: 2px solid #a0b1c3;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n  justify-content: space-between;\n  margin: clamp(2px, 0.3vw, 8px) 0;\n}\n\n.taskMiniContainer {\n  background-color: #495057;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: clamp(8px, 0.5rem + 0.5vw, 64px);\n  cursor: pointer;\n  user-select: none;\n}\n\n.taskColor {\n  height: clamp(14px, 0.5rem + 0.7vw, 64px);\n  width: clamp(14px, 0.5rem + 0.7vw, 64px);\n  background-color: #e81616;\n  border-radius: 50%;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\n.taskButton {\n  height: clamp(14px, 0.5rem + 0.7vw, 64px);\n  width: clamp(14px, 0.5rem + 0.7vw, 64px);\n}\n\n.taskMiniContainer:nth-last-of-type(-n + 2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskMiniContainer:nth-child(-n+2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskTime {\n  padding-left: calc(1rem + 1vw);\n  padding-right: 10px;\n}\n.taskTime p {\n  white-space: nowrap;\n  color: #adb5bd;\n}\n\n.taskTitle {\n  margin-right: auto;\n  flex: 1;\n  padding-left: 10px;\n  width: clamp(150px, 10vw + 10rem, 500px);\n}\n.taskTitle p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.taskTitle,\n.taskTime {\n  justify-self: center;\n  align-self: center;\n}\n.taskTitle p,\n.taskTime p {\n  font-size: clamp(8px, 0.5rem + 0.7vw, 64px);\n  margin: 0;\n}\n\n.subtasksContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  align-self: flex-end;\n  width: 90%;\n}\n\n.subtask {\n  margin: clamp(2px, 0.1vw, 4px) 0;\n}\n.subtask .taskMiniContainer {\n  padding: clamp(8px, 0.4rem + 0.4vw, 48px);\n}\n.subtask .taskMiniContainer .taskButton {\n  height: clamp(10px, 0.5rem + 0.4vw, 36px);\n  width: clamp(10px, 0.5rem + 0.4vw, 36px);\n}\n.subtask .taskMiniContainer .taskColor {\n  width: clamp(10px, 0.5rem + 0.4vw, 36px);\n  height: clamp(10px, 0.5rem + 0.4vw, 36px);\n}\n.subtask .taskTitle p,\n.subtask .taskTime p {\n  font-size: clamp(6px, 0.5rem + 0.4vw, 36px);\n}\n\n.completedTask {\n  text-decoration: line-through;\n  opacity: 0.6;\n  border: none;\n  box-shadow: 0px 2px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n}\n\n.taskDataContainer {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  flex: 1 2;\n  cursor: pointer;\n}\n\n.addSubtask {\n  margin-top: 0.3vw;\n  align-self: flex-start;\n}\n\n.modal {\n  background-color: hsla(0deg, 0%, 0%, 0.502);\n  backdrop-filter: blur(3px);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#modalContainer {\n  background-color: #343a40;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border: 1px solid gray;\n  border-radius: 12px;\n  position: relative;\n  height: max-content;\n  max-height: 70vh;\n  width: max-content;\n  overflow-y: scroll;\n}\n\n.closeButton {\n  position: sticky;\n  top: 1vw;\n  left: 1vw;\n  height: 1.3vw;\n  width: 1.3vw;\n  z-index: 1;\n}\n\n.closeButton:hover {\n  cursor: pointer;\n}\n\nhr {\n  background-color: gray;\n  height: 1px;\n  border: none;\n}\n\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4vw;\n}\n.field label {\n  font-size: calc(1vw + 6px);\n}\n.field input,\n.field select,\n.field textarea {\n  font-size: calc(0.8vw + 4px);\n  border: none;\n  outline: none;\n  background: #212529;\n  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n  padding: calc(0.5vw + 2px);\n  border-radius: 0.5vw;\n  color: #f8f9fa;\n}\n\n.DuedateField input {\n  font-size: calc(0.8vw + 4px);\n}\n.DuedateField ::-webkit-calendar-picker-indicator {\n  padding: 5px;\n  cursor: pointer;\n  border-radius: 3px;\n  filter: invert(1);\n}\n\n.newForm {\n  min-width: 35vw;\n  padding: 0 calc(1vw + 6px) calc(1vw + 6px) calc(1vw + 6px);\n  display: grid;\n  grid-template-columns: min-content 2fr;\n  gap: calc(0.5vw + 4px);\n}\n\n.TitleField {\n  grid-column: 1/3;\n}\n\n.DescriptionField {\n  grid-column: 1/3;\n}\n.DescriptionField textarea {\n  resize: none;\n  height: 20vh;\n  max-height: 20vh;\n}\n\n.PriorityField select {\n  height: 100%;\n  appearance: none;\n  cursor: pointer;\n  background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg) no-repeat right 0.8em center/1.4em, #212529;\n  /* Remove focus outline */\n  /* Remove IE arrow */\n}\n.PriorityField select:focus {\n  outline: none;\n}\n.PriorityField select::-ms-expand {\n  display: none;\n}\n\n.newTitle {\n  padding: 0;\n  margin: 0;\n  padding: calc(1vw + 6px);\n}\n\n.createButton {\n  grid-column: 1/3;\n  width: max-content;\n  justify-self: center;\n}\n\n.titleView {\n  padding: 0;\n  margin: 0;\n  user-select: auto;\n  overflow-wrap: break-word;\n  text-align: center;\n  max-width: fit-content;\n  word-break: break-word;\n}\n\n.titleViewContainer {\n  display: flex;\n  justify-content: center;\n  margin: 0 2vw;\n}\n\n.descriptionViewContainer {\n  margin: 0 1vw;\n}\n\n.infoContainer {\n  display: grid;\n  min-width: clamp(250px, 70vh, 1000px);\n  grid-template-rows: 1fr auto max-content auto max-content;\n}\n\n.dateViewContainer {\n  display: flex;\n  flex-direction: column;\n}\n\nh3 {\n  margin: 0;\n}\n\n.dateStringContainer {\n  display: flex;\n}\n.dateStringContainer p {\n  margin: 0;\n  font-size: clamp(8px, 1vw, 64px);\n  font-weight: 300;\n}\n\n.priorityViewContainer {\n  display: flex;\n  flex-direction: column;\n}\n\n.todoDataContainer {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.todoDataContainer .priority {\n  border: none;\n}\n.todoDataContainer .priority .priorityName {\n  padding-right: 10px;\n}\n\n.mainTaskContainer {\n  border-bottom: #15181c 2px solid;\n  padding: 0 1vw 1vw 1vw;\n}\n\n.viewSubContainer {\n  border-top: #464e55 2px solid;\n  border-bottom: #15181c 2px solid;\n  padding: 1vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.viewSubContainer h1 {\n  padding: 0;\n  margin: 0;\n}\n\n.descriptionView {\n  max-width: fit-content;\n  overflow-wrap: break-word;\n}\n\n.ButtonsView {\n  border-top: #464e55 2px solid;\n  display: flex;\n  gap: 0.8vw;\n  justify-content: center;\n  width: 100%;\n  padding: 1vw 0;\n  position: sticky;\n  bottom: 0;\n  background-color: #343a40;\n}\n\n#projects {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5vw;\n  width: 100%;\n}\n\n.projectContainer {\n  background-color: hsla(200deg, 7%, 8%, 0.6);\n  width: 100%;\n  padding: 0.5vw 0 0.5vw 0.7vw;\n  cursor: pointer;\n  transition: background-color 0.2s ease-out 0s;\n}\n\n.projectContainer:hover {\n  background-color: hsl(200deg, 7%, 8%);\n}\n\n#selectedProject {\n  background-color: hsl(200deg, 7%, 8%);\n}\n\nbutton i {\n  margin-right: 0.5vw;\n}\n\nhtml {\n  font-size: 16px;\n  font-family: \"Poppins\", sans-serif;\n  color: #f8f9fa;\n}\n\nbody {\n  background: linear-gradient(119.75deg, #6e9ecf 13.02%, #12263a 100%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nh1 {\n  text-align: center;\n  font-size: 1.5vw;\n  padding: 0;\n  margin: 0.7vw 0;\n  user-select: none;\n}\n\n.projectTitle {\n  font-size: 1vw;\n  font-weight: 500;\n  padding: 0;\n  margin: 0;\n}\n\n.hidden {\n  display: none;\n}\n\nbutton {\n  background: #2887c8;\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px #6bb2e3;\n  border-radius: 8px;\n  outline: none;\n  border: none;\n  color: #f8f9fa;\n  padding: 6px 10px;\n  font-size: 1.1vw;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  cursor: pointer;\n}\n\n.deleteButton {\n  background: hsl(0deg, 82%, 63%);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px hsl(0deg, 67%, 77%);\n}\n\n.editButton {\n  background: rgb(111, 184, 55);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px rgb(188, 229, 156);\n}", "",{"version":3,"sources":["webpack://./src/style/_container.scss","webpack://./src/style/main.scss","webpack://./src/style/_priorities.scss","webpack://./src/style/_task.scss","webpack://./src/style/_modal.scss","webpack://./src/style/_form.scss","webpack://./src/style/_viewTodo.scss","webpack://./src/style/_project.scss"],"names":[],"mappings":"AAAA;EACE,yBAAA;EACA,WAAA;EACA,cAAA;EACA,eAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,aAAA;EACA,mDAAA;EACA,0CAAA;EACA,mBAAA;EACA,6BAAA;EACA,8BAAA;ACCF;;ADEA;EACE,yBAAA;ACCF;;ADEA;EACE,aAAA;EACA,2CAAA;ACCF;;ADEA;EACE,gBAAA;EACA,gCAAA;EACA,8BAAA;EACA,aAAA;EACA,gBAAA;EACA,+CAAA;ACCF;;ADEA;EACE,gBAAA;EACA,6BAAA;EACA,8BAAA;EACA,aAAA;EACA,mCAAA;ACCF;;ADEA;EACE;IACE,WAAA;IACA,YAAA;IACA,0BAAA;IACA,YAAA;IACA,gBAAA;ECCF;EDEA;IACE,aAAA;ECAF;EDGA;IACE,iBAAA;ECDF;AACF;ADIA;EACE,+BAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;ACFF;;AC1DA;EACE,kBAAA;EACA,gCANqB;EAOrB,SAAA;EACA,gBAAA;EACA,kBAAA;EACA,oBAAA;AD6DF;;AC1DA;EACE,yBAAA;EACA,yCAAA;EACA,0BAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AD6DF;;AC1DA;EACE,kBAAA;EACA,yCAvBuB;EAwBvB,wCAxBuB;EAyBvB,0CAAA;AD6DF;;AC1DA;EACE,yBAAA;EACA,6BAAA;EACA,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,0CAAA;AD6DF;;AC1DA;EACE,qCAAA;EACA,aAAA;EACA,sBAAA;EACA,4BAAA;EACA,uCAAA;AD6DF;;ACzDE;EACE,yCA9CmB;EA+CnB,wCA/CmB;AD2GvB;;ACxDA;EACE;IACE,aAAA;ED2DF;AACF;ACxDA;EACE,aAAA;EACA,sBAAA;EACA,UAAA;AD0DF;;AEpHA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;AFuHF;;AEpHA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EACA,qCAAA;AFuHF;;AEpHA;EACE,aAAA;EACA,yBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;EACA,6BAAA;EACA,0CAAA;EACA,8BAAA;EACA,gCAAA;AFuHF;;AEpHA;EACE,yBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,yCAAA;EACA,eAAA;EACA,iBAAA;AFuHF;;AEpHA;EACE,yCA1C2B;EA2C3B,wCA3C2B;EA4C3B,yBAAA;EACA,kBAAA;EACA,0CAAA;AFuHF;;AEpHA;EACE,yCAlD2B;EAmD3B,wCAnD2B;AF0K7B;;AEpHA;EACE,0BAAA;AFuHF;;AEpHA;EACE,0BAAA;AFuHF;;AEpHA;EACE,8BAAA;EACA,mBAAA;AFuHF;AErHE;EACE,mBAAA;EACA,cAAA;AFuHJ;;AEnHA;EACE,kBAAA;EACA,OAAA;EACA,kBAAA;EACA,wCAAA;AFsHF;AEpHE;EACE,gBAAA;EACA,uBAAA;EACA,mBAAA;AFsHJ;;AElHA;;EAEE,oBAAA;EACA,kBAAA;AFqHF;AEpHE;;EACE,2CA3FuB;EA4FvB,SAAA;AFuHJ;;AEnHA;EACE,aAAA;EACA,sBAAA;EACA,qBAAA;EACA,oBAAA;EACA,UAAA;AFsHF;;AEnHA;EACE,gCAAA;AFsHF;AEnHE;EACE,yCAAA;AFqHJ;AEnHI;EACE,yCA7GyB;EA8GzB,wCA9GyB;AFmO/B;AElHI;EACE,wCAlHyB;EAmHzB,yCAnHyB;AFuO/B;AE9GI;;EACE,2CA3HuB;AF4O7B;;AE5GA;EACE,6BAAA;EACA,YAAA;EACA,YAAA;EACA,uFAAA;AF+GF;;AE5GA;EACE,aAAA;EACA,8BAAA;EACA,WAAA;EACA,SAAA;EACA,eAAA;AF+GF;;AE5GA;EACE,iBAAA;EACA,sBAAA;AF+GF;;AGlQA;EACE,2CAAA;EACA,0BAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AHqQF;;AGlQA;EACE,yBAAA;EACA,0CAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;AHqQF;;AGlQA;EACE,gBAAA;EACA,QAAA;EACA,SAAA;EACA,aAAA;EACA,YAAA;EACA,UAAA;AHqQF;;AGlQA;EACE,eAAA;AHqQF;;AGlQA;EACE,sBAAA;EACA,WAAA;EACA,YAAA;AHqQF;;AIlTA;EACE,aAAA;EACA,sBAAA;EACA,UAAA;AJqTF;AInTE;EACE,0BAAA;AJqTJ;AIlTE;;;EAGE,4BAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uFAAA;EACA,0BAAA;EACA,oBAAA;EACA,cAAA;AJoTJ;;AI/SE;EACE,4BAAA;AJkTJ;AI/SE;EACE,YAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;AJiTJ;;AI7SA;EACE,eAAA;EACA,0DAAA;EACA,aAAA;EACA,sCAAA;EACA,sBAAA;AJgTF;;AI7SA;EACE,gBAAA;AJgTF;;AI7SA;EACE,gBAAA;AJgTF;AI9SE;EACE,YAAA;EACA,YAAA;EACA,gBAAA;AJgTJ;;AI3SE;EACE,YAAA;EACA,gBAAA;EACA,eAAA;EACA,2JAAA;EAGA,yBAAA;EAIA,oBAAA;AJySJ;AI5SI;EACE,aAAA;AJ8SN;AI3SI;EACE,aAAA;AJ6SN;;AIxSA;EACE,UAAA;EACA,SAAA;EACA,wBAAA;AJ2SF;;AIxSA;EACE,gBAAA;EACA,kBAAA;EACA,oBAAA;AJ2SF;;AKjYA;EACE,UAAA;EACA,SAAA;EACA,iBAAA;EACA,yBAAA;EACA,kBAAA;EACA,sBAAA;EACA,sBAAA;ALoYF;;AKjYA;EACE,aAAA;EACA,uBAAA;EACA,aAAA;ALoYF;;AKjYA;EACE,aAAA;ALoYF;;AKjYA;EACE,aAAA;EACA,qCAAA;EACA,yDAAA;ALoYF;;AKjYA;EACE,aAAA;EACA,sBAAA;ALoYF;;AKjYA;EACE,SAAA;ALoYF;;AKjYA;EACE,aAAA;ALoYF;AKlYE;EACE,SAAA;EACA,gCAAA;EACA,gBAAA;ALoYJ;;AKhYA;EACE,aAAA;EACA,sBAAA;ALmYF;;AKhYA;EACE,aAAA;EACA,6BAAA;EACA,mBAAA;ALmYF;AKjYE;EACE,YAAA;ALmYJ;AKlYI;EACE,mBAAA;ALoYN;;AK/XA;EACE,gCAAA;EACA,sBAAA;ALkYF;;AK/XA;EACE,6BAAA;EACA,gCAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;ALkYF;AKhYE;EACE,UAAA;EACA,SAAA;ALkYJ;;AK9XA;EACE,sBAAA;EACA,yBAAA;ALiYF;;AK9XA;EACE,6BAAA;EACA,aAAA;EACA,UAAA;EACA,uBAAA;EACA,WAAA;EACA,cAAA;EACA,gBAAA;EACA,SAAA;EACA,yBAAA;ALiYF;;AMjeA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;ANoeF;;AMjeA;EACE,2CAAA;EACA,WAAA;EACA,4BAAA;EACA,eAAA;EACA,6CAAA;ANoeF;;AMjeA;EACE,qCAAA;ANoeF;;AMjeA;EACE,qCAAA;ANoeF;;AMheE;EACE,mBAAA;ANmeJ;;AA3fA;EACE,eAAA;EACA,kCAAA;EACA,cAAA;AA8fF;;AA3fA;EACE,oEAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AA8fF;;AA3fA;EACE,kBAAA;EAEA,gBAAA;EACA,UAAA;EACA,eAAA;EACA,iBAAA;AA6fF;;AA1fA;EACE,cAAA;EACA,gBAAA;EACA,UAAA;EACA,SAAA;AA6fF;;AA1fA;EACE,aAAA;AA6fF;;AA1fA;EACE,mBAAA;EACA,qEAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kCAAA;EACA,eAAA;AA6fF;;AA1fA;EACE,+BAAA;EACA,iFAAA;AA6fF;;AA1fA;EACE,6BAAA;EACA,gFAAA;AA6fF","sourcesContent":[".container {\n  background-color: #343a40;\n  height: 90%;\n  min-width: 75%;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: grid;\n  grid-template-columns: minmax(200px, 1.2fr) 2px 3fr;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border-radius: 10px;\n  border-top: #464e55 4px solid;\n  border-left: #464e55 2px solid;\n}\n\n.separator {\n  background-color: #212529;\n}\n\n.mainContent {\n  display: grid;\n  grid-template-rows: calc(65% - 2px) 2px 35%;\n}\n\n.pending {\n  overflow: hidden;\n  border-bottom: #15181c 2px solid;\n  border-left: #464e55 2px solid;\n  display: grid;\n  max-height: 100%;\n  grid-template-rows: min-content minmax(0, 100%);\n}\n\n.completed {\n  overflow: hidden;\n  border-top: #464e55 2px solid;\n  border-left: #464e55 2px solid;\n  display: grid;\n  grid-template-rows: min-content 1fr;\n}\n\n@media (max-width: 800px) {\n  .container {\n    width: 100%;\n    height: 100%;\n    grid-template-columns: 1fr;\n    border: none;\n    border-radius: 0;\n  }\n\n  .separator {\n    display: none;\n  }\n\n  .pending {\n    border-left: none;\n  }\n}\n\n.sidebar {\n  border-right: #15181c 2px solid;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n","@import \"./index\";\n\nhtml {\n  font-size: 16px;\n  font-family: \"Poppins\", sans-serif;\n  color: #f8f9fa;\n}\n\nbody {\n  background: linear-gradient(119.75deg, #6e9ecf 13.02%, #12263a 100%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nh1 {\n  text-align: center;\n  // font-size: calc(1rem + 1vw);\n  font-size: 1.5vw;\n  padding: 0;\n  margin: 0.7vw 0;\n  user-select: none;\n}\n\n.projectTitle {\n  font-size: 1vw;\n  font-weight: 500;\n  padding: 0;\n  margin: 0;\n}\n\n.hidden {\n  display: none;\n}\n\nbutton {\n  background: #2887c8;\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px #6bb2e3;\n  border-radius: 8px;\n  outline: none;\n  border: none;\n  color: #f8f9fa;\n  padding: 6px 10px;\n  font-size: 1.1vw;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  cursor: pointer;\n}\n\n.deleteButton {\n  background: hsl(0, 82%, 63%);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px hsl(0, 67%, 77%);\n}\n\n.editButton {\n  background: rgb(111, 184, 55);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px rgb(188, 229, 156);\n}\n","$responsive-text-size: clamp(8px, 1vw, 64px);\n$responsive-button-size: clamp(14px, calc(0.5rem + 0.7vw), 64px);\n$responsive-prio-size: clamp(14px, calc(0.5rem + 0.4vw), 64px);\n\n.priorityName {\n  padding-left: 10px;\n  font-size: $responsive-text-size;\n  margin: 0;\n  font-weight: 300;\n  align-self: center;\n  justify-self: center;\n}\n\n.priorityColorContainer {\n  background-color: #495057;\n  padding: clamp(8px, calc(0.3rem + 0.3vw), 64px);\n  outline: 2px solid #6c757d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.priorityColor {\n  border-radius: 50%;\n  height: $responsive-button-size;\n  width: $responsive-button-size;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\n.priority {\n  background-color: #212529;\n  border-top: 2px solid #a0b1c3;\n  display: flex;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n}\n\n#priorities {\n  width: clamp(100px, calc(30% + 4vw), 600px);\n  display: flex;\n  flex-direction: column;\n  gap: clamp(6px, 0.3vw, 12px);\n  margin-bottom: clamp(10px, 0.7vw, 16px);\n}\n\n.priorityColorContainer {\n  .priorityColor {\n    height: $responsive-prio-size;\n    width: $responsive-prio-size;\n  }\n}\n\n@media (max-width: 800px) {\n  .sidebar {\n    display: none;\n  }\n}\n\n.sidebarButtons {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6vw;\n}\n","$big-responsive-text-size: clamp(8px, calc(0.5rem + 0.7vw), 64px);\n$big-responsive-button-size: clamp(14px, calc(0.5rem + 0.7vw), 64px);\n$small-responsive-text-size: clamp(6px, calc(0.5rem + 0.4vw), 36px);\n$small-responsive-button-size: clamp(10px, calc(0.5rem + 0.4vw), 36px);\n.TodosContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 50px;\n  overflow-y: scroll;\n}\n\n.taskContainer {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: clamp(4px, 0.4vw, 8px);\n}\n\n.task {\n  display: flex;\n  background-color: #212529;\n  width: 100%;\n  min-width: max-content;\n  border-radius: 14px;\n  overflow: hidden;\n  border-top: 2px solid #a0b1c3;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n  justify-content: space-between;\n  margin: clamp(2px, 0.3vw, 8px) 0;\n}\n\n.taskMiniContainer {\n  background-color: #495057;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: clamp(8px, calc(0.5rem + 0.5vw), 64px);\n  cursor: pointer;\n  user-select: none;\n}\n\n.taskColor {\n  height: $big-responsive-button-size;\n  width: $big-responsive-button-size;\n  background-color: #e81616;\n  border-radius: 50%;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\n.taskButton {\n  height: $big-responsive-button-size;\n  width: $big-responsive-button-size;\n}\n\n.taskMiniContainer:nth-last-of-type(-n + 2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskMiniContainer:nth-child(-n + 2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskTime {\n  padding-left: calc(1rem + 1vw);\n  padding-right: 10px;\n\n  p {\n    white-space: nowrap;\n    color: #adb5bd;\n  }\n}\n\n.taskTitle {\n  margin-right: auto;\n  flex: 1;\n  padding-left: 10px;\n  width: clamp(150px, calc(10vw + 10rem), 500px);\n\n  p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n}\n\n.taskTitle,\n.taskTime {\n  justify-self: center;\n  align-self: center;\n  p {\n    font-size: $big-responsive-text-size;\n    margin: 0;\n  }\n}\n\n.subtasksContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  align-self: flex-end;\n  width: 90%;\n}\n\n.subtask {\n  margin: clamp(2px, 0.1vw, 4px) 0;\n  // justify-content: center;\n\n  .taskMiniContainer {\n    padding: clamp(8px, calc(0.4rem + 0.4vw), 48px);\n\n    .taskButton {\n      height: $small-responsive-button-size;\n      width: $small-responsive-button-size;\n    }\n\n    .taskColor {\n      width: $small-responsive-button-size;\n      height: $small-responsive-button-size;\n    }\n  }\n\n  .taskTitle,\n  .taskTime {\n    p {\n      font-size: $small-responsive-text-size;\n    }\n  }\n}\n\n.completedTask {\n  text-decoration: line-through;\n  opacity: 0.6;\n  border: none;\n  box-shadow: 0px 2px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n}\n\n.taskDataContainer {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  flex: 1 2;\n  cursor: pointer;\n}\n\n.addSubtask {\n  margin-top: 0.3vw;\n  align-self: flex-start;\n}\n",".modal {\n  background-color: hsla(0, 0%, 0%, 0.502);\n  backdrop-filter: blur(3px);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#modalContainer {\n  background-color: #343a40;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border: 1px solid gray;\n  border-radius: 12px;\n  position: relative;\n  height: max-content;\n  max-height: 70vh;\n  width: max-content;\n  overflow-y: scroll;\n}\n\n.closeButton {\n  position: sticky;\n  top: 1vw;\n  left: 1vw;\n  height: 1.3vw;\n  width: 1.3vw;\n  z-index: 1;\n}\n\n.closeButton:hover {\n  cursor: pointer;\n}\n\nhr {\n  background-color: gray;\n  height: 1px;\n  border: none;\n}\n",".field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4vw;\n\n  label {\n    font-size: calc(1vw + 6px);\n  }\n\n  input,\n  select,\n  textarea {\n    font-size: calc(0.8vw + 4px);\n    border: none;\n    outline: none;\n    background: #212529;\n    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n    padding: calc(0.5vw + 2px);\n    border-radius: 0.5vw;\n    color: #f8f9fa;\n  }\n}\n\n.DuedateField {\n  input {\n    font-size: calc(0.8vw + 4px);\n  }\n\n  ::-webkit-calendar-picker-indicator {\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 3px;\n    filter: invert(1);\n  }\n}\n\n.newForm {\n  min-width: 35vw;\n  padding: 0 calc(1vw + 6px) calc(1vw + 6px) calc(1vw + 6px);\n  display: grid;\n  grid-template-columns: min-content 2fr;\n  gap: calc(0.5vw + 4px);\n}\n\n.TitleField {\n  grid-column: 1 / 3;\n}\n\n.DescriptionField {\n  grid-column: 1 / 3;\n\n  textarea {\n    resize: none;\n    height: 20vh;\n    max-height: 20vh;\n  }\n}\n\n.PriorityField {\n  select {\n    height: 100%;\n    appearance: none;\n    cursor: pointer;\n    background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg)\n        no-repeat right 0.8em center / 1.4em,\n      #212529;\n    /* Remove focus outline */\n    &:focus {\n      outline: none;\n    }\n    /* Remove IE arrow */\n    &::-ms-expand {\n      display: none;\n    }\n  }\n}\n\n.newTitle {\n  padding: 0;\n  margin: 0;\n  padding: calc(1vw + 6px);\n}\n\n.createButton {\n  grid-column: 1/3;\n  width: max-content;\n  justify-self: center;\n}\n",".titleView {\n  padding: 0;\n  margin: 0;\n  user-select: auto;\n  overflow-wrap: break-word;\n  text-align: center;\n  max-width: fit-content;\n  word-break: break-word;\n}\n\n.titleViewContainer {\n  display: flex;\n  justify-content: center;\n  margin: 0 2vw;\n}\n\n.descriptionViewContainer {\n  margin: 0 1vw;\n}\n\n.infoContainer {\n  display: grid;\n  min-width: clamp(250px, 70vh, 1000px);\n  grid-template-rows: 1fr auto max-content auto max-content;\n}\n\n.dateViewContainer {\n  display: flex;\n  flex-direction: column;\n}\n\nh3 {\n  margin: 0;\n}\n\n.dateStringContainer {\n  display: flex;\n\n  p {\n    margin: 0;\n    font-size: clamp(8px, 1vw, 64px);\n    font-weight: 300;\n  }\n}\n\n.priorityViewContainer {\n  display: flex;\n  flex-direction: column;\n}\n\n.todoDataContainer {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n\n  .priority {\n    border: none;\n    .priorityName {\n      padding-right: 10px;\n    }\n  }\n}\n\n.mainTaskContainer {\n  border-bottom: #15181c 2px solid;\n  padding: 0 1vw 1vw 1vw;\n}\n\n.viewSubContainer {\n  border-top: #464e55 2px solid;\n  border-bottom: #15181c 2px solid;\n  padding: 1vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  h1 {\n    padding: 0;\n    margin: 0;\n  }\n}\n\n.descriptionView {\n  max-width: fit-content;\n  overflow-wrap: break-word;\n}\n\n.ButtonsView {\n  border-top: #464e55 2px solid;\n  display: flex;\n  gap: 0.8vw;\n  justify-content: center;\n  width: 100%;\n  padding: 1vw 0;\n  position: sticky;\n  bottom: 0;\n  background-color: #343a40;\n}\n","#projects {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5vw;\n  width: 100%;\n}\n\n.projectContainer {\n  background-color: hsla(200, 7%, 8%, 60%);\n  width: 100%;\n  padding: 0.5vw 0 0.5vw 0.7vw;\n  cursor: pointer;\n  transition: background-color 0.2s ease-out 0s;\n}\n\n.projectContainer:hover {\n  background-color: hsla(200, 7%, 8%, 100%);\n}\n\n#selectedProject {\n  background-color: hsla(200, 7%, 8%, 100%);\n}\n\nbutton {\n  i {\n    margin-right: 0.5vw;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _components_ProjectComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ProjectComponent */ "./src/modules/components/ProjectComponent.js");


class Neros {
  constructor(selector) {
    this.components = {};
    this.NerosElement = document.querySelector(`#${selector}`);
  }

  static projects = new Neros("projects");

  static deleteComponent(neros, component) {
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
          <input type='text' name='Title' id='Title'>
        </div>
        <div class='field DuedateField'>
          <label for='Due date'>Due date</label>
          <input type='date' name='Duedate' id='Due date'>
        </div>
        <div class='field PriorityField'>
          <label for='Priority'>Priority</label>
          <select name="Priority" id="Priority">
            <option value="Urgent">Urgent</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
            <option value="Optional">Optional</option>
          </select>
        </div>
        <div class='field DescriptionField'>
          <label for='Description'>Description</label>
          <input type='text' name='Description' id='Description'>
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
      this.createTodo(form);
    });
    return element;
  }

  update() {
    let projectComponent = _project__WEBPACK_IMPORTED_MODULE_2__["default"].selected.component;
    let project = _project__WEBPACK_IMPORTED_MODULE_2__["default"].selected;

    projectComponent.displayTodos("pending", project.pending);
    projectComponent.displayTodos("completed", project.completed);
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
    this.update();
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
    project[project.length - 1].click();
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
    let modalElement = new _Neros__WEBPACK_IMPORTED_MODULE_1__["default"]("modalContainer");
    let newTodo = new _NewTodoComponent__WEBPACK_IMPORTED_MODULE_3__.NewTodoComponent("newTodo", { parent: parent });

    modalElement.registerComponent(newTodo);
    _modal__WEBPACK_IMPORTED_MODULE_4__["default"].show();
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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _components_ProjectComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProjectComponent */ "./src/modules/components/ProjectComponent.js");
/* harmony import */ var _Neros__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Neros */ "./src/modules/Neros.js");





const helper = (() => {
  // This method finds the element matching the ID on the given array and deletes it by index
  const deleteItem = (array, id) => {
    let found = findTask([...array], id);
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

  // Merge sort algorithm

  const mergeSort = (array) => {
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
    _Neros__WEBPACK_IMPORTED_MODULE_2__["default"].deleteComponent(_Neros__WEBPACK_IMPORTED_MODULE_2__["default"].projects, _project__WEBPACK_IMPORTED_MODULE_0__["default"].selected.component);
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
/* harmony import */ var _components_ProjectComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ProjectComponent */ "./src/modules/components/ProjectComponent.js");





const modal = (() => {
  let modalElement = document.querySelector("#modal");
  let modalContainer = document.querySelector("#modalContainer");
  let addTodoBtn = document.querySelector("#addBigTodo");
  let addProjectBtn = document.querySelector("#addProject");

  const hide = () => {
    modalElement.classList.add("hidden");
    resetModal();
  };

  const show = () => {
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
    let modal = new _Neros__WEBPACK_IMPORTED_MODULE_0__["default"]("modalContainer");
    let newTodo = new _components_NewTodoComponent__WEBPACK_IMPORTED_MODULE_1__.NewTodoComponent("newTodo", { parent: null });

    modal.registerComponent(newTodo);
    show();
  });

  // Add event listener to 'Add new project' button

  addProjectBtn.addEventListener("click", () => {
    let modal = new _Neros__WEBPACK_IMPORTED_MODULE_0__["default"]("modalContainer");
    let newProject = new _components_NewProjectComponent__WEBPACK_IMPORTED_MODULE_2__.NewProjectComponent("newProject");

    modal.registerComponent(newProject);
    show();
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
/* harmony import */ var _modules_components_NewTodoComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/components/NewTodoComponent */ "./src/modules/components/NewTodoComponent.js");
/* harmony import */ var _modules_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/helper */ "./src/modules/helper.js");
/* harmony import */ var _modules_components_new__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/components/new */ "./src/modules/components/new.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxhQUFhLGVBQWUsYUFBYSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sYUFBYSxlQUFlLFFBQVEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sYUFBYSxlQUFlLGFBQWEsV0FBVyxXQUFXLE9BQU8sTUFBTSxhQUFhLGVBQWUsUUFBUSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE1BQU0sT0FBTyxhQUFhLFlBQVksT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sYUFBYSxlQUFlLE9BQU8sTUFBTSxhQUFhLGVBQWUsT0FBTyxPQUFPLGFBQWEsUUFBUSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sUUFBUSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8s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Q1E7O0FBRTlDO0FBQ0Esb0JBQW9CLHdEQUFPO0FBQzNCLGlFQUFnQjtBQUNoQixzQkFBc0IsK0RBQWM7O0FBRXBDLGdCQUFnQixxREFBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHdEQUFPO0FBQzVCOztBQUVBLGdCQUFnQixxREFBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvbWFpbi5zY3NzP2EyMjEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvRE9NSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9OZXJvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL01pbmlDb250YWluZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9OZXdQcm9qZWN0Q29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvTmV3VG9kb0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL1Byb2plY3RDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9UYXNrQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvVG9kb0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL25ldy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaWRBc3NpZ25lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcXG4gIGhlaWdodDogOTAlO1xcbiAgbWluLXdpZHRoOiA3NSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAxLjJmcikgMnB4IDNmcjtcXG4gIGJveC1zaGFkb3c6IDhweCA4cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItdG9wOiAjNDY0ZTU1IDRweCBzb2xpZDtcXG4gIGJvcmRlci1sZWZ0OiAjNDY0ZTU1IDJweCBzb2xpZDtcXG59XFxuXFxuLnNlcGFyYXRvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xcbn1cXG5cXG4ubWFpbkNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogY2FsYyg2NSUgLSAycHgpIDJweCAzNSU7XFxufVxcblxcbi5wZW5kaW5nIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItYm90dG9tOiAjMTUxODFjIDJweCBzb2xpZDtcXG4gIGJvcmRlci1sZWZ0OiAjNDY0ZTU1IDJweCBzb2xpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW5tYXgoMCwgMTAwJSk7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci10b3A6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbiAgYm9yZGVyLWxlZnQ6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgfVxcbiAgLnNlcGFyYXRvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAucGVuZGluZyB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgfVxcbn1cXG4uc2lkZWJhciB7XFxuICBib3JkZXItcmlnaHQ6ICMxNTE4MWMgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJpb3JpdHlOYW1lIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoOHB4LCAxdncsIDY0cHgpO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucHJpb3JpdHlDb2xvckNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3O1xcbiAgcGFkZGluZzogY2xhbXAoOHB4LCAwLjNyZW0gKyAwLjN2dywgNjRweCk7XFxuICBvdXRsaW5lOiAycHggc29saWQgIzZjNzU3ZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eUNvbG9yIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogY2xhbXAoMTRweCwgMC41cmVtICsgMC43dncsIDY0cHgpO1xcbiAgd2lkdGg6IGNsYW1wKDE0cHgsIDAuNXJlbSArIDAuN3Z3LCA2NHB4KTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgI2EwYjFjMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuI3ByaW9yaXRpZXMge1xcbiAgd2lkdGg6IGNsYW1wKDEwMHB4LCAzMCUgKyA0dncsIDYwMHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiBjbGFtcCg2cHgsIDAuM3Z3LCAxMnB4KTtcXG4gIG1hcmdpbi1ib3R0b206IGNsYW1wKDEwcHgsIDAuN3Z3LCAxNnB4KTtcXG59XFxuXFxuLnByaW9yaXR5Q29sb3JDb250YWluZXIgLnByaW9yaXR5Q29sb3Ige1xcbiAgaGVpZ2h0OiBjbGFtcCgxNHB4LCAwLjVyZW0gKyAwLjR2dywgNjRweCk7XFxuICB3aWR0aDogY2xhbXAoMTRweCwgMC41cmVtICsgMC40dncsIDY0cHgpO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuLnNpZGViYXJCdXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjZ2dztcXG59XFxuXFxuLlRvZG9zQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgNTBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLnRhc2tDb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1ib3R0b206IGNsYW1wKDRweCwgMC40dncsIDhweCk7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItdG9wOiAycHggc29saWQgI2EwYjFjMztcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogY2xhbXAoMnB4LCAwLjN2dywgOHB4KSAwO1xcbn1cXG5cXG4udGFza01pbmlDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiBjbGFtcCg4cHgsIDAuNXJlbSArIDAuNXZ3LCA2NHB4KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udGFza0NvbG9yIHtcXG4gIGhlaWdodDogY2xhbXAoMTRweCwgMC41cmVtICsgMC43dncsIDY0cHgpO1xcbiAgd2lkdGg6IGNsYW1wKDE0cHgsIDAuNXJlbSArIDAuN3Z3LCA2NHB4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlODE2MTY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbi50YXNrQnV0dG9uIHtcXG4gIGhlaWdodDogY2xhbXAoMTRweCwgMC41cmVtICsgMC43dncsIDY0cHgpO1xcbiAgd2lkdGg6IGNsYW1wKDE0cHgsIDAuNXJlbSArIDAuN3Z3LCA2NHB4KTtcXG59XFxuXFxuLnRhc2tNaW5pQ29udGFpbmVyOm50aC1sYXN0LW9mLXR5cGUoLW4gKyAyKSB7XFxuICBvdXRsaW5lOiAycHggc29saWQgIzZjNzU3ZDtcXG59XFxuXFxuLnRhc2tNaW5pQ29udGFpbmVyOm50aC1jaGlsZCgtbisyKSB7XFxuICBvdXRsaW5lOiAycHggc29saWQgIzZjNzU3ZDtcXG59XFxuXFxuLnRhc2tUaW1lIHtcXG4gIHBhZGRpbmctbGVmdDogY2FsYygxcmVtICsgMXZ3KTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcbi50YXNrVGltZSBwIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBjb2xvcjogI2FkYjViZDtcXG59XFxuXFxuLnRhc2tUaXRsZSB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgd2lkdGg6IGNsYW1wKDE1MHB4LCAxMHZ3ICsgMTByZW0sIDUwMHB4KTtcXG59XFxuLnRhc2tUaXRsZSBwIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi50YXNrVGl0bGUsXFxuLnRhc2tUaW1lIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4udGFza1RpdGxlIHAsXFxuLnRhc2tUaW1lIHAge1xcbiAgZm9udC1zaXplOiBjbGFtcCg4cHgsIDAuNXJlbSArIDAuN3Z3LCA2NHB4KTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnN1YnRhc2tzQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uc3VidGFzayB7XFxuICBtYXJnaW46IGNsYW1wKDJweCwgMC4xdncsIDRweCkgMDtcXG59XFxuLnN1YnRhc2sgLnRhc2tNaW5pQ29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IGNsYW1wKDhweCwgMC40cmVtICsgMC40dncsIDQ4cHgpO1xcbn1cXG4uc3VidGFzayAudGFza01pbmlDb250YWluZXIgLnRhc2tCdXR0b24ge1xcbiAgaGVpZ2h0OiBjbGFtcCgxMHB4LCAwLjVyZW0gKyAwLjR2dywgMzZweCk7XFxuICB3aWR0aDogY2xhbXAoMTBweCwgMC41cmVtICsgMC40dncsIDM2cHgpO1xcbn1cXG4uc3VidGFzayAudGFza01pbmlDb250YWluZXIgLnRhc2tDb2xvciB7XFxuICB3aWR0aDogY2xhbXAoMTBweCwgMC41cmVtICsgMC40dncsIDM2cHgpO1xcbiAgaGVpZ2h0OiBjbGFtcCgxMHB4LCAwLjVyZW0gKyAwLjR2dywgMzZweCk7XFxufVxcbi5zdWJ0YXNrIC50YXNrVGl0bGUgcCxcXG4uc3VidGFzayAudGFza1RpbWUgcCB7XFxuICBmb250LXNpemU6IGNsYW1wKDZweCwgMC41cmVtICsgMC40dncsIDM2cHgpO1xcbn1cXG5cXG4uY29tcGxldGVkVGFzayB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIG9wYWNpdHk6IDAuNjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSksIGluc2V0IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLnRhc2tEYXRhQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXg6IDEgMjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZFN1YnRhc2sge1xcbiAgbWFyZ2luLXRvcDogMC4zdnc7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwZGVnLCAwJSwgMCUsIDAuNTAyKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21vZGFsQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XFxuICBib3gtc2hhZG93OiA4cHggOHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICBtYXgtaGVpZ2h0OiA3MHZoO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uY2xvc2VCdXR0b24ge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMXZ3O1xcbiAgbGVmdDogMXZ3O1xcbiAgaGVpZ2h0OiAxLjN2dztcXG4gIHdpZHRoOiAxLjN2dztcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5jbG9zZUJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjR2dztcXG59XFxuLmZpZWxkIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygxdncgKyA2cHgpO1xcbn1cXG4uZmllbGQgaW5wdXQsXFxuLmZpZWxkIHNlbGVjdCxcXG4uZmllbGQgdGV4dGFyZWEge1xcbiAgZm9udC1zaXplOiBjYWxjKDAuOHZ3ICsgNHB4KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMjEyNTI5O1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSwgaW5zZXQgMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgcGFkZGluZzogY2FsYygwLjV2dyArIDJweCk7XFxuICBib3JkZXItcmFkaXVzOiAwLjV2dztcXG4gIGNvbG9yOiAjZjhmOWZhO1xcbn1cXG5cXG4uRHVlZGF0ZUZpZWxkIGlucHV0IHtcXG4gIGZvbnQtc2l6ZTogY2FsYygwLjh2dyArIDRweCk7XFxufVxcbi5EdWVkYXRlRmllbGQgOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblxcbi5uZXdGb3JtIHtcXG4gIG1pbi13aWR0aDogMzV2dztcXG4gIHBhZGRpbmc6IDAgY2FsYygxdncgKyA2cHgpIGNhbGMoMXZ3ICsgNnB4KSBjYWxjKDF2dyArIDZweCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAyZnI7XFxuICBnYXA6IGNhbGMoMC41dncgKyA0cHgpO1xcbn1cXG5cXG4uVGl0bGVGaWVsZCB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG4uRGVzY3JpcHRpb25GaWVsZCB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG4uRGVzY3JpcHRpb25GaWVsZCB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBoZWlnaHQ6IDIwdmg7XFxuICBtYXgtaGVpZ2h0OiAyMHZoO1xcbn1cXG5cXG4uUHJpb3JpdHlGaWVsZCBzZWxlY3Qge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzkvOWQvQ2FyZXRfZG93bl9mb250X2F3ZXNvbWVfd2hpdGV2YXJpYXRpb24uc3ZnKSBuby1yZXBlYXQgcmlnaHQgMC44ZW0gY2VudGVyLzEuNGVtLCAjMjEyNTI5O1xcbiAgLyogUmVtb3ZlIGZvY3VzIG91dGxpbmUgKi9cXG4gIC8qIFJlbW92ZSBJRSBhcnJvdyAqL1xcbn1cXG4uUHJpb3JpdHlGaWVsZCBzZWxlY3Q6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLlByaW9yaXR5RmllbGQgc2VsZWN0OjotbXMtZXhwYW5kIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uZXdUaXRsZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogY2FsYygxdncgKyA2cHgpO1xcbn1cXG5cXG4uY3JlYXRlQnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlVmlldyB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgdXNlci1zZWxlY3Q6IGF1dG87XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi50aXRsZVZpZXdDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDJ2dztcXG59XFxuXFxuLmRlc2NyaXB0aW9uVmlld0NvbnRhaW5lciB7XFxuICBtYXJnaW46IDAgMXZ3O1xcbn1cXG5cXG4uaW5mb0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWluLXdpZHRoOiBjbGFtcCgyNTBweCwgNzB2aCwgMTAwMHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG8gbWF4LWNvbnRlbnQgYXV0byBtYXgtY29udGVudDtcXG59XFxuXFxuLmRhdGVWaWV3Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5kYXRlU3RyaW5nQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5kYXRlU3RyaW5nQ29udGFpbmVyIHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiBjbGFtcCg4cHgsIDF2dywgNjRweCk7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4ucHJpb3JpdHlWaWV3Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kb0RhdGFDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRvZG9EYXRhQ29udGFpbmVyIC5wcmlvcml0eSB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi50b2RvRGF0YUNvbnRhaW5lciAucHJpb3JpdHkgLnByaW9yaXR5TmFtZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ubWFpblRhc2tDb250YWluZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogIzE1MTgxYyAycHggc29saWQ7XFxuICBwYWRkaW5nOiAwIDF2dyAxdncgMXZ3O1xcbn1cXG5cXG4udmlld1N1YkNvbnRhaW5lciB7XFxuICBib3JkZXItdG9wOiAjNDY0ZTU1IDJweCBzb2xpZDtcXG4gIGJvcmRlci1ib3R0b206ICMxNTE4MWMgMnB4IHNvbGlkO1xcbiAgcGFkZGluZzogMXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udmlld1N1YkNvbnRhaW5lciBoMSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZGVzY3JpcHRpb25WaWV3IHtcXG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uQnV0dG9uc1ZpZXcge1xcbiAgYm9yZGVyLXRvcDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjh2dztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxdncgMDtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjV2dztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwMGRlZywgNyUsIDglLCAwLjYpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjV2dyAwIDAuNXZ3IDAuN3Z3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0IDBzO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjAwZGVnLCA3JSwgOCUpO1xcbn1cXG5cXG4jc2VsZWN0ZWRQcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDBkZWcsIDclLCA4JSk7XFxufVxcblxcbmJ1dHRvbiBpIHtcXG4gIG1hcmdpbi1yaWdodDogMC41dnc7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZjhmOWZhO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTkuNzVkZWcsICM2ZTllY2YgMTMuMDIlLCAjMTIyNjNhIDEwMCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjV2dztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDAuN3Z3IDA7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuICBmb250LXNpemU6IDF2dztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiAjMjg4N2M4O1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAwcHggMnB4IDBweCAjNmJiMmUzO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZjhmOWZhO1xcbiAgcGFkZGluZzogNnB4IDEwcHg7XFxuICBmb250LXNpemU6IDEuMXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZWxldGVCdXR0b24ge1xcbiAgYmFja2dyb3VuZDogaHNsKDBkZWcsIDgyJSwgNjMlKTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgMHB4IDJweCAwcHggaHNsKDBkZWcsIDY3JSwgNzclKTtcXG59XFxuXFxuLmVkaXRCdXR0b24ge1xcbiAgYmFja2dyb3VuZDogcmdiKDExMSwgMTg0LCA1NSk7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IDBweCAycHggMHB4IHJnYigxODgsIDIyOSwgMTU2KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL19jb250YWluZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL19wcmlvcml0aWVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9fdGFzay5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvX21vZGFsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9fZm9ybS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvX3ZpZXdUb2RvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9fcHJvamVjdC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1EQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsMkNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQ0NGO0VERUE7SUFDRSxhQUFBO0VDQUY7RURHQTtJQUNFLGlCQUFB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OztBTWhlRTtFQUNFLG1CQUFBO0FObWVKOztBQTNmQTtFQUNFLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUE4ZkY7O0FBM2ZBO0VBQ0Usb0VBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQThmRjs7QUEzZkE7RUFDRSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQTZmRjs7QUExZkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQTZmRjs7QUExZkE7RUFDRSxhQUFBO0FBNmZGOztBQTFmQTtFQUNFLG1CQUFBO0VBQ0EscUVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtBQTZmRjs7QUExZkE7RUFDRSwrQkFBQTtFQUNBLGlGQUFBO0FBNmZGOztBQTFmQTtFQUNFLDZCQUFBO0VBQ0EsZ0ZBQUE7QUE2ZkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBtaW4td2lkdGg6IDc1JTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDEuMmZyKSAycHggM2ZyO1xcbiAgYm94LXNoYWRvdzogOHB4IDhweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3A6ICM0NjRlNTUgNHB4IHNvbGlkO1xcbiAgYm9yZGVyLWxlZnQ6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbn1cXG5cXG4uc2VwYXJhdG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XFxufVxcblxcbi5tYWluQ29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBjYWxjKDY1JSAtIDJweCkgMnB4IDM1JTtcXG59XFxuXFxuLnBlbmRpbmcge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1ib3R0b206ICMxNTE4MWMgMnB4IHNvbGlkO1xcbiAgYm9yZGVyLWxlZnQ6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbm1heCgwLCAxMDAlKTtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXRvcDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBib3JkZXItbGVmdDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICB9XFxuXFxuICAuc2VwYXJhdG9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5wZW5kaW5nIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICB9XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGJvcmRlci1yaWdodDogIzE1MTgxYyAycHggc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblwiLFwiQGltcG9ydCBcXFwiLi9pbmRleFxcXCI7XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNmOGY5ZmE7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExOS43NWRlZywgIzZlOWVjZiAxMy4wMiUsICMxMjI2M2EgMTAwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAvLyBmb250LXNpemU6IGNhbGMoMXJlbSArIDF2dyk7XFxuICBmb250LXNpemU6IDEuNXZ3O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMC43dncgMDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6ICMyODg3Yzg7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IDBweCAycHggMHB4ICM2YmIyZTM7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNmOGY5ZmE7XFxuICBwYWRkaW5nOiA2cHggMTBweDtcXG4gIGZvbnQtc2l6ZTogMS4xdnc7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZUJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBoc2woMCwgODIlLCA2MyUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAwcHggMnB4IDBweCBoc2woMCwgNjclLCA3NyUpO1xcbn1cXG5cXG4uZWRpdEJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTExLCAxODQsIDU1KTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgMHB4IDJweCAwcHggcmdiKDE4OCwgMjI5LCAxNTYpO1xcbn1cXG5cIixcIiRyZXNwb25zaXZlLXRleHQtc2l6ZTogY2xhbXAoOHB4LCAxdncsIDY0cHgpO1xcbiRyZXNwb25zaXZlLWJ1dHRvbi1zaXplOiBjbGFtcCgxNHB4LCBjYWxjKDAuNXJlbSArIDAuN3Z3KSwgNjRweCk7XFxuJHJlc3BvbnNpdmUtcHJpby1zaXplOiBjbGFtcCgxNHB4LCBjYWxjKDAuNXJlbSArIDAuNHZ3KSwgNjRweCk7XFxuXFxuLnByaW9yaXR5TmFtZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6ICRyZXNwb25zaXZlLXRleHQtc2l6ZTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5Q29sb3JDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NztcXG4gIHBhZGRpbmc6IGNsYW1wKDhweCwgY2FsYygwLjNyZW0gKyAwLjN2dyksIDY0cHgpO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICM2Yzc1N2Q7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJpb3JpdHlDb2xvciB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBoZWlnaHQ6ICRyZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbiAgd2lkdGg6ICRyZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjYTBiMWMzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4jcHJpb3JpdGllcyB7XFxuICB3aWR0aDogY2xhbXAoMTAwcHgsIGNhbGMoMzAlICsgNHZ3KSwgNjAwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IGNsYW1wKDZweCwgMC4zdncsIDEycHgpO1xcbiAgbWFyZ2luLWJvdHRvbTogY2xhbXAoMTBweCwgMC43dncsIDE2cHgpO1xcbn1cXG5cXG4ucHJpb3JpdHlDb2xvckNvbnRhaW5lciB7XFxuICAucHJpb3JpdHlDb2xvciB7XFxuICAgIGhlaWdodDogJHJlc3BvbnNpdmUtcHJpby1zaXplO1xcbiAgICB3aWR0aDogJHJlc3BvbnNpdmUtcHJpby1zaXplO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLnNpZGViYXJCdXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjZ2dztcXG59XFxuXCIsXCIkYmlnLXJlc3BvbnNpdmUtdGV4dC1zaXplOiBjbGFtcCg4cHgsIGNhbGMoMC41cmVtICsgMC43dncpLCA2NHB4KTtcXG4kYmlnLXJlc3BvbnNpdmUtYnV0dG9uLXNpemU6IGNsYW1wKDE0cHgsIGNhbGMoMC41cmVtICsgMC43dncpLCA2NHB4KTtcXG4kc21hbGwtcmVzcG9uc2l2ZS10ZXh0LXNpemU6IGNsYW1wKDZweCwgY2FsYygwLjVyZW0gKyAwLjR2dyksIDM2cHgpO1xcbiRzbWFsbC1yZXNwb25zaXZlLWJ1dHRvbi1zaXplOiBjbGFtcCgxMHB4LCBjYWxjKDAuNXJlbSArIDAuNHZ3KSwgMzZweCk7XFxuLlRvZG9zQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgNTBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLnRhc2tDb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1ib3R0b206IGNsYW1wKDRweCwgMC40dncsIDhweCk7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItdG9wOiAycHggc29saWQgI2EwYjFjMztcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogY2xhbXAoMnB4LCAwLjN2dywgOHB4KSAwO1xcbn1cXG5cXG4udGFza01pbmlDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiBjbGFtcCg4cHgsIGNhbGMoMC41cmVtICsgMC41dncpLCA2NHB4KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udGFza0NvbG9yIHtcXG4gIGhlaWdodDogJGJpZy1yZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbiAgd2lkdGg6ICRiaWctcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlODE2MTY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbi50YXNrQnV0dG9uIHtcXG4gIGhlaWdodDogJGJpZy1yZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbiAgd2lkdGg6ICRiaWctcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTtcXG59XFxuXFxuLnRhc2tNaW5pQ29udGFpbmVyOm50aC1sYXN0LW9mLXR5cGUoLW4gKyAyKSB7XFxuICBvdXRsaW5lOiAycHggc29saWQgIzZjNzU3ZDtcXG59XFxuXFxuLnRhc2tNaW5pQ29udGFpbmVyOm50aC1jaGlsZCgtbiArIDIpIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNmM3NTdkO1xcbn1cXG5cXG4udGFza1RpbWUge1xcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKDFyZW0gKyAxdncpO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG5cXG4gIHAge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBjb2xvcjogI2FkYjViZDtcXG4gIH1cXG59XFxuXFxuLnRhc2tUaXRsZSB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgd2lkdGg6IGNsYW1wKDE1MHB4LCBjYWxjKDEwdncgKyAxMHJlbSksIDUwMHB4KTtcXG5cXG4gIHAge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIH1cXG59XFxuXFxuLnRhc2tUaXRsZSxcXG4udGFza1RpbWUge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwIHtcXG4gICAgZm9udC1zaXplOiAkYmlnLXJlc3BvbnNpdmUtdGV4dC1zaXplO1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxufVxcblxcbi5zdWJ0YXNrc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnN1YnRhc2sge1xcbiAgbWFyZ2luOiBjbGFtcCgycHgsIDAuMXZ3LCA0cHgpIDA7XFxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIC50YXNrTWluaUNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IGNsYW1wKDhweCwgY2FsYygwLjRyZW0gKyAwLjR2dyksIDQ4cHgpO1xcblxcbiAgICAudGFza0J1dHRvbiB7XFxuICAgICAgaGVpZ2h0OiAkc21hbGwtcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTtcXG4gICAgICB3aWR0aDogJHNtYWxsLXJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICAgIH1cXG5cXG4gICAgLnRhc2tDb2xvciB7XFxuICAgICAgd2lkdGg6ICRzbWFsbC1yZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbiAgICAgIGhlaWdodDogJHNtYWxsLXJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC50YXNrVGl0bGUsXFxuICAudGFza1RpbWUge1xcbiAgICBwIHtcXG4gICAgICBmb250LXNpemU6ICRzbWFsbC1yZXNwb25zaXZlLXRleHQtc2l6ZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uY29tcGxldGVkVGFzayB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIG9wYWNpdHk6IDAuNjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSksIGluc2V0IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLnRhc2tEYXRhQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXg6IDEgMjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZFN1YnRhc2sge1xcbiAgbWFyZ2luLXRvcDogMC4zdnc7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cIixcIi5tb2RhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC41MDIpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbW9kYWxDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcXG4gIGJveC1zaGFkb3c6IDhweCA4cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIG1heC1oZWlnaHQ6IDcwdmg7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5jbG9zZUJ1dHRvbiB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAxdnc7XFxuICBsZWZ0OiAxdnc7XFxuICBoZWlnaHQ6IDEuM3Z3O1xcbiAgd2lkdGg6IDEuM3Z3O1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmNsb3NlQnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaHIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cIixcIi5maWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC40dnc7XFxuXFxuICBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxdncgKyA2cHgpO1xcbiAgfVxcblxcbiAgaW5wdXQsXFxuICBzZWxlY3QsXFxuICB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjh2dyArIDRweCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogIzIxMjUyOTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSwgaW5zZXQgMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBwYWRkaW5nOiBjYWxjKDAuNXZ3ICsgMnB4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41dnc7XFxuICAgIGNvbG9yOiAjZjhmOWZhO1xcbiAgfVxcbn1cXG5cXG4uRHVlZGF0ZUZpZWxkIHtcXG4gIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuOHZ3ICsgNHB4KTtcXG4gIH1cXG5cXG4gIDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxuICB9XFxufVxcblxcbi5uZXdGb3JtIHtcXG4gIG1pbi13aWR0aDogMzV2dztcXG4gIHBhZGRpbmc6IDAgY2FsYygxdncgKyA2cHgpIGNhbGMoMXZ3ICsgNnB4KSBjYWxjKDF2dyArIDZweCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAyZnI7XFxuICBnYXA6IGNhbGMoMC41dncgKyA0cHgpO1xcbn1cXG5cXG4uVGl0bGVGaWVsZCB7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVxcblxcbi5EZXNjcmlwdGlvbkZpZWxkIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG5cXG4gIHRleHRhcmVhIHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIG1heC1oZWlnaHQ6IDIwdmg7XFxuICB9XFxufVxcblxcbi5Qcmlvcml0eUZpZWxkIHtcXG4gIHNlbGVjdCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy85LzlkL0NhcmV0X2Rvd25fZm9udF9hd2Vzb21lX3doaXRldmFyaWF0aW9uLnN2ZylcXG4gICAgICAgIG5vLXJlcGVhdCByaWdodCAwLjhlbSBjZW50ZXIgLyAxLjRlbSxcXG4gICAgICAjMjEyNTI5O1xcbiAgICAvKiBSZW1vdmUgZm9jdXMgb3V0bGluZSAqL1xcbiAgICAmOmZvY3VzIHtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICB9XFxuICAgIC8qIFJlbW92ZSBJRSBhcnJvdyAqL1xcbiAgICAmOjotbXMtZXhwYW5kIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5uZXdUaXRsZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogY2FsYygxdncgKyA2cHgpO1xcbn1cXG5cXG4uY3JlYXRlQnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXCIsXCIudGl0bGVWaWV3IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB1c2VyLXNlbGVjdDogYXV0bztcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG59XFxuXFxuLnRpdGxlVmlld0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMnZ3O1xcbn1cXG5cXG4uZGVzY3JpcHRpb25WaWV3Q29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCAxdnc7XFxufVxcblxcbi5pbmZvQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtaW4td2lkdGg6IGNsYW1wKDI1MHB4LCA3MHZoLCAxMDAwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0byBtYXgtY29udGVudCBhdXRvIG1heC1jb250ZW50O1xcbn1cXG5cXG4uZGF0ZVZpZXdDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmgzIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmRhdGVTdHJpbmdDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG5cXG4gIHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoOHB4LCAxdncsIDY0cHgpO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgfVxcbn1cXG5cXG4ucHJpb3JpdHlWaWV3Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kb0RhdGFDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIC5wcmlvcml0eSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgLnByaW9yaXR5TmFtZSB7XFxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ubWFpblRhc2tDb250YWluZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogIzE1MTgxYyAycHggc29saWQ7XFxuICBwYWRkaW5nOiAwIDF2dyAxdncgMXZ3O1xcbn1cXG5cXG4udmlld1N1YkNvbnRhaW5lciB7XFxuICBib3JkZXItdG9wOiAjNDY0ZTU1IDJweCBzb2xpZDtcXG4gIGJvcmRlci1ib3R0b206ICMxNTE4MWMgMnB4IHNvbGlkO1xcbiAgcGFkZGluZzogMXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgaDEge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxufVxcblxcbi5kZXNjcmlwdGlvblZpZXcge1xcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5CdXR0b25zVmlldyB7XFxuICBib3JkZXItdG9wOiAjNDY0ZTU1IDJweCBzb2xpZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuOHZ3O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDF2dyAwO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XFxufVxcblwiLFwiI3Byb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41dnc7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMDAsIDclLCA4JSwgNjAlKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41dncgMCAwLjV2dyAwLjd2dztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dCAwcztcXG59XFxuXFxuLnByb2plY3RDb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMDAsIDclLCA4JSwgMTAwJSk7XFxufVxcblxcbiNzZWxlY3RlZFByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMDAsIDclLCA4JSwgMTAwJSk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBpIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjV2dztcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzdGF0ZSwgdGVtcGxhdGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gIH1cblxuICAvLyBUaGlzIG1ldGhvZCByZXR1cm5zIGEgdGVtcGxhdGUgbGl0ZXJhbCBvZiB0aGUgY29tcG9uZW50XG4gIHZpZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGUodGhpcy5zdGF0ZSk7XG4gIH1cblxuICAvLyBUaGlzIG1ldGhvZCByZXR1cm5zIGFuIEhUTUwgZWxlbWVudCBvYmplY3Qgb2YgdGhlIGNvbXBvbmVudFxuICBET01lbGVtZW50KGUsIGZ1bmMpIHtcbiAgICBsZXQgZWxlbWVudCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcodGhpcy52aWV3KCksIFwidGV4dC9odG1sXCIpLmJvZHlcbiAgICAgIC5maXJzdENoaWxkO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGUsIGZ1bmMpO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgYWRkTGlzdGVuZXIgPSAoZWxlbWVudCwgZXZlbnQsIGZ1bmMpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmMpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG5cbi8vbWFrZSBhbiBldmVudEhhbmRsZXIgY2xhc3MgdGhhdCBhc3NpZ25zIGV2ZW50IGxpc3RlbmVycyB0byBjb21wb25lbnRzXG4iLCJjb25zdCBET01IYW5kbGVyID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlRWxlbWVudCA9IChlbGVtZW50VGFnLCBjbGFzc05hbWUgPSBcIlwiLCBjb250ZW50ID0gXCJcIikgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VGFnKTtcbiAgICBsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdChcIiBcIik7XG4gICAgY2xhc3Nlcy5mb3JFYWNoKChjbGF6eikgPT4ge1xuICAgICAgaWYgKGNsYXp6ICE9PSBcIlwiKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhenopO1xuICAgIH0pO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVGaWVsZCA9IChuYW1lLCBlbGVtZW50ID0gXCJpbnB1dFwiLCB0eXBlID0gXCJ0ZXh0XCIpID0+IHtcbiAgICBsZXQgY29udGFpbmVyID0gRE9NSGFuZGxlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIGBmaWVsZCAke25hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIil9RmllbGRgXG4gICAgKTtcbiAgICBsZXQgbGFiZWwgPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBcIlwiLCBuYW1lKTtcbiAgICBsZXQgZmllbGQgPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICBpZiAoZmllbGQudGFnTmFtZSA9PT0gXCJJTlBVVFwiKSBmaWVsZC50eXBlID0gdHlwZTtcbiAgICBmaWVsZC5uYW1lID0gbmFtZS5zcGxpdChcIiBcIikuam9pbihcIlwiKTtcbiAgICBmaWVsZC5pZCA9IG5hbWU7XG4gICAgbGFiZWwuaHRtbEZvciA9IG5hbWU7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGZpZWxkKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH07XG5cbiAgcmV0dXJuIHsgY3JlYXRlRWxlbWVudCwgY3JlYXRlRmllbGQgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTUhhbmRsZXI7XG4iLCJpbXBvcnQgUHJvamVjdENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL1Byb2plY3RDb21wb25lbnRcIjtcblxuY2xhc3MgTmVyb3Mge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgIHRoaXMuTmVyb3NFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7c2VsZWN0b3J9YCk7XG4gIH1cblxuICBzdGF0aWMgcHJvamVjdHMgPSBuZXcgTmVyb3MoXCJwcm9qZWN0c1wiKTtcblxuICBzdGF0aWMgZGVsZXRlQ29tcG9uZW50KG5lcm9zLCBjb21wb25lbnQpIHtcbiAgICBsZXQgY29tcG9uZW50cyA9IG5lcm9zLmNvbXBvbmVudHM7XG4gICAgZGVsZXRlIGNvbXBvbmVudHNbY29tcG9uZW50Lm5hbWVdO1xuICAgIG5lcm9zLnVwZGF0ZVZpZXcoKTtcbiAgICBQcm9qZWN0Q29tcG9uZW50LnNlbGVjdExhc3RQcm9qZWN0KCk7XG4gIH1cblxuICByZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICB0aGlzLmNvbXBvbmVudHNbY29tcG9uZW50Lm5hbWVdID0gY29tcG9uZW50O1xuICAgIHRoaXMudXBkYXRlVmlldygpO1xuICB9XG5cbiAgdXBkYXRlVmlldygpIHtcbiAgICBpZiAodGhpcy5jb21wb25lbnRzKSB7XG4gICAgICB0aGlzLk5lcm9zRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgT2JqZWN0LmtleXModGhpcy5jb21wb25lbnRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdGhpcy5OZXJvc0VsZW1lbnQuYXBwZW5kKHRoaXMuY29tcG9uZW50c1trZXldLkRPTWVsZW1lbnQoKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVyb3M7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9Db21wb25lbnRcIjtcbmltcG9ydCBkZWxldGVUYXNrIGZyb20gXCIuLi8uLi9hc3NldHMvZGVsZXRlLnN2Z1wiO1xuaW1wb3J0IGVkaXQgZnJvbSBcIi4uLy4uL2Fzc2V0cy9lZGl0LnN2Z1wiO1xuaW1wb3J0IGNoZWNrZWQgZnJvbSBcIi4uLy4uL2Fzc2V0cy9jaGVja2VkLnN2Z1wiO1xuaW1wb3J0IHVuY2hlY2tlZCBmcm9tIFwiLi4vLi4vYXNzZXRzL3VuY2hlY2tlZC5zdmdcIjtcblxuY2xhc3MgTWluaUNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHRlbXBsYXRlID0gKHN0YXRlKSA9PiBgXG4gICAgPGRpdiBjbGFzcz1cInRhc2tNaW5pQ29udGFpbmVyICR7c3RhdGUudHlwZUNsYXNzfVwiPlxuICAgICAgJHtzdGF0ZS5odG1sfVxuICAgIDwvZGl2PlxuICBgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNaW5pQ29udGFpbmVyQ29tcG9uZW50O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi4vcHJvamVjdFwiO1xuaW1wb3J0IG1vZGFsIGZyb20gXCIuLi9tb2RhbFwiO1xuaW1wb3J0IE5lcm9zIGZyb20gXCIuLi9OZXJvc1wiO1xuaW1wb3J0IFByb2plY3RDb21wb25lbnQgZnJvbSBcIi4vUHJvamVjdENvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgTmV3UHJvamVjdENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICB0ZW1wbGF0ZSA9ICgpID0+XG4gICAgYFxuICAgIDxkaXYgY2xhc3M9J25ld1Byb2plY3RDb250YWluZXInPlxuICAgICAgPGgxPkNyZWF0ZSBuZXcgUHJvamVjdDwvaDE+XG4gICAgICA8Zm9ybSBjbGFzcz0nbmV3Rm9ybSc+XG4gICAgICAgIDxkaXYgY2xhc3M9J2ZpZWxkIFRpdGxlRmllbGQnPlxuICAgICAgICA8bGFiZWwgZm9yPSdUaXRsZSc+UHJvamVjdCBUaXRsZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdUaXRsZScgaWQ9J1RpdGxlJz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9J2NyZWF0ZUJ1dHRvbicgdHlwZT0nYnV0dG9uJz5DcmVhdGU8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICBET01lbGVtZW50KCkge1xuICAgIGxldCBlbGVtZW50ID0gc3VwZXIuRE9NZWxlbWVudCgpO1xuICAgIGxldCBidXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XG4gICAgbGV0IGZvcm0gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVQcm9qZWN0KGZvcm0pO1xuICAgIH0pO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgY3JlYXRlUHJvamVjdChmb3JtKSB7XG4gICAgbGV0IHRpdGxlID0gZm9ybS5UaXRsZS52YWx1ZTtcbiAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgICBOZXJvcy5wcm9qZWN0cy5yZWdpc3RlckNvbXBvbmVudChwcm9qZWN0LmNvbXBvbmVudCk7XG4gICAgLy8gU2VsZWN0IG5ld2x5IGNyZWF0ZWQgcHJvamVjdFxuICAgIFByb2plY3RDb21wb25lbnQuc2VsZWN0TGFzdFByb2plY3QoKTtcbiAgICBtb2RhbC5oaWRlKCk7XG4gIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4uL3RvZG9cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuLi9wcm9qZWN0XCI7XG5pbXBvcnQgTmVyb3MgZnJvbSBcIi4uL05lcm9zXCI7XG5pbXBvcnQgbW9kYWwgZnJvbSBcIi4uL21vZGFsXCI7XG5cbmV4cG9ydCBjbGFzcyBOZXdUb2RvQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgdGVtcGxhdGUgPSAoc3RhdGUpID0+XG4gICAgYFxuICAgIDxkaXYgY2xhc3M9J25ld0NvbnRhaW5lcic+XG4gICAgICA8aDEgY2xhc3M9J25ld1RpdGxlJz5DcmVhdGUgdG9kbzwvaDE+XG4gICAgICA8Zm9ybSBjbGFzcz0nbmV3Rm9ybSc+XG4gICAgICAgIDxkaXYgY2xhc3M9J2ZpZWxkIFRpdGxlRmllbGQnPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J1RpdGxlJz5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J1RpdGxlJyBpZD0nVGl0bGUnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nZmllbGQgRHVlZGF0ZUZpZWxkJz5cbiAgICAgICAgICA8bGFiZWwgZm9yPSdEdWUgZGF0ZSc+RHVlIGRhdGU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdkYXRlJyBuYW1lPSdEdWVkYXRlJyBpZD0nRHVlIGRhdGUnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nZmllbGQgUHJpb3JpdHlGaWVsZCc+XG4gICAgICAgICAgPGxhYmVsIGZvcj0nUHJpb3JpdHknPlByaW9yaXR5PC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJQcmlvcml0eVwiIGlkPVwiUHJpb3JpdHlcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVcmdlbnRcIj5VcmdlbnQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIaWdoXCI+SGlnaDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk9wdGlvbmFsXCI+T3B0aW9uYWw8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J2ZpZWxkIERlc2NyaXB0aW9uRmllbGQnPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J0Rlc2NyaXB0aW9uJz5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J0Rlc2NyaXB0aW9uJyBpZD0nRGVzY3JpcHRpb24nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz0nY3JlYXRlQnV0dG9uJyB0eXBlPSdidXR0b24nPkNyZWF0ZTwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgRE9NZWxlbWVudCgpIHtcbiAgICBsZXQgZWxlbWVudCA9IHN1cGVyLkRPTWVsZW1lbnQoKTtcbiAgICBsZXQgYnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuICAgIGxldCBmb3JtID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlVG9kbyhmb3JtKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBsZXQgcHJvamVjdENvbXBvbmVudCA9IFByb2plY3Quc2VsZWN0ZWQuY29tcG9uZW50O1xuICAgIGxldCBwcm9qZWN0ID0gUHJvamVjdC5zZWxlY3RlZDtcblxuICAgIHByb2plY3RDb21wb25lbnQuZGlzcGxheVRvZG9zKFwicGVuZGluZ1wiLCBwcm9qZWN0LnBlbmRpbmcpO1xuICAgIHByb2plY3RDb21wb25lbnQuZGlzcGxheVRvZG9zKFwiY29tcGxldGVkXCIsIHByb2plY3QuY29tcGxldGVkKTtcbiAgfVxuXG4gIGNyZWF0ZVRvZG8oZm9ybSkge1xuICAgIGxldCB0aXRsZSA9IGZvcm0uVGl0bGUudmFsdWU7XG4gICAgbGV0IGRhdGUgPSBmb3JtLkR1ZWRhdGUudmFsdWU7XG4gICAgbGV0IHByaW9yaXR5ID0gZm9ybS5Qcmlvcml0eS5zZWxlY3RlZEluZGV4ICsgMTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBmb3JtLkRlc2NyaXB0aW9uLnZhbHVlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUucGFyZW50KSB7XG4gICAgICB0aGlzLnN0YXRlLnBhcmVudC5jcmVhdGVUb2RvKHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3IFRvZG8odGl0bGUsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgZmFsc2UpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIG1vZGFsLmhpZGUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgTmVyb3MgZnJvbSBcIi4uL05lcm9zXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi4vcHJvamVjdFwiO1xuaW1wb3J0IFRvZG9Db21wb25lbnQgZnJvbSBcIi4vVG9kb0NvbXBvbmVudFwiO1xuaW1wb3J0IGhlbHBlciBmcm9tIFwiLi4vaGVscGVyXCI7XG5cbmNsYXNzIFByb2plY3RDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzdGF0ZSkge1xuICAgIHN1cGVyKG5hbWUsIHN0YXRlKTtcbiAgfVxuXG4gIHN0YXRpYyByZXNldFZpZXcoKSB7XG4gICAgbGV0IHBlbmRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BlbmRpbmdUb2Rvc1wiKTtcbiAgICBsZXQgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wbGV0ZWRUb2Rvc1wiKTtcblxuICAgIHBlbmRpbmcuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb21wbGV0ZWQuaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxuXG4gIC8vIFRoaXMgbWV0aG9kIHNlbGVjdHMgdGhlIGxhc3QgcHJvamVjdCBjcmVhdGVkXG4gIHN0YXRpYyBzZWxlY3RMYXN0UHJvamVjdCgpIHtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdENvbnRhaW5lclwiKTtcbiAgICBwcm9qZWN0W3Byb2plY3QubGVuZ3RoIC0gMV0uY2xpY2soKTtcbiAgfVxuXG4gIHRlbXBsYXRlID0gKHN0YXRlKSA9PlxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdENvbnRhaW5lclwiPlxuICAgICAgPGgzPiR7c3RhdGUucHJvamVjdC5uYW1lfTwvaDM+XG4gICAgPC9kaXY+XG4gICAgYDtcblxuICAvLyBUaGlzIG1ldGhvZCBkaXNwbGF5cyBhbGwgdG9kb3MgYmVsb25naW5nIHRvIHRoaXMgcHJvamVjdFxuICBkaXNwbGF5VG9kb3Moc2VsZWN0b3IsIHByb2plY3RUb2Rvcykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgTmVyb3MoYCR7c2VsZWN0b3J9VG9kb3NgKTtcbiAgICBsZXQgdG9kb3MgPSBoZWxwZXIubWVyZ2VTb3J0KHByb2plY3RUb2Rvcyk7XG5cbiAgICB0b2RvcyA9IHRvZG9zLm1hcChcbiAgICAgICh0YXNrLCBpbmRleCkgPT5cbiAgICAgICAgbmV3IFRvZG9Db21wb25lbnQoYHRvZG8ke2luZGV4fWAsIHtcbiAgICAgICAgICB0YXNrOiB0YXNrLFxuICAgICAgICAgIHN1YnRhc2tzOiBoZWxwZXIubWVyZ2VTb3J0KHRhc2suY2hpbGRyZW4pLFxuICAgICAgICB9KVxuICAgICk7XG4gICAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgZWxlbWVudC5yZWdpc3RlckNvbXBvbmVudCh0b2RvKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlZnJlc2hUb2RvcygpIHtcbiAgICBsZXQgcGVuZGluZ0FycmF5ID0gdGhpcy5zdGF0ZS5wcm9qZWN0LnBlbmRpbmc7XG4gICAgbGV0IGNvbXBsZXRlZEFycmF5ID0gdGhpcy5zdGF0ZS5wcm9qZWN0LmNvbXBsZXRlZDtcbiAgICBpZiAocGVuZGluZ0FycmF5Lmxlbmd0aCA+IDApIHRoaXMuZGlzcGxheVRvZG9zKFwicGVuZGluZ1wiLCBwZW5kaW5nQXJyYXkpO1xuICAgIGlmIChjb21wbGV0ZWRBcnJheS5sZW5ndGggPiAwKVxuICAgICAgdGhpcy5kaXNwbGF5VG9kb3MoXCJjb21wbGV0ZWRcIiwgY29tcGxldGVkQXJyYXkpO1xuICB9XG5cbiAgRE9NZWxlbWVudCgpIHtcbiAgICByZXR1cm4gc3VwZXIuRE9NZWxlbWVudChcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUlEKGUuY3VycmVudFRhcmdldCk7XG4gICAgICBQcm9qZWN0LnNlbGVjdGVkID0gdGhpcy5zdGF0ZS5wcm9qZWN0O1xuICAgICAgLy8gUmVzZXQgdGhlIGJvYXJkIGJlZm9yZSBkaXNwbGF5aW5nIHRoaXMgcHJvamVjdCB0b2Rvc1xuICAgICAgUHJvamVjdENvbXBvbmVudC5yZXNldFZpZXcoKTtcbiAgICAgIHRoaXMucmVmcmVzaFRvZG9zKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBUaGlzIG1ldGhvZCByZW1vdmVzIHRoZSBpZCBmcm9tIHRoZSBwcmV2aW91cyBlbGVtZW50IGFuZCBhc3NpZ25zIGl0IHRvIHRoZSBjbGlja2VkIGVsZW1lbnRcbiAgaGFuZGxlSUQodGFyZ2V0KSB7XG4gICAgbGV0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RlZFByb2plY3RcIik7XG4gICAgaWYgKHNlbGVjdGVkKSBzZWxlY3RlZC5pZCA9IFwiXCI7XG4gICAgdGFyZ2V0LmlkID0gXCJzZWxlY3RlZFByb2plY3RcIjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Q29tcG9uZW50O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgTWluaUNvbnRhaW5lckNvbXBvbmVudCBmcm9tIFwiLi9NaW5pQ29udGFpbmVyQ29tcG9uZW50XCI7XG5pbXBvcnQgUHJpb3JpdHkgZnJvbSBcIi4uL3ByaW9yaXR5XCI7XG5pbXBvcnQgZGVsZXRlVGFzayBmcm9tIFwiLi4vLi4vYXNzZXRzL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBlZGl0IGZyb20gXCIuLi8uLi9hc3NldHMvZWRpdC5zdmdcIjtcbmltcG9ydCBjaGVja2VkIGZyb20gXCIuLi8uLi9hc3NldHMvY2hlY2tlZC5zdmdcIjtcbmltcG9ydCB1bmNoZWNrZWQgZnJvbSBcIi4uLy4uL2Fzc2V0cy91bmNoZWNrZWQuc3ZnXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi4vcHJvamVjdFwiO1xuXG4vLyAxLi0gSWYgYSBiaWcgdG9kbyBpcyBjaGVja2VkLCBpdHMgY2hpbGRyZW4gYXJlIGFsc28gY2hlY2tlZCDinJTvuI9cbi8vIDIuLSBJZiBhbGwgdGhlIHN1YnRvZG9zIGFyZSBjaGVja2VkLCB0aGUgcGFyZW50IGlzIGFsc28gY2hlY2tlZCDinJTvuI9cbi8vIDMuLSBJZiBhIGJpZyB0b2RvIGFuZCBpdHMgY2hpbGRyZW4gYXJlIGNoZWNrZWQsIGJ1dCBvbmUgb2YgdGhlIGNoaWxkcmVuXG4vLyBpcyB1bmNoZWNrZWQsIHRoZSBwYXJlbnQgdG9kbyB3aWxsIGFsc28gYmUgdW5jaGVja2VkIOKclO+4j1xuLy8gNC4tIElmIGEgYmlnIHRvZG8gYW5kIGl0cyBjaGlsZHJlbiBhcmUgY2hlY2tlZCwgYnV0IHRoZSBwYXJlbnQgaXMgdW5jaGVja2VkLFxuLy8gYWxsIGl0cyBjaGlsZHJlbiB3aWxsIGFsc28gYmUgdW5jaGVja2VkIOKclO+4j1xuXG5jbGFzcyBUYXNrQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IobmFtZSwgc3RhdGUpIHtcbiAgICBzdXBlcihuYW1lLCBzdGF0ZSk7XG4gICAgLy8gQ3JlYXRlIHRoZSBwcmlvcml0eSBjb2xvciBodG1sIGFuZCBjb2xvciwgSSBzaG91bGQgcHV0IHRoaXMgaW50byBpdHMgb3duIGNsYXNzXG4gICAgdGhpcy5jb2xvckhUTUwgPSAocHJpb3JpdHkpID0+XG4gICAgICBgPGRpdiBjbGFzcz1cInByaW9yaXR5Q29sb3JcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICR7cHJpb3JpdHkuY29sb3J9XCI+PC9kaXY+YDtcbiAgICB0aGlzLmNvbG9yTWluaSA9IG5ldyBNaW5pQ29udGFpbmVyQ29tcG9uZW50KFwicHJpb3JpdHlcIiwge1xuICAgICAgaHRtbDogdGhpcy5jb2xvckhUTUwoUHJpb3JpdHkucHJpb3JpdHkoc3RhdGUudG9kby5wcmlvcml0eSkpLFxuICAgICAgdHlwZUNsYXNzOiBcInByaW9yaXR5QnV0dG9uTWluaVwiLFxuICAgIH0pO1xuICAgIHRoaXMuc3RhdGUudG9kby5jb21wb25lbnQgPSB0aGlzO1xuICAgIC8vIElmIHRoaXMgdG9kbyBpcyBjaGVja2VkLCB0aGUgZG9tIGVsZW1lbnQgd2lsbCBoYXZlIHRoZSBjbGFzcyBcImNvbXBsZXRlZFRhc2tcIlxuICAgIGlmICh0aGlzLnN0YXRlLnRvZG8uY2hlY2spIHRoaXMuc3RhdGUuY2xhc3Nlcy5wdXNoKFwiY29tcGxldGVkVGFza1wiKTtcbiAgfVxuXG4gIC8vIENyZWF0ZSBhbGwgdGhlIHN0YXRpYyBidXR0b25zIG5lZWRlZCBmb3IgYSB0YXNrLCB0aGVzZSBhcmVuJ3QgZHluYW1pYyBzaW5jZSBhbGwgdGFza3MgaGF2ZSB0aGUgc2FtZSBidXR0b25zXG4gIHN0YXRpYyBpbWdIVE1MID0gKGFjdGlvblNWRykgPT4gYDxpbWcgY2xhc3M9XCJ0YXNrQnV0dG9uXCIgc3JjPSR7YWN0aW9uU1ZHfT5gO1xuICBzdGF0aWMgZWRpdE1pbmkgPSBuZXcgTWluaUNvbnRhaW5lckNvbXBvbmVudChcImVkaXRcIiwge1xuICAgIGh0bWw6IFRhc2tDb21wb25lbnQuaW1nSFRNTChlZGl0KSxcbiAgICB0eXBlQ2xhc3M6IFwiZWRpdEJ1dHRvbk1pbmlcIixcbiAgfSk7XG4gIHN0YXRpYyBkZWxldGVNaW5pID0gbmV3IE1pbmlDb250YWluZXJDb21wb25lbnQoXCJkZWxldGVcIiwge1xuICAgIGh0bWw6IFRhc2tDb21wb25lbnQuaW1nSFRNTChkZWxldGVUYXNrKSxcbiAgICB0eXBlQ2xhc3M6IFwiZGVsZXRlQnV0dG9uTWluaVwiLFxuICB9KTtcblxuICAvLyBSZXR1cm4gYSBtaW5pQ29udGFpbmVyIHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgc3ZnIGZpbGUsIGNoZWNrZWQgaWYgdG9kbyBpc0NoZWNrZWRcbiAgLy8gcHJvcGVydHkgaXMgdHJ1ZSwgdW5jaGVja2VkIG90aGVyd2lzZS5cbiAgY2hlY2tNaW5pID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgTWluaUNvbnRhaW5lckNvbXBvbmVudChcImNoZWNrXCIsIHtcbiAgICAgIGh0bWw6IFRhc2tDb21wb25lbnQuaW1nSFRNTCh0aGlzLmNoZWNrU3RhdGUoKSksXG4gICAgICB0eXBlQ2xhc3M6IFwiY2hlY2tCdXR0b25NaW5pXCIsXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gVGhpcyBtZXRob2QgY2hlY2tzIHRoZSBzdGF0ZSBvZiB0aGUgaXNDaGVja2VkIHByb3BlcnR5IGZyb20gdG9kb3NcbiAgY2hlY2tTdGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS50b2RvLmNoZWNrID8gY2hlY2tlZCA6IHVuY2hlY2tlZDtcbiAgfTtcblxuICB0ZW1wbGF0ZSA9IChzdGF0ZSkgPT5cbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cIiR7c3RhdGUuY2xhc3Nlcy5qb2luKFwiIFwiKX1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrRGF0YUNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1RpdGxlXCI+XG4gICAgICAgICAgPHA+JHtzdGF0ZS50b2RvLnRpdGxlfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrVGltZVwiPlxuICAgICAgICAgIDxwPjUgZGF5cyBsZWZ0PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIERPTWVsZW1lbnQoKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBzdXBlci5ET01lbGVtZW50KCk7XG4gICAgbGV0IGNoZWNrID0gdGhpcy5jaGVja01pbmkoKS5ET01lbGVtZW50KFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgdGhpcy5ldmVudEhhbmRsZXIoKS5jaGVja0J1dHRvblxuICAgICk7XG4gICAgbGV0IHByaW9yaXR5ID0gdGhpcy5jb2xvck1pbmkuRE9NZWxlbWVudChcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIHRoaXMuZXZlbnRIYW5kbGVyKCkucHJpb3JpdHlCdXR0b25cbiAgICApO1xuICAgIGxldCBlZGl0ID0gVGFza0NvbXBvbmVudC5lZGl0TWluaS5ET01lbGVtZW50KFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgdGhpcy5ldmVudEhhbmRsZXIoKS5lZGl0QnV0dG9uXG4gICAgKTtcbiAgICBsZXQgZGVsZXRlQnRuID0gVGFza0NvbXBvbmVudC5kZWxldGVNaW5pLkRPTWVsZW1lbnQoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICB0aGlzLmV2ZW50SGFuZGxlcigpLmRlbGV0ZUJ1dHRvblxuICAgICk7XG5cbiAgICBlbGVtZW50LnByZXBlbmQocHJpb3JpdHkpO1xuICAgIGVsZW1lbnQucHJlcGVuZChjaGVjayk7XG4gICAgZWxlbWVudC5hcHBlbmQoZWRpdCk7XG4gICAgZWxlbWVudC5hcHBlbmQoZGVsZXRlQnRuKTtcbiAgICB0aGlzLnN0YXRlLnRvZG8uZG9tRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBjaGVja0NoaWxkcmVuKCkge1xuICAgIHRoaXMuc3RhdGUudG9kby5jaGlsZHJlbi5mb3JFYWNoKChzdWJ0YXNrKSA9PiB7XG4gICAgICBzdWJ0YXNrLmNoZWNrVG9kbygpO1xuICAgIH0pO1xuICB9XG5cbiAgdW5jaGVja0NoaWxkcmVuKCkge1xuICAgIHRoaXMuc3RhdGUudG9kby5jaGlsZHJlbi5mb3JFYWNoKChzdWJ0YXNrKSA9PiB7XG4gICAgICBzdWJ0YXNrLnVuY2hlY2tUb2RvKCk7XG4gICAgfSk7XG4gIH1cblxuICBjaGVja1BhcmVudCgpIHtcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5zdGF0ZS50b2RvLnBhcmVudDtcbiAgICBwYXJlbnQuY2hlY2tUb2RvKCk7XG4gIH1cblxuICB1bmNoZWNrUGFyZW50KCkge1xuICAgIGxldCBwYXJlbnQgPSB0aGlzLnN0YXRlLnRvZG8ucGFyZW50O1xuICAgIHBhcmVudC51bmNoZWNrVG9kbygpO1xuICB9XG5cbiAgLy9DaGVjayBpZiB0aGUgc3VidGFza3MgYXJyYXkgY29udGFpbnMgb25seSBjb21wbGV0ZWQgdGFza3NcbiAgYXJlU3VidGFza3NDb21wbGV0ZWQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUudG9kby5pc1N1YnRhc2soKSkge1xuICAgICAgbGV0IHN1YnRhc2tzID0gdGhpcy5zdGF0ZS50b2RvLnBhcmVudC5jaGlsZHJlbjtcbiAgICAgIHJldHVybiBzdWJ0YXNrcy5ldmVyeSgoc3VidGFzaykgPT4gc3VidGFzay5jaGVjayk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGV2ZW50SGFuZGxlciA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY2hlY2tCdXR0b246ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudG9kby5jaGVjaykge1xuICAgICAgICAgIC8vIElmIHRoZSBiaWcgdG9kbyBpcyBjb21wbGV0ZWQgYW5kIGEgc3VidGFzayBpcyB1bmNoZWNrZWQsIHRoZSBiaWdcbiAgICAgICAgICAvLyB0b2RvIGlzIHVuY2hlY2tlZFxuICAgICAgICAgIGlmICh0aGlzLmFyZVN1YnRhc2tzQ29tcGxldGVkKCkgJiYgdGhpcy5zdGF0ZS50b2RvLmlzU3VidGFzaygpKVxuICAgICAgICAgICAgdGhpcy51bmNoZWNrUGFyZW50KCk7XG4gICAgICAgICAgdGhpcy5zdGF0ZS50b2RvLnVuY2hlY2tUb2RvKCk7XG4gICAgICAgICAgLy8gSWYgdGhlIGJpZyB0b2RvIGlzIHVuY2hlY2tlZCwgbWFyayBhbGwgaXRzIGNoaWxkcmVuIHVuY2hlY2tlZFxuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvZG8uY2hpbGRyZW4pIHRoaXMudW5jaGVja0NoaWxkcmVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS50b2RvLmNoZWNrVG9kbygpO1xuICAgICAgICAgIC8vIElmIGFsbCB0aGUgc3Vic3Rhc2tzIGFyZSBjb21wbGV0ZWQsIG1hcmsgY2hlY2tlZCB0aGUgYmlnIHRvZG9cbiAgICAgICAgICBpZiAodGhpcy5hcmVTdWJ0YXNrc0NvbXBsZXRlZCgpICYmIHRoaXMuc3RhdGUudG9kby5pc1N1YnRhc2soKSlcbiAgICAgICAgICAgIHRoaXMuY2hlY2tQYXJlbnQoKTtcbiAgICAgICAgICAvLyBJZiB0aGUgYmlnIHRvZG8gaXMgY2hlY2tlZCwgbWFyayBhbGwgaXRzIGNoaWxkcmVuIGNoZWNrZWRcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50b2RvLmNoaWxkcmVuKSB0aGlzLmNoZWNrQ2hpbGRyZW4oKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByaW9yaXR5QnV0dG9uOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIHByaW9yaXR5IGJ1dHRvbiB3YXMgcHJlc3NlZFwiLCB0aGlzLnN0YXRlKTtcbiAgICAgIH0sXG4gICAgICBlZGl0QnV0dG9uOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGVkaXQgYnV0dG9uIHdhcyBwcmVzc2VkXCIsIHRoaXMuc3RhdGUpO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZUJ1dHRvbjogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBkZWxldGUgYnV0dG9uIHdhcyBwcmVzc2VkXCIsIHRoaXMuc3RhdGUpO1xuICAgICAgfSxcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrQ29tcG9uZW50O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgTmVyb3MgZnJvbSBcIi4uL05lcm9zXCI7XG5pbXBvcnQgVGFza0NvbXBvbmVudCBmcm9tIFwiLi9UYXNrQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBOZXdUb2RvQ29tcG9uZW50IH0gZnJvbSBcIi4vTmV3VG9kb0NvbXBvbmVudFwiO1xuaW1wb3J0IG1vZGFsIGZyb20gXCIuLi9tb2RhbFwiO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNsYXNzIFRvZG9Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbW92ZVRvQ29tcGxldGVkKGVsZW1lbnQpIHtcbiAgICBsZXQgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wbGV0ZWRUb2Rvc1wiKTtcbiAgICBjb21wbGV0ZWQuYXBwZW5kKGVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgbW92ZVRvUGVuZGluZyhlbGVtZW50KSB7XG4gICAgbGV0IHBlbmRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BlbmRpbmdUb2Rvc1wiKTtcbiAgICBwZW5kaW5nLmFwcGVuZChlbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IobmFtZSwgc3RhdGUpIHtcbiAgICBzdXBlcihuYW1lLCBzdGF0ZSk7XG4gICAgdGhpcy5jcmVhdGVUYXNrQ29tcG9uZW50cygpO1xuICB9XG5cbiAgdGVtcGxhdGUgPSAoc3RhdGUpID0+XG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrQ29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic3VidGFza3NDb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYWRkU3VidGFzayc+KyBBZGQgU3VidGFzazwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgLy8gVGhpcyBtZXRob2QgdGFrZXMgdGhlIHN0YXRlIHRhc2tzIGFuZCBzdWJ0YXNrcyBhbmQgY29udmVydHMgdGhlbSBpbnRvIFRhc2tDb21wb25lbnRzLFxuICAvLyB0aGVuIGFzc2lnbiB0aG9zZSBjb21wb25lbnRzIHRvIGJlIHRoZSBuZXcgdmFsdWVzIGZvciBzdGF0ZSB0YXNrcyBhbmQgc3VidGFza3MuXG4gIGNyZWF0ZVRhc2tDb21wb25lbnRzKCkge1xuICAgIC8vIEkgZG9uJ3Qga25vdyBpZiB0aGlzIHNob3VsZCBnbyBoZXJlLCBidXQgYWxsIHRoaXMgZG9lcyBpcyBjb252ZXJ0IHRoZSB0b2RvIG9iamVjdFxuICAgIC8vIGluIHRoZSBzdGF0ZSBvYmplY3QgYW5kIHR1cm4gaXQgaW50byBhIHRhc2tDb21wb25lbnQsIHJlYWR5IHRvIGJlIHVzZWQuXG4gICAgdGhpcy5zdGF0ZS50YXNrRE9NID0gbmV3IFRhc2tDb21wb25lbnQoXCJ0YXNrXCIsIHtcbiAgICAgIHRvZG86IHRoaXMuc3RhdGUudGFzayxcbiAgICAgIGNsYXNzZXM6IFtcInRhc2tcIl0sXG4gICAgfSkuRE9NZWxlbWVudCgpO1xuICAgIC8vIFRoaXMgdGFrZXMgdGhlIGNoaWxkcmVuIGFycmF5IGFuZCBhcHBsaWVzIHRoZSBzYW1lIHByb2Nlc3MgYWJvdmUgdG8gZWFjaCB0YXNrXG4gICAgdGhpcy5zdGF0ZS5zdWJ0YXNrc0RPTSA9IHRoaXMuc3RhdGUuc3VidGFza3MubWFwKCh0YXNrKSA9PlxuICAgICAgbmV3IFRhc2tDb21wb25lbnQoXCJzdWJ0YXNrXCIsIHtcbiAgICAgICAgdG9kbzogdGFzayxcbiAgICAgICAgY2xhc3NlczogW1widGFza1wiLCBcInN1YnRhc2tcIl0sXG4gICAgICB9KS5ET01lbGVtZW50KClcbiAgICApO1xuICB9XG5cbiAgLy8gVGhpcyBtZXRob2QgdGFrZXMgdGhlIGJ1dHRvbiBlbGVtZW50IGFuZCBhZGRzIHRoZSBldmVudCBsaXN0ZW5lciB0byBjcmVhdGUgYSBzdWJ0YXNrXG4gIGFkZFN1YnRhc2soYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLnNob3dNb2RhbCh0aGlzLnN0YXRlLnRhc2spO1xuICAgIH0pO1xuICB9XG5cbiAgRE9NZWxlbWVudCgpIHtcbiAgICBsZXQgZWxlbWVudCA9IHN1cGVyLkRPTWVsZW1lbnQoKTtcbiAgICBsZXQgc3VidGFzayA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJ0YXNrc0NvbnRhaW5lclwiKTtcbiAgICBsZXQgYnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFN1YnRhc2tcIik7XG4gICAgdGhpcy5hZGRTdWJ0YXNrKGJ1dHRvbik7XG5cbiAgICBlbGVtZW50LnByZXBlbmQodGhpcy5zdGF0ZS50YXNrRE9NKTtcbiAgICB0aGlzLnN0YXRlLnN1YnRhc2tzRE9NLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHN1YnRhc2suaW5zZXJ0QmVmb3JlKHRhc2ssIGJ1dHRvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzaG93TW9kYWwocGFyZW50KSB7XG4gICAgbGV0IG1vZGFsRWxlbWVudCA9IG5ldyBOZXJvcyhcIm1vZGFsQ29udGFpbmVyXCIpO1xuICAgIGxldCBuZXdUb2RvID0gbmV3IE5ld1RvZG9Db21wb25lbnQoXCJuZXdUb2RvXCIsIHsgcGFyZW50OiBwYXJlbnQgfSk7XG5cbiAgICBtb2RhbEVsZW1lbnQucmVnaXN0ZXJDb21wb25lbnQobmV3VG9kbyk7XG4gICAgbW9kYWwuc2hvdygpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9Db21wb25lbnQ7XG4iLCJpbXBvcnQgRE9NSGFuZGxlciBmcm9tIFwiLi4vRE9NSGFuZGxlclwiO1xuaW1wb3J0IFByaW9yaXR5IGZyb20gXCIuLi9wcmlvcml0eVwiO1xuaW1wb3J0IGNsb3NlIGZyb20gXCIuLi8uLi9hc3NldHMvY2xvc2Uuc3ZnXCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi4vdG9kb1wiO1xuXG5jb25zdCBET01OZXcgPSAoKCkgPT4ge1xuICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsQ29udGFpbmVyXCIpO1xuICBjb25zdCBfY3JlYXRlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgbGV0IHNlbGVjdCA9IERPTUhhbmRsZXIuY3JlYXRlRmllbGQoXCJQcmlvcml0eVwiLCBcInNlbGVjdFwiKTtcbiAgICBQcmlvcml0eS5wcmlvcml0aWVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBvcHRpb24gPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwgZWxlbWVudC5uYW1lKTtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IGVsZW1lbnQubmFtZTtcbiAgICAgIC8vQXBwZW5kIHRoZSBwcmlvcml0eSBvcHRpb24gdG8gdGhlIDxzZWxlY3Q+IGVsZW1lbnQsIHdoaWNoIGlzIHRoZSBzZWNvbmQgaW4gdGhlIGNvbnRhaW5lclxuICAgICAgc2VsZWN0LmNoaWxkTm9kZXNbMV0uYXBwZW5kKG9wdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGVjdDtcbiAgfTtcblxuICBjb25zdCBfY3JlYXRlRm9ybSA9ICgpID0+IHtcbiAgICBsZXQgZm9ybSA9IERPTUhhbmRsZXIuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgXCJuZXdGb3JtXCIpO1xuXG4gICAgZm9ybS5hcHBlbmQoRE9NSGFuZGxlci5jcmVhdGVGaWVsZChcIlRpdGxlXCIpKTtcbiAgICBmb3JtLmFwcGVuZChET01IYW5kbGVyLmNyZWF0ZUZpZWxkKFwiRHVlIGRhdGVcIiwgXCJpbnB1dFwiLCBcImRhdGVcIikpO1xuICAgIGZvcm0uYXBwZW5kKF9jcmVhdGVEcm9wZG93bigpKTtcbiAgICBmb3JtLmFwcGVuZChET01IYW5kbGVyLmNyZWF0ZUZpZWxkKFwiRGVzY3JpcHRpb25cIiwgXCJ0ZXh0YXJlYVwiKSk7XG5cbiAgICByZXR1cm4gZm9ybTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVOZXdUb2RvTW9kYWwgPSAocGFyZW50ID0gbnVsbCwgdG9kb0NvbnRhaW5lciA9IG51bGwpID0+IHtcbiAgICBsZXQgdGl0bGUgPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcIm5ld1RpdGxlXCIsIFwiQ3JlYXRlIHRvZG9cIik7XG4gICAgbGV0IGZvcm0gPSBfY3JlYXRlRm9ybSgpO1xuICAgIGxldCBjcmVhdGVCdXR0b24gPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgXCJjcmVhdGVCdXR0b25cIixcbiAgICAgIFwiQ3JlYXRlXCJcbiAgICApO1xuICAgIGxldCBjb250YWluZXIgPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJuZXdDb250YWluZXJcIik7XG4gICAgY3JlYXRlQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZCh0aXRsZSk7XG4gICAgZm9ybS5hcHBlbmQoY3JlYXRlQnV0dG9uKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGZvcm0pO1xuICAgIG1vZGFsLmFwcGVuZChjb250YWluZXIpO1xuXG4gICAgY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsZXQgdG9kbyA9IGNyZWF0ZVRvZG9PYmplY3QoZm9ybSwgcGFyZW50KTtcbiAgICAgIGxldCB0b2RvRWxlbWVudCA9IERPTVRvZG8uY3JlYXRlVGFzayh0b2RvLCB0cnVlKTtcbiAgICAgIHRvZG9Db250YWluZXIuaW5zZXJ0QmVmb3JlKHRvZG9FbGVtZW50LCB0b2RvQ29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgICAvLyBET01Nb2RhbC5oaWRlTW9kYWwoKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVUb2RvT2JqZWN0ID0gKGZvcm0sIHBhcmVudCkgPT4ge1xuICAgIGxldCB0aXRsZSA9IGZvcm0uVGl0bGUudmFsdWU7XG4gICAgbGV0IGRhdGUgPSBmb3JtLkR1ZWRhdGUudmFsdWU7XG4gICAgbGV0IHByaW9yaXR5ID0gZm9ybS5Qcmlvcml0eS5zZWxlY3RlZEluZGV4ICsgMTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBmb3JtLkRlc2NyaXB0aW9uLnZhbHVlO1xuXG4gICAgbGV0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBmYWxzZSwgcGFyZW50KTtcbiAgICByZXR1cm4gdG9kbztcbiAgfTtcblxuICByZXR1cm4geyBjcmVhdGVOZXdUb2RvTW9kYWwgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTU5ldztcbiIsImltcG9ydCB7IGVsIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFByb2plY3RDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Qcm9qZWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgTmVyb3MgZnJvbSBcIi4vTmVyb3NcIjtcblxuY29uc3QgaGVscGVyID0gKCgpID0+IHtcbiAgLy8gVGhpcyBtZXRob2QgZmluZHMgdGhlIGVsZW1lbnQgbWF0Y2hpbmcgdGhlIElEIG9uIHRoZSBnaXZlbiBhcnJheSBhbmQgZGVsZXRlcyBpdCBieSBpbmRleFxuICBjb25zdCBkZWxldGVJdGVtID0gKGFycmF5LCBpZCkgPT4ge1xuICAgIGxldCBmb3VuZCA9IGZpbmRUYXNrKFsuLi5hcnJheV0sIGlkKTtcbiAgICBsZXQgZm91bmRJbmRleCA9IGFycmF5LmluZGV4T2YoZm91bmQpO1xuICAgIGZvdW5kSW5kZXggPT09IDAgPyBhcnJheS5zaGlmdCgpIDogYXJyYXkuc3BsaWNlKGZvdW5kSW5kZXgsIGZvdW5kSW5kZXgpO1xuICAgIHJldHVybiBmb3VuZDtcbiAgfTtcblxuICAvLyBHaXZlbiBhbiBhcnJheSBvZiB0b2RvcyBhbmQgYW4gaWQsIHRoaXMgbWV0aG9kIHdpbGwgcmVjdXJzaXZlbHkgZmluZCB0aGUgdG9kb1xuICBjb25zdCBmaW5kVGFzayA9IChxdWV1ZSwgaWQpID0+IHtcbiAgICBsZXQgY3VycmVudCA9IHF1ZXVlWzBdO1xuICAgIGlmIChjdXJyZW50LmlkID09PSBpZCkgcmV0dXJuIGN1cnJlbnQ7XG4gICAgcXVldWUuc2hpZnQoKTtcblxuICAgIGlmICghY3VycmVudC5pc1N1YnRhc2soKSkgcXVldWUgPSBbLi4ucXVldWUsIC4uLmN1cnJlbnQuY2hpbGRyZW5dO1xuICAgIHJldHVybiBmaW5kVGFzayhxdWV1ZSwgaWQpO1xuICB9O1xuXG4gIC8vIE1lcmdlIHNvcnQgYWxnb3JpdGhtXG5cbiAgY29uc3QgbWVyZ2VTb3J0ID0gKGFycmF5KSA9PiB7XG4gICAgbGV0IHNvcnRlZEFycmF5ID0gW107XG4gICAgaWYgKGFycmF5Lmxlbmd0aCA8IDIpIHtcbiAgICAgIHNvcnRlZEFycmF5LnB1c2goYXJyYXlbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgaGFsZiA9IE1hdGguZmxvb3IoYXJyYXkubGVuZ3RoIC8gMik7XG4gICAgICBsZXQgYXJyYXkxID0gbWVyZ2VTb3J0KGFycmF5LnNwbGljZSgwLCBoYWxmKSk7XG4gICAgICBsZXQgYXJyYXkyID0gbWVyZ2VTb3J0KGFycmF5KTtcbiAgICAgIGxldCBjb3VudGVyID0gYXJyYXkxLmxlbmd0aCArIGFycmF5Mi5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnRlcjsgaW5kZXgrKykge1xuICAgICAgICBpZiAoYXJyYXkxLmxlbmd0aCA9PT0gMCB8fCBhcnJheTIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc29ydGVkQXJyYXkgPSBzb3J0ZWRBcnJheS5jb25jYXQoYXJyYXkxLmNvbmNhdChhcnJheTIpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJyYXkxWzBdLnByaW9yaXR5IDwgYXJyYXkyWzBdLnByaW9yaXR5KSB7XG4gICAgICAgICAgc29ydGVkQXJyYXkucHVzaChhcnJheTEuc2hpZnQoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc29ydGVkQXJyYXkucHVzaChhcnJheTIuc2hpZnQoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNvcnRlZEFycmF5O1xuICB9O1xuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byAnY2xlYXIgY29tcGxldGVkJyBidXR0b24sIHRoaXMgc2hvdWxkbid0IGJlIGhlcmUgYnV0XG4gIC8vIEkgZG9uJ3QgdGhpbmsgaXQncyB3b3J0aCBjcmVhdGluZyBhIG5ldyBtb2R1bGUganVzdCBmb3IgdGhpcy5cbiAgbGV0IGNsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbGVhckNvbXBsZXRlZFwiKTtcbiAgY2xlYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgcHJvamVjdCA9IFByb2plY3Quc2VsZWN0ZWQ7XG4gICAgbGV0IHByb2plY3RDb21wb25lbnQgPSBwcm9qZWN0LmNvbXBvbmVudDtcblxuICAgIFByb2plY3RDb21wb25lbnQucmVzZXRWaWV3KCk7XG4gICAgcHJvamVjdC5jbGVhckNvbXBsZXRlZFRvZG9zKCk7XG4gICAgcHJvamVjdENvbXBvbmVudC5kaXNwbGF5VG9kb3MoXCJjb21wbGV0ZWRcIiwgcHJvamVjdC5jb21wbGV0ZWQpO1xuICAgIHByb2plY3RDb21wb25lbnQuZGlzcGxheVRvZG9zKFwicGVuZGluZ1wiLCBwcm9qZWN0LnBlbmRpbmcpO1xuICB9KTtcblxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gJ0RlbGV0ZSB0aGlzIHByb2plY3QnIGJ1dHRvblxuICBsZXQgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVsZXRlUHJvamVjdFwiKTtcbiAgZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIE5lcm9zLmRlbGV0ZUNvbXBvbmVudChOZXJvcy5wcm9qZWN0cywgUHJvamVjdC5zZWxlY3RlZC5jb21wb25lbnQpO1xuICB9KTtcblxuICByZXR1cm4geyBkZWxldGVJdGVtLCBmaW5kVGFzaywgbWVyZ2VTb3J0IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBoZWxwZXI7XG4iLCJjb25zdCBpZEFzc2lnbmVyID0gKCgpID0+IHtcbiAgbGV0IGFzc2lnbmVyID0gMTtcblxuICBjb25zdCBnZXRJZE51bWJlciA9ICgpID0+IHtcbiAgICBhc3NpZ25lciArPSAxO1xuICAgIHJldHVybiBhc3NpZ25lciAtIDE7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0SWROdW1iZXIgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGlkQXNzaWduZXI7XG4iLCJpbXBvcnQgTmVyb3MgZnJvbSBcIi4vTmVyb3NcIjtcbmltcG9ydCB7IE5ld1RvZG9Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL05ld1RvZG9Db21wb25lbnRcIjtcbmltcG9ydCB7IE5ld1Byb2plY3RDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL05ld1Byb2plY3RDb21wb25lbnRcIjtcbmltcG9ydCBQcm9qZWN0Q29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvUHJvamVjdENvbXBvbmVudFwiO1xuXG5jb25zdCBtb2RhbCA9ICgoKSA9PiB7XG4gIGxldCBtb2RhbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsXCIpO1xuICBsZXQgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsQ29udGFpbmVyXCIpO1xuICBsZXQgYWRkVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkQmlnVG9kb1wiKTtcbiAgbGV0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFByb2plY3RcIik7XG5cbiAgY29uc3QgaGlkZSA9ICgpID0+IHtcbiAgICBtb2RhbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICByZXNldE1vZGFsKCk7XG4gIH07XG5cbiAgY29uc3Qgc2hvdyA9ICgpID0+IHtcbiAgICBtb2RhbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfTtcblxuICBjb25zdCByZXNldE1vZGFsID0gKCkgPT4ge1xuICAgIG1vZGFsQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIH07XG5cbiAgLy8gSGlkZSBtb2RhbCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlXG4gIG1vZGFsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbEVsZW1lbnQpIHtcbiAgICAgIGhpZGUoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFNob3cgbW9kYWwgd2l0aCBuZXcgdG9kbyBmb3JtIHdoZW4gdGhlICdhZGQgbmV3IHRvZG8nIGJ1dHRvbiBpcyBjbGlja2VkXG4gIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgbW9kYWwgPSBuZXcgTmVyb3MoXCJtb2RhbENvbnRhaW5lclwiKTtcbiAgICBsZXQgbmV3VG9kbyA9IG5ldyBOZXdUb2RvQ29tcG9uZW50KFwibmV3VG9kb1wiLCB7IHBhcmVudDogbnVsbCB9KTtcblxuICAgIG1vZGFsLnJlZ2lzdGVyQ29tcG9uZW50KG5ld1RvZG8pO1xuICAgIHNob3coKTtcbiAgfSk7XG5cbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvICdBZGQgbmV3IHByb2plY3QnIGJ1dHRvblxuXG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgbW9kYWwgPSBuZXcgTmVyb3MoXCJtb2RhbENvbnRhaW5lclwiKTtcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBOZXdQcm9qZWN0Q29tcG9uZW50KFwibmV3UHJvamVjdFwiKTtcblxuICAgIG1vZGFsLnJlZ2lzdGVyQ29tcG9uZW50KG5ld1Byb2plY3QpO1xuICAgIHNob3coKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBoaWRlLFxuICAgIHNob3csXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBtb2RhbDtcbiIsImNsYXNzIFByaW9yaXR5IHtcbiAgI25hbWU7XG4gICNudW1iZXI7XG4gIGNvbG9yO1xuXG4gIHN0YXRpYyAjcHJpb3JpdGllc0FycmF5ID0gW1xuICAgIG5ldyBQcmlvcml0eShcIlVyZ2VudFwiLCAxLCBcIiNFODE2MTZcIiksXG4gICAgbmV3IFByaW9yaXR5KFwiSGlnaFwiLCAyLCBcIiNFRjU1MTNcIiksXG4gICAgbmV3IFByaW9yaXR5KFwiTWVkaXVtXCIsIDMsIFwiI0YzREQxMVwiKSxcbiAgICBuZXcgUHJpb3JpdHkoXCJMb3dcIiwgNCwgXCIjMjJDNTFGXCIpLFxuICAgIG5ldyBQcmlvcml0eShcIk9wdGlvbmFsXCIsIDUsIFwiIzIzMzZFMFwiKSxcbiAgXTtcblxuICBzdGF0aWMgZ2V0IHByaW9yaXRpZXMoKSB7XG4gICAgcmV0dXJuIFsuLi5Qcmlvcml0eS4jcHJpb3JpdGllc0FycmF5XTtcbiAgfVxuXG4gIHN0YXRpYyBwcmlvcml0eShudW1iZXIpIHtcbiAgICByZXR1cm4gUHJpb3JpdHkuI3ByaW9yaXRpZXNBcnJheVtudW1iZXIgLSAxXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIG51bWJlciwgY29sb3IpIHtcbiAgICB0aGlzLiNuYW1lID0gbmFtZTtcbiAgICB0aGlzLiNudW1iZXIgPSBudW1iZXI7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI25hbWU7XG4gIH1cblxuICBnZXQgbnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLiNudW1iZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpb3JpdHk7XG4iLCIvKiAxLi0gSWYgYSB0b2RvJ3MgaXMgYSBwYXJlbnQsIHRoZXkgZ2V0IGFkZGVkIHRvIHRoZSBwZW5kaW5nIHRhc2tzIHdoZW4gY3JlYXRlZFxuICAgMi4tIFNvcnQgdGhlIHBlbmRpbmcgdGFza3MgYXJyYXkgYnkgcHJpb3JpdHksIGFuZCBzb3J0IHRoZSBjaGlsZHJlbiBhcnJheSBieSBwcmlvcml0eSBhcyB3ZWxsICovXG5cbmltcG9ydCBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5pbXBvcnQgUHJvamVjdENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL1Byb2plY3RDb21wb25lbnRcIjtcbmNsYXNzIFByb2plY3Qge1xuICAjcGVuZGluZ1Rhc2tzO1xuICAjY29tcGxldGVkVGFza3M7XG5cbiAgc3RhdGljIHNlbGVjdGVkO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29tcG9uZW50ID0gbmV3IFByb2plY3RDb21wb25lbnQobmFtZSwgeyBwcm9qZWN0OiB0aGlzIH0pO1xuICAgIHRoaXMuI3BlbmRpbmdUYXNrcyA9IFtdO1xuICAgIHRoaXMuI2NvbXBsZXRlZFRhc2tzID0gW107XG4gIH1cblxuICBnZXQgcGVuZGluZygpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuI3BlbmRpbmdUYXNrc107XG4gIH1cblxuICBnZXQgY29tcGxldGVkKCkge1xuICAgIHJldHVybiBbLi4udGhpcy4jY29tcGxldGVkVGFza3NdO1xuICB9XG5cbiAgYWRkUGVuZGluZyhpdGVtKSB7XG4gICAgdGhpcy4jcGVuZGluZ1Rhc2tzLnB1c2goaXRlbSk7XG4gIH1cblxuICBhZGRDb21wbGV0ZWQoaXRlbSkge1xuICAgIHRoaXMuI2NvbXBsZXRlZFRhc2tzLnB1c2goaXRlbSk7XG4gIH1cblxuICBjb21wbGV0ZVRvZG8oaWQpIHtcbiAgICBsZXQgdGFzayA9IGhlbHBlci5kZWxldGVJdGVtKHRoaXMuI3BlbmRpbmdUYXNrcywgaWQpO1xuICAgIHRoaXMuYWRkQ29tcGxldGVkKHRhc2spO1xuICB9XG5cbiAgcmVzdW1lVG9kbyhpZCkge1xuICAgIGxldCB0YXNrID0gaGVscGVyLmRlbGV0ZUl0ZW0odGhpcy4jY29tcGxldGVkVGFza3MsIGlkKTtcbiAgICB0aGlzLmFkZFBlbmRpbmcodGFzayk7XG4gIH1cblxuICBjbGVhckNvbXBsZXRlZFRvZG9zKCkge1xuICAgIHRoaXMuI2NvbXBsZXRlZFRhc2tzID0gW107XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImltcG9ydCBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5pbXBvcnQgaWRBc3NpZ25lciBmcm9tIFwiLi9pZEFzc2lnbmVyXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgVG9kb0NvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL1RvZG9Db21wb25lbnRcIjtcbmltcG9ydCBjaGVja2VkIGZyb20gXCIuLi9hc3NldHMvY2hlY2tlZC5zdmdcIjtcbmltcG9ydCB1bmNoZWNrZWQgZnJvbSBcIi4uL2Fzc2V0cy91bmNoZWNrZWQuc3ZnXCI7XG5cbi8qIDEuLSBCZSBhYmxlIHRvIGNyZWF0ZSBhbmQgZGVsZXRlIHRvZG8ncyDinJTvuI9cbiAgIDIuLSBJZiBhIHRvZG8ncyBpcyBhIHBhcmVudCwgdGhleSBnZXQgYWRkZWQgdG8gdGhlIHBlbmRpbmcgdGFza3Mgd2hlbiBjcmVhdGVkIOKclO+4j1xuICAgMy4tIElmIGEgcGFyZW50IHRvZG8gaXMgZGVsZXRlZCwgYWxsIGl0J3MgY2hpbGRyZW4gYXJlIGRlbGV0ZWQgYXMgd2VsbCDinJTvuI9cbiAgIDQuLSBPbmx5IHBhcmVudCdzIHRvZG8gd2lsbCBiZSBhZGRlZCB0byB0aGUgY29tcGxldGVkIHRhc2tzIGFycmF5LCBpZiBhIHBhcmVudCB0b2RvIGlzIGNoZWNrZWQsIGFsbCBpdCdzIGNoaWxkcmVuIHdpbGwgYmUg4pyU77iPXG4gICA1Li0gU29ydCB0aGUgcGVuZGluZyB0YXNrcyBhcnJheSBieSBwcmlvcml0eSwgYW5kIHNvcnQgdGhlIGNoaWxkcmVuIGFycmF5IGJ5IHByaW9yaXR5IGFzIHdlbGwgKi9cblxuY2xhc3MgVG9kbyB7XG4gICNwYXJlbnQ7XG4gICNjaGlsZHJlbjtcbiAgI2lkO1xuICAjaXNDaGVja2VkO1xuICAjcHJvamVjdDtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBpc0NoZWNrZWQsIHBhcmVudCA9IG51bGwpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuI2lzQ2hlY2tlZCA9IGlzQ2hlY2tlZDtcbiAgICB0aGlzLiNpZCA9IGlkQXNzaWduZXIuZ2V0SWROdW1iZXIoKTtcbiAgICB0aGlzLiNwYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy4jcHJvamVjdCA9IFByb2plY3Quc2VsZWN0ZWQ7XG4gICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IG51bGw7XG4gICAgaWYgKHRoaXMuI3BhcmVudCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy4jY2hpbGRyZW4gPSBbXTtcbiAgICAgIC8vIElmIHRoZSB0b2RvIGlzIGFscmVhZHkgY2hlY2tlZCBhZGQgaXQgdG8gdGhlIGNvbXBsZXRlZCB0YXNrcyBhcnJheVxuICAgICAgLy8gb2YgdGhlIHBhcmVudCBwcm9qZWN0XG4gICAgICB0aGlzLmNoZWNrXG4gICAgICAgID8gUHJvamVjdC5zZWxlY3RlZC5hZGRDb21wbGV0ZWQodGhpcylcbiAgICAgICAgOiBQcm9qZWN0LnNlbGVjdGVkLmFkZFBlbmRpbmcodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2NoaWxkcmVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlVG9kbyh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBpc0NoZWNrZWQpIHtcbiAgICBsZXQgYSA9IG5ldyBUb2RvKHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGlzQ2hlY2tlZCwgdGhpcyk7XG4gICAgdGhpcy4jY2hpbGRyZW4ucHVzaChhKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jaWQ7XG4gIH1cblxuICBnZXQgY2hpbGRyZW4oKSB7XG4gICAgaWYgKHRoaXMuI2NoaWxkcmVuKSByZXR1cm4gWy4uLnRoaXMuI2NoaWxkcmVuXTtcbiAgICByZXR1cm4gdGhpcy4jY2hpbGRyZW47XG4gIH1cblxuICBnZXQgcGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLiNwYXJlbnQ7XG4gIH1cblxuICB0b2dnbGVDaGVjaygpIHtcbiAgICBpZiAodGhpcy4jaXNDaGVja2VkKSB7XG4gICAgICB0aGlzLnVuY2hlY2tUb2RvKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hlY2tUb2RvKCk7XG4gICAgfVxuICB9XG5cbiAgdW5jaGVja1RvZG8oKSB7XG4gICAgbGV0IGVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7XG4gICAgbGV0IGltZyA9XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGVja0J1dHRvbk1pbmlcIikuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgdGhpcy4jaXNDaGVja2VkID0gZmFsc2U7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkVGFza1wiKTtcbiAgICBpbWcuc3JjID0gdW5jaGVja2VkO1xuICAgIGlmICh0aGlzLiNwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIFRvZG9Db21wb25lbnQubW92ZVRvUGVuZGluZyhlbGVtZW50KTtcbiAgICAgIHRoaXMucHJvamVjdC5yZXN1bWVUb2RvKHRoaXMuaWQpO1xuICAgICAgdGhpcy5wcm9qZWN0LmNvbXBvbmVudC5yZWZyZXNoVG9kb3MoKTtcbiAgICB9XG4gIH1cblxuICBjaGVja1RvZG8oKSB7XG4gICAgbGV0IGVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7XG4gICAgbGV0IGltZyA9XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGVja0J1dHRvbk1pbmlcIikuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgdGhpcy4jaXNDaGVja2VkID0gdHJ1ZTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRUYXNrXCIpO1xuICAgIGltZy5zcmMgPSBjaGVja2VkO1xuICAgIGlmICh0aGlzLiNwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIFRvZG9Db21wb25lbnQubW92ZVRvQ29tcGxldGVkKGVsZW1lbnQpO1xuICAgICAgdGhpcy5wcm9qZWN0LmNvbXBsZXRlVG9kbyh0aGlzLmlkKTtcbiAgICAgIHRoaXMucHJvamVjdC5jb21wb25lbnQucmVmcmVzaFRvZG9zKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3Byb2plY3Q7XG4gIH1cblxuICBnZXQgY2hlY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lzQ2hlY2tlZDtcbiAgfVxuXG4gIGlzU3VidGFzaygpIHtcbiAgICByZXR1cm4gdGhpcy4jcGFyZW50ICE9PSBudWxsO1xuICB9XG5cbiAgI3JlY3Vyc2l2ZUNoZWNrKGFycmF5LCBpbmRleCA9IDApIHtcbiAgICBpZiAoYXJyYXlbaW5kZXhdICYmIGFycmF5W2luZGV4XS5jaGVjayA9PT0gZmFsc2UpIHtcbiAgICAgIGFycmF5W2luZGV4XS50b2dnbGVDaGVjaygpO1xuICAgICAgcmV0dXJuIHRoaXMuI3JlY3Vyc2l2ZUNoZWNrKGFycmF5LCBpbmRleCArIDEpO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvL0ltcG9ydCBzdGF0ZW1lbnRzXG5pbXBvcnQgXCIuL3N0eWxlL21haW4uc2Nzc1wiO1xuaW1wb3J0IE5lcm9zIGZyb20gXCIuL21vZHVsZXMvTmVyb3NcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL21vZHVsZXMvdG9kb1wiO1xuaW1wb3J0IFRhc2tDb21wb25lbnQgZnJvbSBcIi4vbW9kdWxlcy9jb21wb25lbnRzL1Rhc2tDb21wb25lbnRcIjtcbmltcG9ydCBUb2RvQ29tcG9uZW50IGZyb20gXCIuL21vZHVsZXMvY29tcG9uZW50cy9Ub2RvQ29tcG9uZW50XCI7XG5pbXBvcnQgUHJvamVjdENvbXBvbmVudCBmcm9tIFwiLi9tb2R1bGVzL2NvbXBvbmVudHMvUHJvamVjdENvbXBvbmVudFwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0XCI7XG5pbXBvcnQgeyBOZXdUb2RvQ29tcG9uZW50IH0gZnJvbSBcIi4vbW9kdWxlcy9jb21wb25lbnRzL05ld1RvZG9Db21wb25lbnRcIjtcbmltcG9ydCBoZWxwZXIgZnJvbSBcIi4vbW9kdWxlcy9oZWxwZXJcIjtcbmltcG9ydCBET01OZXcgZnJvbSBcIi4vbW9kdWxlcy9jb21wb25lbnRzL25ld1wiO1xuXG4vL0luaXRpYWxpemUgbW9kdWxlc1xuY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiQmlnIHByb2plY3RcIik7XG5Qcm9qZWN0LnNlbGVjdGVkID0gcHJvamVjdDtcbmNvbnN0IHByb2plY3RNb2R1bGUgPSBOZXJvcy5wcm9qZWN0cztcblxubGV0IHRvZG8xID0gbmV3IFRvZG8oXG4gIFwiRmlyc3QgT09QIHRvZG9cIixcbiAgXCIyNC0wNS0yMDIzXCIsXG4gIDQsXG4gIFwiVGhpcyBpcyBhIHRvZG8gbWFkZSB3aXRoIE9PUCBwcmluY2lwbGVzXCIsXG4gIGZhbHNlXG4pO1xuXG50b2RvMS5jcmVhdGVUb2RvKFxuICBcImZpcnN0IG9mIEZpcnN0IE9PUCB0b2RvXCIsXG4gIFwiMjQtMDUtMjAyM1wiLFxuICAyLFxuICBcIlRoaXMgaXMgYSB0b2RvIG1hZGUgd2l0aCBPT1AgcHJpbmNpcGxlcyAxXCIsXG4gIGZhbHNlXG4pO1xuXG50b2RvMS5jcmVhdGVUb2RvKFxuICBcInNlY29uZCBvZiBGaXJzdCBPT1AgdG9kb1wiLFxuICBcIjI0LTA1LTIwMjNcIixcbiAgNSxcbiAgXCJUaGlzIGlzIGEgdG9kbyBtYWRlIHdpdGggT09QIHByaW5jaXBsZXMgMlwiLFxuICBmYWxzZVxuKTtcblxuY29uc3QgcHJvamVjdDIgPSBuZXcgUHJvamVjdChcIlNlY29uZCBiaWcgcHJvamVjdFwiKTtcbi8vIFByb2plY3Quc2VsZWN0ZWQgPSBwcm9qZWN0MjtcblxubGV0IHRvZG8yID0gbmV3IFRvZG8oXG4gIFwic2Vjb25kIE9PUCB0b2RvXCIsXG4gIFwiMjQtMDUtMjAyM1wiLFxuICAxLFxuICBcIlRoaXMgaXMgYSB0b2RvIG1hZGUgd2l0aCBPT1AgcHJpbmNpcGxlc1wiLFxuICBmYWxzZVxuKTtcblxudG9kbzIuY3JlYXRlVG9kbyhcbiAgXCJmaXJzdCBvZiBzZWNvbmQgT09QIHRvZG9cIixcbiAgXCIyNC0wNS0yMDIzXCIsXG4gIDQsXG4gIFwiVGhpcyBpcyBhIHRvZG8gbWFkZSB3aXRoIE9PUCBwcmluY2lwbGVzIDFcIixcbiAgZmFsc2Vcbik7XG5cbnRvZG8yLmNyZWF0ZVRvZG8oXG4gIFwic2Vjb25kIG9mIHNlY29uZCBPT1AgdG9kb1wiLFxuICBcIjI0LTA1LTIwMjNcIixcbiAgMSxcbiAgXCJUaGlzIGlzIGEgdG9kbyBtYWRlIHdpdGggT09QIHByaW5jaXBsZXMgMlwiLFxuICBmYWxzZVxuKTtcblxudG9kbzIuY3JlYXRlVG9kbyhcbiAgXCJzZWNvbmQgb2Ygc2Vjb25kIE9PUCB0b2RvXCIsXG4gIFwiMjQtMDUtMjAyM1wiLFxuICAzLFxuICBcIlRoaXMgaXMgYSB0b2RvIG1hZGUgd2l0aCBPT1AgcHJpbmNpcGxlcyAyXCIsXG4gIGZhbHNlXG4pO1xuXG50b2RvMi5jcmVhdGVUb2RvKFxuICBcInNlY29uZCBvZiBzZWNvbmQgT09QIHRvZG9cIixcbiAgXCIyNC0wNS0yMDIzXCIsXG4gIDIsXG4gIFwiVGhpcyBpcyBhIHRvZG8gbWFkZSB3aXRoIE9PUCBwcmluY2lwbGVzIDJcIixcbiAgZmFsc2Vcbik7XG5cbnRvZG8yLmNyZWF0ZVRvZG8oXG4gIFwic2Vjb25kIG9mIHNlY29uZCBPT1AgdG9kb1wiLFxuICBcIjI0LTA1LTIwMjNcIixcbiAgNSxcbiAgXCJUaGlzIGlzIGEgdG9kbyBtYWRlIHdpdGggT09QIHByaW5jaXBsZXMgMlwiLFxuICBmYWxzZVxuKTtcbi8vIFByb2plY3Quc2VsZWN0ZWQgPSBudWxsO1xuXG5wcm9qZWN0TW9kdWxlLnJlZ2lzdGVyQ29tcG9uZW50KHByb2plY3QuY29tcG9uZW50KTtcbnByb2plY3RNb2R1bGUucmVnaXN0ZXJDb21wb25lbnQocHJvamVjdDIuY29tcG9uZW50KTtcblxubGV0IGZpcnN0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdENvbnRhaW5lclwiKTtcbmZpcnN0UHJvamVjdC5jbGljaygpO1xuLy8gcHJpb3JpdGllcy5yZWdpc3RlckNvbXBvbmVudChUZXN0Q29tcG9uZW50KTtcbi8vIGxldCBhID0gbmV3IFRleHRDb21wb25lbnQoXCJ0ZXh0XCIsIHtcbi8vICAgbmFtZTogXCJEb21lc3RpYyBhbmltYWxzXCIsXG4vLyAgIGNvbnRlbnRzOiBcIkNhdHMgYW5kIGRvZ3NcIixcbi8vIH0pO1xuLy8gcHJpb3JpdGllcy5yZWdpc3RlckNvbXBvbmVudChhKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==