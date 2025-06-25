import React from 'react';
import { Center } from '@chakra-ui/react'
import usePalette from '@/components/hooks/usePalette';

/**
 * @param {String} name 文字
 * @param {String} bg 背景色
 * @param {String} color 文字颜色
 */
export default function DefaultPlaceholder (props) {
    const { children, content, gridPath, color} = props;
    const pal = usePalette()

    const info = (content && gridPath) ? `${gridPath}@${content}` : content || gridPath;
    
    return (
        <Center bg={pal.color} color={color}  w='100%' h='100%' fontSize={'18px'} fontWeight={'bold'}>
         {children || info || pal.name}
        </Center>
    )
}
