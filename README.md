# zero-element-boot
Named Element Make Front-End Easy

zero-element-boot 是一个以 AutoLayout 为核心的前端组件框架，通过简单的对象/JSON 描述（DSL）组合 `presenter`、`cart`、`layout`、`container`、`gateway`、`indicator`、`selector` 等，实现界面搭建、数据绑定与交互逻辑的解耦，降低前端开发复杂度。

## 特性
- AutoLayout DSL：以 JSON 定义组件树与布局、风格和数据绑定。
- 组件模型完整：`presenter`/`cart`/`layout`/`container`/`gateway`/`indicator`/`selector`。
- 数据绑定丰富：`binding`、`filter`、`chain`、自定义 `Gateway`。
- 列表与选择：`PlainList`、`SelectList`、`MultiSelectList`、`ManageList`。
- 交互态叠加：`ShadowIndicator` 等指示器与 `OutlineSelector`、`CircularCheckboxSelector` 等选择器。

## 技术框架
- React + Umi.3
- Chakra UI（样式与交互基础）

## 安装与开发
- 环境要求：Node.js >= 14
- 安装依赖：`npm install` 或 `yarn`
- 启动开发：`npm run start`（Umi Dev）
- 构建库包：`npm run build`（输出到 `lib/`）
- 生成预览站点：`npm run dist` 或 `npm run navui`

## 快速上手
- 作为库使用（已发布包示例）：
```js
import { AutoLayout, NamedCart, NamedLayout, NamedSelector } from 'zero-element-boot';
```
- 单组件展示：
```json
{ "xname": "Avatar", "cart": "Cart" }
```
- 列表展示：
```json
{ "presenter": "ItemPlaceholder", "container": "PlainList" }
```
- 单选示例（选择态）：
```json
{
  "presenter": "Avatar",
  "container": "SelectList",
  "selector": { "xname": "OutlineSelector", "props": { "selected": true } },
  "unselector": { "xname": "OutlineSelector", "props": { "selected": false } }
}
```

更多示例与详细解释参见：[AutoLayout 使用指南](get_started/如何通过AutoLayout展示一个组件.md)。

## 目录概览
- `src/components/`：核心组件与子系统（`Named*`、`AutoLayout`、`selector`、`cart`、`layout` 等）
- `get_started/`：入门与进阶文档、示例工程
- `lib/`：构建产物（发布包内容）

## 开源协议
本项目采用 MIT License。可在 `package.json` 中设置 并添加 `LICENSE` 文件以明确授权。

## 参与贡献
- 提交 PR 前请遵循现有代码风格与命名规范（`Flexbox`、`selected` 等统一术语）。
- Bug 报告与功能建议欢迎通过 Issue 提交。
