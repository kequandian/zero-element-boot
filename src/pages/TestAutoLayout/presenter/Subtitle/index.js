import React from 'react';

require("./index.less");

/**
 * @param {string}} content 显示内容
 */
export default function Subtitle (props) {
    const { content } = props;
    return <div  className="subtitle">{content}</div>
}