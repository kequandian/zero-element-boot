function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react'; // import layout from '@/plugins/TodoList/designLayout'

require("./index.less");

import ImageAnimation from "../../../components/presenter/item/ItemAvator";
import ContentText from "./Content_text";
import ContentFinish from "../../../components/presenter/item/ItemIconAction";
import { AutoComponent, AutoLayout } from "../../../../../components";
import layout from "./layout";

const CartSet = require("../../../../../components/cart");

export default function TodoItem(props) {
  // console.log(props)
  const {
    onToDoItemClick
  } = props;
  const allComponents = {
    ImageAnimation,
    ContentText,
    ContentFinish
  };
  const config = {
    layout,
    ...props
  };
  return /*#__PURE__*/React.createElement(AutoComponent, _extends({
    onItemClick: onToDoItemClick
  }, config, {
    cartSet: CartSet,
    allComponents: allComponents
  }));
}