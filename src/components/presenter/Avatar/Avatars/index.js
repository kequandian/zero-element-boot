import AutoLayout from '@/components/AutoLayout';
import React from 'react';
import layout from './layout'

/**
 * 头像列表
 */


export default function Index(props) {
    const {items, dataSource=items, ...rest} = props

    return (
        <AutoLayout layout={layout} items={dataSource} {...rest} />
    )

}