const React = require('react');

const {
  forwardRef
} = require('react');

const useLayout = require("../hooks/useLayout"); // const DefaultCartSet = require('../cart');


import { get as DefaultCartSet } from "../config/NamedCartConfig";
/**
 * NamedCart [,NamedLayout] 负责处理数据传递，具体的Cart[ItemCart, ...] 不负责处理数据传递
 * 区别于 NamedGateway 数据传递由具体的 Gateway 处理
 */

export default function NamedCart({
  children,
  xname,
  indicator,
  props,
  cart = {
    xname,
    props
  },
  cartSet,
  ...rest
}) {
  const _CartSet = cartSet ? cartSet : DefaultCartSet();

  const cartName = typeof cart === 'string' ? cart : cart.xname;

  const _Cart = _CartSet[cartName] || tips(cartName); //2021-03-27 新增 indicator 模块


  const _Indicator = _CartSet[indicator];
  return /*#__PURE__*/React.createElement(React.Fragment, null, indicator ? /*#__PURE__*/React.createElement(_Indicator, rest, /*#__PURE__*/React.createElement(_Cart, cart.props, React.Children.toArray(children).map(child => {
    return React.cloneElement(child, { ...rest
    });
  }))) : /*#__PURE__*/React.createElement(_Cart, cart.props, React.Children.toArray(children).map(child => {
    return React.cloneElement(child, { ...rest
    });
  })));
}

function tips(name) {
  return _ => `NamedCart ${name} 未定义`;
}