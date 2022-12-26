import React, { useState } from 'react';
import { Image, others } from '@chakra-ui/react'
import { getEndpoint } from '@/components/config/common';
import { getContentName } from '../utils/tools';
import useTokenRequest from '@/components/hooks/useTokenRequest';
import _ from 'lodash'
require('./index.less')

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
        const layoutStr = getLayoutContent(data.indexOf(' ') != -1 ? data.replace(' ', ''): data)
        console.log('layoutStr == ', layoutStr)
        if(layoutStr){
            if(layoutStr.indexOf('#') !== -1){
                layoutType = '#'
                gridColumns = JSON.parse(layoutStr.replace('#',''))[0]
            }else if(layoutStr.indexOf('=-') !== -1){
                layoutType = '=-'
            }else if(layoutStr.indexOf('-=') !== -1){
                layoutType = '-='
            }
        }
    }

    //图片数据源
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
            // const content = arr[0].substr(2, arr[0].length-3)
            const left = arr[0].replace('[[', '')
            const right = left.replace(']', '')
            const content = right
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

    return (
        <div style={{margin: 0, width:'100%'}}>
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
                        <div style={{display: 'grid', gridTemplateColumns: `repeat(${gridColumns}, 1fr)`, gap: '4px 4px'}}>
                            {
                                list && Array.isArray(list) && list.map((item, index) => {
                                    return (
                                        <div key={item.id} style={{width: '100%', height:item.height, overflow: 'hidden'}}>
                                            <Image id={`grid_${item.id}`} src={splicingUrl(item.albumUrl || item)} style={{width: '100%', height: '100%'}} onLoad={imageLoad}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ):(
                        layoutStr === '-=' ? (
                            <div class="flex_row" >
                                <div style="flex: 1;">
                                    <image id="type_two_left" class="big_img"  src={splicingUrl(list[0])} />
                                </div>
                                <div class="flex_col" style="flex: 1;">
                                    <div>
                                        <image class="small_img"  src={splicingUrl(list[1])}/>
                                    </div>
                                    <div>
                                        <image class="small_img"  src={splicingUrl(list[2])}/>
                                    </div>
                                </div>
                            </div>
                        ):(
                            <></>
                        )
                    )
                )
            }
        </div>
        
        
    )
}