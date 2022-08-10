"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _logo = _interopRequireDefault(require("../../images/logo.svg"));

var _footer_styles = require("./footer_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Footer() {
  return /*#__PURE__*/_react.default.createElement(_footer_styles.Box, null, /*#__PURE__*/_react.default.createElement(_footer_styles.Container2, null, /*#__PURE__*/_react.default.createElement(_footer_styles.Column1, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _logo.default,
    height: 55,
    alt: "Logo"
  })), /*#__PURE__*/_react.default.createElement(_footer_styles.Column, null, /*#__PURE__*/_react.default.createElement(_footer_styles.Text, null, "7777 Fairbanks North Houston Rd"), /*#__PURE__*/_react.default.createElement(_footer_styles.Text, null, "Houston, TX 77040"), /*#__PURE__*/_react.default.createElement(_footer_styles.Text, null, "Phone: 713.896.7755")), /*#__PURE__*/_react.default.createElement(_footer_styles.Container, null, /*#__PURE__*/_react.default.createElement(_footer_styles.Row, null, /*#__PURE__*/_react.default.createElement(_footer_styles.Column, null, /*#__PURE__*/_react.default.createElement(_footer_styles.FooterLink, {
    href: "#"
  }, "Home"), /*#__PURE__*/_react.default.createElement(_footer_styles.FooterLink, {
    href: "#"
  }, "What We Do"), /*#__PURE__*/_react.default.createElement(_footer_styles.FooterLink, {
    href: "#"
  }, "House Church")), /*#__PURE__*/_react.default.createElement(_footer_styles.Column, null, /*#__PURE__*/_react.default.createElement(_footer_styles.FooterLink, {
    href: "#"
  }, "Events"), /*#__PURE__*/_react.default.createElement(_footer_styles.FooterLink, {
    href: "#"
  }, "Classes"), /*#__PURE__*/_react.default.createElement(_footer_styles.FooterLink, {
    href: "#"
  }, "FAQ")), /*#__PURE__*/_react.default.createElement(_footer_styles.Column, null, /*#__PURE__*/_react.default.createElement(_footer_styles.Button, null, "Get Connected"))))));
}

var _default = Footer;
exports.default = _default;