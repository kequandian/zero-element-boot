import React, { useRef } from 'react';
import { useSize } from 'ahooks';
import useLayout from '@/utils/useLayout';
import ContainerContext from '@/utils/ContainerContext';

export default function PlainList(props) {
  const { children, items, layout, cart } = props;
  const [layoutRef, { getClassName }] = useLayout();
  const containerRef = useRef();
  const size = useSize(containerRef);

  const Child = React.Children.only(children);

  return <div
    style={{
      overflow: 'auto',
      position: 'relative',
    }}
    className={getClassName()}
    ref={containerRef}
  >
    <ContainerContext.Provider value={size}>
        {items.map((item, i) => React.isValidElement(Child) ?
            React.cloneElement(Child, {
                ...item,
                ...layout,
                layout:layout,
                cart:cart,
                key: i,
                ref: layoutRef,
            })
            : <Child key={i} {...item } {...layout} layout={layout} cart={layout} ref={layoutRef} />)}
    </ContainerContext.Provider>
  </div>
}