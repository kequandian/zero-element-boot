import React from 'react';
import {Clear, Butter} from '@/components/presenter/default'
import DefaultHoverIndicator from '@/components/indicator/DefaultHoverIndicator'

export default function TestDefaultHoverIndicator(props){
    return(
        <DefaultHoverIndicator fill="#ff4499">
            <Clear />
        </DefaultHoverIndicator>
    )
}