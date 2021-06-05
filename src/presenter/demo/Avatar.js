import React from 'react';

/**
 * @param {String} url image src url
 */
export default function (props) {
    const { url } = props;

    if(url){
        return <img src={url}  style={{width:'64px', height:'64px', borderRadius:'32px'}} />;
    }else {
        return <img src=''  style={{width:'64px', height:'64px', borderRadius:'32px', backgroundColor:'#cccccc'}} />;
    }
}