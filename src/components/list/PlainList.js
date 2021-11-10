import React, { useRef } from 'react';
import { history } from 'umi';
import { useSize } from 'ahooks';
import useLayout from '@/components/hooks/useLayout';
import ContainerContext from '@/components/AutoX/ContainerContext';

/**
 * 列表属性{template}包括 [布局, Cart, 分隔线, 数据转换 [,子组件] ]
 * 简单列表仅向子组件传递数据源以及 子组件属性
 * @param {*} props 
 * @param {object} layout  布局
 * @param {array}} items,dataSource
 */
export default function PlainList(props) {
  const { children, layout, items, dataSource=items, navigation, onItemClick= () => {console.log('未设置onItemClick点击事件')}, ...rest } = props;

  const [layoutRef, { getClassName }] = useLayout();

  const containerRef = useRef();
  const size = useSize(containerRef);

  // ensure only child [NamedLayout, Presenter ...]
  const Child = React.Children.only(children);

  // 检查数据是否有效
  if(!(dataSource && Array.isArray(dataSource))){
     return tips(dataSource)
  }

  function clickAction (item) {
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
        {dataSource.map((item, i) => {
          return (
            <div key={i} onClick={() => clickAction(item)} >
              {
                React.isValidElement(Child) ?
                  React.cloneElement(Child, {
                      ...item,
                      ...rest,
                      layout:layout,
                      // key: i,
                      ref: layoutRef,
                      // onItemClick:onItemClick,
                      isLastItem: dataSource.length == (i+1) ? true : false,
                      index: i
                  })
                : <Child key={i} {...item } {...rest} layout={layout} ref={layoutRef} onItemClick={onItemClick} index={i} />
              }
            </div>
          )
        })}
    </ContainerContext.Provider>
  </div>
}

function tips(dataSource) {
  return <div>PlainList 数据无效</div>;
}