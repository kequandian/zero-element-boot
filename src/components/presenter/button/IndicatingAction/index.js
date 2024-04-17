import React from 'react';
import { Button } from '@chakra-ui/react';
import LightingCart from '@/components/cart/LightingCart'
import PrevirewIcon from '@/assets/preview-icon.svg'

export default function IndicatingAction(props){

    const { onAutoPreview, ...rest } = props;

    const btnClick = () => {
        if(onAutoPreview){
            onAutoPreview()
        }
    }

    return (
        <LightingCart>
            <img src={PrevirewIcon} onClick={btnClick} />
        </LightingCart>
    )
}