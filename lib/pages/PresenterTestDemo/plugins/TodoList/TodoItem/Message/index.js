import React, { useState } from 'react';
import { Tabs } from 'antd';
import TodoList from "../../Sandboxx";
import display from "../../../../components/presenter/item/ItemIconAction";

require("./index.less");

const {
  TabPane
} = Tabs;
export default function callback(key) {
  const onhandleClick = data => {// console.log('data = ',data);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "TheLabel"
  }, /*#__PURE__*/React.createElement(Tabs, {
    defaultActiveKey: "1",
    onChange: callback
  }, /*#__PURE__*/React.createElement(TabPane, {
    tab: "\u672A\u8BFB\u6D88\u606F",
    key: "1",
    tabBarStyle: {
      margin: "auto"
    }
  }, /*#__PURE__*/React.createElement(TodoList, {
    onhandleClick: onhandleClick,
    display: `${display}`
  })), /*#__PURE__*/React.createElement(TabPane, {
    tab: "\u5168\u90E8\u6D88\u606F",
    key: "2",
    tabBarStyle: {
      paddingLeft: "100px"
    }
  }, /*#__PURE__*/React.createElement(TodoList, null))));
}