import React, { useState, useRef } from 'react';
import { Button, Spinner, Center, VStack } from '@chakra-ui/react';
import { useMount, useSize } from 'ahooks';
import useLayout from '@/components/hooks/useLayout';
import ContainerContext from '@/components/config/ContainerContext';

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

  return <div ref={containerRef} className={getClassName()}>
    <ContainerContext.Provider value={size}>
      <VStack spacing={0} align="stretch">
        {loading && <Center py={4}><Spinner /></Center>}
        {data.map((item, index) => React.isValidElement(Child) ?
          React.cloneElement(Child, {
            key: index,
            ...item,
            ref: layoutRef,
          })
          : <Child key={index} {...item} ref={layoutRef} />
        )}
        {!loading && (
          <Center py={3}>
            <Button onClick={handleQuery}>加载更多</Button>
          </Center>
        )}
      </VStack>
    </ContainerContext.Provider>
  </div>
}