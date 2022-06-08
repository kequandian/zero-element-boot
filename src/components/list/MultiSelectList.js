import React, { useRef, useState, useEffect } from 'react';
import { useSize } from 'ahooks';
import useLayout from '@/components/hooks/useLayout';
import ContainerContext from '@/components/AutoX/ContainerContext';
import checkBoxTool from '@/components/utils/checkBoxTool';

export default function SelectCheckboxList(props) {
  const { children, items, layout, cart, onItemClick } = props;
  const [layoutRef, { getClassName }] = useLayout();
  const containerRef = useRef();
  const size = useSize(containerRef);

  const Child = React.Children.only(children);

  const [checkedList, setCheckedList] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    setCheckedList(items);
  }, [items]); 


  function onSelected (item) {
    const { checked, id } = item;
    const newCheckedList = [];
    for (let i = 0; i < checkedList.length; i++) {
      const item = checkedList[i];
      const orgCheckedItems = checkedItems;
      if(item.id == id){
        item.checked = !checked;
        // if(item.checked){
        //   checkedItems.push(item);
        //   setCheckedItems(checkedItems);
        // }else{
        //   const newCheckedItems = orgCheckedItems.filter(item => item.id !== id)
        //   setCheckedItems(newCheckedItems);
        // }
      }
      newCheckedList.push(item);
    }
    setCheckedList(newCheckedList);
    if(onItemClick && newCheckedList && newCheckedList.length > 0){
      onItemClick(newCheckedList.filter(item => item.checked == true))
    }
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
        {checkedList && checkedList.length && checkedList.map((item, i) => {
          return <div key={i} onClick={() => onSelected(item)} >
          {
            React.isValidElement(Child) ?
            React.cloneElement(Child, {
                ...item,
                ...layout,
                layout:layout,
                // cart:cart,
                key: i,
                ref: layoutRef,
                // onItemClick: onItemClick,
                // isLastItem: items.length == (i+1) ? true : false,
                // checkedItems: checkedItems,
                isSelected: item.checked
            })
            : <Child key={i} {...item } {...layout} layout={layout} ref={layoutRef} isSelected={item.checked}
            />
          }
        </div>
        })}
    </ContainerContext.Provider>
  </div>
}