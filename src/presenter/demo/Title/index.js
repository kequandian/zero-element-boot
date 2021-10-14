import React from 'react';
require('./index.less');

/**
 * @param {String} TitleText 内容
 */
export default function (props) {

    const { TitleText } = props;

    return <div className="title">{TitleText}</div>

}