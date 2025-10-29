import React, { useState, useEffect, forwardRef } from 'react';
// import doBind from '@/components/gateway/doBind.mjs';
import doFilter from '@/components/gateway/doFilter.mjs';
const useLayout = require('@/components/hooks/useLayout');
// import { LS } from 'zero-element/lib/utils/storage';

/**
 * 用于两个子组件交换数据信息
 * @param converter     item数据转换器，相当于 binding
 * @param onFlowResult  数据流转至第二个子组件处理后获取的数据
 */
export default function DataFlowContainer(props) {
    const { 
        children, 
        converter,  // convert selected item to second data
        converterFormat = {},
        
        // final result of data flow
        onFlowResult=((data)=>{console.log('DataFlowContainer:onResult() is not set!')}),
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
        
        if (converter && Object.keys(converter).length > 0) {
            // const bindingData = doBind(converter, item)
            // const filterData = doFilter(converter, bindingData)
            const filterData = doFilter(converter, item)  // 直接转换数据
            console.log('DataFlowContainer: first child item clicked, filterData =', filterData)

            // 基于 converter 的结果, 应用 converterFormat 的占位替换
            const formattedByConverter = (() => {
                if (!converterFormat || typeof converterFormat !== 'object') return {};
                const result = {};
                const valueMap = filterData || {};
                Object.keys(converterFormat).forEach((key) => {
                    const rawVal = converterFormat[key];
                    if (typeof rawVal === 'string') {
                        let out = rawVal;
                        Object.keys(valueMap).forEach((vk) => {
                            const placeholder = `{${vk}}`;
                            if (out.includes(placeholder)) {
                                const v = valueMap[vk];
                                out = out.split(placeholder).join(v == null ? '' : String(v));
                            }
                        });
                        result[key] = out;
                    } else {
                        result[key] = rawVal;
                    }
                });
                return result;
            })();

            // 转换后的数据 + 替换后的格式数据
            setConfigData({
                ...filterData,
                ...formattedByConverter,
            })

        } else {
            // 未设置 converter 时, 可直接尝试在原始 item 上应用 converterFormat
            const formattedByItem = (() => {
                if (!converterFormat || typeof converterFormat !== 'object') return {};
                const result = {};
                const valueMap = item || {};
                Object.keys(converterFormat).forEach((key) => {
                    const rawVal = converterFormat[key];
                    if (typeof rawVal === 'string') {
                        let out = rawVal;
                        Object.keys(valueMap).forEach((vk) => {
                            const placeholder = `{${vk}}`;
                            if (out.includes(placeholder)) {
                                const v = valueMap[vk];
                                out = out.split(placeholder).join(v == null ? '' : String(v));
                            }
                        });
                        result[key] = out;
                    } else {
                        result[key] = rawVal;
                    }
                });
                return result;
            })();

            setConfigData({
                ...item,
                ...formattedByItem,
            })
        }

        // setOnRefresh(true)
    }

    // const firstChildActionCompleted = (data) => {
    //     console.log('DataFlowContainer: first child action click = ', data)
        
    //     setConfigData(data)
    //     setOnRefresh(true)

    //     // setConfigData({})
    //     // setTimeout(() => {
    //         // LS.set('commonData', {layoutName: data.moduleName})
    //         // setConfigData({layoutName: data.moduleName})
    //         // setOnRefresh(true)
    //     // }, 100)
    // }

    const secondChildItemClick = () => {
        console.log('DataFlowContainer: second child item click, result= ', configData)

        // 由第二个子组件处理后回调
        onFlowResult(configData)
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
                            // 兼容 Tab 类组件的 onSwitchTab，同时保留通用 onItemSelected
                            // index==0, 表示第一个子组件，index==1, 表示第二个子组件
                            onItemSelected: index==0?firstChildItemClick:(()=>{}),
                            onSwitchTab: index==0?firstChildItemClick:(()=>{}),

                            // 第二个子组件可获得由第一个子组件选择转换后的数据
                            ...(index==1 ? configData : {}),
                            // 参数的命名与用途不固定，统一通过 converter/converterFormat 产出的 configData 透传
                            onCancelled: index==1?secondChildItemClick:(()=>{}),
                            onConfirmed: index==1?secondChildItemClick:(()=>{}),
                            onCompleted: index==1?secondChildItemClick:(()=>{}),
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
