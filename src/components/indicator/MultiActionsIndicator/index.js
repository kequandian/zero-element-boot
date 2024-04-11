import React, { useEffect, useState } from 'react';
import PlacementIndicator from '../PlacementIndicator';
import { HStack } from '@chakra-ui/react'
import { get as NamedPresenterGet } from '@/components/config/NamedPresenterConfig';


export default function MultiActionsIndicator (props) {

    const { children, Actions=[], actions=[], alignment, offset=5, 
        indicatorData, onActionCompleted,
        ...rest 
    } = props;

    const _presenters = NamedPresenterGet();

    const _actions = actions

    function indicatorList() {

        if(!_actions || !Array.isArray(_actions) || _actions.length === 0){
            return <></>
        }

        return (
            <HStack spacing={3}>
                {
                    _actions.map((item, index) => {
                        const { xname, props: itemProps, ...rest } = item
                        const _Indicator = xname ?  _presenters[xname] : <></>
                        return (
                            <_Indicator key={index} {...itemProps} onActionCompleted={onActionCompleted} indicatorData={indicatorData} {...rest}/>
                        )
                    })
                }
            </HStack>
        )
    }

    return (
        <PlacementIndicator Indicator={indicatorList} alignment={alignment} offset={offset} {...rest}>
            {children}
        </PlacementIndicator>
    )
}