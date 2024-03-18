import React, { useState } from 'react';
import { HStack, Box } from '@chakra-ui/react'
import { bindingConvert } from '@/components/gateway/Binding'
import doFilter from '@/components/gateway/doFilter.mjs';
const useLayout = require('@/components/hooks/useLayout');

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

    const childList = React.Children.toArray(children)
    const newChildren = childList.length === 1 ?  childList[0].props.children : childList

    const [configData, setConfigData] = useState({})
    const [layoutRef, { getClassName }] = useLayout();

    const firstChildItemClick = (item) => {

        console.log('firstChildItemClick = ', item)
        if (item.isSelected) {
            if (converter) {
                const bindingData = bindingConvert(converter, item)
                const filterData = doFilter(converter, bindingData)
                setConfigData(filterData)
            } else {
                setConfigData(item)
            }
        }
    }


    function renderChildren(children) {
        return React.Children.map(children, (child, childIndex) => {
          if (React.isValidElement(child)) {
            const newConfigData = childIndex === 1 ? configData : {}
            console.log('renderChildren newConfigData = ', newConfigData)
            return React.cloneElement(child, {
                ...rest,
                onItemClick: childIndex === 0 ? firstChildItemClick : '',
                ...newConfigData
            });
          } else {
            return child;
          }
        });
    }
    
    return (
        
        React.Children.toArray(children).map((child, childIndex) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    children: renderChildren(child.props.children),
                    ...rest,
                })
            }
            
        })
        
    )

}