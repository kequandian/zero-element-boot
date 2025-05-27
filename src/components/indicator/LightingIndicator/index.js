import React, { useState } from 'react';

/**
 * 鼠标移在上面时，通过设置透明度加亮显示
 * @param {number} opacity 透明度
 * @param {string} color 背景色
 * 
 */
export default function LightingIndicator(props) {

  const { children, opacity='0.7'} = props;

  const [onHover, setOnHover] = useState(false);

  const toggleHover = () => {
    const result = !onHover;
    setOnHover(result)
  }

  let _opacity = 1;
  if (onHover) {
    _opacity = `${opacity}`;
  } else {
    _opacity = 1;
  }

  return React.Children.map(children, child => {
    return <div style={{
      opacity: _opacity
    }}
      onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}
    >
      {child}
    </div>
  })
}