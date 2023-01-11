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
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n  background-color: #343a40;\n  height: 90%;\n  min-width: 75%;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: grid;\n  grid-template-columns: minmax(200px, 1.2fr) 2px 3fr;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border-radius: 10px;\n  border-top: #464e55 4px solid;\n  border-left: #464e55 2px solid;\n}\n\n.separator {\n  background-color: #212529;\n}\n\n.mainContent {\n  display: grid;\n  grid-template-rows: 2fr 2px 1fr;\n}\n\n.pending {\n  border-bottom: #15181c 2px solid;\n  border-left: #464e55 2px solid;\n}\n\n.completed {\n  border-top: #464e55 2px solid;\n  border-left: #464e55 2px solid;\n}\n\n@media (max-width: 800px) {\n  .container {\n    width: 100%;\n    height: 100%;\n    grid-template-columns: 1fr;\n    border: none;\n    border-radius: 0;\n  }\n  .separator {\n    display: none;\n  }\n  .pending {\n    border-left: none;\n  }\n}\n.sidebar {\n  border-right: #15181c 2px solid;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.priorityName {\n  padding-left: 10px;\n  font-size: clamp(8px, 1vw, 64px);\n  margin: 0;\n  font-weight: 300;\n  align-self: center;\n  justify-self: center;\n}\n\n.priorityColorContainer {\n  background-color: #495057;\n  padding: clamp(8px, 0.3rem + 0.3vw, 64px);\n  outline: 2px solid #6c757d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.priorityColor {\n  border-radius: 50%;\n  height: clamp(14px, 0.5rem + 0.7vw, 64px);\n  width: clamp(14px, 0.5rem + 0.7vw, 64px);\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\n.priority {\n  background-color: #212529;\n  border-top: 2px solid #a0b1c3;\n  display: flex;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n}\n\n#priorities {\n  width: clamp(100px, 30% + 4vw, 600px);\n  display: flex;\n  flex-direction: column;\n  gap: clamp(6px, 0.3vw, 12px);\n  margin-bottom: clamp(10px, 0.7vw, 16px);\n}\n\n.priorityColorContainer .priorityColor {\n  height: clamp(14px, 0.5rem + 0.4vw, 64px);\n  width: clamp(14px, 0.5rem + 0.4vw, 64px);\n}\n\n@media (max-width: 800px) {\n  .sidebar {\n    display: none;\n  }\n}\n.sidebarButtons {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6vw;\n}\n\n.pendingTodos {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 50px;\n}\n\n.taskContainer {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: clamp(4px, 0.4vw, 8px);\n}\n\n.task {\n  display: flex;\n  background-color: #212529;\n  width: 100%;\n  min-width: max-content;\n  border-radius: 14px;\n  overflow: hidden;\n  border-top: 2px solid #a0b1c3;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n  justify-content: space-between;\n  margin: clamp(2px, 0.3vw, 8px) 0;\n}\n\n.taskMiniContainer {\n  background-color: #495057;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: clamp(8px, 0.5rem + 0.5vw, 64px);\n}\n\n.taskColor {\n  height: clamp(14px, 0.5rem + 0.7vw, 64px);\n  width: clamp(14px, 0.5rem + 0.7vw, 64px);\n  background-color: #e81616;\n  border-radius: 50%;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\n.taskButton {\n  height: clamp(14px, 0.5rem + 0.7vw, 64px);\n  width: clamp(14px, 0.5rem + 0.7vw, 64px);\n}\n\n.taskMiniContainer:nth-last-of-type(-n + 2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskMiniContainer:nth-child(-n+2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskTime {\n  padding-left: calc(1rem + 1vw);\n  padding-right: 10px;\n}\n.taskTime p {\n  white-space: nowrap;\n  color: #adb5bd;\n}\n\n.taskTitle {\n  margin-right: auto;\n  flex: 1;\n  padding-left: 10px;\n  width: clamp(150px, 10vw + 10rem, 500px);\n}\n.taskTitle p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.taskTitle,\n.taskTime {\n  justify-self: center;\n  align-self: center;\n}\n.taskTitle p,\n.taskTime p {\n  font-size: clamp(8px, 0.5rem + 0.7vw, 64px);\n  margin: 0;\n}\n\n.subtasksContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  align-self: flex-end;\n  width: 90%;\n}\n\n.subtask {\n  margin: clamp(2px, 0.1vw, 4px) 0;\n}\n.subtask .taskMiniContainer {\n  padding: clamp(8px, 0.4rem + 0.4vw, 48px);\n}\n.subtask .taskMiniContainer .taskButton {\n  height: clamp(10px, 0.5rem + 0.4vw, 36px);\n  width: clamp(10px, 0.5rem + 0.4vw, 36px);\n}\n.subtask .taskMiniContainer .taskColor {\n  width: clamp(10px, 0.5rem + 0.4vw, 36px);\n  height: clamp(10px, 0.5rem + 0.4vw, 36px);\n}\n.subtask .taskTitle p,\n.subtask .taskTime p {\n  font-size: clamp(6px, 0.5rem + 0.4vw, 36px);\n}\n\n.completedTask {\n  text-decoration: line-through;\n  opacity: 0.6;\n  border: none;\n  box-shadow: 0px 2px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n}\n\n.taskDataContainer {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  flex: 1 2;\n  cursor: pointer;\n}\n\n.addSubtask {\n  margin-top: 0.3vw;\n  align-self: flex-start;\n}\n\n.modal {\n  background-color: hsla(0deg, 0%, 0%, 0.502);\n  backdrop-filter: blur(3px);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#modalContainer {\n  background-color: #343a40;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border: 1px solid gray;\n  border-radius: 12px;\n  position: relative;\n  height: max-content;\n  max-height: 70vh;\n  width: max-content;\n  overflow-y: scroll;\n}\n\n.closeButton {\n  position: sticky;\n  top: 1vw;\n  left: 1vw;\n  height: 1.3vw;\n  width: 1.3vw;\n  z-index: 1;\n}\n\n.closeButton:hover {\n  cursor: pointer;\n}\n\nhr {\n  background-color: gray;\n  height: 1px;\n  border: none;\n}\n\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4vw;\n}\n.field label {\n  font-size: calc(1vw + 6px);\n}\n.field input,\n.field select,\n.field textarea {\n  font-size: calc(0.8vw + 4px);\n  border: none;\n  outline: none;\n  background: #212529;\n  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n  padding: calc(0.5vw + 2px);\n  border-radius: 0.5vw;\n  color: #f8f9fa;\n}\n\n.DuedateField input {\n  font-size: calc(0.8vw + 4px);\n}\n.DuedateField ::-webkit-calendar-picker-indicator {\n  padding: 5px;\n  cursor: pointer;\n  border-radius: 3px;\n  filter: invert(1);\n}\n\n.newForm {\n  min-width: 35vw;\n  padding: 0 calc(1vw + 6px) calc(1vw + 6px) calc(1vw + 6px);\n  display: grid;\n  grid-template-columns: min-content 2fr;\n  gap: calc(0.5vw + 4px);\n}\n\n.TitleField {\n  grid-column: 1/3;\n}\n\n.DescriptionField {\n  grid-column: 1/3;\n}\n.DescriptionField textarea {\n  resize: none;\n  height: 20vh;\n  max-height: 20vh;\n}\n\n.PriorityField select {\n  height: 100%;\n  appearance: none;\n  cursor: pointer;\n  background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg) no-repeat right 0.8em center/1.4em, #212529;\n  /* Remove focus outline */\n  /* Remove IE arrow */\n}\n.PriorityField select:focus {\n  outline: none;\n}\n.PriorityField select::-ms-expand {\n  display: none;\n}\n\n.newTitle {\n  padding: 0;\n  margin: 0;\n  padding: calc(1vw + 6px);\n}\n\n.createButton {\n  grid-column: 1/3;\n  width: max-content;\n  justify-self: center;\n}\n\n.titleView {\n  padding: 0;\n  margin: 0;\n  user-select: auto;\n  overflow-wrap: break-word;\n  text-align: center;\n  max-width: fit-content;\n  word-break: break-word;\n}\n\n.titleViewContainer {\n  display: flex;\n  justify-content: center;\n  margin: 0 2vw;\n}\n\n.descriptionViewContainer {\n  margin: 0 1vw;\n}\n\n.infoContainer {\n  display: grid;\n  min-width: clamp(250px, 70vh, 1000px);\n  grid-template-rows: 1fr auto max-content auto max-content;\n}\n\n.dateViewContainer {\n  display: flex;\n  flex-direction: column;\n}\n\nh3 {\n  margin: 0;\n}\n\n.dateStringContainer {\n  display: flex;\n}\n.dateStringContainer p {\n  margin: 0;\n  font-size: clamp(8px, 1vw, 64px);\n  font-weight: 300;\n}\n\n.priorityViewContainer {\n  display: flex;\n  flex-direction: column;\n}\n\n.todoDataContainer {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.todoDataContainer .priority {\n  border: none;\n}\n.todoDataContainer .priority .priorityName {\n  padding-right: 10px;\n}\n\n.mainTaskContainer {\n  border-bottom: #15181c 2px solid;\n  padding: 0 1vw 1vw 1vw;\n}\n\n.viewSubContainer {\n  border-top: #464e55 2px solid;\n  border-bottom: #15181c 2px solid;\n  padding: 1vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.viewSubContainer h1 {\n  padding: 0;\n  margin: 0;\n}\n\n.descriptionView {\n  max-width: fit-content;\n  overflow-wrap: break-word;\n}\n\n.ButtonsView {\n  border-top: #464e55 2px solid;\n  display: flex;\n  gap: 0.8vw;\n  justify-content: center;\n  width: 100%;\n  padding: 1vw 0;\n  position: sticky;\n  bottom: 0;\n  background-color: #343a40;\n}\n\nhtml {\n  font-size: 16px;\n  font-family: \"Poppins\", sans-serif;\n  color: #f8f9fa;\n}\n\nbody {\n  background: linear-gradient(119.75deg, #6e9ecf 13.02%, #12263a 100%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nh1 {\n  text-align: center;\n  font-size: 1.5vw;\n  padding: 0;\n  margin: 0.7vw 0;\n  user-select: none;\n}\n\n.projectTitle {\n  font-size: 1vw;\n  font-weight: 500;\n  padding: 0;\n  margin: 0;\n}\n\n.hidden {\n  display: none;\n}\n\nbutton {\n  background: #2887c8;\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px #6bb2e3;\n  border-radius: 8px;\n  outline: none;\n  border: none;\n  color: #f8f9fa;\n  padding: 6px 10px;\n  font-size: 1.1vw;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  cursor: pointer;\n}\n\n.deleteButton {\n  background: hsl(0deg, 82%, 63%);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px hsl(0deg, 67%, 77%);\n}\n\n.editButton {\n  background: rgb(111, 184, 55);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px rgb(188, 229, 156);\n}", "",{"version":3,"sources":["webpack://./src/style/_container.scss","webpack://./src/style/main.scss","webpack://./src/style/_priorities.scss","webpack://./src/style/_task.scss","webpack://./src/style/_modal.scss","webpack://./src/style/_form.scss","webpack://./src/style/_viewTodo.scss"],"names":[],"mappings":"AAAA;EACE,yBAAA;EACA,WAAA;EACA,cAAA;EACA,eAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,aAAA;EACA,mDAAA;EACA,0CAAA;EACA,mBAAA;EACA,6BAAA;EACA,8BAAA;ACCF;;ADEA;EACE,yBAAA;ACCF;;ADEA;EACE,aAAA;EACA,+BAAA;ACCF;;ADEA;EACE,gCAAA;EACA,8BAAA;ACCF;;ADEA;EACE,6BAAA;EACA,8BAAA;ACCF;;ADEA;EACE;IACE,WAAA;IACA,YAAA;IACA,0BAAA;IACA,YAAA;IACA,gBAAA;ECCF;EDEA;IACE,aAAA;ECAF;EDGA;IACE,iBAAA;ECDF;AACF;ADIA;EACE,+BAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;ACFF;;ACnDA;EACE,kBAAA;EACA,gCANqB;EAOrB,SAAA;EACA,gBAAA;EACA,kBAAA;EACA,oBAAA;ADsDF;;ACnDA;EACE,yBAAA;EACA,yCAAA;EACA,0BAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ADsDF;;ACnDA;EACE,kBAAA;EACA,yCAvBuB;EAwBvB,wCAxBuB;EAyBvB,0CAAA;ADsDF;;ACnDA;EACE,yBAAA;EACA,6BAAA;EACA,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,0CAAA;ADsDF;;ACnDA;EACE,qCAAA;EACA,aAAA;EACA,sBAAA;EACA,4BAAA;EACA,uCAAA;ADsDF;;AClDE;EACE,yCA9CmB;EA+CnB,wCA/CmB;ADoGvB;;ACjDA;EACE;IACE,aAAA;EDoDF;AACF;ACjDA;EACE,aAAA;EACA,sBAAA;EACA,UAAA;ADmDF;;AE7GA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,eAAA;AFgHF;;AE7GA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EACA,qCAAA;AFgHF;;AE7GA;EACE,aAAA;EACA,yBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;EACA,6BAAA;EACA,0CAAA;EACA,8BAAA;EACA,gCAAA;AFgHF;;AE7GA;EACE,yBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,yCAAA;AFgHF;;AE7GA;EACE,yCAvC2B;EAwC3B,wCAxC2B;EAyC3B,yBAAA;EACA,kBAAA;EACA,0CAAA;AFgHF;;AE7GA;EACE,yCA/C2B;EAgD3B,wCAhD2B;AFgK7B;;AE7GA;EACE,0BAAA;AFgHF;;AE7GA;EACE,0BAAA;AFgHF;;AE7GA;EACE,8BAAA;EACA,mBAAA;AFgHF;AE9GE;EACE,mBAAA;EACA,cAAA;AFgHJ;;AE5GA;EACE,kBAAA;EACA,OAAA;EACA,kBAAA;EACA,wCAAA;AF+GF;AE7GE;EACE,gBAAA;EACA,uBAAA;EACA,mBAAA;AF+GJ;;AE3GA;;EAEE,oBAAA;EACA,kBAAA;AF8GF;AE7GE;;EACE,2CAxFuB;EAyFvB,SAAA;AFgHJ;;AE5GA;EACE,aAAA;EACA,sBAAA;EACA,qBAAA;EACA,oBAAA;EACA,UAAA;AF+GF;;AE5GA;EACE,gCAAA;AF+GF;AE5GE;EACE,yCAAA;AF8GJ;AE5GI;EACE,yCA1GyB;EA2GzB,wCA3GyB;AFyN/B;AE3GI;EACE,wCA/GyB;EAgHzB,yCAhHyB;AF6N/B;AEvGI;;EACE,2CAxHuB;AFkO7B;;AErGA;EACE,6BAAA;EACA,YAAA;EACA,YAAA;EACA,uFAAA;AFwGF;;AErGA;EACE,aAAA;EACA,8BAAA;EACA,WAAA;EACA,SAAA;EACA,eAAA;AFwGF;;AErGA;EACE,iBAAA;EACA,sBAAA;AFwGF;;AGxPA;EACE,2CAAA;EACA,0BAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AH2PF;;AGxPA;EACE,yBAAA;EACA,0CAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;AH2PF;;AGxPA;EACE,gBAAA;EACA,QAAA;EACA,SAAA;EACA,aAAA;EACA,YAAA;EACA,UAAA;AH2PF;;AGxPA;EACE,eAAA;AH2PF;;AGxPA;EACE,sBAAA;EACA,WAAA;EACA,YAAA;AH2PF;;AIxSA;EACE,aAAA;EACA,sBAAA;EACA,UAAA;AJ2SF;AIzSE;EACE,0BAAA;AJ2SJ;AIxSE;;;EAGE,4BAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uFAAA;EACA,0BAAA;EACA,oBAAA;EACA,cAAA;AJ0SJ;;AIrSE;EACE,4BAAA;AJwSJ;AIrSE;EACE,YAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;AJuSJ;;AInSA;EACE,eAAA;EACA,0DAAA;EACA,aAAA;EACA,sCAAA;EACA,sBAAA;AJsSF;;AInSA;EACE,gBAAA;AJsSF;;AInSA;EACE,gBAAA;AJsSF;AIpSE;EACE,YAAA;EACA,YAAA;EACA,gBAAA;AJsSJ;;AIjSE;EACE,YAAA;EACA,gBAAA;EACA,eAAA;EACA,2JAAA;EAGA,yBAAA;EAIA,oBAAA;AJ+RJ;AIlSI;EACE,aAAA;AJoSN;AIjSI;EACE,aAAA;AJmSN;;AI9RA;EACE,UAAA;EACA,SAAA;EACA,wBAAA;AJiSF;;AI9RA;EACE,gBAAA;EACA,kBAAA;EACA,oBAAA;AJiSF;;AKvXA;EACE,UAAA;EACA,SAAA;EACA,iBAAA;EACA,yBAAA;EACA,kBAAA;EACA,sBAAA;EACA,sBAAA;AL0XF;;AKvXA;EACE,aAAA;EACA,uBAAA;EACA,aAAA;AL0XF;;AKvXA;EACE,aAAA;AL0XF;;AKvXA;EACE,aAAA;EACA,qCAAA;EACA,yDAAA;AL0XF;;AKvXA;EACE,aAAA;EACA,sBAAA;AL0XF;;AKvXA;EACE,SAAA;AL0XF;;AKvXA;EACE,aAAA;AL0XF;AKxXE;EACE,SAAA;EACA,gCAAA;EACA,gBAAA;AL0XJ;;AKtXA;EACE,aAAA;EACA,sBAAA;ALyXF;;AKtXA;EACE,aAAA;EACA,6BAAA;EACA,mBAAA;ALyXF;AKvXE;EACE,YAAA;ALyXJ;AKxXI;EACE,mBAAA;AL0XN;;AKrXA;EACE,gCAAA;EACA,sBAAA;ALwXF;;AKrXA;EACE,6BAAA;EACA,gCAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;ALwXF;AKtXE;EACE,UAAA;EACA,SAAA;ALwXJ;;AKpXA;EACE,sBAAA;EACA,yBAAA;ALuXF;;AKpXA;EACE,6BAAA;EACA,aAAA;EACA,UAAA;EACA,uBAAA;EACA,WAAA;EACA,cAAA;EACA,gBAAA;EACA,SAAA;EACA,yBAAA;ALuXF;;AArdA;EACE,eAAA;EACA,kCAAA;EACA,cAAA;AAwdF;;AArdA;EACE,oEAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAwdF;;AArdA;EACE,kBAAA;EAEA,gBAAA;EACA,UAAA;EACA,eAAA;EACA,iBAAA;AAudF;;AApdA;EACE,cAAA;EACA,gBAAA;EACA,UAAA;EACA,SAAA;AAudF;;AApdA;EACE,aAAA;AAudF;;AApdA;EACE,mBAAA;EACA,qEAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kCAAA;EACA,eAAA;AAudF;;AApdA;EACE,+BAAA;EACA,iFAAA;AAudF;;AApdA;EACE,6BAAA;EACA,gFAAA;AAudF","sourcesContent":[".container {\n  background-color: #343a40;\n  height: 90%;\n  min-width: 75%;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: grid;\n  grid-template-columns: minmax(200px, 1.2fr) 2px 3fr;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border-radius: 10px;\n  border-top: #464e55 4px solid;\n  border-left: #464e55 2px solid;\n}\n\n.separator {\n  background-color: #212529;\n}\n\n.mainContent {\n  display: grid;\n  grid-template-rows: 2fr 2px 1fr;\n}\n\n.pending {\n  border-bottom: #15181c 2px solid;\n  border-left: #464e55 2px solid;\n}\n\n.completed {\n  border-top: #464e55 2px solid;\n  border-left: #464e55 2px solid;\n}\n\n@media (max-width: 800px) {\n  .container {\n    width: 100%;\n    height: 100%;\n    grid-template-columns: 1fr;\n    border: none;\n    border-radius: 0;\n  }\n\n  .separator {\n    display: none;\n  }\n\n  .pending {\n    border-left: none;\n  }\n}\n\n.sidebar {\n  border-right: #15181c 2px solid;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n","@import \"./index\";\n\nhtml {\n  font-size: 16px;\n  font-family: \"Poppins\", sans-serif;\n  color: #f8f9fa;\n}\n\nbody {\n  background: linear-gradient(119.75deg, #6e9ecf 13.02%, #12263a 100%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nh1 {\n  text-align: center;\n  // font-size: calc(1rem + 1vw);\n  font-size: 1.5vw;\n  padding: 0;\n  margin: 0.7vw 0;\n  user-select: none;\n}\n\n.projectTitle {\n  font-size: 1vw;\n  font-weight: 500;\n  padding: 0;\n  margin: 0;\n}\n\n.hidden {\n  display: none;\n}\n\nbutton {\n  background: #2887c8;\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px #6bb2e3;\n  border-radius: 8px;\n  outline: none;\n  border: none;\n  color: #f8f9fa;\n  padding: 6px 10px;\n  font-size: 1.1vw;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  cursor: pointer;\n}\n\n.deleteButton {\n  background: hsl(0, 82%, 63%);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px hsl(0, 67%, 77%);\n}\n\n.editButton {\n  background: rgb(111, 184, 55);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 2px 0px rgb(188, 229, 156);\n}\n","$responsive-text-size: clamp(8px, 1vw, 64px);\n$responsive-button-size: clamp(14px, calc(0.5rem + 0.7vw), 64px);\n$responsive-prio-size: clamp(14px, calc(0.5rem + 0.4vw), 64px);\n\n.priorityName {\n  padding-left: 10px;\n  font-size: $responsive-text-size;\n  margin: 0;\n  font-weight: 300;\n  align-self: center;\n  justify-self: center;\n}\n\n.priorityColorContainer {\n  background-color: #495057;\n  padding: clamp(8px, calc(0.3rem + 0.3vw), 64px);\n  outline: 2px solid #6c757d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.priorityColor {\n  border-radius: 50%;\n  height: $responsive-button-size;\n  width: $responsive-button-size;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\n.priority {\n  background-color: #212529;\n  border-top: 2px solid #a0b1c3;\n  display: flex;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n}\n\n#priorities {\n  width: clamp(100px, calc(30% + 4vw), 600px);\n  display: flex;\n  flex-direction: column;\n  gap: clamp(6px, 0.3vw, 12px);\n  margin-bottom: clamp(10px, 0.7vw, 16px);\n}\n\n.priorityColorContainer {\n  .priorityColor {\n    height: $responsive-prio-size;\n    width: $responsive-prio-size;\n  }\n}\n\n@media (max-width: 800px) {\n  .sidebar {\n    display: none;\n  }\n}\n\n.sidebarButtons {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6vw;\n}\n","$big-responsive-text-size: clamp(8px, calc(0.5rem + 0.7vw), 64px);\n$big-responsive-button-size: clamp(14px, calc(0.5rem + 0.7vw), 64px);\n$small-responsive-text-size: clamp(6px, calc(0.5rem + 0.4vw), 36px);\n$small-responsive-button-size: clamp(10px, calc(0.5rem + 0.4vw), 36px);\n.pendingTodos {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 50px;\n}\n\n.taskContainer {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: clamp(4px, 0.4vw, 8px);\n}\n\n.task {\n  display: flex;\n  background-color: #212529;\n  width: 100%;\n  min-width: max-content;\n  border-radius: 14px;\n  overflow: hidden;\n  border-top: 2px solid #a0b1c3;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n  justify-content: space-between;\n  margin: clamp(2px, 0.3vw, 8px) 0;\n}\n\n.taskMiniContainer {\n  background-color: #495057;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: clamp(8px, calc(0.5rem + 0.5vw), 64px);\n}\n\n.taskColor {\n  height: $big-responsive-button-size;\n  width: $big-responsive-button-size;\n  background-color: #e81616;\n  border-radius: 50%;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);\n}\n\n.taskButton {\n  height: $big-responsive-button-size;\n  width: $big-responsive-button-size;\n}\n\n.taskMiniContainer:nth-last-of-type(-n + 2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskMiniContainer:nth-child(-n + 2) {\n  outline: 2px solid #6c757d;\n}\n\n.taskTime {\n  padding-left: calc(1rem + 1vw);\n  padding-right: 10px;\n\n  p {\n    white-space: nowrap;\n    color: #adb5bd;\n  }\n}\n\n.taskTitle {\n  margin-right: auto;\n  flex: 1;\n  padding-left: 10px;\n  width: clamp(150px, calc(10vw + 10rem), 500px);\n\n  p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n}\n\n.taskTitle,\n.taskTime {\n  justify-self: center;\n  align-self: center;\n  p {\n    font-size: $big-responsive-text-size;\n    margin: 0;\n  }\n}\n\n.subtasksContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  align-self: flex-end;\n  width: 90%;\n}\n\n.subtask {\n  margin: clamp(2px, 0.1vw, 4px) 0;\n  // justify-content: center;\n\n  .taskMiniContainer {\n    padding: clamp(8px, calc(0.4rem + 0.4vw), 48px);\n\n    .taskButton {\n      height: $small-responsive-button-size;\n      width: $small-responsive-button-size;\n    }\n\n    .taskColor {\n      width: $small-responsive-button-size;\n      height: $small-responsive-button-size;\n    }\n  }\n\n  .taskTitle,\n  .taskTime {\n    p {\n      font-size: $small-responsive-text-size;\n    }\n  }\n}\n\n.completedTask {\n  text-decoration: line-through;\n  opacity: 0.6;\n  border: none;\n  box-shadow: 0px 2px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n}\n\n.taskDataContainer {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  flex: 1 2;\n  cursor: pointer;\n}\n\n.addSubtask {\n  margin-top: 0.3vw;\n  align-self: flex-start;\n}\n",".modal {\n  background-color: hsla(0, 0%, 0%, 0.502);\n  backdrop-filter: blur(3px);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#modalContainer {\n  background-color: #343a40;\n  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.4);\n  border: 1px solid gray;\n  border-radius: 12px;\n  position: relative;\n  height: max-content;\n  max-height: 70vh;\n  width: max-content;\n  overflow-y: scroll;\n}\n\n.closeButton {\n  position: sticky;\n  top: 1vw;\n  left: 1vw;\n  height: 1.3vw;\n  width: 1.3vw;\n  z-index: 1;\n}\n\n.closeButton:hover {\n  cursor: pointer;\n}\n\nhr {\n  background-color: gray;\n  height: 1px;\n  border: none;\n}\n",".field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4vw;\n\n  label {\n    font-size: calc(1vw + 6px);\n  }\n\n  input,\n  select,\n  textarea {\n    font-size: calc(0.8vw + 4px);\n    border: none;\n    outline: none;\n    background: #212529;\n    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.1);\n    padding: calc(0.5vw + 2px);\n    border-radius: 0.5vw;\n    color: #f8f9fa;\n  }\n}\n\n.DuedateField {\n  input {\n    font-size: calc(0.8vw + 4px);\n  }\n\n  ::-webkit-calendar-picker-indicator {\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 3px;\n    filter: invert(1);\n  }\n}\n\n.newForm {\n  min-width: 35vw;\n  padding: 0 calc(1vw + 6px) calc(1vw + 6px) calc(1vw + 6px);\n  display: grid;\n  grid-template-columns: min-content 2fr;\n  gap: calc(0.5vw + 4px);\n}\n\n.TitleField {\n  grid-column: 1 / 3;\n}\n\n.DescriptionField {\n  grid-column: 1 / 3;\n\n  textarea {\n    resize: none;\n    height: 20vh;\n    max-height: 20vh;\n  }\n}\n\n.PriorityField {\n  select {\n    height: 100%;\n    appearance: none;\n    cursor: pointer;\n    background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg)\n        no-repeat right 0.8em center / 1.4em,\n      #212529;\n    /* Remove focus outline */\n    &:focus {\n      outline: none;\n    }\n    /* Remove IE arrow */\n    &::-ms-expand {\n      display: none;\n    }\n  }\n}\n\n.newTitle {\n  padding: 0;\n  margin: 0;\n  padding: calc(1vw + 6px);\n}\n\n.createButton {\n  grid-column: 1/3;\n  width: max-content;\n  justify-self: center;\n}\n",".titleView {\n  padding: 0;\n  margin: 0;\n  user-select: auto;\n  overflow-wrap: break-word;\n  text-align: center;\n  max-width: fit-content;\n  word-break: break-word;\n}\n\n.titleViewContainer {\n  display: flex;\n  justify-content: center;\n  margin: 0 2vw;\n}\n\n.descriptionViewContainer {\n  margin: 0 1vw;\n}\n\n.infoContainer {\n  display: grid;\n  min-width: clamp(250px, 70vh, 1000px);\n  grid-template-rows: 1fr auto max-content auto max-content;\n}\n\n.dateViewContainer {\n  display: flex;\n  flex-direction: column;\n}\n\nh3 {\n  margin: 0;\n}\n\n.dateStringContainer {\n  display: flex;\n\n  p {\n    margin: 0;\n    font-size: clamp(8px, 1vw, 64px);\n    font-weight: 300;\n  }\n}\n\n.priorityViewContainer {\n  display: flex;\n  flex-direction: column;\n}\n\n.todoDataContainer {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n\n  .priority {\n    border: none;\n    .priorityName {\n      padding-right: 10px;\n    }\n  }\n}\n\n.mainTaskContainer {\n  border-bottom: #15181c 2px solid;\n  padding: 0 1vw 1vw 1vw;\n}\n\n.viewSubContainer {\n  border-top: #464e55 2px solid;\n  border-bottom: #15181c 2px solid;\n  padding: 1vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  h1 {\n    padding: 0;\n    margin: 0;\n  }\n}\n\n.descriptionView {\n  max-width: fit-content;\n  overflow-wrap: break-word;\n}\n\n.ButtonsView {\n  border-top: #464e55 2px solid;\n  display: flex;\n  gap: 0.8vw;\n  justify-content: center;\n  width: 100%;\n  padding: 1vw 0;\n  position: sticky;\n  bottom: 0;\n  background-color: #343a40;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/components/addNewTodo.js":
/*!**********************************************!*\
  !*** ./src/modules/components/addNewTodo.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _new__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new */ "./src/modules/components/new.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/modules/components/modal.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo */ "./src/modules/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project */ "./src/modules/project.js");





