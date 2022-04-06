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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/less-loader/dist/cjs.js!./src/style.less":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/less-loader/dist/cjs.js!./src/style.less ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n}\\n#left-warp {\\n  width: 350px;\\n  height: 100vh;\\n  outline: 1px solid;\\n  float: left;\\n  position: relative;\\n}\\n#left-warp #cssCode {\\n  position: absolute;\\n  bottom: 0;\\n  width: 100%;\\n  height: 60vh;\\n  overflow-y: auto;\\n}\\n#left-warp #line {\\n  position: absolute;\\n  top: 40%;\\n  width: 100%;\\n  height: 1px;\\n  background-color: black;\\n}\\n#left-warp #buttons {\\n  position: absolute;\\n  left: 50%;\\n  top: 20%;\\n  -webkit-transform: translateX(-50%) translateY(-50%);\\n          transform: translateX(-50%) translateY(-50%);\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n}\\n#left-warp #buttons button {\\n  width: 100px;\\n  height: 25px;\\n  margin-top: 7px;\\n  font-size: 14px;\\n  font-weight: bold;\\n  border: 0;\\n  outline: 0;\\n  border-radius: 25px;\\n  background: linear-gradient(45deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);\\n  background-size: 300%;\\n}\\n#left-warp #buttons button:hover {\\n  -webkit-animation: hoverBtn 2s infinite linear ;\\n          animation: hoverBtn 2s infinite linear ;\\n}\\n@-webkit-keyframes hoverBtn {\\n  100% {\\n    background-position: 300%;\\n  }\\n}\\n@keyframes hoverBtn {\\n  100% {\\n    background-position: 300%;\\n  }\\n}\\n#right-warp {\\n  margin-left: 350px;\\n  height: 100vh;\\n}\\n#right-warp .doraemon {\\n  height: 100%;\\n  position: relative;\\n  margin-left: 250px;\\n}\\n@-webkit-keyframes eyemove {\\n  80% {\\n    margin: 0;\\n  }\\n  85% {\\n    margin: -20px 0 0 0;\\n  }\\n  90% {\\n    margin: 0;\\n  }\\n  93% {\\n    margin: 0 0 0 7px;\\n  }\\n  96% {\\n    margin: 0;\\n  }\\n}\\n@keyframes eyemove {\\n  80% {\\n    margin: 0;\\n  }\\n  85% {\\n    margin: -20px 0 0 0;\\n  }\\n  90% {\\n    margin: 0;\\n  }\\n  93% {\\n    margin: 0 0 0 7px;\\n  }\\n  96% {\\n    margin: 0;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://xdd/./src/style.less?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B2%5D!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://xdd/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://xdd/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.less":
/*!************************!*\
  !*** ./src/style.less ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../node_modules/less-loader/dist/cjs.js!./style.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/less-loader/dist/cjs.js!./src/style.less\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://xdd/./src/style.less?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://xdd/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://xdd/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://xdd/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://xdd/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://xdd/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://xdd/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/css.js":
/*!********************!*\
  !*** ./src/css.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst string = `/*首先画出哆啦A梦的头*/  \n.doraemon .head{   \n    width:320px;   \n    height:300px;   \n    background:#07bbee;   \n    border-radius:150px;   \n    border:#555 2px solid;   \n    box-shadow:-5px 10px 15px rgba(0,0,0,0.45);   \n    position:relative;   \n}   \n  \n.doraemon .face{   \n    position:relative;   \n    z-index:2;   \n}   \n/*开始画脸部*/\n.doraemon .face .white{   \n    width:265px;   \n    height:195px;   \n    background:#fff;   \n    border:#000 2px solid;   \n    border-radius:150px 150px;   \n    position:absolute;   \n    top:75px;\n    left:25px;   \n}   \n/*画出红鼻子*/\n.doraemon .face .nose{   \n    width:30px;   \n    height:30px;   \n    background:#c93300;   \n    border: 2px solid #000;   \n    border-radius:30px;   \n    position:absolute;   \n    top:110px;\n    left:140px;   \n    z-index:3;   \n}   \n.doraemon .face .nose .light{   \n    width:10px;   \n    height:10px; \n    border-radius:5px;   \n    box-shadow:19px 8px 5px #FFF;   \n} \n.doraemon .face .nose_line{ \n    width:3px;   \n    height:100px;   \n    background:#333;   \n    position: absolute;\n    top:143px;\n    left:155px;   \n    z-index:3;\n} \n/*画出嘴巴*/\n.doraemon .face .mouth{   \n    position:absolute;   \n    width:220px;   \n    height:400px;   \n    border-radius:120px;   \n    border-bottom:3px solid #333;   \n    top:-160px;\n    left:45px;   \n}  \n.doraemon .eyes{   \n    position:relative;   \n    z-index:3;   \n}  \n/*画出眼睛*/  \n.doraemon .eyes .eye{   \n    position:absolute;   \n    width:72px;   \n    height:82px;   \n    background:#fff;   \n    border: 2px solid #000;   \n    border-radius:35px 35px;   \n    top:40px;   \n}  \n.doraemon .eyes .eye .black{   \n    width:14px;   \n    height:14px;   \n    background:#000;   \n    border-radius:14px;   \n    position:relative;   \n    top:40px;   \n}  \n.doraemon .eyes .left{   \n    left:82px;   \n}   \n.doraemon .eyes .right{   \n    left:156px;   \n}  \n.doraemon .eyes .eye .bleft{   \n    left:50px;   \n}   \n.doraemon .eyes .eye .bright{   \n    left:7px;   \n} \n/*画出胡须*/\n.doraemon .whiskers{   \n    position:relative;   \n    width:220px;   \n    height:80px;  \n    background-color: #FFF; \n    top:120px;\n    left:45px;   \n    z-index:2;   \n}   \n.doraemon .whiskers .whisker{   \n    background:#333;   \n    width:60px;   \n    height:2px;   \n    position:absolute;   \n    z-index:2;   \n}    \n.doraemon .whiskers .rTop{   \n    top:25px;left:165px;   \n}   \n.doraemon .whiskers .rt{   \n    top:45px;left:167px;   \n}   \n.doraemon .whiskers .rBottom{   \n    top:65px;left:165px;   \n}       \n.doraemon .whiskers .lTop{   \n    top:25px;left:0px;   \n}   \n.doraemon .whiskers .lt{   \n    top:45px;left:-2px;   \n}   \n.doraemon .whiskers .lBottom{   \n    top:65px;left:0px;   \n}       \n.doraemon .whiskers .r160{   \n    transform:rotate(160deg);   \n    -webkit-transform:rotate(160deg);   \n}       \n.doraemon .whiskers .r20{   \n    transform:rotate(20deg);   \n    -webkit-transform:rotate(20deg);   \n}  \n/* 画铃铛 */\n.doraemon .choker{   \n    height:20px;   \n    width:230px;   \n    background:#c40;   \n    border: 2px solid #000000;   \n    border-radius:10px;   \n    position:relative;   \n    z-index:4;   \n    top:-40px;\n    left:45px;   \n}   \n.doraemon .choker .bell{   \n    width:40px;   \n    height:40px;   \n    /* overflow:hidden;    */\n    border: 2px solid #000;   \n    border-radius:50px;   \n    background:#f9f12a;   \n    box-shadow:-5px 5px 10px rgba(0,0,0,0.25);   \n    position:relative;   \n    top:5px;\n    left:90px;   \n}  \n.doraemon .choker .bell_line{   \n    background:#c40;   \n    border-radius:3px 3px 0px 0px;   \n    border:2px solid #333333;   \n    height:2px;width:36px;   \n    position:relative;   \n    top:10px;   \n}   \n\n.doraemon .choker .bell_circle{   \n    background:#000;   \n    border-radius:5px;   \n    height:10px;width:12px;   \n    position:relative;   \n    top:10px;   \n    left:13px;   \n}   \n.doraemon .choker .bell_under{   \n    background:#000;   \n    height:15px;width:3px;   \n    top:10px;   \n    left:18px;   \n    position:relative;   \n}   \n.doraemon .choker .bell_light{   \n    border-radius:10px;   \n    box-shadow:19px 8px 5px #fff;   \n    height:11px;width:11px;   \n    position:relative;   \n    top:-34px;   \n    left:4px;   \n    opacity:0.7;   \n}   \n/*下面画出身体*/\n.doraemon .bodys{   \n    position:relative;   \n    top:-310px;   \n}   \n.doraemon .bodys .body{   \n    width:220px;   \n    height:165px;\n    background:#07beea;   \n    border: 2px solid #333;   \n    position:absolute;   \n    top:265px;   \n    left:50px;   \n}   \n.doraemon .bodys .wraps{   \n    width:170px;   \n    height:170px;\n    background:#fff;   \n    border: 2px solid #000;   \n    border-radius:85px;   \n    position:absolute;   \n    top:230px;   \n    left:72px;   \n}   \n  \n.doraemon .bodys .pocket{   \n    position:relative;   \n    width:130px;   \n    height:130px;\n    border-radius:65px;   \n    background:#fff;   \n    border: 2px solid #000;   \n    top:250px;   \n    left:92px;   \n}   \n.doraemon .bodys .pocket_mask{   \n    position:relative;   \n    width:134px;   \n    height:60px;\n    background:#fff;   \n    border-bottom:2px solid #000;   \n    top:125px;   \n    left:92px;   \n}  \n/*画出胳膊*/\n.doraemon .hand_right{   \n    height:100px;\n    width:100px;   \n    position:absolute;   \n    top:272px;   \n    left:248px;   \n}   \n.doraemon .hand_left{   \n    height:100px;\n    width:100px;   \n    position:absolute;   \n    top:272px;   \n    left:-10px;   \n}   \n.doraemon .arm{   \n    height:50px;\n    width:80px;   \n    background:#07beea;   \n    border: 1px solid #000000;   \n    position:relative;   \n    box-shadow:-10px 7px 10px rgba(0,0,0,0.35);   \n    z-index:-1;   \n}   \n  \n.doraemon .hand_right .arm{   \n    top:17px;   \n    transform:rotate(35deg);   \n}   \n.doraemon .hand_left .arm{   \n    top:17px;   \n    transform:rotate(145deg);   \n}   \n/* 画手 */\n.doraemon .circle{   \n    height:60px;\n    width:60px;   \n    background:#fff;   \n    border: 2px solid #000;   \n    border-radius:30px;   \n    position:absolute;   \n}   \n  \n.doraemon .hand_right .circle{   \n    left:40px;   \n    top:32px;   \n}   \n.doraemon .hand_left .circle{   \n    left:-20px;   \n    top:32px;   \n}  \n.doraemon .arm_rewrite{   \n    width:5px;\n    height:45px;\n    background:#07beea;   \n    position:relative;   \n}   \n/*遮挡身体*/\n.doraemon .hand_right .arm_rewrite{   \n    left:21px;   \n    top:-45px;   \n}       \n.doraemon .hand_left .arm_rewrite{   \n    left:59px;   \n    top:-45px;   \n}\n/*画出脚  */\n.doraemon .foot{   \n    width:280px;       \n    height:40px;   \n    position:relative;   \n    left:20px;   \n    top:-141px;   \n}  \n.doraemon .foot .left{   \n    height:30px;   \n    width:125px;   \n    background:#fff;   \n    border: 2px solid #333;   \n    border-radius:80px 60px 60px 40px;   \n    box-shadow:-6px 0 10px rgba(0,0,0,0.35);   \n    position:relative;   \n    left:14px;   \n    top:67px;   \n}       \n.doraemon .foot .right{   \n    height:30px;   \n    width:125px;   \n    background:#fff;   \n    border: 2px solid #333;   \n    border-radius:80px 60px 60px 40px;   \n    box-shadow:-6px 0 10px rgba(0,0,0,0.20);   \n    position:relative;   \n    left:141px;   \n    top:33px;   \n}   \n.doraemon .foot .foot_rewrite{   \n    width:20px;   \n    height:11px;         \n    background:#fff;   \n    border-top:2px solid #000;   \n    border-right:2px solid #000;   \n    border-left:2px solid #000;   \n    border-top-right-radius:40px;   \n    border-top-left-radius:40px;   \n    position:relative; \n    top:-12px;   \n    left:132px; \n}\n/*最后让小叮当眼睛动起来吧*/\n.doraemon .eyes .eye .black{animation: eyemove 4s linear  infinite;}\n`\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (string);\n\n//# sourceURL=webpack://xdd/./src/css.js?");

/***/ }),

