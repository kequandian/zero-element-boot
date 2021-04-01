import React, { useRef,useEffect ,useState} from 'react';
import { useSize } from 'ahooks';
import useLayout from '@/components/hooks/useLayout';
import queryMethod from '@/components/utils/promiseAjax';
import ContainerContext from '@/components/AutoX/ContainerContext';

/**
 * 列表属性{template}包括 [布局, Cart, 分隔线, 数据转换 [,子组件] ]
 * 简单列表仅向子组件传递数据源以及 子组件属性
 * @param {*} props 
 * @param {object} layout  布局
 * @param {array}} items,dataSource
 */
export default function LoadingList(props) {
    
  const [data, setData] = useState([]);
  const { children,queryData, layout, API, onItemClick= () => {console.log('未设置onItemClick点击事件')}, ...rest } = props;

  const [layoutRef, { getClassName }] = useLayout();
  

  const containerRef = useRef();
  const size = useSize(containerRef);

  // ensure only child [NamedLayout, Presenter ...]
  const Child = React.Children.only(children);

  useEffect(_ => {
    queryMethod(API, queryData)
      .then(responseData => {
        if (responseData && responseData.code === 200) {
          setData(responseData.data);
        }
      })
  }, []);

  console.log(data)

  

  return(
    <div
        style={{
        overflow: 'auto',
        position: 'relative',
        }}
        className={getClassName()}
        ref={containerRef}
    >
        <ContainerContext.Provider value={size}>
            {data.map((item, i) => React.isValidElement(Child) ?
                React.cloneElement(Child, {
                    ...item,
                    ...rest,
                    layout:layout,
                    key: i,
                    ref: layoutRef,
                    onItemClick:onItemClick,
                    isLastItem: data.length == (i+1) ? true : false,
                })
                : <Child key={i} {...item } {...rest} layout={layout} ref={layoutRef} onItemClick={onItemClick} />)}
        </ContainerContext.Provider>
    </div>)
}

function tips(dataSource) {
  return <div>PlainList 数据无效</div>;
}
