import React, { useState } from 'react';
// import useLayout from '@/components/hooks/useLayout';
import NextIndicator from '@/components/NextIndicator';
import { get as DefaultCartSet } from '@/components/config/NamedCartConfig';


/**
 * @param {Component} DefaultIndicator  default Cart
 * @param {Component} HoverIndicator    hover Cart
 * @param {Object} defaultIndicator defaultIndicator props
 * @param {Object} defaultIndicatorData defaultIndicator props
 * @param {Object} hoverIndicator defaultIndicator props
 * @param {Object} hoverIndicatorData   hoverIndicator props
 * @returns 
 */
 export default function HoverOverlay( { children, 
                                         DefaultIndicator,
                                         HoverIndicator,
                                         defaultIndicator, defaultIndicatorData={},
                                         hoverIndicator, hoverIndicatorData={},
                                       }) {

// const [defaultRef, { getClassName }] = useLayout();
// const [hoverRef, { getHoverStyles }] = useLayout();

const [onHover, setOnHover] = useState(false);

const toggleHover = () => {
    const result = !onHover;
    setOnHover(result)
}

const toggleSelected = () => {
  const result = !onSelected;
  setSelected(result)
}

const __DefaultIndicator =  DefaultIndicator || getNamedCart(defaultIndicator)
const __HoverIndicator =  HoverIndicator || getNamedCart(hoverIndicator)

return React.Children.map(children, child => {
  return (
    <div style={{flex: 1}} onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}>
      <__HoverIndicator {...hoverIndicatorData} >
          <__DefaultIndicator {...defaultIndicatorData}>
                {child}
          </__DefaultIndicator>
      </__HoverIndicator>
    </div>
    )
  })
}

function getNamedCart(cart) {
  const cartName = cart ? ((typeof cart === 'string') ? cart : cart.xname) : undefined
  return cart ? (DefaultCartSet[cartName] || tips(cartName)) : NextIndicator;
}


function tips(name) {
  return _ => `HoverOverlay::NamedCart ${name} 未定义`;
}

