import React, { useRef, useState } from 'react';
import { history } from 'umi';
import { useSize } from 'ahooks';
import useLayout from '@/components/hooks/useLayout';
import ContainerContext from '@/components/AutoX/ContainerContext';


export default function SelectionList(props) {
  const { children, items, layout, cart, navigation,  onItemClick= () => {console.log('未设置SelectionList onItemClick点击事件')} } = props;
  const [layoutRef, { getClassName }] = useLayout();
  const containerRef = useRef();
  const size = useSize(containerRef);

  const Child = React.Children.only(children);

  const [currIndex, setCurrIndex] = useState(0)

  function onSelected (item, index) {
    setCurrIndex(index);
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
      onItemClick(item)
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
        {items.map((item, i) => {

          return <div key={i} onClick={() => onSelected(item, i)} >
            {
              React.isValidElement(Child) ?
              React.cloneElement(Child, {
                  ...item,
                  ...layout,
                  layout:layout,
                  cart:cart,
                  key: i,
                  ref: layoutRef,
                  isLastItem: items.length == (i+1) ? true : false,
                  isSelected: i == currIndex ? true : false
              })
              : <Child key={i} {...item } {...layout} layout={layout} cart={cart} ref={layoutRef}
                  isSelected={i == currIndex ? true : false}
              />
            }
          </div>
           
        })}
    </ContainerContext.Provider>
  </div>
}

