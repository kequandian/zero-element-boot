import React, { useEffect, useState } from 'react';
import PlacementIndicator from '../PlacementIndicator';
import { HStack, VStack, Box } from '@chakra-ui/react'
import { get as NamedPresenterGet } from '@/components/config/NamedPresenterConfig';


export default function MultiActionsIndicator(props) {

    const { children, Actions = [], actions = [], alignment, offset = 5, ...rest
    } = props;

    const _presenters = NamedPresenterGet();

    const _actions = actions
    
    const allObject = (list, i=-1) => {
        return (
            <HStack key={i} flexFlow={'wrap'} spacing={0}>
                {
                    list.map((item, index) => {
                        const { xname, props: itemProps } = item
                        const _Indicator = xname ? _presenters[xname] : <></>
                        return (
                            <div key={index} style={{ marginBottom: '8px', marginRight: '8px' }}>
                                <_Indicator {...itemProps} {...rest} />
                            </div>
                        )
                    })
                }
            </HStack>
        )
    }

    const allArray = (list) => {

        return (

            <VStack spacing={0} alignItems={'start'}>
                {list.map((itemData, i) => {
                    if (Array.isArray(itemData)) {
                        return (
                            allObject(itemData, i)
                        )

                    } else if (typeof itemData === "object") {
                        const { xname, props: itemProps } = itemData
                        const _Indicator = xname ? _presenters[xname] : <></>
                        return (
                            <div key={i} style={{ marginBottom: '8px', marginRight: '8px' }}>
                                <_Indicator {...itemProps} {...rest} />
                            </div>
                        )
                    }
                })}
            </VStack>
        )
    }

    const indicatorList = () => {

        if (!_actions || !Array.isArray(_actions) || _actions.length === 0) {
            return <></>
        }

        return checkData(_actions)

    }

    function checkData(data) {
        let hasArrays = false;
        let hasObjects = false;

        for (let i = 0; i < data.length; i++) {
            if (Array.isArray(data[i])) {
                hasArrays = true;
            } else if (typeof data[i] === "object" && data[i] !== null) {
                hasObjects = true;
            }
        }

        if (hasArrays && hasObjects) {
            return allArray(data)
        } else if (hasArrays) {
            return allArray(data)
        } else if (hasObjects) {
            return allObject(data)
        } else {
            return <></>
        }
    }

    return (
        <PlacementIndicator Indicator={indicatorList} alignment={alignment} offset={offset} {...rest}>
            {children}
        </PlacementIndicator>
    )
}