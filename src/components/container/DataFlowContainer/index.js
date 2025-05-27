import React, { useState, useEffect, forwardRef } from 'react';
import doBind from '@/components/gateway/doBind.mjs';
import doFilter from '@/components/gateway/doFilter.mjs';
const useLayout = require('@/components/hooks/useLayout');
// import { LS } from 'zero-element/lib/utils/storage';

/**
 * 用于两个子组件交换数据信息
 * @param converter   item数据转换器，相当于 binding
 */
export default function DataFlowContainer(props) {
    const { 
        children, 
        converter,  // convert selected item to second data
        // currentside, anotherside, 
        onResult=(()=>{console.log('DataFlowContainer:onResult() is not set!')}),
        ...rest 
    } = props;

    // const [onRefresh, setOnRefresh] = useState(false);
    const [configData, setConfigData] = useState({})
    const [layoutRef, { getClassName }] = useLayout();

    // useEffect(() => {
    //     if(onRefresh){
    //         setOnRefresh(false)
    //     }
    // },[onRefresh])

    const firstChildItemClick = (item) => {
        console.log('DataFlowContainer: first child item clicked, item =', item)
        setConfigData(item)
        
        if (converter && Object.keys(converter).length > 0) {
            const bindingData = doBind(converter, item)
            const filterData = doFilter(converter, bindingData)
            console.log('DataFlowContainer: first child item clicked, filterData =', filterData)

            setConfigData(filterData)
        } else {
            setConfigData(item)
        }

        // setOnRefresh(true)
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

    const secondChildItemClick = () => {
        console.log('DataFlowContainer: second child item click, result= ', configData)
        
        onResult(configData)
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
                React.Children.toArray(children).map((child, index) => {

                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            ref: layoutRef, 
                            onItemSelected: index==0?firstChildItemClick:(()=>{}),
                            onAction: index==1?secondChildItemClick:(()=>{}),
                            // dataSource: childIndex==1?configData:{},
                            // children: renderChildren(child.props.children),
                            ...rest,
                        })
                    }else{
                        console.log('child is not valid !')
                       return {child}
                    }
                })
            }
        </div>
    )
}
