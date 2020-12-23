const React = require('react');
const GatewaySet = require('../gateway');

export default function NamedGateway({ name, props, children }) {
  const NamedGateway = GatewaySet[name] || tips(name);

  return <NamedGateway {...props}>
    {children}
  </NamedGateway>
}

function tips(name) {
  return _ => `NamedGateway ${name} 未定义`;
}