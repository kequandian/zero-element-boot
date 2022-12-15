#### 如何写一个`React`组件

```js
export default function App(){
    return <div> Hello React! </div>
}
```

#### 如何渲染一个`React`组件
> 首先生成 `public/index.html` 文件

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

> 初始化 `package.json` 包文件, 并安装依赖

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

> 渲染一个组件
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// 渲染的另一种写法
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App/>)
```


#### 如何写一个带参数的`React`组件

```js
import React from 'react'

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

> 或
```js
import React from 'react'

function Welcome(props) {
   const { name }  = props
  
   return <h1>Hello, {name}</h1>;
}
```

> 或
```js
import React from 'react'

function Welcome({name}) {
   return <h1>Hello, {name}</h1>;
}
```

> `children` 是 `React` 组件的保留参数，每一个组件都会接收 `children` 子组件参数

```js
import React from 'react'

function Welcome(props) {
    const {children, name } = props
    return <h1>Hello, {name}</h1>;
}
```

> 理解 `...` 参数, 下面 `rest` 是指获取的 `children`, `name`参数外，剩余的参数

```js
import React from 'react'

function Welcome(props) {
    const {children, name, ...rest } = props
    return <h1>Hello, {name}</h1>;
}
```

#### 如何写一个容器组件
> `children` 是 `React` 组件的默认参数, 代表组件的所有子组件

```js
import React from "react";

export default function Father(props){
    const {children, ...rest} = props

    return children.map(child =>{
        return (<div style={{color:'red'}}>
            {child}
        </div>)
    })
}
```


#### 如何写一个可以传递参数的容器组件

```js
import React from 'react';

export default function NextIndicator(props) {
    const {children, ...rest}  = props

    return (<>
        {
            React.Children.map(children, child => {
                    return React.cloneElement(child, {
                        ...rest
                    })
                })
        }
    </>)
}
```

#### 如何使用容器组件

```js
import Father from './Father'
import HelloWorld from './HelloWorld'

export default function ComsumeFather(props){
    return (
        <Father>
            <HelloWorld />
        </Father>
    )
}
```

#### 如何理解容器组件
`div` 本身就是一个容器

```js
import HelloWorld from './HelloWorld'

export default function Index(props){
    return <div style={{color:'red'}}>
        <HelloWorld />
    </div>
}
```

#### 如何使用钩子`hook`

```js
import React, { useState, useEffect } from 'react';

import React from 'react'

export default function Index(props) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('do nothing, but will update UI !')
    }, [count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
  );
}
```


## 使用 `zero-element-boot` 框架的标准组件
自由布局组件 `AutoLayout` 由以下几种类型的基础组件构成多种组合的新组件

- `presenter` 基础展示组件，代表最基础的组件元素
- `cart` 对基础组件进行修饰的容器组件
- `children` 由多个子组件组成的新组件的子组件列表,与单个子组件`presenter`相对，只选其一
- `layout` 布局组件, 对多个子组件进行布局
- `container` 顶层容器组件, 控制一定的组件逻辑实现
- `gateway` 数据网关组件，负责对数据进行转换与并与组件属性进行绑定展示

除以上几大组件概念外，还包括基于上述主要组件的派生组件，包括：
- `indicator` 派生自`cart`组件, 用于响应组件事件与用户操作，与鼠标`hover`事件，用户菜单选择事件
- `selector`  派生自`cart`组件, 用于响应用户选择子组件的事件
- `unselector` 派生自`cart`组件, 用于响应用户取消选择子组件的事件，或正常的组件状态，会叠加在`cart`组件之上
- `binding` 派生自`gateway`组件, 用于数据源字段与组件属性之间的绑定, 其他未绑定数据保留并继续往下子组件传递
- `filter` 派生自`gateway`组件, 只传递过滤的数据, 其他未被过滤的数据，不继续往下传递
- `chain` 派生自`gateway`组件, 是一个列表，多层数据处理；上一层的数据处理结果传递给下一层，绑定前的原数据保留并继续往下子组件传递


#### 如何通过一个`Cart`修饰一个组件

```js
import React from 'react';
import Butter from '@/presenter/default/Butter'
import Cart from '@/components/cart/Cart'

export default function TestCart(props){
    return(
        <Cart padding={"10px"}>
            <Butter />
        </Cart>
    )
}
```

#### 如何通过NamedCart 修饰一个组件

```js
import React from 'react';
import Butter from '@/presenter/default/Butter'
import NamedCart from '@/components/NamedCart'


// NamedCart风格，用xname来使用所想使用的风格
// xname中引用的Cart 来自于  @/component/cart/index.js 的导出，可以查看代码获知
// 已定义的Cart 包括： [Cart,Circle,Corner,HoverShadowCart,ItemCart ...]

export default function TestNamedCart(props) {
    return (
        <NamedCart xname="ItemCart" props={{ padding: "20px" }}>
            <Butter />
        </NamedCart>
    )
}
```

