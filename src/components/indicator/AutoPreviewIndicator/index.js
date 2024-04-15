import React, { useContext } from 'react';
import AlignmentIndicator from '../AlignmentIndicator';
import OutlineCart from '@/components/cart/OutlineCart';
import IndicatingAction from '@/components/presenter/button/IndicatingAction';

import ContainerContext from '@/components/AutoX/ContainerContext';
import { HStack, Box } from '@chakra-ui/react';


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

    const { children, xseq, onAutoPreview, ...rest } = props;

    const {colors} = useContext(ContainerContext)

    const _Indicator = () => {
        return (
            <HStack spacing={5}>
                <Box>{xseq}</Box>
                <IndicatingAction onAutoPreview={onAutoPreview}/>
            </HStack>
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
                    React.cloneElement(child, {
                        ...rest,
                      })
                ))
            }
            </OutlineCart>
        </AlignmentIndicator>
    )
}

