import React from 'react';
import LightingIndicator from '@/components/indicator/LightingIndicator';
import PrevirewIcon from '@/assets/preview-icon.svg'

export default function IndicatingAction(props){

    const { onAutoPreview, ...rest } = props;

    const btnClick = () => {
        if(onAutoPreview){
            onAutoPreview()
        }
    }

    return (
        <LightingIndicator>
            <img src={PrevirewIcon} onClick={btnClick} />
        </LightingIndicator>
    )
}
