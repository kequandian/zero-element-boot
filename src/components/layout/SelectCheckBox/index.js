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

export default forwardRef(function SelectCheckBox(props, ref) {

  const { children, align = '', direction = '', justify='', line = {}, isLastItem} = props;

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `l-SelectCheckBox ${align} ${direction}`;
    }
  }));

  //分割线
  const Seperator = line.Seperator;

  function clickItem (props) {
    props.onSelected(props)
    props.onItemClick(props)
  }

  const [onHover, setOnHover] = useState(false);

  return React.Children.map(children, child => {
    const childProps = child.props;

    const { checked } = childProps;

    const toggleHover = () => {
      const result = !onHover;
      setOnHover(result)
    }
  
    const fill = '#ffffff';
    const margin = '6px';
    const padding = '10px'
    const hoverColor = '#EAEAEA';
    const activeColor = hoverColor;
    const lineColor = '#4285F4';
    let bgColor = `${fill}`;
    if (onHover) {
      bgColor = `${hoverColor}80`;
    } else {
      bgColor = `${fill}ff`;
    }

    if(checked){
      bgColor = activeColor;
    }

    return (
      <>
        <div className={`l-SelectCheckBoxItem ${direction} ${align}`} onClick={() => clickItem(childProps)}
          style={{
            position: 'relative',
            margin: `${margin}`,
            padding: `${padding}`,
            backgroundColor: `${bgColor}`,
          }}
          onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}
        >
          {child}
        </div>
        {Seperator && (!isLastItem) ? <Seperator {...line.props} /> : null}
      </>

    )
  })
})