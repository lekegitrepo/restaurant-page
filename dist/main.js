/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./images/image-4.png":
/*!****************************!*\
  !*** ./images/image-4.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4d7d0f3954291e992ffad29143662e02.png\");\n\n//# sourceURL=webpack:///./images/image-4.png?");

/***/ }),

/***/ "./images/image-6.png":
/*!****************************!*\
  !*** ./images/image-6.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e677c63027d2ba6b3bc5db5f11b2e814.png\");\n\n//# sourceURL=webpack:///./images/image-6.png?");

/***/ }),

/***/ "./images/image-7.png":
/*!****************************!*\
  !*** ./images/image-7.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"40d5759e975e978b4f78be2867d208f5.png\");\n\n//# sourceURL=webpack:///./images/image-7.png?");

/***/ }),

/***/ "./images/image-8.png":
/*!****************************!*\
  !*** ./images/image-8.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"0008ba7b1fb73ec03d587f8ad68a21ae.png\");\n\n//# sourceURL=webpack:///./images/image-8.png?");

/***/ }),

/***/ "./images/image-9.png":
/*!****************************!*\
  !*** ./images/image-9.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b84216c03ed461d94b0b28c753fee93d.png\");\n\n//# sourceURL=webpack:///./images/image-9.png?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/postcss-loader/src/index.js):\\nError: Cannot find module './autoprefixer'\\nRequire stack:\\n- /home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/postcss.config.js\\n- /home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/node_modules/cosmiconfig/node_modules/import-fresh/index.js\\n- /home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/node_modules/cosmiconfig/dist/loaders.js\\n- /home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/node_modules/cosmiconfig/dist/createExplorer.js\\n- /home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/node_modules/cosmiconfig/dist/index.js\\n- /home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/node_modules/postcss-load-config/src/index.js\\n- /home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/node_modules/postcss-loader/src/index.js\\n- /home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/node_modules/loader-runner/lib/loadLoader.js\\n- /home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/node_modules/loader-runner/lib/LoaderRunner.js\\n- /home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/node_modules/webpack/lib/NormalModule.js\\n- /home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/node_modules/webpack/lib/NormalModuleFactory.js\\n- /home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/node_modules/webpack/lib/Compiler.js\\n- /home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/node_modules/webpack/lib/webpack.js\\n- /home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/node_modules/webpack-cli/bin/utils/validate-options.js\\n- /home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/node_modules/webpack-cli/bin/utils/convert-argv.js\\n- /home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/node_modules/webpack-cli/bin/cli.js\\n- /home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/node_modules/webpack/bin/webpack.js\\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:793:17)\\n    at Function.Module._load (internal/modules/cjs/loader.js:686:27)\\n    at Module.require (internal/modules/cjs/loader.js:848:19)\\n    at require (/home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/node_modules/webpack-cli/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\\n    at Object.<anonymous> (/home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/postcss.config.js:4:5)\\n    at Module._compile (/home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/node_modules/webpack-cli/node_modules/v8-compile-cache/v8-compile-cache.js:192:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:991:10)\\n    at Module.load (internal/modules/cjs/loader.js:811:32)\\n    at Function.Module._load (internal/modules/cjs/loader.js:723:14)\\n    at Module.require (internal/modules/cjs/loader.js:848:19)\\n    at require (/home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/node_modules/webpack-cli/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\\n    at module.exports (/home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/node_modules/cosmiconfig/node_modules/import-fresh/index.js:28:9)\\n    at loadJs (/home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/node_modules/cosmiconfig/dist/loaders.js:9:18)\\n    at Explorer.loadFileContent (/home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/node_modules/cosmiconfig/dist/createExplorer.js:230:12)\\n    at /home/leke/Documents/Web Development/microverse/Full-time Program Project/JavaScript/restaurant-page/node_modules/cosmiconfig/dist/createExplorer.js:252:21\");\n\n//# sourceURL=webpack:///./src/scss/app.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/app */ \"./src/modules/app.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\nvar mainContent = document.getElementById('content');\nmainContent.appendChild(_modules_app__WEBPACK_IMPORTED_MODULE_1__[\"content\"]);\nvar navMenu = document.getElementById('nav_menu');\nvar container = document.createElement('div');\ncontainer.className = 'container';\nvar row = document.createElement('div');\nrow.className = 'row';\nvar descrip = document.createElement('div');\ndescrip.className = 'col-4';\nrow.appendChild(descrip);\nvar contenImg = document.createElement('img');\ncontenImg.className = 'col-8';\nrow.appendChild(contenImg);\ncontainer.appendChild(row);\n_modules_app__WEBPACK_IMPORTED_MODULE_1__[\"content\"].appendChild(container);\n\nfunction linkTags(currElem) {\n  var a = document.querySelectorAll('.navbar a');\n\n  _toConsumableArray(a).map(function (el) {\n    if (el.hasAttribute('style')) {\n      el.setAttribute('style', '');\n    }\n\n    return '';\n  });\n\n  currElem.setAttribute('style', \"border-bottom: 2px solid #c73232;\\n                        background-color: #343a40 !important;\\n                        border-radius: 20% 0px 0px;\");\n}\n\nnavMenu.addEventListener('click', function (e) {\n  var elem = e.target;\n  descrip.innerHTML = elem.getAttribute('data_description');\n  contenImg.src = elem.getAttribute('data_image');\n  linkTags(elem);\n});\nvar brand = document.getElementById('brand');\n\nfunction load() {\n  descrip.innerHTML = brand.getAttribute('data_description');\n  contenImg.src = brand.getAttribute('data_image');\n  linkTags(brand);\n}\n\nbrand.onload = load();\nbrand.addEventListener('click', load);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/*! exports provided: content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"content\", function() { return content; });\n/* harmony import */ var _components_homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/homepage */ \"./src/modules/components/homepage.js\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu */ \"./src/modules/components/menu.js\");\n/* harmony import */ var _components_special_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/special_menu */ \"./src/modules/components/special_menu.js\");\n/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact */ \"./src/modules/components/contact.js\");\n/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about */ \"./src/modules/components/about.js\");\n\n\n\n\n\nvar content = document.createElement('div');\nvar navbar = document.createElement('div');\nnavbar.className = 'navbar navbar-expand-lg bg-dark fixed-top';\n\nfunction setAttributes(el, attrs) {\n  Object.keys(attrs).forEach(function (key) {\n    return el.setAttribute(key, attrs[key]);\n  });\n}\n\nvar brand = document.createElement('a');\nbrand.className = 'navbar-brand';\nbrand.textContent = _components_homepage__WEBPACK_IMPORTED_MODULE_0__[\"HomePage\"].getName();\nsetAttributes(brand, {\n  id: 'brand',\n  data_image: _components_homepage__WEBPACK_IMPORTED_MODULE_0__[\"HomePage\"].getImage(),\n  data_description: _components_homepage__WEBPACK_IMPORTED_MODULE_0__[\"HomePage\"].getDescription()\n});\nnavbar.appendChild(brand);\nvar navMenu = document.createElement('ul');\nnavMenu.className = 'navbar-nav ml-auto';\nnavMenu.setAttribute('id', 'nav_menu');\nvar liMenu = document.createElement('li');\nliMenu.className = 'nav-item';\nvar liMenuLink = document.createElement('a');\nsetAttributes(liMenuLink, {\n  data_image: _components_menu__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"].getImage(),\n  data_description: _components_menu__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"].getDescription()\n});\nliMenuLink.className = 'nav-link';\nliMenuLink.textContent = _components_menu__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"].getName();\nliMenu.appendChild(liMenuLink);\nnavMenu.appendChild(liMenu);\nvar liSpecial = document.createElement('li');\nliSpecial.className = 'nav-item';\nvar liSpecialLink = document.createElement('a');\nliSpecialLink.className = 'nav-link';\nliSpecialLink.textContent = _components_special_menu__WEBPACK_IMPORTED_MODULE_2__[\"SpecialMenu\"].getName();\nliSpecial.appendChild(liSpecialLink);\nsetAttributes(liSpecialLink, {\n  data_image: _components_special_menu__WEBPACK_IMPORTED_MODULE_2__[\"SpecialMenu\"].getImage(),\n  data_description: _components_special_menu__WEBPACK_IMPORTED_MODULE_2__[\"SpecialMenu\"].getDescription()\n});\nnavMenu.appendChild(liSpecial);\nvar liContact = document.createElement('li');\nliContact.className = 'nav-item';\nvar liContactLink = document.createElement('a');\nliContactLink.className = 'nav-link';\nliContactLink.textContent = _components_contact__WEBPACK_IMPORTED_MODULE_3__[\"Contact\"].getName();\nliContact.appendChild(liContactLink);\nsetAttributes(liContactLink, {\n  data_image: _components_contact__WEBPACK_IMPORTED_MODULE_3__[\"Contact\"].getImage(),\n  data_description: _components_contact__WEBPACK_IMPORTED_MODULE_3__[\"Contact\"].getDescription()\n});\nnavMenu.appendChild(liContact);\nvar liAbout = document.createElement('li');\nliAbout.className = 'nav-item';\nvar liAboutLink = document.createElement('a');\nliAboutLink.className = 'nav-link';\nliAboutLink.textContent = _components_about__WEBPACK_IMPORTED_MODULE_4__[\"About\"].getName();\nliAbout.appendChild(liAboutLink);\nsetAttributes(liAboutLink, {\n  data_image: _components_about__WEBPACK_IMPORTED_MODULE_4__[\"About\"].getImage(),\n  data_description: _components_about__WEBPACK_IMPORTED_MODULE_4__[\"About\"].getDescription()\n});\nnavMenu.appendChild(liAbout);\nnavbar.appendChild(navMenu);\ncontent.appendChild(navbar);\n\n\n//# sourceURL=webpack:///./src/modules/app.js?");

