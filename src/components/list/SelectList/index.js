import React, { useRef, useState } from 'react';
import { history } from 'umi';
import { useSize } from 'ahooks';
// import { VStack, Box, Button } from '@chakra-ui/react';
import useLayout from '@/components/hooks/useLayout';
import ContainerContext from '@/components/config/ContainerContext';
// const namedPresenterGet = require("@/components/config/NamedPresenterConfig").get();
// import SquareAddNew from '@/components/presenter/button/SquareAddNew';

require('./index.less');

/**
 * @param {*} props 
 * @param {array}} items api数据
 * @param {Object}} navigation 导航
 * @param {Object}} onItemClick 点击事件
//  * @param {number or string}} containerHeight 容器高度
 * @param {boolean}} isSwitch 是否显示新增按钮
 */

export default function SelectList(props) {
  const { 
    children, items, dataSource=items, 
    navigation,  onItemClick= () => {console.log('SelectList: onItemClick() is not set !')},
    // isSwitch=false,
    // addnew='',
    // containerHeight= '',
    // isScroll=false,
    // btnPisition='top',
    // selectBtnRatio=0.5,
    ...rest
  } = props;

   // 检查数据是否有效
   if(!(dataSource && Array.isArray(dataSource))){
      return loading(dataSource)
  }

  const [layoutRef, { getClassName }] = useLayout();
  const containerRef = useRef();
  const size = useSize(containerRef);

  const Child = React.Children.only(children);

  const [ list, setList ] = useState(dataSource)
  const [currIndex, setCurrIndex] = useState(-1)


  function onSelected (item, index) {
    list.map((item, i) => {
      if(i === index && currIndex === -1){
        item.isSelected = true
        setCurrIndex(index)
      }else if( i === index && index === currIndex){  //repeat the same item
        item.isSelected = true
        setCurrIndex(-1)
      }else if( i === index){
        item.isSelected = true
        setCurrIndex(index)
      }else{
        item.isSelected = false
      }
    })
    setList(list)

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
    }
    
    if(onItemClick){
      const item = list.find((fItem, findex)=> (findex === index))
      onItemClick(item)
    }
  }

  // function addNewButton() {
  //   const btnName = addnew || 'AddNewButton'
  //   const BC = namedPresenterGet[btnName]
  //   return <BC />
  // }

  return (
      <div
        id='select-list'
        style={{
          width: '100%',
          overflowX: 'hidden',
          // position: 'relative',
          overflowY: 'scroll',
          // height: `${containerHeight}`  // || (isScroll && (isSwitch && btnPisition ?  window.innerHeight - 75 :  window.innerHeight ))}px`
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
                      ...rest,
                      ...item,
                      // ...layout,
                      // layout:layout,
                      // cart:cart,
                      key: i,
                      ref: layoutRef,
                      isSelected: item.isSelected,
                      isLastItem: list.length == (i+1) ? true : false,
                  })
                  : <Child key={i} {...item } {...layout} isSelected={item.isSelected} layout={layout} ref={layoutRef}/>
                }
              </div>
            })}
            {/* {
              isSwitch && btnPisition == 'bottom' ? (
                <SquareAddNew onAddNew={onAddNewClick} ratio={selectBtnRatio} />
              ) : <></>
            } */}
        </ContainerContext.Provider>
      </div>
  )
}

function loading() {
  return <div>暂无更多数据</div>;
}