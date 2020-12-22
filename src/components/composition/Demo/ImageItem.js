import React from 'react';
const AutoComponent = require('@/core/AutoComponent');

const presenter = require('@/components/presenter/default');

export default function ImageItem(props) {

  const config = {
    layout: {
      name: 'Flexbox',
      props: {
        align: 'start',
        direction: 'row',
        itemStyle:{
          itemAlign:'v-center'
        }
      },
      children: [
        {
          name: 'ImageAnimation',
          gateway: {
            name: 'Gateway',
            props: {
              field: 'avatar',
              converter: {
                avatar: 'imgUrl'
              }
            }
          }
        },
      ]
    },
    ...props,
  };

  return (
    <>
      <AutoComponent config={config} allComponents={presenter}/>
    </>
  )

}