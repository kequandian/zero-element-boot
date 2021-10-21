import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { Avatar, Title } = require('@/presenter/demo');

export default function SelectUpperRightItem(props) {
  const allComponents = {
    Avatar, Title,
  }
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
          align: 'start',
          direction: 'column',
      },
      children: [
        {
          presenter: 'Avatar',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                avatar: 'url'
              }
            }
          }
        },
        {
          presenter: 'Title',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                name: 'TitleText'
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
      <AutoComponent {...config} allComponents={allComponents} />
    </>
  )

}