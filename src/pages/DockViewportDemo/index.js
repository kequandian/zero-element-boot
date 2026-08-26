import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";

import { DockViewport, Flexbox } from '@/components/layout';
import { Cart, ShadowCart } from '@/components/cart';
import { ChakraText, ChakraButton } from '@/components/presenter';
import DefaultPlaceholder from '@/components/presenter/placeholder/DefaultPlaceholder';

/**
 * DockViewport 演示页面
 *
 * present 组件停靠在父容器的九个方位：
 * 左上角 / 顶部中央 / 右上角 / 左侧中央 / 正中央 / 右侧中央 / 左下角 / 底部中央 / 右下角
 */
export default function DockViewportDemo() {
  return (
    <ChakraProvider>
      <Flexbox
        direction="column"
        style={{
          width: '100vw',
          height: '100vh',
          padding: '20px',
          backgroundColor: '#f7fafc',
          overflow: 'auto'
        }}
      >
        <ChakraText
          content="DockViewport 演示"
          fontSize="2xl"
          fontWeight="bold"
          color="#2d3748"
          style={{ marginBottom: '20px' }}
        />

        <Cart style={{ height: '80vh', position: 'relative', overflow: 'hidden' }}>
          <DockViewport
            width="100%"
            height="100%"
            background="transparent"
            dockConfig={{
              offset: '20px',
              gap: '12px',
              cellBorderRadius: '12px',
              docks: [
                'top-left',        // 左上角：Logo
                'top-center',      // 顶部中央：标题
                'top-right',       // 右上角：用户信息
                'middle-left',     // 左侧中央：导航面板
                'center',          // 正中央：主内容
                'middle-right',    // 右侧中央：属性面板
                'bottom-left',     // 左下角：设置
                {                  // 底部中央：工具栏（对象形式，精细控制宽度/高度/层级）
                  position: 'bottom-center',
                  width: '60%',
                  height: '56px',
                  offset: '16px',
                  zIndex: 10
                },
                '右下角'            // 右下角：状态栏（中文方位别名）
              ]
            }}
          >
            <ShadowCart><ChakraButton size="sm">Logo 左上角</ChakraButton></ShadowCart>
            <ShadowCart><ChakraText content="标题 顶部中央" fontWeight="bold" /></ShadowCart>
            <ShadowCart><ChakraButton size="sm" variant="outline">用户 右上角</ChakraButton></ShadowCart>
            <ShadowCart><DefaultPlaceholder content="导航 左侧中央" /></ShadowCart>
            <ShadowCart><DefaultPlaceholder content="主内容 正中央" /></ShadowCart>
            <ShadowCart><DefaultPlaceholder content="属性 右侧中央" /></ShadowCart>
            <ShadowCart><ChakraButton size="sm" variant="outline">设置 左下角</ChakraButton></ShadowCart>
            <ShadowCart><DefaultPlaceholder content="工具栏 底部中央" /></ShadowCart>
            <ShadowCart><ChakraText content="状态 右下角" fontSize="sm" /></ShadowCart>
          </DockViewport>
        </Cart>
      </Flexbox>
    </ChakraProvider>
  );
}
