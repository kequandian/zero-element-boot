
# AutoLayout 使用指南（入门与进阶）

本文将两份文档整合为一份：在保留 React 入门与容器思想的基础内容上，系统讲解如何用 AutoLayout 的 DSL（对象/JSON 描述）来组合 `presenter`、`cart`、`layout`、`container`、`gateway`、`indicator`、`selector` 等，构建复杂界面与交互。并对术语与示例进行了统一，以匹配当前发布的组件库。

---

## React 基础与容器思想

#### 如何写一个 React 组件
```js
export default function App(){
  return <div>Hello React!</div>
}
```

#### 如何渲染一个 React 组件
> 生成 `public/index.html`
```xml
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

> 初始化 `package.json` 并安装依赖
```json
{
  "name": "hello",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

> 渲染组件
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// 另一种写法
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App/>)
```

#### 带参数的组件
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
// 或
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

#### `children` 与剩余参数 `...rest`
```js
function Welcome(props) {
  const { children, name, ...rest } = props;
  return <h1>Hello, {name}</h1>;
}
```

#### 容器组件与传参
```js
export default function Father(props){
  const { children, ...rest } = props;
  return children.map(child => (
    <div style={{ color:'red' }}>{child}</div>
  ));
}
```

```js
export default function NextIndicator(props) {
  const { children, ...rest } = props;
  return (
    <>
      {React.Children.map(children, child => React.cloneElement(child, { ...rest }))}
    </>
  );
}
```

#### 使用容器组件
```js
export default function ConsumeFather(){
  return (
    <Father>
      <HelloWorld />
    </Father>
  );
}
```

#### 容器即样式包裹
```js
export default function Index(){
  return (
    <div style={{ color:'red' }}>
      <HelloWorld />
    </div>
  );
}
```

#### 使用 Hook
```js
import React, { useState } from 'react';

export default function Index() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

---

## 标准组件模型（zero-element-boot）
`AutoLayout` 通过以下基础组件组合：
- `presenter` 基础展示组件
- `cart` 修饰容器组件
- `children` 多子组件列表（与单个 `presenter` 二选一）
- `layout` 布局组件（对多个子组件布局）
- `container` 顶层容器组件（管理逻辑）
- `gateway` 数据网关（转换数据并绑定到组件属性）

派生概念：
- `indicator` 悬浮、菜单等交互反馈（风格/状态叠加）
- `selector` 选择态的风格与状态控制（与 `indicator` 叠加使用）
- `binding`/`filter`/`chain` 数据绑定的不同形态

术语对齐：
- 布局统一为 `Flexbox`（避免使用 `Flex`）
- 选择器统一用 `OutlineSelector` 或 `CircularCheckboxSelector`，属性为 `selected: true|false`
- 指示器示例优先用 `ShadowIndicator`、`LabelIndicator`
- 列表容器示例使用 `PlainList`、`SelectList`、`MultiSelectList`

---

## NPM 使用（发布版）
- 安装后直接从包导出使用：
```js
import { AutoLayout, NamedCart, NamedLayout, NamedSelector } from 'zero-element-boot';
```
- 源码开发场景可用 `@` 别名导入；发布包使用上述方式，不需要 `@` 别名。

---

## 单组件部分

### 生成新组件（`xkey` 为 uuid）
```json
{
  "xkey": "c6fe946c-b786-11ef-9639-b3e576acf426"
}
```

### 通过 AutoLayout 展示一个组件 
```json
{ "xname": "Avatar" }
```

### 通过 AutoLayout 展示一个带参数的组件 
```json
{
  "xname": "Avatar",
  "props": { "url":"http://local.cdnline.io/master.jpg" }
}
```

### 为组件增加风格
```json
{
  "xname": "Avatar",
  "props": { "url":"http://local.cdnline.io/master.jpg" },
  "cart": "Cart"
}
```

