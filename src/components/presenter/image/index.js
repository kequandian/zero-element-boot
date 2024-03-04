import React from 'react';
import { Image, Box } from '@chakra-ui/react';

/**
 * 
 * @param { number } width 宽度
 * @param { number } height 高度
 * @param {url} url 图片链接
 * 
 */

const _url = 'https://bit.ly/dan-abramov'

export default function Index(props) {

    const { width=144, height='auto', url = _url } = props;
    console.log("image = ",props)

    return (
        <Image w={width+'px'} height={height+'px'} src={url} />
    )
}