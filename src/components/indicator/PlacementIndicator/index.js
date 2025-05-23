import React from 'react';
import configMap from './map';
import NextIndicator from '@/components/NextIndicator';
import { get as DefaultIndicatorSet } from '@/components/config/NamedIndicatorConfig';


/**
 * 用于组件外部的组件位置
 * @param {ReactComponent} Indicator 位置组件
 * @param {object} indicator 位置组件数据
 * @param {string} alignment 位置组件对齐方式，left, right, top, bottom, topleft, topright, bottomleft, bottomright 
 * @returns 
 */
export default function PlacementIndicaor  (props) {

    const { children, Indicator, indicator, alignment="left", offset=4, onIndicatorClick=(()=>{}), ...rest } = props

    const _Indicator = Indicator || (indicator ? DefaultIndicatorSet[indicator.xname] : NextIndicator)

    const _indicatorProps = indicator && JSON.stringify(indicator) !== '{}' ? {...indicator.props, ...rest} : {}

    const paramStyle = {
        display: 'inline-flex',
        ...configMap[alignment].paramStyle,
        gap: `${offset || 0}px`
    };

    const boxStyle = {
        flex:1,
        display: 'flex',
        ...configMap[alignment].childStyle
    }

    const indicatorClick = (e) => {
        e.stopPropagation();
        onIndicatorClick();
    }

    return (

        <div style={{ ...paramStyle }}>
            <div style={boxStyle} onClick={indicatorClick || (()=>{}) }>
                <_Indicator {..._indicatorProps} />
            </div>
            {
                React.Children.map(children, child => (
                    React.cloneElement(child, {
                        ...rest,
                    })
                ))
            }
        </div>
    )
}