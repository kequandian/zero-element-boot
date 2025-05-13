import React from 'react';
import { Center } from '@chakra-ui/react'
import usePalette from '@/components/hooks/usePalette';

/**
 * @param {String} name 文字
 * @param {String} bg 背景色
 * @param {String} color 文字颜色
 */
export default function DefaultPlaceholder (props) {
    const { children: content,  color, bg='#232330' } = props;
    const pal = usePalette()

    const bgcolor = pal.color || bg
    
    return (
        <Center bg={bgcolor} color={color}  w='100%' h='100%' fontSize={'18px'} fontWeight={'bold'}>
         {content || pal.name}
        </Center>
    )
}
