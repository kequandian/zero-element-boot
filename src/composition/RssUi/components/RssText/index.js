import React from 'react';

export default function Index(props) {

    const { content, styles } = props;

    return (
        <div style={{...styles}}>
            {content}
        </div>
    )
}