const React = require('react');
const GatewaySet = require('../gateway');

/**
 * @param {可能是一个字符串名称} gateway
 * @param {field, filter, converter} props 
 */
export default function NamedGateway({children, name, props, gateway={name, props}, ...rest }) {
  //const {field, filter, converter } = props
  
  const gatewayName = (typeof gateway === 'string')? gateway : gateway.name
  
  const NamedGateway = GatewaySet[gatewayName] || tips(gatewayName);

  // let Gateway, ... to handle data, not by NamedGateway
  return <NamedGateway {...gateway.props} {...rest} >
    {children}
  </NamedGateway>
}

function tips(name) {
  return _ => `NamedGateway ${name} 未定义`;
}
