import React, { useState, useEffect, useRef } from 'react';
import { AutoLayout, APIContainer } from '@/components';

/**
 * @param {*} props 
 * @param {string}} listApi 列表api
 * @param {object}} converter listApi绑定数据
 * @param {string}} addApi 新增api
 * @param {object}} addApiBody 新增api提交数据
 * @param {string}} newValueBinding 输入的值， 作为新增api提交字段
 */

export default function DefaultGridLayoutList(props) {

    const {
        children,
        listApi='',
        ...rest
    } = props

    
    const [ lsApi, setLsApi ] = useState(listApi)

    useEffect(_ => {
    }, [])


    const layoutJson = {
        "xname":"Gridbox",
        "props":{
            "columns":"5"
        },
        "container": {
            "xname": "SelectList",
            "props": {
                "isSwitch": "true",
                "btnPisition": "bottom"
            }
        },
        "cart": {
            "xname": "SquareCart",
            "props": {
                "margin": "5px",
                "corner": "8px",
                "fill": "#fff",
                "ratio": 0.5,
            }
        },
        "indicator":{
            "xname": "CircularDeleteIndicator",
            "props":{
                "isDisabled": true,
            },
            "binding": { "id":"id" }
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

