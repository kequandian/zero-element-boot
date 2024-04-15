import React, { useContext } from 'react';
import AlignmentIndicator from '../AlignmentIndicator';
import OutlineCart from '@/components/cart/OutlineCart';
import IndicatingAction from '@/components/presenter/button/IndicatingAction';

import ContainerContext from '@/components/AutoX/ContainerContext';


export default function AutoPreviewIndicator(props) {

    const colorValue = {
        primary: '#037DFF',
        secondary: '#008000',
        accent: '#FFFF00',
      };

    return (
        <ContainerContext.Provider value={{colors: colorValue}}>
            <AutoPreviewComponent {...props}/>
        </ContainerContext.Provider>
    )
}

function AutoPreviewComponent (props) {

    const { children, onAutoPreview } = props;

    const {colors} = useContext(ContainerContext)

    const _Indicator = () => {
        return (
            <IndicatingAction onAutoPreview={onAutoPreview}/>
        )
    }

    const outlineProps={
        color: colors.secondary
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

