function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = require('react'); // const { useState, useEffect } = require('react');


const {
  NamedContainer,
  NamedLayout,
  NamedGateway,
  NamedCart
} = require("./.."); // const useLayout = require('@/hooks/useLayout');


const requireConfig = require("../AutoX/requireConfig");

const namedPresenterGet = require("../config/NamedPresenterConfig").get();

const {
  Container
} = require("../container"); //change history
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


module.exports = function ({
  children,
  layout = requireConfig(parent),
  allComponents,
  ...data
}) {
  const parent = module.parents[0]; //get module name
  // const [layoutRef, { getClassName }] = useLayout();

  const componentsJson = allComponents ? allComponents : namedPresenterGet; //

  const {
    xname,
    props,
    container,
    children: layoutChildren,
    gateway,
    cart,
    presenter
  } = layout || {};
  const defaultGateway = gateway;
  const defaultCart = cart;

  const _cart = cart && typeof cart === 'string' ? {
    xname: cart
  } : cart;

  const defaultPresenter = presenter; //handle container

  const _Container = container ? NamedContainer : Container;

  const _container = (typeof container === 'string' ? {
    xname: container
  } : container) || {}; // restLayout means layout props
  // child iterator from children contains: [name, span, cart, gateway]
  // return <div
  //   className={getClassName()}
  // >
  // <NamedLayout xname={xname} props={props} ref={layoutRef}>

  /** 
  * 2021-5-13 移除 NamedLayout NamedCart，有需要在 index copy.js 取回
  */


  return /*#__PURE__*/React.createElement(_Container, _extends({}, _container, data), cart ? /*#__PURE__*/React.createElement(NamedLayout, {
    xname: xname,
    props: props
  }, layoutChildren ? layoutChildren.map((child, i) => {
    const {
      presenter,
      span,
      gateway,
      cart: childCart
    } = child;

    const _presenter = presenter ? presenter : defaultPresenter;

    const Presenter = _presenter ? componentsJson[_presenter] || tips(_presenter) : null;

    const _gateway = gateway ? typeof gateway === 'string' ? {
      xname: gateway
    } : gateway : defaultGateway;

    const _cart = cart ? typeof cart === 'string' ? {
      xname: cart
    } : cart : defaultCart; // each item has its Named Gateway


    return /*#__PURE__*/React.createElement(NamedGateway, _extends({}, _gateway, {
      key: i,
      span: span
    }), cart ? /*#__PURE__*/React.createElement(NamedCart, _extends({
      key: i
    }, _cart), presenter ? /*#__PURE__*/React.createElement(Presenter, null) : React.Children.toArray(children)) : presenter ? /*#__PURE__*/React.createElement(Presenter, null) : React.Children.toArray(children));
  }) : React.Children.map(children, (child, i) => {
    return cart ? /*#__PURE__*/React.createElement(NamedCart, _extends({
      key: i
    }, _cart), child) : child;
  })) : /*#__PURE__*/React.createElement(NamedLayout, {
    xname: xname,
    props: props
  }, layoutChildren ? layoutChildren.map((child, i) => {
    const {
      presenter,
      span,
      gateway,
      cart: childCart
    } = child;

    const _presenter = presenter ? presenter : defaultPresenter;

    const Presenter = _presenter ? componentsJson[_presenter] || tips(_presenter) : null;

    const _gateway = gateway ? typeof gateway === 'string' ? {
      xname: gateway
    } : gateway : defaultGateway;

    const _cart = cart ? typeof cart === 'string' ? {
      xname: cart
    } : cart : defaultCart; // each item has its Named Gateway


    return /*#__PURE__*/React.createElement(NamedGateway, _extends({}, _gateway, {
      key: i,
      span: span
    }), cart ? /*#__PURE__*/React.createElement(NamedCart, _extends({
      key: i
    }, _cart), presenter ? /*#__PURE__*/React.createElement(Presenter, null) : React.Children.toArray(children)) : presenter ? /*#__PURE__*/React.createElement(Presenter, null) : React.Children.toArray(children));
  }) : React.Children.map(children, (child, i) => {
    return cart ? /*#__PURE__*/React.createElement(NamedCart, _extends({
      key: i
    }, _cart), child) : child;
  }))); // </div>;
};

function tips(name) {
  return _ => `${name} 未定义`;
}