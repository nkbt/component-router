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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_DEFAULT_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_OFF_RECORD_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REMOVE_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return REMOVE_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return NAVIGATE_TO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return RESTORE_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOCATION_HASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOCATION_HISTORY; });
var ADD_DEFAULT_PARAM = 'ADD_DEFAULT_PARAM';
var ADD_OFF_RECORD_PARAM = 'ADD_OFF_RECORD_PARAM';
var ADD_ROUTE = 'ADD_ROUTE';
var REMOVE_PARAM = 'REMOVE_PARAM';
var REMOVE_ROUTE = 'REMOVE_ROUTE';
var NAVIGATE_TO = 'NAVIGATE_TO';
var RESTORE_LOCATION = 'RESTORE_LOCATION';
var LOCATION_HASH = 'LOCATION_HASH';
var LOCATION_HISTORY = 'LOCATION_HISTORY';

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return navigateTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return restoreLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addDefaultParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addOffRecordParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return removeRoute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);


var navigateTo = function navigateTo(_ref) {
  var pathname = _ref.pathname,
      query = _ref.query;
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* NAVIGATE_TO */],
    pathname: pathname,
    query: query
  };
};

var restoreLocation = function restoreLocation(_ref2, locationType) {
  var pathname = _ref2.pathname,
      query = _ref2.query,
      hash = _ref2.hash;
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["i" /* RESTORE_LOCATION */],
    pathname: pathname,
    query: query,
    hash: hash,
    locationType: locationType
  };
};

var addDefaultParam = function addDefaultParam(namespace, value) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* ADD_DEFAULT_PARAM */],
    namespace: namespace,
    value: value
  };
};

var addOffRecordParam = function addOffRecordParam(namespace) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* ADD_OFF_RECORD_PARAM */],
    namespace: namespace
  };
};

var removeParam = function removeParam(namespace) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* REMOVE_PARAM */],
    namespace: namespace
  };
};

var addRoute = function addRoute(route) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* ADD_ROUTE */],
    route: route
  };
};

var removeRoute = function removeRoute(route) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* REMOVE_ROUTE */],
    route: route
  };
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return safeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return queryToSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return searchToQuery; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_qs__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var safeQuery = function safeQuery() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var newQuery = query === null ? {} : query;

  Object.keys(newQuery).forEach(function (key) {
    newQuery[key] = '' + newQuery[key];
  });

  return newQuery;
};

var queryToSearch = function queryToSearch(query) {
  var search = Object(__WEBPACK_IMPORTED_MODULE_0_qs__["stringify"])(_extends({}, query), { strictNullHandling: true });

  return search.length > 0 ? '?' + search : '';
};

