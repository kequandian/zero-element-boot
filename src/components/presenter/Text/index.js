import React, { useState } from 'react';

import { Text } from "@chakra-ui/react";

/**
 * 
 * @param { string } content 展示的数据
 * 其他参数，参考chakra-ui/Text 的组件参数说明: https://chakra-ui.com/docs/components/text
 */

export default function Index(props) {

    const { content, ...others } = props;
// console.log('content =',content)
console.log('props =',props)
    return (
        <Text {...others}>{content}</Text>
    )
}