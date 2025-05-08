
import React, {useImperativeHandle, forwardRef} from 'react';

import useSize from '@/components/hooks/useSize';

/**
 * 
 * @param {color } backgroundColor 背景颜色
 * 
 */
// export default forwardRef(function PageCenter(props, ref) {
export default function PageCenter(props) {
  const { children, backgroundColor = '#ffffff' } = props
  const size = useSize()

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
  })}
// )

