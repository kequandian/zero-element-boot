const React = require('react');
const { useState, useEffect } = require('react');
const {NamedLayout, NamedGateway, NamedCart, NamedSeperator} = require('@/components');
const {Gateway} = require('@/components/gateway');
const useLayout = require('@/hooks/useLayout');
const requireConfig = require('@/components/AutoX/requireConfig');

// const presenter = require('@/components/presenter');
// const allComponents = {
//   ...presenter,
// };

module.exports = function (props) {
  const parent = module.parents[0]; //get module name
  const { config = requireConfig(parent), allComponents={} } = props;
  const [layoutRef, { getClassName }] = useLayout();

  // get layout only 
  const { layout, ...rest } = config || {}; 
  const { children, ...restLayout } = layout || {};

  // restLayout means layout props
  // child iterator from children contains: [name, span, width, gateway, [,seperator, cart]]
  return <div
    className={getClassName()}
  >
      <NamedLayout {...restLayout} ref={layoutRef}>
        {children.map((child, i) => {
          const { name, span, width, gateway } = child;
          const C = allComponents[name] || tips(name);

          //get gateway name
          const gatewayName = gateway ? (typeof gateway === 'string' ? gateway : gateway.name) : 'Gateway' 
          const gatewayProps = gateway.props || {} 

          // each item has its Named Gateway
          return <NamedGateway key={i} name={gatewayName} {...gatewayProps} {...rest} span={span}>
               <C name={name} />
          </NamedGateway>
        })}
      </NamedLayout>
  </div>;
}

function tips(name) {
  return _ => `${name} 未定义`;
}