import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { Title, Subtitle, StatisticsList } = require('@/presenter/demo');

export default function TextContent(props) {
  const allComponents = {
    Title,
    Subtitle,
    StatisticsList
  }

  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        direction: 'column', 
        justify: 'center row'
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
          presenter: 'Subtitle',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                describe: 'contentTxt'
              }
            }
          }
        },
        {
            presenter: 'StatisticsList',
            gateway: {
              xname: 'Binding',
              props: {
                binding: {
                  items: 'list'
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