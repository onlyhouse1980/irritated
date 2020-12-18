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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Cuy+");


/***/ }),

/***/ "Cuy+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_VideoBg1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WJeG");
/* harmony import */ var _styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Pw4T");
/* harmony import */ var _styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Contact = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_VideoBg1__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), __jsx("div", {
  className: _styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content
}, __jsx("h2", {
  className: "textCenter"
}, "Orchard Beach Established 1954"), __jsx("img", {
  src: "images/fullsmall.png",
  loading: "lazy",
  height: "",
  sizes: "90vw",
  srcSet: "images/fullsmall-p-500.png 500w, images/fullsmall-p-800.png 800w, images/fullsmall-p-1080.png 1080w, images/fullsmall-p-1600.png 1600w, images/fullsmall.png 1920w",
  alt: ""
}), __jsx("div", {
  className: "textCenter"
}, __jsx("h3", null, "OBCG"), __jsx("p", null, "Orchard Beach", __jsx("br", null), " Grapeview, WA 98546", __jsx("br", null), __jsx("br", null), __jsx("strong", null, "Email: "), __jsx("a", {
  href: "mailto:orchardwater@yahoo.com"
}, "orchardwater@yahoo.com")))));

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "Pw4T":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "Contact_content__mf-RQ"
};


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