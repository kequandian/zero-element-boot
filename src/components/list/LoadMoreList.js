import React, { useState, useRef } from 'react';
import { List, Button } from 'antd';
import { useMount, useSize } from 'ahooks';
import useLayout from '@/components/hooks/useLayout';
import ContainerContext from '@/components/AutoX/ContainerContext';

export default function LoadMoreList(props) {
  const { onQuery, children } = props;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [layoutRef, { getClassName }] = useLayout();
  const containerRef = useRef();
  const size = useSize(containerRef);

  useMount(_ => {
    handleQuery();
  });

  function handleQuery() {
    setLoading(true);
    onQuery().then(response => {
      if (Array.isArray(response)) {
        setData([...data, ...response]);
      }
    })
      .finally(_ => setLoading(false))
  }

  const Child = React.Children.only(children);

  return <div ref={containerRef}>
    <ContainerContext.Provider value={size}>
      <List
        loading={loading}
        className={getClassName()}
        loadMore={<>
          {loading ? null : <div style={{
            textAlign: 'center',
            margin: 12,
            height: 32,
          }}><Button onClick={handleQuery}>加载更多</Button></div>}
        </>}
        dataSource={data}
        renderItem={item => React.isValidElement(Child) ?
          React.cloneElement(Child, {
            ...item,
            ref: layoutRef,
          })
          : <Child {...item} ref={layoutRef} />
        }
      />
    </ContainerContext.Provider>
  </div>
}