import React, { useState } from 'react';
// import useLayout from '@/components/hooks/useLayout';

// 无效果，仅传递数据
import NextIndicator from '@/components/NextIndicator';


/**
 * @param {Boolean} isSelected          是否选中状态，由父组件传递此参数
 * @param {Boolean} selected            是否响应Click事件切换选中状态, 默认值为选中状态
 * @param {Number} lineWidth            线宽
 * @param {String} selected            边框颜色
 * @returns 
 */
 export default function OverlaySelector( { children, isSelected=false, selected=true, lineWidth=2, lineColor='#D9FF00'}) {

/**
 * 用于返回React内原生组件的属性集合, 通过ref引用
 */
// const [defaultRef, { getClassName }] = useLayout();
// const [selectRef, { getSelectStyles }] = useLayout();
// const [hoverRef, { getHoverStyles }] = useLayout();

const [ onSelected, setSelected ] = useState(false);

const toggleSelected = () => {
  const result = !onSelected;
  setSelected(result)
}

const _isSelected = ( selected === true || selected === 'true') ? onSelected : (isSelected === true || isSelected === 'true' ? true : false)
// TODO: change div style base on _isSelected state

const styles = {
  flex: 1,
  border: `${lineWidth}px solid ${ _isSelected ? lineColor : 'transparent'}`,
}

return React.Children.map(children, child => {
  return (
    <div style={{...styles}} onClick={()=>toggleSelected()}>
         {child}
    </div>
    )
  })
}


