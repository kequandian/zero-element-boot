const { bind } = require('lodash');
const React = require('react');
const DefaultGatewaySet = require('../gateway');
const { default: NextIndicator } = require('../NextIndicator');

/**
 * @param {可能是一个字符串名称} gateway
 * @param {field, filter, converter} props 
 */
module.exports = function NamedGateway({children, xname, props, binding={}, chain={}, gateway={xname, props}, gatewaySet, ...rest }) {

  const GatewaySet = gatewaySet || DefaultGatewaySet

  const t_binding = Object.keys(binding).length==0? undefined : binding
  const t_chain = Object.keys(chain).length==0? undefined : chain
  
  const gatewayName = (t_binding || t_chain) ? (t_binding?'Binding':"Chain") : ( (typeof gateway === 'string')? gateway : gateway.xname )
  const Gateway =  gatewayName ? (GatewaySet[gatewayName]||tips(gatewayName)) : NextIndicator;

  // __gateway means gateway props
  const ____gateway = (t_binding ? {binding: binding} : (t_chain? {chain: chain} : undefined)) || ((gateway && gateway.props) ? gateway.props : undefined ) || {}
  // if(gateway && gateway.props && Array.isArray(gateway.props)){
  //   gateway.props = {chain: gateway.props}
  // }

  // let Gateway, ... to handle data, not by NamedGateway
  return <Gateway {...____gateway} {...rest} >
    {children}
  </Gateway>
}

function tips(name) {
  return _ => `NamedGateway ${name} 未定义`;
}
