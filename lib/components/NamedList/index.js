function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = require('react');

const promiseAjax = require("../../utils/request");

const NamedListSet = require("./export");

const formatData = require("./formatData");

export default function NamedList({
  name,
  API,
  props,
  children
}) {
  const NamedList = NamedListSet[name] || tips(name);

  function handleQuery(queryData) {
    return promiseAjax(API, queryData).then(response => {
      return formatData(response.data);
    });
  }

  return /*#__PURE__*/React.createElement(NamedList, _extends({}, props, {
    onQuery: handleQuery
  }), children);
}

function tips(name) {
  return _ => `NamedList ${name} 未定义`;
}