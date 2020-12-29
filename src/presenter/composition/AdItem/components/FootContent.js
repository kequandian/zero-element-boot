import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { Title } = require('@/presenter/demo');

export default function FootContent(props) {

  const allComponents = {
    Title
  }

  const config = {
    layout: {
      name: 'Flexbox',
      props: {
        align: 'between',
        direction: 'row',
        itemStyle: {
          // itemAlign: 'v-center'
        }
      },
      children: [
        {
          name: 'Title',
          span: 1,
          gateway: {
            name: 'Gateway',
            props: {
              field: 'title',
              converter: {
                title: 'TitleText'
              }
            }
          }
        },
        {
          name: 'Title',
          span: 1,
          gateway: {
            name: 'Gateway',
            props: {
              field: 'title',
              converter: {
                title: 'TitleText'
              }
            }
          }
        },
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