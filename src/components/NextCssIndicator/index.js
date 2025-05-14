// const React = require('react');
import React from 'react'

/**
 * 用于叠加Css属性,但不产生新的 div 组件
 * 
 * */
export default function NextCssIndicator({ children, ...rest }) {

    const { style, ...css } = rest

    const cssStyle = {style: {...style, ...css}}

    console.log('cssStyle=', cssStyle)

    return React.Children.map(children, child => {
                return React.cloneElement(child, {
                    ...cssStyle
                })
            })
}
