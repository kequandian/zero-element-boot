function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = require('react');

const DefaultContainerSet = require("../container");

export default function NamedContainer({
  children,
  xname,
  props,
  container = {
    xname,
    props
  },
  containerSet,
  ...data
}) {
  const _ContainerSet = containerSet ? containerSet : DefaultContainerSet;

  const containerName = typeof container === 'string' ? container : container.xname;
  const NamedContainer = _ContainerSet[containerName] || tips(containerName);
  return /*#__PURE__*/React.createElement(NamedContainer, _extends({}, container.props, data), children);
}

function tips(name) {
  return _ => `NamedContainer ${name} 未定义`;
}