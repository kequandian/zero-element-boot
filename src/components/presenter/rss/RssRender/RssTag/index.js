import React from 'react';
import { getEndpoint } from '@/components/config/common';
import promiseAjax from '@/components/utils/promiseAjax';
import useTokenRequest from '@/components/hooks/useTokenRequest';
require('./index.less')

export default function Index(props) {

    const { data='', styles } = props;

    function getCssName(str){
        if(str && str.indexOf('<<') !== -1){
            let regex = /\<\<(.*?)\>\>/g; 
            let arr = str.match(regex); 
            return arr[0].substr(2, arr[0].length-4)
        }
    }

    function getTags(str){
        const list = str.split('>>')[1].split(',')
        console.log('list = ', list)
        return list
    }

    const cName = getCssName(data)
    console.log('cName = ', cName)

    const api = `${getEndpoint()}/openapi/lc/autoApi/lowAutoPageStyles/rss/json/${cName}`;
    const styleObj = useTokenRequest({ api });
    const styleData = (styleObj && styleObj[0]) || {}

    console.log('styleData == ', styleData)

    function getCss(styleName){
        const api = `${getEndpoint()}/openapi/lc/autoApi/lowAutoPageStyles/rss/json${styleName}`
        promiseAjax(api).then(rsp => {

        }).finally(_=>{

        })
    }

    const s = {
        margin: 0,
        ...styles
    }

    return (
        <div className='tag_container' style={s}>
            {
                getTags(data).map((item, index) => {
                    return <div key={index} style={{marginRight:'4px'}}>{item}</div>
                })
            }
        </div>
    )
}