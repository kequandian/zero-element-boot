import React from 'react';

import checkOn from '@/assets/check_on.svg';
require('../index.less');


export default function Index(props) {

  const { children } = props;

  return (
    <>
      <div className={ 'right_icon_on'} >
        <img src={checkOn} />
      </div>
      {
        React.Children.map(children, child =>(
            child
        ))
      }
    </>
  )
}