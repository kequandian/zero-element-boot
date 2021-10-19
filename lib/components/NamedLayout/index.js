function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import NamedSeperator from "../NamedSeperator";

const DefaultLayoutSet = require("../config/NamedLayoutConfig").get(); // const DefaultLayoutSet = require('../layout');
// change history
// CR.2020-12-26 custom LayoutSet

/**
 * NameLayout [,NamedCart] 负责处理数据传递，具体的 Layout[Flexbox,...] 不负责处理数据传递
 * 区别于 NamedGateway 数据传递由具体的 Gateway 处理
 * @param {命名组件名称} name 
 * @param {命名组件自定义属性} props
 * @param {命名组件的 [name, props] 通过 layout 传递 } layout
 */


export default /*#__PURE__*/forwardRef(function NamedLayout({
  children,
  xname,
  props,
  layout = {
    xname,
    props
  },
  isLastItem,
  layoutSet,
  ...rest
}, ref) {
  // custom layoutSet first
  const LayoutSet = layoutSet || DefaultLayoutSet; // retrieve isLastItem for layout

  const isLastItemConfig = {
    isLastItem: isLastItem
  };
  const layoutName = typeof layout === 'string' ? layout : layout.xname;
  const Layout = LayoutSet[layoutName] || tips(layoutName);
  const seperatorName = layout.props ? layout.props.seperator && typeof layout.props.seperator === 'object' ? layout.props.seperator.name : layout.props.seperator : null;
  const Seperator = seperatorName ? NamedSeperator({
    name: seperatorName
  }) : null; // just forward ref to the specified layout (e.g. Flexbox)

  return /*#__PURE__*/React.createElement(Layout, _extends({}, layout.props, isLastItemConfig, {
    Seperator: Seperator,
    ref: ref
  }), React.Children.toArray(children).map(child => {
    let element = /*#__PURE__*/React.cloneElement(child, { ...rest
    });
    return element;
  }));
});

function tips(name) {
  return _ => `Layout ${name} 未定义`;
}