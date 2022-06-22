import React from 'react';
import checkXOn from "../../../../assets/check_on.svg";
import StyleDate from "../index.less";
import { Flex } from '@chakra-ui/react';
import Cart from "../../../cart/Cart";
export default function Sekected(props) {
  const {
    children,
    ...defaultSelectedStyles
  } = props;
  const styles = {
    position: 'relative',
    margin: 'auto 10px auto 30px',
    ...defaultSelectedStyles
  };
  return /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(Cart, {
    padding: "10px",
    margin: "0",
    lineColor: "#1e6fff"
  }, React.Children.map(children, child => child)), /*#__PURE__*/React.createElement("div", {
    style: styles,
    className: StyleDate.right_icon_on
  }, /*#__PURE__*/React.createElement("img", {
    src: checkXOn
  })));
}