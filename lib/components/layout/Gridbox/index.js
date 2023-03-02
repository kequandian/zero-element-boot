import React, { useImperativeHandle, forwardRef } from 'react';

require("./index.less");
/**
 * @param {设置行间距} gridRowGapSize
 * @param {设置列间距} gridColumnGapSize
 * @param { 设置列数, 范围值 1 ~ 15 } columns
 * @param {对齐方向: [row, column, row-reverse, column-reverse, no-wrap] } direction
 * @param {子项对齐方式: start, center, end, [full, half, quad]: for item width } justify
 */


export default /*#__PURE__*/forwardRef(function Gridbox(props, ref) {
  const {
    children,
    gridRowGapSize = '10px',
    gridColumnGapSize = '10px',
    columns = 5,
    direction = '',
    justify = {},
    itemStyle = {}
  } = props;
  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `l-Gridbox gridTemplateColumns_${columns}`;
    }
  })); //<div className='l-Gridbox' style={{ gridRowGap: gridRowGapSize, gridColumnGap: gridColumnGapSize, gridTemplateColumns: `repeat(${gridTemplateColumns}, 1fr)`}}>

  return /*#__PURE__*/React.createElement(React.Fragment, null, React.Children.map(children, (child, index) => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: `l-GridboxItem  ${direction} ${justify}`,
      style: { ...itemStyle
      }
    }, child));
  }));
});