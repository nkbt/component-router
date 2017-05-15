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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD_DEFAULT_PARAM = exports.ADD_DEFAULT_PARAM = 'ADD_DEFAULT_PARAM';
var ADD_OFF_RECORD_PARAM = exports.ADD_OFF_RECORD_PARAM = 'ADD_OFF_RECORD_PARAM';
var ADD_ROUTE = exports.ADD_ROUTE = 'ADD_ROUTE';
var REMOVE_PARAM = exports.REMOVE_PARAM = 'REMOVE_PARAM';
var REMOVE_ROUTE = exports.REMOVE_ROUTE = 'REMOVE_ROUTE';
var NAVIGATE_TO = exports.NAVIGATE_TO = 'NAVIGATE_TO';
var RESTORE_LOCATION = exports.RESTORE_LOCATION = 'RESTORE_LOCATION';
var LOCATION_HASH = exports.LOCATION_HASH = 'LOCATION_HASH';
var LOCATION_HISTORY = exports.LOCATION_HISTORY = 'LOCATION_HISTORY';

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeRoute = exports.addRoute = exports.removeParam = exports.addOffRecordParam = exports.addDefaultParam = exports.restoreLocation = exports.navigateTo = undefined;

var _constants = __webpack_require__(0);

var navigateTo = exports.navigateTo = function navigateTo(_ref) {
  var pathname = _ref.pathname,
      query = _ref.query;
  return {
    type: _constants.NAVIGATE_TO,
    pathname: pathname,
    query: query
  };
};

var restoreLocation = exports.restoreLocation = function restoreLocation(_ref2, locationType) {
  var pathname = _ref2.pathname,
      query = _ref2.query,
      hash = _ref2.hash;
  return {
    type: _constants.RESTORE_LOCATION,
    pathname: pathname,
    query: query,
    hash: hash,
    locationType: locationType
  };
};

var addDefaultParam = exports.addDefaultParam = function addDefaultParam(namespace, value) {
  return {
    type: _constants.ADD_DEFAULT_PARAM,
    namespace: namespace,
    value: value
  };
};

var addOffRecordParam = exports.addOffRecordParam = function addOffRecordParam(namespace) {
  return {
    type: _constants.ADD_OFF_RECORD_PARAM,
    namespace: namespace
  };
};

var removeParam = exports.removeParam = function removeParam(namespace) {
  return {
    type: _constants.REMOVE_PARAM,
    namespace: namespace
  };
};

var addRoute = exports.addRoute = function addRoute(route) {
  return {
    type: _constants.ADD_ROUTE,
    route: route
  };
};

var removeRoute = exports.removeRoute = function removeRoute(route) {
  return {
    type: _constants.REMOVE_ROUTE,
    route: route
  };
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchToQuery = exports.queryToSearch = exports.safeQuery = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _qs = __webpack_require__(28);

var safeQuery = exports.safeQuery = function safeQuery() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var newQuery = query === null ? {} : query;

  Object.keys(newQuery).forEach(function (key) {
    newQuery[key] = '' + newQuery[key];
  });

  return newQuery;
};

var queryToSearch = exports.queryToSearch = function queryToSearch(query) {
  var search = (0, _qs.stringify)(_extends({}, query), { strictNullHandling: true });

  return search.length > 0 ? '?' + search : '';
};

var searchToQuery = exports.searchToQuery = function searchToQuery(search) {
  return safeQuery((0, _qs.parse)(search.substr(1), { strictNullHandling: true }));
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.location = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _objects = __webpack_require__(7);

var _objects2 = _interopRequireDefault(_objects);

var _actions = __webpack_require__(1);

var _codec = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  return (0, _objects2.default)(prevQueryOnRecord, nextQueryOnRecord);
};

