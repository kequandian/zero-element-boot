import React, { useImperativeHandle, forwardRef, useState } from 'react';

require('./index.less');

/**
 * line 分割线
 * 参数
 * Seperator: Seperator, 组件名
   props:{
      lineType:'solid' 分割线类型
   }
 */

export default forwardRef(function SelectBox(props, ref) {

  const { children, align = '', direction = '', itemStyle={}, line = {}, isValidLine, item_index, curr_index } = props;

  // itemStyle 控制 child 样式
  const { itemWidth='', itemAlign='' } = itemStyle;

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `l-SelectBox ${align} ${direction}`;
    }
  }));


  //分割线
  const Seperator = line.Seperator;

  function clickItem (props) {
    const { item_index } = props;
    props.onSelected(item_index)
    props.onItemClick(props)
  }

  
  const [onHover, setOnHover] = useState(false);



  return React.Children.map(children, child => {
    const childProps = child.props;

    const { item_index, curr_index } = childProps;

    const toggleHover = () => {
      const result = !onHover;
      setOnHover(result)
    }
  
    const fill = '#ffffff';
    const margin = '0px';
    const padding = '10px'
    let linewidth = '';
    const hoverColor = '#EAEAEA';
    const activeColor = hoverColor;
    const lineColor = '#4285F4';
    let bgColor = `${fill}ff`;
    if (onHover) {
      bgColor = `${hoverColor}80`;
    } else {
      bgColor = `${fill}ff`;
    }

    if(item_index == curr_index){
      bgColor = activeColor;
      linewidth = '3px';
    }

    return (
      <>
        <div className={`l-SelectBoxItem ${itemWidth} ${itemAlign}`} onClick={() => clickItem(childProps)}
          style={{
            position: 'relative',
            margin: `${margin}`,
            padding: `${padding}`,
            backgroundColor: `${bgColor}`,
          }}
          onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}
        >
          {linewidth ? (
            <div style={{position:'absolute', 
            height: '100%',
            left: 0,
            top: 0,
            borderStyle: `solid`,
            borderWidth: `0 0 0 ${linewidth}`,
            borderColor: `${lineColor}`}}></div>
          ): null}

          {child}
        </div>
        {Seperator && isValidLine ? <Seperator {...line.props} /> : null}
      </>

    )
  })
})