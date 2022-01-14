import React from 'react';
export default function Page(props) {
  const {
    children,
    otherStyle,
    //额外样式
    width = "100vw",
    //设定宽度
    height = "100vh" //设定高度

  } = props;
  let centerStyles = {
    //居中样式
    display: "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "width": width,
    "height": height,
    "margin": 0,
    "padding": 0,
    ...otherStyle
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "page_container",
    style: centerStyles
  }, Array.isArray(children) ? children.map((item, i) => {
    return item;
  }) : children);
}