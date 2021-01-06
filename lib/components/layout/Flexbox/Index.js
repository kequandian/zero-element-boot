import React, { useImperativeHandle, forwardRef } from 'react';
import NamedSeperator from "../../NamedSeperator";

require("./index.less");
/**
 * @param {对齐方式: [start, center, end, around, between, start-with-last-end] } align
 * @param {对齐方向: [row, column, row-reverse, column-reverse] } direction
 * @param {子项对齐方式: start, center, end, [full, half, quad]: for item width } justify
 * @param {*} Seperator
 * Seperator: 'Divider', 组件名
 * {
      name: 'Divider',
      props:{
          lineType:'solid' 分割线类型
      }
   }
   @param {是否划线} isLastItem
 */


export default /*#__PURE__*/forwardRef(function Flexbox(props, ref) {
  const {
    children,
    align = '',
    direction = '',
    justify = {},
    seperator = {},
    isLastItem
  } = props;
  console.log('align=', align, 'direction=', direction, 'justify=', justify);
  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `l-FlexBox ${align} ${direction}`;
    }
  })); // get named seperator

  const defaultSeperator = typeof seperator === 'string' ? seperator : seperator.name;
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: `l-FlexBoxItem ${direction} ${justify}`,
      onClick: () => child.props.onItemClick(child.props)
    }, child), defaultSeperator && !isLastItem ? /*#__PURE__*/React.createElement(NamedSeperator, {
      name: defaultSeperator
    }) : null);
  });
});