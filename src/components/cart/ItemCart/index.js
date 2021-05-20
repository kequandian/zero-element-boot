import React, { useImperativeHandle, forwardRef } from 'react';
import Cart from '../Cart'

export default forwardRef(function ItemCart(props, ref) {

  /**
   * corner     圆角半径
   * fill       背景色
   * stroke     线框色
   * lineWidth  线框粗
   * outline    边界线类型
   */

  const { children, padding = '10px', margin = '10px' } = props;

  let config = {padding: padding, margin: margin, }

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `c-cart-item`;
    }
  }));

  return React.Children.map(children, child => {
    return <Cart corner='' margin='' stroke='solid' {...config} >
       {child}
    </Cart>
  })
})