import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

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
    children, fill = '#fff', corner = '8px', margin = '0px' } = props;

  const parentRef = useRef(null);
  const [parentWidth, setParentWidth] = useState(null);

  useEffect(() => {
    const resizeHandler = () => {
      if (parentRef.current) {
        const width = parentRef.current.getBoundingClientRect().width;
        console.log(' SquareCart width = ', width)
        setParentWidth(width);
      }
    };

    const handleFirstRender = () => {
      setTimeout(resizeHandler, 0);
    };

    window.addEventListener('resize', resizeHandler);
    handleFirstRender(); // Delay the first render
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return React.Children.map(children, child => {
    return (
      <div ref={parentRef} className='c-square-cart-item' style={{
        margin: `${margin}`,
        borderRadius: `${corner}`,
        background: `${fill}`,
        height: `${parentWidth}px`
      }}
      >
        {child}
      </div>
    )
  })
}