### 增加指示器（示例用 LabelIndicator）
```json
{
  "xname": "Avatar",
  "props": { "url":"http://local.cdnline.io/master.jpg" },
  "indicator": {
    "xname": "LabelIndicator",
    "props": { "text": "头像" }
  }
}
```

### 通过 presenter 展示单个组件
```json
{ "presenter": "Avatar" }
```

> 带参数
```json
{
  "presenter": { "xname": "Avatar", "props": { "url":"http://local.cdnline.io/master.jpg" } }
}
```

> 带可配置风格（`CssCart`）
```json
{
  "presenter": { "xname": "Avatar", "props": { "url":"http://local.cdnline.io/master.jpg" } },
  "cart": { "xname": "CssCart", "props": { "padding":"10px", "border":"1px #ff000 solid", "backgroundColor":"red" } }
}
```

---

## 多组件部分

### `children` 列表组成的新组件
```json
{ "children": ["Butter", "Clean", "Clear", "Pink"] }
```

> 指定布局 `HStack`
```json
{ "xname": "HStack", "children": ["Butter", "Clean", "Clear", "Pink"] }
```

### 带参数的子组件列表
```json
{
  "children": [
    { "xname": "Avatar", "props": { "url": "http://local.webtools.io/pepsi.png" } },
    { "xname": "Avatar", "props": { "url": "http://local.cdnline.io/master.jpg" } }
  ]
}
```

### 统一的 `Cart`
```json
{ "children": ["Butter", "Clean", "Clear", "Pink"], "cart": "Cart" }
```

### 每个子组件使用不同的 `Cart`
```json
{
  "children": [
    { "xname": "Butter" },
    { "xname": "Clean", "cart": { "xname": "CssCart", "props": { "background": "blue" } } },
    { "xname": "Clear", "cart": { "xname": "CssCart", "props": { "background": "green" } } },
    { "xname": "Pink", "cart": { "xname": "CssCart", "props": { "background": "black" } } }
  ]
}
```

### 布局组件（含参数）
```json
{ "xname": "Flexbox", "props": { "direction":"row" }, "children": ["Butter", "Clean", "Clear", "Pink"] }
```

### 列表布局（绑定不同数据）
```json
{
  "xname": "Flexbox",
  "props": { "direction": "column" },
  "children": [
    { "xname": "Avatar", "props": { "size":"90" }, "binding": { "avatarUrl":"url" } },
    { "xname": "Clear", "binding": { "color":"color" } }
  ]
}
```

---

## 列表组件部分

### 基本列表（`PlainList`）
```json
{ "presenter": "ItemPlaceholder", "container": "PlainList" }
```

> 子组件带参数
```json
{ "presenter": { "xname": "ItemPlaceholder", "props": { "fill":"#FF0000" } }, "container": "PlainList" }
```

> 增加风格
```json
{
  "presenter": { "xname": "ItemPlaceholder", "props": { "fill":"#FF0000" } },
  "container": "PlainList",
  "cart": "Cart"
}
```

> 列表子组件布局
```json
{ "xname":"Wrap", "presenter": { "xname": "ItemPlaceholder", "props": { "fill":"#ff0000" } }, "cart": "Cart", "container": "PlainList" }
```

---

## 复合嵌套组件部分

### 列表 AutoLayout 作为子组件
```json
{
  "children": [
    {
      "presenter": { "xname": "Avatar", "props": { "size":"90" } },
      "container": "PlainList",
      "cart": "Cart",
      "xname":"Wrap",
      "binding": { "imageUrl": "url" }
    },
    { "xname": "Butter" }
  ],
  "xname": "Flexbox",
  "props": { "direction":"column" },
  "container": "Container"
}
```

> 更简单的例子
```json
{ "children": [ { "xname": "Avatar", "props": { "size":"90" } }, { "xname": "Butter" } ] }
```

