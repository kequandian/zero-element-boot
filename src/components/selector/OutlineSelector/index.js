import React, { useState } from 'react';
// import useLayout from '@/components/hooks/useLayout';

// 无效果，仅传递数据
import NextIndicator from '@/components/NextIndicator';


/**
 * @param {Boolean} isSelected          是否选中状态，由父组件传递此参数
 * @param {Boolean} selected            是否响应Click事件切换选中状态, 默认值为选中状态
 * @returns 
 */
 export default function OverlaySelector( { children, isSelected=false, selected=false}) {

/**
 * 用于返回React内原生组件的属性集合, 通过ref引用
 */
// const [defaultRef, { getClassName }] = useLayout();
// const [selectRef, { getSelectStyles }] = useLayout();
// const [hoverRef, { getHoverStyles }] = useLayout();

// const [onHover, setOnHover] = useState(false);
const [onSelected, setSelected] = useState(false);

// const toggleHover = () => {
//     const result = !onHover;
//     setOnHover(result)
// }

const toggleSelected = () => {
  const result = !onSelected;
  setSelected(result)
}


const _isSelected = selected ? onSelected : isSelected
// TODO: change div style base on _isSelected state


return React.Children.map(children, child => {
  return (
    <div style={{flex: 1}} onClick={()=>toggleSelected()}>
         {child}
    </div>
    )
  })
}


