import React, { useState } from 'react';
import TreeItem from "./TreeItem";
import TreeArrayItem from "./TreeArrayItem";
import { Flex, Stack, Center } from '@chakra-ui/layout';
import Tree from "./index";
import PageSection from 'zero-element-boot-plugin-theme/lib/components/text/pageSectionTitle/PageSectionTitle';
export default function index(props) {
  const {
    keyName,
    ...data
  } = props;
  const [isShowObj, setIsShowObj] = useState(true);
  const keys = Object.keys(props); // console.log('keyName 1111111 == ', keyName)

  function showObj() {
    const status = !isShowObj;
    setIsShowObj(status);
  }

  function formatKeyName(value) {
    const reg = /^[0-9]+.?[0-9]*$/;

    if (reg.test(value)) {
      return `[${value}]`;
    }

    return value;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, keys && keys.length > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Flex, {
    bg: "#f5f5f5",
    margin: " 2px 0 0 0"
  }, /*#__PURE__*/React.createElement(Center, {
    h: "30px",
    margin: "0 8px 0 0 ",
    onClick: () => showObj()
  }, isShowObj ? /*#__PURE__*/React.createElement("svg", {
    t: "1662005424492",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "72865",
    width: "18",
    height: "18"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M170.666667 469.333333h682.666666v85.333334H170.666667z",
    fill: "#cdcdcd",
    "p-id": "72866"
  })) : /*#__PURE__*/React.createElement("svg", {
    t: "1662005256045",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "71804",
    width: "18",
    height: "18"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M469.333333 469.333333V170.666667h85.333334v298.666666h298.666666v85.333334h-298.666666v298.666666h-85.333334v-298.666666H170.666667v-85.333334h298.666666z",
    fill: "#cdcdcd",
    "p-id": "71805"
  }))), /*#__PURE__*/React.createElement(Center, {
    h: "30px",
    margin: "0 0 0"
  }, /*#__PURE__*/React.createElement(PageSection, null, formatKeyName(keyName)))), /*#__PURE__*/React.createElement(Stack, {
    h: "",
    margin: "0 0 0 20px",
    spacing: "0",
    display: isShowObj ? '' : 'none'
  }, /*#__PURE__*/React.createElement(Tree, getValue(props, keyName)))) : /*#__PURE__*/React.createElement(React.Fragment, null));
} // 获取Value值

function getValue(props, key) {
  return props[key];
}