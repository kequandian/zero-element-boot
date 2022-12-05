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
  const { children, layout, items, dataSource=items, navigation, onItemClick, ...rest } = props;

  const [layoutRef, { getClassName }] = useLayout();

  const containerRef = useRef();
  const size = useSize(containerRef);

  // ensure only child [NamedLayout, Presenter ...]
  const Child = React.Children.only(children);

  // 检查数据是否有效
  if(!(dataSource && Array.isArray(dataSource))){
     return tips(dataSource)
  }

  /**
   * 2021-11-15
   * 互换了 "...item" 和 "...rest"  顺序
   */
  return <div
    style={{
      width: '100%',
      overflow: 'auto',
      position: 'relative',
    }}
    className={getClassName()}
    ref={containerRef}
  >
    <ContainerContext.Provider value={size}>
        {dataSource.map((item, i) => {
          return (
            <div key={i} >
              {
                React.isValidElement(Child) ?
                  React.cloneElement(Child, {
                      ...rest,
                      ...item,
                      layout:layout,
                      // key: i,
                      ref: layoutRef,
                      onItemClick:onItemClick,
                      isLastItem: dataSource.length == (i+1) ? true : false,
                      index: i
                  })
                : <Child key={i} {...rest} {...item } layout={layout} ref={layoutRef} index={i} />
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