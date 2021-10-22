import React from 'react';

require("./index.less");

export default function (props) {

    const { AuthorValue } = props;

    return <div className="author" style={{marginLeft:'6px'}}>{AuthorValue}</div>
}