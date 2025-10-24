import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import MultiViewport from '@/components/layout/MultiViewport';
import { Flexbox } from '@/components/layout';
import { Cart, ShadowCart } from '@/components/cart';
import { ChakraText, ChakraButton } from '@/components/presenter';
import { NamedIndicator } from '@/components';

// 导入所有测试组件，用于 navigation.allComponents
import TestAutoLayout from '../TestAutoLayout';
import TestPreviewAutoLayout from '../TestPreviewAutoLayout';
import VideoCardLayoutDemo from '../VideoCardLayoutDemo';
import TestNamedCart from '../TestComponents/TestNamedCart';
import TestNamedSelector from '../TestComponents/TestNamedSelector';
import TestIndicator from '../TestComponents/TestIndicator';
import TestContainer from '../TestComponents/TestContainer';
import TestLayout from '../TestComponents/TestLayout';
import AvatarItemDemo from '../TestComposition/AvatarItemDemo';
import RssAutoLayout from '../../composition/RssAutoLayout/Sandbox';
import AvatarSelected from '../../composition/AvatarSelected/Sandbox';
import Standalone from '../../composition/Standalone/Sandbox';
import Connection from '../../composition/Connection';
import ApisUi from '../../composition/ApisUi/Sandbox';
import LogsUi from '../../composition/LogsUi/Sandbox';
import TestRowIcons from '../TestLowCode/TestRowIcons/Sandbox';
import AutoCartSet from '../TestLowCode/AutoCartSet/Presenter';
import AutoComponentSet from '../TestLowCode/AutoComponentSet';
import RouterParamsDemo from '../TestHooks/testUseRouter/demo';
import JsonTreeDemo from '../../components/presenter/tree/JsonTree/Sandbox';
import RssRender from '../../components/presenter/rss/RssRender/Sandbox';

// 外部组件集合
const allComponents = {
  TestAutoLayout,
  TestPreviewAutoLayout,
  VideoCardLayoutDemo,
  TestNamedCart,
  TestNamedSelector,
  TestIndicator,
  TestContainer,
  TestLayout,
  AvatarItemDemo,
  RssAutoLayout,
  AvatarSelected,
  Standalone,
  Connection,
  ApisUi,
  LogsUi,
  TestRowIcons,
  AutoCartSet,
  AutoComponentSet,
  RouterParamsDemo,
  JsonTreeDemo,
  RssRender
};

// 测试组件路由配置 - 不再导入组件，而是使用路由路径

