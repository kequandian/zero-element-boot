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
 */

export default function TitleIndicator(props) {

    const { 
        children, 
        indicatorData={titleContent:""},
        ...rest
    } = props;

    return (
        <div className='titleIndicatorContainer'>
            <div className='titleContent'>
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
