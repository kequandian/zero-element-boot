import React from 'react';

import { Text } from "@chakra-ui/react";

/**
 * 
 * @param { string } content 展示的数据
 * 其他参数，参考chakra-ui/Text 的组件参数说明: https://chakra-ui.com/docs/components/text
 */

export default function Index(props) {
    // remove useless
    const { allComponents, onItemClick, onItemAdded,onItemDeleted,onItemChanged, dataSource, ...data} = props

    // main
    const { content, ...others } = data;
    // console.log('Text.data=',data)

    return (
        <Text {...others}>{content}</Text>
    )
}