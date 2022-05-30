import React from 'react';
import {Butter, Clean, Pink} from '@/components/presenter'
import NamedSelector from '@/components/NamedSelector'
import DefaultHoverIndicator from '@/components/indicator/DefaultHoverIndicator'

export default function TestSelector(props){
    return(
        <NamedSelector hoverIndicator={DefaultHoverIndicator}>
            <Butter />
        </NamedSelector>
    )
}