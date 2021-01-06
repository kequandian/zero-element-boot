import React from 'react';

require("./index.less");

export default function (props) {

    const { TextValue } = props;

    return <div className="description" style={{marginLeft:'6px'}}>{TextValue}</div>
}