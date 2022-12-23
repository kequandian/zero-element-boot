import React from 'react';

export default function Index(props) {

    const { data } = props;
    const v = data.replace('>>>', '')
    const parseValue = v && JSON.parse(v) || 0

    return (
        <div style={{width:'100%', height: `${parseValue[0]}px`, margin: 0}}>
        </div>
    )
}