const addNewTodo = (() => {
  let addButton = document.querySelector("#addBigTodo");
  let form;

  addButton.addEventListener("click", (e) => {
    _new__WEBPACK_IMPORTED_MODULE_0__["default"].createNewTodoModal();
    _modal__WEBPACK_IMPORTED_MODULE_1__["default"].showModal();
    form = document.querySelector(".newForm");
  });
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewTodo);


/***/ }),

/***/ "./src/modules/components/modal.js":
/*!*****************************************!*\
  !*** ./src/modules/components/modal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DOMModal = (() => {
  const modal = document.querySelector("#modal");
  const modalContainer = document.querySelector("#modalContainer");
  let closeButton = document.querySelector(".closeButton");

  const showModal = () => {
    if (!modal.classList.contains("hidden")) {
      resetModal();
    } else {
      modal.classList.remove("hidden");
    }
  };

  const resetModal = () => {
    let modalContent = modalContainer.querySelector("div");
    modalContent.remove();
  };

  const hideModal = () => {
    resetModal();
    modal.classList.add("hidden");
  };

  modal.addEventListener("click", (e) => {
    if (e.target == modal) {
      DOMModal.hideModal();
    }
  });

  closeButton.addEventListener("click", (e) => {
    DOMModal.hideModal();
  });

  return {
    hideModal,
    showModal,
    resetModal,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMModal);


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
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo */ "./src/modules/components/todo.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal */ "./src/modules/components/modal.js");







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
      let todoElement = _todo__WEBPACK_IMPORTED_MODULE_4__["default"].createTask(todo, true);
      todoContainer.insertBefore(todoElement, todoContainer.lastChild);
      _modal__WEBPACK_IMPORTED_MODULE_5__["default"].hideModal();
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