var searchToQuery = function searchToQuery(search) {
  return safeQuery(Object(__WEBPACK_IMPORTED_MODULE_0_qs__["parse"])(search.substr(1), { strictNullHandling: true }));
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return location; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shallow_equal_objects__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shallow_equal_objects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_shallow_equal_objects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__codec__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var isReplace = function isReplace(prevQuery, nextQuery, offRecord) {
  if (!offRecord.length) {
    return false;
  }
  var prevQueryOnRecord = _extends({}, prevQuery);
  var nextQueryOnRecord = _extends({}, nextQuery);

  offRecord.forEach(function (param) {
    delete prevQueryOnRecord[param];
    delete nextQueryOnRecord[param];
  });

  return __WEBPACK_IMPORTED_MODULE_0_shallow_equal_objects___default()(prevQueryOnRecord, nextQueryOnRecord);
};

var location = function location(createHistory, type) {
  return function (_ref) {
    var store = _ref.store,
        _ref$namespace = _ref.namespace,
        namespace = _ref$namespace === undefined ? 'componentRouter' : _ref$namespace,
        _ref$debounceTimeout = _ref.debounceTimeout,
        debounceTimeout = _ref$debounceTimeout === undefined ? 50 : _ref$debounceTimeout;

    var history = createHistory();
    var initialLocation = history.location;

    var prevQuery = Object(__WEBPACK_IMPORTED_MODULE_2__codec__["c" /* searchToQuery */])(initialLocation.search);
    var prevPathname = initialLocation.pathname;
    var historyPush = function historyPush() {
      var state = store.getState()[namespace];

      if (__WEBPACK_IMPORTED_MODULE_0_shallow_equal_objects___default()(prevQuery, state.cleanQuery) && prevPathname === state.pathname) {
        return;
      }

      var nextLocation = {
        pathname: state.pathname,
        search: Object(__WEBPACK_IMPORTED_MODULE_2__codec__["a" /* queryToSearch */])(state.cleanQuery),
        hash: state.hash
      };

      if (isReplace(prevQuery, state.cleanQuery, state.offRecordParams)) {
        history.replace(nextLocation);
      } else {
        history.push(nextLocation);
      }

      prevQuery = state.cleanQuery;
      prevPathname = state.pathname;
    };

    var timer = void 0;
    var historyPushDebounced = function historyPushDebounced() {
      clearTimeout(timer);
      timer = setTimeout(historyPush, debounceTimeout);
    };

    var maybeRestoreLocation = function maybeRestoreLocation(_ref2) {
      var pathname = _ref2.pathname,
          search = _ref2.search,
          hash = _ref2.hash;

      var state = store.getState()[namespace];
      var nextCleanQuery = Object(__WEBPACK_IMPORTED_MODULE_2__codec__["c" /* searchToQuery */])(search);

      if (!__WEBPACK_IMPORTED_MODULE_0_shallow_equal_objects___default()(nextCleanQuery, state.cleanQuery) || pathname !== state.pathname || hash !== state.hash) {
        store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions__["g" /* restoreLocation */])({ pathname: pathname, query: nextCleanQuery, hash: hash }, type));
      }
    };

    maybeRestoreLocation(history.location);

    var historyUnsubscribe = history.listen(maybeRestoreLocation);
    var storeUnsubscribe = store.subscribe(historyPushDebounced);

    return function () {
      clearTimeout(timer);
      timer = null;
      historyUnsubscribe();
      storeUnsubscribe();
    };
  };
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actions; });
/* unused harmony export Constants */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__reducer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__reducer__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__reducer__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location__ = __webpack_require__(3);
/* unused harmony reexport location */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adapters_hash__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__adapters_hash__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__adapters_history__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__adapters_history__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__adapters_node__ = __webpack_require__(19);
/* unused harmony reexport locationNode */




var actions = {
  navigateTo: __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* navigateTo */],
  restoreLocation: __WEBPACK_IMPORTED_MODULE_0__actions__["g" /* restoreLocation */],
  addDefaultParam: __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* addDefaultParam */],
  addOffRecordParam: __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* addOffRecordParam */],
  removeParam: __WEBPACK_IMPORTED_MODULE_0__actions__["e" /* removeParam */],
  addRoute: __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* addRoute */],
  removeRoute: __WEBPACK_IMPORTED_MODULE_0__actions__["f" /* removeRoute */]
};

var Constants = {
  ADD_DEFAULT_PARAM: __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ADD_DEFAULT_PARAM */],
  ADD_OFF_RECORD_PARAM: __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* ADD_OFF_RECORD_PARAM */],
  ADD_ROUTE: __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* ADD_ROUTE */],
  REMOVE_PARAM: __WEBPACK_IMPORTED_MODULE_1__constants__["g" /* REMOVE_PARAM */],
  REMOVE_ROUTE: __WEBPACK_IMPORTED_MODULE_1__constants__["h" /* REMOVE_ROUTE */],
  NAVIGATE_TO: __WEBPACK_IMPORTED_MODULE_1__constants__["f" /* NAVIGATE_TO */],
  RESTORE_LOCATION: __WEBPACK_IMPORTED_MODULE_1__constants__["i" /* RESTORE_LOCATION */],
  LOCATION_HASH: __WEBPACK_IMPORTED_MODULE_1__constants__["d" /* LOCATION_HASH */],
  LOCATION_HISTORY: __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* LOCATION_HISTORY */]
};







/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function shallowEqualObjects(objA, objB) {
  if (objA === objB) {
    return true;
  }

  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);
  var len = aKeys.length;

  if (bKeys.length !== len) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    var key = aKeys[i];

    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = History;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reset_css__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reset_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__reset_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_css__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__app_css__);
