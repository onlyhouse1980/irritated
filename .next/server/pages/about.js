module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3XHS");


/***/ }),

/***/ "3XHS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_mdb_react_small_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Cel6");
/* harmony import */ var _assets_mdb_react_small_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_mdb_react_small_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_VideoBg1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WJeG");
/* harmony import */ var _styles_About_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Soxy");
/* harmony import */ var _styles_About_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_About_module_css__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const About = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_VideoBg1__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), __jsx("div", {
  className: _styles_About_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.content
}, __jsx("h2", {
  className: "text-center"
}, "Orchard Beach ", __jsx("br", null), "Community Group "), __jsx("p", null, "The Orchard Beach water system is an existing Group A system located in the Southwest quarter of the Southeast quarter of Section 22, Township 21 North, Range 2 West, W.M situated in Mason County, Washington. The system is a waterfront system located by Pickering Passage in Puget Sound that serves 39 connections. The system's elevation ranges from 65 feet to 30 feet. The water system is composed of two 6 inch wells with a capacity of 10 gpm and 60 gpm located at 57 feet of elevation. Well water is pumped from SO2 (primary source) and SO1 (backup source) to 8 bladder tanks and out to distribution. SO1 (backup source) comes on only during the peak seasons. The distribution system is comprised of approximately 4,300 feet of 4-inch PVC pipe.")));

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "Cel6":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "RNH2":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"fullscreenbg": "VideoBg1_fullscreenbg__2MslS",
	"fullscreenbg__video": "VideoBg1_fullscreenbg__video__2is16",
	"fullscreen-bg__video": "VideoBg1_fullscreen-bg__video__1M19b"
};


/***/ }),

/***/ "Soxy":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "About_content__1tlWA"
};


/***/ }),

/***/ "WJeG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VideoBg1_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("RNH2");
/* harmony import */ var _VideoBg1_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_VideoBg1_module_css__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const VideoBg1 = () => {
  return __jsx("div", {
    className: _VideoBg1_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.fullscreenbg
  }, __jsx("video", {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    className: _VideoBg1_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.fullscreenbg__video
  }, __jsx("source", {
    src: "../../videos/flowing-water-transcode.mp4",
    type: "video/mp4"
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (VideoBg1);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });