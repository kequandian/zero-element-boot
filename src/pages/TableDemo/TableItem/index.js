import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { TableCompx } = require('@/presenter/demo');

export default function TableItem(props) {
  const allComponents = {
    TableCompx,
  }

  console.log('TableItem = ', props)
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        direction: 'row'
      },
      children: [
        {
          presenter: 'TableCompx',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
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