/* global document */







var appRoot = document.createElement('div');

appRoot.id = 'app';
document.body.appendChild(appRoot);
__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */], null), appRoot);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(20);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var store = Object(__WEBPACK_IMPORTED_MODULE_2__store__["a" /* createStore */])();

if (process.env.HISTORY === 'HASH') {
  // When publishing to GitHub Pages we cannon use HTML5 history navigation
  Object(__WEBPACK_IMPORTED_MODULE_1__src__["e" /* locationHash */])({ store: store, namespace: 'componentRouter' });
} else {
  Object(__WEBPACK_IMPORTED_MODULE_1__src__["f" /* locationHistory */])({ store: store, namespace: 'componentRouter' });
}

var navigateTo = function navigateTo(params) {
  return function (event) {
    event.preventDefault();
    store.dispatch(__WEBPACK_IMPORTED_MODULE_1__src__["a" /* actions */].navigateTo(params));
  };
};

var GlobalLinks = function GlobalLinks(_ref) {
  var routingState = _ref.routingState;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        {
          className: 'tab',
          'data-active': Object(__WEBPACK_IMPORTED_MODULE_1__src__["d" /* isActive */])(routingState, { pathname: '/' }),
          href: Object(__WEBPACK_IMPORTED_MODULE_1__src__["c" /* href */])(routingState, { pathname: '/' }),
          onClick: navigateTo({ pathname: '/' }) },
        'Home'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        {
          className: 'tab',
          'data-active': Object(__WEBPACK_IMPORTED_MODULE_1__src__["d" /* isActive */])(routingState, { pathname: '/foo' }),
          href: Object(__WEBPACK_IMPORTED_MODULE_1__src__["c" /* href */])(routingState, { pathname: '/foo' }),
          onClick: navigateTo({ pathname: '/foo' }) },
        '/foo'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        {
          className: 'tab',
          'data-active': Object(__WEBPACK_IMPORTED_MODULE_1__src__["d" /* isActive */])(routingState, { pathname: '/bar' }),
          href: Object(__WEBPACK_IMPORTED_MODULE_1__src__["c" /* href */])(routingState, { pathname: '/bar' }),
          onClick: navigateTo({ pathname: '/bar' }) },
        '/bar'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        {
          className: 'tab',
          'data-active': Object(__WEBPACK_IMPORTED_MODULE_1__src__["d" /* isActive */])(routingState, { pathname: '/cleanHistory' }),
          href: Object(__WEBPACK_IMPORTED_MODULE_1__src__["c" /* href */])(routingState, { pathname: '/cleanHistory' }),
          onClick: navigateTo({ pathname: '/cleanHistory' }) },
        '/cleanHistory'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        {
          className: 'tab',
          'data-active': Object(__WEBPACK_IMPORTED_MODULE_1__src__["d" /* isActive */])(routingState, { pathname: '/404' }),
          href: Object(__WEBPACK_IMPORTED_MODULE_1__src__["c" /* href */])(routingState, { pathname: '/404' }),
          onClick: navigateTo({ pathname: '/404' }) },
        '/404'
      )
    )
  );
};

