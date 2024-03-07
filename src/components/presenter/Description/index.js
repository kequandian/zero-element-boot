import React from 'react';

require("./index.less");

/**
 * 
 * @param { number or string } w 宽度
 * @param { number or string } h 高度
 * @param { string } content 内容
 * 
 */

export default function (props) {

    const { w='', h='', content } = props;

    const width = typeof w === 'number' ? w + 'px' : w.indexOf('%') > -1 ? w : w + 'px';
    const height = typeof h === 'number' ? h + 'px' : h.indexOf('%') > -1 ? h : h + 'px';

    return <div className="description" style={{width:width, height: height}}>{content}</div>
}