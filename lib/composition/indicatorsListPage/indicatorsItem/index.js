import React from 'react';
import { Flex, Center, Box, VStack, Spacer } from "@chakra-ui/react";
require("./index.less");

/**
 * 
 */
export default function (props) {
  const {
    label,
    value,
    index = 0
  } = props;
  return /*#__PURE__*/React.createElement(VStack, {
    align: "center"
  }, /*#__PURE__*/React.createElement(Box, {
    fontSize: '16px',
    fontWeight: 'bold'
  }, label), /*#__PURE__*/React.createElement(Box, null, value));
}