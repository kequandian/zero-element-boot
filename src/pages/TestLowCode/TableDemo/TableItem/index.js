import React from 'react';
import { AutoLayout } from '@/components';


export default function TableItem(props) {
  // const allComponents = {
  //   TableCompx,
  // }

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
      <AutoLayout {...config} />
    </>
  )

}