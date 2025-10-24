# zero-element-boot 测试组件入口

## 📋 概述

这是一个基于 zero-element-boot 框架的测试组件入口，提供了统一的界面来访问和测试框架中的所有组件。

## 🚀 功能特性

### 🏠 主页面
- **分类展示**: 按组件类型分类展示所有测试组件
- **卡片式布局**: 使用 Gridbox 布局展示组件卡片
- **响应式设计**: 支持不同屏幕尺寸的适配

### 🧩 组件分类
- **AutoLayout**: AutoLayout 相关测试组件
- **Components**: 基础组件测试（NamedCart、NamedSelector、Indicator 等）
- **Composition**: 复合组件演示
- **UI**: 用户界面组件
- **LowCode**: 低代码相关组件
- **Hooks**: React Hooks 演示
- **Presenter**: 展示组件演示

### 🎯 交互功能
- **点击导航**: 点击组件卡片进入对应的测试页面
- **返回功能**: 支持返回上一级和返回首页
- **面包屑导航**: 显示当前所在位置

## 🛠️ 技术实现

### 核心组件

1. **MultiViewport**: 全屏网格布局容器
2. **Flexbox**: 弹性布局组件
3. **Cart**: 卡片样式组件
4. **ShadowCart**: 阴影效果组件
5. **ChakraText**: 文本展示组件
6. **ChakraButton**: 按钮组件

### 布局设计

#### 主页面布局
- 使用 `MultiViewport` 作为根容器
- **5列4行网格布局**: `horizontalWeights: [1,1,1,1,1]`, `verticalWeights: [1,1,1,1]`
- 20个测试组件直接作为 `MultiViewport` 的子组件
- 每个组件卡片使用 `ShadowCart` 组件提供阴影效果

#### 组件卡片布局
- 使用 `ShadowCart` 组件作为卡片容器
- 内部使用 `Flexbox` 垂直布局
- 使用 `ChakraText` 组件显示组件名称和描述
- 支持鼠标悬停效果和点击事件

#### 组件详情页布局
- 使用 `MultiViewport` 全屏布局
- 头部导航栏使用 `Cart` 和 `Flexbox` 组件
- 内容区域使用 `Flexbox` 垂直布局
- 支持滚动和溢出处理

### MultiViewport 配置

#### 主页面网格布局
```javascript
<MultiViewport
  gridConfig={{
    horizontalWeights: [1,1,1,1,1], // 5列
    verticalWeights: [1,1,1,1],      // 4行 (20个组件 ÷ 5列 = 4行)
    gap: '16px',
    cellBorderRadius: '12px'
  }}
>
  {testComponents.map((component, index) => (
    <ShadowCart key={component.id} onClick={() => handleComponentClick(component)}>
      <Flexbox direction="column" align="center" justify="center">
        <ChakraText content={component.name} fontSize="lg" fontWeight="bold" />
        <ChakraText content={component.description} fontSize="sm" />
      </Flexbox>
    </ShadowCart>
  ))}
</MultiViewport>
```

#### 组件详情页布局
```javascript
<MultiViewport
  gridConfig={{
    horizontalWeights: [1],
    verticalWeights: [1],
    gap: '0px',
    cellBorderRadius: '0px'
  }}
>
  <Flexbox direction="column" align="start" justify="start" style={{ height: '100vh' }}>
    <Cart fill="#f7fafc" corner="0px" stroke="none" linewidth="0px" margin="0px" padding="16px">
      <Flexbox direction="row" align="between" justify="start">
        <ChakraButton content="← 返回" variant="outline" size="sm" onClick={goBack} />
        <ChakraText content={currentComponent.name} fontSize="lg" fontWeight="bold" />
        <ChakraButton content="🏠 首页" variant="ghost" size="sm" onClick={goHome} />
      </Flexbox>
    </Cart>
    <Flexbox direction="column" align="start" justify="start" style={{ flex: 1, overflow: 'auto' }}>
      <ComponentToRender {...props} />
    </Flexbox>
  </Flexbox>
</MultiViewport>
```

## 📁 文件结构

```
src/pages/TestIndex/
├── index.js                 # 主入口组件
└── README.md               # 说明文档
```

## 🎨 界面设计

### 主页面布局
- **顶部标题区域**: 显示框架名称和说明
- **分类展示区域**: 按分类展示组件卡片
- **卡片设计**: 白色背景，圆角边框，悬停效果

### 组件页面布局
- **顶部导航栏**: 返回按钮、标题、首页按钮
- **内容区域**: 全屏显示选中的测试组件

## 🔧 使用方法

### 启动项目
```bash
npm run start
```

### 访问入口
打开浏览器访问项目根路径，即可看到测试组件入口页面。

### 导航操作
1. **进入组件**: 点击任意组件卡片
2. **返回上级**: 点击左上角"← 返回"按钮
3. **返回首页**: 点击右上角"🏠 首页"按钮

## 📝 添加新测试组件

### 1. 导入组件
在 `src/pages/TestIndex/index.js` 中导入新组件：

```javascript
import NewTestComponent from '../path/to/NewTestComponent';
```

### 2. 添加到配置
在 `testComponents` 数组中添加新组件配置：

```javascript
{
  id: 'new-test-component',
  name: 'NewTestComponent',
  description: '新测试组件描述',
  component: NewTestComponent,
  category: 'Components' // 或合适的分类
}
```

### 3. 重新启动
重启开发服务器即可看到新组件。

## 🎯 最佳实践

### 组件命名
- 使用有意义的组件名称
- 保持描述简洁明了
- 合理分类组件

### 布局设计
- 使用框架定义的布局组件
- 保持响应式设计
- 遵循框架的设计规范

### 事件处理
- 直接使用 React 的 onClick 事件处理点击
- 通过 React 状态管理导航状态
- 使用框架组件的内置事件处理机制

## 🐛 故障排除

### 常见问题

1. **组件不显示**
   - 检查组件导入路径是否正确
   - 确认组件已正确导出

2. **点击无响应**
   - 检查 onClick 事件是否正确绑定
   - 确认组件状态管理是否正确

3. **样式问题**
   - 检查框架组件的属性设置是否正确
   - 确认 MultiViewport 配置是否正确
   - 验证 Cart 和 ShadowCart 组件的参数

### 调试技巧
- 使用浏览器开发者工具检查组件结构
- 查看控制台错误信息
- 检查组件配置是否正确

## 📚 相关文档

- [zero-element-boot 框架规则文件](../zero-element-boot-framework-rules.md)
- [AutoLayout 使用指南](../get_started/如何通过AutoLayout展示一个组件.md)

---

*此入口组件完全基于 zero-element-boot 框架构建，展示了框架的强大功能和灵活性。*
