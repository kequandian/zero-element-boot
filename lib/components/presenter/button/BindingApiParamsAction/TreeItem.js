import { Box, Center, Flex, useToast } from '@chakra-ui/react';
import React from 'react';
import PageSection from "../../tree/JsonTree/PageSection";
import { useHover } from "@uidotdev/usehooks";
import promiseAjax from "../../../utils/request";
export default function index(props) {
  const {
    keyName,
    keyValue,
    onKeyValueClick,
    onCompleted,
    ...data
  } = props;
  const toast = useToast();
  const onKVClick = () => {
    onKeyValueClick && onKeyValueClick(keyName, keyValue);
  };
  const onDel = id => {
    const api = `/openapi/crud/lc_low_auto_binding/lowAutoBinding/lowAutoBindings/${id}`;
    const query = {};
    return promiseAjax(api, query, {
      method: 'DELETE'
    }).then(resp => {
      if (resp && resp.code === 200) {
        if (onCompleted) {
          onCompleted();
        }
      } else {
        toastTips(`删除失败, ${resp.message}`, 'error');
      }
    }).finally(_ => {});
  };

  // tips
  function toastTips(text, status = 'success') {
    toast({
      title: text,
      description: '',
      status: status,
      duration: 3000,
      isClosable: true,
      position: 'top'
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Flex, {
    h: "30px",
    bg: "",
    margin: "2px 0 0 0"
  }, /*#__PURE__*/React.createElement(Center, {
    h: "100%",
    margin: "0 8px 0 0 "
  }, /*#__PURE__*/React.createElement("svg", {
    t: "1662005424492",
    className: "icon",
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
  }, /*#__PURE__*/React.createElement(PageSection, null, keyName || '', "\uFF1A")), keyValue && Array.isArray(keyValue) ? keyValue.map((item, index) => /*#__PURE__*/React.createElement(TreeValueItem, {
    key: index,
    value: item.displayName,
    onKVClick: onKVClick,
    onDelClick: () => onDel(item.id)
  })) : /*#__PURE__*/React.createElement(TreeValueItem, {
    value: '',
    onKVClick: onKVClick
  })));
}
function TreeValueItem({
  value,
  onKVClick,
  onDelClick
}) {
  const [hoverRef, hovering] = useHover();
  return /*#__PURE__*/React.createElement("article", {
    ref: hoverRef
  }, /*#__PURE__*/React.createElement(Center, {
    h: "100%",
    cursor: 'pointer',
    position: 'relative'
  }, /*#__PURE__*/React.createElement(Center, {
    h: "28px",
    color: "#d3455b",
    border: "2px solid #efbcc4",
    borderRadius: "8px",
    padding: "0 20px",
    margin: "4px",
    _hover: {
      bg: '#efbcc4',
      color: '#d3455b'
    },
    onClick: onKVClick
  }, /*#__PURE__*/React.createElement(PageSection, null, value || '')), hovering && value ? /*#__PURE__*/React.createElement(Box, {
    onClick: onDelClick
  }, /*#__PURE__*/React.createElement("svg", {
    t: "1711613887763",
    className: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "5148",
    width: "20",
    height: "20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z",
    fill: "#8F9EAC",
    "p-id": "5149"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M512 466.752l158.4-158.4 45.248 45.248L557.248 512l158.4 158.4-45.248 45.248L512 557.248l-158.4 158.4-45.248-45.248L466.752 512 308.352 353.6l45.248-45.248L512 466.752z",
    fill: "#FFFFFF",
    "p-id": "5150"
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null)));
}