/***/ "./src/modules/components/priority.js":
/*!********************************************!*\
  !*** ./src/modules/components/priority.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOMHandler */ "./src/modules/DOMHandler.js");
/* harmony import */ var _priority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../priority */ "./src/modules/priority.js");



//Try to refactorize the priorities code and figure out if this logic belongs here

const DOMPriority = (() => {
  let priorities = document.querySelector("#priorities");
  let prioritiesArray = [];

  const createPriorityItem = (priority) => {
    let main = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "priority");
    let name = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", "priorityName", priority.name);
    let colorContainer = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
      "div",
      "priorityColorContainer"
    );
    let colorDiv = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "priorityColor");

    colorDiv.style.backgroundColor = priority.color;
    colorContainer.append(colorDiv);
    main.append(colorContainer);
    main.append(name);

    return main;
  };

  const createPriorityColor = (priority) => {
    let colorDiv = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "priorityColor");
    colorDiv.style.backgroundColor = _priority__WEBPACK_IMPORTED_MODULE_1__["default"].priorities[priority - 1].color;
    return colorDiv;
  };

  const populatePriorities = (() => {
    _priority__WEBPACK_IMPORTED_MODULE_1__["default"].priorities.forEach((priority) => {
      priorities.append(createPriorityItem(priority));
    });
  })();

  return { createPriorityColor, createPriorityItem };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMPriority);


/***/ }),

/***/ "./src/modules/components/project.js":
/*!*******************************************!*\
  !*** ./src/modules/components/project.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/modules/components/todo.js");
/* harmony import */ var _DOMHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOMHandler */ "./src/modules/DOMHandler.js");



const DOMProject = (() => {
  let projects = document.querySelector("#projects");

  const populateProject = (project) => {
    let title = _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("p", "projectTitle", project.name);
    projects.append(title);
  };

  const displayProject = (project) => {
    _todo__WEBPACK_IMPORTED_MODULE_0__["default"].populatePending(project);
  };

  return { displayProject, populateProject };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMProject);


/***/ }),

/***/ "./src/modules/components/todo.js":
/*!****************************************!*\
  !*** ./src/modules/components/todo.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOMHandler */ "./src/modules/DOMHandler.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo */ "./src/modules/todo.js");
/* harmony import */ var _priority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priority */ "./src/modules/components/priority.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ "./src/modules/components/view.js");
/* harmony import */ var _new__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new */ "./src/modules/components/new.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal */ "./src/modules/components/modal.js");
/* harmony import */ var _assets_checked_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/checked.svg */ "./src/assets/checked.svg");
/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/delete.svg */ "./src/assets/delete.svg");
/* harmony import */ var _assets_edit_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/edit.svg */ "./src/assets/edit.svg");
/* harmony import */ var _assets_unchecked_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/unchecked.svg */ "./src/assets/unchecked.svg");







// Refactor this code, one function shouldn't do all the job, think gears

// Assets





const DOMTodo = (() => {
  //Private methods

  //Given an array of icons, this function will create the mini containers and insert the icons inside
  const _createMiniContainers = (array) => {
    let miniContainers = [];
    array.forEach((element) => {
      let container = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "taskMiniContainer");
      if (typeof element === "object") {
        container.append(element);
      } else {
        let img = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", "taskButton");
        img.src = element;
        container.append(img);
      }
      miniContainers.push(container);
    });
    return miniContainers;
  };

  const createTodoTitle = (todo) => {
    let taskTitle = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "taskTitle");
    let taskTitleP = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", "", todo.title);
    taskTitle.append(taskTitleP);
    return taskTitle;
  };

  const createTodoTime = (todo) => {
    let taskTime = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "taskTime");
    let taskTimeP = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", "", "5 days left");
    taskTime.append(taskTimeP);
    return taskTime;
  };

  const createTask = (todo, subtask = false) => {
    let task = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "task");
    if (subtask) {
      task.classList.add("subtask");
    }
    let icons = [
      _assets_unchecked_svg__WEBPACK_IMPORTED_MODULE_9__,
      _priority__WEBPACK_IMPORTED_MODULE_2__["default"].createPriorityColor(todo.priority),
      _assets_edit_svg__WEBPACK_IMPORTED_MODULE_8__,
      _assets_delete_svg__WEBPACK_IMPORTED_MODULE_7__,
    ];
    let elements = _createMiniContainers(icons);
    let taskTitle = createTodoTitle(todo);
    let taskTime = createTodoTime(todo);
    let dataContainer = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "taskDataContainer");
    dataContainer.append(taskTitle);
    dataContainer.append(taskTime);

    elements.splice(2, 0, dataContainer);
    elements.forEach((element) => {
      task.append(element);
    });

    task.dataset.id = todo.id;
    dataContainer.addEventListener("click", () => {
      _view__WEBPACK_IMPORTED_MODULE_3__["default"].renderInfo(todo);
    });
    return task;
  };

  const createTodo = (todo) => {
    let taskContainer = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "taskContainer");
    let subtasksContainer = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
      "div",
      "subtasksContainer"
    );
    let task = createTask(todo);
    let button = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
      "button",
      "addSubtask",
      "+ Add subtask"
    );

    // Add event listener to create a subtask for this todo
    button.addEventListener("click", (e) => {
      _new__WEBPACK_IMPORTED_MODULE_4__["default"].createNewTodoModal(todo, e.target.parentElement);
      _modal__WEBPACK_IMPORTED_MODULE_5__["default"].showModal();
    });
    subtasksContainer.append(button);
    let subtasks = [];
    todo.children.forEach((task) => {
      let subtask = createTask(task, true);
      subtasks.push(subtask);
    });

    subtasks.forEach((subtask) => {
      subtasksContainer.prepend(subtask);
    });

    taskContainer.append(task);
    taskContainer.append(subtasksContainer);
    return taskContainer;
  };

  const populatePending = (project) => {
    let pendingTodos = document.querySelector(".pendingTodos");
    project.pending.forEach((todo) => {
      let bigTodo = createTodo(todo);
      pendingTodos.append(bigTodo);
    });
  };

  return { populatePending, createTask, createTodo };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMTodo);


/***/ }),

/***/ "./src/modules/components/view.js":
/*!****************************************!*\
  !*** ./src/modules/components/view.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOMHandler */ "./src/modules/DOMHandler.js");
/* harmony import */ var _priority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./priority */ "./src/modules/components/priority.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/modules/components/todo.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo */ "./src/modules/todo.js");
/* harmony import */ var _assets_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/close.svg */ "./src/assets/close.svg");
/* harmony import */ var _priority__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../priority */ "./src/modules/priority.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal */ "./src/modules/components/modal.js");









const DOMView = (() => {
  let modal = document.querySelector("#modalContainer");

  const _createContent = (string, className, tag) => {
    let content = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(tag, className, string);
    let contentContainer = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
      "div",
      `${className}Container`
    );

    contentContainer.append(content);
    return contentContainer;
  };

  const _createDate = (date = "") => {
    let container = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "dateViewContainer");
    let label = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", "", "Due date");
    let dateString = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", "dateView", "01/01/2023");
    let timeLeft = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
      "p",
      "timeLeftView",
      "(4 days left)"
    );
    let dateContainer = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "dateStringContainer");

    container.append(label);
    dateContainer.append(dateString);
    dateContainer.append(timeLeft);
    container.append(dateContainer);
    return container;
  };

  const _createSubTasks = (array) => {
    let tasksContainer = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "viewSubContainer");
    let title = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", "", "Tasks linked to this item");
    tasksContainer.append(title);

    array.forEach((element) => {
      let taskItem = _todo__WEBPACK_IMPORTED_MODULE_2__["default"].createTask(element, true);
      tasksContainer.append(taskItem);
    });

    return tasksContainer;
  };

  const _createPriority = (priority) => {
    let todoPriority = _priority__WEBPACK_IMPORTED_MODULE_1__["default"].createPriorityItem(
      _priority__WEBPACK_IMPORTED_MODULE_5__["default"].priorities[priority - 1]
    );
    let label = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", "priorityLabel", "Priority");
    let container = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "priorityViewContainer");

    container.append(label);
    container.append(todoPriority);
    return container;
  };

  const _createButtons = () => {
    let container = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "ButtonsView");
    let deleteButton = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
      "button",
      "deleteButton",
      "Delete"
    );
    let editButton = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", "editButton", "Edit");
    let checkButton = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
      "button",
      "checkButton",
      "Check"
    );

    container.append(deleteButton);
    container.append(editButton);
    container.append(checkButton);
    return container;
  };

  const _createInfo = (todo) => {
    let infoContainer = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "infoContainer");
    let todoTitle = _createContent(todo.title, "titleView", "h1");
    let todoDescription = _createContent(
      todo.description,
      "descriptionView",
      "p"
    );
    let todoDate = _createDate();
    let todoPriority = _createPriority(todo.priority);
    let todoDataContainer = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
      "div",
      "todoDataContainer"
    );
    let todoSubtasks;
    if (todo.children) {
      todoSubtasks = _createSubTasks(todo.children);
    } else {
      todoSubtasks = "";
    }
    let mainTaskContainer = _DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
      "div",
      "mainTaskContainer"
    );
    let buttons = _createButtons();

    mainTaskContainer.append(todoTitle);
    mainTaskContainer.append(_DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("hr"));
    mainTaskContainer.append(todoDescription);
    todoDataContainer.append(todoDate);
    todoDataContainer.append(todoPriority);
    mainTaskContainer.append(todoDataContainer);
    infoContainer.append(mainTaskContainer);
    if (!todo.isSubtask()) {
      infoContainer.append(_DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "separator"));
      infoContainer.append(todoSubtasks);
      infoContainer.append(_DOMHandler__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "separator"));
    }

    infoContainer.append(buttons);

    return infoContainer;
  };

  const renderInfo = (todo) => {
    let todoInfo = _createInfo(todo);
    modal.append(todoInfo);
    _modal__WEBPACK_IMPORTED_MODULE_6__["default"].showModal();
  };

  return { renderInfo };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMView);


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
    let found = array.findIndex((item) => item.id === id);
    found === 0 ? array.shift() : array.splice(found, found);
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

  constructor(title, date, priority, description, isChecked, parent = null) {
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.description = description;
    this.#isChecked = isChecked;
    this.#id = _idAssigner__WEBPACK_IMPORTED_MODULE_1__["default"].getIdNumber();
    this.#parent = parent;
    if (this.#parent === null) {
      this.#children = [];
      _project__WEBPACK_IMPORTED_MODULE_2__["default"].selected.addPending(this);
    } else {
      this.#children = false;
    }
  }

  createTodo(title, date, priority, description) {
    let a = new Todo(title, date, priority, description, false, this);
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
      this.#isChecked = false;
    } else {
      this.#isChecked = true;
      //If the todo is a parent check all it's children
      if (this.#parent === null) this.#recursiveCheck(this.#children);
    }
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
/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todo */ "./src/modules/todo.js");
/* harmony import */ var _modules_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/helper */ "./src/modules/helper.js");
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");
/* harmony import */ var _modules_DOMHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/DOMHandler */ "./src/modules/DOMHandler.js");
/* harmony import */ var _modules_components_priority__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/components/priority */ "./src/modules/components/priority.js");
/* harmony import */ var _modules_priority__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/priority */ "./src/modules/priority.js");
/* harmony import */ var _modules_components_todo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/components/todo */ "./src/modules/components/todo.js");
/* harmony import */ var _modules_components_project__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/components/project */ "./src/modules/components/project.js");
/* harmony import */ var _modules_components_new__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/components/new */ "./src/modules/components/new.js");
/* harmony import */ var _modules_components_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/components/view */ "./src/modules/components/view.js");
/* harmony import */ var _modules_components_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/components/modal */ "./src/modules/components/modal.js");
/* harmony import */ var _modules_components_addNewTodo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/components/addNewTodo */ "./src/modules/components/addNewTodo.js");














/*
1.- Add styles to buttons ✔️
2.- Add functionality to buttons
3.- Add close function to modal, set opacity to background
4.- Create an edit modal
5.- Add basic buttons to view modal
*/

// refactor almost everything or kys

let project = new _modules_project__WEBPACK_IMPORTED_MODULE_3__["default"]("A project");
_modules_project__WEBPACK_IMPORTED_MODULE_3__["default"].selected = project;

let a = new _modules_todo__WEBPACK_IMPORTED_MODULE_1__["default"](
  "My first todo",
  "09/01/2023",
  1,
  "This is going to be a big project",
  false
);

let b = new _modules_todo__WEBPACK_IMPORTED_MODULE_1__["default"](
  "That project todo",
  "10/01/2023",
  3,
  "This is the first todo of that project",
  false
);

let c = a.createTodo(
  "This is another todo for that project",
  "10/01/2023",
  4,
  "Delete me",
  false
);

