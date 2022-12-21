import React, { useRef, useSize } from 'react';
import useLayout from '@/components/hooks/useLayout';
import ContainerContext from '@/components/AutoX/ContainerContext';

/**
 * 
 * @param {number } offset 顶部padding大小
 * @param {color } fill    背景颜色
 * 
 */
export default function HCenter(props) {

    const { children, fill='transparent', offset = 0 } = props

    
    const containerRef = useRef();
    const size = useSize(containerRef);
    console.log('size = ', size)

    // const getWidth = size.width < 1920 ? '65vh' : size.width < 1024 ? '80vh' : ''

    // const bodyWidth = getWidth ? { width : getWidth} : {}

    console.log('bodyWidy = ', bodyWidth)

    return (
        React.Children.map(children, child => {
            return (
                <div style={{
                    // cursor: 'pointer',
                    display: 'flex',
                    justifyContent: "center",
                    // ...bodyWidth
                }}>
                    <div style={{
                        backgroundColor: `${fill}`,
                        width: 'auto', 
                        height: 'auto',
                        marginTop:`${offset}`
                    }} >
                        {child}
                    </div>
                </div>
            )
            
        })
    )
}