import React, { useImperativeHandle, forwardRef } from 'react';
import Cart from '../Cart'

export default forwardRef(function OffsetCart(props, ref) {

  /**
   * corner     圆角半径
   * fill       背景色
   * stroke     线框色
   * lineWidth  线框粗
   * outline    边界线类型
   */

  const { children, margin = '10px' } = props;

  let config = {margin: margin}

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `c-cart-item`;
    }
  }));

  return React.Children.map(children, child => {
    return <Cart corner='' padding='' stroke='' {...config} >
       {child}
    </Cart>
  })
})