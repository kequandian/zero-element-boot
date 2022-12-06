import { Box, Center, Flex, Stack } from '@chakra-ui/layout';
import React from 'react';
import PageSection from 'zero-element-boot-plugin-theme/lib/components/text/pageSectionTitle/PageSectionTitle';
import TagIndicator from "../../../indicator/TagIndicator";
export default function index(props) {
  const {
    keyName,
    ...data
  } = props;
  const values = data[keyName]; // console.log('props ==', props)
  // console.log('keyNamessss ==', keyName)

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Flex, {
    h: "30px",
    bg: "",
    margin: "2px 0 0 0"
  }, /*#__PURE__*/React.createElement(Center, {
    h: "100%",
    margin: "0 8px 0 0 "
  }, /*#__PURE__*/React.createElement("svg", {
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
  }))), /*#__PURE__*/React.createElement(Center, {
    h: "100%"
  }, /*#__PURE__*/React.createElement(PageSection, null, keyName, "\uFF1A")), /*#__PURE__*/React.createElement(Center, {
    h: "100%"
  }, /*#__PURE__*/React.createElement(Center, {
    h: "28px",
    color: "#d3455b",
    border: "2px solid #efbcc4",
    borderRadius: "8px",
    padding: "0 16px",
    margin: "4px"
  }, /*#__PURE__*/React.createElement(PageSection, null, values)))));
}