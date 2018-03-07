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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

//setting up connections
const game = __webpack_require__(1);
const Board = __webpack_require__(2);
const socket = io();

const { log } = console;
console.log("hello from the index file");
//listen for an event 


socket.on('hello', socket => {
    log("server said hi", socket);
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var drawGrid = function (w, h, id) {
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext('2d');
    ctx.canvas.width = w;
    ctx.canvas.height = h;

    var data = '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"> \
      <defs> \
          <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse"> \
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="gray" stroke-width="0.5" /> \
          </pattern> \
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse"> \
              <rect width="80" height="80" fill="url(#smallGrid)" /> \
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" stroke-width="1" /> \
          </pattern> \
      </defs> \
      <rect width="100%" height="100%" fill="url(#smallGrid)" /> \
  </svg>';

    var DOMURL = window.URL || window.webkitURL || window;

    var img = new Image();
    var svg = new Blob([data], { type: 'image/svg+xml;charset=utf-8' });
    var url = DOMURL.createObjectURL(svg);

    img.onload = function () {
        ctx.drawImage(img, 0, 0);
        DOMURL.revokeObjectURL(url);
    };
    img.src = url;
};
drawGrid(800, 400, "grid");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var drawGrid = function (w, h, id) {
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext('2d');
    ctx.canvas.width = w;
    ctx.canvas.height = h;

    var data = '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"> \
      <defs> \
          <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse"> \
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="gray" stroke-width="0.5" /> \
          </pattern> \
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse"> \
              <rect width="80" height="80" fill="url(#smallGrid)" /> \
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" stroke-width="1" /> \
          </pattern> \
      </defs> \
      <rect width="100%" height="100%" fill="url(#smallGrid)" /> \
  </svg>';

    var DOMURL = window.URL || window.webkitURL || window;

    var img = new Image();
    var svg = new Blob([data], { type: 'image/svg+xml;charset=utf-8' });
    var url = DOMURL.createObjectURL(svg);

    img.onload = function () {
        ctx.drawImage(img, 0, 0);
        DOMURL.revokeObjectURL(url);
    };
    img.src = url;
};
drawGrid(800, 400, "grid");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map