import React from 'react';
require('./index.less')

export default function Title({content}){
    return (
        <div className="Title_text">{content}</div>
    )
}