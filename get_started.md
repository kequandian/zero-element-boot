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

```
