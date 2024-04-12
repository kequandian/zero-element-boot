import React, { useState, useEffect, useRef } from 'react';
require("./index.less");

/**
 * 
 * 
 */

export default function SquareAddNew(props) {
  const {
    onAddNew,
    ratio = 1.0
  } = props;
  const parentRef = useRef(null);
  const [parentWidth, setParentWidth] = useState(null);
  useEffect(() => {
    const resizeHandler = () => {
      if (parentRef.current) {
        const width = parentRef.current.getBoundingClientRect().width;
        setParentWidth(width);
      }
    };
    const handleFirstRender = () => {
      setTimeout(resizeHandler, 0);
    };
    window.addEventListener('resize', resizeHandler);
    handleFirstRender(); // Delay the first render
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "SquareAddNewContainer",
    ref: parentRef,
    style: {
      height: `${parentWidth * ratio}px`
    },
    onClick: onAddNew
  }, /*#__PURE__*/React.createElement("div", {
    className: "SquareAddNewBtn"
  }));
}