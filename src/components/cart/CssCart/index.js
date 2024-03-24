import React from 'react';


/**
 * CssCart to receive the native css style
 * @param {object} style css样式
 * @param {array} csshain 多个 CssCart 风格叠加到一个 CssCart 中
 * @returns 
 */
export default function CssCart(props) {

  const { children, style, csshain = [], ...rest }=props;

  let allStyles = {}

  csshain.forEach(function(css) {
      const {children, style:chainStyle, ...chainrest}  = css.props;
      allStyles = {...allStyles, ...chainStyle, ...chainrest}  
  });

  return React.Children.map(children, child => {
    return <div style={{ flex:1,  ...style, ...rest, ...allStyles}} >
        {child}
    </div>
  })
}

