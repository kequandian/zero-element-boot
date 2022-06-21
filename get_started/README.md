#### 如何写一个React组件
```
import React from 'react'

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default function Index(){
    return <div> Hello React! </div>
}
```

#### 如何写一个容器组件

```
import React from "react";
export default function Father(props){
    const {children} = props
    return children.map(child =>{
        return (<div style={{color:'red'}}>我是一个父组件
            {child}
        </div>)
    })
}
```



#### 如何通过一个Cart修饰一个组件

```
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
```
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
```
import React from 'react';
import Butter from '@/presenter/default/Butter'
import Clean from '@/presenter/default/Clean'
import Pink from '@/presenter/default/Pink'
import Flexbox from '@/components/layout/Flexbox'
import Container from '@/components/container/Container'
import PageCart from '@/components/cart/PageCart';



export default function TestCart(props){
    return(
        <PageCart>
        <Container>
            <Flexbox align="around" justify="center">
                <Butter />
                <Clean />
                <Pink />
            </Flexbox>
        </Container>
        </PageCart>
    )
}
```

#### 如何通过NamedLayout对多个组件进行布局
```
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
```
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
```
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
```
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
```
    xname:'Flexbox',
    props:{
        align:'start',
        direction:'row',
        justidy:'center'
    }
```

#### 如何通过AutoLayout对多个组件进行布局传递数据
```
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

import ImageAnimation from '@/pages/PresenterTestDemo/components/presenter/item/ItemAvatar'

NamedPresenterSet({
  ImageAnimation,
})
```

