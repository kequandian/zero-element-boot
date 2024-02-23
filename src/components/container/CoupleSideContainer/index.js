import React, { useState } from 'react';
import { HStack, Box } from '@chakra-ui/react'
import { bindingConvert } from '@/components/gateway/Binding'
import doFilter from '@/components/gateway/doFilter.mjs';

/**
 * 
 * @param   Children        两个子组件
 * @param   currentside   接收为 AutoLayout   layout参数
 * @param   anotherside  接收别一个 AutoLayout  layout参数
 * @param   converter      item数据转换器，相当于 binding
 * 
 */
export default function CoupleSideContainer(props) {
    const { children, currentside, anotherside, converter, ...rest } = props;

    const docList = React.Children.toArray(children)

    const [ configData, setConfigData ] = useState('')
    
    const firstChild = docList[0]
    const secondChind = docList[1]

    const itemClick = (item) => {
        if(item.isSelected){
            const bindingData = bindingConvert(converter, item)
            const filterData = doFilter(converter, bindingData)
            setConfigData(filterData)
        }
    }

    return (
        <HStack>
            <Box style={{ height: '100vh', padding: '8px', background: '#fff' }}>
                { React.cloneElement(firstChild, { onItemClick: itemClick }) }
            </Box>
            <Box style={{ width: '100%', height: '100vh', padding: '8px' }} background={'#EDECF1'}>
                { configData && React.cloneElement(secondChind, { configData }) }
            </Box>
        </HStack>

    )
}