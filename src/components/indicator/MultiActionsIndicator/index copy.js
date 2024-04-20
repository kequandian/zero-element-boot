import React, { useEffect, useState } from 'react';
import PlacementIndicator from '../PlacementIndicator';
import { HStack, Box } from '@chakra-ui/react'
import { get as NamedPresenterGet } from '@/components/config/NamedPresenterConfig';


export default function MultiActionsIndicator (props) {

    const { children, Actions=[], actions=[], alignment, offset=5, 
        indicatorData,
        ...rest 
    } = props;

    const _presenters = NamedPresenterGet();

    const _actions = actions

    function indicatorList() {

        if(!_actions || !Array.isArray(_actions) || _actions.length === 0){
            return <></>
        }

        return (
            <HStack flexFlow={'wrap'} spacing={0}>
                {
                    _actions.map((item, index) => {
                        const { xname, props: itemProps } = item
                        const _Indicator = xname ?  _presenters[xname] : <></>
                        return (
                            <div key={index} style={{marginBottom: '8px', marginRight: '8px'}}>
                                <_Indicator {...itemProps} indicatorData={indicatorData} {...rest}/>
                            </div>
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