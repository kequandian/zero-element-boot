const { bind } = require('lodash');
const React = require('react');
const DefaultGatewaySet = require('../gateway');

/**
 * @param {可能是一个字符串名称} gateway
 * @param {field, filter, converter} props 
 */
module.exports = function NamedGateway({children, xname, props, binding, gateway={xname, props}, gatewaySet, ...rest }) {

  const GatewaySet = gatewaySet || DefaultGatewaySet

  const gatewayName = binding ? 'Binding' : ( (typeof gateway === 'string')? gateway : gateway.xname )
  const Gateway =  GatewaySet[gatewayName] || tips(gatewayName);

  // __gateway means gateway props
  const ____gateway = (binding ? {binding: binding} : undefined) || ((gateway && gateway.props) ? gateway.props : undefined ) || undefined

  // containue process gateway props for gateway chain
  const __gateway = ((____gateway && Array.isArray(____gateway)) ? {chain: ____gateway} : ____gateway) || {}
  // if(gateway && gateway.props && Array.isArray(gateway.props)){
  //   gateway.props = {chain: gateway.props}
  // }
  

  // let Gateway, ... to handle data, not by NamedGateway
  return <Gateway {...__gateway} {...rest} >
    {children}
  </Gateway>
}

function tips(name) {
  return _ => `NamedGateway ${name} 未定义`;
}
