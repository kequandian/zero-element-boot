import React from 'react';
import checkOff from '@/assets/check_off.svg';
require('./index.less');

/**
 */

export default  function Index(props) {

  const { children, defaultHoverStyles={} } = props;

  console.log( ' props === ', props)

  const styles = {

    position: 'relative',
    margin: '1px 6px 1px 6px',
    padding: '5px',
    borderRadius: '8px',
    borderWidth: '2px',
    borderStyle: 'solid',

    backgroundColor: '#f1f1f1',
    borderColor: 'transparent',
    boxShadow: '0 0px 6px rgba(255, 255, 255, 1)',
    ...defaultHoverStyles
  }

  return (
    <div style={styles}>
      <div className={ 'right_icon_off'} >
        <img src={checkOff} />
      </div>
      {
        React.Children.map(children, child =>(
          child
        ))
      }
  </div>
  )
}