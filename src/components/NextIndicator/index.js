// const React = require('react');
import React from 'react'

/**
 * 用于将接收到的所有参数传递给子组件
 * 相当于一个无效果的仅传递参数的子组件
 * 
 * */
export default function NextIndicator({ children, ...rest }) {

    return React.Children.map(children, child => {
                return React.cloneElement(child, {
                    ...rest
                })
            })
    // return React.Children.map(children, child => {
    //     return (
    //     <>
    //         return React.cloneElement(child, {
    //             ...rest
    //             })
    //     </>
    //     )
    //   })
}