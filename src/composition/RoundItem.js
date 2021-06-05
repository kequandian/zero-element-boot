import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { Avatar, Title } = require('@/presenter/demo');

export default function RoundItem(props) {

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

  return (
      <AutoComponent config={config} allComponents={allComponents}/>
  )

}