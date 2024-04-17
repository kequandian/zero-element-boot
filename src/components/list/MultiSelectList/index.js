import React, { useRef, useState, useEffect } from 'react';
import { useSize } from 'ahooks';
import { VStack, HStack, Button } from '@chakra-ui/react';
import useLayout from '@/components/hooks/useLayout';
import ContainerContext from '@/components/AutoX/ContainerContext';
import checkBoxTool from '@/components/utils/checkBoxTool';

export default function SelectCheckboxList(props) {
  const { children, items, layout, cart, onItemClick, 
    onOkClick,
    containerHeight= '',
    isScroll=false,
    ...rest
  } = props;
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
    // const selectCheckedList = [];
    for (let i = 0; i < checkedList.length; i++) {
      const item = checkedList[i];
      if(item.id == id){
        item.checked = !checked;
        if(item.checked){
          checkedItems.push(item);
          setCheckedItems(checkedItems);
          // selectCheckedList.push(item)
        }
        // else{
        //   selectCheckedList = selectCheckedList.filter(item => item.id !== id)
        //   // setCheckedItems(newCheckedItems);
        // }
      }
      newCheckedList.push(item);
    }
    setCheckedList(newCheckedList);
    // if(onItemClick && selectCheckedList && selectCheckedList.length > 0){
      // onItemClick(newCheckedList.filter(item => item.checked == true))
    // }
  }

  //发送数据
  const sendData = () => {
    if(checkedItems && checkedItems.length > 0){
      const newData = []
      checkedItems.forEach(item => {
        checkedList.forEach(item2 => {
          if(item2.checked && item2.id === item.id){
            newData.push(item2)
          }
        })
      })
      setCheckedItems(newData)
      onOkClick(newData)
    }else{
      console.log('当前选择为0')
    }
  }

  return (
    <VStack>
      {
        onOkClick ? (
          <HStack w={'100%'} justifyContent={'space-between'}>
            <div> </div>
            <div> </div>
            <Button colorScheme='teal' size='sm' onClick={() => sendData()}>
              确认
            </Button>
          </HStack>
        ) : <></>
      }
      <div
        id='multi-select-list'
        style={{
          width: '100%',
          overflowX: 'hidden',
          overflowY: 'scroll',
          height: `${(containerHeight && containerHeight - 32) || ( isScroll && window.innerHeight )}px`
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
                    ...rest,
                    ...item,
                    // ...layout,
                    // layout:layout,
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
    </VStack>
  )
}