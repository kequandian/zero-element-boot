import React, { useState, useEffect } from 'react';
import AutoComponentSet from "./index";
import PageCart from "../../components/PageCart";
import HCenter from "../../components/HCenter";
export default function (props) {
  let endpoint = ' http://app1.console.smallsaas.cn:8001';

  const onHandleItemClick = item => {
    console.log(item, ' ======== item');
  };

  return /*#__PURE__*/React.createElement(HCenter, null, /*#__PURE__*/React.createElement(AutoComponentSet, {
    onItemClick: onHandleItemClick,
    endpoint: endpoint
  }));
}