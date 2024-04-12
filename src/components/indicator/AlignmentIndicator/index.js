import React, { useEffect, useState } from 'react';
import { Box, position } from '@chakra-ui/react'
import usePlacement from '@/components/hooks/usePlacement';

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
        <Box style={{ ...paramStyle }}>
            <Box style={styles}>
                <_Indicator {..._indicatorProps} />
            </Box>
            {
                React.Children.map(children, child => (
                    child
                ))
            }
        </Box>
    );
}