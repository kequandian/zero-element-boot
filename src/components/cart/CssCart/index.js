import React from 'react';


/**
 * CssCart to receive the native css style
 * @param {object} style css样式
 * @param {array} cssqueue 多个 CssCart 风格叠加 
 * @returns 
 */
export default function CssCart(props) {

  const { children, style, cssqueue = [], ...rest }=props;

  let queuedStyles = {}

  cssqueue.forEach(function(css) {
      const {children, style, cssqueue, ...rest}  = css.props;
      queuedStyles = {...queuedStyles, ...style, ...rest}  
  });

  return React.Children.map(children, child => {
    return <div style={{ flex:1,  ...style, ...rest, ...queuedStyles}} >
        {child}
    </div>
  })
}

