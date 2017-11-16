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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_PageLayout_PageLayout__ = __webpack_require__("./src/components/PageLayout/PageLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_HomePage_HomePage__ = __webpack_require__("./src/pages/HomePage/HomePage.js");



var layout = new __WEBPACK_IMPORTED_MODULE_0__components_PageLayout_PageLayout__["a" /* default */]({
  Page: __WEBPACK_IMPORTED_MODULE_1__pages_HomePage_HomePage__["a" /* default */],
  container: document.getElementById('root')
});
layout.renderToDOM();

/***/ }),

/***/ "./src/components/Navbar/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navbar_scss__ = __webpack_require__("./src/components/Navbar/Navbar.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navbar_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Navbar_scss__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Navbar = function () {
  function Navbar() {
    var _this = this;

    _classCallCheck(this, Navbar);

    this.incrementOnClick = function () /* event */{
      _this.state = _extends({}, _this.state, {
        count: _this.state.count + 1
      });
      _this.renderToDOM();
    };

    this.container = null;
    this.state = {
      count: 0
    };
  }

  _createClass(Navbar, [{
    key: 'setContainer',
    value: function setContainer(container) {
      this.container = container;
    }
  }, {
    key: 'render',
    value: function render() {
      var count = this.state.count;


      return '\n      <div class="' + __WEBPACK_IMPORTED_MODULE_0__Navbar_scss___default.a.navbar + '" >\n        Navbar ' + count + '\n      </div>\n    ';
    }
  }, {
    key: 'renderToDOM',
    value: function renderToDOM() {
      this.container.innerHTML = this.render();
    }
  }, {
    key: 'setupEvents',
    value: function setupEvents() {
      this.container.addEventListener('click', this.incrementOnClick);
    }
  }]);

  return Navbar;
}();

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

// hot reload css explicitely
if (false) {
  module.hot.accept('./navbar.scss');
}

/***/ }),

/***/ "./src/components/Navbar/Navbar.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"navbar":"Navbar__navbar"};

/***/ }),

/***/ "./src/components/PageLayout/PageLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PageLayout_scss__ = __webpack_require__("./src/components/PageLayout/PageLayout.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PageLayout_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__PageLayout_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_Navbar_Navbar__ = __webpack_require__("./src/components/Navbar/Navbar.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var PageLayout = function () {
  function PageLayout(_ref) {
    var Page = _ref.Page,
        container = _ref.container;

    _classCallCheck(this, PageLayout);

    this.container = container;
    this.components = {
      navbar: {
        containerClass: __WEBPACK_IMPORTED_MODULE_0__PageLayout_scss___default.a.navbar,
        component: new __WEBPACK_IMPORTED_MODULE_1_components_Navbar_Navbar__["a" /* default */]()
      },
      page: {
        containerClass: __WEBPACK_IMPORTED_MODULE_0__PageLayout_scss___default.a.content,
        component: new Page()
      }
    };
    this.state = {};
  }

  _createClass(PageLayout, [{
    key: 'render',
    value: function render() {
      var _components = this.components,
          navbar = _components.navbar,
          page = _components.page;


      return '\n      <div class="' + __WEBPACK_IMPORTED_MODULE_0__PageLayout_scss___default.a.layout + '" >\n        <div class="' + navbar.containerClass + '" >\n          ' + navbar.component.render() + '\n        </div>\n        <div class="' + __WEBPACK_IMPORTED_MODULE_0__PageLayout_scss___default.a.content + '" >\n          ' + page.component.render() + '\n        </div>\n      </div>\n    ';
    }
  }, {
    key: 'setupChildren',
    value: function setupChildren() {
      var _this = this;

      Object.keys(this.components).forEach(function (key) {
        var _components$key = _this.components[key],
            containerClass = _components$key.containerClass,
            component = _components$key.component;

        var containerElement = _this.container.querySelector('.' + containerClass);
        component.setContainer(containerElement);
        if (component.setupEvents) {
          component.setupEvents();
        }
      });
    }
  }, {
    key: 'renderToDOM',
    value: function renderToDOM() {
      this.container.innerHTML = this.render();
      this.setupChildren();
    }
  }]);

  return PageLayout;
}();

/* harmony default export */ __webpack_exports__["a"] = (PageLayout);

// hot reload css explicitely
if (false) {
  module.hot.accept('./pageLayout.scss');
}

/***/ }),

/***/ "./src/components/PageLayout/PageLayout.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"layout":"PageLayout__layout","navbar":"PageLayout__navbar","content":"PageLayout__content"};

/***/ }),

/***/ "./src/pages/HomePage/HomePage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HomePage_scss__ = __webpack_require__("./src/pages/HomePage/HomePage.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HomePage_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__HomePage_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var HomePage = function () {
  function HomePage() {
    _classCallCheck(this, HomePage);

    this.container = null;
    this.state = {};
  }

  _createClass(HomePage, [{
    key: 'setContainer',
    value: function setContainer(container) {
      this.container = container;
    }
  }, {
    key: 'render',
    value: function render() {
      return '\n      <div class="' + __WEBPACK_IMPORTED_MODULE_0__HomePage_scss___default.a.homePage + '" >\n        <div> HomePage </div>\n      </div>\n    ';
    }
  }, {
    key: 'renderToDOM',
    value: function renderToDOM() {
      this.container.innerHTML = this.render();
    }
  }, {
    key: 'setupEvents',
    value: function setupEvents() {
      this.container.addEventListener('click', function (event) {
        console.log('HomePage Clicked');
      });
    }
  }]);

  return HomePage;
}();

/* harmony default export */ __webpack_exports__["a"] = (HomePage);

// hot reload css explicitely
if (false) {
  module.hot.accept('./HomePage.scss');
}

/***/ }),

/***/ "./src/pages/HomePage/HomePage.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"homePage":"HomePage__homePage"};

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/app.js");


/***/ })

/******/ });