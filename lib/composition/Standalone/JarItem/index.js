import React from 'react';
import { Flex, Center, Box, Stack, Spacer } from "@chakra-ui/react";
import Progress from "../../../presenter/demo/Progress";

require("./index.less");
/**
 * 
 */


export default function (props) {
  const {
    value,
    index = 0
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "textColor"
  }, /*#__PURE__*/React.createElement(Flex, {
    h: "25px"
  }, /*#__PURE__*/React.createElement(Center, {
    axis: "vertical"
  }, `${value}`), /*#__PURE__*/React.createElement(Center, {
    w: "10px"
  })));
}