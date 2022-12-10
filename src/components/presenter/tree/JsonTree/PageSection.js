import React from 'react';

/**
 * 
 * 
 */
export default function Index(props) {

    const { children } = props;

    const baseStyle = {
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '16px',
    }

    return React.Children.map(children, child => {
        return <div style={baseStyle} >
            {child}
        </div>
    })
}