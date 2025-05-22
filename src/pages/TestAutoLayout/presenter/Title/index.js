import React from 'react';
require('./index.less');

/**
 * @param {string} content 内容
 */
export default function (props) {
    const { content } = props;
    return <div className="title">{content}</div>
}
