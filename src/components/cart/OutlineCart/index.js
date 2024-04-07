import React, { useImperativeHandle, forwardRef, useState } from 'react';

require('./index.less');

export default forwardRef(function OutlineCart(props, ref) {

  /**
   * fill         背景
   * corner       圆角
   * stroke       边框
   * linewidth    边框线框
   * margin       边距
   * padding      内距
   * 
   * shadow       0 0px 10px rgba(0, 0, 0, 0.15)
   */

  const {
    children, fill = '#ffffff', corner = '4px', stroke = 'solid', linewidth = '1px',
    margin = '0px', padding = '8px', shadow = '', lineColor = 'transparent',  } = props;

  const [onHover, setOnHover] = useState(false);

  // useImperativeHandle(ref, () => ({
  //   getClassName: () => {
  //     return `c-OutlineCart`;
  //   }
  // }));

  const toggleHover = () => {
    const result = !onHover;
    setOnHover(result)
  }

  let bgColor = `${fill}ff`;
  let showShadow = '';
  let newLineColor = `${lineColor}`;
  if (onHover) {
    // bgColor = `${fill}80`;
    // showShadow = shadow;
    newLineColor = lineColor
  } else {
    // bgColor = `${fill}ff`;
    // showShadow = '';
    newLineColor = 'transparent'
  }

  return React.Children.map(children, child => {
    return <div className='c-OutlineCart-item' style={{
      margin: `${margin}`,
      padding: `${padding}`,
      borderRadius: `${corner}`,
      background: `${bgColor}`,
      borderStyle: `${stroke}`,
      boxShadow: `${showShadow}`,
      borderWidth: `${linewidth}`,
      borderColor: `${newLineColor}`
    }}
      onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}
    >
      {child}
    </div>
  })
})