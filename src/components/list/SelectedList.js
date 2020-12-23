import React, { useRef, useState } from 'react';
import { useSize } from 'ahooks';
import useLayout from '@/hooks/useLayout';
import ContainerContext from '@/components/container/ContainerContext';


export default function SelectedList(props) {
  const { children, items, layout, cart, onItemClick= () => {console.log('未设置onItemClick点击事件')} } = props;
  const [layoutRef, { getClassName }] = useLayout();
  const containerRef = useRef();
  const size = useSize(containerRef);

  const Child = React.Children.only(children);

  const [curr_index, setCurrIndex] = useState(0)

  function onSelected (index) {
    setCurrIndex(index)
  }

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
                onItemClick: onItemClick,
                isValidLine: items.length == (i+1) ? false : true,
                onSelected: onSelected,
                item_index: i,
                curr_index : curr_index
            })
            : <Child key={i} {...item } {...layout} layout={layout} cart={cart} ref={layoutRef} onItemClick={onItemClick} 
            onSelected={onSelected}
            item_index= {i}
            curr_index= {curr_index}
            />)}
    </ContainerContext.Provider>
  </div>
}