# zero-element-boot
Named Element Make Front-End Easy 


## mockjs
http://mockjs.com/examples.html


## Writing a loader
https://webpack.js.org/contribute/writing-a-loader/


## code sandbox
https://codesandbox.io/


## Material-ui
https://material-ui.com/zh/


## Markdown Docs
- https://ahooks.js.org/zh-CN/docs/api/
- [useRequest](https://ahooks.js.org/zh-CN/hooks/async/)


## vscode 在线编辑
https://stackblitz.com/edit/vscode-yz1ejl?file=index.html

## 在线代码
https://www.showmebug.com/


## 物理库
https://magnum.graphics/

## SSO Authing
> 界与流程参考
https://authing.co/

## Babylonjs WebGL
https://www.babylonjs.com/


## EditorX vs AutoX LayoutX
https://editorx.com

## Konvajs 基于canvas的图形编辑库
https://konvajs.org/

### 全局定义 layout 使用方法
  - 在项目 src/global.js 里使用 (如没有 global.js 文件可以直接在src目录下创建即可)
```
//set namedcart
import { set as NamedLayoutSet } from '@/config/NamedLayoutConfig';

import Flexbox from '@/components/layout/Flexbox';

NamedLayoutSet({
  Flexbox,
})

```


### 全局定义 car 和 persenter 使用方法
  - 在项目 src/global.js 里使用
```
//set namedcart
import { set as NamedCartSet } from '@/config/NamedCartConfig';

import Cart from './cart/Cart';

NamedCartSet({
  Cart,
})

//set persentor
import { set as NamedPresenterSet } from '@/config/NamedPresenterConfig';

import ImageAnimation from '@/pages/PresenterTestDemo/components/presenter/item/ItemAvator'

NamedPresenterSet({
  ImageAnimation,
})

```


