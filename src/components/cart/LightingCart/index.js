import React, { useState } from 'react';

/**
 * 
 * @param {number} opacity 透明度
 * @param {string} color 背景色
 * 
 */
export default function LightingCart(props) {

  const { children, opacity='0.7', color='#E1E1E2' } = props;

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
      opacity: opacity,
      background: color
    }}
      // onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}
    >
      {child}
    </div>
  })
}