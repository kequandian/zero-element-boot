import React, { useRef, useState } from 'react';
import { useSize } from 'ahooks';
import useLayout from '@/hooks/useLayout';
import ContainerContext from '@/components/AutoX/ContainerContext';


export default function SelectChecBoxList(props) {
  const { children, items, layout, cart, onItemClick= () => {console.log('未设置SelectedList onItemClick点击事件')} } = props;
  const [layoutRef, { getClassName }] = useLayout();
  const containerRef = useRef();
  const size = useSize(containerRef);

  const Child = React.Children.only(children);

  const [checkedList, setCheckedList] = useState(items);

  function onSelected (props) {
    const { checked, id } = props;
    checkedList.map(item =>{
      if(item.id == id){
        item.checked = !checked;
      }
    })
    setCheckedList(checkedList);
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
        {checkedList.map((item, i) => React.isValidElement(Child) ?
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
            })
            : <Child key={i} {...item } {...layout} layout={layout} cart={cart} ref={layoutRef} onItemClick={onItemClick} 
            onSelected={onSelected}
            item_index= {i}
            curr_index= {curr_index}
            />)}
    </ContainerContext.Provider>
  </div>
}