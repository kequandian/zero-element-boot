import React, { useImperativeHandle, forwardRef, useState } from 'react';

require("./index.less");
/**
 * line 分割线
 * 参数
 * Seperator: Seperator, 组件名
   props:{
      lineType:'solid' 分割线类型
   }
 */


export default /*#__PURE__*/forwardRef(function CheckBoxIndicatorCart(props, ref) {
  const {
    children,
    line = {},
    checked
  } = props;
  const [onHover, setOnHover] = useState(false); // console.log('item props = ', props)

  return React.Children.map(children, child => {
    const toggleHover = () => {
      const result = !onHover;
      setOnHover(result);
    };

    const fill = '#ffffff';
    const margin = '6px';
    const padding = '5px';
    let linewidth = '';
    let activeLeftLine = line.activeLeftLine ? line.activeLeftLine : '3px';
    const hoverColor = '#EAEAEA';
    const activeColor = hoverColor;
    const lineColor = '#4285F4';
    let bgColor = `${fill}`;

    if (onHover) {
      bgColor = `${hoverColor}80`;
    } else {
      bgColor = `${fill}ff`;
    }

    if (checked) {
      bgColor = activeColor; // linewidth = activeLeftLine;
    }

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: `i-CheckBoxIndicatorCart`,
      style: {
        position: 'relative',
        margin: `${margin}`,
        padding: `${padding}`,
        backgroundColor: `${bgColor}`
      },
      onMouseEnter: () => toggleHover(),
      onMouseLeave: () => toggleHover()
    }, linewidth ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        height: '100%',
        left: 0,
        top: 0,
        borderStyle: `solid`,
        borderWidth: `0 0 0 ${linewidth}`,
        borderColor: `${lineColor}`
      }
    }) : null, child));
  });
});