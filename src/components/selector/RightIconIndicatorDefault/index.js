import React from 'react';
import checkOff from '@/assets/check_off.svg';
require('./index.less');

/**
 */

export default function Index(props) {

  const { children, defaultStyles={} } = props;

  const styles = {
    position: 'relative',
    margin: '1px 6px 1px 6px',
    padding: '5px',
    backgroundColor: 'transparent',
    borderRadius: '8px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    boxShadow: '0 0px 6px rgba(255, 255, 255, 1)',
    ...defaultStyles
  }


  return (
    <div style={styles}>
      <div className={ 'right_icon_off'} >
        <img src={checkOff} />
      </div>
      {
        React.Children.map(children, child =>{
          return child
        })
      }
  </div>
  
  )
}