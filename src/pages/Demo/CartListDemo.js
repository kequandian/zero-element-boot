import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

export default function CartList(props) {

  const config = {
    layout: {
      name: 'Flexbox',
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

  return  <AutoComponent config={config} />

}