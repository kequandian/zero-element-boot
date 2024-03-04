import React from 'react';

require("./index.less");

export default function (props) {

    const { content } = props;

    return <div className="description" style={{marginLeft:'6px'}}>{content}</div>
}