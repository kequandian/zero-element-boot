import React from 'react';
import { Image } from '@chakra-ui/react'
import { getEndpoint } from '@/components/config/common';
import { getContentName } from '../utils/tools';
import useTokenRequest from '@/components/hooks/useTokenRequest';

export default function Index(props) {

    const { data } = props;

    if(!data){
        return
    }

    let list = ''
    let imgListName = ''
    const imgEndpoint = 'https://house.cloud.smallsaas.cn'
    if(data.startsWith('[-]') || data.startsWith('[-] ')){
        if(data.indexOf('<<') != -1 && data.indexOf('>>') != -1){
            imgListName = getContentName(data)
        }else{
            list = getImgUrl(data)
        }
    }

    
    const api = imgListName ? `${getEndpoint()}/api/u/autoApi/album/json/${imgListName}` : '';
    const imgListRsponse = useTokenRequest({ api });
    if(imgListRsponse && typeof imgListRsponse[0] === 'object'){
        list = imgListRsponse[0].items
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

    //拼接图片路劲
    function splicingUrl (url){
        return url.startsWith('http') ? url : imgEndpoint + url
    }

    const s = {
        margin: 0,
        width: '100%'
    }

    return (
        list && Array.isArray(list) ? list.map((item, index) => {
            return <Image src={splicingUrl(item.albumUrl || item)} style={s} key={index}/>
        }) : (
            <Image src={splicingUrl(list)} style={s} />
        )
    )
}