import React, { Component, useEffect, useState } from 'react';
import usePlacement from '@/components/hooks/usePlacement';

/**
 * 
 * @param {Component} Indicator indicator component
 * @param {object} indicator indicator object w/ xname and props
 * @param {string} alignment alignment of the indicator, default is 'left'
 * @param {number} offsetx x offset of the indicator
 * @param {number} offsety y offset of the indicator    
 * @returns 
 */
export default function AlignmentIndicator(props) {

    const { children, Indicator, indicator, alignment="left", offsetx, offsety } = props;
    
    const styles = usePlacement(alignment, offsetx, offsety);

    const _Indicator = Indicator || (indicator ? DefaultIndicatorSet[indicator.xname] : NextIndicator)

    const _indicatorProps = indicator && JSON.stringify(indicator) !== '{}' ? {...indicator.props, ...rest} : {}
    
    const paramStyle = {
        display: 'inline-block',
        position: 'relative',
    };

    return (
        <div style={{ ...paramStyle }}>
            <div style={styles}>
                <_Indicator {..._indicatorProps} />
            </div>
            {
                React.Children.map(children, child => (
                    child
                ))
            }
        </div>
    );
}