import React from 'react';

import checkOff from '@/assets/check_off.svg';
require('./index.less');

/**
 * CircularCheckboxIndicator 右侧圆形Checkbox的选择框
 * @param {*} props 
 * @returns 
 */
export default function CircularCheckboxIndicator(props) {

  const { children } = props;

  return (
    <>
      <div className={ 'right_icon_off'} >
        <img src={checkOff} />
      </div>
      {
        React.Children.map(children, child =>{
          return child
        })
      }
  </>
  )
}