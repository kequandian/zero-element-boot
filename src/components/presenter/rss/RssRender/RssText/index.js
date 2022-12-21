import React from 'react';

export default function Index(props) {

    const { type, content='', styles={} } = props;

    function handleContent(value){
        return value.replace(`<${type}>`, '')
    }

    const s = {
        margin: 0,
        ...styles
    }

    return (
        <div style={s}>
            {handleContent(content)}
        </div>
    )
}