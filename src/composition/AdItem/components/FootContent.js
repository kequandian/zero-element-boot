import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { Author } = require('@/presenter/demo');

export default function FootContent(props) {

  const allComponents = {
    Author
  }

  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'between',
      },
      children: [
        {
          presenter: 'Author',
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
          presenter: 'Author',
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