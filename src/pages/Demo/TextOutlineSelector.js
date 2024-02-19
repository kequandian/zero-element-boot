import React from 'react';

import { ChakraProvider, HStack, Box, Button  } from '@chakra-ui/react';
import OutlineSelector from "@/components/selector/OutlineSelector";
import Title from '@/components/presenter/Text/index';
import { ItemPlaceholder } from '@/components/presenter';

export default function Index(props) {

    /**
     * 参数：
     * selected为true，激活组件点击事件
     * isSelected为true 展示点击效果 需要selected为false
     * lineWidth: 线宽
     * lineColor：边框颜色
     */

    const lineWidth = 2
    const lineColor = '#D9FF00'

    return (
        <OutlineSelector isSelected={"false"} selected={"true"} lineWidth={lineWidth} lineColor={lineColor} >
            <ItemPlaceholder/>
        </OutlineSelector>
       
    )
}
