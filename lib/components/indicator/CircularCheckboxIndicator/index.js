import React from 'react';
import checkOff from "../../../assets/check_off.svg";
import StyleDate from "./index.less";
import { Flex } from '@chakra-ui/react';
import Flexbox from "../../layout/Flexbox";
import Cart from "../../cart/Cart";
export default function Index(props) {
  const {
    children,
    ...defaultSelectedStyles
  } = props;
  const styles = {
    position: 'relative',
    margin: 'auto 10px auto 30px',
    padding: '0',
    // border:'1px #ff0000 solid',
    ...defaultSelectedStyles
  };
  return /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(Cart, {
    padding: "10px",
    margin: "0",
    lineColor: "#ffffff"
  }, React.Children.map(children, child => child)), /*#__PURE__*/React.createElement("div", {
    style: styles,
    className: StyleDate.right_icon_off
  }, /*#__PURE__*/React.createElement("img", {
    src: checkOff
  })));
}