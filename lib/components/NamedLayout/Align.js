import React, { useImperativeHandle, forwardRef } from 'react';
export default /*#__PURE__*/forwardRef(function Align(props, ref) {
  const {
    children,
    align
  } = props;
  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `l-Align ${align}`;
    }
  }));
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      className: "l-AlignItem"
    }, child);
  });
});