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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RXBc");


/***/ }),

/***/ "B/4L":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"fullscreenbg": "VideoBg_fullscreenbg__KWMbf",
	"fullscreenbg__video": "VideoBg_fullscreenbg__video__3Tx64",
	"fullscreen-bg__video": "VideoBg_fullscreen-bg__video__2j1dp"
};


/***/ }),

/***/ "Cel6":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "RXBc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "mdbreact"
var external_mdbreact_ = __webpack_require__("Y52P");

// CONCATENATED MODULE: ./src/components/Carousel.js

var __jsx = external_react_default.a.createElement;


const Carousel = () => {
  return __jsx(external_mdbreact_["MDBContainer"], {
    className: "mt-5"
  }, __jsx(external_mdbreact_["MDBCarousel"], {
    activeItem: 1,
    length: 4,
    showControls: true,
    showIndicators: true,
    className: "z-depth-1"
  }, __jsx(external_mdbreact_["MDBCarouselInner"], null, __jsx(external_mdbreact_["MDBCarouselItem"], {
    itemId: "1"
  }, __jsx(external_mdbreact_["MDBView"], null, __jsx("img", {
    className: "d-block w-100",
    src: "../../images/hero-bg.jpg",
    alt: "First slide"
  })), __jsx(external_mdbreact_["MDBCarouselCaption"], null, __jsx("h1", {
    className: "h1-responsive"
  }), __jsx("h3", null))), __jsx(external_mdbreact_["MDBCarouselItem"], {
    itemId: "2"
  }, __jsx(external_mdbreact_["MDBView"], null, __jsx("img", {
    className: "d-block w-100",
    src: "../../images/boat.png",
    alt: "Second slide"
  })), __jsx(external_mdbreact_["MDBCarouselCaption"], null, __jsx("h1", {
    className: "h1-responsive"
  }), __jsx("h3", null))), __jsx(external_mdbreact_["MDBCarouselItem"], {
    itemId: "3"
  }, __jsx(external_mdbreact_["MDBView"], null, __jsx("img", {
    className: "d-block w-100",
    src: "../../images/img_0.jpg",
    alt: "Third slide"
  })), __jsx(external_mdbreact_["MDBCarouselCaption"], null, __jsx("h3", {
    className: "h3-responsive"
  }), __jsx("h5", null))), __jsx(external_mdbreact_["MDBCarouselItem"], {
    itemId: "4"
  }, __jsx(external_mdbreact_["MDBView"], null, __jsx("img", {
    className: "d-block w-100",
    src: "../../images/hvnSJi8k_4x.jpg",
    alt: "Fourth slide"
  })), __jsx(external_mdbreact_["MDBCarouselCaption"], null, __jsx("h3", {
    className: "h3-responsive"
  }), __jsx("h5", null))))));
};

/* harmony default export */ var components_Carousel = (Carousel);
// EXTERNAL MODULE: ./src/assets/mdb-react-small.png
var mdb_react_small = __webpack_require__("Cel6");

// EXTERNAL MODULE: ./src/components/VideoBg.module.css
var VideoBg_module = __webpack_require__("B/4L");
var VideoBg_module_default = /*#__PURE__*/__webpack_require__.n(VideoBg_module);

// CONCATENATED MODULE: ./src/components/VideoBg.js

var VideoBg_jsx = external_react_default.a.createElement;


const VideoBg = () => {
  return VideoBg_jsx("div", {
    className: VideoBg_module_default.a.fullscreenbg
  }, VideoBg_jsx("video", {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    className: VideoBg_module_default.a.fullscreenbg__video
  }, VideoBg_jsx("source", {
    src: "../../videos/water.mp4",
    type: "video/mp4"
  })));
};

/* harmony default export */ var components_VideoBg = (VideoBg);
// EXTERNAL MODULE: ./src/styles/WelcomePage.module.css
var WelcomePage_module = __webpack_require__("kZDx");
var WelcomePage_module_default = /*#__PURE__*/__webpack_require__.n(WelcomePage_module);

// CONCATENATED MODULE: ./src/pages/index.js

var pages_jsx = external_react_default.a.createElement;





const WelcomePage = () => pages_jsx(external_react_default.a.Fragment, null, pages_jsx(components_VideoBg, null), pages_jsx("div", {
  className: WelcomePage_module_default.a.textbox
}, pages_jsx("h3", {
  className: WelcomePage_module_default.a.textCenter
}, "Orchard Beach ", pages_jsx("br", null), "Community Group")), pages_jsx(components_Carousel, null));

/* harmony default export */ var pages = __webpack_exports__["default"] = (WelcomePage);

/***/ }),

/***/ "Y52P":
/***/ (function(module, exports) {

module.exports = require("mdbreact");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kZDx":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textCenter": "WelcomePage_textCenter__4frdq",
	"footer": "WelcomePage_footer__2nw_e",
	"logo": "WelcomePage_logo__3thZ-",
	"content": "WelcomePage_content__54Tt9"
};


/***/ })

/******/ });