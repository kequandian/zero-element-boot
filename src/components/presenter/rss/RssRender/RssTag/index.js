import React from 'react';
import { getEndpoint } from '@/components/config/common';
import useTokenRequest from '@/components/hooks/useTokenRequest';
require('./index.less')

const tagItemDefaultStyle = {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "padding": "0px 10px",
    "fontSize": "15px",
    "color": "black",
    "borderRadius": "35px",
    "backgroundColor": "#F5F5F7",
    "height": "30px"
}

export default function Index(props) {

    const { data='' } = props;

    function getCssName(str){
        if(str && str.indexOf('<<') !== -1){
            let regex = /\<\<(.*?)\>\>/g; 
            let arr = str.match(regex); 
            return arr[0].substr(2, arr[0].length-4)
        }
    }

    function getTags(str){
        const listStr = str.indexOf('>>') != -1 ? str.split('>>')[1] : str.indexOf(' ') ? str.replace(';;; ', '') : str.replace(';;;', '')
        return listStr.indexOf(',') !== -1 ? listStr.split(',') : listStr
    }

    const cName = getCssName(data)

    const api = `${getEndpoint()}/openapi/lc/autoApi/lowAutoPageStyles/rss/json/${cName}`;
    const styleObj = useTokenRequest({ api });
    const styles = (styleObj && styleObj[0]) || tagItemDefaultStyle

    return (
        <div className='tag_container' style={{margin: 0}}>
            {
                getTags(data).map((item, index) => {
                    return <div key={index} style={{...styles, marginRight:'4px', marginBottom:'4px'}}>{item}</div>
                })
            }
        </div>
    )
}