/***/ }),

/***/ "./src/modules/components/about.js":
/*!*****************************************!*\
  !*** ./src/modules/components/about.js ***!
  \*****************************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"About\", function() { return About; });\n/* harmony import */ var _images_image_8_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../images/image-8.png */ \"./images/image-8.png\");\n\n\nvar About = function () {\n  var getName = function getName() {\n    return 'About';\n  };\n\n  var getDescription = function getDescription() {\n    return \"<h4>Noodle's Palace</h4>\\n    <p>We have been feeding the appetite of the world for over a century now</p>\";\n  };\n\n  var getImage = function getImage() {\n    return _images_image_8_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toString();\n  };\n\n  return {\n    getName: getName,\n    getDescription: getDescription,\n    getImage: getImage\n  };\n}();\n\n\n\n//# sourceURL=webpack:///./src/modules/components/about.js?");

/***/ }),

/***/ "./src/modules/components/contact.js":
/*!*******************************************!*\
  !*** ./src/modules/components/contact.js ***!
  \*******************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Contact\", function() { return Contact; });\n/* harmony import */ var _images_image_7_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../images/image-7.png */ \"./images/image-7.png\");\n\n\nvar Contact = function () {\n  var getName = function getName() {\n    return 'Contact';\n  };\n\n  var getDescription = function getDescription() {\n    return \"<div class=\\\"form_main\\\">\\n                <h4 class=\\\"heading\\\"><strong>Quick </strong> Contact <span></span></h4>\\n                <div class=\\\"form\\\">\\n                <form action=\\\"contact_send_mail.php\\\" method=\\\"post\\\" id=\\\"contactFrm\\\" name=\\\"contactFrm\\\">\\n                    <input type=\\\"text\\\" required=\\\"\\\" placeholder=\\\"Please input your Name\\\" value=\\\"\\\" name=\\\"name\\\" class=\\\"txt\\\">\\n                    <input type=\\\"text\\\" required=\\\"\\\" placeholder=\\\"Please input your mobile No\\\" value=\\\"\\\" name=\\\"mob\\\" class=\\\"txt\\\">\\n                    <input type=\\\"text\\\" required=\\\"\\\" placeholder=\\\"Please input your Email\\\" value=\\\"\\\" name=\\\"email\\\" class=\\\"txt\\\">\\n                    \\n                   <textarea placeholder=\\\"Your Message\\\" name=\\\"mess\\\" type=\\\"text\\\" class=\\\"txt_3\\\"></textarea>\\n                     <input type=\\\"submit\\\" value=\\\"submit\\\" name=\\\"submit\\\" class=\\\"txt2\\\">\\n                </form>\\n            </div>\\n            </div>\";\n  };\n\n  var getImage = function getImage() {\n    return _images_image_7_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toString();\n  };\n\n  return {\n    getName: getName,\n    getDescription: getDescription,\n    getImage: getImage\n  };\n}();\n\n\n\n//# sourceURL=webpack:///./src/modules/components/contact.js?");

