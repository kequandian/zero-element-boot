import React, { useImperativeHandle, forwardRef, useState } from 'react';
export default /*#__PURE__*/forwardRef(function HoverShadowCart(props, ref) {
  /**
   * fill         背景
   * corner       圆角
   * stroke       边框
   * linewidth    边框线框
   * margin       边距
   * padding      内距
   * shadow       0 2px 8px rgba(0, 0, 0, 0.15)
   */
  const {
    children,
    fill = '#ffffff',
    corner = '4px',
    stroke = 'solid',
    linewidth = '1px',
    margin = '6px',
    padding = '10px',
    shadow = '0 0px 10px rgba(0, 0, 0, 0.35)',
    lineColor = '#DFE1E5'
  } = props;
  const [onHover, setOnHover] = useState(false);
  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `c-HoverShadowCart`;
    }
  }));

  const toggleHover = () => {
    const result = !onHover;
    setOnHover(result);
  };

  let bgColor = `#ccc`;
  let showShadow = '';

  if (onHover) {
    bgColor = `#ffffdd`;
    showShadow = shadow;
  } else {
    bgColor = `#ccc`;
    showShadow = '';
  }

  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      className: "c-hoverShadowCart-item",
      style: {
        margin: `30px`,
        padding: `30px`,
        borderRadius: `10px`,
        background: `${bgColor}`,
        borderStyle: `dashed`,
        boxShadow: `${showShadow}`,
        borderWidth: `${linewidth}`,
        borderColor: `#fffff0`
      },
      onMouseEnter: () => toggleHover(),
      onMouseLeave: () => toggleHover()
    }, child); // return <div align="center" style={{position: 'relative'}}>
    //   <div className="contener">
    //     <div className="txt_init">
    //       LOW POLY BACKGROUND</div>
    //     <div className="opac">
    //       Download</div>
    //   </div>
    // </div>
  });
});