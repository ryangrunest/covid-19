webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _countries_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../countries.js */ "./countries.js");
/* harmony import */ var _apikey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apikey */ "./apikey.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "/Users/ryangrunest/Developer/CurrentProjects/covid-19/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Index = function Index(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("Afghanistan"),
      selectedCountry = _useState[0],
      setSelectedCountry = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      confirmed = _useState2[0],
      setConfirmed = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      recovered = _useState3[0],
      setRecovered = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      deaths = _useState4[0],
      setDeaths = _useState4[1];

  function handleChange(event, index, value) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleChange$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setSelectedCountry(event.target.value);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }

  isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://httpbin.org/post", {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (res) {
    return res.json();
  }).then(function (json) {
    return console.log(json);
  });

  function updateState(country) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function updateState$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://covid-19-data.p.rapidapi.com/country", {
              method: "GET"
            });

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("select", {
    onChange: handleChange,
    name: "countries",
    className: "countries-dropdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, _countries_js__WEBPACK_IMPORTED_MODULE_2__["countries"].map(function (country) {
    return __jsx("option", {
      key: country,
      value: country,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, country);
  })), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, _apikey__WEBPACK_IMPORTED_MODULE_3__["apiKey"]));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.bbf1f6a3d1e59a3fdd8c.hot-update.js.map