> 复杂嵌套仍然只是一个组件（修正为 Flexbox）
```json
{
  "xname":"Wrap",
  "presenter": {
    "children": [
      {
        "presenter": { "xname": "Avatar", "props": { "size":"90" } },
        "container": "PlainList",
        "cart": "Cart",
        "xname":"Wrap",
        "binding": { "imageUrl": "url" }
      },
      { "xname": "Butter" }
    ],
    "xname": "Flexbox",
    "props": { "direction":"column" },
    "container": "Container"
  },
  "container": "PlainList",
  "cart": "Cart",
  "binding": { "imageUrl": "url" }
}
```

---

## 组件参数化与数据绑定

### 为 AutoLayout 设置参数
```json
{
  "xname": "Avatar",
  "cart": { "xname": "CssCart", "props": { "margin":"10px", "padding":"10px", "border":"1px #ff000 solid" } },
  "binding": { "avatarUrl": "url" }
}
```

> 或
```json
{
  "presenter": { "xname": "Avatar" },
  "cart": { "xname": "CssCart", "props": { "margin":"10px", "padding":"10px", "border":"1px #ff000 solid" } },
  "binding": { "avatarUrl": "url" }
}
```

### 数据源字段绑定子组件属性
```json
{ "xname": "Avatar", "binding": { "avatarUrl": "url" } }
```

### 设定 AutoLayout 新组件属性
```json
{
  "xname":"Wrap",
  "presenter": { "xname": "Avatar", "props": { "size": "80" } },
  "cart": "Cart",
  "container": "PlainList",
  "binding": { "imageUrl": "url" }
}
```

### 数据源绑定 AutoLayout 属性
```json
{
  "presenter": {
    "xname":"Wrap",
    "presenter": { "xname": "Avatar", "props": { "size": "80" } },
    "cart": "Cart",
    "container": "PlainList",
    "binding": { "imageUrl": "url" }
  },
  "binding": { "avatarUrl": "imageUrl" }
}
```

### 为 AutoLayout 提供模拟数据
```json
{
  "presenter": {
    "xname":"Wrap",
    "presenter": { "xname": "Avatar", "props": { "size": "80" } },
    "cart": "Cart",
    "container": "PlainList",
    "binding": { "imageUrl": "url" }
  },
  "binding": { "avatarUrl": "imageUrl" },
  "mock": { "avatarUrl": "http://" }
}
```

### 外层数据源
```json
{
  "layout": {
    "presenter": {
      "xname":"Wrap",
      "presenter": { "xname": "Avatar", "props": { "size": "80" } },
      "cart": "Cart",
      "container": "PlainList",
      "binding": { "imageUrl": "url" }
    },
    "binding": { "avatarUrl": "imageUrl" }
  },
  "binding": { "userImg": "avatarUrl" },
  "dataSource": { "userImg": "http://", "userName": "Bob" }
}
```

### 多个子组件数据绑定
```json
{
  "children": [
    { "xname": "Avatar", "props": { "size":"90" }, "binding": { "avatarUrl": "url" } },
    {
      "presenter": { "xname": "Text", "props": { "w":"100%", "textAlign":"center", "marginTop":"10px" } },
      "binding": { "title": "content" }
    }
  ]
}
```

### filter（只传递部分字段）
> 数据源
```json
{ "avatarUrl":"https://", "name": "Bob" }
```
> 组件配置
```json
{ "xname": "Avatar", "filter": { "avatarUrl": "url" } }
```

### chain（多层次数据绑定）
```json
{
  "xname": "Avatar",
  "chain": [
    { "|": { "users": [] } },
    { "[]": 1 },
    { "replacing": {} },
    { "filter": { "profile": {} } },
    { "avatarUrl": "url" }
  ]
}
```
> 最终绑定到组件的数据
```json
{ "url": "https://avatars/jose.png", "age": 21 }
```

### 自定义 Gateway
```js
NamedGatewaySet({
  ChartConvertData
})
```
```json
{ "presenter": "Avatar", "gateway": { "xname": "ChartConvertData", "props": { "chart":"pie" } } }
```

---

## 组件事件响应与选择

