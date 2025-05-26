import React, { useImperativeHandle, forwardRef } from 'react';

//CR. 2021-01-13 do not dependens NamedSeperator with layout
//import NamedSeperator from '@/components/NamedSeperator';

require('./index.less');

/**
 * @param {对齐方式: [start, center, end, around, between, start-with-last-end, align-content-center] } align
 * @param {对齐方向(+子项): [row, column, row-reverse, column-reverse] } direction
 * @param {子项对齐方式: [start, center, end, auto] } justify   //deprecated: [full, half, quad]: for item width, 
 * @param {换行方式: [no-wrap, row-wrap] } flexFlow 默认换行
 * @param {number} spacing 间隔
 * @param {boolean} auto 是否自动适应子组件大小
 * @param {ReactElement} Seperator 直接转入的分隔线组件（不引入NamedSeperator依赖）
 * Seperator: 'Divider', 组件名
 * {
      name: 'Divider',
      props:{
          lineType:'solid' 分割线类型
      }
   }
   @param {是否划线} isLastItem
 */
export default forwardRef(function Flexbox(props, ref) {

  const { children, Seperator, align = 'start', direction = 'row', justify = 'start', xgap, flexFlow = '', ...rest} = props;

  const width100 = (align == 'between' || align.indexOf("between") != -1)  ? 'width100' : '';
  const height100 = direction === 'column' ? 'height100' : ''


  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `l-FlexBox ${align} ${direction} ${flexFlow} ${width100} ${height100}`;
    }
  }));

  // get named seperator
  //const defaultSeperator = (typeof seperator === 'string') ? seperator : seperator.name

  // return React.Children.map(children, (child, index) => {

  //   return (
  //     <>
  //       <div className={`l-FlexBoxItem ${direction} ${justify}`} style={{marginLeft: index > 0 && spacing > 0 ? `${spacing}px`:'0px'}}>
  //         {child}
  //       </div>
  //       {/* {defaultSeperator && (!isLastItem) ? <NamedSeperator name={defaultSeperator} /> : null} */}
  //       {Seperator}
  //     </>
  //   )
  // })

  let spacingStyle = {}
  if(direction == 'row' && xgap && xgap != '0px' ){
    spacingStyle = { marginLeft: `${xgap}` }
  }else if(direction == 'column' && xgap && xgap != '0px' ){
    spacingStyle = { marginBottom: `${xgap}` }
  }

  return (
    // <div className={`l-FlexBox ${align} ${direction} ${flexFlow} ${width100}`}> // parent component 
    <>
      {
        React.Children.map(children, (child, index) => {
          return (
            <>
              {/* <div className={`l-FlexBoxItem ${direction} ${justify}`} style={ index >= 0 &&  index <= (children.length -1 ) ? spacingStyle : {}}> */}
              <div className={`l-FlexBoxItem ${direction} ${justify}`} style={ index >= 0 && index <= (children.length -1 ) ? spacingStyle : {}}>
                {child}
              </div>
              {/* {defaultSeperator && (!isLastItem) ? <NamedSeperator name={defaultSeperator} /> : null} */}
              {Seperator}
            </>
          )
        })
      }
    </>
  )
})