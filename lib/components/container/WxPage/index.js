import React, { useState, useEffect, useBoolean } from 'react';
import Cart from "../../cart/Cart";
import { Radio, RadioGroup, Button, Flex, Stack, ChakraProvider } from '@chakra-ui/react';
import CssCart from "../../cart/Cart";
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverAnchor } from '@chakra-ui/react';
require("./index.less");

/**
 * 
 * @param {deviceModel} deviceModel 设备型号
 * @param {title} title 标题
 * @param {device} device 设备 [wx,pc]
 * 
 *  deviceModel={ iPhoneSE iPhoneXR iPhone12Pro Pixel5 SamsungGalaxyS8+ iPadAir iPadMini} 
 * 
 * @returns 
 */

const map = {
  "iPhoneSE": {
    width: '375px',
    height: '667px'
  },
  "iPhoneXR": {
    width: '414px',
    height: '896px'
  },
  "iPhone12Pro": {
    width: '390px',
    height: '844px'
  },
  "Pixel5": {
    width: '393px',
    height: '851px'
  },
  "SamsungGalaxyS8+": {
    width: '360px',
    height: '740px'
  },
  "iPadAir": {
    width: '820px',
    height: '1180px'
  },
  "iPadMini": {
    width: '768px',
    height: '1024px'
  },
  "window": {
    width: '1024px',
    height: '720px'
  }
};
let stylePropsData = {
  // background: '#f0f0f0',
  background: '#ffffff',
  padding: ' 0',
  margin: '10px 20px',
  borderRadius: '10px',
  boxShadow: ' 0 2px 6px rgba(0, 0, 0, 0.1)',
  width: '375px',
  height: '667px',
  overflow: 'hidden',
  overflowY: 'auto'
};
export default function WxPage(props) {
  const {
    children,
    title = '',
    deviceModel = 'iPhoneSE',
    device = 'wx',
    ...rest
  } = props;
  const [modelName, setModelName] = useState(deviceModel);
  const [styleProps, setStyleProps] = useState(stylePropsData);
  useEffect(_ => {
    if (modelName && device === 'wx') {
      stylePropsData = {
        ...stylePropsData,
        ...map[modelName]
      };
      setStyleProps(stylePropsData);
    } else if (device === 'pc') {
      stylePropsData = {
        ...stylePropsData,
        borderRadius: '6px',
        background: '#fff',
        ...map['window'],
        overflowX: 'auto'
      };
      setStyleProps(stylePropsData);
    }
  }, [modelName]);
  function modelNameChange(value) {
    console.log(value, '==value');
    setModelName(value);
  }
  return /*#__PURE__*/React.createElement("div", {
    id: "wx-page",
    style: styleProps
  }, device === 'wx' ? /*#__PURE__*/React.createElement(Cart, {
    fill: "#ffffff",
    linewidth: "0",
    corner: "10px 10px 0 0",
    padding: "auto auto 60px auto",
    margin: "0"
  }, /*#__PURE__*/React.createElement(Flex, {
    justify: "end"
  }, /*#__PURE__*/React.createElement(Popover, null, /*#__PURE__*/React.createElement(PopoverTrigger, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    margin: "16px",
    borderColor: "transparent"
  }, "\xB7 \xB7 \xB7"))), /*#__PURE__*/React.createElement(PopoverContent, {
    margin: "4px 40px"
  }, /*#__PURE__*/React.createElement(PopoverBody, null, /*#__PURE__*/React.createElement(PopoverHeader, {
    fontWeight: "semibold"
  }, "deviceModel:"), /*#__PURE__*/React.createElement(RadioGroup, {
    onChange: value => modelNameChange(value)
  }, /*#__PURE__*/React.createElement(Stack, null, /*#__PURE__*/React.createElement(Radio, {
    value: "iPhoneSE"
  }, "iPhoneSE"), /*#__PURE__*/React.createElement(Radio, {
    value: "iPhoneXR"
  }, "iPhoneXR"), /*#__PURE__*/React.createElement(Radio, {
    value: "iPhone12Pro"
  }, "iPhone12Pro"), /*#__PURE__*/React.createElement(Radio, {
    value: "Pixel5"
  }, "Pixel5"), /*#__PURE__*/React.createElement(Radio, {
    value: "SamsungGalaxyS8"
  }, "SamsungGalaxyS8"), /*#__PURE__*/React.createElement(Radio, {
    value: "iPadAir"
  }, "iPadAir"), /*#__PURE__*/React.createElement(Radio, {
    value: "iPadMini"
  }, "iPadMini"), /*#__PURE__*/React.createElement(Radio, {
    value: "window"
  }, "window")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'auto',
      padding: 'auto',
      color: '',
      fontSize: '24px',
      fontWeight: 'bold'
    }
  }, title), /*#__PURE__*/React.createElement(CssCart, {
    borderWidth: "1px ",
    borderStyle: "solid",
    borderColor: "#e1e1e1",
    borderRadius: "62px",
    padding: "0",
    margin: "10px",
    width: "120px",
    height: "40px"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "38px"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "20%",
    cy: "50%",
    r: "1",
    stroke: "black",
    strokeWidth: "3",
    fill: ""
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "29%",
    cy: "50%",
    r: "2.8",
    stroke: "black",
    strokeWidth: "3",
    fill: ""
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "38%",
    cy: "50%",
    r: "1",
    stroke: "black",
    strokeWidth: "3",
    fill: ""
  }), /*#__PURE__*/React.createElement("rect", {
    width: "1",
    height: "26px",
    x: "50%",
    y: "14%",
    fill: "#e2e2e2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "80%",
    cy: "50%",
    r: "10",
    stroke: "black",
    strokeWidth: "3",
    fill: "transparent"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "80%",
    cy: "50%",
    r: "3.5",
    stroke: "black",
    strokeWidth: "2",
    fill: ""
  }))))) : device === 'pc' ? /*#__PURE__*/React.createElement(Cart, {
    fill: "#9EADBA",
    linewidth: "0",
    corner: "6px 6px 0 0",
    padding: "auto auto 60px auto",
    margin: "0"
  }, /*#__PURE__*/React.createElement(Flex, {
    justify: "start"
  }, /*#__PURE__*/React.createElement(Popover, null, /*#__PURE__*/React.createElement(PopoverTrigger, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    width: "100px",
    height: "38px"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "20%",
    cy: "50%",
    r: "2",
    stroke: "#8F9EAC",
    strokeWidth: "3",
    fill: ""
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "29%",
    cy: "50%",
    r: "2",
    stroke: "#8F9EAC",
    strokeWidth: "3",
    fill: ""
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "38%",
    cy: "50%",
    r: "2",
    stroke: "#8F9EAC",
    strokeWidth: "3",
    fill: ""
  })))), /*#__PURE__*/React.createElement(PopoverContent, {
    margin: "4px 40px"
  }, /*#__PURE__*/React.createElement(PopoverBody, null, /*#__PURE__*/React.createElement(PopoverHeader, {
    fontWeight: "semibold"
  }, "deviceModel:"), /*#__PURE__*/React.createElement(RadioGroup, {
    onChange: value => modelNameChange(value)
  }, /*#__PURE__*/React.createElement(Stack, null, /*#__PURE__*/React.createElement(Radio, {
    value: "iPhoneSE"
  }, "iPhoneSE"), /*#__PURE__*/React.createElement(Radio, {
    value: "iPhoneXR"
  }, "iPhoneXR"), /*#__PURE__*/React.createElement(Radio, {
    value: "iPhone12Pro"
  }, "iPhone12Pro"), /*#__PURE__*/React.createElement(Radio, {
    value: "Pixel5"
  }, "Pixel5"), /*#__PURE__*/React.createElement(Radio, {
    value: "SamsungGalaxyS8"
  }, "SamsungGalaxyS8"), /*#__PURE__*/React.createElement(Radio, {
    value: "iPadAir"
  }, "iPadAir"), /*#__PURE__*/React.createElement(Radio, {
    value: "iPadMini"
  }, "iPadMini"), /*#__PURE__*/React.createElement(Radio, {
    value: "window"
  }, "window")))))))) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px'
    }
  }, React.Children.map(children, child => {
    return /*#__PURE__*/React.cloneElement(child, {
      ...rest
    });
  })));
}