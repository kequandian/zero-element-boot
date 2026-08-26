/**
 * Example usage of the DockViewport component
 *
 * DockViewport 允许 present 组件停靠在父容器的九个方位：
 * 左上角 / 顶部中央 / 右上角 / 左侧中央 / 正中央 / 右侧中央 / 左下角 / 底部中央 / 右下角
 */

import React from 'react';

import DockViewport from './index';

// 示例用 present 组件（生产代码请使用框架 presenter 组件，如 ChakraText / DefaultPlaceholder）
const Panel = ({ label, color = '#334155' }) => (
  <div style={{
    background: color,
    color: '#fff',
    padding: '8px 14px',
    borderRadius: '8px',
    fontSize: '14px',
    whiteSpace: 'nowrap'
  }}>{label}</div>
);

// Example 1: 九个方位全部停靠
function ExampleAllPositions() {
  return (
    <DockViewport
      background="#1a202c"
      offset="16px"
      gap="12px"
      dockConfig={{
        docks: [
          'top-left', 'top-center', 'top-right',
          'middle-left', 'center', 'middle-right',
          'bottom-left', 'bottom-center', 'bottom-right'
        ]
      }}
    >
      <Panel label="左上角" />
      <Panel label="顶部中央" />
      <Panel label="右上角" />
      <Panel label="左侧中央" />
      <Panel label="正中央" color="#3b82f6" />
      <Panel label="右侧中央" />
      <Panel label="左下角" />
      <Panel label="底部中央" />
      <Panel label="右下角" />
    </DockViewport>
  );
}

// Example 2: 字符串简写（docks 与 children 一一对应）
function ExampleStringDocks() {
  return (
    <DockViewport
      background="#0f172a"
      dockConfig={{
        docks: ['top-left', 'top-center', 'top-right', 'bottom-center', '右下角'],
        offset: '24px',
        gap: '12px',
        cellBorderRadius: '12px'
      }}
    >
      <Panel label="Logo 左上角" />
      <Panel label="标题 顶部中央" />
      <Panel label="用户 右上角" />
      <Panel label="工具栏 底部中央" />
      <Panel label="状态 右下角" />
    </DockViewport>
  );
}

// Example 3: 对象形式的单项配置（宽度/高度/层级/边距等精细控制）
function ExampleObjectDocks() {
  return (
    <DockViewport
      background="#000"
      dockConfig={[
        {
          position: 'center',      // 停靠在正中央，占满 60% 宽度
          width: '60%',
          height: '50%',
          offset: '32px'
        },
        {
          position: 'bottom-center', // 停靠在底部中央的工具栏
          width: '70%',
          height: '48px',
          offset: '16px',
          zIndex: 10
        },
        {
          position: '右上角',        // 中文方位 + 自定义圆角与边距
          borderRadius: '8px',
          offset: '12px'
        }
      ]}
    >
      <Panel label="主内容（正中央 60% 宽）" color="#1d4ed8" />
      <Panel label="底部工具栏" color="#0f766e" />
      <Panel label="提示浮层" color="#b91c1c" />
    </DockViewport>
  );
}

// Example 4: 同一方位停靠多个子组件（自动纵向堆叠，间距为 gap）
function ExampleStacking() {
  return (
    <DockViewport
      background="#111827"
      dockConfig={{
        docks: ['middle-left', 'middle-left', 'middle-left'],
        gap: '12px',
        offset: '20px'
      }}
    >
      <Panel label="左侧面板 1" />
      <Panel label="左侧面板 2" />
      <Panel label="左侧面板 3" />
    </DockViewport>
  );
}

// Example 5: 别名与中文方位
function ExampleAliases() {
  return (
    <DockViewport
      background="#134e4a"
      docks={['nw', '左上角', '右上角', '东南', 'C']}
      offset="16px"
    >
      <Panel label="nw = 左上角" />
      <Panel label="左上角" />
      <Panel label="右上角" />
      <Panel label="东南 = 右下角" />
      <Panel label="C = 正中央" />
    </DockViewport>
  );
}

export {
  ExampleAllPositions,
  ExampleStringDocks,
  ExampleObjectDocks,
  ExampleStacking,
  ExampleAliases
};
