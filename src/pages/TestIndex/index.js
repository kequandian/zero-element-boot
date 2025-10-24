import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import MultiViewport from '@/components/layout/MultiViewport';
import { Flexbox } from '@/components/layout';
import { Cart, ShadowCart } from '@/components/cart';
import { ChakraText, ChakraButton } from '@/components/presenter';
import { NamedIndicator } from '@/components';

// 测试组件导入
import TestAutoLayout from '../TestAutoLayout';
import TestPreviewAutoLayout from '../TestPreviewAutoLayout';
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


// 测试组件配置
const testComponents = [
  {
    id: 'test-auto-layout',
    name: 'TestAutoLayout',
    description: 'AutoLayout 基础测试',
    component: TestAutoLayout,
    category: 'AutoLayout'
  },
  {
    id: 'test-preview-auto-layout',
    name: 'TestPreviewAutoLayout',
    description: 'AutoLayout 预览测试',
    component: TestPreviewAutoLayout,
    category: 'AutoLayout'
  },
  {
    id: 'test-named-cart',
    name: 'TestNamedCart',
    description: 'NamedCart 组件测试',
    component: TestNamedCart,
    category: 'Components'
  },
  {
    id: 'test-named-selector',
    name: 'TestNamedSelector',
    description: 'NamedSelector 组件测试',
    component: TestNamedSelector,
    category: 'Components'
  },
  {
    id: 'test-indicator',
    name: 'TestIndicator',
    description: 'Indicator 组件测试',
    component: TestIndicator,
    category: 'Components'
  },
  {
    id: 'test-container',
    name: 'TestContainer',
    component: TestContainer,
    description: 'Container 组件测试',
    category: 'Components'
  },
  {
    id: 'test-layout',
    name: 'TestLayout',
    description: 'Layout 组件测试',
    component: TestLayout,
    category: 'Components'
  },
  {
    id: 'avatar-item-demo',
    name: 'AvatarItemDemo',
    description: '头像项目演示',
    component: AvatarItemDemo,
    category: 'Composition'
  },
  {
    id: 'rss-auto-layout',
    name: 'RssAutoLayout',
    description: 'RSS AutoLayout 演示',
    component: RssAutoLayout,
    category: 'Composition'
  },
  {
    id: 'avatar-selected',
    name: 'AvatarSelected',
    description: '头像选择演示',
    component: AvatarSelected,
    category: 'Composition'
  },
  {
    id: 'standalone',
    name: 'Standalone',
    description: '独立组件演示',
    component: Standalone,
    category: 'Composition'
  },
  {
    id: 'connection',
    name: 'Connection',
    description: '连接组件演示',
    component: Connection,
    category: 'Composition'
  },
  {
    id: 'apis-ui',
    name: 'ApisUi',
    description: 'API UI 演示',
    component: ApisUi,
    category: 'UI'
  },
  {
    id: 'logs-ui',
    name: 'LogsUi',
    description: '日志 UI 演示',
    component: LogsUi,
    category: 'UI'
  },
  {
    id: 'test-row-icons',
    name: 'TestRowIcons',
    description: '行图标测试',
    component: TestRowIcons,
    category: 'LowCode'
  },
  {
    id: 'auto-cart-set',
    name: 'AutoCartSet',
    description: '自动购物车设置',
    component: AutoCartSet,
    category: 'LowCode'
  },
  {
    id: 'auto-component-set',
    name: 'AutoComponentSet',
    description: '自动组件设置',
    component: AutoComponentSet,
    category: 'LowCode'
  },
  {
    id: 'router-params-demo',
    name: 'RouterParamsDemo',
    description: '路由参数演示',
    component: RouterParamsDemo,
    category: 'Hooks'
  },
  {
    id: 'json-tree-demo',
    name: 'JsonTreeDemo',
    description: 'JSON 树演示',
    component: JsonTreeDemo,
    category: 'Presenter'
  },
  {
    id: 'rss-render',
    name: 'RssRender',
    description: 'RSS 渲染演示',
    component: RssRender,
    category: 'Presenter'
  },
];

// 按分类组织组件
const categorizedComponents = testComponents.reduce((acc, component) => {
  if (!acc[component.category]) {
    acc[component.category] = [];
  }
  acc[component.category].push(component);
  return acc;
}, {});