/***/ "./src/demo.js":
/*!*********************!*\
  !*** ./src/demo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.less */ \"./src/style.less\");\n/* harmony import */ var _css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css.js */ \"./src/css.js\");\n\r\n\r\nlet btnPlay=document.getElementById('btnPlay')\r\nlet btnPause=document.getElementById('btnPause')\r\nlet btnSlow=document.getElementById('btnSlow')\r\nlet btnNormal=document.getElementById('btnNormal')\r\nlet btnFast=document.getElementById('btnFast')\r\nlet btnRePlay=document.getElementById('btnRePlay')\r\nlet cssCode=document.getElementById('cssCode')\r\nlet cssStyle=document.getElementById('cssStyle')\r\nlet audio = document.querySelector('audio')\r\n//定时器标识\r\nlet timer\r\n//css字符串切割位\r\nlet n =1\r\n//定时器执行时间间隔。用来控制速度\r\nlet speed =70\r\nconst run= function (){\r\n//如果处于暂停状态就播放\r\naudio.play()\r\n    // 判断是否有定时器了\r\n    if (timer) clearInterval(timer)\r\n     timer = setInterval(()=>\r\n    {\r\n        // 写入页面css代码\r\n        n+=1\r\n        cssCode.innerText =_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].substring(0,n)\r\n        cssStyle.innerHTML =_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].substring(0,n)\r\n        cssCode.scrollTop = cssCode.scrollHeight\r\n    },speed)\r\n    console.log(timer);\r\n}\r\nbtnPlay.onclick = run\r\nbtnPause.onclick=function(){\r\n    audio.pause()\r\n    clearInterval(timer)\r\n}\r\nbtnSlow.onclick=function(){\r\n    //降速\r\n    speed=200\r\n    if(n!=1)\r\n    run()\r\n}\r\nbtnNormal.onclick=function(){\r\n    speed=70\r\n    if(n!=1)\r\n    run()\r\n}\r\nbtnFast.onclick=function(){\r\n    speed=0\r\n    if(n!=1)\r\n    run()\r\n}\r\nbtnRePlay.onclick=function(){\r\n    n=0\r\n    audio.currentTime = 0;\r\n    run()\r\n}\n\n//# sourceURL=webpack://xdd/./src/demo.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/demo.js");
/******/ 	
/******/ })()
;