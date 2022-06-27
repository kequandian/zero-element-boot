import React from 'react';
/**
 * 
 * @param {style} style css样式
 * 
 * @returns 
 */

export default function index(props) {
  const {
    children,
    ...style
  } = props;
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      style: { ...style
      }
    }, child);
  });
}