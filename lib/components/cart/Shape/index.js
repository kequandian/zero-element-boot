import React, { useImperativeHandle, forwardRef } from 'react';

require("./index.less");

export default /*#__PURE__*/forwardRef(function Shape(props, ref) {
  /**
   * corner     圆角半径
   * fill       背景色
   * stroke     线框色
   * lineWidth  线框粗
   */
  const {
    children,
    corner = '8px',
    fill = '#1ee',
    stroke = '#9bd',
    lineWidth = '2'
  } = props;
  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `c-Shape`;
    }
  }));
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderStyle: `solid`,
        borderRadius: `${corner}`,
        background: `${fill}`,
        borderColor: `${stroke}`,
        borderWidth: `${lineWidth}px`
      }
    }, child);
  });
});