// 测试组件配置 - 支持两种导航方式
const testComponents = [
  {
    id: 'test-auto-layout',
    name: 'TestAutoLayout',
    description: 'AutoLayout 基础测试',
    // 方式1: 使用 navigation 字符串（优先）
    navigation: 'TestAutoLayout',
    // 方式2: 使用 route 字符串（备用）
    route: '/TestAutoLayout',
    category: 'AutoLayout'
  },
  {
    id: 'test-preview-auto-layout',
    name: 'TestPreviewAutoLayout',
    description: 'AutoLayout 预览测试',
    navigation: 'TestPreviewAutoLayout',
    route: '/TestPreviewAutoLayout',
    category: 'AutoLayout'
  },
  {
    id: 'video-card-layout-demo',
    name: 'VideoCardLayoutDemo',
    description: '视频卡片布局演示',
    navigation: 'VideoCardLayoutDemo',
    route: '/VideoCardLayoutDemo',
    category: 'Layout'
  },
  {
    id: 'test-named-cart',
    name: 'TestNamedCart',
    description: 'NamedCart 组件测试',
    navigation: 'TestNamedCart',
    route: '/TestComponents/TestNamedCart',
    category: 'Components'
  },
  {
    id: 'test-named-selector',
    name: 'TestNamedSelector',
    description: 'NamedSelector 组件测试',
    navigation: 'TestNamedSelector',
    route: '/TestComponents/TestNamedSelector',
    category: 'Components'
  },
  {
    id: 'test-indicator',
    name: 'TestIndicator',
    description: 'Indicator 组件测试',
    navigation: 'TestIndicator',
    route: '/TestComponents/TestIndicator',
    category: 'Components'
  },
  {
    id: 'test-container',
    name: 'TestContainer',
    description: 'Container 组件测试',
    navigation: 'TestContainer',
    route: '/TestComponents/TestContainer',
    category: 'Components'
  },
  {
    id: 'test-layout',
    name: 'TestLayout',
    description: 'Layout 组件测试',
    navigation: 'TestLayout',
    route: '/TestComponents/TestLayout',
    category: 'Components'
  },
  {
    id: 'avatar-item-demo',
    name: 'AvatarItemDemo',
    description: '头像项目演示',
    navigation: 'AvatarItemDemo',
    route: '/TestComposition/AvatarItemDemo',
    category: 'Composition'
  },
  {
    id: 'rss-auto-layout',
    name: 'RssAutoLayout',
    description: 'RSS AutoLayout 演示',
    navigation: 'RssAutoLayout',
    route: '/composition/RssAutoLayout/Sandbox',
    category: 'Composition'
  },
  {
    id: 'avatar-selected',
    name: 'AvatarSelected',
    description: '头像选择演示',
    navigation: 'AvatarSelected',
    route: '/composition/AvatarSelected/Sandbox',
    category: 'Composition'
  },
  {
    id: 'standalone',
    name: 'Standalone',
    description: '独立组件演示',
    navigation: 'Standalone',
    route: '/composition/Standalone/Sandbox',
    category: 'Composition'
  },
  {
    id: 'connection',
    name: 'Connection',
    description: '连接组件演示',
    navigation: 'Connection',
    route: '/composition/Connection',
    category: 'Composition'
  },
  {
    id: 'apis-ui',
    name: 'ApisUi',
    description: 'API UI 演示',
    navigation: 'ApisUi',
    route: '/composition/ApisUi/Sandbox',
    category: 'UI'
  },
  {
    id: 'logs-ui',
    name: 'LogsUi',
    description: '日志 UI 演示',
    navigation: 'LogsUi',
    route: '/composition/LogsUi/Sandbox',
    category: 'UI'
  },
  {
    id: 'test-row-icons',
    name: 'TestRowIcons',
    description: '行图标测试',
    navigation: 'TestRowIcons',
    route: '/TestLowCode/TestRowIcons/Sandbox',
    category: 'LowCode'
  },
  {
    id: 'auto-cart-set',
    name: 'AutoCartSet',
    description: '自动购物车设置',
    navigation: 'AutoCartSet',
    route: '/TestLowCode/AutoCartSet/Presenter',
    category: 'LowCode'
  },
  {
    id: 'auto-component-set',
    name: 'AutoComponentSet',
    description: '自动组件设置',
    navigation: 'AutoComponentSet',
    route: '/TestLowCode/AutoComponentSet',
    category: 'LowCode'
  },
  {
    id: 'router-params-demo',
    name: 'RouterParamsDemo',
    description: '路由参数演示',
    navigation: 'RouterParamsDemo',
    route: '/TestHooks/testUseRouter/demo',
    category: 'Hooks'
  },
  {
    id: 'json-tree-demo',
    name: 'JsonTreeDemo',
    description: 'JSON 树演示',
    navigation: 'JsonTreeDemo',
    route: '/components/presenter/tree/JsonTree/Sandbox',
    category: 'Presenter'
  },
  {
    id: 'rss-render',
    name: 'RssRender',
    description: 'RSS 渲染演示',
    navigation: 'RssRender',
    route: '/components/presenter/rss/RssRender/Sandbox',
    category: 'Presenter'
  }
];

export default function TestIndex(props) {
  // 渲染组件列表
  return (
    <ChakraProvider>
      <MultiViewport
        gridConfig={{
          horizontalWeights: [1,1,1,1,1], // 5列
          verticalWeights: [1,1,1,1],      // 4行 (20个组件 ÷ 5列 = 4行)
          gap: '16px',
          cellBorderRadius: '12px'
        }}
      >
        {testComponents.map((component, index) => (
          <NamedIndicator
            key={component.id}
            indicator={{
              xname: 'NavigationIndicator',
              filter: {
                "navigation": "navigation",
                "route": "route"
              },
              allComponents: allComponents
            }}
            dataSource={component}
          >
            <ShadowCart>
              <Flexbox
                direction="column"
                align="center"
                justify="center"
                style={{
                  height: '100%',
                  padding: '20px',
                  textAlign: 'center'
                }}
              >
                <ChakraText
                  content={component.name}
                  fontSize="lg"
                  fontWeight="bold"
                  color="#2d3748"
                  style={{ marginBottom: '8px' }}
                />
                <ChakraText
                  content={component.description}
                  fontSize="sm"
                  color="#718096"
                  lineHeight="1.5"
                />
              </Flexbox>
            </ShadowCart>
          </NamedIndicator>
        ))}
      </MultiViewport>
    </ChakraProvider>
  );
}