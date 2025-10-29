import React from 'react';

/**
 * 路由指示器 - 封装路由跳转功能
 * 处理内部路由和外部链接跳转，优先在新标签页打开
 * @param {Object} props 
 * @returns 
 */
export default function RouteIndicator(props) {

    const { children, onItemClick, indicatorData, ...rest } = props;

    function handleRoute() {
        // 触发外部回调（若存在），但不阻止内置路由
        if (onItemClick) {
            try { onItemClick(indicatorData); } catch (e) { /* noop */ }
        }

        // 执行内置路由逻辑
        const item = indicatorData || {};
        const raw = item.path || item.url || '';
        
        if (!raw) {
            return;
        }

        const href = raw.startsWith('http') ? raw : `${location.origin}${raw}`;
        
        // 优先在新标签打开；如被拦截则当前页跳转
        try {
            const win = window.open(href, '_blank');
            if (!win) {
                console.log('Popup blocked, redirecting current page');
                window.location.href = href;
            }
        } catch (error) {
            console.error('Error opening URL:', error);
        }
    }

    return (
        <div style={{width:'100%'}} onClick={handleRoute}>
            {
                React.Children.map(children, child => (
                    child
                ))
            }
        </div>
    )
}
