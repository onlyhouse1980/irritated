module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0A5g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return personHandler; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("iFqS");

function personHandler({
  query: {
    meter_serialNum
  }
}, res) {
  const filtered = _data__WEBPACK_IMPORTED_MODULE_0__[/* people */ "a"].filter(p => p.meter_serialNum === meter_serialNum); // User with meter_serialNum exists

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({
      message: `User with meter_serialNum: ${meter_serialNum} not found.`
    });
  }
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0A5g");


/***/ }),

/***/ "iFqS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return people; });
const people = [{
  meter_serialNum: '13391844',
  last_name: 'Main Well',
  oct02_18: '18117221',
  nov02_18: '18160138',
  dec04_18: '18393750',
  jan01_19: '18429465',
  feb01_19: '18,475,663',
  march03_19: '18,508,123',
  apr01_19: '18,545,000',
  may06_19: '18,616,197',
  jun04_19: '18,695,225',
  jun30_19: '18,778,015',
  aug06_19: '18,887,600',
  sep02_19: '18,975,081',
  oct11_19: '19,050,483',
  dec03_19: '19131736',
  jan03_20: '19177586',
  apr05_20: '19309556',
  jun10_20: '19427930',
  aug10_20: '19665587',
  oct07_20: '19804854',
  dec10_20: '19890590'
}, {
  meter_serialNum: '14310221',
  last_name: 'Auxillary Well',
  oct02_18: '194004',
  nov02_18: '194127',
  dec04_18: '194127',
  jan01_19: '194127',
  feb01_19: '194,127',
  march03_19: '194,160',
  apr01_19: '194,160',
  may06_19: '194,160',
  jun04_19: '194,160',
  jun30_19: '194,160',
  aug06_19: '194,160',
  sep02_19: '194,160',
  oct11_19: '194,160',
  dec03_19: '194160',
  jan03_20: '194160',
  apr05_20: '194238',
  jun10_20: '194238',
  aug10_20: '194238',
  oct07_20: '194238',
  dec10_20: '194238'
}, {
  meter_serialNum: '22667344',
  last_name: 'Erickson',
  oct02_18: '261718',
  nov02_18: '264591',
  dec04_18: '267191',
  jan01_19: '269724',
  feb01_19: '273,361',
  march03_19: '276,336',
  apr01_19: '279,021',
  may06_19: '283,165',
  jun04_19: '286869',
  jun30_19: '289879',
  aug06_19: '294242',
  sep02_19: '298146',
  oct11_19: '302322',
  dec03_19: '307280',
  jan03_20: '310593',
  apr05_20: '319881',
  jun10_20: '328860',
  aug10_20: '339084',
  oct07_20: '346105',
  dec10_20: '325163'
}, {
  meter_serialNum: '22667347',
  last_name: 'Emtman',
  oct02_18: '58248',
  nov02_18: '58377',
  dec04_18: '58770',
  jan01_19: '59911',
  feb01_19: '60,141',
  march03_19: '60,573',
  apr01_19: '61,183',
  may06_19: '61,184',
  jun04_19: '62154',
  jun30_19: '63174',
  aug06_19: '66404',
  sep02_19: '67495',
  oct11_19: '67806',
  dec03_19: '68578',
  jan03_20: '69368',
  apr05_20: '71736',
  jun10_20: '74120',
  aug10_20: '78505',
  oct07_20: '80130',
  dec10_20: '81935'
}, {
  meter_serialNum: '22667342',
  last_name: 'Frett',
  oct02_18: '49755',
  nov02_18: '50053',
  dec04_18: '55213',
  jan01_19: '55314',
  feb01_19: '55,566',
  march03_19: '56,280',
  apr01_19: '56,731',
  may06_19: '57,247',
  jun04_19: '57560',
  jun30_19: '57774',
  aug06_19: '58578',
  sep02_19: '60443',
  oct11_19: '60572',
  dec03_19: '60960',
  jan03_20: '61125',
  apr05_20: '61481',
  jun10_20: '63476',
  aug10_20: '67062',
  oct07_20: '68410',
  dec10_20: '68803'
}, {
  meter_serialNum: '22667346',
  last_name: 'Lu',
  oct02_18: '27356',
  nov02_18: '27374',
  dec04_18: '27473',
  jan01_19: '27489',
  feb01_19: '27,496',
  march03_19: '27,496',
  apr01_19: '27,496',
  may06_19: '27,497',
  jun04_19: '27713',
  jun30_19: '27768',
  aug06_19: '29402',
  sep02_19: '29660',
  oct11_19: '29660',
  dec03_19: '29852',
  jan03_20: '30280',
  apr05_20: '31371',
  jun10_20: '31932',
  aug10_20: '35850',
  oct07_20: '39633',
  dec10_20: '41264'
}, {
  meter_serialNum: '22667345',
  last_name: 'Eide',
  oct02_18: '291214',
  nov02_18: '291841',
  dec04_18: '292887',
  jan01_19: '293696',
  feb01_19: '293,780',
  march03_19: '293,780',
  apr01_19: '293,780',
  may06_19: '293,877',
  jun04_19: '294638',
  jun30_19: '295157',
  aug06_19: '298661',
  sep02_19: '299293',
  oct11_19: '299482',
  dec03_19: '300891',
  jan03_20: '302002',
  apr05_20: '302458',
  jun10_20: '306625',
  aug10_20: '310244',
  oct07_20: '319459',
  dec10_20: '317077'
}, {
  meter_serialNum: '22667376',
  last_name: 'Sheffer',
  oct02_18: '3',
  nov02_18: '3',
  dec04_18: '3',
  jan01_19: '3',
  feb01_19: '3',
  march03_19: '3',
  apr01_19: '3',
  may06_19: '3',
  jun04_19: '3',
  jun30_19: '3',
  aug06_19: '3',
  sep02_19: '3',
  oct11_19: '3',
  dec03_19: '3',
  jan03_20: '3',
  apr05_20: '3',
  jun10_20: '3',
  aug10_20: '3',
  oct07_20: '3',
  dec10_20: '3'
}, {
  meter_serialNum: '72845054',
  last_name: 'Campbell/Aust',
  oct02_18: '48650',
  nov02_18: '49518',
  dec04_18: '49769',
  jan01_19: '49982',
  feb01_19: '50,421',
  march03_19: '50,487',
  apr01_19: '50,675',
  may06_19: '51,008',
  jun04_19: '53173',
  jun30_19: '56086',
  aug06_19: '59577',
  sep02_19: '62413',
  oct11_19: '64675',
  dec03_19: '65677',
  jan03_20: '65759',
  apr05_20: '67518',
  jun10_20: '72922',
  aug10_20: '80576',
  oct07_20: '88054',
  dec10_20: '92286'
}, {
  meter_serialNum: '22667375',
  last_name: 'Mullins',
  oct02_18: 'Missed',
  nov02_18: '95500',
  dec04_18: '96112',
  jan01_19: '96112',
  feb01_19: '97,111',
  march03_19: '97,113',
  apr01_19: '97,303',
  may06_19: '98,132',
  jun04_19: '100994',
  jun30_19: '102712',
  aug06_19: '108634',
  sep02_19: '112090',
  oct11_19: '113110',
  dec03_19: '113316',
  jan03_20: '113783',
  apr05_20: '119225',
  jun10_20: '126225',
  aug10_20: '130944',
  oct07_20: '136262',
  dec10_20: '139693'
}, {
  meter_serialNum: '22667339',
  last_name: 'Hancock',
  oct02_18: '121661',
  nov02_18: '123196',
  dec04_18: '123853',
  jan01_19: '124484',
  feb01_19: '125,004',
  march03_19: '125,852',
  apr01_19: '126,596',
  may06_19: '127,809',
  jun04_19: '129947',
  jun30_19: '131464',
  aug06_19: '132397',
  sep02_19: '133104',
  oct11_19: '134012',
  dec03_19: '134915',
  jan03_20: '135542',
  apr05_20: '137376',
  jun10_20: '138633',
  aug10_20: '139844',
  oct07_20: '141357',
  dec10_20: '141756'
}, {
  meter_serialNum: 'SN199048',
  last_name: 'Roswall',
  oct02_18: '17916',
  nov02_18: '19404',
  dec04_18: '21048',
  jan01_19: '22392',
  feb01_19: '24,243',
  march03_19: '25,646',
  apr01_19: '27,121',
  may06_19: '29,143',
  jun04_19: '30974',
  jun30_19: '32366',
  aug06_19: '33620',
  sep02_19: '34513',
  oct11_19: '35994',
  dec03_19: '37947',
  jan03_20: '39158',
  apr05_20: '42714',
  jun10_20: '45324',
  aug10_20: '48100',
  oct07_20: '50871',
  dec10_20: '51943'
}, {
  meter_serialNum: '10656114',
  last_name: 'Ewart R.',
  oct02_18: '252554',
  nov02_18: '258880',
  dec04_18: '265967',
  jan01_19: '278953',
  feb01_19: '293,785',
  march03_19: '299,183',
  apr01_19: '302,045',
  may06_19: '303,922',
  jun04_19: '305331',
  jun30_19: '308166',
  aug06_19: '312995',
  sep02_19: '316506',
  oct11_19: '324289',
  dec03_19: '331732',
  jan03_20: '333839',
  apr05_20: '337497',
  jun10_20: '341244',
  aug10_20: '358629',
  oct07_20: '368582',
  dec10_20: '372918'
}, {
  meter_serialNum: '22667338',
  last_name: 'Turner',
  oct02_18: '25751',
  nov02_18: '26839',
  dec04_18: '27463',
  jan01_19: '27478',
  feb01_19: '27,496',
  march03_19: '28,216',
  apr01_19: '29,614',
  may06_19: '41,569',
  jun04_19: '57065',
  jun30_19: '88083',
  aug06_19: '95362',
  sep02_19: '103569',
  oct11_19: '104288',
  dec03_19: '104976',
  jan03_20: '105305',
  apr05_20: '106544',
  jun10_20: '113181',
  aug10_20: '123904',
  oct07_20: '153438',
  dec10_20: '137909'
}, {
  meter_serialNum: '77445947',
  last_name: 'Turner',
  oct02_18: '37506',
  nov02_18: '38116',
  dec04_18: '38186',
  jan01_19: '38238',
  feb01_19: '38,248',
  march03_19: '39,081',
  apr01_19: '39,856',
  may06_19: '58,884',
  jun04_19: '69040',
  jun30_19: '79533',
  aug06_19: '95565',
  sep02_19: '117322',
  oct11_19: '119265',
  dec03_19: '119604',
  jan03_20: '119615',
  apr05_20: '119802',
  jun10_20: '121044',
  aug10_20: '202340',
  oct07_20: '251184',
  dec10_20: '216192'
}, {
  meter_serialNum: '22667340',
  last_name: 'Wardle',
  oct02_18: '35191',
  nov02_18: '35304',
  dec04_18: '35347',
  jan01_19: '35495',
  feb01_19: '35,496',
  march03_19: '35,541',
  apr01_19: '35,542',
  may06_19: '35,542',
  jun04_19: '35584',
  jun30_19: '35751',
  aug06_19: '35751',
  sep02_19: '35751',
  oct11_19: '36127',
  dec03_19: '36222',
  jan03_20: '36241',
  apr05_20: '36329',
  jun10_20: '36879',
  aug10_20: '37363',
  oct07_20: '38266',
  dec10_20: '39507'
}, {
  meter_serialNum: '10656201',
  last_name: 'Olson',
  oct02_18: '96',
  nov02_18: '141',
  dec04_18: '141',
  jan01_19: '141',
  feb01_19: '174',
  march03_19: '174',
  apr01_19: '918',
  may06_19: '2,987',
  jun04_19: '3925',
  jun30_19: '4166',
  aug06_19: '5788',
  sep02_19: '8462',
  oct11_19: '12420',
  dec03_19: '18736',
  jan03_20: '27058',
  apr05_20: '50360',
  jun10_20: '57131',
  aug10_20: '64535',
  oct07_20: '70603',
  dec10_20: '76054'
}, {
  meter_serialNum: '22667372',
  last_name: 'Carlton',
  oct02_18: '69060',
  nov02_18: '71975',
  dec04_18: '72498',
  jan01_19: '72499',
  feb01_19: '72,813',
  march03_19: '72,813',
  apr01_19: '73,438',
  may06_19: '73,629',
  jun04_19: '73873',
  jun30_19: '75710',
  aug06_19: '82829',
  sep02_19: '83746',
  oct11_19: '84823',
  dec03_19: '85145',
  jan03_20: '85674',
  apr05_20: '89062',
  jun10_20: '93957',
  aug10_20: '102136',
  oct07_20: '110886',
  dec10_20: '112721'
}, {
  meter_serialNum: '22667341',
  last_name: 'Petrie',
  oct02_18: '67422',
  nov02_18: '67443',
  dec04_18: '67500',
  jan01_19: '67505',
  feb01_19: '67,506',
  march03_19: '67,692',
  apr01_19: '68,190',
  may06_19: '69,531',
  jun04_19: '70565',
  jun30_19: '70996',
  aug06_19: '75950',
  sep02_19: '76898',
  oct11_19: '78996',
  dec03_19: '79174',
  jan03_20: '79174',
  apr05_20: '79577',
  jun10_20: '82683',
  aug10_20: '85630',
  oct07_20: '86888',
  dec10_20: '87443'
}, {
  meter_serialNum: '22667353',
  last_name: 'Hallman',
  oct02_18: '53507',
  nov02_18: '53615',
  dec04_18: '53774',
  jan01_19: '53774',
  feb01_19: '53,864',
  march03_19: '53,878',
  apr01_19: '53,902',
  may06_19: '54,487',
  jun04_19: '63199',
  jun30_19: '63404',
  aug06_19: '63711',
  sep02_19: '63918',
  oct11_19: '64699',
  dec03_19: '64764',
  jan03_20: '64801',
  apr05_20: '65124',
  jun10_20: '65742',
  aug10_20: '66826',
  oct07_20: '67370',
  dec10_20: '67447'
}, {
  meter_serialNum: '22667348',
  last_name: 'Zamzow',
  oct02_18: '43608',
  nov02_18: '45392',
  dec04_18: '45903',
  jan01_19: '46603',
  feb01_19: '49,342',
  march03_19: '51,254',
  apr01_19: '53,537',
  may06_19: '55,467',
  jun04_19: '57459',
  jun30_19: '59786',
  aug06_19: '61603',
  sep02_19: '62784',
  oct11_19: '65237',
  dec03_19: '71957',
  jan03_20: '72871',
  apr05_20: '76416',
  jun10_20: '79876',
  aug10_20: '83870',
  oct07_20: '88908',
  dec10_20: '92698'
}, {
  meter_serialNum: '22667349',
  last_name: 'Benitez',
  oct02_18: '360316',
  nov02_18: '364557',
  dec04_18: '369396',
  jan01_19: '373425',
  feb01_19: '378,191',
  march03_19: '382,278',
  apr01_19: '386,456',
  may06_19: '390,837',
  jun04_19: '394897',
  jun30_19: '397834',
  aug06_19: '404139',
  sep02_19: '406988',
  oct11_19: '410730',
  dec03_19: '415748',
  jan03_20: '418716',
  apr05_20: '427198',
  jun10_20: '438879',
  aug10_20: '440757',
  oct07_20: '446072',
  dec10_20: '454378'
}, {
  meter_serialNum: '22667352',
  last_name: 'Hawkins',
  oct02_18: '719',
  nov02_18: '719',
  dec04_18: '719',
  jan01_19: '719',
  feb01_19: '719',
  march03_19: '719',
  apr01_19: '719',
  may06_19: '719',
  jun04_19: '719',
  jun30_19: '719',
  aug06_19: '719',
  sep02_19: '719',
  oct11_19: '719',
  dec03_19: '719',
  jan03_20: '719',
  apr05_20: '719',
  jun10_20: '719',
  aug10_20: '719',
  oct07_20: '1274',
  dec10_20: '2602'
}, {
  meter_serialNum: '10886593',
  last_name: 'Brockhaus',
  oct02_18: '13017',
  nov02_18: '15028',
  dec04_18: '16645',
  jan01_19: '18154',
  feb01_19: '19,937',
  march03_19: '21,574',
  apr01_19: '23,333',
  may06_19: '25,280',
  jun04_19: '27293',
  jun30_19: '29250',
  aug06_19: '37715',
  sep02_19: '43076',
  oct11_19: '45344',
  dec03_19: '49741',
  jan03_20: '50959',
  apr05_20: '54521',
  jun10_20: '61271',
  aug10_20: '75370',
  oct07_20: '77776',
  dec10_20: '80848'
}, {
  meter_serialNum: '22667337',
  last_name: 'Frandle',
  oct02_18: '39632',
  nov02_18: '40821',
  dec04_18: '41943',
  jan01_19: '42957',
  feb01_19: '43,982',
  march03_19: '45,415',
  apr01_19: '46,642',
  may06_19: '48,154',
  jun04_19: '51374',
  jun30_19: '53806',
  aug06_19: '56610',
  sep02_19: '59250',
  oct11_19: '62478',
  dec03_19: '64131',
  jan03_20: '66144',
  apr05_20: '70751',
  jun10_20: '74932',
  aug10_20: '80526',
  oct07_20: '85837',
  dec10_20: '89066'
}, {
  meter_serialNum: '22329342',
  last_name: 'Czeck/Cappuccino',
  oct02_18: '32',
  nov02_18: '32',
  dec04_18: '32',
  jan01_19: '32',
  feb01_19: '32',
  march03_19: '32',
  apr01_19: '32',
  may06_19: '32',
  jun04_19: '32',
  jun30_19: '32',
  aug06_19: '32',
  sep02_19: '32',
  oct11_19: '32',
  dec03_19: '32',
  jan03_20: '32',
  apr05_20: '32',
  jun10_20: '32',
  aug10_20: '32',
  oct07_20: '32',
  dec10_20: '32'
}, {
  meter_serialNum: '22667374',
  last_name: 'Ewart N',
  oct02_18: '36228',
  nov02_18: '36229',
  dec04_18: '237358',
  jan01_19: '237549',
  feb01_19: '237,661',
  march03_19: '237,873',
  apr01_19: '237,873',
  may06_19: '237,958',
  jun04_19: '238201',
  jun30_19: '238308',
  aug06_19: '238826',
  sep02_19: '239080',
  oct11_19: '241191',
  dec03_19: '248277',
  jan03_20: '252391',
  apr05_20: '266129',
  jun10_20: '276207',
  aug10_20: '287090',
  oct07_20: '295926',
  dec10_20: '307129'
}, {
  meter_serialNum: '77445948',
  last_name: 'Loder/Green',
  oct02_18: '5',
  nov02_18: '5',
  dec04_18: '5',
  jan01_19: '5',
  feb01_19: '5',
  march03_19: '5',
  apr01_19: '5',
  may06_19: '5',
  jun04_19: '5',
  jun30_19: '5',
  aug06_19: '5',
  sep02_19: '5',
  oct11_19: '5',
  dec03_19: '5',
  jan03_20: '5',
  apr05_20: '5',
  jun10_20: '5',
  aug10_20: '5',
  oct07_20: '5',
  dec10_20: '5'
}, {
  meter_serialNum: '22667377',
  last_name: 'Loder/Green',
  oct02_18: '44984',
  nov02_18: '45116',
  dec04_18: '45210',
  jan01_19: '45278',
  feb01_19: '45,350',
  march03_19: '45,555',
  apr01_19: '45,646',
  may06_19: '46,914',
  jun04_19: '47654',
  jun30_19: '47660',
  aug06_19: '48418',
  sep02_19: '49080',
  oct11_19: '49283',
  dec03_19: '50167',
  jan03_20: '50217',
  apr05_20: '50539',
  jun10_20: '52518',
  aug10_20: '56392',
  oct07_20: '58712',
  dec10_20: '59194'
}, {
  meter_serialNum: '22667336',
  last_name: 'Phelps',
  oct02_18: '46838',
  nov02_18: '48784',
  dec04_18: '49465',
  jan01_19: '49465',
  feb01_19: '50,113',
  march03_19: '50,322',
  apr01_19: '50,322',
  may06_19: '50,971',
  jun04_19: '52095',
  jun30_19: '53014',
  aug06_19: '55120',
  sep02_19: '56344',
  oct11_19: '57332',
  dec03_19: '59869',
  jan03_20: '61076',
  apr05_20: '66548',
  jun10_20: '69223',
  aug10_20: '74727',
  oct07_20: '77054',
  dec10_20: '79853'
}, {
  meter_serialNum: '22667350',
  last_name: 'Ducolon',
  oct02_18: '85343',
  nov02_18: '85349',
  dec04_18: '85349',
  jan01_19: '85354',
  feb01_19: '85,354',
  march03_19: '85,358',
  apr01_19: '85,358',
  may06_19: '85,358',
  jun04_19: '85358',
  jun30_19: '85358',
  aug06_19: '85358',
  sep02_19: '85392',
  oct11_19: '85392',
  dec03_19: '85392',
  jan03_20: '85392',
  apr05_20: '85392',
  jun10_20: '85661',
  aug10_20: '86320',
  oct07_20: '86420',
  dec10_20: '86420'
}, {
  meter_serialNum: '22667351',
  last_name: 'Poppell',
  oct02_18: '30280',
  nov02_18: '30293',
  dec04_18: '30293',
  jan01_19: '30293',
  feb01_19: '30,293',
  march03_19: '30,293',
  apr01_19: '30,293',
  may06_19: '30,293',
  jun04_19: '30311',
  jun30_19: '30311',
  aug06_19: '30334',
  sep02_19: '30334',
  oct11_19: '30334',
  dec03_19: '30334',
  jan03_20: '30334',
  apr05_20: '30360',
  jun10_20: '30369',
  aug10_20: '30397',
  oct07_20: '30406',
  dec10_20: '30406'
}, {
  meter_serialNum: '10656199',
  last_name: 'Campbell/Aust',
  oct02_18: '53',
  nov02_18: '53',
  dec04_18: '53',
  jan01_19: '53',
  feb01_19: '53',
  march03_19: '53',
  apr01_19: '53',
  may06_19: '53',
  jun04_19: '53',
  jun30_19: '200',
  aug06_19: '260',
  sep02_19: '300',
  oct11_19: '300',
  dec03_19: '313',
  jan03_20: '313',
  apr05_20: '313',
  jun10_20: '1568',
  aug10_20: '2464',
  oct07_20: '2777',
  dec10_20: '2781'
}, {
  meter_serialNum: 'SN187535',
  last_name: 'Sipe',
  oct02_18: '32740',
  nov02_18: '37222',
  dec04_18: '41482',
  jan01_19: '44276',
  feb01_19: '49,160',
  march03_19: '53,166',
  apr01_19: '58,488',
  may06_19: '63,499',
  jun04_19: '70505',
  jun30_19: '75500',
  aug06_19: '80280',
  sep02_19: '83364',
  oct11_19: '88342',
  dec03_19: '97032',
  jan03_20: '101432',
  apr05_20: '113639',
  jun10_20: '120322',
  aug10_20: '125485',
  oct07_20: '132118',
  dec10_20: '139652'
}, {
  meter_serialNum: 'SN187593',
  last_name: 'Casey',
  oct02_18: '44848',
  nov02_18: '51210',
  dec04_18: '56889',
  jan01_19: '61453',
  feb01_19: '65,773',
  march03_19: '69,729',
  apr01_19: '74,138',
  may06_19: '79,281',
  jun04_19: '83707',
  jun30_19: '87591',
  aug06_19: '92198',
  sep02_19: '95701',
  oct11_19: '100468',
  dec03_19: '107670',
  jan03_20: '111703',
  apr05_20: '124009',
  jun10_20: '131404',
  aug10_20: '137868',
  oct07_20: '143160',
  dec10_20: '149280'
}, {
  meter_serialNum: '22667343',
  last_name: 'McKenney',
  oct02_18: '160305',
  nov02_18: '161639',
  dec04_18: '162834',
  jan01_19: '163841',
  feb01_19: '167,552',
  march03_19: '168,808',
  apr01_19: '171,565',
  may06_19: '172,953',
  jun04_19: '174000',
  jun30_19: '175140',
  aug06_19: '182303',
  sep02_19: '192770',
  oct11_19: '215430',
  dec03_19: '218357',
  jan03_20: '219381',
  apr05_20: '222811',
  jun10_20: '225407',
  aug10_20: '229387',
  oct07_20: '232892',
  dec10_20: '235447'
}, {
  meter_serialNum: '85195326',
  last_name: 'Waters',
  oct02_18: '',
  nov02_18: '',
  dec04_18: '',
  jan01_19: '',
  feb01_19: '',
  march03_19: '',
  apr01_19: '',
  may06_19: '',
  jun04_19: '',
  jun30_19: '',
  aug06_19: '',
  sep02_19: '',
  oct11_19: '',
  dec03_19: '',
  jan03_20: '',
  apr05_20: '',
  jun10_20: '',
  aug10_20: '0',
  oct07_20: '0',
  dec10_20: '0'
}, {
  meter_serialNum: '22169410',
  last_name: 'Zamzow',
  oct02_18: '3',
  nov02_18: '3',
  dec04_18: '3',
  jan01_19: '3',
  feb01_19: '3',
  march03_19: '3',
  apr01_19: '3',
  may06_19: '3',
  jun04_19: '3',
  jun30_19: '3',
  aug06_19: '3',
  sep02_19: '3',
  oct11_19: '3',
  dec03_19: '3',
  jan03_20: '3',
  apr05_20: '3',
  jun10_20: '3',
  aug10_20: '3',
  oct07_20: '3',
  dec10_20: '3'
}];

/***/ })

/******/ });