var ComponentLinks = function (_React$Component) {
  _inherits(ComponentLinks, _React$Component);

  function ComponentLinks() {
    _classCallCheck(this, ComponentLinks);

    return _possibleConstructorReturn(this, (ComponentLinks.__proto__ || Object.getPrototypeOf(ComponentLinks)).apply(this, arguments));
  }

  _createClass(ComponentLinks, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      store.dispatch(__WEBPACK_IMPORTED_MODULE_1__src__["a" /* actions */].addDefaultParam('component', 'baz'));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      store.dispatch(__WEBPACK_IMPORTED_MODULE_1__src__["a" /* actions */].removeParam('component'));
    }
  }, {
    key: 'render',
    value: function render() {
      var routingState = this.props.routingState;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          {
            className: 'link',
            'data-active': Object(__WEBPACK_IMPORTED_MODULE_1__src__["d" /* isActive */])(routingState, { query: { component: 'bla' } }),
            href: Object(__WEBPACK_IMPORTED_MODULE_1__src__["c" /* href */])(routingState, { query: { component: 'bla' } }),
            onClick: navigateTo({ query: { component: 'bla' } }) },
          'component: bla'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          {
            className: 'link',
            'data-active': Object(__WEBPACK_IMPORTED_MODULE_1__src__["d" /* isActive */])(routingState, { query: { component: 'baz' } }),
            href: Object(__WEBPACK_IMPORTED_MODULE_1__src__["c" /* href */])(routingState, { query: { component: 'baz' } }),
            onClick: navigateTo({ query: { component: 'baz' } }) },
          'component: baz'
        )
      );
    }
  }]);

  return ComponentLinks;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var SortedComponentLinks = function (_React$Component2) {
  _inherits(SortedComponentLinks, _React$Component2);

  function SortedComponentLinks() {
    _classCallCheck(this, SortedComponentLinks);

    return _possibleConstructorReturn(this, (SortedComponentLinks.__proto__ || Object.getPrototypeOf(SortedComponentLinks)).apply(this, arguments));
  }

  _createClass(SortedComponentLinks, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      store.dispatch(__WEBPACK_IMPORTED_MODULE_1__src__["a" /* actions */].addDefaultParam('offRecord', 'bla'));
      store.dispatch(__WEBPACK_IMPORTED_MODULE_1__src__["a" /* actions */].addOffRecordParam('offRecord'));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      store.dispatch(__WEBPACK_IMPORTED_MODULE_1__src__["a" /* actions */].removeParam('offRecord'));
    }
  }, {
    key: 'render',
    value: function render() {
      var routingState = this.props.routingState;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Changes are going to replace browser history'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          ['bla', 'baz', 'abc', 'zyx'].map(function (item) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              {
                className: 'link',
                'data-active': Object(__WEBPACK_IMPORTED_MODULE_1__src__["d" /* isActive */])(routingState, { query: { offRecord: item } }),
                href: Object(__WEBPACK_IMPORTED_MODULE_1__src__["c" /* href */])(routingState, { query: { offRecord: item } }),
                key: item,
                onClick: navigateTo({ query: { offRecord: item } }) },
              'off-record: ',
              item
            );
          })
        )
      );
    }
  }]);

  return SortedComponentLinks;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var Header = function Header(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'header',
    { className: 'header' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'nav',
      { className: 'nav' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(GlobalLinks, props)
    )
  );
};

var Foo = function Foo(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'content' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      null,
      'Foo'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'section',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ComponentLinks, props)
    )
  );
};

var Bar = function Bar() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'content' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      null,
      'Bar'
    )
  );
};

var CleanHistory = function CleanHistory(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'content' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      null,
      'CleanHistory'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'section',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SortedComponentLinks, props)
    )
  );
};

var Home = function Home() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'content' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      null,
      'Home'
    )
  );
};

var NotFound = function NotFound() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'content' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      null,
      'Not Found'
    )
  );
};

var routes = {
  '/': Home,
  '/foo': Foo,
  '/bar': Bar,
  '/cleanHistory': CleanHistory
};

// Add routes
Object.keys(routes).forEach(function (route) {
  return store.dispatch(__WEBPACK_IMPORTED_MODULE_1__src__["a" /* actions */].addRoute(route));
});

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App() {
    var _ref2;

    var _temp, _this3, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this3 = _possibleConstructorReturn(this, (_ref2 = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref2, [this].concat(args))), _this3), _this3.state = {
      routingState: store.getState().componentRouter
    }, _temp), _possibleConstructorReturn(_this3, _ret);
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this4 = this;

      this.unsubscribe = store.subscribe(function () {
        return _this4.setState({ routingState: store.getState().componentRouter });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var routingState = this.state.routingState;

      var CurrentComponent = routes[routingState.currentRoute.route] || NotFound;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'app' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'component-router'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Header, { routingState: routingState }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurrentComponent, { routingState: routingState }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'section',
          { className: 'content' },
          'Routing state:',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'pre',
            null,
            JSON.stringify(routingState, null, 2)
          )
        )
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (App);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(11)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* unused harmony export cleanupQuery */
/* unused harmony export changeParams */
/* unused harmony export addDefaultParam */
/* unused harmony export addOffRecordParam */
/* unused harmony export removeParam */
/* unused harmony export restoreLocation */
/* unused harmony export addRoute */
/* unused harmony export removeRoute */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return href; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return componentRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shallow_equal_objects__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shallow_equal_objects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_shallow_equal_objects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sortedObject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pathname_parse__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pathname_match__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__codec__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var initialState = {
  pathname: '/',
  hash: '',
  offRecordParams: [],
  query: {},
  cleanQuery: {},
  defaultParams: {},
  routes: {},
  currentRoute: __WEBPACK_IMPORTED_MODULE_4__pathname_match__["a" /* emptyRoute */],
  locationType: __WEBPACK_IMPORTED_MODULE_2__constants__["e" /* LOCATION_HISTORY */]
};

