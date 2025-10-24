# zero-element-boot 框架规则文件

## 📋 框架概述

**zero-element-boot** 是一个基于 AutoLayout 的声明式前端组件框架，通过 JSON/对象描述（DSL）组合基础组件，实现界面搭建、数据绑定与交互逻辑的解耦。

### 核心特性
- **AutoLayout DSL**: 以 JSON 定义组件树与布局、风格和数据绑定
- **组件模型完整**: presenter/cart/layout/container/gateway/indicator/selector
- **数据绑定丰富**: binding、filter、chain、自定义 Gateway
- **列表与选择**: PlainList、SelectList、MultiSelectList、ManageList
- **交互态叠加**: ShadowIndicator 等指示器与 OutlineSelector、CircularCheckboxSelector 等选择器

---

## 🧩 七大核心组件类型

### 1. presenter - 基础展示组件
**作用**: 最基础的UI展示单元
**示例**: Avatar、Text、Button、Image
**配置方式**:
```json
{ "xname": "Avatar", "props": { "url": "http://example.com/avatar.jpg" } }
```

### 2. cart - 修饰容器组件
**作用**: 为组件添加样式、边框、阴影等视觉效果
**示例**: Cart、CssCart、ShadowCart、Outline
**配置方式**:
```json
{
  "cart": "Cart"
  // 或
  "cart": { "xname": "CssCart", "props": { "padding": "10px", "border": "1px solid #ccc" } }
}
```

### 3. layout - 布局组件
**作用**: 控制多个子组件的排列方式
**示例**: Flexbox、Gridbox、HStack、VStack、Wrap
**配置方式**:
```json
{
  "xname": "Flexbox",
  "props": { "direction": "row", "spacing": "8px" },
  "children": ["Component1", "Component2"]
}
```

### 4. container - 顶层容器组件
**作用**: 管理列表逻辑、选择状态、CRUD操作
**示例**: PlainList、SelectList、MultiSelectList、ManageList
**配置方式**:
```json
{ "container": "SelectList" }
```

### 5. gateway - 数据网关
**作用**: 数据转换和绑定
**类型**: Binding、Filter、Chain、自定义Gateway
**配置方式**:
```json
{
  "binding": { "avatarUrl": "url" },
  "filter": { "profile": {} },
  "chain": [
    { "|": { "users": [] } },
    { "[]": 1 },
    { "avatarUrl": "url" }
  ]
}
```

### 6. indicator - 交互反馈组件
**作用**: 悬浮、菜单等交互反馈（风格/状态叠加）
**示例**: ShadowIndicator、LabelIndicator、ClickIndicator
**配置方式**:
```json
{
  "indicator": {
    "xname": "ShadowIndicator",
    "props": {},
    "binding": { "title": "content" }
  }
}
```

### 7. selector - 选择态控制
**作用**: 选择态的风格与状态控制（与 indicator 叠加使用）
**示例**: OutlineSelector、CircularCheckboxSelector
**配置方式**:
```json
{
  "selector": { "xname": "OutlineSelector", "props": { "selected": true } },
  "unselector": { "xname": "OutlineSelector", "props": { "selected": false } }
}
```

---

## 🔄 数据绑定机制

### Binding - 字段映射绑定
**用途**: 将数据源字段映射到组件属性
```json
{
  "binding": { "avatarUrl": "url" }
}
// 数据源: { "url": "http://example.com/avatar.jpg" }
// 绑定后: { "avatarUrl": "http://example.com/avatar.jpg" }
```

### Filter - 数据过滤提取
**用途**: 提取数据源中的特定字段或对象
```json
{
  "filter": { "profile": {} }
}
// 数据源: { "profile": { "name": "John", "age": 30 }, "other": "data" }
// 过滤后: { "name": "John", "age": 30 }
```

### Chain - 多层次数据叠加
**用途**: 复杂的数据转换逻辑
```json
{
  "chain": [
    { "|": { "users": [] } },      // 获取 users 数组
    { "[]": 1 },                    // 取第2个元素
    { "replacing": {} },            // 替换操作
    { "filter": { "profile": {} } }, // 过滤 profile
    { "avatarUrl": "url" }          // 绑定到 avatarUrl
  ]
}
```

---

## 🎯 事件处理系统

### 核心事件回调
- **`onItemClick`**: 项目点击事件
- **`onItemSelected`**: 选择状态变化
- **`onItemDeleted`**: 删除操作回调
- **`onItemAdded`**: 新增操作回调
- **`onItemChanged`**: 修改操作回调

### 事件处理示例
```javascript
const handleItemClick = (itemData) => {
  if (itemData.isSelected) {
    console.log('选择执行事件');
  }
};

<AutoLayout 
  layout={layout} 
  dataSource={items} 
  onItemClick={handleItemClick}
  onItemSelected={(item) => console.log('选中:', item)}
/>
```

---

## 📝 组件组合模式

### 单组件配置
```json
{
  "xname": "Avatar",
  "props": { "url": "http://example.com/avatar.jpg" },
  "cart": "Cart",
  "indicator": "ShadowIndicator"
}
```

