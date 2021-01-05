import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { Title } = require('@/presenter/demo');

export default function FootContent(props) {

  const allComponents = {
    Title
  }

  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'between',
        direction: 'row',
      },
      children: [
        {
          presenter: 'Title',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                adType: 'TitleText'
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
                createTime: 'TitleText'
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
      <AutoComponent {...config} allComponents={allComponents}/>
    </>
  )

}