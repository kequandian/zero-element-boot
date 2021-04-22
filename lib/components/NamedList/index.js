function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = require('react');

const NamedListSet = require("../list"); //export default function NamedList({ name, API, props, children, spin = '' }) {


export default function NamedList({
  xname,
  props,
  children,
  ...data
}) {
  const _List = NamedListSet[xname] || tips(xname); // function handleQuery(queryData) {
  //   return promiseAjax(API, queryData).then(response => {
  //     return formatData(response.data);
  //   });
  // }
  //return <NamedList {...props} onQuery={handleQuery} spin={spin}>


  return /*#__PURE__*/React.createElement(_List, _extends({}, props, data), children);
}

function tips(name) {
  return _ => `NamedList ${name} 未定义`;
}