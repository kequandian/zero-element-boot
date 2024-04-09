import React, { useEffect, useState } from 'react';
import PlacementIndicator from '../PlacementIndicator';
import { HStack } from '@chakra-ui/react'
import { get as NamedPresenterGet } from '@/components/config/NamedPresenterConfig';


export default function MultiActionsIndicator (props) {

    const { children, Actions=[], actions=[], alignment, offset, ...rest } = props;

    
    const _presenters = NamedPresenterGet();

    const _actions = [
        {
            DeleteAction:{
                indicator: {
                    xname: 'Delete',
                },
                action: '/api',
                onItemDeleted:()=>{
                    console.log('onItemDeleted delete')
                }
            }
        },
        {
            DownloadAction:{
                indicator: {
                    xname: 'Download',
                }, 
                action: '/api',
                onItemDownloaded:()=>{
                    console.log('download')
                }
            }
        }
    ]
    function indicatorList() {

        return (
            <HStack>
                {
                    _actions.map((item, index) => {
                        if(item.DeleteAction){
                            const { indicator, action, onItemDeleted } = item.DeleteAction
                            const _Indicator = indicator && indicator.xname ?  _presenters[indicator.xname] : _presenters['Delete']
                            return <_Indicator key={index} action={action} onItemDeleted={onItemDeleted}/>
                        }
                        if(item.DownloadAction){
                            const { indicator, action, onItemDownloaded } = item.DownloadAction
                            const _Indicator = indicator && indicator.xname ?  _presenters[indicator.xname] : _presenters['Download']
                            return <_Indicator key={index} action={action} onItemDownloaded={onItemDownloaded}/>
                        }
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