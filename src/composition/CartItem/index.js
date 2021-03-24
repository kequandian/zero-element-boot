import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { Avatar, Title } = require('@/presenter/demo');

/**
 * 
 * @param {} props 
 */
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
      ], 
      container: 'Cart'
    },
    ...props,
  };

  return (
    <div style={{ minWidth: '300px', padding: '20px',  }} >
      <AutoComponent {...props} allComponents={allComponents}/>
    </div>
  )

}