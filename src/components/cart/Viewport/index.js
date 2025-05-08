import React, { useState, useEffect } from 'react';
import useSize from '@/components/hooks/useSize';

/**
 * 视窗容器组件
 * @param { ReactNode } children 子组件
 * @param { string } background 背景色
 */
export default function Viewport({ children, background = '#000' }) {
  const dimensions = useSize()

  // const [dimensions, setDimensions] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight
  // });

  // useEffect(() => {
  //   const handleResize = () => {
  //     setDimensions({
  //       width: window.innerWidth,
  //       height: window.innerHeight
  //     });
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return (
    <div style={{
      width: `${dimensions.width}px`,
      height: `${dimensions.height}px`,
      background,
      overflow: 'hidden'
    }}>
      {React.Children.map(children, child => {
        return child ? React.cloneElement(child, {
          style: {
            ...child.props.style,
            width: '100%',
            height: '100%'
          }
        }) : null;
      })}
    </div>
  );
}