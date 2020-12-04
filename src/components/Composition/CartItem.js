import React from 'react';
const AutoComponent = require('@/AutoComponent');
import { Layout } from 'antd';
const { Content } = Layout;

const requireConfig = require('@/components/Composition/layoutConfig/CartItemLayoutConfig');

export default function CartItem(props) {

  const config = {
    layout: {
      name: 'Grid',
      props: {
        col: 4,
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
              converter:{
                subTitle: 'text'
              }
            }
          }
        },
      ]
    },
    ...props,
  };

  if(!config.layout){
    config.layout = requireConfig.layout;
  }

  return  <div style={{ minWidth: '300px', margin: '10px 16px', padding: '20px', background: '#FFFFFF', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>
      <AutoComponent config={config} />
  </div> 

}