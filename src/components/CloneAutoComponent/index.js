const React = require('react');
// const { useState, useEffect } = require('react');
const { NamedContainer, NamedLayout, NamedGateway, NamedCart } = require('@/components');
// const useLayout = require('@/hooks/useLayout');
const requireConfig = require('@/components/AutoX/requireConfig');
const namedPresenterGet = require('@/components/config/NamedPresenterConfig').get();

const { Container } = require('@/components/container');

//change history
//CR.2020-12-29  handle AutoComponent, add Container

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
 * 自动构建，没有Children
 * @param {布局} layout 
 * @param {绑定数据} data
 */
module.exports = function ({ children, layout = requireConfig(parent), allComponents, ...data }) {
  const parent = module.parents[0]; //get module name
  // const [layoutRef, { getClassName }] = useLayout();

  const componentsJson = allComponents ? allComponents : namedPresenterGet;  //

  const { xname, props, container, children: layoutChildren, gateway, cart, presenter } = layout || {};
  const defaultGateway = gateway
  const defaultCart = cart

  const _cart = (cart && typeof cart === 'string') ? { xname: cart } : cart

  const defaultPresenter = presenter

  //handle container
  const _Container = container ? NamedContainer : Container
  const _container = ((typeof container === 'string') ? { xname: container } : container) || {}

  // restLayout means layout props
  // child iterator from children contains: [name, span, cart, gateway]
  // return <div
  //   className={getClassName()}
  // >
  // <NamedLayout xname={xname} props={props} ref={layoutRef}>

  /** 
  * 2021-5-13 移除 NamedLayout NamedCart，有需要在 index copy.js 取回
  */
  return <_Container {..._container} {...data}>
    {cart ? (
      <NamedLayout xname={xname} props={props} >
        {layoutChildren ? layoutChildren.map((child, i) => {
          const { presenter, span, gateway, cart: childCart } = child;
          const _presenter = presenter ? presenter : defaultPresenter
          const Presenter = _presenter ? componentsJson[_presenter] || tips(_presenter) : null;

          const _gateway = gateway ? ((typeof gateway === 'string') ? { xname: gateway } : gateway) : defaultGateway
          const _cart = cart ? ((typeof cart === 'string') ? { xname: cart } : cart) : defaultCart

          // each item has its Named Gateway
          return <NamedGateway {..._gateway} key={i} span={span} >
            {cart ?
              <NamedCart key={i} {..._cart} >
                {presenter ?
                  <Presenter />
                  :
                  React.Children.toArray(children)
                }
              </NamedCart>
              :
              (presenter ?
                <Presenter />
                :
                React.Children.toArray(children)
              )
            }
          </NamedGateway>

        }) : (
            React.Children.map(children, (child, i) => {
              return cart ?
                <NamedCart key={i} {..._cart} >
                  {child}
                </NamedCart>
                :
                (
                  child
                )
            })
          )}
      </NamedLayout>
    ) : (
        <NamedLayout xname={xname} props={props} >
          {layoutChildren ? layoutChildren.map((child, i) => {
            const { presenter, span, gateway, cart: childCart } = child;
            const _presenter = presenter ? presenter : defaultPresenter
            const Presenter = _presenter ? componentsJson[_presenter] || tips(_presenter) : null;

            const _gateway = gateway ? ((typeof gateway === 'string') ? { xname: gateway } : gateway) : defaultGateway
            const _cart = cart ? ((typeof cart === 'string') ? { xname: cart } : cart) : defaultCart

            // each item has its Named Gateway
            return <NamedGateway {..._gateway} key={i} span={span} >
              {cart ?
                <NamedCart key={i} {..._cart} >
                  {presenter ?
                    <Presenter />
                    :
                    React.Children.toArray(children)
                  }
                </NamedCart>
                :
                (presenter ?
                  <Presenter />
                  :
                  React.Children.toArray(children)
                )
              }
            </NamedGateway>

          }) : (

              React.Children.map(children, (child, i) => {
                return cart ?
                  <NamedCart key={i} {..._cart} >
                    {child}
                  </NamedCart>
                  :
                  (
                    child
                  )
              })
            )}
        </NamedLayout>
      )}
  </_Container>
  // </div>;
}

function tips(name) {
  return _ => `${name} 未定义`;
}
