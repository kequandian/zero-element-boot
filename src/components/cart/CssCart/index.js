import React from 'react';


/**
 * CssCart to receive the native css style
 * @param {object} style css样式
 * @param {array} assembly 多个 CssCart 风格叠加到一个 CssCart 中
 * @returns 
 */
export default function CssCart(props) {

  const { children, style, assembly = [], ...rest }=props;

  let allStyles = {}
  assembly.forEach(function(item) {
      const {children, style:itemStyle, ...itemRest}  = item.props;
      allStyles = {...allStyles, ...itemStyle, ...itemRest}  
  });

  return React.Children.map(children, child => {
    return <div style={{ flex:1,  ...style, ...rest, ...allStyles}} >
        {child}
    </div>
  })
}

