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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("HtfR");


/***/ }),

/***/ "ASnr":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"fullscreenbg": "VideoBg2_fullscreenbg__2CYaz",
	"fullscreenbg__video": "VideoBg2_fullscreenbg__video__3gUse",
	"fullscreen-bg__video": "VideoBg2_fullscreen-bg__video__Pm4Fn"
};


/***/ }),

/***/ "Cel6":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "HtfR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/assets/mdb-react-small.png
var mdb_react_small = __webpack_require__("Cel6");

// EXTERNAL MODULE: ./src/components/VideoBg2.module.css
var VideoBg2_module = __webpack_require__("ASnr");
var VideoBg2_module_default = /*#__PURE__*/__webpack_require__.n(VideoBg2_module);

// CONCATENATED MODULE: ./src/components/VideoBg2.js

var __jsx = external_react_default.a.createElement;


const VideoBg2 = () => {
  return __jsx("div", {
    className: VideoBg2_module_default.a.fullscreenbg
  }, __jsx("video", {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    className: VideoBg2_module_default.a.fullscreenbg__video
  }, __jsx("source", {
    src: "../../videos/waterdroplet.mp4",
    type: "video/mp4"
  })));
};

/* harmony default export */ var components_VideoBg2 = (VideoBg2);
// EXTERNAL MODULE: ./src/styles/executive.module.css
var executive_module = __webpack_require__("hyuW");
var executive_module_default = /*#__PURE__*/__webpack_require__.n(executive_module);

// CONCATENATED MODULE: ./src/pages/executive.js

var executive_jsx = external_react_default.a.createElement;




const Executive = () => executive_jsx(external_react_default.a.Fragment, null, executive_jsx(components_VideoBg2, null), executive_jsx("div", {
  className: executive_module_default.a.textbox
}, executive_jsx("h2", {
  className: "text-center"
}, executive_jsx("b", null, "OBCG"), executive_jsx("br", null), executive_jsx("b", null, "Executive Board")), executive_jsx("p", null)), executive_jsx("div", {
  className: executive_module_default.a.divBlock
}, executive_jsx("div", {
  className: executive_module_default.a.content
}, executive_jsx("img", {
  src: "images/team-1.jpg",
  loading: "lazy",
  width: "300",
  alt: "Member Photo",
  className: executive_module_default.a.Image5
}), executive_jsx("div", {
  className: executive_module_default.a.content
}, executive_jsx("p", null, "Jim Farrell", executive_jsx("br", null), "President"))), executive_jsx("div", {
  className: executive_module_default.a.content
}, executive_jsx("img", {
  src: "images/team-2.jpg",
  loading: "lazy",
  width: "300",
  alt: "Member Photo",
  className: executive_module_default.a.Image5
}), executive_jsx("div", {
  className: executive_module_default.a.content
}, executive_jsx("p", null, "Erika Aust", executive_jsx("br", null), "Vice President"))), executive_jsx("div", {
  className: executive_module_default.a.content
}, executive_jsx("img", {
  src: "images/team-3.jpg",
  loading: "lazy",
  width: "300",
  alt: "Member Photo",
  className: executive_module_default.a.Image5
}), executive_jsx("div", {
  className: executive_module_default.a.content
}, executive_jsx("p", null, "James Loder", executive_jsx("br", null), "Secretary/Treasurer")))));

/* harmony default export */ var executive = __webpack_exports__["default"] = (Executive);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hyuW":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"divBlock": "executive_divBlock__1DWqO",
	"body": "executive_body__2zyd9",
	"Image5": "executive_Image5__1zJk2",
	"textbox1": "executive_textbox1__2ZXI8",
	"content": "executive_content__EIwIa"
};


/***/ })

/******/ });