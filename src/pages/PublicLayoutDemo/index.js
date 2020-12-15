import React, { useState, useEffect } from 'react';

// const AutoX = require('@/AutoX');
const AutoComponent = require('@/AutoComponent');
const presenter = require('@/components/presenter');

/**
 * 样式参考
 * https://codepen.io/dianachoi/pen/NaqebB 
 */

export default function PresenterDemo(props) {

  const config = {
    cfgLayout:{
      path:'PublicLayoutDemo'
    }
  }

      return (
        <div>
          <AutoComponent config={config}   allComponents={presenter}/>
        </div>
      )

}