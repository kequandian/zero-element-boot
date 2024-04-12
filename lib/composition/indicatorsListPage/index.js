function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState, useEffect } from 'react';
import { Box } from "@chakra-ui/react";
import { AutoLayout } from "../../components";
import layout from "./layout";
import { set as NamedPresenterSet } from "../../components/config/NamedPresenterConfig";
import IndicatorsItem from "./indicatorsItem";
export default function Index(props) {
  const {
    items,
    ...rest
  } = props;

  // console.log('props =',props)
  /**
   * 页面配置
   */
  const config = {
    items: items && items.length > 0 ? items : [],
    layout: layout,
    ...rest
  };

  /**
   * set item
   */
  NamedPresenterSet({
    IndicatorsItem
  });
  const itemClick = item => {
    console.log('item == ', item);
  };
  return /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, {
    onItemClick: itemClick
  }));
}