# zero-element-boot 组件包发布指南

发布目标：仅发布 `components` 产物到 npm（不包含 pages/tests/composition 等开发代码）。

## 包结构与构建
- 入口：`lib/components/index.js`
- 发布白名单：`package.json` 的 `files` 仅包含：
  - `lib/components`
  - `lib/assets`
  - `README.md`
- 构建脚本：`npm run build`
  - 通过 `gulpfile.js` 仅编译 `src/components` 到 `lib/components`，并复制组件相关静态资源。

## 准备工作
- 确认 `package.json`：
  - `main` 为 `lib/components/index.js`
  - `files` 白名单如上
  - 版本号（`version`）按照语义化版本号更新
- 确认 Node/NPM：建议 Node 14+，npm 8+
- 登录 npm：
  - `npm login` 或 `npm adduser`
  - 如使用组织作用域（`@scope/package`），首发需加 `--access public`

## 发布步骤（标准流程）
1) 构建并生成产物
```
npm run build
```
- 生成 `lib/components` 与 `lib/assets`，入口 `lib/components/index.js`

2) 预览包内容（可选但推荐）
```
npm pack
```
- 将输出 `zero-element-boot-<version>.tgz`
- 可解压确认仅包含白名单文件（`lib/components`, `lib/assets`, `README.md`, `package.json`）

3) 发布到 npm
```
# 普通包
npm publish

# 如果是 scoped 包（例如 @your-scope/zero-element-boot）
npm publish --access public
```

4) 发布后验证
```
# 查看版本
npm view zero-element-boot version
npm view zero-element-boot versions

# 在其他项目中安装并验证入口
npm i zero-element-boot@<version>
```
- 代码引用示例：
```
import { NamedLayout, NamedCart, AutoLayout } from 'zero-element-boot';
```

## 版本管理建议
- 遵循语义化版本：`major.minor.patch`
  - 修复、调整内部实现且不影响 API：`patch`
  - 新增向后兼容功能：`minor`
  - 破坏性变更：`major`
- 快速更新版本：
```
# 自动 bump 并创建 git tag（如使用 git）
npm version patch
npm version minor
npm version major
```

## 常见问题与排查
- ENEEDAUTH（需要登录）
  - 运行 `npm login` 并确认使用正确 registry（默认 `https://registry.npmjs.org/`）

- 依赖冲突（ERESOLVE）或构建报错（如 Babel）
  - 安装缺失的构建依赖（例如）：
```
npm i -D @babel/core --legacy-peer-deps
```
  - 如 Babel 配置未生效，可检查 `.babelrc` 或在 `gulpfile.js` 内联配置（已处理）

- 首次发布 scoped 包 403
  - 使用 `npm publish --access public`

- 2FA（两步验证）开启
  - 发布时需在 CLI 中输入一次性验证码

## 本仓库的关键改动（已完成）
- `gulpfile.js`：仅编译/复制 `src/components`，并内嵌 Babel 配置（`@babel/preset-react` 与 `module-resolver` `@` -> `./src/`），产物输出到 `lib/components`。
- `package.json`：
  - `main`: `lib/components/index.js`
  - `files`: `lib/components`, `lib/assets`, `README.md`
  - `version`: 示例更新为 `1.0.13`

## 复核清单（发布前快速检查）
- `lib/components/index.js` 存在且可用，内部 import 使用相对路径（不依赖 `@` 别名）
- `lib/components` 内包含所需子模块（`layout`, `list`, `cart`, `gateway`, `presenter`, `selector`, `utils` 等）
- `lib/assets` 存在（若组件需要静态资源）
- `package.json` 的 `files` 白名单没有其它目录（避免误发布开发代码）
- `npm pack` 的包内容符合预期

## 回滚与撤销
- 谨慎使用 `npm unpublish`，24 小时后可能无法撤销；生产包建议通过发布新版本修正问题。
- 如需废弃版本，可使用 `npm dist-tag` 或在 README 标注不推荐版本。

## 示例命令串
```
# 登录
npm login

# 更新版本
npm version patch

# 构建
npm run build

# 预览包内容
npm pack

# 发布
npm publish

# 验证
npm view zero-element-boot version
```