import React, { useRef, useState } from 'react';
import { useSize } from 'ahooks';
import useLayout from '@/components/hooks/useLayout';
import ContainerContext from '@/components/AutoX/ContainerContext';


export default function SelectedList(props) {
  const { children, items, layout, cart, onItemClick= () => {console.log('未设置SelectedList onItemClick点击事件')} } = props;
  const [layoutRef, { getClassName }] = useLayout();
  const containerRef = useRef();
  const size = useSize(containerRef);

  const Child = React.Children.only(children);

  const [currIndex, setCurrIndex] = useState(0)
  
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
                isLastItem: items.length == (i+1) ? true : false,
                onSelected: onSelected,
                itemIndex: i,
                isSelected: i == currIndex ? true : false
            })
            : <Child key={i} {...item } {...layout} layout={layout} cart={cart} ref={layoutRef} onItemClick={onItemClick} 
            onSelected={onSelected}
            itemIndex= {i}
            isSelected= {i == currIndex ? true : false}
            />)}
    </ContainerContext.Provider>
  </div>
}
