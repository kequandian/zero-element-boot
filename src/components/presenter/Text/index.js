import React, { useState } from 'react';

import { Text } from "@chakra-ui/react";

/**
 * 
 * @param { string } comment 展示的数据
 * @param { object } rest Text样式，通过 props:{} 设置
 * 
 */

export default function Index(props) {

    const { comment, ...rest } = props;

    return (
        <Text {...rest}>{comment}</Text>
    )
}