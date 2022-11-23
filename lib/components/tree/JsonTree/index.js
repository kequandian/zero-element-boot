function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import TreeItem from "./TreeItem";
import TreeArrayItem from "./TreeArrayItem";
import TreeObjectItem from "./TreeObjectItem";

/**
 * 
 * @param {data } data  json
 * 
 */

export default function Tree(props) {
  const keys = Object.keys(props);

  // console.log('keys ==', keys)
  return /*#__PURE__*/React.createElement(React.Fragment, null, keys && keys.length > 0 ? keys && keys.map((key, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, isValueObject(props, key) ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TreeObjectItem, _extends({
    keyName: key
  }, props))) : isValueArray(props, key) ? /*#__PURE__*/React.createElement(TreeArrayItem, _extends({
    keyName: key
  }, props)) : /*#__PURE__*/React.createElement(TreeItem, _extends({
    keyName: key
  }, props)))) : /*#__PURE__*/React.createElement(React.Fragment, null));
}

// 获取Value值
function getValue(props, key) {
  return props[key];
}

// 判断value是否为Object
function isValueObject(props, key) {
  const obj = props[key];
  return obj && typeof obj == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]";
}

// 判断value是否为Array
function isValueArray(props, key) {
  const obj = props[key];
  return obj && Array.isArray(obj);
}