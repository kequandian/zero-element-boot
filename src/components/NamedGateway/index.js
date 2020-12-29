const React = require('react');
const DefaultGatewaySet = require('../gateway');

/**
 * @param {可能是一个字符串名称} gateway
 * @param {field, filter, converter} props 
 */
module.exports = function NamedGateway({children, xname, props, gateway={xname, props}, gatewaySet, ...rest }) {

  const GatewaySet = gatewaySet || DefaultGatewaySet

  const gatewayName = (typeof gateway === 'string')? gateway : gateway.xname
  const Gateway =  GatewaySet[gatewayName] || tips(gatewayName);

  // let Gateway, ... to handle data, not by NamedGateway
  return <Gateway {...gateway.props} {...rest} >
    {children}
  </Gateway>
}

function tips(name) {
  return _ => `NamedGateway ${name} 未定义`;
}
