import React from 'react';
import { getEndpoint } from '@/components/config/common';
import useTokenRequest from '@/components/hooks/useTokenRequest';

export default function Index(props) {

    const { type, content='' } = props;

    function handleContent(value){
        return value.replace(`<${type}>`, '')
    }
    
    const api = `${getEndpoint()}/openapi/lc/autoApi/lowAutoPageStyles/rss/json/${type}`;
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