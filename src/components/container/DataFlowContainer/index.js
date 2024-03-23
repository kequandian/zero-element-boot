import React, { useState, useEffect } from 'react';
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
    const { 
        children, 
        currentside, anotherside, converter, 
        // minW='200px',
        // maxW='300px',
        ...rest 
    } = props;

    const childList = React.Children.toArray(children)
    // const newChildren = childList.length === 1 ? childList[0].props.children : childList

    const [onRefresh, setOnRefresh] = useState(false);
    const [configData, setConfigData] = useState({})
    const [layoutRef, { getClassName }] = useLayout();

    useEffect(() => {
        if(onRefresh){
            setOnRefresh(false)
        }
    },[onRefresh])

    const firstChildItemClick = (item) => {
        // console.log('first child item click = ', item)
        setConfigData('')
        if (item.isSelected) {
            setOnRefresh(true)
            if (converter && JSON.stringify(converter) != '{}') {
                const bindingData = bindingConvert(converter, item)
                const filterData = doFilter(converter, bindingData)
                setConfigData(filterData)
            } else {
                setConfigData(item)
            }
            
        }
    }

    const secondChildItemClick = (item) => {
        console.log('second child item click = ', item)
    }

    console.log('CoupleSideContainer configData= ', configData)
    
    function renderChildren(children) {
        return React.Children.map(children, (child, childIndex) => {
            if (React.isValidElement(child)) {
                if (childIndex === 0) {
                    return (
                        React.cloneElement(child, {
                            ...rest,
                            onItemClick: firstChildItemClick,
                        })
                    )
                } else {
                    if (childIndex === 1 && !onRefresh) {
                        return (
                            React.cloneElement(child, {
                                ...configData,
                                ...rest,
                                onItemClick: secondChildItemClick,
                            })
                        )
                    } else {
                        return <div></div>
                    }
                }

            } else {
                return child;
            }
        });
    }


    return (
        <div 
            style={{flex:1}}
            className={getClassName()}
        >
            {
                React.Children.toArray(children).map((child, childIndex) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            ref: layoutRef, 
                            children: renderChildren(child.props.children),
                            ...rest,
                        })
                    }
        
                })
            }
        </div>
        

    )

}