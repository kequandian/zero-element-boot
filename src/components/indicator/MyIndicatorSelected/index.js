import React, { useImperativeHandle, forwardRef, useState } from 'react';

import selectedIcon from '@/assets/selected2-icon.svg';
require('./index.less');

/**
 */

export default forwardRef(function MyIndicatorSelected(props, ref) {

  const { children, indicate } = props;

  const styles = {
    backgroundColor: 'transparent',
    borderColor: '#aab1dc',
    boxShadow: '0 0px 6px rgba(170, 177, 220, 1)'
  }
  
  useImperativeHandle(ref, () => ({
    getSelectStyles: () => {
      return styles;
    }
  }));

  return React.Children.map(children, child => {

    return (

      <>
        <div>
          {
            indicate ? (
              <div className="upperRightIcon2">
                <img src={selectedIcon} />
              </div>
            ): <></>
          }
          {child}
        </div>
      </>

    )
  })
})