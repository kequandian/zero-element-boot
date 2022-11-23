import React, { useState } from 'react';
import { history } from 'umi';
import useQuery from "../../../hooks/useQuery.js";

/**
 * 
 * @param {color} color 背景，边框，字体颜色
 * @param {height} height 高度
 * @param {solid} solid 深色背景，字体白色
 * @param {outline} outline 有边框，背景半透明
 * @param {add} add 加号
 * @param {navigation} navigation  外部路径
 * @param {onAction} onAction 点击响应内部事件
 * 
 */

export default function Index(props) {
  const {
    children,
    color = '#8e72ff',
    height = '40px',
    solid,
    outline,
    add,
    navigation,
    onAction
  } = props;
  const bg = !outline && solid ? `${color}` : outline && !solid ? `${color}26` : null;
  const border = outline && !solid ? `2px ${color} solid` : null;
  const colors = !outline && solid ? '#ffffff' : `${color}`;

  // "/GetPath?id=34&name=34"

  // if(navigation && navigation.contains("?")){

  // }

  // console.log('queryData === ', queryData)

  // const path = () => {
  //     history.push(queryData)
  // }

  // const onButtonClick = (!onAction && navigation) ? path : (onAction && !navigation) ? onAction : null

  function onButtonClick() {
    if (!onAction && navigation) {
      const queryData = useQuery(navigation);
      history.push(queryData);
    } else if (onAction && !navigation) {
      onAction();
    }
  }
  const baseStyle = {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '150px',
    backgroundColor: `${bg}`,
    color: `${colors}`,
    border: `${border}`,
    borderRadius: '10px',
    margin: '6px',
    height: `${height}`
  };
  return /*#__PURE__*/React.createElement("div", {
    style: baseStyle,
    onClick: () => onButtonClick()
  }, add ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'auto 2px',
      fontWeight: 'bold',
      fontSize: '30px',
      lineHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    fill: colors,
    class: "bi bi-plus-lg",
    viewBox: "0 0 20 16"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
  }))), React.Children.map(children, child => child)) : /*#__PURE__*/React.createElement(React.Fragment, null, React.Children.map(children, child => child)));
}