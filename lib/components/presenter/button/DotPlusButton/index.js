import React, { useState } from 'react';
import TagIndicator from "../../../indicator/TagIndicator";

/**
 * 
 * @param {color} color 背景，边框，字体颜色
 * @param {size} size 尺寸
 * @param {borderColor} borderColor 边框颜色
 * @param {fill} fill 填充颜色
 * @param {onPlusClick} onPlusClick 点击事件
 * 
 */

export default function Index(props) {
  const {
    color = '#8e72ff',
    size = '30',
    onPlusClick,
    borderColor = '',
    fill = 'transparent'
  } = props;
  const baseStyle = {
    textAlign: 'center',
    width: `${size}px`,
    height: `${size}px`,
    padding: '0'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: baseStyle,
    onClick: onPlusClick
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "50%",
    cy: "50%",
    r: 0.3 * size,
    stroke: borderColor,
    strokeWidth: "1.2",
    fill: fill
  }), /*#__PURE__*/React.createElement("line", {
    x1: "35%",
    y1: "50%",
    x2: "65%",
    y2: "50%",
    stroke: color,
    strokeWidth: "1.2"
  })));
}