var cleanupQuery = function cleanupQuery(_ref) {
  var query = _ref.query,
      defaultParams = _ref.defaultParams;
  return Object(__WEBPACK_IMPORTED_MODULE_1__sortedObject__["a" /* default */])(Object.keys(query).reduce(function (clean, key) {
    if (key in defaultParams && query[key] === defaultParams[key]) {
      return clean;
    }
    return _extends({}, clean, _defineProperty({}, key, query[key]));
  }, {}));
};

var changeParams = function changeParams(state, params) {
  var defaultParams = state.defaultParams,
      query = state.query,
      pathname = state.pathname;

  var newQuery = Object(__WEBPACK_IMPORTED_MODULE_1__sortedObject__["a" /* default */])(_extends({}, defaultParams, query, Object(__WEBPACK_IMPORTED_MODULE_5__codec__["b" /* safeQuery */])(params.query)));
  var newPathname = params.pathname || pathname;

  if (__WEBPACK_IMPORTED_MODULE_0_shallow_equal_objects___default()(newQuery, query) && newPathname === pathname) {
    return state;
  }

  var cleanQuery = cleanupQuery({ query: newQuery, defaultParams: defaultParams });
  var currentRoute = Object(__WEBPACK_IMPORTED_MODULE_4__pathname_match__["b" /* matchRoute */])(state.routes)(newPathname);

  return _extends({}, state, {
    query: newQuery,
    pathname: newPathname,
    cleanQuery: cleanQuery,
    currentRoute: currentRoute
  });
};

var addDefaultParam = function addDefaultParam(state, _ref2) {
  var namespace = _ref2.namespace,
      value = _ref2.value;
  var defaultParams = state.defaultParams,
      query = state.query;

  var stringValue = '' + value;

  if (namespace in defaultParams && defaultParams[namespace] === stringValue) {
    return state;
  }

  var newDefaultParams = _extends({}, defaultParams, _defineProperty({}, namespace, stringValue));
  var newQuery = Object(__WEBPACK_IMPORTED_MODULE_1__sortedObject__["a" /* default */])(_extends({}, newDefaultParams, query));

  return _extends({}, state, {
    defaultParams: newDefaultParams,
    query: newQuery,
    cleanQuery: cleanupQuery({ query: newQuery, defaultParams: newDefaultParams })
  });
};

var addOffRecordParam = function addOffRecordParam(state, _ref3) {
  var namespace = _ref3.namespace;
  var offRecordParams = state.offRecordParams;


  if (offRecordParams.indexOf(namespace) < 0) {
    offRecordParams.push(namespace);
  }

  return _extends({}, state, {
    offRecordParams: offRecordParams
  });
};

var removeParam = function removeParam(state, _ref4) {
  var namespace = _ref4.namespace;
  var defaultParams = state.defaultParams,
      query = state.query;

  var newDefaultParams = _extends({}, defaultParams);
  var newQuery = Object(__WEBPACK_IMPORTED_MODULE_1__sortedObject__["a" /* default */])(_extends({}, defaultParams, query));

  if (namespace in newDefaultParams) {
    delete newDefaultParams[namespace];
  }
  if (namespace in newQuery) {
    delete newQuery[namespace];
  }

  return _extends({}, state, {
    defaultParams: newDefaultParams,
    query: newQuery,
    cleanQuery: cleanupQuery({ query: newQuery, defaultParams: newDefaultParams })
  });
};

