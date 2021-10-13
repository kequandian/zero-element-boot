import React from 'react';
import {Clear, Butter} from '@/components/presenter/default'
import DefaultHoverIndicator from '@/components/indicator/DefaultHoverIndicator'
import Selector from '@/components/selector/Selector'

export default function TestSelector(props){

    return(
        <Selector hoverIndicator={DefaultHoverIndicator} >
            <Clear />
        </Selector>
    )
}
