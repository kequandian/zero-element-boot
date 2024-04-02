import React, { useState, useEffect, useRef } from 'react';
import { AutoLayout, APIContainer } from '@/components';

/**
 * @param {*} props 
 * @param {string}} listApi 列表api
 */

export default function LowCodeDatasetManageList(props) {

    const {
        children,
        listApi='',
        ...rest
    } = props

    
    const [ lsApi, setLsApi ] = useState(listApi)

    useEffect(_ => {
    }, [])


    const layoutJson = {
        "xname": "VStack",
        "props": {
            "spacing": 3,
        },
        "container": {
            "xname": "SelectList",
            "props": {
                // "isSwitch": "true",
                // "btnPisition": "bottom",
                // "selectBtnRatio": 0.05
            }
        },
        "cart": {
            "xname": "Cart",
            "props": {
                "padding": "6px",
                "margin": "6px 0px",
                "linewidth": 0,
                "corner": "0px"
            }
        },
        "selector":{
            "xname": "LeftCheckboxSelector",
            "props": {
            },
        },
        "presenter": {
            "children": [
                {
                    "xname": "GoogleAvatar",
                    "binding":{
                        "datasetName": "name"
                    }
                },
                {
                    "xname": "Text",
                    "binding":{
                        "datasetName": "content"
                    },
                    "props":{
                        "fontSize": "20px",
                    }
                }
            ],
            "xname": "HStack",
            "props": {
                "spacing": 8,
                "justify": "center column"
            },
            "cart": {
                "xname": "SquareCart",
                "props": {
                    "margin": "0px",
                    "corner": "8px",
                    "fill": "",
                    "ratio": 0.5,
                }
            },
                
        }

    }

    const config = {
        // items: dataSource,
        layout: layoutJson,
        ...rest
    }

    // console.log('DefaultGridLayoutList = ', config)


    return (
        
        <APIContainer API={lsApi}>
            <AutoLayout {...config} >
                {children}
            </AutoLayout>
        </APIContainer>
    )

}