var restoreLocation = function restoreLocation(state, _ref5) {
  var pathname = _ref5.pathname,
      query = _ref5.query,
      hash = _ref5.hash,
      _ref5$locationType = _ref5.locationType,
      locationType = _ref5$locationType === undefined ? __WEBPACK_IMPORTED_MODULE_2__constants__["e" /* LOCATION_HISTORY */] : _ref5$locationType;
  var defaultParams = state.defaultParams;


  var newQuery = Object(__WEBPACK_IMPORTED_MODULE_1__sortedObject__["a" /* default */])(_extends({}, defaultParams, Object(__WEBPACK_IMPORTED_MODULE_5__codec__["b" /* safeQuery */])(query)));

  return _extends({}, state, {
    pathname: pathname,
    hash: hash,
    query: newQuery,
    cleanQuery: cleanupQuery({ query: newQuery, defaultParams: defaultParams }),
    currentRoute: Object(__WEBPACK_IMPORTED_MODULE_4__pathname_match__["b" /* matchRoute */])(state.routes)(pathname),
    locationType: locationType
  });
};

var addRoute = function addRoute(state, payload) {
  var routes = _extends({}, state.routes, _defineProperty({}, payload.route, Object(__WEBPACK_IMPORTED_MODULE_3__pathname_parse__["a" /* parseRoute */])(payload.route)));
  var currentRoute = Object(__WEBPACK_IMPORTED_MODULE_4__pathname_match__["b" /* matchRoute */])(routes)(state.pathname);

  return _extends({}, state, { routes: routes, currentRoute: currentRoute });
};

var removeRoute = function removeRoute(state, payload) {
  return _extends({}, state, {
    routes: Object.keys(state.routes).filter(function (key) {
      return key !== payload.route;
    }).reduce(function (result, key) {
      return _extends({}, result, _defineProperty({}, key, state.routes[key]));
    }, {})
  });
};

var href = function href(state, payload) {
  var _changeParams = changeParams(state, payload),
      pathname = _changeParams.pathname,
      cleanQuery = _changeParams.cleanQuery,
      hash = _changeParams.hash;

  return [pathname, Object(__WEBPACK_IMPORTED_MODULE_5__codec__["a" /* queryToSearch */])(cleanQuery), hash].join('');
};

var isActive = function isActive(state, _ref6) {
  var pathname = _ref6.pathname,
      query = _ref6.query;
  var prevPathname = state.pathname,
      prevCleanQuery = state.cleanQuery;

  var _changeParams2 = changeParams(state, { pathname: pathname, query: query }),
      nextPathname = _changeParams2.pathname,
      nextCleanQuery = _changeParams2.cleanQuery;

  return __WEBPACK_IMPORTED_MODULE_0_shallow_equal_objects___default()(nextCleanQuery, prevCleanQuery) && nextPathname === prevPathname;
};

var reduce = function reduce(state, _ref7) {
  var type = _ref7.type,
      payload = _objectWithoutProperties(_ref7, ['type']);

  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_2__constants__["f" /* NAVIGATE_TO */]:
      return changeParams(state, payload);

    case __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* ADD_DEFAULT_PARAM */]:
      return addDefaultParam(state, payload);

    case __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* ADD_OFF_RECORD_PARAM */]:
      return addOffRecordParam(state, payload);

    case __WEBPACK_IMPORTED_MODULE_2__constants__["g" /* REMOVE_PARAM */]:
      return removeParam(state, payload);

    case __WEBPACK_IMPORTED_MODULE_2__constants__["i" /* RESTORE_LOCATION */]:
      return restoreLocation(state, payload);

    case __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* ADD_ROUTE */]:
      return addRoute(state, payload);

    case __WEBPACK_IMPORTED_MODULE_2__constants__["h" /* REMOVE_ROUTE */]:
      return removeRoute(state, payload);

    default:
      return state;
  }
};

