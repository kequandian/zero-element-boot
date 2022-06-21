import React, { useImperativeHandle, forwardRef } from 'react'; //CR. 2021-01-13 do not dependens NamedSeperator with layout
//import NamedSeperator from '@/components/NamedSeperator';

require("./index.less");
/**
 * @param {对齐方式: [start, center, end, around, between, start-with-last-end, align-content-center] } align
 * @param {对齐方向: [row, column, row-reverse, column-reverse, no-wrap] } direction
 * @param {子项对齐方式: start, center, end, [full, half, quad]: for item width } justify
 * @param {不换行 [no-wrap] } flexFlow 默认换行
 * @param spacing 间隔
 * @param {ReactElement} Seperator 直接转入的分隔线组件（不引入NamedSeperator依赖）
 * @param {弹性宽度 auto-full = [flex:1] } flexWidth 弹性宽度 flex:1
 * Seperator: 'Divider', 组件名
 * {
      name: 'Divider',
      props:{
          lineType:'solid' 分割线类型
      }
   }
   @param {是否划线} isLastItem
 */


export default /*#__PURE__*/forwardRef(function Flexbox(props, ref) {
  const {
    children,
    align = 'start',
    direction = '',
    flexFlow = '',
    justify = {},
    spacing = 0,
    isLastItem,
    Seperator,
    flexWidth = ''
  } = props;
  const width100 = align == 'between' || align.indexOf("between") != -1 ? 'width100' : '';
  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `l-FlexBox ${align} ${direction} ${flexFlow} ${width100} ${flexWidth}`;
    }
  })); // get named seperator
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

  let spacingStyle = {};

  if (direction == 'row' && spacing > 0) {
    spacingStyle = {
      marginLeft: `${spacing}px`
    };
  } else if (direction == 'column' && spacing > 0) {
    spacingStyle = {
      marginBottom: `${spacing}px`
    };
  }

  return (
    /*#__PURE__*/
    // <div className={`l-FlexBox ${align} ${direction} ${flexFlow} ${width100}`}>
    React.createElement(React.Fragment, null, React.Children.map(children, (child, index) => {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: `l-FlexBoxItem ${direction} ${justify}`,
<<<<<<< HEAD
<<<<<<< HEAD
        style: index >= 0 && index <= children.length - 1 ? spacingStyle : {}
=======
        style: index > 0 && spacing > 0 ? spacingStyle : {}
>>>>>>> b9cf5aac3d9a24b92899e76f29e39133f6f790e3
=======
        style: index >= 0 && index <= children.length - 1 ? spacingStyle : {}
>>>>>>> 63a3bdfbf04a7c1bf4c209da16dbebdd2850363b
      }, child), Seperator);
    }))
  );
});