let d = b.createTodo(
  "Third todo for that project, im now typing to fill the title",
  "10/01/2023",
  5,
  "This course takes you on a journey through the many facets of modern responsive web design. The first few modules will ease you in with a history of where responsive design came from and a look at the fundamentals of responsive layouts. From there,",
  true
);

_modules_components_project__WEBPACK_IMPORTED_MODULE_8__["default"].populateProject(project);
_modules_components_project__WEBPACK_IMPORTED_MODULE_8__["default"].displayProject(project);

let tasks = document.querySelectorAll(".taskDataContainer");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxhQUFhLGVBQWUsYUFBYSxXQUFXLFdBQVcsT0FBTyxNQUFNLGFBQWEsZUFBZSxRQUFRLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsTUFBTSxPQUFPLGFBQWEsWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxhQUFhLGVBQWUsT0FBTyxNQUFNLGFBQWEsZUFBZSxPQUFPLE9BQU8sYUFBYSxRQUFRLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxRQUFRLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsc0NBQXNDLDhCQUE4QixnQkFBZ0IsbUJBQW1CLG9C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d2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlL21haW4uc2Nzcz9hMjIxIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvRE9NSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2FkZE5ld1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL25ldy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3ByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy92aWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9pZEFzc2lnbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3ByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBtaW4td2lkdGg6IDc1JTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDEuMmZyKSAycHggM2ZyO1xcbiAgYm94LXNoYWRvdzogOHB4IDhweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3A6ICM0NjRlNTUgNHB4IHNvbGlkO1xcbiAgYm9yZGVyLWxlZnQ6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbn1cXG5cXG4uc2VwYXJhdG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XFxufVxcblxcbi5tYWluQ29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMnB4IDFmcjtcXG59XFxuXFxuLnBlbmRpbmcge1xcbiAgYm9yZGVyLWJvdHRvbTogIzE1MTgxYyAycHggc29saWQ7XFxuICBib3JkZXItbGVmdDogIzQ2NGU1NSAycHggc29saWQ7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgYm9yZGVyLXRvcDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBib3JkZXItbGVmdDogIzQ2NGU1NSAycHggc29saWQ7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICB9XFxuICAuc2VwYXJhdG9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5wZW5kaW5nIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICB9XFxufVxcbi5zaWRlYmFyIHtcXG4gIGJvcmRlci1yaWdodDogIzE1MTgxYyAycHggc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eU5hbWUge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgZm9udC1zaXplOiBjbGFtcCg4cHgsIDF2dywgNjRweCk7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eUNvbG9yQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7XFxuICBwYWRkaW5nOiBjbGFtcCg4cHgsIDAuM3JlbSArIDAuM3Z3LCA2NHB4KTtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNmM3NTdkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5Q29sb3Ige1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgaGVpZ2h0OiBjbGFtcCgxNHB4LCAwLjVyZW0gKyAwLjd2dywgNjRweCk7XFxuICB3aWR0aDogY2xhbXAoMTRweCwgMC41cmVtICsgMC43dncsIDY0cHgpO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjYTBiMWMzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4jcHJpb3JpdGllcyB7XFxuICB3aWR0aDogY2xhbXAoMTAwcHgsIDMwJSArIDR2dywgNjAwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IGNsYW1wKDZweCwgMC4zdncsIDEycHgpO1xcbiAgbWFyZ2luLWJvdHRvbTogY2xhbXAoMTBweCwgMC43dncsIDE2cHgpO1xcbn1cXG5cXG4ucHJpb3JpdHlDb2xvckNvbnRhaW5lciAucHJpb3JpdHlDb2xvciB7XFxuICBoZWlnaHQ6IGNsYW1wKDE0cHgsIDAuNXJlbSArIDAuNHZ3LCA2NHB4KTtcXG4gIHdpZHRoOiBjbGFtcCgxNHB4LCAwLjVyZW0gKyAwLjR2dywgNjRweCk7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4uc2lkZWJhckJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNnZ3O1xcbn1cXG5cXG4ucGVuZGluZ1RvZG9zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgNTBweDtcXG59XFxuXFxuLnRhc2tDb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1ib3R0b206IGNsYW1wKDRweCwgMC40dncsIDhweCk7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItdG9wOiAycHggc29saWQgI2EwYjFjMztcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogY2xhbXAoMnB4LCAwLjN2dywgOHB4KSAwO1xcbn1cXG5cXG4udGFza01pbmlDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiBjbGFtcCg4cHgsIDAuNXJlbSArIDAuNXZ3LCA2NHB4KTtcXG59XFxuXFxuLnRhc2tDb2xvciB7XFxuICBoZWlnaHQ6IGNsYW1wKDE0cHgsIDAuNXJlbSArIDAuN3Z3LCA2NHB4KTtcXG4gIHdpZHRoOiBjbGFtcCgxNHB4LCAwLjVyZW0gKyAwLjd2dywgNjRweCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTgxNjE2O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4udGFza0J1dHRvbiB7XFxuICBoZWlnaHQ6IGNsYW1wKDE0cHgsIDAuNXJlbSArIDAuN3Z3LCA2NHB4KTtcXG4gIHdpZHRoOiBjbGFtcCgxNHB4LCAwLjVyZW0gKyAwLjd2dywgNjRweCk7XFxufVxcblxcbi50YXNrTWluaUNvbnRhaW5lcjpudGgtbGFzdC1vZi10eXBlKC1uICsgMikge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICM2Yzc1N2Q7XFxufVxcblxcbi50YXNrTWluaUNvbnRhaW5lcjpudGgtY2hpbGQoLW4rMikge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICM2Yzc1N2Q7XFxufVxcblxcbi50YXNrVGltZSB7XFxuICBwYWRkaW5nLWxlZnQ6IGNhbGMoMXJlbSArIDF2dyk7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4udGFza1RpbWUgcCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgY29sb3I6ICNhZGI1YmQ7XFxufVxcblxcbi50YXNrVGl0bGUge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHdpZHRoOiBjbGFtcCgxNTBweCwgMTB2dyArIDEwcmVtLCA1MDBweCk7XFxufVxcbi50YXNrVGl0bGUgcCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4udGFza1RpdGxlLFxcbi50YXNrVGltZSB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLnRhc2tUaXRsZSBwLFxcbi50YXNrVGltZSBwIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoOHB4LCAwLjVyZW0gKyAwLjd2dywgNjRweCk7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zdWJ0YXNrc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnN1YnRhc2sge1xcbiAgbWFyZ2luOiBjbGFtcCgycHgsIDAuMXZ3LCA0cHgpIDA7XFxufVxcbi5zdWJ0YXNrIC50YXNrTWluaUNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiBjbGFtcCg4cHgsIDAuNHJlbSArIDAuNHZ3LCA0OHB4KTtcXG59XFxuLnN1YnRhc2sgLnRhc2tNaW5pQ29udGFpbmVyIC50YXNrQnV0dG9uIHtcXG4gIGhlaWdodDogY2xhbXAoMTBweCwgMC41cmVtICsgMC40dncsIDM2cHgpO1xcbiAgd2lkdGg6IGNsYW1wKDEwcHgsIDAuNXJlbSArIDAuNHZ3LCAzNnB4KTtcXG59XFxuLnN1YnRhc2sgLnRhc2tNaW5pQ29udGFpbmVyIC50YXNrQ29sb3Ige1xcbiAgd2lkdGg6IGNsYW1wKDEwcHgsIDAuNXJlbSArIDAuNHZ3LCAzNnB4KTtcXG4gIGhlaWdodDogY2xhbXAoMTBweCwgMC41cmVtICsgMC40dncsIDM2cHgpO1xcbn1cXG4uc3VidGFzayAudGFza1RpdGxlIHAsXFxuLnN1YnRhc2sgLnRhc2tUaW1lIHAge1xcbiAgZm9udC1zaXplOiBjbGFtcCg2cHgsIDAuNXJlbSArIDAuNHZ3LCAzNnB4KTtcXG59XFxuXFxuLmNvbXBsZXRlZFRhc2sge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBvcGFjaXR5OiAwLjY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpLCBpbnNldCAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi50YXNrRGF0YUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4OiAxIDI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGRTdWJ0YXNrIHtcXG4gIG1hcmdpbi10b3A6IDAuM3Z3O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMGRlZywgMCUsIDAlLCAwLjUwMik7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtb2RhbENvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xcbiAgYm94LXNoYWRvdzogOHB4IDhweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgbWF4LWhlaWdodDogNzB2aDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNsb3NlQnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDF2dztcXG4gIGxlZnQ6IDF2dztcXG4gIGhlaWdodDogMS4zdnc7XFxuICB3aWR0aDogMS4zdnc7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY2xvc2VCdXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ociB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5maWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC40dnc7XFxufVxcbi5maWVsZCBsYWJlbCB7XFxuICBmb250LXNpemU6IGNhbGMoMXZ3ICsgNnB4KTtcXG59XFxuLmZpZWxkIGlucHV0LFxcbi5maWVsZCBzZWxlY3QsXFxuLmZpZWxkIHRleHRhcmVhIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygwLjh2dyArIDRweCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzIxMjUyOTtcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSksIGluc2V0IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHBhZGRpbmc6IGNhbGMoMC41dncgKyAycHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41dnc7XFxuICBjb2xvcjogI2Y4ZjlmYTtcXG59XFxuXFxuLkR1ZWRhdGVGaWVsZCBpbnB1dCB7XFxuICBmb250LXNpemU6IGNhbGMoMC44dncgKyA0cHgpO1xcbn1cXG4uRHVlZGF0ZUZpZWxkIDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cXG5cXG4ubmV3Rm9ybSB7XFxuICBtaW4td2lkdGg6IDM1dnc7XFxuICBwYWRkaW5nOiAwIGNhbGMoMXZ3ICsgNnB4KSBjYWxjKDF2dyArIDZweCkgY2FsYygxdncgKyA2cHgpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMmZyO1xcbiAgZ2FwOiBjYWxjKDAuNXZ3ICsgNHB4KTtcXG59XFxuXFxuLlRpdGxlRmllbGQge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuLkRlc2NyaXB0aW9uRmllbGQge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuLkRlc2NyaXB0aW9uRmllbGQgdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgaGVpZ2h0OiAyMHZoO1xcbiAgbWF4LWhlaWdodDogMjB2aDtcXG59XFxuXFxuLlByaW9yaXR5RmllbGQgc2VsZWN0IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy85LzlkL0NhcmV0X2Rvd25fZm9udF9hd2Vzb21lX3doaXRldmFyaWF0aW9uLnN2Zykgbm8tcmVwZWF0IHJpZ2h0IDAuOGVtIGNlbnRlci8xLjRlbSwgIzIxMjUyOTtcXG4gIC8qIFJlbW92ZSBmb2N1cyBvdXRsaW5lICovXFxuICAvKiBSZW1vdmUgSUUgYXJyb3cgKi9cXG59XFxuLlByaW9yaXR5RmllbGQgc2VsZWN0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5Qcmlvcml0eUZpZWxkIHNlbGVjdDo6LW1zLWV4cGFuZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmV3VGl0bGUge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IGNhbGMoMXZ3ICsgNnB4KTtcXG59XFxuXFxuLmNyZWF0ZUJ1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZVZpZXcge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHVzZXItc2VsZWN0OiBhdXRvO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbn1cXG5cXG4udGl0bGVWaWV3Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAydnc7XFxufVxcblxcbi5kZXNjcmlwdGlvblZpZXdDb250YWluZXIge1xcbiAgbWFyZ2luOiAwIDF2dztcXG59XFxuXFxuLmluZm9Db250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1pbi13aWR0aDogY2xhbXAoMjUwcHgsIDcwdmgsIDEwMDBweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvIG1heC1jb250ZW50IGF1dG8gbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5kYXRlVmlld0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaDMge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZGF0ZVN0cmluZ0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZGF0ZVN0cmluZ0NvbnRhaW5lciBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoOHB4LCAxdncsIDY0cHgpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLnByaW9yaXR5Vmlld0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG9EYXRhQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50b2RvRGF0YUNvbnRhaW5lciAucHJpb3JpdHkge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4udG9kb0RhdGFDb250YWluZXIgLnByaW9yaXR5IC5wcmlvcml0eU5hbWUge1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLm1haW5UYXNrQ29udGFpbmVyIHtcXG4gIGJvcmRlci1ib3R0b206ICMxNTE4MWMgMnB4IHNvbGlkO1xcbiAgcGFkZGluZzogMCAxdncgMXZ3IDF2dztcXG59XFxuXFxuLnZpZXdTdWJDb250YWluZXIge1xcbiAgYm9yZGVyLXRvcDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBib3JkZXItYm90dG9tOiAjMTUxODFjIDJweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDF2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnZpZXdTdWJDb250YWluZXIgaDEge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uVmlldyB7XFxuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLkJ1dHRvbnNWaWV3IHtcXG4gIGJvcmRlci10b3A6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC44dnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXZ3IDA7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNmOGY5ZmE7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExOS43NWRlZywgIzZlOWVjZiAxMy4wMiUsICMxMjI2M2EgMTAwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXZ3O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMC43dncgMDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6ICMyODg3Yzg7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IDBweCAycHggMHB4ICM2YmIyZTM7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNmOGY5ZmE7XFxuICBwYWRkaW5nOiA2cHggMTBweDtcXG4gIGZvbnQtc2l6ZTogMS4xdnc7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZUJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBoc2woMGRlZywgODIlLCA2MyUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAwcHggMnB4IDBweCBoc2woMGRlZywgNjclLCA3NyUpO1xcbn1cXG5cXG4uZWRpdEJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTExLCAxODQsIDU1KTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgMHB4IDJweCAwcHggcmdiKDE4OCwgMjI5LCAxNTYpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvX2NvbnRhaW5lci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvX3ByaW9yaXRpZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL190YXNrLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9fbW9kYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL19mb3JtLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9fdmlld1RvZG8uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxtREFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FERUE7RUFD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RUFDQSxtQkFBQTtBQXdkRjs7QUFyZEE7RUFDRSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXVkRjs7QUFwZEE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQXVkRjs7QUFwZEE7RUFDRSxhQUFBO0FBdWRGOztBQXBkQTtFQUNFLG1CQUFBO0VBQ0EscUVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtBQXVkRjs7QUFwZEE7RUFDRSwrQkFBQTtFQUNBLGlGQUFBO0FBdWRGOztBQXBkQTtFQUNFLDZCQUFBO0VBQ0EsZ0ZBQUE7QUF1ZEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBtaW4td2lkdGg6IDc1JTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDEuMmZyKSAycHggM2ZyO1xcbiAgYm94LXNoYWRvdzogOHB4IDhweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3A6ICM0NjRlNTUgNHB4IHNvbGlkO1xcbiAgYm9yZGVyLWxlZnQ6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbn1cXG5cXG4uc2VwYXJhdG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XFxufVxcblxcbi5tYWluQ29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMnB4IDFmcjtcXG59XFxuXFxuLnBlbmRpbmcge1xcbiAgYm9yZGVyLWJvdHRvbTogIzE1MTgxYyAycHggc29saWQ7XFxuICBib3JkZXItbGVmdDogIzQ2NGU1NSAycHggc29saWQ7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgYm9yZGVyLXRvcDogIzQ2NGU1NSAycHggc29saWQ7XFxuICBib3JkZXItbGVmdDogIzQ2NGU1NSAycHggc29saWQ7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICB9XFxuXFxuICAuc2VwYXJhdG9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5wZW5kaW5nIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICB9XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGJvcmRlci1yaWdodDogIzE1MTgxYyAycHggc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblwiLFwiQGltcG9ydCBcXFwiLi9pbmRleFxcXCI7XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNmOGY5ZmE7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExOS43NWRlZywgIzZlOWVjZiAxMy4wMiUsICMxMjI2M2EgMTAwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAvLyBmb250LXNpemU6IGNhbGMoMXJlbSArIDF2dyk7XFxuICBmb250LXNpemU6IDEuNXZ3O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMC43dncgMDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6ICMyODg3Yzg7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IDBweCAycHggMHB4ICM2YmIyZTM7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNmOGY5ZmE7XFxuICBwYWRkaW5nOiA2cHggMTBweDtcXG4gIGZvbnQtc2l6ZTogMS4xdnc7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZUJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBoc2woMCwgODIlLCA2MyUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAwcHggMnB4IDBweCBoc2woMCwgNjclLCA3NyUpO1xcbn1cXG5cXG4uZWRpdEJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTExLCAxODQsIDU1KTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgMHB4IDJweCAwcHggcmdiKDE4OCwgMjI5LCAxNTYpO1xcbn1cXG5cIixcIiRyZXNwb25zaXZlLXRleHQtc2l6ZTogY2xhbXAoOHB4LCAxdncsIDY0cHgpO1xcbiRyZXNwb25zaXZlLWJ1dHRvbi1zaXplOiBjbGFtcCgxNHB4LCBjYWxjKDAuNXJlbSArIDAuN3Z3KSwgNjRweCk7XFxuJHJlc3BvbnNpdmUtcHJpby1zaXplOiBjbGFtcCgxNHB4LCBjYWxjKDAuNXJlbSArIDAuNHZ3KSwgNjRweCk7XFxuXFxuLnByaW9yaXR5TmFtZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6ICRyZXNwb25zaXZlLXRleHQtc2l6ZTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5Q29sb3JDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NztcXG4gIHBhZGRpbmc6IGNsYW1wKDhweCwgY2FsYygwLjNyZW0gKyAwLjN2dyksIDY0cHgpO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICM2Yzc1N2Q7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJpb3JpdHlDb2xvciB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBoZWlnaHQ6ICRyZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbiAgd2lkdGg6ICRyZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjYTBiMWMzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4jcHJpb3JpdGllcyB7XFxuICB3aWR0aDogY2xhbXAoMTAwcHgsIGNhbGMoMzAlICsgNHZ3KSwgNjAwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IGNsYW1wKDZweCwgMC4zdncsIDEycHgpO1xcbiAgbWFyZ2luLWJvdHRvbTogY2xhbXAoMTBweCwgMC43dncsIDE2cHgpO1xcbn1cXG5cXG4ucHJpb3JpdHlDb2xvckNvbnRhaW5lciB7XFxuICAucHJpb3JpdHlDb2xvciB7XFxuICAgIGhlaWdodDogJHJlc3BvbnNpdmUtcHJpby1zaXplO1xcbiAgICB3aWR0aDogJHJlc3BvbnNpdmUtcHJpby1zaXplO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLnNpZGViYXJCdXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjZ2dztcXG59XFxuXCIsXCIkYmlnLXJlc3BvbnNpdmUtdGV4dC1zaXplOiBjbGFtcCg4cHgsIGNhbGMoMC41cmVtICsgMC43dncpLCA2NHB4KTtcXG4kYmlnLXJlc3BvbnNpdmUtYnV0dG9uLXNpemU6IGNsYW1wKDE0cHgsIGNhbGMoMC41cmVtICsgMC43dncpLCA2NHB4KTtcXG4kc21hbGwtcmVzcG9uc2l2ZS10ZXh0LXNpemU6IGNsYW1wKDZweCwgY2FsYygwLjVyZW0gKyAwLjR2dyksIDM2cHgpO1xcbiRzbWFsbC1yZXNwb25zaXZlLWJ1dHRvbi1zaXplOiBjbGFtcCgxMHB4LCBjYWxjKDAuNXJlbSArIDAuNHZ3KSwgMzZweCk7XFxuLnBlbmRpbmdUb2RvcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDUwcHg7XFxufVxcblxcbi50YXNrQ29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiBjbGFtcCg0cHgsIDAuNHZ3LCA4cHgpO1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNhMGIxYzM7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IGNsYW1wKDJweCwgMC4zdncsIDhweCkgMDtcXG59XFxuXFxuLnRhc2tNaW5pQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogY2xhbXAoOHB4LCBjYWxjKDAuNXJlbSArIDAuNXZ3KSwgNjRweCk7XFxufVxcblxcbi50YXNrQ29sb3Ige1xcbiAgaGVpZ2h0OiAkYmlnLXJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICB3aWR0aDogJGJpZy1yZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4MTYxNjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuLnRhc2tCdXR0b24ge1xcbiAgaGVpZ2h0OiAkYmlnLXJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICB3aWR0aDogJGJpZy1yZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbn1cXG5cXG4udGFza01pbmlDb250YWluZXI6bnRoLWxhc3Qtb2YtdHlwZSgtbiArIDIpIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNmM3NTdkO1xcbn1cXG5cXG4udGFza01pbmlDb250YWluZXI6bnRoLWNoaWxkKC1uICsgMikge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICM2Yzc1N2Q7XFxufVxcblxcbi50YXNrVGltZSB7XFxuICBwYWRkaW5nLWxlZnQ6IGNhbGMoMXJlbSArIDF2dyk7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcblxcbiAgcCB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGNvbG9yOiAjYWRiNWJkO1xcbiAgfVxcbn1cXG5cXG4udGFza1RpdGxlIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICB3aWR0aDogY2xhbXAoMTUwcHgsIGNhbGMoMTB2dyArIDEwcmVtKSwgNTAwcHgpO1xcblxcbiAgcCB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgfVxcbn1cXG5cXG4udGFza1RpdGxlLFxcbi50YXNrVGltZSB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHAge1xcbiAgICBmb250LXNpemU6ICRiaWctcmVzcG9uc2l2ZS10ZXh0LXNpemU7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG59XFxuXFxuLnN1YnRhc2tzQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uc3VidGFzayB7XFxuICBtYXJnaW46IGNsYW1wKDJweCwgMC4xdncsIDRweCkgMDtcXG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgLnRhc2tNaW5pQ29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogY2xhbXAoOHB4LCBjYWxjKDAuNHJlbSArIDAuNHZ3KSwgNDhweCk7XFxuXFxuICAgIC50YXNrQnV0dG9uIHtcXG4gICAgICBoZWlnaHQ6ICRzbWFsbC1yZXNwb25zaXZlLWJ1dHRvbi1zaXplO1xcbiAgICAgIHdpZHRoOiAkc21hbGwtcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTtcXG4gICAgfVxcblxcbiAgICAudGFza0NvbG9yIHtcXG4gICAgICB3aWR0aDogJHNtYWxsLXJlc3BvbnNpdmUtYnV0dG9uLXNpemU7XFxuICAgICAgaGVpZ2h0OiAkc21hbGwtcmVzcG9uc2l2ZS1idXR0b24tc2l6ZTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnRhc2tUaXRsZSxcXG4gIC50YXNrVGltZSB7XFxuICAgIHAge1xcbiAgICAgIGZvbnQtc2l6ZTogJHNtYWxsLXJlc3BvbnNpdmUtdGV4dC1zaXplO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5jb21wbGV0ZWRUYXNrIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgb3BhY2l0eTogMC42O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSwgaW5zZXQgMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4udGFza0RhdGFDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleDogMSAyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkU3VidGFzayB7XFxuICBtYXJnaW4tdG9wOiAwLjN2dztcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblwiLFwiLm1vZGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjUwMik7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtb2RhbENvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xcbiAgYm94LXNoYWRvdzogOHB4IDhweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgbWF4LWhlaWdodDogNzB2aDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNsb3NlQnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDF2dztcXG4gIGxlZnQ6IDF2dztcXG4gIGhlaWdodDogMS4zdnc7XFxuICB3aWR0aDogMS4zdnc7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY2xvc2VCdXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ociB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblwiLFwiLmZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjR2dztcXG5cXG4gIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDF2dyArIDZweCk7XFxuICB9XFxuXFxuICBpbnB1dCxcXG4gIHNlbGVjdCxcXG4gIHRleHRhcmVhIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuOHZ3ICsgNHB4KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjEyNTI5O1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpLCBpbnNldCAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIHBhZGRpbmc6IGNhbGMoMC41dncgKyAycHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjV2dztcXG4gICAgY29sb3I6ICNmOGY5ZmE7XFxuICB9XFxufVxcblxcbi5EdWVkYXRlRmllbGQge1xcbiAgaW5wdXQge1xcbiAgICBmb250LXNpemU6IGNhbGMoMC44dncgKyA0cHgpO1xcbiAgfVxcblxcbiAgOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG4gIH1cXG59XFxuXFxuLm5ld0Zvcm0ge1xcbiAgbWluLXdpZHRoOiAzNXZ3O1xcbiAgcGFkZGluZzogMCBjYWxjKDF2dyArIDZweCkgY2FsYygxdncgKyA2cHgpIGNhbGMoMXZ3ICsgNnB4KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDJmcjtcXG4gIGdhcDogY2FsYygwLjV2dyArIDRweCk7XFxufVxcblxcbi5UaXRsZUZpZWxkIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLkRlc2NyaXB0aW9uRmllbGQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcblxcbiAgdGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgbWF4LWhlaWdodDogMjB2aDtcXG4gIH1cXG59XFxuXFxuLlByaW9yaXR5RmllbGQge1xcbiAgc2VsZWN0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzkvOWQvQ2FyZXRfZG93bl9mb250X2F3ZXNvbWVfd2hpdGV2YXJpYXRpb24uc3ZnKVxcbiAgICAgICAgbm8tcmVwZWF0IHJpZ2h0IDAuOGVtIGNlbnRlciAvIDEuNGVtLFxcbiAgICAgICMyMTI1Mjk7XFxuICAgIC8qIFJlbW92ZSBmb2N1cyBvdXRsaW5lICovXFxuICAgICY6Zm9jdXMge1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIH1cXG4gICAgLyogUmVtb3ZlIElFIGFycm93ICovXFxuICAgICY6Oi1tcy1leHBhbmQge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLm5ld1RpdGxlIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiBjYWxjKDF2dyArIDZweCk7XFxufVxcblxcbi5jcmVhdGVCdXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cIixcIi50aXRsZVZpZXcge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHVzZXItc2VsZWN0OiBhdXRvO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbn1cXG5cXG4udGl0bGVWaWV3Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAydnc7XFxufVxcblxcbi5kZXNjcmlwdGlvblZpZXdDb250YWluZXIge1xcbiAgbWFyZ2luOiAwIDF2dztcXG59XFxuXFxuLmluZm9Db250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1pbi13aWR0aDogY2xhbXAoMjUwcHgsIDcwdmgsIDEwMDBweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvIG1heC1jb250ZW50IGF1dG8gbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5kYXRlVmlld0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaDMge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZGF0ZVN0cmluZ0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCg4cHgsIDF2dywgNjRweCk7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICB9XFxufVxcblxcbi5wcmlvcml0eVZpZXdDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvRGF0YUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgLnByaW9yaXR5IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICAucHJpb3JpdHlOYW1lIHtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5tYWluVGFza0NvbnRhaW5lciB7XFxuICBib3JkZXItYm90dG9tOiAjMTUxODFjIDJweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDAgMXZ3IDF2dyAxdnc7XFxufVxcblxcbi52aWV3U3ViQ29udGFpbmVyIHtcXG4gIGJvcmRlci10b3A6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbiAgYm9yZGVyLWJvdHRvbTogIzE1MTgxYyAycHggc29saWQ7XFxuICBwYWRkaW5nOiAxdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBoMSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG59XFxuXFxuLmRlc2NyaXB0aW9uVmlldyB7XFxuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLkJ1dHRvbnNWaWV3IHtcXG4gIGJvcmRlci10b3A6ICM0NjRlNTUgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC44dnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXZ3IDA7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBET01IYW5kbGVyID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlRWxlbWVudCA9IChlbGVtZW50VGFnLCBjbGFzc05hbWUgPSBcIlwiLCBjb250ZW50ID0gXCJcIikgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VGFnKTtcbiAgICBsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdChcIiBcIik7XG4gICAgY2xhc3Nlcy5mb3JFYWNoKChjbGF6eikgPT4ge1xuICAgICAgaWYgKGNsYXp6ICE9PSBcIlwiKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhenopO1xuICAgIH0pO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVGaWVsZCA9IChuYW1lLCBlbGVtZW50ID0gXCJpbnB1dFwiLCB0eXBlID0gXCJ0ZXh0XCIpID0+IHtcbiAgICBsZXQgY29udGFpbmVyID0gRE9NSGFuZGxlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIGBmaWVsZCAke25hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIil9RmllbGRgXG4gICAgKTtcbiAgICBsZXQgbGFiZWwgPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBcIlwiLCBuYW1lKTtcbiAgICBsZXQgZmllbGQgPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICBpZiAoZmllbGQudGFnTmFtZSA9PT0gXCJJTlBVVFwiKSBmaWVsZC50eXBlID0gdHlwZTtcbiAgICBmaWVsZC5uYW1lID0gbmFtZS5zcGxpdChcIiBcIikuam9pbihcIlwiKTtcbiAgICBmaWVsZC5pZCA9IG5hbWU7XG4gICAgbGFiZWwuaHRtbEZvciA9IG5hbWU7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGZpZWxkKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH07XG5cbiAgcmV0dXJuIHsgY3JlYXRlRWxlbWVudCwgY3JlYXRlRmllbGQgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTUhhbmRsZXI7XG4iLCJpbXBvcnQgRE9NTmV3IGZyb20gXCIuL25ld1wiO1xuaW1wb3J0IERPTU1vZGFsIGZyb20gXCIuL21vZGFsXCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi4vdG9kb1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL3Byb2plY3RcIjtcblxuY29uc3QgYWRkTmV3VG9kbyA9ICgoKSA9PiB7XG4gIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZEJpZ1RvZG9cIik7XG4gIGxldCBmb3JtO1xuXG4gIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBET01OZXcuY3JlYXRlTmV3VG9kb01vZGFsKCk7XG4gICAgRE9NTW9kYWwuc2hvd01vZGFsKCk7XG4gICAgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3Rm9ybVwiKTtcbiAgfSk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBhZGROZXdUb2RvO1xuIiwiY29uc3QgRE9NTW9kYWwgPSAoKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWxcIik7XG4gIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbENvbnRhaW5lclwiKTtcbiAgbGV0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZUJ1dHRvblwiKTtcblxuICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XG4gICAgaWYgKCFtb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpIHtcbiAgICAgIHJlc2V0TW9kYWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVzZXRNb2RhbCA9ICgpID0+IHtcbiAgICBsZXQgbW9kYWxDb250ZW50ID0gbW9kYWxDb250YWluZXIucXVlcnlTZWxlY3RvcihcImRpdlwiKTtcbiAgICBtb2RhbENvbnRlbnQucmVtb3ZlKCk7XG4gIH07XG5cbiAgY29uc3QgaGlkZU1vZGFsID0gKCkgPT4ge1xuICAgIHJlc2V0TW9kYWwoKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9O1xuXG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgRE9NTW9kYWwuaGlkZU1vZGFsKCk7XG4gICAgfVxuICB9KTtcblxuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBET01Nb2RhbC5oaWRlTW9kYWwoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBoaWRlTW9kYWwsXG4gICAgc2hvd01vZGFsLFxuICAgIHJlc2V0TW9kYWwsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET01Nb2RhbDtcbiIsImltcG9ydCBET01IYW5kbGVyIGZyb20gXCIuLi9ET01IYW5kbGVyXCI7XG5pbXBvcnQgUHJpb3JpdHkgZnJvbSBcIi4uL3ByaW9yaXR5XCI7XG5pbXBvcnQgY2xvc2UgZnJvbSBcIi4uLy4uL2Fzc2V0cy9jbG9zZS5zdmdcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuLi90b2RvXCI7XG5pbXBvcnQgRE9NVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgRE9NTW9kYWwgZnJvbSBcIi4vbW9kYWxcIjtcblxuY29uc3QgRE9NTmV3ID0gKCgpID0+IHtcbiAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbENvbnRhaW5lclwiKTtcbiAgY29uc3QgX2NyZWF0ZURyb3Bkb3duID0gKCkgPT4ge1xuICAgIGxldCBzZWxlY3QgPSBET01IYW5kbGVyLmNyZWF0ZUZpZWxkKFwiUHJpb3JpdHlcIiwgXCJzZWxlY3RcIik7XG4gICAgUHJpb3JpdHkucHJpb3JpdGllcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgb3B0aW9uID0gRE9NSGFuZGxlci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIGVsZW1lbnQubmFtZSk7XG4gICAgICBvcHRpb24udmFsdWUgPSBlbGVtZW50Lm5hbWU7XG4gICAgICAvL0FwcGVuZCB0aGUgcHJpb3JpdHkgb3B0aW9uIHRvIHRoZSA8c2VsZWN0PiBlbGVtZW50LCB3aGljaCBpcyB0aGUgc2Vjb25kIGluIHRoZSBjb250YWluZXJcbiAgICAgIHNlbGVjdC5jaGlsZE5vZGVzWzFdLmFwcGVuZChvcHRpb24pO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxlY3Q7XG4gIH07XG5cbiAgY29uc3QgX2NyZWF0ZUZvcm0gPSAoKSA9PiB7XG4gICAgbGV0IGZvcm0gPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIFwibmV3Rm9ybVwiKTtcblxuICAgIGZvcm0uYXBwZW5kKERPTUhhbmRsZXIuY3JlYXRlRmllbGQoXCJUaXRsZVwiKSk7XG4gICAgZm9ybS5hcHBlbmQoRE9NSGFuZGxlci5jcmVhdGVGaWVsZChcIkR1ZSBkYXRlXCIsIFwiaW5wdXRcIiwgXCJkYXRlXCIpKTtcbiAgICBmb3JtLmFwcGVuZChfY3JlYXRlRHJvcGRvd24oKSk7XG4gICAgZm9ybS5hcHBlbmQoRE9NSGFuZGxlci5jcmVhdGVGaWVsZChcIkRlc2NyaXB0aW9uXCIsIFwidGV4dGFyZWFcIikpO1xuXG4gICAgcmV0dXJuIGZvcm07XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlTmV3VG9kb01vZGFsID0gKHBhcmVudCA9IG51bGwsIHRvZG9Db250YWluZXIgPSBudWxsKSA9PiB7XG4gICAgbGV0IHRpdGxlID0gRE9NSGFuZGxlci5jcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJuZXdUaXRsZVwiLCBcIkNyZWF0ZSB0b2RvXCIpO1xuICAgIGxldCBmb3JtID0gX2NyZWF0ZUZvcm0oKTtcbiAgICBsZXQgY3JlYXRlQnV0dG9uID0gRE9NSGFuZGxlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIFwiY3JlYXRlQnV0dG9uXCIsXG4gICAgICBcIkNyZWF0ZVwiXG4gICAgKTtcbiAgICBsZXQgY29udGFpbmVyID0gRE9NSGFuZGxlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibmV3Q29udGFpbmVyXCIpO1xuICAgIGNyZWF0ZUJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcblxuICAgIGNvbnRhaW5lci5hcHBlbmQodGl0bGUpO1xuICAgIGZvcm0uYXBwZW5kKGNyZWF0ZUJ1dHRvbik7XG4gICAgY29udGFpbmVyLmFwcGVuZChmb3JtKTtcbiAgICBtb2RhbC5hcHBlbmQoY29udGFpbmVyKTtcblxuICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbGV0IHRvZG8gPSBjcmVhdGVUb2RvT2JqZWN0KGZvcm0sIHBhcmVudCk7XG4gICAgICBsZXQgdG9kb0VsZW1lbnQgPSBET01Ub2RvLmNyZWF0ZVRhc2sodG9kbywgdHJ1ZSk7XG4gICAgICB0b2RvQ29udGFpbmVyLmluc2VydEJlZm9yZSh0b2RvRWxlbWVudCwgdG9kb0NvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgICAgRE9NTW9kYWwuaGlkZU1vZGFsKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVG9kb09iamVjdCA9IChmb3JtLCBwYXJlbnQpID0+IHtcbiAgICBsZXQgdGl0bGUgPSBmb3JtLlRpdGxlLnZhbHVlO1xuICAgIGxldCBkYXRlID0gZm9ybS5EdWVkYXRlLnZhbHVlO1xuICAgIGxldCBwcmlvcml0eSA9IGZvcm0uUHJpb3JpdHkuc2VsZWN0ZWRJbmRleCArIDE7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZm9ybS5EZXNjcmlwdGlvbi52YWx1ZTtcblxuICAgIGxldCB0b2RvID0gbmV3IFRvZG8odGl0bGUsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgZmFsc2UsIHBhcmVudCk7XG4gICAgcmV0dXJuIHRvZG87XG4gIH07XG5cbiAgcmV0dXJuIHsgY3JlYXRlTmV3VG9kb01vZGFsIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET01OZXc7XG4iLCJpbXBvcnQgRE9NSGFuZGxlciBmcm9tIFwiLi4vRE9NSGFuZGxlclwiO1xuaW1wb3J0IFByaW9yaXR5IGZyb20gXCIuLi9wcmlvcml0eVwiO1xuXG4vL1RyeSB0byByZWZhY3Rvcml6ZSB0aGUgcHJpb3JpdGllcyBjb2RlIGFuZCBmaWd1cmUgb3V0IGlmIHRoaXMgbG9naWMgYmVsb25ncyBoZXJlXG5cbmNvbnN0IERPTVByaW9yaXR5ID0gKCgpID0+IHtcbiAgbGV0IHByaW9yaXRpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXRpZXNcIik7XG4gIGxldCBwcmlvcml0aWVzQXJyYXkgPSBbXTtcblxuICBjb25zdCBjcmVhdGVQcmlvcml0eUl0ZW0gPSAocHJpb3JpdHkpID0+IHtcbiAgICBsZXQgbWFpbiA9IERPTUhhbmRsZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByaW9yaXR5XCIpO1xuICAgIGxldCBuYW1lID0gRE9NSGFuZGxlci5jcmVhdGVFbGVtZW50KFwicFwiLCBcInByaW9yaXR5TmFtZVwiLCBwcmlvcml0eS5uYW1lKTtcbiAgICBsZXQgY29sb3JDb250YWluZXIgPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJwcmlvcml0eUNvbG9yQ29udGFpbmVyXCJcbiAgICApO1xuICAgIGxldCBjb2xvckRpdiA9IERPTUhhbmRsZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByaW9yaXR5Q29sb3JcIik7XG5cbiAgICBjb2xvckRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwcmlvcml0eS5jb2xvcjtcbiAgICBjb2xvckNvbnRhaW5lci5hcHBlbmQoY29sb3JEaXYpO1xuICAgIG1haW4uYXBwZW5kKGNvbG9yQ29udGFpbmVyKTtcbiAgICBtYWluLmFwcGVuZChuYW1lKTtcblxuICAgIHJldHVybiBtYWluO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByaW9yaXR5Q29sb3IgPSAocHJpb3JpdHkpID0+IHtcbiAgICBsZXQgY29sb3JEaXYgPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcmlvcml0eUNvbG9yXCIpO1xuICAgIGNvbG9yRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFByaW9yaXR5LnByaW9yaXRpZXNbcHJpb3JpdHkgLSAxXS5jb2xvcjtcbiAgICByZXR1cm4gY29sb3JEaXY7XG4gIH07XG5cbiAgY29uc3QgcG9wdWxhdGVQcmlvcml0aWVzID0gKCgpID0+IHtcbiAgICBQcmlvcml0eS5wcmlvcml0aWVzLmZvckVhY2goKHByaW9yaXR5KSA9PiB7XG4gICAgICBwcmlvcml0aWVzLmFwcGVuZChjcmVhdGVQcmlvcml0eUl0ZW0ocHJpb3JpdHkpKTtcbiAgICB9KTtcbiAgfSkoKTtcblxuICByZXR1cm4geyBjcmVhdGVQcmlvcml0eUNvbG9yLCBjcmVhdGVQcmlvcml0eUl0ZW0gfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTVByaW9yaXR5O1xuIiwiaW1wb3J0IERPTVRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IERPTUhhbmRsZXIgZnJvbSBcIi4uL0RPTUhhbmRsZXJcIjtcblxuY29uc3QgRE9NUHJvamVjdCA9ICgoKSA9PiB7XG4gIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XG5cbiAgY29uc3QgcG9wdWxhdGVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBsZXQgdGl0bGUgPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwicHJvamVjdFRpdGxlXCIsIHByb2plY3QubmFtZSk7XG4gICAgcHJvamVjdHMuYXBwZW5kKHRpdGxlKTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5UHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgRE9NVG9kby5wb3B1bGF0ZVBlbmRpbmcocHJvamVjdCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZGlzcGxheVByb2plY3QsIHBvcHVsYXRlUHJvamVjdCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NUHJvamVjdDtcbiIsImltcG9ydCBET01IYW5kbGVyIGZyb20gXCIuLi9ET01IYW5kbGVyXCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi4vdG9kb1wiO1xuaW1wb3J0IERPTVByaW9yaXR5IGZyb20gXCIuL3ByaW9yaXR5XCI7XG5pbXBvcnQgRE9NVmlldyBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQgRE9NTmV3IGZyb20gXCIuL25ld1wiO1xuaW1wb3J0IERPTU1vZGFsIGZyb20gXCIuL21vZGFsXCI7XG5cbi8vIFJlZmFjdG9yIHRoaXMgY29kZSwgb25lIGZ1bmN0aW9uIHNob3VsZG4ndCBkbyBhbGwgdGhlIGpvYiwgdGhpbmsgZ2VhcnNcblxuLy8gQXNzZXRzXG5pbXBvcnQgY2hlY2sgZnJvbSBcIi4uLy4uL2Fzc2V0cy9jaGVja2VkLnN2Z1wiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9kZWxldGUuc3ZnXCI7XG5pbXBvcnQgZWRpdCBmcm9tIFwiLi4vLi4vYXNzZXRzL2VkaXQuc3ZnXCI7XG5pbXBvcnQgdW5jaGVja2VkIGZyb20gXCIuLi8uLi9hc3NldHMvdW5jaGVja2VkLnN2Z1wiO1xuXG5jb25zdCBET01Ub2RvID0gKCgpID0+IHtcbiAgLy9Qcml2YXRlIG1ldGhvZHNcblxuICAvL0dpdmVuIGFuIGFycmF5IG9mIGljb25zLCB0aGlzIGZ1bmN0aW9uIHdpbGwgY3JlYXRlIHRoZSBtaW5pIGNvbnRhaW5lcnMgYW5kIGluc2VydCB0aGUgaWNvbnMgaW5zaWRlXG4gIGNvbnN0IF9jcmVhdGVNaW5pQ29udGFpbmVycyA9IChhcnJheSkgPT4ge1xuICAgIGxldCBtaW5pQ29udGFpbmVycyA9IFtdO1xuICAgIGFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBjb250YWluZXIgPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrTWluaUNvbnRhaW5lclwiKTtcbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKGVsZW1lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGltZyA9IERPTUhhbmRsZXIuY3JlYXRlRWxlbWVudChcImltZ1wiLCBcInRhc2tCdXR0b25cIik7XG4gICAgICAgIGltZy5zcmMgPSBlbGVtZW50O1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKGltZyk7XG4gICAgICB9XG4gICAgICBtaW5pQ29udGFpbmVycy5wdXNoKGNvbnRhaW5lcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1pbmlDb250YWluZXJzO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRvZG9UaXRsZSA9ICh0b2RvKSA9PiB7XG4gICAgbGV0IHRhc2tUaXRsZSA9IERPTUhhbmRsZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRhc2tUaXRsZVwiKTtcbiAgICBsZXQgdGFza1RpdGxlUCA9IERPTUhhbmRsZXIuY3JlYXRlRWxlbWVudChcInBcIiwgXCJcIiwgdG9kby50aXRsZSk7XG4gICAgdGFza1RpdGxlLmFwcGVuZCh0YXNrVGl0bGVQKTtcbiAgICByZXR1cm4gdGFza1RpdGxlO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRvZG9UaW1lID0gKHRvZG8pID0+IHtcbiAgICBsZXQgdGFza1RpbWUgPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrVGltZVwiKTtcbiAgICBsZXQgdGFza1RpbWVQID0gRE9NSGFuZGxlci5jcmVhdGVFbGVtZW50KFwicFwiLCBcIlwiLCBcIjUgZGF5cyBsZWZ0XCIpO1xuICAgIHRhc2tUaW1lLmFwcGVuZCh0YXNrVGltZVApO1xuICAgIHJldHVybiB0YXNrVGltZTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVUYXNrID0gKHRvZG8sIHN1YnRhc2sgPSBmYWxzZSkgPT4ge1xuICAgIGxldCB0YXNrID0gRE9NSGFuZGxlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidGFza1wiKTtcbiAgICBpZiAoc3VidGFzaykge1xuICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKFwic3VidGFza1wiKTtcbiAgICB9XG4gICAgbGV0IGljb25zID0gW1xuICAgICAgdW5jaGVja2VkLFxuICAgICAgRE9NUHJpb3JpdHkuY3JlYXRlUHJpb3JpdHlDb2xvcih0b2RvLnByaW9yaXR5KSxcbiAgICAgIGVkaXQsXG4gICAgICBkZWxldGVJY29uLFxuICAgIF07XG4gICAgbGV0IGVsZW1lbnRzID0gX2NyZWF0ZU1pbmlDb250YWluZXJzKGljb25zKTtcbiAgICBsZXQgdGFza1RpdGxlID0gY3JlYXRlVG9kb1RpdGxlKHRvZG8pO1xuICAgIGxldCB0YXNrVGltZSA9IGNyZWF0ZVRvZG9UaW1lKHRvZG8pO1xuICAgIGxldCBkYXRhQ29udGFpbmVyID0gRE9NSGFuZGxlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidGFza0RhdGFDb250YWluZXJcIik7XG4gICAgZGF0YUNvbnRhaW5lci5hcHBlbmQodGFza1RpdGxlKTtcbiAgICBkYXRhQ29udGFpbmVyLmFwcGVuZCh0YXNrVGltZSk7XG5cbiAgICBlbGVtZW50cy5zcGxpY2UoMiwgMCwgZGF0YUNvbnRhaW5lcik7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgdGFzay5hcHBlbmQoZWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICB0YXNrLmRhdGFzZXQuaWQgPSB0b2RvLmlkO1xuICAgIGRhdGFDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIERPTVZpZXcucmVuZGVySW5mbyh0b2RvKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGFzaztcbiAgfTtcblxuICBjb25zdCBjcmVhdGVUb2RvID0gKHRvZG8pID0+IHtcbiAgICBsZXQgdGFza0NvbnRhaW5lciA9IERPTUhhbmRsZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRhc2tDb250YWluZXJcIik7XG4gICAgbGV0IHN1YnRhc2tzQ29udGFpbmVyID0gRE9NSGFuZGxlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwic3VidGFza3NDb250YWluZXJcIlxuICAgICk7XG4gICAgbGV0IHRhc2sgPSBjcmVhdGVUYXNrKHRvZG8pO1xuICAgIGxldCBidXR0b24gPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgXCJhZGRTdWJ0YXNrXCIsXG4gICAgICBcIisgQWRkIHN1YnRhc2tcIlxuICAgICk7XG5cbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gY3JlYXRlIGEgc3VidGFzayBmb3IgdGhpcyB0b2RvXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgRE9NTmV3LmNyZWF0ZU5ld1RvZG9Nb2RhbCh0b2RvLCBlLnRhcmdldC5wYXJlbnRFbGVtZW50KTtcbiAgICAgIERPTU1vZGFsLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuICAgIHN1YnRhc2tzQ29udGFpbmVyLmFwcGVuZChidXR0b24pO1xuICAgIGxldCBzdWJ0YXNrcyA9IFtdO1xuICAgIHRvZG8uY2hpbGRyZW4uZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgbGV0IHN1YnRhc2sgPSBjcmVhdGVUYXNrKHRhc2ssIHRydWUpO1xuICAgICAgc3VidGFza3MucHVzaChzdWJ0YXNrKTtcbiAgICB9KTtcblxuICAgIHN1YnRhc2tzLmZvckVhY2goKHN1YnRhc2spID0+IHtcbiAgICAgIHN1YnRhc2tzQ29udGFpbmVyLnByZXBlbmQoc3VidGFzayk7XG4gICAgfSk7XG5cbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZCh0YXNrKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZChzdWJ0YXNrc0NvbnRhaW5lcik7XG4gICAgcmV0dXJuIHRhc2tDb250YWluZXI7XG4gIH07XG5cbiAgY29uc3QgcG9wdWxhdGVQZW5kaW5nID0gKHByb2plY3QpID0+IHtcbiAgICBsZXQgcGVuZGluZ1RvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wZW5kaW5nVG9kb3NcIik7XG4gICAgcHJvamVjdC5wZW5kaW5nLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGxldCBiaWdUb2RvID0gY3JlYXRlVG9kbyh0b2RvKTtcbiAgICAgIHBlbmRpbmdUb2Rvcy5hcHBlbmQoYmlnVG9kbyk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgcG9wdWxhdGVQZW5kaW5nLCBjcmVhdGVUYXNrLCBjcmVhdGVUb2RvIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET01Ub2RvO1xuIiwiaW1wb3J0IHsgZGEsIGRlIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xuaW1wb3J0IERPTUhhbmRsZXIgZnJvbSBcIi4uL0RPTUhhbmRsZXJcIjtcbmltcG9ydCBET01Qcmlvcml0eSBmcm9tIFwiLi9wcmlvcml0eVwiO1xuaW1wb3J0IERPTVRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4uL3RvZG9cIjtcbmltcG9ydCBjbG9zZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2Nsb3NlLnN2Z1wiO1xuaW1wb3J0IFByaW9yaXR5IGZyb20gXCIuLi9wcmlvcml0eVwiO1xuaW1wb3J0IERPTU1vZGFsIGZyb20gXCIuL21vZGFsXCI7XG5cbmNvbnN0IERPTVZpZXcgPSAoKCkgPT4ge1xuICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsQ29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IF9jcmVhdGVDb250ZW50ID0gKHN0cmluZywgY2xhc3NOYW1lLCB0YWcpID0+IHtcbiAgICBsZXQgY29udGVudCA9IERPTUhhbmRsZXIuY3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzTmFtZSwgc3RyaW5nKTtcbiAgICBsZXQgY29udGVudENvbnRhaW5lciA9IERPTUhhbmRsZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBgJHtjbGFzc05hbWV9Q29udGFpbmVyYFxuICAgICk7XG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChjb250ZW50KTtcbiAgICByZXR1cm4gY29udGVudENvbnRhaW5lcjtcbiAgfTtcblxuICBjb25zdCBfY3JlYXRlRGF0ZSA9IChkYXRlID0gXCJcIikgPT4ge1xuICAgIGxldCBjb250YWluZXIgPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJkYXRlVmlld0NvbnRhaW5lclwiKTtcbiAgICBsZXQgbGFiZWwgPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBcIlwiLCBcIkR1ZSBkYXRlXCIpO1xuICAgIGxldCBkYXRlU3RyaW5nID0gRE9NSGFuZGxlci5jcmVhdGVFbGVtZW50KFwicFwiLCBcImRhdGVWaWV3XCIsIFwiMDEvMDEvMjAyM1wiKTtcbiAgICBsZXQgdGltZUxlZnQgPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInBcIixcbiAgICAgIFwidGltZUxlZnRWaWV3XCIsXG4gICAgICBcIig0IGRheXMgbGVmdClcIlxuICAgICk7XG4gICAgbGV0IGRhdGVDb250YWluZXIgPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJkYXRlU3RyaW5nQ29udGFpbmVyXCIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZChsYWJlbCk7XG4gICAgZGF0ZUNvbnRhaW5lci5hcHBlbmQoZGF0ZVN0cmluZyk7XG4gICAgZGF0ZUNvbnRhaW5lci5hcHBlbmQodGltZUxlZnQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoZGF0ZUNvbnRhaW5lcik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfTtcblxuICBjb25zdCBfY3JlYXRlU3ViVGFza3MgPSAoYXJyYXkpID0+IHtcbiAgICBsZXQgdGFza3NDb250YWluZXIgPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ2aWV3U3ViQ29udGFpbmVyXCIpO1xuICAgIGxldCB0aXRsZSA9IERPTUhhbmRsZXIuY3JlYXRlRWxlbWVudChcImgxXCIsIFwiXCIsIFwiVGFza3MgbGlua2VkIHRvIHRoaXMgaXRlbVwiKTtcbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmQodGl0bGUpO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgbGV0IHRhc2tJdGVtID0gRE9NVG9kby5jcmVhdGVUYXNrKGVsZW1lbnQsIHRydWUpO1xuICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kKHRhc2tJdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0YXNrc0NvbnRhaW5lcjtcbiAgfTtcblxuICBjb25zdCBfY3JlYXRlUHJpb3JpdHkgPSAocHJpb3JpdHkpID0+IHtcbiAgICBsZXQgdG9kb1ByaW9yaXR5ID0gRE9NUHJpb3JpdHkuY3JlYXRlUHJpb3JpdHlJdGVtKFxuICAgICAgUHJpb3JpdHkucHJpb3JpdGllc1twcmlvcml0eSAtIDFdXG4gICAgKTtcbiAgICBsZXQgbGFiZWwgPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBcInByaW9yaXR5TGFiZWxcIiwgXCJQcmlvcml0eVwiKTtcbiAgICBsZXQgY29udGFpbmVyID0gRE9NSGFuZGxlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJpb3JpdHlWaWV3Q29udGFpbmVyXCIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZCh0b2RvUHJpb3JpdHkpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH07XG5cbiAgY29uc3QgX2NyZWF0ZUJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgbGV0IGNvbnRhaW5lciA9IERPTUhhbmRsZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIkJ1dHRvbnNWaWV3XCIpO1xuICAgIGxldCBkZWxldGVCdXR0b24gPSBET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgXCJkZWxldGVCdXR0b25cIixcbiAgICAgIFwiRGVsZXRlXCJcbiAgICApO1xuICAgIGxldCBlZGl0QnV0dG9uID0gRE9NSGFuZGxlci5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiZWRpdEJ1dHRvblwiLCBcIkVkaXRcIik7XG4gICAgbGV0IGNoZWNrQnV0dG9uID0gRE9NSGFuZGxlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIFwiY2hlY2tCdXR0b25cIixcbiAgICAgIFwiQ2hlY2tcIlxuICAgICk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGRlbGV0ZUJ1dHRvbik7XG4gICAgY29udGFpbmVyLmFwcGVuZChlZGl0QnV0dG9uKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGNoZWNrQnV0dG9uKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9O1xuXG4gIGNvbnN0IF9jcmVhdGVJbmZvID0gKHRvZG8pID0+IHtcbiAgICBsZXQgaW5mb0NvbnRhaW5lciA9IERPTUhhbmRsZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImluZm9Db250YWluZXJcIik7XG4gICAgbGV0IHRvZG9UaXRsZSA9IF9jcmVhdGVDb250ZW50KHRvZG8udGl0bGUsIFwidGl0bGVWaWV3XCIsIFwiaDFcIik7XG4gICAgbGV0IHRvZG9EZXNjcmlwdGlvbiA9IF9jcmVhdGVDb250ZW50KFxuICAgICAgdG9kby5kZXNjcmlwdGlvbixcbiAgICAgIFwiZGVzY3JpcHRpb25WaWV3XCIsXG4gICAgICBcInBcIlxuICAgICk7XG4gICAgbGV0IHRvZG9EYXRlID0gX2NyZWF0ZURhdGUoKTtcbiAgICBsZXQgdG9kb1ByaW9yaXR5ID0gX2NyZWF0ZVByaW9yaXR5KHRvZG8ucHJpb3JpdHkpO1xuICAgIGxldCB0b2RvRGF0YUNvbnRhaW5lciA9IERPTUhhbmRsZXIuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcInRvZG9EYXRhQ29udGFpbmVyXCJcbiAgICApO1xuICAgIGxldCB0b2RvU3VidGFza3M7XG4gICAgaWYgKHRvZG8uY2hpbGRyZW4pIHtcbiAgICAgIHRvZG9TdWJ0YXNrcyA9IF9jcmVhdGVTdWJUYXNrcyh0b2RvLmNoaWxkcmVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9kb1N1YnRhc2tzID0gXCJcIjtcbiAgICB9XG4gICAgbGV0IG1haW5UYXNrQ29udGFpbmVyID0gRE9NSGFuZGxlci5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwibWFpblRhc2tDb250YWluZXJcIlxuICAgICk7XG4gICAgbGV0IGJ1dHRvbnMgPSBfY3JlYXRlQnV0dG9ucygpO1xuXG4gICAgbWFpblRhc2tDb250YWluZXIuYXBwZW5kKHRvZG9UaXRsZSk7XG4gICAgbWFpblRhc2tDb250YWluZXIuYXBwZW5kKERPTUhhbmRsZXIuY3JlYXRlRWxlbWVudChcImhyXCIpKTtcbiAgICBtYWluVGFza0NvbnRhaW5lci5hcHBlbmQodG9kb0Rlc2NyaXB0aW9uKTtcbiAgICB0b2RvRGF0YUNvbnRhaW5lci5hcHBlbmQodG9kb0RhdGUpO1xuICAgIHRvZG9EYXRhQ29udGFpbmVyLmFwcGVuZCh0b2RvUHJpb3JpdHkpO1xuICAgIG1haW5UYXNrQ29udGFpbmVyLmFwcGVuZCh0b2RvRGF0YUNvbnRhaW5lcik7XG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmQobWFpblRhc2tDb250YWluZXIpO1xuICAgIGlmICghdG9kby5pc1N1YnRhc2soKSkge1xuICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmQoRE9NSGFuZGxlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2VwYXJhdG9yXCIpKTtcbiAgICAgIGluZm9Db250YWluZXIuYXBwZW5kKHRvZG9TdWJ0YXNrcyk7XG4gICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZChET01IYW5kbGVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzZXBhcmF0b3JcIikpO1xuICAgIH1cblxuICAgIGluZm9Db250YWluZXIuYXBwZW5kKGJ1dHRvbnMpO1xuXG4gICAgcmV0dXJuIGluZm9Db250YWluZXI7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVySW5mbyA9ICh0b2RvKSA9PiB7XG4gICAgbGV0IHRvZG9JbmZvID0gX2NyZWF0ZUluZm8odG9kbyk7XG4gICAgbW9kYWwuYXBwZW5kKHRvZG9JbmZvKTtcbiAgICBET01Nb2RhbC5zaG93TW9kYWwoKTtcbiAgfTtcblxuICByZXR1cm4geyByZW5kZXJJbmZvIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET01WaWV3O1xuIiwiaW1wb3J0IHsgZWwgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5cbmNvbnN0IGhlbHBlciA9ICgoKSA9PiB7XG4gIC8vIFRoaXMgbWV0aG9kIGZpbmRzIHRoZSBlbGVtZW50IG1hdGNoaW5nIHRoZSBJRCBvbiB0aGUgZ2l2ZW4gYXJyYXkgYW5kIGRlbGV0ZXMgaXQgYnkgaW5kZXhcbiAgY29uc3QgZGVsZXRlSXRlbSA9IChhcnJheSwgaWQpID0+IHtcbiAgICBsZXQgZm91bmQgPSBhcnJheS5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKTtcbiAgICBmb3VuZCA9PT0gMCA/IGFycmF5LnNoaWZ0KCkgOiBhcnJheS5zcGxpY2UoZm91bmQsIGZvdW5kKTtcbiAgfTtcblxuICAvLyBHaXZlbiBhbiBhcnJheSBvZiB0b2RvcyBhbmQgYW4gaWQsIHRoaXMgbWV0aG9kIHdpbGwgcmVjdXJzaXZlbHkgZmluZCB0aGUgdG9kb1xuICBjb25zdCBmaW5kVGFzayA9IChxdWV1ZSwgaWQpID0+IHtcbiAgICBsZXQgY3VycmVudCA9IHF1ZXVlWzBdO1xuICAgIGlmIChjdXJyZW50LmlkID09PSBpZCkgcmV0dXJuIGN1cnJlbnQ7XG4gICAgcXVldWUuc2hpZnQoKTtcblxuICAgIGlmICghY3VycmVudC5pc1N1YnRhc2soKSkgcXVldWUgPSBbLi4ucXVldWUsIC4uLmN1cnJlbnQuY2hpbGRyZW5dO1xuICAgIHJldHVybiBmaW5kVGFzayhxdWV1ZSwgaWQpO1xuICB9O1xuXG4gIHJldHVybiB7IGRlbGV0ZUl0ZW0sIGZpbmRUYXNrIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBoZWxwZXI7XG4iLCJjb25zdCBpZEFzc2lnbmVyID0gKCgpID0+IHtcbiAgbGV0IGFzc2lnbmVyID0gMTtcblxuICBjb25zdCBnZXRJZE51bWJlciA9ICgpID0+IHtcbiAgICBhc3NpZ25lciArPSAxO1xuICAgIHJldHVybiBhc3NpZ25lciAtIDE7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0SWROdW1iZXIgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGlkQXNzaWduZXI7XG4iLCJjbGFzcyBQcmlvcml0eSB7XG4gICNuYW1lO1xuICAjbnVtYmVyO1xuICBjb2xvcjtcblxuICBzdGF0aWMgI3ByaW9yaXRpZXNBcnJheSA9IFtcbiAgICBuZXcgUHJpb3JpdHkoXCJVcmdlbnRcIiwgMSwgXCIjRTgxNjE2XCIpLFxuICAgIG5ldyBQcmlvcml0eShcIkhpZ2hcIiwgMiwgXCIjRUY1NTEzXCIpLFxuICAgIG5ldyBQcmlvcml0eShcIk1lZGl1bVwiLCAzLCBcIiNGM0REMTFcIiksXG4gICAgbmV3IFByaW9yaXR5KFwiTG93XCIsIDQsIFwiIzIyQzUxRlwiKSxcbiAgICBuZXcgUHJpb3JpdHkoXCJPcHRpb25hbFwiLCA1LCBcIiMyMzM2RTBcIiksXG4gIF07XG5cbiAgc3RhdGljIGdldCBwcmlvcml0aWVzKCkge1xuICAgIHJldHVybiBbLi4uUHJpb3JpdHkuI3ByaW9yaXRpZXNBcnJheV07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihuYW1lLCBudW1iZXIsIGNvbG9yKSB7XG4gICAgdGhpcy4jbmFtZSA9IG5hbWU7XG4gICAgdGhpcy4jbnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLiNuYW1lO1xuICB9XG5cbiAgZ2V0IG51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy4jbnVtYmVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaW9yaXR5O1xuIiwiLyogMS4tIElmIGEgdG9kbydzIGlzIGEgcGFyZW50LCB0aGV5IGdldCBhZGRlZCB0byB0aGUgcGVuZGluZyB0YXNrcyB3aGVuIGNyZWF0ZWRcbiAgIDIuLSBTb3J0IHRoZSBwZW5kaW5nIHRhc2tzIGFycmF5IGJ5IHByaW9yaXR5LCBhbmQgc29ydCB0aGUgY2hpbGRyZW4gYXJyYXkgYnkgcHJpb3JpdHkgYXMgd2VsbCAqL1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgI3BlbmRpbmdUYXNrcztcbiAgI2NvbXBsZXRlZFRhc2tzO1xuXG4gIHN0YXRpYyBzZWxlY3RlZDtcblxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLiNwZW5kaW5nVGFza3MgPSBbXTtcbiAgICB0aGlzLiNjb21wbGV0ZWRUYXNrcyA9IFtdO1xuICB9XG5cbiAgZ2V0IHBlbmRpbmcoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLiNwZW5kaW5nVGFza3NdO1xuICB9XG5cbiAgZ2V0IGNvbXBsZXRlZCgpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuI2NvbXBsZXRlZFRhc2tzXTtcbiAgfVxuXG4gIGFkZFBlbmRpbmcoaXRlbSkge1xuICAgIHRoaXMuI3BlbmRpbmdUYXNrcy5wdXNoKGl0ZW0pO1xuICB9XG5cbiAgYWRkQ29tcGxldGVkKGl0ZW0pIHtcbiAgICB0aGlzLiNjb21wbGV0ZWRUYXNrcy5wdXNoKGl0ZW0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJpbXBvcnQgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IGlkQXNzaWduZXIgZnJvbSBcIi4vaWRBc3NpZ25lclwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG4vKiAxLi0gQmUgYWJsZSB0byBjcmVhdGUgYW5kIGRlbGV0ZSB0b2RvJ3Mg4pyU77iPXG4gICAyLi0gSWYgYSB0b2RvJ3MgaXMgYSBwYXJlbnQsIHRoZXkgZ2V0IGFkZGVkIHRvIHRoZSBwZW5kaW5nIHRhc2tzIHdoZW4gY3JlYXRlZCDinJTvuI9cbiAgIDMuLSBJZiBhIHBhcmVudCB0b2RvIGlzIGRlbGV0ZWQsIGFsbCBpdCdzIGNoaWxkcmVuIGFyZSBkZWxldGVkIGFzIHdlbGwg4pyU77iPXG4gICA0Li0gT25seSBwYXJlbnQncyB0b2RvIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGNvbXBsZXRlZCB0YXNrcyBhcnJheSwgaWYgYSBwYXJlbnQgdG9kbyBpcyBjaGVja2VkLCBhbGwgaXQncyBjaGlsZHJlbiB3aWxsIGJlIOKclO+4j1xuICAgNS4tIFNvcnQgdGhlIHBlbmRpbmcgdGFza3MgYXJyYXkgYnkgcHJpb3JpdHksIGFuZCBzb3J0IHRoZSBjaGlsZHJlbiBhcnJheSBieSBwcmlvcml0eSBhcyB3ZWxsICovXG5cbmNsYXNzIFRvZG8ge1xuICAjcGFyZW50O1xuICAjY2hpbGRyZW47XG4gICNpZDtcbiAgI2lzQ2hlY2tlZDtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBpc0NoZWNrZWQsIHBhcmVudCA9IG51bGwpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuI2lzQ2hlY2tlZCA9IGlzQ2hlY2tlZDtcbiAgICB0aGlzLiNpZCA9IGlkQXNzaWduZXIuZ2V0SWROdW1iZXIoKTtcbiAgICB0aGlzLiNwYXJlbnQgPSBwYXJlbnQ7XG4gICAgaWYgKHRoaXMuI3BhcmVudCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy4jY2hpbGRyZW4gPSBbXTtcbiAgICAgIFByb2plY3Quc2VsZWN0ZWQuYWRkUGVuZGluZyh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jY2hpbGRyZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVUb2RvKHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pIHtcbiAgICBsZXQgYSA9IG5ldyBUb2RvKHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGZhbHNlLCB0aGlzKTtcbiAgICB0aGlzLiNjaGlsZHJlbi5wdXNoKGEpO1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLiNpZDtcbiAgfVxuXG4gIGdldCBjaGlsZHJlbigpIHtcbiAgICBpZiAodGhpcy4jY2hpbGRyZW4pIHJldHVybiBbLi4udGhpcy4jY2hpbGRyZW5dO1xuICAgIHJldHVybiB0aGlzLiNjaGlsZHJlbjtcbiAgfVxuXG4gIGdldCBwYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3BhcmVudDtcbiAgfVxuXG4gIHRvZ2dsZUNoZWNrKCkge1xuICAgIGlmICh0aGlzLiNpc0NoZWNrZWQpIHtcbiAgICAgIHRoaXMuI2lzQ2hlY2tlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiNpc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgLy9JZiB0aGUgdG9kbyBpcyBhIHBhcmVudCBjaGVjayBhbGwgaXQncyBjaGlsZHJlblxuICAgICAgaWYgKHRoaXMuI3BhcmVudCA9PT0gbnVsbCkgdGhpcy4jcmVjdXJzaXZlQ2hlY2sodGhpcy4jY2hpbGRyZW4pO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjaGVjaygpIHtcbiAgICByZXR1cm4gdGhpcy4jaXNDaGVja2VkO1xuICB9XG5cbiAgaXNTdWJ0YXNrKCkge1xuICAgIHJldHVybiB0aGlzLiNwYXJlbnQgIT09IG51bGw7XG4gIH1cblxuICAjcmVjdXJzaXZlQ2hlY2soYXJyYXksIGluZGV4ID0gMCkge1xuICAgIGlmIChhcnJheVtpbmRleF0gJiYgYXJyYXlbaW5kZXhdLmNoZWNrID09PSBmYWxzZSkge1xuICAgICAgYXJyYXlbaW5kZXhdLnRvZ2dsZUNoZWNrKCk7XG4gICAgICByZXR1cm4gdGhpcy4jcmVjdXJzaXZlQ2hlY2soYXJyYXksIGluZGV4ICsgMSk7XG4gICAgfVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUvbWFpbi5zY3NzXCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9tb2R1bGVzL3RvZG9cIjtcbmltcG9ydCBoZWxwZXIgZnJvbSBcIi4vbW9kdWxlcy9oZWxwZXJcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdFwiO1xuaW1wb3J0IERPTUhhbmRsZXIgZnJvbSBcIi4vbW9kdWxlcy9ET01IYW5kbGVyXCI7XG5pbXBvcnQgRE9NUHJpb3JpdHkgZnJvbSBcIi4vbW9kdWxlcy9jb21wb25lbnRzL3ByaW9yaXR5XCI7XG5pbXBvcnQgUHJpb3JpdHkgZnJvbSBcIi4vbW9kdWxlcy9wcmlvcml0eVwiO1xuaW1wb3J0IERPTVRvZG8gZnJvbSBcIi4vbW9kdWxlcy9jb21wb25lbnRzL3RvZG9cIjtcbmltcG9ydCBET01Qcm9qZWN0IGZyb20gXCIuL21vZHVsZXMvY29tcG9uZW50cy9wcm9qZWN0XCI7XG5pbXBvcnQgRE9NTmV3IGZyb20gXCIuL21vZHVsZXMvY29tcG9uZW50cy9uZXdcIjtcbmltcG9ydCBET01WaWV3IGZyb20gXCIuL21vZHVsZXMvY29tcG9uZW50cy92aWV3XCI7XG5pbXBvcnQgRE9NTW9kYWwgZnJvbSBcIi4vbW9kdWxlcy9jb21wb25lbnRzL21vZGFsXCI7XG5pbXBvcnQgYWRkTmV3VG9kbyBmcm9tIFwiLi9tb2R1bGVzL2NvbXBvbmVudHMvYWRkTmV3VG9kb1wiO1xuXG4vKlxuMS4tIEFkZCBzdHlsZXMgdG8gYnV0dG9ucyDinJTvuI9cbjIuLSBBZGQgZnVuY3Rpb25hbGl0eSB0byBidXR0b25zXG4zLi0gQWRkIGNsb3NlIGZ1bmN0aW9uIHRvIG1vZGFsLCBzZXQgb3BhY2l0eSB0byBiYWNrZ3JvdW5kXG40Li0gQ3JlYXRlIGFuIGVkaXQgbW9kYWxcbjUuLSBBZGQgYmFzaWMgYnV0dG9ucyB0byB2aWV3IG1vZGFsXG4qL1xuXG4vLyByZWZhY3RvciBhbG1vc3QgZXZlcnl0aGluZyBvciBreXNcblxubGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChcIkEgcHJvamVjdFwiKTtcblByb2plY3Quc2VsZWN0ZWQgPSBwcm9qZWN0O1xuXG5sZXQgYSA9IG5ldyBUb2RvKFxuICBcIk15IGZpcnN0IHRvZG9cIixcbiAgXCIwOS8wMS8yMDIzXCIsXG4gIDEsXG4gIFwiVGhpcyBpcyBnb2luZyB0byBiZSBhIGJpZyBwcm9qZWN0XCIsXG4gIGZhbHNlXG4pO1xuXG5sZXQgYiA9IG5ldyBUb2RvKFxuICBcIlRoYXQgcHJvamVjdCB0b2RvXCIsXG4gIFwiMTAvMDEvMjAyM1wiLFxuICAzLFxuICBcIlRoaXMgaXMgdGhlIGZpcnN0IHRvZG8gb2YgdGhhdCBwcm9qZWN0XCIsXG4gIGZhbHNlXG4pO1xuXG5sZXQgYyA9IGEuY3JlYXRlVG9kbyhcbiAgXCJUaGlzIGlzIGFub3RoZXIgdG9kbyBmb3IgdGhhdCBwcm9qZWN0XCIsXG4gIFwiMTAvMDEvMjAyM1wiLFxuICA0LFxuICBcIkRlbGV0ZSBtZVwiLFxuICBmYWxzZVxuKTtcblxubGV0IGQgPSBiLmNyZWF0ZVRvZG8oXG4gIFwiVGhpcmQgdG9kbyBmb3IgdGhhdCBwcm9qZWN0LCBpbSBub3cgdHlwaW5nIHRvIGZpbGwgdGhlIHRpdGxlXCIsXG4gIFwiMTAvMDEvMjAyM1wiLFxuICA1LFxuICBcIlRoaXMgY291cnNlIHRha2VzIHlvdSBvbiBhIGpvdXJuZXkgdGhyb3VnaCB0aGUgbWFueSBmYWNldHMgb2YgbW9kZXJuIHJlc3BvbnNpdmUgd2ViIGRlc2lnbi4gVGhlIGZpcnN0IGZldyBtb2R1bGVzIHdpbGwgZWFzZSB5b3UgaW4gd2l0aCBhIGhpc3Rvcnkgb2Ygd2hlcmUgcmVzcG9uc2l2ZSBkZXNpZ24gY2FtZSBmcm9tIGFuZCBhIGxvb2sgYXQgdGhlIGZ1bmRhbWVudGFscyBvZiByZXNwb25zaXZlIGxheW91dHMuIEZyb20gdGhlcmUsXCIsXG4gIHRydWVcbik7XG5cbkRPTVByb2plY3QucG9wdWxhdGVQcm9qZWN0KHByb2plY3QpO1xuRE9NUHJvamVjdC5kaXNwbGF5UHJvamVjdChwcm9qZWN0KTtcblxubGV0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrRGF0YUNvbnRhaW5lclwiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==