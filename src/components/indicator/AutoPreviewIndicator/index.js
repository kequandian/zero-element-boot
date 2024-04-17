import React, { useContext } from 'react';
import AlignmentIndicator from '../AlignmentIndicator';
import OutlineCart from '@/components/cart/OutlineCart';
import IndicatingAction from '@/components/presenter/button/IndicatingAction';

import ContainerContext from '@/components/AutoX/ContainerContext';
import { HStack, Box } from '@chakra-ui/react';
import { useHover } from "@uidotdev/usehooks";
import NextIndicator from '@/components/NextIndicator';
import { LS } from 'zero-element/lib/utils/storage';



export default function AutoPreviewIndicator(props) {

    return (
        <ContainerContext.Provider value={{colors: LS.get('colors')}}>
            <AutoPreviewComponent {...props}/>
        </ContainerContext.Provider>
    )
}

function AutoPreviewComponent (props) {

    const { children, xseq, onAutoPreview, ...rest } = props;

    const [hoverRef, hovering] = useHover();
    const {colors} = useContext(ContainerContext)

    const _AlignmentIndicator = hovering ? AlignmentIndicator : NextIndicator
    const _OutlineCart = hovering ? OutlineCart : NextIndicator

    const onAPClick = () => {
        if(onAutoPreview){
            onAutoPreview(xseq)
        }
    }

    const _Indicator = () => {
        return (
            <HStack spacing={5}>
                {/* <Box>{xseq}</Box> */}
                <IndicatingAction onAutoPreview={onAPClick}/>
            </HStack>
        )
    }

    const outlineProps={
        color: colors.primary
    }

    return (
        <article ref={hoverRef}>
            <_AlignmentIndicator Indicator={_Indicator} alignment={'topright'}>
                <_OutlineCart {...outlineProps}>
                {
                    React.Children.map(children, child => (
                        React.cloneElement(child, {
                            ...rest,
                        })
                    ))
                }
                </_OutlineCart>
            </_AlignmentIndicator>
        </article>
    )
}

