import React from 'react';
import {Butter, Clean, Pink} from '@/components/presenter/default'
import Selector from '@/components/selector/Selector'
import DefaultHoverIndicator from '@/components/indicator/DefaultHoverIndicator'

export default function TestSelector(props){
    return(
        <Selector hoverIndicator={DefaultHoverIndicator}>
            <Butter />
        </Selector>
    )
}