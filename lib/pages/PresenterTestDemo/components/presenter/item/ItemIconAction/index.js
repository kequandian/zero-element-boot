import React, { useState } from 'react';
import { Tooltip } from 'antd';

const check = require("./images/check.png");

const overcheck = require("./images/overcheck.png");

require("./index.less");

export default function ContentFinish(props) {
  const text = /*#__PURE__*/React.createElement("span", null, "\u5B8C\u6210");
  const {
    time
  } = props;
  const [onClick, setOnClick] = useState(false);
  const [display, setDisplay] = useState(null);
  const [onHover, setOnHover] = useState(false);
  const [theImageUrl, setTheImageUrl] = useState(check);

  const toggleHover = () => {
    const result = !onHover;
    setTheImageUrl(result ? overcheck : check);
    setOnHover(result);
  };

  const toggleOnclick = () => {
    const result = !onClick;
    setDisplay(result ? "none" : null);
    setOnClick(result);
    console.log("11111" + result + display);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "TheFinish"
  }, /*#__PURE__*/React.createElement("div", {
    className: "TheTime"
  }, time), /*#__PURE__*/React.createElement(Tooltip, {
    placement: "top",
    title: text
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => toggleOnclick(false),
    className: "TheImage",
    style: {
      backgroundImage: `url(${theImageUrl})`
    },
    onMouseEnter: () => toggleHover(),
    onMouseLeave: () => toggleHover()
  })));
}