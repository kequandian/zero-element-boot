function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { AutoLayout } from "../../components";
import layoutJson from "./layout";
export default function Index(props) {
  const {
    data = [],
    onItemClick
  } = props;
  const config = {
    items: data.length > 0 ? data : [],
    layout: layoutJson
  };

  function onIClick() {}

  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '600px'
    }
  }, /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, {
    onItemClick: onIClick
  })));
}