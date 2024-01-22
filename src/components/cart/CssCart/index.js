import React from 'react';


/**
 * 
 * @param {style} style css样式
 * 
 * @returns 
 */
export default function CssCart(props) {

  const { children, style }=props;

  return React.Children.map(children, child => {
    return <div  style={{ flex:1,  ...style}} >
      {child}
    </div>
  })
}