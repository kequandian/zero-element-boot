import React, { useRef } from 'react';
import useSize from '@/components/hooks/useSize';

/**
 * 
 * @param {number } offset 顶部padding大小
 * @param {color } fill    背景颜色
 * 
 */
export default function HCenter(props) {

    const { children, fill='transparent', offset = 0 } = props

    //获取屏幕宽高
    const size = useSize()
    //获取当前设备
    const userAgent = navigator.userAgent
    
    let getWidth = ''
    if(userAgent.match(/Android/i) || userAgent.match(/webOS/i) || userAgent.match(/iPhone/i) 
        || userAgent.match(/iPad/i) || userAgent.match(/iPod/i) || userAgent.match(/BlackBerry/i) || userAgent.match(/Windows Phone/i)) {
        //移动端
     } else {
         //pc端
         getWidth = size.width < 1024 ? '40vh' : size.width < 1920 ? '50vh' : '60vh'
     }

    const bodyWidth = getWidth ? { width : getWidth} : {}

    return (
        
        <div style={{
            // cursor: 'pointer',
            display: 'flex',
            justifyContent: "center",
        }}>
        {React.Children.map(children, child => {
            return (
                <div style={{
                    // cursor: 'pointer',
                    display: 'flex',
                    justifyContent: "center",
                    ...bodyWidth
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
            
        })}
        </div>
    )
}