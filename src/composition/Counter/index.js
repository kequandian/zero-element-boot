import React, { useState } from 'react';
import DotDashButton from '@/components/presenter/button/DotDashButton'
import DotPlusButton from '@/components/presenter/button/DotPlusButton'
import { Flex } from "@chakra-ui/react";
import ShowHideIndicator from '@/components/indicator/ShowHideIndicator';
import NextIndicator from '@/components/NextIndicator'

/**
 * 
 * 计数器
 * 
 */

export default function Index(props) {

    const { productId, callBackData = () => { } } = props

    const [number, setnumber] = React.useState(1)

    function add() {
        const num = number + 1
        setnumber(num)
        callBackData(productId, num)
    }
    function decrease() {
        const num = number - 1
        if (num <= 0) {
            setnumber(0)
            callBackData(productId, 0)
        } else {
            setnumber(num)
            callBackData(productId, num)
        }

    }

    const baseStyle = {
        textAlign: 'center',
        padding: '4px ',
        // backgroundColor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        height: '100%'
    }

    const ShowHide = number > 0 ? NextIndicator : ShowHideIndicator
    // const state = number> 0? show : hide

    return (
        <div style={baseStyle} >
            <Flex>
                <ShowHide hide>
                    <DotPlusButton size={40} color='#b03931' borderColor='#b03931' onPlusClick={decrease} />
                </ShowHide>
                <ShowHide hide>
                    <div style={{ margin: '10px 0', padding: '0', width: '16px', height: '76%', backgroundColor: '#ffffff' }} >
                        {number}
                    </div>
                </ShowHide>
                <DotDashButton size={40} color='#ffffff' fill='#b03931' borderColor='#b03931' onDashClick={add} />
            </Flex>

        </div>
    )
}