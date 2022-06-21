
import React from 'react';

import useSize from '@/components/hooks/useSize';

/**
 * 
 * @param {color } backgroundColor 背景颜色
 * 
 */
export default function HCart(props) {

  const size = useSize()

  const { children, backgroundColor = '#ffffff' } = props

  return React.Children.map(children, child => {
    return <div style={{

      backgroundColor: `${backgroundColor}`,
      cursor: 'pointer',
      display: 'flex',
      justifyContent: "center",
      width: '100%',
      height: `${size.height}px`,
      alignItems: 'center',
    }} >
      {child}
    </div>
  })
}

