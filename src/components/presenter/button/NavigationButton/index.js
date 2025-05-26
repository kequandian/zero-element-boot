import React, { useState } from 'react';
import { history } from 'umi';
import useQuery from '@/components/hooks/useQuery.js'


/**
 * 跳转至外部路径
 * @param {color} color 背景 + 边框 + 字体颜色
 * @param {height} height 高度, 默认高度 40px
 * @param {solid} solid 深色背景，字体白色
 * @param {outline} outline 有边框，背景半透明
 * @param {navigation} navigation  外部路径
 * 
 */
export default function Index(props) {

    const { children, color='#8e72ff', height='40px', solid, outline, navigation} = props;

    // style
    const bg = (!outline && solid) ? `${color}` : (outline && !solid) ? `${color}26` : null
    const border = (outline && !solid) ? `2px ${color} solid` : null
    const colors = (!outline && solid) ? '#ffffff' : `${color}`
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
        margin: '6px',
        height:`${height}`
    }

    function onButtonClick () {
        const queryData = useQuery(navigation)
        history.push(queryData)
    }

    return (
        <div style={baseStyle} onClick={()=>onButtonClick()}>
            {/* {add ?
                <>
                    <div style={{ margin: 'auto 2px', fontWeight: 'bold', fontSize: '30px', lineHeight: '100%' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill={colors} className="bi bi-plus-lg" viewBox="0 0 20 16">
                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                        </svg>
                    </div>
                    {
                        React.Children.map(children, child => (
                            child

                        ))
                    }
                </>
                : <> */}
                    {
                        React.Children.map(children, child => (
                            child
                        ))
                    }
                {/* </>
            } */}
        </div>
    )
}