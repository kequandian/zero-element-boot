import React, { useState } from 'react';
import { Image, others } from '@chakra-ui/react'
import { getEndpoint } from '@/components/config/common';
import { getContentName } from '../utils/tools';
import useTokenRequest from '@/components/hooks/useTokenRequest';
import _ from 'lodash'

export default function Index(props) {

    const { data } = props;

    if(!data){
        return
    }

    //宮格属性
    let gridColumns = 3
    let gridRows = 3


    //图片布局
    let layoutType = ''
    if(data.indexOf('[[') !== -1 && data.indexOf(']]') !== -1){
        const layoutStr = getLayoutContent(data.replace(' ', ''))
        if(layoutStr){
            if(layoutStr.indexOf('#') !== -1){
                layoutType = '#'
            }
        }
    }

    //图片数据源
    // let list = ''
    let [ list, setList ] = useState('')
    //图片集名
    let imgListName = ''
    const imgEndpoint = 'https://house.cloud.smallsaas.cn'
    if(data.startsWith('[-]') || data.startsWith('[-] ')){
        if(data.indexOf('<<') != -1 && data.indexOf('>>') != -1){
            imgListName = getContentName(data)
        }else{
            list = getImgUrl(data)
        }
    }

    //获取图片集列表
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

    //获取布局内容
    function getLayoutContent(str){
        if(str && str.indexOf('[[') !== -1){
            let regex = /\[\[(.*?)\]\]/g; 
            let arr = str.match(regex); 
            const content = arr[0].substr(2, arr[0].length-3)
            return content
        }
        return ''
    }

    //拼接图片路劲
    function splicingUrl (url){
        return url.startsWith('http') ? url : imgEndpoint + url
    }

    //
    function imageLoad (e) {
        const id = e.target.id
        const query = document.getElementById(id)
        list.map(item => {
            item.height = query.width
        })
        setList(list)
    }

    const s = {
        margin: 0,
        width: '100%'
    }

    
    console.log('list1111 == ', list)

    return (
        <div style={{margin: 0}}>
            {
                //常规布局
                !layoutType ? (
                    list && Array.isArray(list) ? list.map((item, index) => {
                        return <Image src={splicingUrl(item.albumUrl || item)} style={s} key={index}/>
                    }) : (
                        <Image src={splicingUrl(list)} style={s} />
                    )
                ):(
                    // 宫格布局
                    layoutType === '#' ? (
                        <div style={{display: 'grid', gridTemplateColumns: "repeat(3, 1fr)", gap: '4px 4px'}}>
                            {
                                list && Array.isArray(list) && list.map((item, index) => {
                                    return <Image id={`grid_${index}`} src={splicingUrl(item.albumUrl || item)} style={{height: item.height}} key={index} onLoad={imageLoad}/>
                                })
                            }
                        </div>
                    ):(
                        <></>
                    )
                )
            }
        </div>
        
        
    )
}