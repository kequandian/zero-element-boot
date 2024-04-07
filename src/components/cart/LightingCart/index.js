import React, { useState } from 'react';

/**
 * 
 * @param {number} opacity 透明度
 * 
 */
export default function LightingCart(props) {

  const { children, opacity='0.6' } = props;

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
      opacity: _opacity,
    }}
      onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}
    >
      {child}
    </div>
  })
}