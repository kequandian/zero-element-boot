import React, { useContext } from 'react';
import AlignmentIndicator from '../AlignmentIndicator';
import OutlineCart from '@/components/cart/OutlineCart';
import IndicatingAction from '@/components/presenter/button/IndicatingAction';

export default function AutoPreviewIndicator(props) {

    const { children } = props;

    const _Indicator = () => {
        
        return (
            <IndicatingAction/>
        )
    }

    const outlineProps={
    }

    return (
        <AlignmentIndicator Indicator={_Indicator} alignment={'topright'}>
            <OutlineCart {...outlineProps}>
            {
                React.Children.map(children, child => (
                    child
                ))
            }
            </OutlineCart>
        </AlignmentIndicator>
    )
}