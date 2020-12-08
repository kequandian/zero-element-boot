import React, { useImperativeHandle, forwardRef } from 'react';

require("./index.less");

export default /*#__PURE__*/forwardRef(function Box(props, ref) {
  const {
    children,
    align = 'start',
    direction = 'row'
  } = props;
  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `l-Box ${align} ${direction}`;
    }
  }));
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      className: "l-BoxItem",
      onClick: () => child.props.onItemClick(child.props)
    }, child);
  });
});