#### 如何对多个React组件进行布局

```js
import React from 'react';
import Butter from '@/presenter/default/Butter'
import Clean from '@/presenter/default/Clean'
import Pink from '@/presenter/default/Pink'
import Flexbox from '@/components/layout/Flexbox'
import Container from '@/components/container/Container'


export default function TestCart(props){
    return(
        <Container>
            <Flexbox align="around" justify="center">
                <Butter />
                <Clean />
                <Pink />
            </Flexbox>
        </Container>
    )
}
```

#### 如何通过NamedLayout对多个组件进行布局

```js
import React from 'react';
import Butter from '@/presenter/default/Butter'
import Clean from '@/presenter/default/Clean'
import Pink from '@/presenter/default/Pink'
import NamedLayout from '@/components/NamedLayout'


export default function TestCart(props){
    return(
        <NamedLayout xname="Flexbox">
            <Butter />
            <Clean />
            <Pink />
        </NamedLayout>
    )
}
```

#### 如何向React组件传递数据

```js
import React from 'react';
import Butter from '@/presenter/default/Butter'
import NamedCart from '@/components/NamedCart'
import Binding from '@/components/gateway/Binding'

export default function TestNamedCart(props){
    const data={
        color:"#F2D388",
        reg:"RGB(242,211,136)"
    }
    return(
        <NamedCart xname="ItemCart">
            <Binding {...data}>
                <Butter />
            </Binding>
        </NamedCart>
    )
}
```

#### 如何通过Gateway向React组件传递并绑定数据

```js
import React from 'react';
import Butter from '@/presenter/default/Butter'
import NamedCart from '@/components/NamedCart'
import Binding from '@/components/gateway/Binding'

export default function TestNamedCart(props){
    const data={
        color:"#F2D388",
        reg:"RGB(242,211,136)"
    }
    return(
        <NamedCart xname="ItemCart">
            <Binding {...data}>
                <Butter />
            </Binding>
        </NamedCart>
    )
}
```

#### 如何通过NamedGateway向React组件传递并绑定数据

```js
import React from 'react';
import Butter from '@/presenter/default/Butter'
import NamedCart from '@/components/NamedCart'
import NamedGateway from '@/components/NamedGateway'

export default function TestNamedCart(props){
    const data={
        color:"#F2D388",
        reg:"RGB(242,211,136)"
    }
    return(
        <NamedCart xname="ItemCart">
            <NamedGateway xname="Binding" {...data}>
                <Butter />
            </NamedGateway>
        </NamedCart>
    )
}
```

#### 如何通过AutoLayout对多个组件进行布局

```js
    xname:'Flexbox',
    props:{
        align:'start',
        direction:'row',
        justidy:'center'
    }
```

#### 如何通过AutoLayout对多个组件进行布局传递数据

```js
module.exports={
    xname:'Flexbox',
    props:{
        align:'start',
        direction:'row',
        justidy:'center'
    },
    children:[
        {
            presenter:'ItemAvatar',
            gateway:{
                xname:"Binding",
                props:{
                    binding:{
                        logo:'url',
                    }
                }
            }
        },
        {
            presenter:'ContentText',
            gateway:{
                xname:"Binding",
                props:{
                    binding:{
                        title:"title",
                        subtitle:"subtitle"
                    }
                }
            }
        },
        {
            presenter:'ItemIconAction',
            gateway:{
                xname:"Binding",
                props:{
                    binding:{
                        timestamp:"timestamp"
                    }
                }
            }
        }
    ]
}
```

### 全局定义 layout 使用方法
- 在项目 src/global.js 里使用 (如没有 global.js 文件可以直接在src目录下创建即可)

```js
//set namedcart
import { set as NamedLayoutSet } from '@/config/NamedLayoutConfig';

import Flexbox from '@/components/layout/Flexbox';

NamedLayoutSet({
  Flexbox,
})
```


### 全局定义 car 和 persenter 使用方法
- 在项目 src/global.js 里使用

```js
//set namedcart
import { set as NamedCartSet } from '@/config/NamedCartConfig';

import Cart from './cart/Cart';

NamedCartSet({
  Cart,
})

//set persentor
import { set as NamedPresenterSet } from '@/config/NamedPresenterConfig';

import ImageAnimation from '@/pages/PresenterTestDemo/components/presenter/item/ItemAvatar'

NamedPresenterSet({
  ImageAnimation,
})
```

