import React from 'react';
/**
 * 
 * @param {color } backgroundColor 背景颜色
 * @param {offset } offset 顶部padding
 * 
 */

export default function HCenter(props) {
  const {
    children,
    backgroundColor = '#ffffff',
    offset
  } = props;
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        backgroundColor: `${backgroundColor}`,
        cursor: 'pointer',
        padding: 'atuo atuo',
        display: 'flex',
        justifyContent: "center",
        width: '100%',
        height: '100%',
        paddingTop: `${offset}`
      }
    }, child);
  });
}