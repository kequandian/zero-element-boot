import React from 'react';
import { Button } from '@chakra-ui/react';
import PrevirewIcon from '@/assets/preview-icon.svg'

export default function IndicatingAction(props){

    const { props: otherProps, onAutoPreview, ...rest } = props;

    const btnClick = () => {
        if(onAutoPreview){
            onAutoPreview(otherProps)
        }
    }

    return (
        <img src={PrevirewIcon} onClick={btnClick} />
    )
}