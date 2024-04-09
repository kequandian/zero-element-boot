import React, { useState } from 'react';
import PlacementIndicator from '@/components/indicator/PlacementIndicator'
import NextIndicator from '@/components/NextIndicator';

require('./index.less');

/**
 * @param { function } onPreviewLayout
 * 
 */
export default function PreviewActionIndicator(props) {

  const { children, onPreviewLayout } = props;

  const action = '';
  const [onHover, setOnHover] = useState(false);

  const toggleHover = () => {
    const result = !onHover;
    setOnHover(result)
  }

  let newLineColor = ``;
  let __PlacementIndicator = onHover ? PlacementIndicator : NextIndicator
  if (onHover) {
    newLineColor = '#0078D4'
  } else {
    newLineColor = 'transparent'
  }

  const _indicator = () => {

    return (
      <div>按钮</div>
    )
  }

  return (
    <div style={{width: '100%'}}>
    <__PlacementIndicator Indicator={_indicator} alignment="topRight">
      <div className='i-PreviewActionIndicator' style={{
        borderStyle: `solid`,
        borderWidth: `1px`,
        borderColor: `${newLineColor}`,
        padding: '5px'
      }}
        onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}
      >
        {
          React.Children.map(children, child => (
            child
          ))
        }
      </div>
    </__PlacementIndicator>
    </div>
  )
}