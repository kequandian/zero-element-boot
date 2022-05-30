import React from 'react';
import {Clear, Butter} from '@/components/presenter'
import DefaultHoverIndicator from '@/components/indicator/DefaultHoverIndicator'
import NamedSelector from '@/components/NamedSelector'

export default function TestSelector(props){

    return(
        <NamedSelector hoverIndicator={DefaultHoverIndicator} >
            <Clear />
        </NamedSelector>
    )
}
