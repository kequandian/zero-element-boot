import React, { useImperativeHandle, forwardRef } from 'react';

import Shape from '../Shape'

require('./index.less');

export default forwardRef(function Rectangle(props, ref) {

  /**
   * corner     圆角半径
   * fill       背景色
   * stroke     线框色
   * lineWidth  线框粗
   * outline    边界线类型
   */

  const { children } = props;

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `c-Rectangle`;
    }
  }));


  return React.Children.map(children, child => {
    
    const { corner = '0px', fill = '#1ab3f1', stroke = '#7e2df0', lineWidth = '2', outline= 'solid' } = 
    props.corner || props.fill || props.stroke || props.lineWidth || props.outline ? props : child.props.cart.props;

    const config = {
      corner,
      fill, 
      stroke, 
      lineWidth,
      outline
    }

    return (
        <Shape {...config} >
          {child}
        </Shape>
    )
  })

  // return React.Children.map(children, child => {
  //   return <div style={{ borderStyle:`${outline}`, borderRadius: `${corner}`, background: `${fill}`, borderColor:`${stroke}`, borderWidth:`${lineWidth}px` }}>
  //     {child}
  //   </div>
  // })


})