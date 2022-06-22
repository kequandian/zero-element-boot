import React, { useState } from 'react';
import { history } from 'umi';


/**
 * 
 * @param {color} color 背景，边框，字体颜色
 * @param {solid} solid 深色背景，字体白色
 * @param {outline} outline 有边框，背景半透明
 * @param {add} add 加号
 * @param {navigation} navigation  点击响应外部事件
 * @param {onAction} onAction 点击响应内部事件
 * 
 */


export default function Index(props) {

    const { children, color = '#8e72ff', solid, outline, add, navigation, onAction } = props;

    const bg = (!outline && solid) ? `${color}` : (outline && !solid) ? `${color}26` : null

    const border = (outline && !solid) ? `2px ${color} solid` : null

    const colors = (!outline && solid) ? '#ffffff' : `${color}`

    const title = add ? '+' : null


    const onHandleButtonClick = (ButtonClick) => {
        console.log('ButtonClick == ', ButtonClick)
    }

    const path = () => {
        history.push({
            pathname: '/GetRouterPath',
            query: {
                id: '20'
            }
        })
    }

    const onTagClick = (!onAction && navigation) ? path : (onAction && !navigation) ? onHandleButtonClick : null

    console.log(navigation, '== navigation')

    console.log(onAction, '== onAction')

    const baseStyle = {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '150px',
        backgroundColor: `${bg}`,
        color: `${colors}`,
        border: `${border}`,
        borderRadius: '10px',
        margin: '6px'
    }


    return (
        <div style={baseStyle} onClick={onTagClick}>
            <div style={{ margin: 'auto 2px 6px 2px', fontWeight: 'bold', fontSize: '30px', lineHeight: '100%' }} > {title}</div>
            {
                React.Children.map(children, child => (
                    child

                ))
            }
        </div>
    )
}