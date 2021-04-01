import React from 'react';
require('./index.less')

export default function ImageAnimation({url}){
    return (
        <div className="HeadPortrait">
            <img src={url}/>
        </div>
    )
}