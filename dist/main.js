/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/alert.service.js":
/*!**********************************!*\
  !*** ./src/app/alert.service.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AlertService\": () => (/* binding */ AlertService)\n/* harmony export */ });\n/* harmony import */ var _utils_inputs_are_valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/inputs-are-valid */ \"./src/app/utils/inputs-are-valid.js\");\n\nclass AlertService {\n  constructor() {\n    this.errorBox = document.getElementById(\"error\");\n  }\n\n  handleAdditionError(inputs, numbers) {\n    const fullMessage = inputs.reduce((message, str, index) => {\n      if ((0,_utils_inputs_are_valid__WEBPACK_IMPORTED_MODULE_0__.inputsAreValid)(numbers[index])) {\n        return message + \"\";\n      } else {\n        return message + `${str} is not a number. `;\n      }\n    }, \"Please enter two valid numbers! \");\n\n    this.errorBox.classList.remove(\"invisible\");\n    this.errorBox.innerText = fullMessage;\n  }\n\n  hideErrors() {\n    this.errorBox.classList.add(\"invisible\");\n  }\n}\n\n\n//# sourceURL=webpack://webpack-demo-app-b96a9dbce0d4abbf156612ccb23e4be74d6fd313/./src/app/alert.service.js?");

/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"run\": () => (/* binding */ run)\n/* harmony export */ });\n/* harmony import */ var _utils_inputs_are_valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/inputs-are-valid */ \"./src/app/utils/inputs-are-valid.js\");\n/* harmony import */ var _utils_parse_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/parse-inputs */ \"./src/app/utils/parse-inputs.js\");\n\n\nconst run = (alertService, componentService) => {\n  alertService.hideErrors();\n\n  componentService.onClick(() => {\n    alertService.hideErrors();\n    const inputs = componentService.getInputs();\n    const parsedInputs = (0,_utils_parse_inputs__WEBPACK_IMPORTED_MODULE_1__.parseInputs)(...inputs);\n    if ((0,_utils_inputs_are_valid__WEBPACK_IMPORTED_MODULE_0__.inputsAreValid)(...parsedInputs)) {\n      const [numA, numB] = parsedInputs;\n      componentService.setResult(numA + numB);\n    } else {\n      componentService.setResult(\"\");\n      alertService.handleAdditionError(inputs, parsedInputs);\n    }\n  });\n};\n\n\n//# sourceURL=webpack://webpack-demo-app-b96a9dbce0d4abbf156612ccb23e4be74d6fd313/./src/app/app.js?");

/***/ }),

/***/ "./src/app/component.service.js":
/*!**************************************!*\
  !*** ./src/app/component.service.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ComponentService\": () => (/* binding */ ComponentService)\n/* harmony export */ });\nclass ComponentService {\n  constructor() {\n    this.numberOneInput = document.getElementById(\"numberOne\");\n    this.numberTwoInput = document.getElementById(\"numberTwo\");\n    this.addValuesButton = document.getElementById(\"addValues\");\n    this.resultDiv = document.getElementById(\"result\");\n  }\n\n  getInputs() {\n    return [this.numberOneInput.value, this.numberTwoInput.value];\n  }\n\n  setResult(str) {\n    this.resultDiv.innerText = str;\n  }\n\n  onClick(cb) {\n    this.addValuesButton.addEventListener(\"click\", cb);\n  }\n}\n\n\n//# sourceURL=webpack://webpack-demo-app-b96a9dbce0d4abbf156612ccb23e4be74d6fd313/./src/app/component.service.js?");

/***/ }),

/***/ "./src/app/utils/inputs-are-valid.js":
/*!*******************************************!*\
  !*** ./src/app/utils/inputs-are-valid.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inputsAreValid\": () => (/* binding */ inputsAreValid)\n/* harmony export */ });\nconst inputsAreValid = (...input) => {\n  return input.every((num) => typeof num === \"number\" && !isNaN(num));\n};\n\n\n//# sourceURL=webpack://webpack-demo-app-b96a9dbce0d4abbf156612ccb23e4be74d6fd313/./src/app/utils/inputs-are-valid.js?");

/***/ }),

/***/ "./src/app/utils/parse-inputs.js":
/*!***************************************!*\
  !*** ./src/app/utils/parse-inputs.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parseInputs\": () => (/* binding */ parseInputs)\n/* harmony export */ });\nconst parseInputs = (...input) => {\n  return input.map((str) => parseInt(str));\n};\n\n\n//# sourceURL=webpack://webpack-demo-app-b96a9dbce0d4abbf156612ccb23e4be74d6fd313/./src/app/utils/parse-inputs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app */ \"./src/app/app.js\");\n/* harmony import */ var _app_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/alert.service */ \"./src/app/alert.service.js\");\n/* harmony import */ var _app_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/component.service */ \"./src/app/component.service.js\");\n\n\n\nconst alertService = new _app_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService();\nconst componentService = new _app_component_service__WEBPACK_IMPORTED_MODULE_2__.ComponentService();\n(0,_app_app__WEBPACK_IMPORTED_MODULE_0__.run)(alertService, componentService);\n\n\n//# sourceURL=webpack://webpack-demo-app-b96a9dbce0d4abbf156612ccb23e4be74d6fd313/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;