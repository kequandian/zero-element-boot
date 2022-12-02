import React, { useState } from 'react';

import { Text } from "@chakra-ui/react";

/**
 * 
 * @param { string } comment 展示的数据
 * @param { object } others Text样式，通过 props:{} 设置
 * 
 */

export default function Index(props) {

    const { content, ...others } = props;

    return (
        <Text {...others}>{content}</Text>
    )
}