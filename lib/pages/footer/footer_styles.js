"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.Row = exports.FooterLink = exports.Container2 = exports.Container = exports.Column1 = exports.Column = exports.Button = exports.Box = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Box = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\npadding: 30px 10px;\nbackground: #2F353F;\nposition: absolute;\nbottom: 0;\nwidth: 100%;\n\n@media (max-width: 1000px) {\npadding: 30px 10px;\n}\n"])));

exports.Box = Box;

const Container = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\ndisplay: flex;\nflex-direction: column;\njustify-content: end;\nmax-width: 1000px;\nmargin: 0 20px;\n"])));

exports.Container = Container;

const Container2 = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\ndisplay: flex;\nflex-direction: row;\nmax-width: 1000px;\n"])));

exports.Container2 = Container2;

const Column = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\ntext-align: left;\nmargin-left: 60px;\n"])));

exports.Column = Column;

const Column1 = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\ndisplay: grid;\nalign-content: center;\nmargin-left: 30px;\n"])));

exports.Column1 = Column1;

const Row = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\ndisplay: grid;\ngrid-template-columns: repeat(3,\n1fr);\ngrid-gap: 20px;\n\n@media (max-width: 20px) {\ngrid-template-columns: repeat(3,\n1fr);\n}\n"])));

exports.Row = Row;

const FooterLink = _styledComponents.default.a(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\ncolor: #fff;\nmargin-bottom: 5px;\nfont-size: 14px;\nfont-family: Palatino;\ntext-decoration: none;\n\n&:hover {\ncolor: white;\ntext-decoration: underline;\ntransition: 200ms ease-in;\n}\n"])));

exports.FooterLink = FooterLink;

const Text = _styledComponents.default.p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\ncolor: #fff;\nmargin-bottom: 1px;\nfont-size: 14px;\nfont-family: Palatino;\n"])));

exports.Text = Text;

const Button = _styledComponents.default.button(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  border: 2px solid #F09C78;\n  background: #F09C78;\n  font-family: Palatino;\n  font-size: 20px;\n  white-space: nowrap;\n  padding: 8px;  \n"])));

exports.Button = Button;