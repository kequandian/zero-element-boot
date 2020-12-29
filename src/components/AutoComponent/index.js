const React = require('react');
const { useState, useEffect } = require('react');
const {NamedLayout, NamedGateway, NamedCart, NamedSeperator} = require('@/components');
const useLayout = require('@/hooks/useLayout');
const requireConfig = require('@/components/AutoX/requireConfig');

//change history
//CR.2020-12-29  handle AutoComponent children

//CR.2020-12-26 add cart for child
//  commit: 97c238df65da2381aa2e14ffd31ba2621028402e
//
//TODO, add seperator next
//TODO, support both named presenter and inner children

// const presenter = require('@/components/presenter');
// const allComponents = {
//   ...presenter,
// };

/**
 * 
 * @param {布局} layout 
 * @param {绑定数据} data
 */
module.exports = function ({layout = requireConfig(parent), allComponents={}, ...data}) {
  const parent = module.parents[0]; //get module name
  const [layoutRef, { getClassName }] = useLayout();

  const {name, props, container, children, cart, gateway} = layout || {};


  // restLayout means layout props
  // child iterator from children contains: [name, span, cart, gateway]
  return <div
    className={getClassName()}
  >
      <NamedLayout name={name} props={props} ref={layoutRef}>
        {children.map((child, i) => {
          const { presenter, span, gateway, cart } = child;
          const Presenter = allComponents[presenter] || tips(presenter);

          //get gateway name
          const gatewayName = gateway ? (typeof gateway === 'string' ? gateway : gateway.name) : 'Gateway' 
          const gatewayProps = gateway.props || {} 

          //get cart name
          const cartName = cart ? (typeof cart === 'string' ? cart : cart.name) : '' 
          const cartProps = cart? (cart.props || {}) : {}

          // each item has its Named Gateway
          return <NamedGateway key={i} name={gatewayName} {...gatewayProps} {...data} span={span}>
            {cart?
              <NamedCart key={i} name={cartName} {...cartProps} >
                <Presenter />
              </NamedCart>
            :
              <Presenter /> }
          </NamedGateway>
        })}
      </NamedLayout>
  </div>;
}

function tips(name) {
  return _ => `${name} 未定义`;
}
