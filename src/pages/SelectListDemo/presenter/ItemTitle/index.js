import React from 'react';
require('./index.less');

/**
 * @param {String} value 内容
 */
export default function (props) {

    const { value } = props;

    return <div className="item-title">{value}</div>

}