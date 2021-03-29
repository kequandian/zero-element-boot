import React, { useImperativeHandle, forwardRef, useState } from 'react';

require('./index.less');

export default forwardRef(function HightlightCart(props, ref) {

  /**
   * 
   * fill         背景
   * margin       边距
   * padding      内距
   * 
   */

  const {  children, fill = '#ffffff',  margin = '6px', padding = '10px' } = props;

  const [onHover, setOnHover] = useState(false);

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `c-HightlightCart`;
    }
  }));

  const toggleHover = () => {
    const result = !onHover;
    setOnHover(result)
  }

  let bgColor = `${fill}ff`;
  if (onHover) {
    bgColor = `${fill}80`;
  } else {
    bgColor = `${fill}ff`;
  }

  return React.Children.map(children, child => {
    return <div style={{
      margin: `${margin}`,
      padding: `${padding}`,
      background: `${bgColor}`,
    }}
      onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}
    >
      {child}
    </div>
  })
})