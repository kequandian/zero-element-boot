import React from 'react';
import { Flex, Center, Box, Stack, Spacer } from "@chakra-ui/react";
import Progress from "../../../../presenter/demo/Progress";

require("./index.less");
/**
 * 
 */


export default function (props) {
  const {
    bgColor,
    value,
    title,
    index = 0
  } = props;
  return /*#__PURE__*/React.createElement(Flex, {
    h: "30px"
  }, /*#__PURE__*/React.createElement(Center, {
    w: "30px"
  }, index + 1), /*#__PURE__*/React.createElement(Box, {
    flex: "1"
  }, /*#__PURE__*/React.createElement(Progress, {
    height: "30px",
    bgColor: bgColor,
    percentageNum: value / 100,
    progressName: title,
    indexValue: index + 1
  })));
}