### 通过代码响应事件（`SelectList`）
```json
{ "presenter": "Avatar", "container": "SelectList" }
```
```js
export default function UserSelect(props){
  const { items, ...rest } = props;
  const onHandleItemClick = (itemData) => {
    if (itemData.isSelected) {
      console.log('选择执行事件');
    }
  };
  return (
    <Box spacing='3px'>
      <AutoLayout layout={layout} dataSource={items} {...rest} onItemClick={onHandleItemClick} />
    </Box>
  );
}
```

### 响应鼠标移动事件（`ShadowIndicator`）
```json
{ "presenter": "Avatar", "container": "PlainList", "indicator": "ShadowIndicator" }
```

### 响应选择事件（统一用 `selected`）
```json
{
  "presenter": "Avatar",
  "container": "SelectList",
  "indicator": "ShadowIndicator",
  "selector": { "xname": "OutlineSelector", "props": { "selected": true } },
  "unselector": { "xname": "OutlineSelector", "props": { "selected": false } }
}
```

### 单选或多选列表
- `indicator` 可响应 hover/菜单等，也可作为纯风格叠加
- 用 `selector`/`unselector` 配置选中与未选中时的样式（统一用 `selected` 布尔值）
- 单选容器使用 `SelectList`，复选容器使用 `MultiSelectList`

```json
{
  "xname": "Flexbox",
  "presenter": {
    "children": [
      { "xname": "Avatar", "binding": { "avatarUrl": "url", "size": "size" } },
      { "xname": "Text", "props": { "w": "100%", "textAlign": "center", "marginTop": "10px" }, "binding": { "title": "content" } }
    ]
  },
  "cart": { "xname": "Cart", "props": { "linewidth": "0", "padding":"0" } },
  "container": "SelectList",
  "indicator": "ShadowIndicator",
  "selector": { "xname": "CircularCheckboxSelector", "props": { "selected": true } },
  "unselector": { "xname": "CircularCheckboxSelector", "props": { "selected": false } }
}
```

---

## 管理组件（增删改查）
- `ManageList` 对列表进行管理；执行完事件后如需刷新，由外部回调触发刷新
```json
{
  "presenter": {
    "children": [
      {
        "xname": "Text",
        "binding": { "content": "content" },
        "props": { "textAlign": "center", "marginTop": "10px", "fontWeight":"bold" }
      }
    ]
  },
  "container": { "xname": "ManageList", "props": { "addnew": "" } },
  "cart":"Cart",
  "indicator": {
    "xname": "ManageMenuIndicator",
    "props": { "action": { "deleteAPI": "/api/u/rss/master/(id)" } },
    "binding": { "id": "id", "path": "url", "name": "content" }
  },
  "navigation": {
    "model": {
      "api": {
        "createAPI": "/api/u/rss/master",
        "getAPI": "/api/u/rss/master/(id)",
        "updateAPI": "/api/u/rss/master/(id)"
      },
      "fields": [
        { "label": "名称", "field": "name", "type":"input", "defaultValue": "", "rules": { "isRequired": true }, "props": { "placeholder": "rss名称" } },
        { "label": "描述", "field": "note", "type":"input", "defaultValue": "", "rules": { "isRequired": true }, "props": { "placeholder": "描述" } }
      ]
    }
  }
}
```

---

## 术语与示例修订说明
- `Flex` 全部修正为 `Flexbox`
- `OutlineIndicator` 改为 `OutlineSelector` 或使用 `LabelIndicator` 等已存在的指示器
- `ItemCart`、`HoverShadowCart` 改为现有 `Cart`、`CssCart`、`ShadowCart` 等
- `SelectedCartUpperRightIcon` 改为 `OutlineSelector` 或 `CircularCheckboxSelector`
- `Container` 字段统一使用小写 `container`
- 选择器属性使用 `selected: true|false`，不使用 `state`

---

## 包导入与路径提示
- 发布包使用：`import { AutoLayout, NamedCart, NamedLayout, NamedSelector } from 'zero-element-boot'`
- 源码工程可用 `@` 别名导入；发布包不需要 `@` 别名。
