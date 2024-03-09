import React, { useState, useEffect, useRef } from 'react';

require('./index.less');

/**
 * 
 * @param { string } margin 外边距
 * @param { string } fill 背景色
 * @param { string } corner 圆角
 * 
 */
export default function SquareCart(props) {

  const { 
    children, fill='#fff', corner = '8px', margin = '0px' } = props;


  // const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    // setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetWidth);
  }, []);

  return React.Children.map(children, child => {
    return (
        <div ref={ref} className='c-square-cart-item' style={{
          margin: `${margin}`,
          borderRadius: `${corner}`,
          background: `${fill}`,
          height: `${height}px`
        }}
        >
          {child}
        </div>
    )
  })
}