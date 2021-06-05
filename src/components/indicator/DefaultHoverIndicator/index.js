import React from 'react';

/**
 * 
 * @param {color} fill 背景
 */
export default function DefaultHoverIndicator(props) {

  const { children, fill = '#ffffff'} = props;

  let bgColor = `${fill}80`;

  return React.Children.map(children, child => {
    return <div style={{background: `${bgColor}`}}>
       {child}
    </div>
  })

}
