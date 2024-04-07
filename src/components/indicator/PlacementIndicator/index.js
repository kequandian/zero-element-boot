import React from 'react';
import configMap from './map'

export default function PlacementIndicaor  (props) {

    const { children, alignment="left", indicatorData={} } = props

    const paramStyle = {
        display: 'flex',
        ...configMap[alignment].paramStyle
    };

    const boxA = {
        display: 'flex',
        ...configMap[alignment].childStyle
    }

    return (

        <div style={{ ...paramStyle }}>
            <div style={boxA}>
                <div style={{ width: '20px', height: '20px', background: 'red' }}></div>
            </div>
            {
                React.Children.map(children, child => (
                    child
                ))
            }
        </div>
    )
}