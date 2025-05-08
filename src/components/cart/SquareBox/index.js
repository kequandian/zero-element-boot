import React, { useState, useEffect, useRef } from 'react';

require('./index.less');

/**
 * 
 * @param { string } margin 外边距
 * @param { string } padding 内边距
 * @param { string } fill 背景色
 * @param { string } stroke 边框线色
 * @param { string } corner 圆角
 * @param { number } ratio 高宽比参数(默认 1.0)
 * 
 */
export default function SquareBox(props) {

  const {
    children, fill = 'transparent', stroke='#55a', corner = '8px', margin = '2px', padding='4px', ratio=1.0 } = props;

  const parentRef = useRef(null);
  const [parentWidth, setParentWidth] = useState(null);

  useEffect(() => {
    const resizeHandler = () => {
      if (parentRef.current) {
        const width = parentRef.current.getBoundingClientRect().width;
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
        padding: `${padding}`,
        borderRadius: `${corner}`,
        background: `${fill}`,
        width: `${parentWidth}px`,
        height: `${parentWidth*ratio}px`,
        border: `1px solid ${stroke}`
      }}
      >
          {child}
      </div>
    )
  })
}
