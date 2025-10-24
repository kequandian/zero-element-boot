import React, { useState } from 'react';
import NextIndicator from '@/components/NextIndicator';
import { get as DefaultIndicatorSet } from '@/components/config/NamedIndicatorConfig';
import doFilter from '@/components/gateway/doFilter.mjs';


/**
 * 使用例子，从数据源中获取 value 字段，并传递给 onItemClick 事件处理函数
 * container：'',
   presenter -> children
   [{
        xname: 'JarItem',
        indicator:{
            xname:'ClickIndicator',
            filter: {
                "dataKey":"changeDataKey"  //从数据源中获取字段值，再传递给 Indicator 组件
            },
            props: {
              // 直接传递给 Indicator 组件
            }
        },  
    }]
 * 
 */

/**
 * NamedIndicator - 命名指示器组件, 响应了鼠标悬浮、点击、菜单等交互反馈
 * @param {Component} Indicator  Indicator 组件
 * @param {Component Object} indicator Indicator 组件参数
 * @param {{onhover, overlay}} 触发 indicator 的事件, 不配置即默认为正常; overlay: _isSelected=true触发, _isSelected=true不触发
 * @param {boolean} _isSelected  组件内部传递参数，用于selector选中状态下, indicator的状态
 * @returns
 * 功能：为子组件包装指示器效果（如悬浮、点击、菜单等交互反馈）
 * 
 * @param {Component} Indicator - 直接传入的指示器组件实例
 * @param {Object} indicator - 指示器配置对象，结构为 {xname, props, filter}
 *   - xname: {string} 指示器组件名称，用于从 DefaultIndicatorSet 中获取组件
 *   - props: {Object} 传递给指示器组件的属性
 *   - filter: {Object} 数据过滤配置，用于将外部数据映射到指示器组件
 * @param {Object} NamedIndicatorProps - 组件属性
 *   - onhover: {boolean} 是否响应鼠标悬浮事件
 *   - overlay: {boolean} 是否在选中状态下叠加悬浮效果
 *   - _isSelected: {boolean} 是否处于选中状态
 *   - onItemClick: {Function} 点击事件处理函数
 *   - onItemDeleted: {Function} 删除事件处理函数
 *   - onItemAdded: {Function} 添加事件处理函数
 *   - onItemChanged: {Function} 变更事件处理函数
 *   - onIndicatorClick: {Function} 指示器点击事件处理函数
 *   - dataSource: {Object} 数据源，用于 filter 数据映射
 * @returns {JSX.Element} 包装了指示器效果的子组件
 * 
 * 触发逻辑：
 * - 不配置 onhover/overlay：始终显示指示器
 * - 配置 onhover：仅在悬浮且未选中时显示
 * - 配置 overlay：在选中状态下悬浮时也显示（叠加效果）
 */
export default function NamedIndicator(NamedIndicatorProps) {
    // 解构参数
    const { children, Indicator, xname, props, __indicator = {xname, props}, indicator = __indicator,  
            _isSelected, onhover, overlay, 
            onItemClick, onItemDeleted, onItemAdded, onItemChanged, // 从 cart 传递下来的事件处理函数
            onIndicatorClick, 
            ...rest } = NamedIndicatorProps;

    // 悬浮状态管理
    const [onHoverState, setOnHoverState] = useState(false);

    // 鼠标进入处理函数
    const toggleHoverEntered = () => {
      setOnHoverState(true)
    }
    // 鼠标离开处理函数
    const toggleHoverLeaved = () => {
      setOnHoverState(false)
    }

    // ==================== 指示器触发逻辑 ====================
    // 判断指示器是否应该被触发显示
    // 触发条件：
    // 1. 没有配置 onhover：始终显示
    // 2. 配置了 onhover：仅在悬浮且未选中时显示
    // 3. 配置了 overlay：在选中状态下悬浮时也显示（叠加效果）
    const triggered = !onhover || (onhover && onHoverState && !_isSelected) || (overlay && onHoverState && _isSelected)

    // ==================== 指示器组件解析 ====================
    // 从配置中获取指示器组件和属性
    const indicatorData = getComponent(indicator)
    const _Indicator = Indicator || indicatorData.Component || NextIndicator
    const __Indicator = triggered ? _Indicator : NextIndicator
    
    // ==================== 数据过滤处理 ====================
    // 处理 indicator.filter 配置，将外部数据映射到指示器组件
    // filter 的作用：将父组件传递的数据源（dataSource）中的字段过滤到指示器组件需要的属性
    // 使用 gateway 中的 doFilter 算法，支持多种过滤规则
    const dataSource = rest.dataSource || rest;
    const filteredIndicatorData = indicator.filter ? doFilter(indicator.filter, dataSource) : {};
    
    // 临时调试日志 - 验证 doFilter 结果
    if (indicator.filter && Object.keys(filteredIndicatorData).length > 0) {
      console.log('🔍 NamedIndicator doFilter 验证:');
      console.log('  原始数据源:', dataSource);
      console.log('  过滤配置:', indicator.filter);
      console.log('  过滤结果:', filteredIndicatorData);
    }
    
    // ==================== 组件渲染 ====================
    // 根据是否配置 onhover 决定渲染方式
    return React.Children.map(children, child => {
      return (onhover)?
      (
        // 配置了 onhover：包装鼠标事件监听器
        <div onMouseEnter={() => toggleHoverEntered()} onMouseLeave={() => toggleHoverLeaved()}>
          <__Indicator {...filteredIndicatorData} {...indicatorData}
          //  {...rest} // 无需传递 rest 参数，rest 直接由 NamedCart 传递至 Presenter 
            onItemClick={onItemClick}
            onItemDeleted={onItemDeleted}
            onItemAdded={onItemAdded} 
            onItemChanged={onItemChanged} 
            __onIndicatorClick={onIndicatorClick}
          >
              {child}
          </__Indicator>
        </div>
      ) : 
      (
          // 没有配置 onhover：直接渲染指示器
          <_Indicator {...filteredIndicatorData} {...indicatorData}
            // {...rest} // 无需传递 rest 参数，rest 直接由 NamedCart 传递至 Presenter
            onItemClick={onItemClick}
            onItemDeleted={onItemDeleted}
            onItemAdded={onItemAdded} 
            onItemChanged={onItemChanged} 
            __onIndicatorClick={onIndicatorClick}
          >
              {child}
          </_Indicator>
      )
      })
}


/**
 * 获取指示器组件和属性
 * @param {string|Object} data - 指示器配置，可以是字符串（组件名）或对象 {xname, props}
 * @returns {Object} {Component, props} - 组件实例和属性
 */
function getComponent(data) {
  // 提取组件名称
  const xname = data ? (typeof data == 'string' ? data : data.xname) : undefined
  if(!xname){
    return {}
  }
  
  // 提取组件属性
  const props = (data && typeof data == 'object') ? data.props : undefined
  
  // 从注册表中获取组件实例
  const Component = xname ? (DefaultIndicatorSet()[xname] || tips(xname)) : undefined
  if(!Component){
    return {}
  }
  
  return { Component, props }
}


/**
 * 生成未定义组件的提示函数
 * @param {string} name - 组件名称
 * @returns {Function} 返回一个渲染提示信息的函数
 */
function tips(name) {
  return _ => `NamedIndicator ${name} 未定义`;
}
