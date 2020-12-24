import React from 'react';

export default function (props) {
    const { lineType='solid' } = props;
    return <div style={{borderStyle:`${lineType}`, borderWidth:'1px', borderColor:'#ececec'}}></div>
}