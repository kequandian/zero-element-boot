import React, { useState } from 'react';
require('./index.less');

/**
 * 使用例子
 * cart:{},
   indicator:{
    xname:'TitleActionIndicator',
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

export default function TitleActionIndicator(props) {

    const { 
        children, 
        indicatorData={titleContent:""},
        ...rest
    } = props;

    return (
        <div className='titleActionIndicatorContainer'>
            <div className='titleActionContent'>
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
