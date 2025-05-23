import React, { useEffect, useState } from 'react';
import PlacementIndicator from '../PlacementIndicator';
import { HStack, VStack, Box } from '@chakra-ui/react'
import { get as NamedPresenterGet } from '@/components/config/NamedPresenterConfig';


/**
 * 多按钮排列Indicator 组件
 * @param {Actions} 直接提供组件
 *  @param {actions} 提供组件配置
 * @returns 
 */
export default function MultiActionsIndicator(props) {

    const { children, Actions = {}, actions = [], alignment, offset = 5, ...rest
    } = props;

    const _presenters = NamedPresenterGet();

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

        if (!actions || !Array.isArray(actions) || actions.length === 0) {
            return <></>
        }

        // start 
        let hasArrays = false;
        let hasObjects = false;

        for (let i = 0; i < actions.length; i++) {
            if (Array.isArray(actions[i])) {
                hasArrays = true;
            } else if (typeof actions[i] === "object" && actions[i] !== null) {
                hasObjects = true;
            }
        }

        if (hasArrays && hasObjects) {
            return allArray(actions)
        } else if (hasArrays) {
            return allArray(actions)
        } else if (hasObjects) {
            return allObject(actions)
        } else {
            return <></>
        }
    }

    return (
        // placement indicator: outer position indicator
        <PlacementIndicator Indicator={indicatorList} alignment={alignment} offset={offset} {...rest}>
            {children}
        </PlacementIndicator>
    )
}
