import React, { useImperativeHandle, forwardRef, useState } from 'react';

require("./index.less");

export default /*#__PURE__*/forwardRef(function Cart(props, ref) {
  /**
   * margin       边距
   * padding      内距
   * shadow       阴影 例子参数: '0 2px 8px rgba(0, 0, 0, 0.15)'
   * highlight    高亮
   * pressed      下压 -> 未完成
   */
  const {
    children,
    margin = '6px',
    padding = '10px',
    shadow = '0 2px 8px rgba(0, 0, 0, 0.15)',
    highlight = "#e0dede",
    pressed = ''
  } = props;
  const [onHover, setOnHover] = useState(false);
  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `C-Cart`;
    }
  }));

  const toggleHover = () => {
    const result = !onHover;
    setOnHover(result);
  };

  let bgColor = `${highlight}ff`;

  if (onHover) {
    bgColor = `${highlight}d9`;
  } else {
    bgColor = `${highlight}ff`;
  }

  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        margin: `${margin}`,
        padding: `${padding}`,
        boxShadow: `${shadow}`,
        background: `${bgColor}`
      },
      onMouseEnter: () => toggleHover(),
      onMouseLeave: () => toggleHover()
    }, child);
  });
});