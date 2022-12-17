import React from 'react';

export default function Index(props) {

    const { value } = props;

    console.log('value == ', value)

    const parseValue = value && JSON.parse(value) || 0

    return (
        <div style={{width:'100%', height: `${parseValue[0]}px`}}>
        </div>
    )
}