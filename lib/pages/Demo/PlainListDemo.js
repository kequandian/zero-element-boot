function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { NamedList, NamedLayout, NamedCart } from "../../components";

const {
  CartItem
} = require("../../composition");

export default function PlainListDemo(props) {
  /**
   * cart 
   * name: '', ( Cart, HoverShadowCart, HightlightCart)
   */
  const config = {
    items: [{
      icon: 'https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png',
      title: 'title111',
      subTitle: 'subTitle111'
    }, {
      icon: 'https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png',
      title: 'title222',
      subTitle: 'subTitle222'
    }, {
      icon: 'https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png',
      title: 'title333',
      subTitle: 'subTitle333'
    }, {
      icon: 'https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png',
      title: 'title444',
      subTitle: 'subTitle444'
    }]
  };
  return /*#__PURE__*/React.createElement(NamedList, _extends({
    name: "PlainList"
  }, config), /*#__PURE__*/React.createElement(NamedLayout, {
    xname: "Flexbox",
    props: {
      align: 'start',
      direction: 'row'
    }
  }, /*#__PURE__*/React.createElement(NamedCart, {
    xname: "HoverShadowCart"
  }, /*#__PURE__*/React.createElement(CartItem, null))));
}