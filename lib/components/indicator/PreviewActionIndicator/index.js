import React, { useState } from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import PlacementIndicator from "../PlacementIndicator";
import NextIndicator from "../../NextIndicator";
require("./index.less");

/**
 * @param { function } onPreviewTriggered 响应  PreviewAutoLayout onPreviewTriggered事件
 * @param { string } xseq 组件layoutName
 * 
 */
export default function PreviewActionIndicator(props) {
  const {
    children,
    onPreviewTriggered,
    xseq,
    ...rest
  } = props;
  const [onHover, setOnHover] = useState(false);
  const toggleHover = () => {
    const result = !onHover;
    setOnHover(result);
  };
  let newLineColor = ``;
  let __PlacementIndicator = onHover ? PlacementIndicator : NextIndicator;
  if (onHover) {
    newLineColor = '#0078D4';
  } else {
    newLineColor = 'transparent';
  }
  const _indicator = () => {
    //svg图片
    const IconSvg = () => {
      return /*#__PURE__*/React.createElement("svg", {
        t: "1712720955253",
        class: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "15898",
        width: "20",
        height: "20"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M824.487092 906.287384 100.255236 906.287384c-24.939113 0-44.890404-19.951291-44.890404-44.890404L55.364832 137.165124c0-24.939113 19.951291-44.890404 44.890404-44.890404l319.719435 0c8.479299 0 14.963468 6.48417 14.963468 14.963468s-6.48417 14.963468-14.963468 14.963468L100.255236 122.201656c-8.479299 0-14.963468 6.48417-14.963468 14.963468l0 723.733074c0 8.479299 6.48417 14.963468 14.963468 14.963468l723.733074 0c8.479299 0 14.963468-6.48417 14.963468-14.963468l0-343.660984c0-8.479299 6.48417-14.963468 14.963468-14.963468s14.963468 6.48417 14.963468 14.963468l0 343.660984C869.377496 885.837311 848.927423 906.287384 824.487092 906.287384z",
        "p-id": "15899"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M854.414028 410.497808c-8.479299 0-14.963468-6.48417-14.963468-14.963468L839.45056 122.201656l-286.799805 0c-8.479299 0-14.963468-6.48417-14.963468-14.963468s6.48417-14.963468 14.963468-14.963468l316.726741 0 0 303.25962C869.377496 404.013639 862.394545 410.497808 854.414028 410.497808z",
        "p-id": "15900"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M400.02338 577.091086c-3.990258 0-7.481734-1.496347-10.474428-4.48904-5.985387-5.985387-5.985387-15.46225 0-20.948855l454.390648-454.390648c5.985387-5.985387 15.46225-5.985387 20.948855 0 5.985387 5.985387 5.985387 15.46225 0 20.948855l-454.390648 454.390648C407.505114 575.594739 403.514856 577.091086 400.02338 577.091086z",
        "p-id": "15901"
      }));
    };
    const onPreviewClick = () => {
      if (onPreviewTriggered) {
        onPreviewTriggered(xseq);
      }
    };
    return /*#__PURE__*/React.createElement(HStack, {
      justifyContent: 'space-around',
      onClick: onPreviewClick,
      cursor: 'pointer'
    }, /*#__PURE__*/React.createElement("div", null, xseq), /*#__PURE__*/React.createElement(IconSvg, null));
  };
  return /*#__PURE__*/React.createElement(PlacementIndicator, {
    Indicator: _indicator,
    alignment: "topRight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "i-PreviewActionIndicator",
    style: {
      borderStyle: `solid`,
      borderWidth: `1px`,
      borderColor: `${newLineColor}`,
      padding: '5px'
    },
    onMouseEnter: () => toggleHover(),
    onMouseLeave: () => toggleHover()
  }, React.Children.map(children, child => child)));
}