import React from 'react';
import {Clear, Butter} from '@/components/presenter'
import DefaultHoverIndicator from '@/components/indicator/DefaultHoverIndicator'
import OverlaySelector from '@/components/OverlaySelector'

export default function TestSelector(props){

    return(
        <OverlaySelector hoverIndicator={DefaultHoverIndicator} >
            <Clear />
        </OverlaySelector>
    )
}
