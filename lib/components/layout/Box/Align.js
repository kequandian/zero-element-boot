import React, { useImperativeHandle, forwardRef } from 'react';
export default /*#__PURE__*/forwardRef(function Box(props, ref) {
  const {
    children,
    align,
    direction
  } = props;
  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `l-Align ${align} ${direction}`;
    }
  }));
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      className: "l-AlignItem"
    }, child);
  });
});