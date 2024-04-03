import React, { useState } from 'react';
require('./index.less');

/**
 * 使用例子
 * cart:{},
   indicator:{
    xname:'TitleIndicator',
    props:{
    },
   },
   binding:{
    apiField:'titleContent'
   },
   container:{}
 * 
 * @param { object } indicatorData 为上述 binding 处理的参数, apiField 为api字段
 * @param { string } scale 为上述 indicator 处理的参数
 */

export default function TitleIndicator(props) {

    const { 
        children, 
        indicatorData={titleContent:""},
        scale=0,
        ...rest
    } = props;

    const height = scale && parseInt(scale) === 1 ? `100%` : 'auto';

    return (
        <div className='titleIndicatorContainer' style={{height:height}}>
            <div className='titleIndicatorContent'>
                {indicatorData.titleContent || ''}
            </div>
            {
                React.Children.map(children, child => (
                    child
                ))
            }
        </div>
    )
}
