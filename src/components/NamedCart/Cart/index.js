import React, { useImperativeHandle, forwardRef, useState } from 'react';

require('./index.less');

export default forwardRef(function Cart(props, ref) {

  /**
   * fill         背景
   * corner       圆角
   * stroke       边框
   * linewidth    边框线框
   * margin       边距
   * padding      内距
   */

  const { 
    children, fill = '#ffffff', corner = '4px', stroke = 'solid', linewidth = '1px', 
    margin = '6px', padding = '10px', shadow = '0 2px 8px rgba(0, 0, 0, 0.15)', lineColor = '#d0cdcd' } = props;

  const [onHover, setOnHover] = useState(false);

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `C-Cart`;
    }
  }));

  const toggleHover = () => {
    const result = !onHover;
    setOnHover(result)
  }

  let bgColor = `${fill}ff`;
  if (onHover) {
    bgColor = `${fill}d9`;
  } else {
    bgColor = `${fill}ff`;
  }

  return React.Children.map(children, child => {
    return <div style={{
      margin: `${margin}`,
      padding: `${padding}`,
      borderRadius: `${corner}`,
      background: `${bgColor}`,
      borderStyle: `${stroke}`,
      boxShadow: `${shadow}`,
      borderWidth: `${linewidth}`,
      borderColor: `${lineColor}`
    }}
      onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}
    >
      {child}
    </div>
  })
})