import React, { useRef, useState } from 'react';
import { history } from 'umi';
import { useSize } from 'ahooks';
import useLayout from '@/components/hooks/useLayout';
import ContainerContext from '@/components/AutoX/ContainerContext';

/**
 * @param {*} props 
 * @param {array}} items api数据
 * @param {Object}} navigation 导航
 * @param {Object}} onItemClick 点击事件
 */

export default function SelectList(props) {
  const { 
    children, items=[], 
    // layout, 
    cart, navigation,  onItemClick= () => {console.log('未设置SelectionList onItemClick点击事件')},
    ...rest
  } = props;

    
  const [layoutRef, { getClassName }] = useLayout();
  const containerRef = useRef();
  const size = useSize(containerRef);

  const Child = React.Children.only(children);

  const [ list, setList ] = useState(items)
  const [currIndex, setCurrIndex] = useState(-1)
  

  function onSelected (item, index) {
    list.map((item, i) => {
      if(i === index && currIndex === -1){
        item.isSelected = true
        setCurrIndex(index)
      }else if( i === index && index === currIndex){
        item.isSelected = false
        setCurrIndex(-1)
      }else if( i === index){
        item.isSelected = true
        setCurrIndex(index)
      }else{
        item.isSelected = false
      }
    })

    setList(list)

    // setCurrIndex(index);
    if(navigation){
      if(navigation.indexOf('(id)') === -1){
        history.push({
          pathname: navigation,
          query: {
            itemData: item
          }
        })
      }else if(navigation.indexOf('(id)') > -1){
        const formatNav = navigation.replace('(id)', item.id);
        history.push({
          pathname: formatNav,
          query: {
          }
        })
      }
    }else if(onItemClick){
      const itemData = list.find((fItem, findex)=> (findex === index))
      onItemClick(itemData)
    }
  }

  return (
    <div
      style={{
        overflowX: 'hidden',
        position: 'relative',
      }}
      className={getClassName()}
      ref={containerRef}
    >
      <ContainerContext.Provider value={size}>
          {list.map((item, i) => {

            return <div key={i} onClick={() => onSelected(item, i)} >
              {
                React.isValidElement(Child) ?
                React.cloneElement(Child, {
                    ...item,
                    ...rest,
                    // ...layout,
                    // layout:layout,
                    // cart:cart,
                    key: i,
                    ref: layoutRef,
                    isLastItem: list.length == (i+1) ? true : false,
                })
                : <Child key={i} {...item } {...layout} layout={layout} ref={layoutRef}/>
              }
            </div>
            
          })}
      </ContainerContext.Provider>
    </div>
  )
}

