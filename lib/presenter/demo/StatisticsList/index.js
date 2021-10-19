import React from 'react';
import { Flex, Center, Box, Stack, Spacer } from "@chakra-ui/react";
import Progress from "../Progress";

require("./index.less");
/**
 * @param {Array} list 统计数据
 */


export default function (props) {
  const {
    list
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "listContent"
  }, /*#__PURE__*/React.createElement(Flex, {
    h: "30px",
    align: "right"
  }, /*#__PURE__*/React.createElement(Box, {
    p: "2"
  }), /*#__PURE__*/React.createElement(Spacer, null), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Center, {
    color: "#1FA7B2"
  }, "*\u597D\u8BC4\u7387"))), /*#__PURE__*/React.createElement(Stack, {
    spacing: 5
  }, list.map((item, index) => {
    return /*#__PURE__*/React.createElement(Flex, {
      h: "30px"
    }, /*#__PURE__*/React.createElement(Center, {
      w: "30px"
    }, index + 1), /*#__PURE__*/React.createElement(Box, {
      flex: "1"
    }, /*#__PURE__*/React.createElement(Progress, {
      height: "30px",
      percentageNum: item.value / 100,
      progressName: item.title,
      indexValue: index + 1
    })));
  })));
}