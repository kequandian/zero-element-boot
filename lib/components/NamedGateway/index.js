function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = require('react');

const DefaultGatewaySet = require("../gateway");
/**
 * @param {可能是一个字符串名称} gateway
 * @param {field, filter, converter} props 
 */


module.exports = function NamedGateway({
  children,
  xname,
  props,
  gateway = {
    xname,
    props
  },
  gatewaySet,
  ...rest
}) {
  const GatewaySet = gatewaySet || DefaultGatewaySet;
  const gatewayName = typeof gateway === 'string' ? gateway : gateway.xname;
  const Gateway = GatewaySet[gatewayName] || tips(gatewayName); // let Gateway, ... to handle data, not by NamedGateway

  return /*#__PURE__*/React.createElement(Gateway, _extends({}, gateway.props, rest), children);
};

function tips(name) {
  return _ => `NamedGateway ${name} 未定义`;
}