export default function TestIndex(props) {
  const [currentComponent, setCurrentComponent] = React.useState(null);
  const [currentPath, setCurrentPath] = React.useState([]);

  // 导航到指定组件
  const navigateToComponent = (componentItemData) => {
    setCurrentComponent(componentItemData);
    setCurrentPath(prev => [...prev, componentItemData]);
  };

  // 处理组件卡片点击事件
  const handleComponentClick = (componentItemData) => {
    console.log('🔍 点击事件数据:', componentItemData);
    console.log('🔍 数据类型检查:', {
      hasNotes: !!componentItemData?.notes,
      hasComponent: !!componentItemData?.component,
      componentType: typeof componentItemData?.component,
      isFunction: typeof componentItemData?.component === 'function'
    });
    
    // 验证数据过滤是否正确
    if (componentItemData && componentItemData.notes) {
      console.log('✅ 数据过滤成功！notes 字段:', componentItemData.notes);
      
      // 如果包含 component 字段，直接使用它
      if (componentItemData.component && typeof componentItemData.component === 'function') {
        console.log('✅ 找到 component 字段，直接使用:', componentItemData.component);
        // 构造完整的组件对象
        const fullComponent = {
          id: componentItemData.notes + '-from-filter',
          name: componentItemData.notes,
          description: componentItemData.notes,
          component: componentItemData.component,
          category: 'Filtered'
        };
        navigateToComponent(fullComponent);
        return;
      }
      
      // 否则使用 notes 字段查找原始组件
      const component = testComponents.find(comp => comp.description === componentItemData.notes);
      if (component) {
        console.log('✅ 通过 notes 找到组件:', component);
        navigateToComponent(component);
        return;
      }
    }
    
    // 如果没有预期的字段，尝试直接使用传入的数据
    console.log('⚠️ 数据过滤可能有问题，使用原始数据:', componentItemData);
    navigateToComponent(componentItemData);
  };

  // 返回上一级
  const goBack = () => {
    if (currentPath.length > 0) {
      const newPath = [...currentPath];
      newPath.pop();
      setCurrentPath(newPath);
      
      if (newPath.length === 0) {
        setCurrentComponent(null);
      } else {
        setCurrentComponent(newPath[newPath.length - 1]);
      }
    }
  };

  // 如果当前有选中的组件，渲染该组件
  if (currentComponent) {
    console.log('🎯 当前组件:', currentComponent);
    const ComponentToRender = currentComponent.component;
    console.log('🎯 要渲染的组件:', ComponentToRender);
    
    if (!ComponentToRender) {
      console.error('❌ 组件未定义:', currentComponent);
      return <div>组件未定义</div>;
    }
    
    return (
      <ChakraProvider>
        <MultiViewport
          gridConfig={{
            horizontalWeights: [1],
            verticalWeights: [1],
            gap: '0px',
            cellBorderRadius: '0px'
          }}
        >
          <Flexbox
            direction="column"
            align="start"
            justify="start"
            style={{ height: '100vh' }}
          >
            {/* 头部导航栏 */}
            <Cart
              fill="#f7fafc"
              corner="0px"
              stroke="none"
              linewidth="0px"
              margin="0px"
              padding="16px"
              style={{ width: '100%', borderBottom: '1px solid #e2e8f0' }}
            >
              <Flexbox
                direction="row"
                align="between"
                justify="start"
                style={{ width: '100%' }}
              >
                <ChakraButton
                  content="← 返回"
                  variant="outline"
                  size="sm"
                  onClick={goBack}
                />
                <ChakraText
                  content={currentComponent.name}
                  fontSize="lg"
                  fontWeight="bold"
                  style={{ flex: 1, textAlign: 'center' }}
                />
              </Flexbox>
            </Cart>
            
            {/* 组件内容区域 */}
            <Flexbox
              direction="column"
              align="start"
              justify="start"
              style={{ flex: 1, overflow: 'auto', padding: '16px', width: '100%' }}
            >
              <ComponentToRender {...props} />
            </Flexbox>
          </Flexbox>
        </MultiViewport>
      </ChakraProvider>
    );
  }

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
              xname: 'ClickIndicator',
              filter: {
                "description": "notes",
                "component": "component"
              }
            }}
            dataSource={component}
            onItemClick={(data) => handleComponentClick(data)}
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

// 组件包装器 - 用于渲染动态组件
function ComponentWrapper({ component: Component, ...props }) {
  return <Component {...props} />;
}
