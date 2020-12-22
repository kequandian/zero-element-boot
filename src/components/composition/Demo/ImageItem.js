import React from 'react';
const AutoComponent = require('@/core/AutoComponent');

const { ImageAnimation } = require('@/components/presenter/demo');

export default function ImageItem(props) {

  const allComponents = {
    ImageAnimation
  }

  const config = {
    layout: {
      name: 'Flexbox',
      props: {
        align: 'start',
        direction: 'row',
        itemStyle: {
          itemAlign: 'v-center'
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
      <AutoComponent config={config} allComponents={allComponents} />
    </>
  )

}