### 多组件组合
```json
{
  "xname": "Flexbox",
  "props": { "direction": "column" },
  "children": [
    {
      "xname": "Avatar",
      "props": { "size": "90" },
      "binding": { "avatarUrl": "url" }
    },
    {
      "xname": "Text",
      "props": { "textAlign": "center" },
      "binding": { "title": "content" }
    }
  ]
}
```

### 列表组件配置
```json
{
  "presenter": {
    "xname": "Flexbox",
    "children": [
      { "xname": "Avatar", "binding": { "avatarUrl": "url" } },
      { "xname": "Text", "binding": { "title": "content" } }
    ]
  },
  "container": "SelectList",
  "cart": "Cart",
  "indicator": "ShadowIndicator",
  "selector": { "xname": "OutlineSelector", "props": { "selected": true } }
}
```

### 复杂嵌套组合
```json
{
  "xname": "Flexbox",
  "props": { "direction": "column" },
  "children": [
    {
      "presenter": {
        "xname": "Avatar",
        "props": { "size": "80" }
      },
      "container": "PlainList",
      "cart": "Cart",
      "binding": { "imageUrl": "url" }
    },
    {
      "xname": "Text",
      "props": { "textAlign": "center" }
    }
  ],
  "container": "Container"
}
```

---

## 🛠️ 开发规则

### 1. 组件命名规范
- 布局组件统一使用 `Flexbox`（避免使用 `Flex`）
- 选择器统一用 `OutlineSelector` 或 `CircularCheckboxSelector`
- 指示器示例优先用 `ShadowIndicator`、`LabelIndicator`
- 列表容器示例使用 `PlainList`、`SelectList`、`MultiSelectList`

### 2. 属性配置规范
- 选择器属性使用 `selected: true|false`，不使用 `state`
- Container 字段统一使用小写 `container`
- 所有组件都支持 `xname` 和 `props` 配置

### 3. 数据绑定规范
- 使用 `binding` 进行字段映射
- 使用 `filter` 进行数据过滤
- 使用 `chain` 进行复杂数据转换
- 支持自定义 Gateway 处理特殊逻辑

### 4. 事件处理规范
- 所有事件回调都通过 props 传递
- 使用 `onItemClick` 处理点击事件
- 使用 `onItemSelected` 处理选择状态变化
- CRUD 操作使用对应的回调函数

---

## 📦 包导入规范

### 发布包使用
```javascript
import { AutoLayout, NamedCart, NamedLayout, NamedSelector } from 'zero-element-boot';
```

### 源码开发使用
```javascript
import { AutoLayout } from '@/components';
import NamedCart from '@/components/NamedCart';
```

---

## 🔧 常用配置模板

### 基础头像列表
```json
{
  "presenter": {
    "xname": "Avatar",
    "props": { "size": "90" }
  },
  "container": "PlainList",
  "cart": "Cart",
  "binding": { "avatarUrl": "url" }
}
```

### 可选择列表项
```json
{
  "presenter": {
    "children": [
      { "xname": "Avatar", "binding": { "avatarUrl": "url" } },
      { "xname": "Text", "binding": { "title": "content" } }
    ],
    "xname": "Flexbox",
    "props": { "direction": "row" }
  },
  "container": "SelectList",
  "cart": "Cart",
  "indicator": "ShadowIndicator",
  "selector": { "xname": "OutlineSelector", "props": { "selected": true } }
}
```

### 管理列表（支持CRUD）
```json
{
  "presenter": {
    "children": [
      { "xname": "Text", "binding": { "content": "content" } }
    ]
  },
  "container": { "xname": "ManageList", "props": { "addnew": "" } },
  "cart": "Cart",
  "indicator": {
    "xname": "ManageMenuIndicator",
    "props": { "action": { "deleteAPI": "/api/items/(id)" } },
    "binding": { "id": "id" }
  },
  "navigation": {
    "model": {
      "api": {
        "createAPI": "/api/items",
        "getAPI": "/api/items/(id)",
        "updateAPI": "/api/items/(id)"
      },
      "fields": [
        { "label": "名称", "field": "name", "type": "input", "rules": { "isRequired": true } }
      ]
    }
  }
}
```

---

## 🎨 最佳实践

### 1. 组件设计原则
- 单一职责：每个组件只负责一个功能
- 可组合性：通过配置组合实现复杂功能
- 数据驱动：通过数据绑定实现动态内容

### 2. 性能优化
- 合理使用 `binding` 避免不必要的数据传递
- 使用 `filter` 减少数据量
- 避免过深的嵌套结构

### 3. 代码组织
- 将复杂配置提取为独立的 layout 文件
- 使用有意义的 `xname` 命名
- 合理使用 `tag` 进行调试跟踪

### 4. 调试技巧
- 使用 `tag` 属性跟踪数据流
- 通过 `mock` 数据测试组件
- 利用浏览器开发者工具查看组件结构

---

## 📚 学习路径

1. **基础概念**: 理解七大组件类型的作用
2. **简单组合**: 学习单组件和多组件配置
3. **数据绑定**: 掌握 binding、filter、chain 的使用
4. **事件处理**: 理解各种事件回调机制
5. **复杂组合**: 学习嵌套组件和列表组件
6. **自定义开发**: 创建自定义 presenter 和 gateway

---

*此规则文件基于 zero-element-boot 框架的深入分析，可作为快速参考和开发指南。*
