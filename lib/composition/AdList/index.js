function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { AutoLayout } from "../../export"; // import layout from './layout';
//加载yml文件

import layoutOfYML from 'js-yaml-loader!./layout.yml';

const {
  AdItem
} = require("./..");

export default function Index(props) {
  const {
    onItemClickHandle,
    data
  } = props;
  const layoutJsonPath = 'x/PublicLayoutDemo/layout.json'; //Cart HoverShadowCart

  const config = {
    items: data.length > 0 ? data : [],
    layout: layoutOfYML,
    localLayoutJsonPath: layoutJsonPath
  };

  const onClick = item => {
    console.log(item);
    onItemClickHandle();
  }; // console.log("解释 layout.yml = ", JSON.stringify(layoutOfYML, null, 2));


  console.log('layoutOfYML = ', layoutOfYML);
  return /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, {
    onItemClick: onClick
  }), /*#__PURE__*/React.createElement(AdItem, null));
}