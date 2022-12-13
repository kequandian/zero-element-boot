import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { Text } = require('@/components/presenter');

export default function FootContent(props) {

  const allComponents = {
    Text
  }

  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'between',
      },
      children: [
        {
          presenter: 'Text',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                adType: 'AuthorValue'
              }
            }
          }
        },
        {
          presenter: 'Text',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                createTime: 'AuthorValue'
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