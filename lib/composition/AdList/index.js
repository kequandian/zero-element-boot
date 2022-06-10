function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { AutoLayout } from "../../components";
import layout from "./layout"; //加载yml文件

import layoutOfYML from 'js-yaml-loader!./layout.yml';

const {
  AdItem
} = require("./..");

export default function Index(props) {
  const {
    data = [],
    onItemClick
  } = props;
  let layoutData = ''; // /x/PublicLayoutDemo/layout.json

  const layoutJsonPath = ''; //local layout json

  const localLayoutJson = layout;

  if (layoutJsonPath) {
    layoutData = {
      path: layoutJsonPath
    };
  } else {
    layoutData = localLayoutJson;
  } //Cart HoverShadowCart


  const config = {
    items: data.length > 0 ? data : [],
    layout: layoutData
  }; // console.log("解释 layout.yml = ", JSON.stringify(layoutOfYML, null, 2));
  // console.log('layoutOfYML = ', layoutOfYML) 

  return /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, {
    onItemClick: onItemClick
  }), /*#__PURE__*/React.createElement(AdItem, null));
}