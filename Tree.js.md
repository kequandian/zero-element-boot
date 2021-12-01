- https://github.com/xyc/react-object-inspector
- https://lapple.github.io/react-json-inspector/
- https://codesandbox.io/s/01kl2xmo40?file=/index.js
- https://stackoverflow.com/questions/47185330/react-treeview-from-json-array
- https://github.com/alexkuz/react-json-tree/pull/32 ## tag style
```javascript
import React from 'react';
import { render } from 'react-dom';

const data = [{
  title: "Node 1",
  childNodes: [
    { title: "Childnode 1.1" },
    {
      title: "Childnode 1.2",
      childNodes: [
        {
          title: "Childnode 1.2.1",
          childNodes: [
            { title: "Childnode 1.2.1.1" }
          ]
        }, { title: "Childnode 1.2.2" }
      ]
    }
  ]
}];

const App = () => (
  <form>
    <Tree data={data} />
  </form>
);

const Tree = ({data}) => ( 
  <ul>
    {data && data.map(item => (
      <li>
        {item.title}
        {item.childNodes && <Tree data={item.childNodes} />}
      </li>
    ))}
  </ul>
);

render(<App />, document.getElementById('root'));

```
