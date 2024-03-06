import React, { useState } from 'react';
import styles from './index.less'

/**
 * 使用例子
 * cart:{},
   indicator:{
    xname:'LabelIndicator',
    props:{
    },
   },
   binding:{
    apiField:'label'
   },
   container:{}
 * 
 * @param { object } indicatorData 为上述 binding 处理的参数, apiField 为api字段
 */

export default function LabelIndicator(props) {

    const { 
        children, 
        indicatorData={label:""},
        ...rest
    } = props;

    return (
        <div className={styles.labelIndicatorContainer}>
            {
                React.Children.map(children, child => (
                    child
                ))
            }
            <div className={styles.labelContent}>
                {indicatorData.label || ''}
            </div>
        </div>
    )
}
