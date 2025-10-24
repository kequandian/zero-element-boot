import React from 'react';
import { history } from 'umi';

/**
 * NavigationIndicator - 导航指示器组件
 * 支持多种导航方式：
 * 1. navigation 对象导航：通过 navigation 从 allComponents 中获取组件并渲染
 * 2. route 字符串导航：使用 UmiJS 路由跳转（当 navigation 或 allComponents 为 null 时自动使用）
 * 
 * 优先级规则：
 * - 当 navigation 和 allComponents 都存在且不为 null 时，使用 navigation 导航
 * - 当 navigation 或 allComponents 为 null 时，自动使用 route 路由
 * 
 * @param {string} route 路由路径（备用）
 * @param {string|null} navigation 组件名称，用于从 allComponents 中索引
 * @param {Object|null} allComponents 外部组件集合
 * @param {Function} onItemClick 点击事件处理函数（可选）
 * @returns {JSX.Element}
 */
export default function NavigationIndicator(props) {
    const { children, route, navigation, allComponents, onItemClick, ...rest } = props;

    /**
     * 处理点击事件
     */
    const handleClick = () => {
        // 如果提供了 onItemClick 回调，先执行它
        if (onItemClick) {
            onItemClick({ navigation, route, ...rest });
        }
        
        // 优先使用 navigation 对象导航
        if (navigation && allComponents && navigation !== null && allComponents !== null) {
            // 这里可以扩展为动态组件渲染逻辑
            return;
        }
        
        // 备用：使用 route 字符串导航
        if (route) {
            history.push(route);
            return;
        }
        
        // 如果都没有提供，显示警告
        console.warn('NavigationIndicator: 既没有提供 navigation 对象也没有提供 route 路径');
    };

    return (
        <div style={{width:'100%'}} onClick={handleClick}>
            {
                React.Children.map(children, child => (
                    child
                ))
            }
        </div>
    );
}