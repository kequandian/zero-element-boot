import React, { useState, useEffect } from 'react';
import { bindingConvert } from '@/components/gateway/Binding'
import doFilter from '@/components/gateway/doFilter.mjs';
const useLayout = require('@/components/hooks/useLayout');
// import { LS } from 'zero-element/lib/utils/storage';

/**
 * 用于两个子组件交换数据信息
 * @param converter   item数据转换器，相当于 binding
 * 
 */
export default function DataFlowContainer(props) {
    const { 
        children, converter,
        // currentside, anotherside, 
        ...rest 
    } = props;

    const [onRefresh, setOnRefresh] = useState(false);
    const [configData, setConfigData] = useState({})
    const [layoutRef, { getClassName }] = useLayout();

    useEffect(() => {
        if(onRefresh){
            setOnRefresh(false)
        }
    },[onRefresh])

    const firstChildItemClick = (item) => {
        console.log('DataFlowContainer: first child item clicked, item =', item)
        
        setConfigData({})
        if (item.isSelected) {
            if (converter && JSON.stringify(converter) != '{}') {
                const bindingData = bindingConvert(converter, item)
                const filterData = doFilter(converter, bindingData)
                setConfigData(filterData)
            } else {
                setConfigData(item)
            }

            setOnRefresh(true)
        }
    }

    const firstChildActionCompleted = (data) => {
        console.log('DataFlowContainer: first child action click = ', data)
        
        setConfigData(data)
        setOnRefresh(true)

        // setConfigData({})
        // setTimeout(() => {
            // LS.set('commonData', {layoutName: data.moduleName})
            // setConfigData({layoutName: data.moduleName})
            // setOnRefresh(true)
        // }, 100)
    }

    const secondChildItemClick = (item) => {
        console.log('second child item click = ', item)
    }

    // function renderChildren(children) {
    //     return React.Children.map(children, (child, childIndex) => {

    //         if (React.isValidElement(child)) {
    //             if (childIndex === 0) {
    //                 return (
    //                     React.cloneElement(child, {
    //                         ...rest,
    //                         onItemSelected: firstChildItemClick,
    //                         onActionCompleted: firstChildActionCompleted
    //                     })
    //                 )
    //                 // return <div>first child</div>

    //             } else if (childIndex === 1 && !onRefresh) {
    //                 return (
    //                     React.cloneElement(child, {
    //                         ...rest,
    //                         ...configData,
    //                         onItemClick: secondChildItemClick,
    //                     })
    //                 )
    //                 // return <div>second child</div>

    //             } else {
    //                 return <div></div>
    //             }

    //         } else {
    //             return child;
    //         }
    //     });
    // }


    return (
        <div 
            style={{flex:1}}
            className={getClassName()}
        >
           {/* { renderChildren(children)} */}
            
            {
                React.Children.toArray(children).map((child, childIndex) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            ref: layoutRef, 
                            onItemSelected: childIndex==0?firstChildItemClick:(()=>{}),
                            onActionCompleted: childIndex==0?firstChildActionCompleted:(()=>{}),
                            onItemClick: childIndex==1?secondChildItemClick:(()=>{}),
                            dataSource: childIndex==1?configData:{},
                            // children: renderChildren(child.props.children),
                            ...rest,
                        })
                    }else{
                       return {child}
                    }
                })
            }
        </div>
    )
}
