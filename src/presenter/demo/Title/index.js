import React from 'react';

require('./index.less');

export default function (props) {

    const { TitleText } = props;

    return <div className="title">{TitleText}</div>

}