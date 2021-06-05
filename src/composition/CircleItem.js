import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { Avatar, Title } = require('@/presenter/demo');

export default function Circle(props) {

  const allComponents = {
    Avatar,
    Title
  }

  const config = {
    layout: {
      name: 'Flexbox',
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
        }
      ]
    },
    ...props,
  };

  return (
      <AutoComponent config={config} allComponents={allComponents}/>
  )
}