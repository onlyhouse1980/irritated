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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hk7L");


/***/ }),

/***/ "Cel6":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "IMkq":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "Articles_footer__3QOcQ",
	"content": "Articles_content__1RA52",
	"bgcontainer": "Articles_bgcontainer__2AWjU"
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

/***/ }),

/***/ "hk7L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_mdb_react_small_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Cel6");
/* harmony import */ var _assets_mdb_react_small_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_mdb_react_small_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("IMkq");
/* harmony import */ var _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_VideoBg1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("WJeG");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Articles = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_VideoBg1__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), __jsx("container", {
  className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.bgcontainer
}, __jsx("div", {
  className: _styles_Articles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content
}, __jsx("h2", {
  className: "text-center"
}, "Articles of Incorporation"), __jsx("br", null), __jsx("br", null), __jsx("p", null, __jsx("b", null, "FIRST:"), " The name of the corporation is ORCHARD BEACH COMMUNITY GROUP."), "\u200D", __jsx("p", null, __jsx("b", null, "SECOND:"), " The period of its duration is perpetual."), "\u200D", __jsx("p", null, __jsx("b", null, "THIRD:"), " The purposes for which this corporation is formed are as follows: A) To maintain a community water system and undertake other community projects and activities as decided by the Board of Directors and to promote the general interest and welfare of the Orchard Beach Community."), "\u200D", __jsx("p", null, __jsx("b", null, "FOURTH:"), " The corporation shall have all powers granted by law necessary and proper to carry out its above-stated purposes consistent with its qualifications under 501 (c) (3)."), "\u200D", __jsx("p", null, __jsx("b", null, "FIFTH:"), " All corporate activities should be governed by the Board of Directors and as provided in the corporate by-laws. Three directors shall constitute a quorum and all decisions shall require the majority vote of the quorum to be binding."), "\u200D", __jsx("p", null, __jsx("b", null, "SIXTH:"), " In the event of dissolution, the assets of the corporation shall be distributed only to a recipient or recipients, to be selected by the Board of Directors, that would qualify for exemption as an organization described in Section 501(c) (3) of the Internal Revenue Code of 1954, as amended, or a successor statute."), "\u200D", __jsx("p", null, __jsx("b", null, "SEVENTH:"), " The address of the initial registered office of the corporation is...\u201D Filed with the Secretary of State \u2013 August 27, 1974"))));

/* harmony default export */ __webpack_exports__["default"] = (Articles);

/***/ })

/******/ });