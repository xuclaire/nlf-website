"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _navbar = _interopRequireDefault(require("./navbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Layout() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_navbar.default, null), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Outlet, null));
}

var _default = Layout;
exports.default = _default;