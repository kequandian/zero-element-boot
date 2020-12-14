import React, { useImperativeHandle, forwardRef } from 'react';

require("./index.less");
/**
 * line 分割线
 * 参数
 * Seperator: Seperator, 组件名
   props:{
      lineType:'solid' 分割线类型
   }
 */


export default /*#__PURE__*/forwardRef(function Box(props, ref) {
  const {
    children,
    align = 'start',
    direction = 'row',
    itemStyle = {},
    line = {},
    isValidLine
  } = props; // itemStyle 控制 child 样式

  const {
    itemWidth = '',
    itemAlign = ''
  } = itemStyle;
  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `l-Box ${align} ${direction}`;
    }
  })); //分割线

  const Seperator = line.Seperator;
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: `l-BoxItem ${itemWidth} ${itemAlign}`,
      onClick: () => child.props.onItemClick(child.props)
    }, child), Seperator && isValidLine ? /*#__PURE__*/React.createElement(Seperator, line.props) : null);
  });
});