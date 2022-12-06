##### 如何创建一个React组件

```react
import React from 'react';

export default function HelloComponent(props) {
    return (
        <div>Hello React!</div>
    )
}
```

##### 如何创建一个React组件  `with less`
```react
import React from 'react';
require('./index.less');

export default function Butter(props) {
    return (
        <section className="color" id="butter">
            <h2 className="name">Butter</h2>
            <ul className="details">
                <li>#F2D388</li>
                <li>RGB(242,211,136)</li>
            </ul>
        </section>
    )
}
```

##### 如何修饰一个组件
