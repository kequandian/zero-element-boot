#### 如何写一个`React`组件

```js
export default function App(){
    return <div> Hello React! </div>
}
```

#### 如何渲染一个`React`组件

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
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

> `children`是`React`组件的保留参数，每一个组件都会接收`children`子组件参数

```js
import React from 'react'

function Welcome(props) {
    const {children, name } = props
    return <h1>Hello, {name}</h1>;
}
```

> 理解 `...` 参数, 下里 `rest`是指获取的`children`,`name`参数外，剩余的参数

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

> 使用容器组件
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


## 使用`zero-element-boot`标准组件


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

