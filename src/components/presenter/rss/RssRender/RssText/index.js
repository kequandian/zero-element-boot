import React from 'react';

export default function Index(props) {

    const { type, content='', styles } = props;

    function handleContent(value){
        return value.replace(`<${type}>`, '')
    }

    return (
        <div style={{...styles}}>
            {handleContent(content)}
        </div>
    )
}