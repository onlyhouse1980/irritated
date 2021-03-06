module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aghp");


/***/ }),

/***/ "aYjl":
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ }),

/***/ "aghp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Person; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("aYjl");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _person_meter_serialNum_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("eOUW");
/* harmony import */ var _person_meter_serialNum_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_person_meter_serialNum_module_css__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const fetcher = async url => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }

  return data;
};

function Person() {
  const {
    query
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_2___default()(() => query.meter_serialNum && `/api/people/${query.meter_serialNum}`, fetcher);
  if (error) return __jsx("div", null, error.message);
  if (!data) return __jsx("div", null, "Loading...");
  return __jsx("table", {
    className: _person_meter_serialNum_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.table
  }, __jsx("thead", null, __jsx("tr", null, __jsx("th", {
    className: _person_meter_serialNum_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.th
  }, "meter_serialNum"), __jsx("th", {
    className: _person_meter_serialNum_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.th
  }, "Your Reading"), __jsx("th", {
    className: _person_meter_serialNum_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.th
  }, "(SUBTRACT) -"), __jsx("th", {
    className: _person_meter_serialNum_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.th
  }, "oct07_20"), __jsx("th", {
    className: _person_meter_serialNum_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.th
  }, "="), __jsx("th", {
    className: _person_meter_serialNum_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.th
  }, "Current Usage"))), __jsx("tbody", null, __jsx("tr", {
    className: _person_meter_serialNum_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.trbg
  }, __jsx("td", {
    className: _person_meter_serialNum_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.td
  }, data.meter_serialNum), __jsx("td", {
    className: _person_meter_serialNum_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.td
  }, __jsx("input", {
    type: "number",
    label: "your reading",
    name: "uInput"
  })), __jsx("td", {
    id: "tdmin",
    className: _person_meter_serialNum_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.td
  }, "-"), __jsx("td", {
    className: _person_meter_serialNum_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.td
  }, data.oct07_20), __jsx("td", {
    className: _person_meter_serialNum_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.td
  }, "="), __jsx("td", {
    className: _person_meter_serialNum_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.td
  }, "Current Usage"))));
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eOUW":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"table": "_meter_serialNum__table__efy6T",
	"trbg": "_meter_serialNum__trbg__2qIi-",
	"th": "_meter_serialNum__th__3faPT",
	"td": "_meter_serialNum__td__1BBka",
	"tdmin": "_meter_serialNum__tdmin__ZDyAp"
};


/***/ })

/******/ });