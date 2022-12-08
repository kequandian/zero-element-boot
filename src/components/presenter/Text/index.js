import React, { useState } from 'react';

import { Text } from "@chakra-ui/react";

/**
 * 
 * @param { string } content 展示的数据
 * Text样式，通过 props:{} 设置
 * 文档链接 https://chakra-ui.com/docs/components/text
 */

export default function Index(props) {

    const { content, ...others } = props;

    return (
        <Text {...others}>{content}</Text>
    )
}