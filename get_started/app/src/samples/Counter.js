/// 测试 Hook 组件
import React, { useEffect, useState }  from 'react'

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
     <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
        Click me
        </button>
      </div>
    );
}
