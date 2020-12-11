import React from 'react';
const AutoComponent = require('@/AutoComponent');

const requireConfig = require('@/components/Composition/layoutConfig/CartItemLayoutConfig');

export default function CartItem(props) {

  const config = {
    layout: {
      name: 'Grid',
      props: {
        col: 1,
      },
      children: [
        {
          name: 'Avatar',
          span: 1,
          gateway: {
            name: 'Gateway',
            props: {
              field: 'icon',
            }
          }
        },
        {
          name: 'Title',
          span: 4,
          gateway: {
            name: 'Gateway',
            props: {
              field: 'title',
            }
          }
        },
        {
          name: 'Detailed',
          span: 4,
          gateway: {
            name: 'Gateway',
            props: {
              field: 'subTitle',
              converter: {
                subTitle: 'text'
              }
            }
          }
        },
      ]
    },
    ...props,
  };

  if (!config.layout) {
    config.layout = requireConfig.layout;
  }

  // <div style={{ minWidth: '300px', margin: '5px', padding: '20px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>

  return (


    <div style={{ minWidth: '300px', padding: '20px',  }}>
      <AutoComponent config={config} />
    </div>
  )

}