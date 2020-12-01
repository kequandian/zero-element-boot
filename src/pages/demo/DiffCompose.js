import React, { useState, useEffect } from 'react';
import { Alert, Button, Layout, Row, Col } from 'antd';

const { Content } = Layout;

export default function (props) {

  const { name, items, tabs, span } = props;

  const [ count, setCount ] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
}