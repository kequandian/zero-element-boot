# Layout Description 规范 (LayoutDescriptionSpec)

本规范定义会议布局系统的**布局描述格式**，是数据驱动布局的权威参考。包含两种等价格式：

- **标准格式（Standard）**：基于 `row / col / span` 的坐标式描述
- **Grid Template 格式**：基于二维字符串数组的扁平化、多层级、用户/AI 友好描述

两种格式最终都解析为统一的 `LayoutDescription` 内存模型。

---

## 目录

- [1. 顶层结构](#1-顶层结构)
- [2. 标准格式（Standard）](#2-标准格式standard)
  - [2.1 LayoutParams](#21-layoutparams)
  - [2.2 CellParams](#22-cellparams)
  - [2.3 权重规则](#23-权重规则)
  - [2.4 最小尺寸约束](#24-最小尺寸约束)
- [3. Grid Template 格式](#3-grid-template-格式)
  - [3.1 设计目标](#31-设计目标)
  - [3.2 顶层字段](#32-顶层字段)
  - [3.3 GridRegion 定义](#33-gridregion-定义)
  - [3.4 cells 网格模板规则](#34-cells-网格模板规则)
  - [3.5 weights 权重规则](#35-weights-权重规则)
  - [3.6 gap 与 padding](#36-gap-与-padding)
  - [3.7 grid 嵌套规则](#37-grid-嵌套规则)
- [4. 样式系统](#4-样式系统)
- [5. 格式检测](#5-格式检测)
- [6. SourceType 数据来源](#6-sourcetype-数据来源)
- [7. 格式对比](#7-格式对比)
- [8. 完整示例](#8-完整示例)
- [附录 A：字段速查表](#附录-a字段速查表)

---

## 1. 顶层结构

`LayoutDescription` 是布局的完整描述单元，对应一个 JSON 对象。

```json
{
  "layoutId": "meeting_4",
  "name": "四宫格会议布局",
  "version": 1,
  "timestamp": 1718000000000,
  "source": "ASSETS",
  "params": { },
  "defaultStyle": { },
  "cellStyles": { }
}
```

| 字段 | 类型 | 必填 | 默认值 | 说明 |
|------|------|:----:|--------|------|
| `layoutId` | string | 是 | — | 布局唯一标识 |
| `name` | string | 是 | — | 人类可读的布局名称 |
| `version` | long | 否 | `1` | 版本号 |
| `timestamp` | long | 否 | 创建时间戳 | 创建/更新时间（毫秒） |
| `source` | SourceType | 否 | `ASSETS` | 数据来源（见[第 6 节](#6-sourcetype-数据来源)） |
| `params` | LayoutParams | 是 | — | 核心布局参数（标准格式） |
| `defaultStyle` | StyleObject | 否 | `null` | 全局默认单元格样式 |
| `cellStyles` | Map\<string, StyleObject\> | 否 | `{}` | 按 cellId 覆盖的单元格样式 |

> **注**：`params` 字段在标准格式中使用。Grid Template 格式使用 `layout`（包含 `cells` 和 `grid`）字段替代（见[第 3 节](#3-grid-template-格式)），但转换后同样归一化为 `LayoutDescription`。

---

## 2. 标准格式（Standard）

标准格式通过显式坐标（`row`/`col`）和跨度（`rowSpan`/`colSpan`）描述单元格位置，适合程序生成与精确控制。

### 2.1 LayoutParams

`params` 对象定义布局的整体参数。

| 字段 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `bounds` | Rect | `(0,0,0,0)` | 布局边界矩形 `{left, top, right, bottom}` |
| `spacing` | int | `0` | 单元格间距（px） |
| `margin` | int | `0` | 布局外边距（px） |
| `cells` | CellParams[] | `[]` | 单元格配置列表 |
| `rowWeights` | int[] | `null` | 行权重数组，`null` 表示等权重 |
| `colWeights` | int[] | `null` | 列权重数组，`null` 表示等权重 |
| `rowMinHeights` | int[] | `null` | 各行最小高度约束（px），`null` 表示无约束 |
| `rowMinWidths` | int[] | `null` | 各行最小宽度约束（px），`null` 表示无约束 |
| `colMinWidths` | int[] | `null` | 各列最小宽度约束（px），`null` 表示无约束 |

**JSON 示例：**

```json
{
  "bounds": { "left": 0, "top": 0, "right": 1920, "bottom": 1080 },
  "spacing": 8,
  "margin": 16,
  "rowWeights": [1, 1, 85],
  "colWeights": [1],
  "rowMinHeights": [200, 150, 40],
  "colMinWidths": [600],
  "cells": [
    { "cellId": "header",   "row": 0, "col": 0 },
    { "cellId": "status",   "row": 1, "col": 0 },
    { "cellId": "progress", "row": 2, "col": 0 }
  ]
}
```

### 2.2 CellParams

| 字段 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `cellId` | string | 必填 | 单元格唯一标识 |
| `row` | int | 必填 | 行索引（0-based） |
| `col` | int | 必填 | 列索引（0-based） |
| `rowSpan` | int | `1` | 跨行数 |
| `colSpan` | int | `1` | 跨列数 |

```json
{ "cellId": "main", "row": 0, "col": 0, "rowSpan": 2, "colSpan": 2 }
```

### 2.3 权重规则

`rowWeights` / `colWeights` 中每个值的语义：

| 值范围 | 类型 | 含义 |
|--------|------|------|
| `weight >= 20` | 固定大小 | 直接作为像素值（如 `100` = 100px） |
| `weight < 0` | 固定大小 | 取绝对值作为像素值（如 `-10` = 10px，常用于分隔条） |
| `0 < weight < 20` | 比例分配 | 按权重比例瓜分剩余可用空间 |
| `weight == 0` | 非法 | 被拒绝 |

**计算步骤：**

1. **分离固定与比例**：固定项（`>=20` 或 `<0`）直接取像素值；比例项（`0<w<20`）参与剩余空间分配。
2. **分配剩余空间**：`proportional_size = available_space * weight / total_proportional_weight`
3. **应用最小约束**（若提供）：`size = max(size, min_constraint)`
4. **溢出/盈余调整**：
   - 比例总和 > 可用空间 → 等比缩减至填满
   - 比例总和 < 可用空间 → 盈余按权重分给未触底的比例项

**计算示例：**

```
rowWeights: [1, 1, 85]   屏幕高 1312px, margin 16px, spacing 8px
可用高度 = 1312 - 2*16 - 2*8 = 1264px
固定项  = 85px (progress)
剩余    = 1264 - 85 = 1179px
比例和  = 1 + 1 = 2
单位    = 1179 / 2 = 589.5px

结果: header = 589px, status = 589px, progress = 85px
```

### 2.4 最小尺寸约束

`rowMinHeights` / `colMinWidths` / `rowMinWidths` 实现「比例分配 + 最小值兜底」策略：

- **空间充足**：比例分配正常工作，最小值不生效。
- **空间不足**：单元格高度/宽度不低于设定的最小值。
- **极端情况**：若最小值总和超过可用空间，所有约束值等比缩减至恰好填满。

> **索引对应**：min 数组的索引对应**比例行/列**的顺序，**不包含**固定行/列。

以行高为例（列宽同理）：

1. 固定行（`weight >= 20`）直接取 weight 值，不受 min 约束。
2. 比例行按权重分配空间，得到理论高度。
3. 对每个比例行：`actualHeight = max(理论高度, rowMinHeight)`。
4. 若实际总高度超过可用空间，等比缩减至填满。
5. 若存在盈余，分配给未被 min 截断的行。

---

## 3. Grid Template 格式

### 3.1 设计目标

Grid Template 是一种**用户/AI 友好的扁平化多层级布局描述格式**：

- **用户友好**：用二维字符串数组直观"画"出布局形状，无需心算坐标。
- **扁平化**：所有子网格（splits）扁平排列在同一 JSON 层级，通过名字链引用。
- **多层级**：splits 可引用其他 splits，支持无限嵌套深度，但 JSON 始终保持扁平结构。

### 3.2 顶层字段

| 字段 | 类型 | 必填 | 说明 |
|------|------|:----:|------|
| `id` | string | 是 | 布局唯一标识 |
| `name` | string | 否 | 布局名称 |
| `version` | int | 否 | 版本号，默认 `1` |
| `layout` | GridRegion | 是 | 根网格定义（包含 `cells` 和 `grid`） |
| `defaultStyle` | StyleObject | 否 | 默认单元格样式 |
| `cellStyles` | Map\<string, StyleObject\> | 否 | 指定单元格样式 |

### 3.3 GridRegion 定义

`GridRegion` 是网格的最小描述单元，可出现在 `layout`（根）或 `grid`（子网格）中。

| 字段 | 类型 | 必填 | 默认值 | 说明 |
|------|------|:----:|--------|------|
| `cells` | string\[\]\[\] | 是 | — | 二维网格模板，同名相邻自动合并为 span |
| `grid` | Map\<string, GridRegion\> | 否 | `{}` | 子网格定义，key 对应 `cells` 中的名字 |
| `weights` | int\[\]\[\] \| int\[\] | 否 | 等分 | 权重，详见 [3.5](#35-weights-权重规则) |
| `gap` | int \| int\[2\] | 否 | `0` | 单元格间距（px） |
| `padding` | int \| int\[2\] | 否 | `0` | 容器外边距（px） |

### 3.4 cells 网格模板规则

- 二维字符串数组，**每行长度必须一致**。
- **同名相邻**单元格（共享边、构成矩形）自动合并为一个 cell，等效于 `rowSpan`/`colSpan`。
- 非矩形同名区域视为**配置错误**。

**合并示例：**

```
["main", "main", "sub_0"],     → main:   row=0, col=0, rowSpan=2, colSpan=2
["main", "main", "sub_1"],     → sub_0:  row=0, col=2
["t0",   "t1",   "t2"]         → sub_1:  row=1, col=2
                                → t0/t1/t2: row=2, col=0/1/2
```

可视化效果：

```
┌─────────────┬──────┐
│             │ sub_0│
│     main    ├──────┤
│             │ sub_1│
├──────┬──────┴──────┤
│  t0  │  t1   │ t2  │
└──────┴───────┴─────┘
```

### 3.5 weights 权重规则

| 写法 | 含义 |
|------|------|
| 不写 | 全部等分（weight=1） |
| `[3, 1]` | 单数组，沿容器**长边**方向划分；另一方向等分 |
| `[[2, 1], [3, 1]]` | 二维数组，`[行权重, 列权重]` |

**权重值规则**（与标准格式 [2.3](#23-权重规则) 一致）：

| 值范围 | 含义 |
|--------|------|
| `0 < w < 20` | 按比例分配可用空间 |
| `w >= 20` | 固定像素值（如 `48` = 48px） |
| `w < 0` | 固定像素值，取绝对值 |

**长边规则**（仅对单数组 `weights` 生效）：运行时根据容器实际宽高比决定方向。

| 容器方向 | 单数组 `[3, 1]` 的含义 |
|---------|------------------------|
| 横屏（width >= height） | 列权重：左 75%，右 25% |
| 竖屏（width < height） | 行权重：上 75%，下 25% |

### 3.6 gap 与 padding

两种简写形式：

| 写法 | 含义 |
|------|------|
| `8` | 统一值 |
| `[10, 6]` | 二元组 |

具体语义：

| 字段 | 标量 | 二元组 |
|------|------|--------|
| `gap` | 统一间距 | `[行间距, 列间距]` |
| `padding` | 统一边距 | `[上下, 左右]` |

示例：`gap: [4, 0]` → 仅行间距 4px，列间距 0。

### 3.7 grid 嵌套规则

**核心设计：扁平结构 + 无限深度。**

判定规则：
- `cells` 中的名字出现在 `grid` 的 key 中 → 该区域为**子网格容器**（非叶子）。
- `cells` 中的名字**不在** `grid` 中 → **叶子单元格**（接收内容）。
- `grid` 可引用其他 `grid`，支持无限层级。
- **所有 grid 扁平排列在同一 JSON 层级**，通过名字链引用。

**嵌套示例：**

```json
{
  "layout": {
    "cells": [["zone_a"]],
    "grid": {
      "zone_a": {
        "cells": [["zone_b", "info"]],
        "grid": {
          "zone_b": { "cells": [["x", "y"], ["z", "w"]] }
        }
      }
    }
  }
}
```

**解析链：**

```
layout → zone_a (是 grid) → zone_b (是 grid) → 叶子 x, y, z, w
                                       ↘ 叶子 info
```

```
层级 0:  zone_a
            │
层级 1:  ┌──┴───┐
        zone_b  info (叶子)
            │
层级 2:  ┌─┬─┬─┬─┐
        x y z w (叶子)
```

> **关键**：无 JSON 嵌套，无限深度。无论逻辑层级多深，JSON 中 `grid` 始终是扁平的 Map，且嵌套在父 GridRegion 中。

---

## 4. 样式系统

样式分两层：`defaultStyle` 为全局默认，`cellStyles` 按 `cellId` 覆盖。

### StyleObject 字段

| 字段 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `backgroundColor` | int \| string | `null` | 背景色（ARGB int 或 `#RRGGBB`/`#AARRGGBB`） |
| `cornerRadius` | float | `null` | 圆角半径（dp） |
| `showFullscreenButton` | boolean | `null` | 是否显示全屏按钮 |
| `showSelectionBorder` | boolean | `null` | 是否显示选中边框 |

```json
{
  "defaultStyle": {
    "backgroundColor": "#FF333333",
    "cornerRadius": 16,
    "showFullscreenButton": true,
    "showSelectionBorder": true
  },
  "cellStyles": {
    "sidebar": { "backgroundColor": "#1A1A2E", "cornerRadius": 8 },
    "toolbar": { "cornerRadius": 0 }
  }
}
```

---

## 5. 格式检测

JSON 文件按以下规则自动识别格式，**向后兼容**：

| 条件 | 识别为 |
|------|--------|
| 含 `layout` 对象，且 `layout.cells` 为二维**字符串**数组 | Grid Template 格式 |
| 含 `bounds` + `cells`（对象数组）/ `params` | 标准格式 |

检测到 Grid Template 后，系统通过 `GridTemplateConverter` 将其转换为 `LayoutDescription`（标准内存模型），后续渲染管线统一。

---

## 6. SourceType 数据来源

`source` 字段标识布局数据的来源：

| 枚举值 | 说明 |
|--------|------|
| `ASSETS` | 从应用 assets 目录加载（默认） |
| `SQLITE` | 从本地 SQLite 数据库加载 |
| `REMOTE_API` | 从远程 API 服务器加载 |
| `REALTIME_PUSH` | 通过实时推送下发 |
| `MEMORY_CACHE` | 从内存缓存读取 |

---

## 7. 格式对比

| 维度 | 标准格式 | Grid Template |
|------|---------|---------------|
| 视觉可读性 | 需心算 row/col/span | 直接看到布局形状 |
| AI 生成难度 | 需计算坐标和跨度 | 填二维数组即可 |
| 嵌套支持 | 单层平面（需嵌套 layout 字段） | 通过 grid 无限层级 |
| 合并表达 | `rowSpan`/`colSpan` 数字 | 同名相邻自动合并 |
| 权重方向 | 显式区分 row/col | 单数组支持长边自动定向 |
| 适用场景 | 程序生成、精确控制 | 人工编写、AI 生成、复杂嵌套 |
| 格式检测 | 有 `bounds` + `cells`(对象数组) | 有 `layout.cells`(字符串二维数组) |

---

## 8. 完整示例

### 8.1 标准格式：带最小约束的三行布局

```json
{
  "layoutId": "status_panel",
  "name": "状态面板",
  "version": 2,
  "source": "ASSETS",
  "params": {
    "bounds": { "left": 0, "top": 0, "right": 2400, "bottom": 1312 },
    "spacing": 8,
    "margin": 16,
    "rowWeights": [1, 1, 85],
    "colWeights": [1],
    "rowMinHeights": [200, 150, 40],
    "colMinWidths": [600],
    "cells": [
      { "cellId": "header",   "row": 0, "col": 0 },
      { "cellId": "status",   "row": 1, "col": 0 },
      { "cellId": "progress", "row": 2, "col": 0 }
    ]
  },
  "defaultStyle": {
    "backgroundColor": "#00000000",
    "cornerRadius": 8
  }
}
```

### 8.2 Grid Template：最简等分四格

```json
{
  "id": "quad",
  "layout": {
    "cells": [["a", "b"], ["c", "d"]]
  }
}
```

### 8.3 Grid Template：带间距 + 比例的六宫格

```json
{
  "id": "grid_6",
  "layout": {
    "cells": [["c0", "c1", "c2"], ["c3", "c4", "c5"]],
    "weights": [[1, 2], [1, 1, 1]],
    "gap": 8
  }
}
```

### 8.4 Grid Template：1 主 + N 缩略图（长边规则）

```json
{
  "id": "pip",
  "layout": {
    "cells": [["main", "thumb"]],
    "weights": [3, 1],
    "gap": 8
  }
}
```

横屏容器 → 列权重，`main` 占 75%，`thumb` 占 25%。

### 8.5 Grid Template：固定工具栏 + 弹性内容

```json
{
  "id": "with_toolbar",
  "layout": {
    "cells": [["content"], ["toolbar"]],
    "weights": [[1, 48]],
    "gap": [4, 0]
  }
}
```

`48 >= 20` → 固定 48px；`1` → 弹性。`gap: [4, 0]` → 仅行间距 4px。

### 8.6 Grid Template：复杂嵌套（扁平 grid）

```json
{
  "id": "meeting_complex",
  "name": "会议复杂布局",
  "version": 1,
  "layout": {
    "cells": [
      ["content", "content", "sidebar"],
      ["content", "content", "sidebar"],
      ["toolbar", "toolbar", "toolbar"]
    ],
    "weights": [[2, 2, 1], [1, 1, 1]],
    "gap": 8,
    "padding": 16,
    "grid": {
      "content": {
        "cells": [["speaker", "slides"], ["chat", "slides"]],
        "weights": [[3, 1], [1, 3]],
        "gap": 6
      },
      "toolbar": {
        "cells": [["mic", "cam", "share", "quit"]],
        "weights": [1, 1, 1, 1],
        "gap": 4
      }
    }
  },
  "defaultStyle": {
    "backgroundColor": "#333333",
    "cornerRadius": 16,
    "showFullscreenButton": true,
    "showSelectionBorder": true
  },
  "cellStyles": {
    "sidebar": { "backgroundColor": "#1A1A2E" }
  }
}
```

解析链：
```
layout (3×3)
  ├─ content (grid → 2×2 子网格)
  │    ├─ speaker  (叶子)
  │    ├─ chat     (叶子)
  │    └─ slides   (叶子, colSpan=2)
  ├─ sidebar (叶子, rowSpan=2)
  └─ toolbar (grid → 1×4 子网格)
       ├─ mic / cam / share / quit (叶子)
```

---

## 附录 A：字段速查表

### 权重值速查

| 值 | 类型 | 用途 |
|:--:|------|------|
| `1~19` | 比例 | 按比例分配剩余空间 |
| `≥ 20` | 固定 | 直接作为像素值 |
| `< 0` | 固定 | 绝对值作为像素值（分隔条） |
| `0` | 非法 | 被拒绝 |

### Grid Template 简写速查

| 字段 | 标量 `8` | 二元组 `[a, b]` |
|------|----------|-----------------|
| `gap` | 统一间距 8px | 行间距 a, 列间距 b |
| `padding` | 统一边距 8px | 上下 a, 左右 b |
| `weights` | — | 单数组=长边方向；二维=`[行, 列]` |

### 单元格判定（Grid Template）

| `cells` 中的名字 | 在 `grid` 中？ | 类型 |
|------------------|:----------------:|------|
| 出现 | 是 | 子网格容器（非叶子） |
| 出现 | 否 | 叶子单元格（接收内容） |

---

*本规范基于 `LayoutDescription.java`、`LayoutParams.java`、`CellParams.java`、`CellStyle.java`、`GridTemplateLayout.java`、`GridTemplateRegion.java` 及 Rust 核心引擎 `core-layout/src/weight/mod.rs` 的实现定义。*
