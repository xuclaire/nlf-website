"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./index.css");

var _reactRouterDom = require("react-router-dom");

var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals"));

var _home = _interopRequireDefault(require("./pages/home"));

var _about_us = _interopRequireDefault(require("./pages/about_us"));

var _house_church = _interopRequireDefault(require("./pages/house_church"));

var _events = _interopRequireDefault(require("./pages/events"));

var _classes = _interopRequireDefault(require("./pages/classes"));

var _faq = _interopRequireDefault(require("./pages/faq"));

var _get_connected = _interopRequireDefault(require("./pages/get_connected"));

var _navbar = _interopRequireDefault(require("./pages/navbar"));

var _footer = _interopRequireDefault(require("./pages/footer/footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/jsx-filename-extension */
function App() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_navbar.default, null), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_home.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/about",
    element: /*#__PURE__*/_react.default.createElement(_about_us.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/house_church",
    element: /*#__PURE__*/_react.default.createElement(_house_church.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/events",
    element: /*#__PURE__*/_react.default.createElement(_events.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/classes",
    element: /*#__PURE__*/_react.default.createElement(_classes.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/faq",
    element: /*#__PURE__*/_react.default.createElement(_faq.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/get_connected",
    element: /*#__PURE__*/_react.default.createElement(_get_connected.default, null)
  }))), /*#__PURE__*/_react.default.createElement(_footer.default, null));
}

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(App, null), document.getElementById("root")); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


(0, _reportWebVitals.default)();