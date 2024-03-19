import React from 'react';

require("./index.less");

/**
 * @param {string}} content 显示内容
 * @param {string}} minW 最小宽度
 * @param {string}} maxW 最大宽度
 */

export default function Subtitle (props) {

    const { content } = props;

    return <div  className="subtitle-body" 
        style={{ color: "#787878"}}>
            {content}
    </div>
}