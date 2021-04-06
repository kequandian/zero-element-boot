#### 如何写一个React组件
```
import React from 'react'

export default function Index(){
    return <div> Hello React! </div>
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

export default function TestNamedCart(props){
    return(
        <NamedCart xname="ItemCart">
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



export default function TestCart(props){
    return(
        <Flexbox>
            <Butter />
            <Clean />
            <Pink />
        </Flexbox>
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

#### 如何通过AutoComponent对多个组件进行布局
```
    xname:'Flexbox',
    props:{
        align:'start',
        direction:'row',
        justidy:'center'
    }
```

#### 如何通过AutoComponent对多个组件进行布局传递数据
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
            presenter:'ItemAvator',
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


