import React, { useImperativeHandle, forwardRef, useContext, useRef } from 'react';
import ContainerContext from "../AutoX/ContainerContext";
export default /*#__PURE__*/forwardRef(function WrappedGrid({
  children,
  col = 3
}, ref) {
  const size = useContext(ContainerContext);
  const initWidth = useRef(size.width / col - 16);
  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return 'l-WrappedGrid';
    }
  }));
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      className: "l-WrappedGridItem",
      style: {
        width: initWidth.current || 0
      }
    }, child);
  });
});