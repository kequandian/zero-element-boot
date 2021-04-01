import React from 'react';
require('./index.less')

export default function Text({content}){
    return (
        <div className="Text_text">{content}</div>
    )
}