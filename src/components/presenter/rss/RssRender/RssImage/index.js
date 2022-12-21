import React from 'react';
import { Image } from '@chakra-ui/react'
import { getEndpoint } from '@/components/config/common';

export default function Index(props) {

    const { data, styles } = props;

    if(!data){
        return
    }
    
    let list = ''
    const imgEndpoint = 'https://house.cloud.smallsaas.cn'
    if(data.indexOf('[-]') != -1){
        list = getImgUrl(data)
    }

    const s = {
        margin: 0,
        width: '100%',
        ...styles || {}
    }

    //获取括号内容 
    function getImgUrl(str){
        if(str && str.indexOf('(') !== -1){
            let regex = /\((.*?)\)/g; 
            let arr = str.match(regex); 
            const imgStr = arr[0].substr(1, arr[0].length-2)
            if(imgStr.indexOf(',') !== -1){
                return imgStr.split(',')
            }
            return imgStr
        }
        return ''
    }

    return (
        list && Array.isArray(list) ? list.map((item, index) => {
            return <Image src={imgEndpoint + item} style={s} key={index}/>
        }) : (
            <Image src={imgEndpoint + list} style={s} />
        )
    )
}