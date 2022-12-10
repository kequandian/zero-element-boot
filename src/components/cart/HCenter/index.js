import React from 'react';

/**
 * 
 * @param {number } offset 顶部padding大小
 * @param {color } fill    背景颜色
 * 
 */
export default function HCenter(props) {

    const { children, fill='transparent', offset = 0 } = props

    return React.Children.map(children, child => {
        return<div style={{
            // cursor: 'pointer',
            display: 'flex',
            justifyContent: "center",
        }}>
         <div style={{
            backgroundColor: `{fill}`,
            width: 'auto', 
            height: 'auto',
            marginTop:`${offset}`
        }} >
            {child}
        </div>
        </div>
    })
}