import React from 'react';
import configMap from './map';
import NextIndicator from '@/components/NextIndicator';
import { get as DefaultIndicatorSet } from '@/components/config/NamedIndicatorConfig';


export default function PlacementIndicaor  (props) {

    const { children, Indicator, indicator, alignment="left", offset=0, indicatorData={} } = props

    const _Indicator = Indicator || (indicator ? DefaultIndicatorSet[indicator.xname] : NextIndicator)

    const _indicatorProps = indicator && JSON.stringify(indicator) !== '{}' ? indicator.props : {}

    const paramStyle = {
        display: 'inline-flex',
        ...configMap[alignment].paramStyle,
        gap: `${offset || 0}px`
    };

    const boxStyle = {
        flex:1,
        display: 'inline-flex',
        ...configMap[alignment].childStyle
    }

    return (

        <div style={{ ...paramStyle }}>
            <div style={boxStyle}>
                <_Indicator {..._indicatorProps} />
            </div>
            {
                React.Children.map(children, child => (
                    child
                ))
            }
        </div>
    )
}