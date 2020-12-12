import React from 'react';

export default function (props) {
    const { lineType } = props;
    return <div style={{borderStyle:`${lineType}`, borderWidth:'1px', borderColor:'#ececec'}}></div>
}