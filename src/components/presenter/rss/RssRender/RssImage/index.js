import React from 'react';
import { Image } from '@chakra-ui/react'
import { getEndpoint } from '@/components/config/common';

export default function Index(props) {

    const { data, styles } = props;
    
    let url = ''
    const imgEndpoint = 'https://house.cloud.smallsaas.cn'
    if(data.indexOf('[-]') != -1){
        url = getImgUrl(data)
    }

    const s = {
        margin: 0,
        ...styles || {}
    }

    //获取括号内容 
    function getImgUrl(str){
        if(str && str.indexOf('(') !== -1){
            let regex = /\((.*?)\)/g; 
            let arr = str.match(regex); 
            return arr[0].substr(1, arr[0].length-2)
        }
        return ''
    }

    return (
        <Image src={imgEndpoint + url} style={s}/>
    )
}