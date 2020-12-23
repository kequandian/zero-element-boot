import React from 'react';
const AutoComponentL2 = require('@/components/AutoComponentL2');

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

  return  <AutoComponentL2 config={config} />

}