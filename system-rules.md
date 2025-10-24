# 框架开发规则

## 组件开发规则

新组件的实现严格使用框架定义的组件，不涉及原生html/css, 如果现有的注册组件未能满足新的组件需求，可实现新的框架定义的7大类型组件之一，以达到满足新组件需求的目的。

## 测试代码规则

测试代码也不能使用原生html/css，必须选用框架里面的组件：

- **cart 风格组件**：使用 `Cart`、`ShadowCart` 等 cart 组件进行样式装饰
- **presenter 组件**：使用 `ChakraText`、`ChakraButton`、`DefaultPlaceholder` 等 presenter 组件
- **layout 组件**：使用 `Flexbox`、`Gridbox` 等 layout 组件进行布局
- **container 组件**：使用 `TitledContainer`、`PlainList` 等 container 组件
- **indicator 组件**：使用 `ClickIndicator`、`NavigationIndicator` 等 indicator 组件
- **selector 组件**：使用 `CircularCheckboxSelector`、`OutlineSelector` 等 selector 组件
- **gateway 组件**：使用 `doFilter`、`doBind` 等 gateway 工具

## 测试目标

通过不断测试，不断优化本身组件库的目标，确保：
1. 框架组件的完整性和可用性
2. 组件间的兼容性和组合性
3. 开发体验的一致性和规范性
4. 代码质量和维护性