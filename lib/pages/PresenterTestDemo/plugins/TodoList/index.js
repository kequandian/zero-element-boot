function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react'; // import { Icon } from 'antd-';

import TodoItem from "./TodoItem"; // import layout from './designLayout'

import layout from "./layout";
import { AutoLayout } from "../../../../components"; // require('./index.less')

export default function TodoList(props) {
  // console.log(props)
  const {
    onhandleClick,
    onItemClickHandle,
    data
  } = props;
  const config = {
    items: data.length > 0 ? data : [],
    layout: layout
  };

  const onClick = item => {
    console.log(item);
    onItemClickHandle();
  }; // console.log(config)


  return /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, {
    onItemClick: onClick
  }), /*#__PURE__*/React.createElement(TodoItem, {
    onToDoItemClick: onhandleClick
  }));
}