var location = exports.location = function location(createHistory, type) {
  return function (_ref) {
    var store = _ref.store,
        _ref$namespace = _ref.namespace,
        namespace = _ref$namespace === undefined ? 'componentRouter' : _ref$namespace,
        _ref$debounceTimeout = _ref.debounceTimeout,
        debounceTimeout = _ref$debounceTimeout === undefined ? 50 : _ref$debounceTimeout;

    var history = createHistory();
    var initialLocation = history.location;

    var prevQuery = (0, _codec.searchToQuery)(initialLocation.search);
    var prevPathname = initialLocation.pathname;
    var historyPush = function historyPush() {
      var state = store.getState()[namespace];

      if ((0, _objects2.default)(prevQuery, state.cleanQuery) && prevPathname === state.pathname) {
        return;
      }

      var nextLocation = {
        pathname: state.pathname,
        search: (0, _codec.queryToSearch)(state.cleanQuery),
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
      var nextCleanQuery = (0, _codec.searchToQuery)(search);

      if (!(0, _objects2.default)(nextCleanQuery, state.cleanQuery) || pathname !== state.pathname || hash !== state.hash) {
        store.dispatch((0, _actions.restoreLocation)({ pathname: pathname, query: nextCleanQuery, hash: hash }, type));
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locationNode = exports.locationHistory = exports.locationHash = exports.location = exports.isActive = exports.href = exports.componentRouter = exports.Constants = exports.actions = undefined;

var _reducer = __webpack_require__(20);

Object.defineProperty(exports, 'componentRouter', {
  enumerable: true,
  get: function get() {
    return _reducer.componentRouter;
  }
});
Object.defineProperty(exports, 'href', {
  enumerable: true,
  get: function get() {
    return _reducer.href;
  }
});
Object.defineProperty(exports, 'isActive', {
  enumerable: true,
  get: function get() {
    return _reducer.isActive;
  }
});

var _location = __webpack_require__(3);

Object.defineProperty(exports, 'location', {
  enumerable: true,
  get: function get() {
    return _location.location;
  }
});

var _hash = __webpack_require__(15);

Object.defineProperty(exports, 'locationHash', {
  enumerable: true,
  get: function get() {
    return _hash.locationHash;
  }
});

var _history = __webpack_require__(16);

Object.defineProperty(exports, 'locationHistory', {
  enumerable: true,
  get: function get() {
    return _history.locationHistory;
  }
});

var _node = __webpack_require__(17);

Object.defineProperty(exports, 'locationNode', {
  enumerable: true,
  get: function get() {
    return _node.locationNode;
  }
});

var _actions = __webpack_require__(1);

var _constants = __webpack_require__(0);

var actions = exports.actions = {
  navigateTo: _actions.navigateTo,
  restoreLocation: _actions.restoreLocation,
  addDefaultParam: _actions.addDefaultParam,
  addOffRecordParam: _actions.addOffRecordParam,
  removeParam: _actions.removeParam,
  addRoute: _actions.addRoute,
  removeRoute: _actions.removeRoute
};

var Constants = exports.Constants = {
  ADD_DEFAULT_PARAM: _constants.ADD_DEFAULT_PARAM,
  ADD_OFF_RECORD_PARAM: _constants.ADD_OFF_RECORD_PARAM,
  ADD_ROUTE: _constants.ADD_ROUTE,
  REMOVE_PARAM: _constants.REMOVE_PARAM,
  REMOVE_ROUTE: _constants.REMOVE_ROUTE,
  NAVIGATE_TO: _constants.NAVIGATE_TO,
  RESTORE_LOCATION: _constants.RESTORE_LOCATION,
  LOCATION_HASH: _constants.LOCATION_HASH,
  LOCATION_HISTORY: _constants.LOCATION_HISTORY
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var repeat = exports.repeat = function repeat(str, times) {
  return new Array(times + 1).join(str);
};

var pad = exports.pad = function pad(num, maxLength) {
  return repeat("0", maxLength - num.toString().length) + num;
};

var formatTime = exports.formatTime = function formatTime(time) {
  return pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
};

// Use performance API if it's available in order to get better precision
var timer = exports.timer = typeof performance !== "undefined" && performance !== null && typeof performance.now === "function" ? performance : Date;

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports) {

module.exports = History;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _src = __webpack_require__(5);

var _store = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store.createStore)();

if (true) {
  // When publishing to GitHub Pages we cannon use HTML5 history navigation
  (0, _src.locationHash)({ store: store, namespace: 'componentRouter' });
} else {
  (0, _src.locationHistory)({ store: store, namespace: 'componentRouter' });
}

var navigateTo = function navigateTo(params) {
  return function (event) {
    event.preventDefault();
    store.dispatch(_src.actions.navigateTo(params));
  };
};

var GlobalLinks = function GlobalLinks(_ref) {
  var routingState = _ref.routingState;
  return _react2.default.createElement(
    'ul',
    null,
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        'a',
        {
          className: 'tab',
          'data-active': (0, _src.isActive)(routingState, { pathname: '/' }),
          href: (0, _src.href)(routingState, { pathname: '/' }),
          onClick: navigateTo({ pathname: '/' }) },
        'Home'
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        'a',
        {
          className: 'tab',
          'data-active': (0, _src.isActive)(routingState, { pathname: '/foo' }),
          href: (0, _src.href)(routingState, { pathname: '/foo' }),
          onClick: navigateTo({ pathname: '/foo' }) },
        '/foo'
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        'a',
        {
          className: 'tab',
          'data-active': (0, _src.isActive)(routingState, { pathname: '/bar' }),
          href: (0, _src.href)(routingState, { pathname: '/bar' }),
          onClick: navigateTo({ pathname: '/bar' }) },
        '/bar'
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        'a',
        {
          className: 'tab',
          'data-active': (0, _src.isActive)(routingState, { pathname: '/cleanHistory' }),
          href: (0, _src.href)(routingState, { pathname: '/cleanHistory' }),
          onClick: navigateTo({ pathname: '/cleanHistory' }) },
        '/cleanHistory'
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        'a',
        {
          className: 'tab',
          'data-active': (0, _src.isActive)(routingState, { pathname: '/404' }),
          href: (0, _src.href)(routingState, { pathname: '/404' }),
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
      store.dispatch(_src.actions.addDefaultParam('component', 'baz'));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      store.dispatch(_src.actions.removeParam('component'));
    }
  }, {
    key: 'render',
    value: function render() {
      var routingState = this.props.routingState;


      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'a',
          {
            className: 'link',
            'data-active': (0, _src.isActive)(routingState, { query: { component: 'bla' } }),
            href: (0, _src.href)(routingState, { query: { component: 'bla' } }),
            onClick: navigateTo({ query: { component: 'bla' } }) },
          'component: bla'
        ),
        _react2.default.createElement(
          'a',
          {
            className: 'link',
            'data-active': (0, _src.isActive)(routingState, { query: { component: 'baz' } }),
            href: (0, _src.href)(routingState, { query: { component: 'baz' } }),
            onClick: navigateTo({ query: { component: 'baz' } }) },
          'component: baz'
        )
      );
    }
  }]);

  return ComponentLinks;
}(_react2.default.Component);

var SortedComponentLinks = function (_React$Component2) {
  _inherits(SortedComponentLinks, _React$Component2);

  function SortedComponentLinks() {
    _classCallCheck(this, SortedComponentLinks);

    return _possibleConstructorReturn(this, (SortedComponentLinks.__proto__ || Object.getPrototypeOf(SortedComponentLinks)).apply(this, arguments));
  }

  _createClass(SortedComponentLinks, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      store.dispatch(_src.actions.addDefaultParam('offRecord', 'bla'));
      store.dispatch(_src.actions.addOffRecordParam('offRecord'));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      store.dispatch(_src.actions.removeParam('offRecord'));
    }
  }, {
    key: 'render',
    value: function render() {
      var routingState = this.props.routingState;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Changes are going to replace browser history'
        ),
        _react2.default.createElement(
          'div',
          null,
          ['bla', 'baz', 'abc', 'zyx'].map(function (item) {
            return _react2.default.createElement(
              'a',
              {
                className: 'link',
                'data-active': (0, _src.isActive)(routingState, { query: { offRecord: item } }),
                href: (0, _src.href)(routingState, { query: { offRecord: item } }),
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
}(_react2.default.Component);

var Header = function Header(_ref2) {
  var props = _objectWithoutProperties(_ref2, []);

  return _react2.default.createElement(
    'header',
    { className: 'header' },
    _react2.default.createElement(
      'nav',
      { className: 'nav' },
      _react2.default.createElement(GlobalLinks, props)
    )
  );
};

var Foo = function Foo(_ref3) {
  var props = _objectWithoutProperties(_ref3, []);

  return _react2.default.createElement(
    'div',
    { className: 'content' },
    _react2.default.createElement(
      'h1',
      null,
      'Foo'
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(ComponentLinks, props)
    )
  );
};

var Bar = function Bar() {
  return _react2.default.createElement(
    'div',
    { className: 'content' },
    _react2.default.createElement(
      'h1',
      null,
      'Bar'
    )
  );
};

var CleanHistory = function CleanHistory(_ref4) {
  var props = _objectWithoutProperties(_ref4, []);

  return _react2.default.createElement(
    'div',
    { className: 'content' },
    _react2.default.createElement(
      'h1',
      null,
      'CleanHistory'
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(SortedComponentLinks, props)
    )
  );
};

var Home = function Home() {
  return _react2.default.createElement(
    'div',
    { className: 'content' },
    _react2.default.createElement(
      'h1',
      null,
      'Home'
    )
  );
};

var NotFound = function NotFound() {
  return _react2.default.createElement(
    'div',
    { className: 'content' },
    _react2.default.createElement(
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
  return store.dispatch(_src.actions.addRoute(route));
});

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App() {
    var _ref5;

    var _temp, _this3, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this3 = _possibleConstructorReturn(this, (_ref5 = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref5, [this].concat(args))), _this3), _this3.state = {
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

      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(
          'h1',
          null,
          'component-router'
        ),
        _react2.default.createElement(Header, { routingState: routingState }),
        _react2.default.createElement(CurrentComponent, { routingState: routingState }),
        _react2.default.createElement(
          'section',
          { className: 'content' },
          'Routing state:',
          _react2.default.createElement(
            'pre',
            null,
            JSON.stringify(routingState, null, 2)
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = undefined;

var _redux = __webpack_require__(29);

var _reduxLogger = __webpack_require__(26);

var _src = __webpack_require__(5);

var factory = function factory(initialState) {
  var rootReducer = (0, _redux.combineReducers)({
    componentRouter: _src.componentRouter
  });

  var devTools = typeof window !== 'undefined' && window.devToolsExtension;
  var middleware = (0, _redux.applyMiddleware)((0, _reduxLogger.createLogger)({
    level: 'info',
    collapsed: true,
    timestamp: false,
    duration: true
  }));

  if (!devTools) {
    return (0, _redux.createStore)(rootReducer, initialState, middleware);
  }

  return (0, _redux.createStore)(rootReducer, initialState, (0, _redux.compose)(middleware, devTools()));
}; /* global window */

var createStore = exports.createStore = factory;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(9);

var _App2 = _interopRequireDefault(_App);

__webpack_require__(11);

__webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appRoot = document.createElement('div'); /* global document */

appRoot.id = 'app';
document.body.appendChild(appRoot);
_reactDom2.default.render(_react2.default.createElement(_App2.default, null), appRoot);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locationHash = undefined;

var _history = __webpack_require__(8);

var _location = __webpack_require__(3);

var _constants = __webpack_require__(0);

var locationHash = exports.locationHash = (0, _location.location)(_history.createHashHistory, _constants.LOCATION_HASH);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locationHistory = undefined;

var _history = __webpack_require__(8);

var _location = __webpack_require__(3);

var _constants = __webpack_require__(0);

var locationHistory = exports.locationHistory = (0, _location.location)(_history.createBrowserHistory, _constants.LOCATION_HISTORY);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locationNode = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _actions = __webpack_require__(1);

var _codec = __webpack_require__(2);

var locationNode = exports.locationNode = function locationNode(_ref) {
  var store = _ref.store,
      routes = _ref.routes;
  return function (_ref2) {
    var url = _ref2.url;

    var _url$split = url.split('?'),
        _url$split2 = _slicedToArray(_url$split, 2),
        pathname = _url$split2[0],
        _url$split2$ = _url$split2[1],
        search = _url$split2$ === undefined ? '' : _url$split2$;

    var query = (0, _codec.searchToQuery)('?' + search);

    store.dispatch((0, _actions.restoreLocation)({ pathname: pathname, query: query }));

    routes.forEach(function (route) {
      return store.dispatch((0, _actions.addRoute)(route));
    });
  };
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var emptyRoute = exports.emptyRoute = { route: null, regex: null, params: {} };

var matchRoute = exports.matchRoute = function matchRoute(routes) {
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var routePartsRegex = exports.routePartsRegex = /(:?[^/]+)/ig;

var defaultRoute = exports.defaultRoute = { route: '/', regex: '^/$', params: {} };

var escapeRegExp = function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

var parseRoute = exports.parseRoute = function parseRoute() {
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentRouter = exports.isActive = exports.href = exports.removeRoute = exports.addRoute = exports.restoreLocation = exports.removeParam = exports.addOffRecordParam = exports.addDefaultParam = exports.changeParams = exports.cleanupQuery = exports.initialState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _objects = __webpack_require__(7);

var _objects2 = _interopRequireDefault(_objects);

var _sortedObject = __webpack_require__(21);

var _sortedObject2 = _interopRequireDefault(_sortedObject);

var _constants = __webpack_require__(0);

var _parse = __webpack_require__(19);

var _match = __webpack_require__(18);

var _codec = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = exports.initialState = {
  pathname: '/',
  hash: '',
  offRecordParams: [],
  query: {},
  cleanQuery: {},
  defaultParams: {},
  routes: {},
  currentRoute: null,
  locationType: _constants.LOCATION_HISTORY
};

var cleanupQuery = exports.cleanupQuery = function cleanupQuery(_ref) {
  var query = _ref.query,
      defaultParams = _ref.defaultParams;
  return (0, _sortedObject2.default)(Object.keys(query).reduce(function (clean, key) {
    if (key in defaultParams && query[key] === defaultParams[key]) {
      return clean;
    }
    return _extends({}, clean, _defineProperty({}, key, query[key]));
  }, {}));
};

var changeParams = exports.changeParams = function changeParams(state, params) {
  var defaultParams = state.defaultParams,
      query = state.query,
      pathname = state.pathname;

  var newQuery = (0, _sortedObject2.default)(_extends({}, defaultParams, query, (0, _codec.safeQuery)(params.query)));
  var newPathname = params.pathname || pathname;

  if ((0, _objects2.default)(newQuery, query) && newPathname === pathname) {
    return state;
  }

  var cleanQuery = cleanupQuery({ query: newQuery, defaultParams: defaultParams });
  var currentRoute = (0, _match.matchRoute)(state.routes)(newPathname);

  return _extends({}, state, {
    query: newQuery,
    pathname: newPathname,
    cleanQuery: cleanQuery,
    currentRoute: currentRoute
  });
};

var addDefaultParam = exports.addDefaultParam = function addDefaultParam(state, _ref2) {
  var namespace = _ref2.namespace,
      value = _ref2.value;
  var defaultParams = state.defaultParams,
      query = state.query;

  var stringValue = '' + value;

  if (namespace in defaultParams && defaultParams[namespace] === stringValue) {
    return state;
  }

  var newDefaultParams = _extends({}, defaultParams, _defineProperty({}, namespace, stringValue));
  var newQuery = (0, _sortedObject2.default)(_extends({}, newDefaultParams, query));

  return _extends({}, state, {
    defaultParams: newDefaultParams,
    query: newQuery,
    cleanQuery: cleanupQuery({ query: newQuery, defaultParams: newDefaultParams })
  });
};

var addOffRecordParam = exports.addOffRecordParam = function addOffRecordParam(state, _ref3) {
  var namespace = _ref3.namespace;
  var offRecordParams = state.offRecordParams;


  if (offRecordParams.indexOf(namespace) < 0) {
    offRecordParams.push(namespace);
  }

  return _extends({}, state, {
    offRecordParams: offRecordParams
  });
};

var removeParam = exports.removeParam = function removeParam(state, _ref4) {
  var namespace = _ref4.namespace;
  var defaultParams = state.defaultParams,
      query = state.query;

  var newDefaultParams = _extends({}, defaultParams);
  var newQuery = (0, _sortedObject2.default)(_extends({}, defaultParams, query));

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

var restoreLocation = exports.restoreLocation = function restoreLocation(state, _ref5) {
  var pathname = _ref5.pathname,
      query = _ref5.query,
      hash = _ref5.hash,
      _ref5$locationType = _ref5.locationType,
      locationType = _ref5$locationType === undefined ? _constants.LOCATION_HISTORY : _ref5$locationType;
  var defaultParams = state.defaultParams;


  var newQuery = (0, _sortedObject2.default)(_extends({}, defaultParams, (0, _codec.safeQuery)(query)));

  return _extends({}, state, {
    pathname: pathname,
    hash: hash,
    query: newQuery,
    cleanQuery: cleanupQuery({ query: newQuery, defaultParams: defaultParams }),
    currentRoute: (0, _match.matchRoute)(state.routes)(pathname),
    locationType: locationType
  });
};

var addRoute = exports.addRoute = function addRoute(state, payload) {
  var routes = _extends({}, state.routes, _defineProperty({}, payload.route, (0, _parse.parseRoute)(payload.route)));
  var currentRoute = (0, _match.matchRoute)(routes)(state.pathname);

  return _extends({}, state, { routes: routes, currentRoute: currentRoute });
};

var removeRoute = exports.removeRoute = function removeRoute(state, payload) {
  return _extends({}, state, {
    routes: Object.keys(state.routes).filter(function (key) {
      return key !== payload.route;
    }).reduce(function (result, key) {
      return _extends({}, result, _defineProperty({}, key, state.routes[key]));
    }, {})
  });
};

var href = exports.href = function href(state, payload) {
  var _changeParams = changeParams(state, payload),
      pathname = _changeParams.pathname,
      cleanQuery = _changeParams.cleanQuery,
      hash = _changeParams.hash;

  return [pathname, (0, _codec.queryToSearch)(cleanQuery), hash].join('');
};

var isActive = exports.isActive = function isActive(state, _ref6) {
  var pathname = _ref6.pathname,
      query = _ref6.query;
  var prevPathname = state.pathname,
      prevCleanQuery = state.cleanQuery;

  var _changeParams2 = changeParams(state, { pathname: pathname, query: query }),
      nextPathname = _changeParams2.pathname,
      nextCleanQuery = _changeParams2.cleanQuery;

  return (0, _objects2.default)(nextCleanQuery, prevCleanQuery) && nextPathname === prevPathname;
};

var reduce = function reduce(state, _ref7) {
  var type = _ref7.type,
      payload = _objectWithoutProperties(_ref7, ['type']);

  switch (type) {
    case _constants.NAVIGATE_TO:
      return changeParams(state, payload);

    case _constants.ADD_DEFAULT_PARAM:
      return addDefaultParam(state, payload);

    case _constants.ADD_OFF_RECORD_PARAM:
      return addOffRecordParam(state, payload);

    case _constants.REMOVE_PARAM:
      return removeParam(state, payload);

    case _constants.RESTORE_LOCATION:
      return restoreLocation(state, payload);

    case _constants.ADD_ROUTE:
      return addRoute(state, payload);

    case _constants.REMOVE_ROUTE:
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

  return (0, _objects2.default)(state, newState) ? state : newState;
};
exports.componentRouter = componentRouter;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sortedObject = function sortedObject(input) {
  return Object.keys(input).sort().reduce(function (result, key) {
    return _extends({}, result, _defineProperty({}, key, input[key]));
  }, {});
};

exports.default = sortedObject;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * deep-diff.
 * Licensed under the MIT License.
 */
;(function(root, factory) {
  'use strict';
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return factory();
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.DeepDiff = factory();
  }
}(this, function(undefined) {
  'use strict';

  var $scope, conflict, conflictResolution = [];
  if (typeof global === 'object' && global) {
    $scope = global;
  } else if (typeof window !== 'undefined') {
    $scope = window;
  } else {
    $scope = {};
  }
  conflict = $scope.DeepDiff;
  if (conflict) {
    conflictResolution.push(
      function() {
        if ('undefined' !== typeof conflict && $scope.DeepDiff === accumulateDiff) {
          $scope.DeepDiff = conflict;
          conflict = undefined;
        }
      });
  }

  // nodejs compatible on server side and in the browser.
  function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  }

  function Diff(kind, path) {
    Object.defineProperty(this, 'kind', {
      value: kind,
      enumerable: true
    });
    if (path && path.length) {
      Object.defineProperty(this, 'path', {
        value: path,
        enumerable: true
      });
    }
  }

  function DiffEdit(path, origin, value) {
    DiffEdit.super_.call(this, 'E', path);
    Object.defineProperty(this, 'lhs', {
      value: origin,
      enumerable: true
    });
    Object.defineProperty(this, 'rhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffEdit, Diff);

  function DiffNew(path, value) {
    DiffNew.super_.call(this, 'N', path);
    Object.defineProperty(this, 'rhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffNew, Diff);

  function DiffDeleted(path, value) {
    DiffDeleted.super_.call(this, 'D', path);
    Object.defineProperty(this, 'lhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffDeleted, Diff);

  function DiffArray(path, index, item) {
    DiffArray.super_.call(this, 'A', path);
    Object.defineProperty(this, 'index', {
      value: index,
      enumerable: true
    });
    Object.defineProperty(this, 'item', {
      value: item,
      enumerable: true
    });
  }
  inherits(DiffArray, Diff);

  function arrayRemove(arr, from, to) {
    var rest = arr.slice((to || from) + 1 || arr.length);
    arr.length = from < 0 ? arr.length + from : from;
    arr.push.apply(arr, rest);
    return arr;
  }

  function realTypeOf(subject) {
    var type = typeof subject;
    if (type !== 'object') {
      return type;
    }

    if (subject === Math) {
      return 'math';
    } else if (subject === null) {
      return 'null';
    } else if (Array.isArray(subject)) {
      return 'array';
    } else if (Object.prototype.toString.call(subject) === '[object Date]') {
      return 'date';
    } else if (typeof subject.toString !== 'undefined' && /^\/.*\//.test(subject.toString())) {
      return 'regexp';
    }
    return 'object';
  }

  function deepDiff(lhs, rhs, changes, prefilter, path, key, stack) {
    path = path || [];
    var currentPath = path.slice(0);
    if (typeof key !== 'undefined') {
      if (prefilter) {
        if (typeof(prefilter) === 'function' && prefilter(currentPath, key)) { return; }
        else if (typeof(prefilter) === 'object') {
          if (prefilter.prefilter && prefilter.prefilter(currentPath, key)) { return; }
          if (prefilter.normalize) {
            var alt = prefilter.normalize(currentPath, key, lhs, rhs);
            if (alt) {
              lhs = alt[0];
              rhs = alt[1];
            }
          }
        }
      }
      currentPath.push(key);
    }

    // Use string comparison for regexes
    if (realTypeOf(lhs) === 'regexp' && realTypeOf(rhs) === 'regexp') {
      lhs = lhs.toString();
      rhs = rhs.toString();
    }

    var ltype = typeof lhs;
    var rtype = typeof rhs;
    if (ltype === 'undefined') {
      if (rtype !== 'undefined') {
        changes(new DiffNew(currentPath, rhs));
      }
    } else if (rtype === 'undefined') {
      changes(new DiffDeleted(currentPath, lhs));
    } else if (realTypeOf(lhs) !== realTypeOf(rhs)) {
      changes(new DiffEdit(currentPath, lhs, rhs));
    } else if (Object.prototype.toString.call(lhs) === '[object Date]' && Object.prototype.toString.call(rhs) === '[object Date]' && ((lhs - rhs) !== 0)) {
      changes(new DiffEdit(currentPath, lhs, rhs));
    } else if (ltype === 'object' && lhs !== null && rhs !== null) {
      stack = stack || [];
      if (stack.indexOf(lhs) < 0) {
        stack.push(lhs);
        if (Array.isArray(lhs)) {
          var i, len = lhs.length;
          for (i = 0; i < lhs.length; i++) {
            if (i >= rhs.length) {
              changes(new DiffArray(currentPath, i, new DiffDeleted(undefined, lhs[i])));
            } else {
              deepDiff(lhs[i], rhs[i], changes, prefilter, currentPath, i, stack);
            }
          }
          while (i < rhs.length) {
            changes(new DiffArray(currentPath, i, new DiffNew(undefined, rhs[i++])));
          }
        } else {
          var akeys = Object.keys(lhs);
          var pkeys = Object.keys(rhs);
          akeys.forEach(function(k, i) {
            var other = pkeys.indexOf(k);
            if (other >= 0) {
              deepDiff(lhs[k], rhs[k], changes, prefilter, currentPath, k, stack);
              pkeys = arrayRemove(pkeys, other);
            } else {
              deepDiff(lhs[k], undefined, changes, prefilter, currentPath, k, stack);
            }
          });
          pkeys.forEach(function(k) {
            deepDiff(undefined, rhs[k], changes, prefilter, currentPath, k, stack);
          });
        }
        stack.length = stack.length - 1;
      }
    } else if (lhs !== rhs) {
      if (!(ltype === 'number' && isNaN(lhs) && isNaN(rhs))) {
        changes(new DiffEdit(currentPath, lhs, rhs));
      }
    }
  }

  function accumulateDiff(lhs, rhs, prefilter, accum) {
    accum = accum || [];
    deepDiff(lhs, rhs,
      function(diff) {
        if (diff) {
          accum.push(diff);
        }
      },
      prefilter);
    return (accum.length) ? accum : undefined;
  }

  function applyArrayChange(arr, index, change) {
    if (change.path && change.path.length) {
      var it = arr[index],
          i, u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          applyArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          delete it[change.path[i]];
          break;
        case 'E':
        case 'N':
          it[change.path[i]] = change.rhs;
          break;
      }
    } else {
      switch (change.kind) {
        case 'A':
          applyArrayChange(arr[index], change.index, change.item);
          break;
        case 'D':
          arr = arrayRemove(arr, index);
          break;
        case 'E':
        case 'N':
          arr[index] = change.rhs;
          break;
      }
    }
    return arr;
  }

  function applyChange(target, source, change) {
    if (target && source && change && change.kind) {
      var it = target,
          i = -1,
          last = change.path ? change.path.length - 1 : 0;
      while (++i < last) {
        if (typeof it[change.path[i]] === 'undefined') {
          it[change.path[i]] = (typeof change.path[i] === 'number') ? [] : {};
        }
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          applyArrayChange(change.path ? it[change.path[i]] : it, change.index, change.item);
          break;
        case 'D':
          delete it[change.path[i]];
          break;
        case 'E':
        case 'N':
          it[change.path[i]] = change.rhs;
          break;
      }
    }
  }

  function revertArrayChange(arr, index, change) {
    if (change.path && change.path.length) {
      // the structure of the object at the index has changed...
      var it = arr[index],
          i, u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          revertArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          it[change.path[i]] = change.lhs;
          break;
        case 'E':
          it[change.path[i]] = change.lhs;
          break;
        case 'N':
          delete it[change.path[i]];
          break;
      }
    } else {
      // the array item is different...
      switch (change.kind) {
        case 'A':
          revertArrayChange(arr[index], change.index, change.item);
          break;
        case 'D':
          arr[index] = change.lhs;
          break;
        case 'E':
          arr[index] = change.lhs;
          break;
        case 'N':
          arr = arrayRemove(arr, index);
          break;
      }
    }
    return arr;
  }

  function revertChange(target, source, change) {
    if (target && source && change && change.kind) {
      var it = target,
          i, u;
      u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        if (typeof it[change.path[i]] === 'undefined') {
          it[change.path[i]] = {};
        }
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          // Array was modified...
          // it will be an array...
          revertArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          // Item was deleted...
          it[change.path[i]] = change.lhs;
          break;
        case 'E':
          // Item was edited...
          it[change.path[i]] = change.lhs;
          break;
        case 'N':
          // Item is new...
          delete it[change.path[i]];
          break;
      }
    }
  }

  function applyDiff(target, source, filter) {
    if (target && source) {
      var onChange = function(change) {
        if (!filter || filter(target, source, change)) {
          applyChange(target, source, change);
        }
      };
      deepDiff(target, source, onChange);
    }
  }

  Object.defineProperties(accumulateDiff, {

    diff: {
      value: accumulateDiff,
      enumerable: true
    },
    observableDiff: {
      value: deepDiff,
      enumerable: true
    },
    applyDiff: {
      value: applyDiff,
      enumerable: true
    },
    applyChange: {
      value: applyChange,
      enumerable: true
    },
    revertChange: {
      value: revertChange,
      enumerable: true
    },
    isConflict: {
      value: function() {
        return 'undefined' !== typeof conflict;
      },
      enumerable: true
    },
    noConflict: {
      value: function() {
        if (conflictResolution) {
          conflictResolution.forEach(function(it) {
            it();
          });
          conflictResolution = null;
        }
        return accumulateDiff;
      },
      enumerable: true
    }
  });

  return accumulateDiff;
}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.printBuffer = printBuffer;

var _helpers = __webpack_require__(6);

var _diff = __webpack_require__(25);

var _diff2 = _interopRequireDefault(_diff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Get log level string based on supplied params
 *
 * @param {string | function | object} level - console[level]
 * @param {object} action - selected action
 * @param {array} payload - selected payload
 * @param {string} type - log entry type
 *
 * @returns {string} level
 */
function getLogLevel(level, action, payload, type) {
  switch (typeof level === 'undefined' ? 'undefined' : _typeof(level)) {
    case 'object':
      return typeof level[type] === 'function' ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
    case 'function':
      return level(action);
    default:
      return level;
  }
}

function defaultTitleFormatter(options) {
  var timestamp = options.timestamp,
      duration = options.duration;


  return function (action, time, took) {
    var parts = ['action'];

    parts.push('%c' + String(action.type));
    if (timestamp) parts.push('%c@ ' + time);
    if (duration) parts.push('%c(in ' + took.toFixed(2) + ' ms)');

    return parts.join(' ');
  };
}

function printBuffer(buffer, options) {
  var logger = options.logger,
      actionTransformer = options.actionTransformer,
      _options$titleFormatt = options.titleFormatter,
      titleFormatter = _options$titleFormatt === undefined ? defaultTitleFormatter(options) : _options$titleFormatt,
      collapsed = options.collapsed,
      colors = options.colors,
      level = options.level,
      diff = options.diff;


  var isUsingDefaultFormatter = typeof options.titleFormatter === 'undefined';

  buffer.forEach(function (logEntry, key) {
    var started = logEntry.started,
        startedTime = logEntry.startedTime,
        action = logEntry.action,
        prevState = logEntry.prevState,
        error = logEntry.error;
    var took = logEntry.took,
        nextState = logEntry.nextState;

    var nextEntry = buffer[key + 1];

    if (nextEntry) {
      nextState = nextEntry.prevState;
      took = nextEntry.started - started;
    }

    // Message
    var formattedAction = actionTransformer(action);
    var isCollapsed = typeof collapsed === 'function' ? collapsed(function () {
      return nextState;
    }, action, logEntry) : collapsed;

    var formattedTime = (0, _helpers.formatTime)(startedTime);
    var titleCSS = colors.title ? 'color: ' + colors.title(formattedAction) + ';' : '';
    var headerCSS = ['color: gray; font-weight: lighter;'];
    headerCSS.push(titleCSS);
    if (options.timestamp) headerCSS.push('color: gray; font-weight: lighter;');
    if (options.duration) headerCSS.push('color: gray; font-weight: lighter;');
    var title = titleFormatter(formattedAction, formattedTime, took);

    // Render
    try {
      if (isCollapsed) {
        if (colors.title && isUsingDefaultFormatter) logger.groupCollapsed.apply(logger, ['%c ' + title].concat(headerCSS));else logger.groupCollapsed(title);
      } else {
        if (colors.title && isUsingDefaultFormatter) logger.group.apply(logger, ['%c ' + title].concat(headerCSS));else logger.group(title);
      }
    } catch (e) {
      logger.log(title);
    }

    var prevStateLevel = getLogLevel(level, formattedAction, [prevState], 'prevState');
    var actionLevel = getLogLevel(level, formattedAction, [formattedAction], 'action');
    var errorLevel = getLogLevel(level, formattedAction, [error, prevState], 'error');
    var nextStateLevel = getLogLevel(level, formattedAction, [nextState], 'nextState');

    if (prevStateLevel) {
      if (colors.prevState) logger[prevStateLevel]('%c prev state', 'color: ' + colors.prevState(prevState) + '; font-weight: bold', prevState);else logger[prevStateLevel]('prev state', prevState);
    }

    if (actionLevel) {
      if (colors.action) logger[actionLevel]('%c action    ', 'color: ' + colors.action(formattedAction) + '; font-weight: bold', formattedAction);else logger[actionLevel]('action    ', formattedAction);
    }

    if (error && errorLevel) {
      if (colors.error) logger[errorLevel]('%c error     ', 'color: ' + colors.error(error, prevState) + '; font-weight: bold;', error);else logger[errorLevel]('error     ', error);
    }

    if (nextStateLevel) {
      if (colors.nextState) logger[nextStateLevel]('%c next state', 'color: ' + colors.nextState(nextState) + '; font-weight: bold', nextState);else logger[nextStateLevel]('next state', nextState);
    }

    if (diff) {
      (0, _diff2.default)(prevState, nextState, logger, isCollapsed);
    }

    try {
      logger.groupEnd();
    } catch (e) {
      logger.log('\u2014\u2014 log end \u2014\u2014');
    }
  });
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  level: "log",
  logger: console,
  logErrors: true,
  collapsed: undefined,
  predicate: undefined,
  duration: false,
  timestamp: true,
  stateTransformer: function stateTransformer(state) {
    return state;
  },
  actionTransformer: function actionTransformer(action) {
    return action;
  },
  errorTransformer: function errorTransformer(error) {
    return error;
  },
  colors: {
    title: function title() {
      return "inherit";
    },
    prevState: function prevState() {
      return "#9E9E9E";
    },
    action: function action() {
      return "#03A9F4";
    },
    nextState: function nextState() {
      return "#4CAF50";
    },
    error: function error() {
      return "#F20404";
    }
  },
  diff: false,
  diffPredicate: undefined,

  // Deprecated options
  transformer: undefined
};
module.exports = exports["default"];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = diffLogger;

var _deepDiff = __webpack_require__(22);

var _deepDiff2 = _interopRequireDefault(_deepDiff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// https://github.com/flitbit/diff#differences
var dictionary = {
  'E': {
    color: '#2196F3',
    text: 'CHANGED:'
  },
  'N': {
    color: '#4CAF50',
    text: 'ADDED:'
  },
  'D': {
    color: '#F44336',
    text: 'DELETED:'
  },
  'A': {
    color: '#2196F3',
    text: 'ARRAY:'
  }
};

function style(kind) {
  return 'color: ' + dictionary[kind].color + '; font-weight: bold';
}

function render(diff) {
  var kind = diff.kind,
      path = diff.path,
      lhs = diff.lhs,
      rhs = diff.rhs,
      index = diff.index,
      item = diff.item;


  switch (kind) {
    case 'E':
      return [path.join('.'), lhs, '\u2192', rhs];
    case 'N':
      return [path.join('.'), rhs];
    case 'D':
      return [path.join('.')];
    case 'A':
      return [path.join('.') + '[' + index + ']', item];
    default:
      return [];
  }
}

function diffLogger(prevState, newState, logger, isCollapsed) {
  var diff = (0, _deepDiff2.default)(prevState, newState);

  try {
    if (isCollapsed) {
      logger.groupCollapsed('diff');
    } else {
      logger.group('diff');
    }
  } catch (e) {
    logger.log('diff');
  }

  if (diff) {
    diff.forEach(function (elem) {
      var kind = elem.kind;

      var output = render(elem);

      logger.log.apply(logger, ['%c ' + dictionary[kind].text, style(kind)].concat(_toConsumableArray(output)));
    });
  } else {
    logger.log('\u2014\u2014 no diff \u2014\u2014');
  }

  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('\u2014\u2014 diff end \u2014\u2014 ');
  }
}
module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = exports.createLogger = exports.defaults = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _core = __webpack_require__(23);

var _helpers = __webpack_require__(6);

var _defaults = __webpack_require__(24);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates logger with following options
 *
 * @namespace
 * @param {object} options - options for logger
 * @param {string | function | object} options.level - console[level]
 * @param {boolean} options.duration - print duration of each action?
 * @param {boolean} options.timestamp - print timestamp with each action?
 * @param {object} options.colors - custom colors
 * @param {object} options.logger - implementation of the `console` API
 * @param {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
 * @param {boolean} options.collapsed - is group collapsed?
 * @param {boolean} options.predicate - condition which resolves logger behavior
 * @param {function} options.stateTransformer - transform state before print
 * @param {function} options.actionTransformer - transform action before print
 * @param {function} options.errorTransformer - transform error before print
 *
 * @returns {function} logger middleware
 */
function createLogger() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var loggerOptions = _extends({}, _defaults2.default, options);

  var logger = loggerOptions.logger,
      stateTransformer = loggerOptions.stateTransformer,
      errorTransformer = loggerOptions.errorTransformer,
      predicate = loggerOptions.predicate,
      logErrors = loggerOptions.logErrors,
      diffPredicate = loggerOptions.diffPredicate;

  // Return if 'console' object is not defined

  if (typeof logger === 'undefined') {
    return function () {
      return function (next) {
        return function (action) {
          return next(action);
        };
      };
    };
  }

  // Detect if 'createLogger' was passed directly to 'applyMiddleware'.
  if (options.getState && options.dispatch) {
    // eslint-disable-next-line no-console
    console.error('[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from \'redux-logger\'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from \'redux-logger\'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n');

    return function () {
      return function (next) {
        return function (action) {
          return next(action);
        };
      };
    };
  }

  var logBuffer = [];

  return function (_ref) {
    var getState = _ref.getState;
    return function (next) {
      return function (action) {
        // Exit early if predicate function returns 'false'
        if (typeof predicate === 'function' && !predicate(getState, action)) {
          return next(action);
        }

        var logEntry = {};

        logBuffer.push(logEntry);

        logEntry.started = _helpers.timer.now();
        logEntry.startedTime = new Date();
        logEntry.prevState = stateTransformer(getState());
        logEntry.action = action;

        var returnedValue = void 0;
        if (logErrors) {
          try {
            returnedValue = next(action);
          } catch (e) {
            logEntry.error = errorTransformer(e);
          }
        } else {
          returnedValue = next(action);
        }

        logEntry.took = _helpers.timer.now() - logEntry.started;
        logEntry.nextState = stateTransformer(getState());

        var diff = loggerOptions.diff && typeof diffPredicate === 'function' ? diffPredicate(getState, action) : loggerOptions.diff;

        (0, _core.printBuffer)(logBuffer, _extends({}, loggerOptions, { diff: diff }));
        logBuffer.length = 0;

        if (logEntry.error) throw logEntry.error;
        return returnedValue;
      };
    };
  };
}

var defaultLogger = function defaultLogger() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      dispatch = _ref2.dispatch,
      getState = _ref2.getState;

  if (typeof dispatch === 'function' || typeof getState === 'function') {
    return createLogger()({ dispatch: dispatch, getState: getState });
  } else {
    // eslint-disable-next-line no-console
    console.error('\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from \'redux-logger\'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from \'redux-logger\'\n');
  }
};

exports.defaults = _defaults2.default;
exports.createLogger = createLogger;
exports.logger = defaultLogger;
exports.default = defaultLogger;

/***/ }),
/* 27 */
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
/* 28 */
/***/ (function(module, exports) {

module.exports = Qs;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = Redux;

/***/ })
/******/ ]);