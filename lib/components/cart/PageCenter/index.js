import React from 'react';
import useSize from "../../hooks/useSize";
/**
 * 
 * @param {color } backgroundColor 背景颜色
 * 
 */

export default function PageCenter(props) {
  const size = useSize();
  const {
    children,
    backgroundColor = '#ffffff'
  } = props;
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        backgroundColor: `${backgroundColor}`,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: "center",
        width: '100%',
        height: `${size.height}px`,
        alignItems: 'center'
      }
    }, child);
  });
}