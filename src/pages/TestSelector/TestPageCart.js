import React from 'react';
import {Butter, Clean, Pink} from '@/components/presenter'
import OverlaySelector from '@/components/OverlaySelector'
import DefaultHoverIndicator from '@/components/indicator/DefaultHoverIndicator'

export default function TestSelector(props){
    return(
        <OverlaySelector hoverIndicator={DefaultHoverIndicator}>
            <Butter />
        </OverlaySelector>
    )
}