var componentRouter = function componentRouter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref8 = arguments[1];

  var type = _ref8.type,
      payload = _objectWithoutProperties(_ref8, ['type']);

  var newState = reduce(state, _extends({ type: type }, payload));

  return __WEBPACK_IMPORTED_MODULE_0_shallow_equal_objects___default()(state, newState) ? state : newState;
};


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sortedObject = function sortedObject(input) {
  return Object.keys(input).sort().reduce(function (result, key) {
    return _extends({}, result, _defineProperty({}, key, input[key]));
  }, {});
};

/* harmony default export */ __webpack_exports__["a"] = (sortedObject);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routePartsRegex */
/* unused harmony export defaultRoute */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parseRoute; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var routePartsRegex = /(:?[^/]+)/ig;

var defaultRoute = { route: '/', regex: '^/$', params: {} };

var escapeRegExp = function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

var parseRoute = function parseRoute() {
  var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

  var parts = route.match(routePartsRegex);

  if (!parts) {
    return defaultRoute;
  }

  var parsedRoute = parts.reduce(function (_ref, part) {
    var regex = _ref.regex,
        params = _ref.params;

    if (part.substr(0, 1) === ':') {
      return {
        regex: regex.concat('/([^/]+)'),
        params: _extends({}, params, _defineProperty({}, part.substr(1), null))
      };
    }

    return {
      regex: regex.concat(escapeRegExp('/' + part)),
      params: params
    };
  }, { regex: '', params: {} });

  return {
    route: route,
    regex: '^' + parsedRoute.regex + '$',
    params: parsedRoute.params
  };
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return emptyRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return matchRoute; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var emptyRoute = { route: null, regex: null, params: {} };

var matchRoute = function matchRoute(routes) {
  return function () {
    var pathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    var matchedRoute = emptyRoute;

    Object.keys(routes).some(function (r) {
      var match = pathname.match(new RegExp(routes[r].regex));

      if (!match) {
        return false;
      }

      matchedRoute = _extends({}, routes[r], {
        params: Object.keys(routes[r].params).reduce(function (params, param, i) {
          return _extends({}, params, _defineProperty({}, param, decodeURIComponent(match[i + 1])));
        }, {})

      });
      return true;
    });

    return matchedRoute;
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = Qs;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return locationHash; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(0);




var locationHash = Object(__WEBPACK_IMPORTED_MODULE_1__location__["a" /* location */])(__WEBPACK_IMPORTED_MODULE_0_history__["createHashHistory"], __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* LOCATION_HASH */]);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return locationHistory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(0);




var locationHistory = Object(__WEBPACK_IMPORTED_MODULE_1__location__["a" /* location */])(__WEBPACK_IMPORTED_MODULE_0_history__["createBrowserHistory"], __WEBPACK_IMPORTED_MODULE_2__constants__["e" /* LOCATION_HISTORY */]);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export locationNode */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__codec__ = __webpack_require__(2);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();




var locationNode = function locationNode(_ref) {
  var store = _ref.store,
      routes = _ref.routes;
  return function (_ref2) {
    var url = _ref2.url;

    var _url$split = url.split('?'),
        _url$split2 = _slicedToArray(_url$split, 2),
        pathname = _url$split2[0],
        _url$split2$ = _url$split2[1],
        search = _url$split2$ === undefined ? '' : _url$split2$;

    var query = Object(__WEBPACK_IMPORTED_MODULE_1__codec__["c" /* searchToQuery */])('?' + search);

    store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions__["g" /* restoreLocation */])({ pathname: pathname, query: query }));

    routes.forEach(function (route) {
      return store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_0__actions__["c" /* addRoute */])(route));
    });
  };
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src__ = __webpack_require__(5);
/* global window */





var factory = function factory(initialState) {
  var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    componentRouter: __WEBPACK_IMPORTED_MODULE_2__src__["b" /* componentRouter */]
  });

  var devTools = typeof window !== 'undefined' && window.devToolsExtension;
  var middleware = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(Object(__WEBPACK_IMPORTED_MODULE_1_redux_logger__["createLogger"])({
    level: 'info',
    collapsed: true,
    timestamp: false,
    duration: true
  }));

  if (!devTools) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(rootReducer, initialState, middleware);
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(rootReducer, initialState, Object(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(middleware, devTools()));
};

var createStore = factory;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = Redux;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.reduxLogger=e.reduxLogger||{})}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);