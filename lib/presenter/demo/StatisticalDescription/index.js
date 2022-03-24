import React from 'react';
import { Flex, Center, Box, Spacer } from "@chakra-ui/react";
/**
 * @param {String} contentTxt 内容
 */

export default function (props) {
  const {
    contentTxt
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      marginTop: '20px'
    }
  }, /*#__PURE__*/React.createElement(Flex, {
    h: "30px",
    align: "right"
  }, /*#__PURE__*/React.createElement(Box, {
    p: "2"
  }), /*#__PURE__*/React.createElement(Spacer, null), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Center, {
    color: "#1FA7B2"
  }, contentTxt))));
}