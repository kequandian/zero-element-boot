function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const React = require('react');
import { NextIndicator } from "./..";
// const DefaultContainerSet = require('../container');

import { get as DefaultListSet } from "../config/NamedListConfig";
import { get as DefaultContainerSet } from "../config/NamedContainerConfig";
export default function NamedContainer({
  children,
  xname,
  props,
  container = {
    xname,
    props
  },
  containerSet,
  dataSource,
  tag,
  useReplacing,
  ...rest
}) {
  tagged(tag, rest, containerName);
  const data = dataSource || rest || {};
  const replacedData = useReplacing ? useReplacing(data) : data;
  const newDefaultContainerSet = {
    ...DefaultContainerSet(),
    ...DefaultListSet()
  };
  const _ContainerSet = containerSet ? containerSet : newDefaultContainerSet;
  const containerName = typeof container === 'string' ? container : container.xname;
  const NamedContainer = _ContainerSet[containerName] || tips(containerName);
  return /*#__PURE__*/React.createElement(NamedContainer, _extends({}, container.props, replacedData), children);
}
function tips(name) {
  return _ => `NamedContainer ${name} 未定义`;
}
function tagged(tag, data, containerName) {
  if (tag) {
    console.log(`TAG-NamedContainer-${tag}-containerName-${containerName}`);
  }
  if (data) {
    console.log('userdata=', data.userdata ? data.userdata : data);
  }
}