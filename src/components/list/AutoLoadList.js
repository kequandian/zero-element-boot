import React, { useState, useRef, useEffect } from 'react';
import { useInViewport } from 'ahooks';
import { useSize } from 'ahooks';
import useLayout from '@/components/hooks/useLayout';
import ContainerContext from '@/components/AutoX/ContainerContext';

export default function AutoLoadList(props) {
  const { onQuery, children, spin = '' } = props;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [layoutRef, { getClassName }] = useLayout();
  const containerRef = useRef();
  const size = useSize(containerRef);

  const probeRef = useRef(null);
  const inViewPort = useInViewport(probeRef);

  //antd spin 组件
  const Spin = spin;

  useEffect(_ => {
    if (!loading && inViewPort) {
      handleQuery();
    }

  }, [inViewPort]);

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

  return <div
    style={{
      overflow: 'auto',
      position: 'relative'
    }}
    className={getClassName()}
    ref={containerRef}
  >
    <Spin spinning={loading}>
      <ContainerContext.Provider value={size}>
        {data.map((item, i) => React.isValidElement(Child) ?
          React.cloneElement(Child, {
            ...item,
            key: i,
            ref: layoutRef,
          })
          : <Child key={i} {...item} ref={layoutRef} />)}
        <div ref={probeRef} style={{ position: 'relative', bottom: data.length ? 40 : undefined }}></div>
      </ContainerContext.Provider>
    </Spin>
  </div>
}