import React, { useState } from 'react';
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

    // 提取核心子组件：如果只有一个子组件，提取其 children；否则认为子组件就是核心子组件
    const extractCoreChildren = (children) => {
        const childrenArray = React.Children.toArray(children);
        
        // 如果只有一个子组件，提取其 children 作为核心子组件
        if (childrenArray.length === 1) {
            const firstChild = childrenArray[0];
            if (React.isValidElement(firstChild) && firstChild.props.children) {
                return {
                    isWrappedByLayout: true,
                    layoutComponent: firstChild,
                    coreChildren: React.Children.toArray(firstChild.props.children)
                };
            }
        }
        
        // 如果有多个子组件，则认为它们就是核心子组件
        return {
            isWrappedByLayout: false,
            layoutComponent: null,
            coreChildren: childrenArray
        };
    };

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


    const { isWrappedByLayout, layoutComponent, coreChildren } = extractCoreChildren(children);
    
    // 调试信息
    console.log('DataFlowContainer: isWrappedByLayout=', isWrappedByLayout, 'coreChildren count=', React.Children.count(coreChildren));

    // 处理核心子组件，添加数据流相关的 props
    // 注意：保留子组件原有的 props，然后合并数据流相关的 props
    const processedCoreChildren = React.Children.toArray(coreChildren).map((child, index) => {
        if (React.isValidElement(child)) {
            // 获取子组件原有的 props
            const originalProps = child.props || {};
            // 获取子组件原有的 key，如果没有则使用 index
            const key = child.key || `dataflow-child-${index}`;
            
            // 合并原有 props 和数据流 props
            return React.cloneElement(child, {
                key: key,
                ...originalProps,  // 先保留原有 props（如 navApi, dataset, layout, isSwitch 等）
                // 兼容 Tab 类组件的 onSwitchTab，同时保留通用 onItemSelected
                // index==0, 表示第一个核心子组件，index==1, 表示第二个核心子组件
                onItemSelected: index==0?firstChildItemClick:(originalProps.onItemSelected || (()=>{})),
                onSwitchTab: index==0?firstChildItemClick:(originalProps.onSwitchTab || (()=>{})),

                // 第二个子组件可获得由第一个子组件选择转换后的数据
                ...(index==1 ? configData : {}),
                // 参数的命名与用途不固定，统一通过 converter/converterFormat 产出的 configData 透传
                onCancelled: index==1?secondChildItemClick:(originalProps.onCancelled || (()=>{})),
                onConfirmed: index==1?secondChildItemClick:(originalProps.onConfirmed || (()=>{})),
                onCompleted: index==1?secondChildItemClick:(originalProps.onCompleted || (()=>{})),
                ...rest,  // DataFlowContainer 的其他 props
            })
        } else {
            console.log('child is not valid !')
            return child
        }
    });

    // 如果被布局组件包裹，保持布局组件结构，将处理后的核心子组件放回去
    // 参考 Container 的实现方式，将 layoutRef 传递给布局组件
    // 传递 __ 属性让布局组件跳过内部的 Container，避免重复处理子组件
    if (isWrappedByLayout && layoutComponent) {
        // 保存布局组件原有的 props（除了我们想要修改的）
        const { ref: originalRef, children: _, ...layoutProps } = layoutComponent.props || {};
        return (
            <div 
                style={{flex:1}}
                className={getClassName()}
            >
                {React.cloneElement(layoutComponent, {
                    ...layoutProps,
                    __: true,  // 跳过布局组件内部的 Container
                    ref: layoutRef,
                }, processedCoreChildren)}
            </div>
        )
    }

    // 如果没有布局组件包裹，直接渲染处理后的子组件
    // 参考 Container 的实现方式
    // 注意：processedCoreChildren 已经处理过了，只需要添加 ref
    return (
        <div 
            style={{flex:1}}
            className={getClassName()}
        >
            {React.Children.toArray(processedCoreChildren).map((child, index) => {
                if (React.isValidElement(child)) {
                    // 只在需要时添加 ref，避免重复处理
                    return React.cloneElement(child, {
                        ref: layoutRef,
                    })
                }
                return child;
            })}
        </div>
    )
}
