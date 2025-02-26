
import React from 'react'

import useSize from '@/components/hooks/useSize'
import useLayout from '@/components/hooks/useLayout'

/**
 * 
 * @param {color } backgroundColor 背景颜色
 * 
 */
export default function PageCenter(props) {
  const [layoutRef, { getClassName }] = useLayout();

  const size = useSize()

  const { children, backgroundColor = '#ffffff', ...rest } = props

  // return <div className={getClassName()}>
  //      {React.Children.map(children, child => {
  //     return <div style={{
  //       backgroundColor: `${backgroundColor}`,
  //       cursor: 'pointer',
  //       display: 'flex',
  //       justifyContent: "center",
  //       width: '100%',
  //       height: `${size.height}px`,
  //       alignItems: 'center',
  //     }}>
  //       {child}
  //   </div>})
  //   }
  
  return <div className={getClassName()}>
      {React.Children.map(children, child => {
          return React.cloneElement(child, {
            style: {
                backgroundColor: `${backgroundColor}`,
                cursor: 'pointer',
                display: 'flex',
                justifyContent: "center",
                width: '100%',
                height: `${size.height}px`,
                alignItems: 'center',
            }, 
            ref: layoutRef,
            ...rest
        })})
      }
    </div>
}
