import React from 'react';
const AutoComponentL2 = require('@/AutoComponentL2');

const requireConfig = require('@/components/Composition/layoutConfig/CartItemLayoutConfig');

export default function CartList(props) {

  const config = {
    layout: {
      name: 'Grid',
      props: {
        col: 3,
      },
      children: [
        {
          name: 'CartItem',
          span: 1,
        },
        {
          name: 'CartItem',
          span: 1,
        },
        {
          name: 'CartItem',
          span: 1,
        },
      ]
    },
  };

  if(!config.layout){
    config.layout = requireConfig.layout;
  }

  return  <AutoComponentL2 config={config} />

}