import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import CssCart from "../../components/css/CssCart";
import AutoWxList from "./index";
import { Text, Grid, Box } from '@chakra-ui/react';
import TitledContainer from "../../components/container/TitledContainer";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
export default function (props) {
  let endpoint = 'http://app1.console.smallsaas.cn:8001/openapi'; // let endpoint='http://app1.console.smallsaas.cn:8001/openapi'

  return /*#__PURE__*/React.createElement(ChakraProvider, null, /*#__PURE__*/React.createElement(CssCart, {
    margin: "20px"
  }, /*#__PURE__*/React.createElement(Tabs, null, /*#__PURE__*/React.createElement(TabList, null, /*#__PURE__*/React.createElement(Tab, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'bold',
      fontSize: '20px'
    }
  }, "\u5C0F\u7A0B\u5E8F")), /*#__PURE__*/React.createElement(Tab, null, "Two")), /*#__PURE__*/React.createElement(TabPanels, null, /*#__PURE__*/React.createElement(TabPanel, null, /*#__PURE__*/React.createElement(AutoWxList, {
    endpoint: endpoint
  })), /*#__PURE__*/React.createElement(TabPanel, null, /*#__PURE__*/React.createElement("p", null, "two!"))))));
}