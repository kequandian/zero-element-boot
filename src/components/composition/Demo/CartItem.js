import React from 'react';
const AutoComponent = require('@/core/AutoComponent');

const { Avatar, Title } = require('@/components/presenter/demo');

export default function CartItem(props) {

  const allComponents = {
    Avatar,
    Title
  }

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
              converter: {
                icon: 'avatarIcon'
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