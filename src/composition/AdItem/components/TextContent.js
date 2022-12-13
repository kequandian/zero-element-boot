import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { Title, Description } = require('@/components/presenter');

export default function TextContent(props) {

  const allComponents = {
    Title,
    Description
  }

  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'start',
        direction: 'column', 
        justify: 'full'
      },
      children: [
        {
          presenter: 'Title',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                title: 'TitleText'
              }
            }
          }
        },
        {
          presenter: 'Description',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                describe: 'TextValue'
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