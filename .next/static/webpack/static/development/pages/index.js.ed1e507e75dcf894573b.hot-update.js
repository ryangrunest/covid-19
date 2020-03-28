webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _countries_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../countries.js */ "./countries.js");
/* harmony import */ var _apikey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apikey */ "./apikey.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/ryangrunest/Developer/CurrentProjects/covid-19/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Index = function Index(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("italy"),
      selectedCountry = _useState[0],
      setSelectedCountry = _useState[1];

  var handleChange = function handleChange(event, index, value) {
    console.log(value);
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("select", {
    onChange: _this.handleChange,
    name: "countries",
    className: "countries-dropdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, _countries_js__WEBPACK_IMPORTED_MODULE_1__["countries"].map(function (country) {
    return __jsx("option", {
      key: country,
      value: country,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, country);
  })), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, _apikey__WEBPACK_IMPORTED_MODULE_2__["apiKey"]));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.ed1e507e75dcf894573b.hot-update.js.map