"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@mui/material/styles");

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _Grid = _interopRequireDefault(require("@mui/material/Grid"));

var _ButtonBase = _interopRequireDefault(require("@mui/material/ButtonBase"));

var _Stack = _interopRequireDefault(require("@mui/material/Stack"));

var _Link = _interopRequireDefault(require("@mui/material/Link"));

var _Button = _interopRequireDefault(require("@mui/material/Button"));

var _logo = _interopRequireDefault(require("../../images/logo.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const theme_style = createTheme({
  typography: {
    fontFamily: "Palatino"
  }
});
const Img = (0, _styles.styled)("img")({
  margin: "auto",
  display: "block",
  maxWidth: "90%",
  maxHeight: "90%"
}); // const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: 1,
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
// const Text = () => ({
//   color: '#fff',
//   marginBottom: 1,
//   fontSize: 14,
//   fontFamily: 'Palatino',
// });

function Footer2() {
  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      display: "flex",
      width: "100%",
      bgcolor: "#2F353F",
      bottom: 0,
      position: "absolute",
      flexGrow: 1,
      height: 200,
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: 10
    }
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 2
  }, /*#__PURE__*/_react.default.createElement(_ButtonBase.default, {
    sx: {
      width: 128,
      height: 128
    }
  }, /*#__PURE__*/_react.default.createElement(Img, {
    alt: "nlf college logo",
    src: _logo.default
  }))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 3
  }, /*#__PURE__*/_react.default.createElement("p", null, "7777 Fairbanks North Houston Rd"), /*#__PURE__*/_react.default.createElement("p", null, "Houston, TX 77040")), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 2
  }, /*#__PURE__*/_react.default.createElement(_Stack.default, {
    spacing: 2
  }, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "#top",
    underline: "hover"
  }, "Home"), /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "#top",
    underline: "hover"
  }, "What We Do"), /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "#top",
    underline: "hover"
  }, "Housechurch"))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 2
  }, /*#__PURE__*/_react.default.createElement(_Stack.default, {
    spacing: 2
  }, /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "#top",
    underline: "hover"
  }, "Events"), /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "#top",
    underline: "hover"
  }, "Classes"), /*#__PURE__*/_react.default.createElement(_Link.default, {
    href: "#top",
    underline: "hover"
  }, "FAQ"))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 2
  }, /*#__PURE__*/_react.default.createElement(_Stack.default, {
    spacing: 2
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    href: "#top",
    underline: "hover"
  }, "Get Connected")))));
}

var _default = Footer2;
exports.default = _default;