import React, { useImperativeHandle, forwardRef } from 'react';
import Cart from '../../hoverCart/Cart'

export default forwardRef(function ItemCart(props, ref) {

  /**
   * fill       背景色
   * stroke     线框色
   * lineWidth  线框粗
   * outline    边界线类型
   */

  const { children, padding = '10px', margin = '10px', stroke='solid' } = props;

  let config = {padding, margin, stroke }

  // useImperativeHandle(ref, () => ({
  //   getClassName: () => {
  //     return `c-cart-item`;
  //   }
  // }));

  return React.Children.map(children, child => {
    return <Cart corner='' {...config} >
       {child}
    </Cart>
  })
})