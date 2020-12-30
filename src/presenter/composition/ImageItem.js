import React from 'react';
const AutoComponent = require('@/components/AutoComponentL2');

const { ImageAnimation } = require('@/presenter/demo');

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
        justify: 'center'
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