/***/ }),

/***/ "./src/modules/components/homepage.js":
/*!********************************************!*\
  !*** ./src/modules/components/homepage.js ***!
  \********************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomePage\", function() { return HomePage; });\n/* harmony import */ var _images_image_6_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../images/image-6.png */ \"./images/image-6.png\");\n\n\nvar HomePage = function () {\n  var getName = function getName() {\n    return \"Noodle's Palace\";\n  };\n\n  var getDescription = function getDescription() {\n    return \"<h4 class='title'>This is Noodle Palace</h4>\\n    <p class='description'>This is home of noodles where we serve you best enriching plate of noodles.</p>\\n    <p class='quote text-center'>\\u201CListen to the people who love you. Believe that they are worth living for even when you don't believe it. Seek out the memories depression takes away and project them into the future. Be brave; be strong; take your pills. Exercise because it's good for you even if every step weighs a thousand pounds. Eat when food itself disgusts you. Reason with yourself when you have lost your reason.\\u201D\\n<br><span><b>\\u2015 Andrew Solomon</b></span></p>\";\n  };\n\n  var getImage = function getImage() {\n    return _images_image_6_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toString();\n  };\n\n  return {\n    getName: getName,\n    getDescription: getDescription,\n    getImage: getImage\n  };\n}();\n\n\n\n//# sourceURL=webpack:///./src/modules/components/homepage.js?");

