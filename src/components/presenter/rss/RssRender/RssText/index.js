import React from 'react';
import { getEndpoint } from '@/components/config/common';
import useTokenRequest from '@/components/hooks/useTokenRequest';

const typeMap = {
    '#': 'H1',
    '##': 'H2',
    '###': 'H3',
    '####': 'H4',
    '#####': 'H5',
    '######': 'H6'
}

export default function Index(props) {

    const { type, content='' } = props;

    function handleContent(value){
        if(type.startsWith('#')){
            return value.replace(`${type} `, '')
        }
        return value.replace(`<${type}>`, '')
    }

    let paramStr = type
    if(type.startsWith('#')){
        paramStr = typeMap[type]
    }
    
    const api = `${getEndpoint()}/openapi/lc/autoApi/lowAutoPageStyles/rss/json/${paramStr}`;
    const styleObj = useTokenRequest({ api });
    const styles = (styleObj && styleObj[0]) || {}

    const s = {
        margin: 0,
        ...styles
    }
    return (
        <div style={s}>
            {handleContent(content)}
        </div>
    )
}