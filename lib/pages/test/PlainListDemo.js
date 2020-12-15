import React from 'react';
import PlainList from "../../components/NamedList/PlainList";
import NamedLayout from "../../components/NamedLayout";
import NamedCart from "../../components/NamedCart";

const {
  CartItem
} = require("../../components/Composition");

export default function PlainListDemo(props) {
  /**
   * cart 
   * name: '', ( Cart, HoverShadowCart)
   */
  const config = {
    items: [{
      icon: '',
      title: 'title111',
      subTitle: 'subTitle111'
    }, {
      icon: '',
      title: 'title222',
      subTitle: 'subTitle222'
    }, {
      icon: '',
      title: 'title333',
      subTitle: 'subTitle333'
    }, {
      icon: '',
      title: 'title444',
      subTitle: 'subTitle444'
    }],
    layout: {
      name: 'Flexbox',
      props: {
        align: 'start',
        direction: 'row'
      }
    },
    cart: {
      name: 'HoverShadowCart',
      props: {}
    }
  };
  return /*#__PURE__*/React.createElement(PlainList, config, /*#__PURE__*/React.createElement(NamedLayout, null, /*#__PURE__*/React.createElement(NamedCart, null, /*#__PURE__*/React.createElement(CartItem, null))));
}