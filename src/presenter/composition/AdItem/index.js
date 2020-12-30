import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { ImageAnimation } = require('@/presenter/demo');

const TextContext = require('./components/textContent');

const FootContent = require('./components/FootContent');

export default function AdItem(props) {

  const allComponents = {
    ImageAnimation,
    TextContext,
    FootContent
  }

  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'start',
        direction: 'row',
        justify: 'center'
      },
      children: [
        {
          name: 'ImageAnimation',
          span: 1,
          gateway: {
            name: 'Gateway',
            props: {
              field: 'icon',
              converter: {
                icon: 'avatarIcon'
              }
            }
          }
        },
        // {
        //   name: 'TextContext',
        //   span: 1,
        // },
        // {
        //   name: 'FootContent',
        //   span: 1,
        // },
      ]
    },
    ...props,
  };

  // <div style={{ minWidth: '300px', margin: '5px', padding: '20px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>

  return (


    <div style={{ minWidth: '300px', padding: '20px',  }} >
      <AutoComponent config={config} allComponents={allComponents}/>
    </div>
  )

}