/***/ }),

/***/ "./src/modules/components/menu.js":
/*!****************************************!*\
  !*** ./src/modules/components/menu.js ***!
  \****************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return Menu; });\n/* harmony import */ var _images_image_9_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../images/image-9.png */ \"./images/image-9.png\");\n\n\nvar Menu = function () {\n  var getName = function getName() {\n    return 'Menu';\n  };\n\n  var getDescription = function getDescription() {\n    return '<h4>Lists of available foods</h4>';\n  };\n\n  var getImage = function getImage() {\n    return _images_image_9_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toString();\n  };\n\n  return {\n    getName: getName,\n    getDescription: getDescription,\n    getImage: getImage\n  };\n}();\n\n\n\n//# sourceURL=webpack:///./src/modules/components/menu.js?");

/***/ }),

/***/ "./src/modules/components/special_menu.js":
/*!************************************************!*\
  !*** ./src/modules/components/special_menu.js ***!
  \************************************************/
/*! exports provided: SpecialMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpecialMenu\", function() { return SpecialMenu; });\n/* harmony import */ var _images_image_4_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../images/image-4.png */ \"./images/image-4.png\");\n\n\nvar SpecialMenu = function () {\n  var getName = function getName() {\n    return 'Special menu';\n  };\n\n  var getDescription = function getDescription() {\n    return '<h4>This is one of our popular and best dishes</h4>';\n  };\n\n  var getImage = function getImage() {\n    return _images_image_4_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toString();\n  };\n\n  return {\n    getName: getName,\n    getDescription: getDescription,\n    getImage: getImage\n  };\n}();\n\n\n\n//# sourceURL=webpack:///./src/modules/components/special_menu.js?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/scss/app.scss?");

/***/ })

/******/ });