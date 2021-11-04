import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { Title, Subtitle, StatisticsList, StatisticalDescription } = require('@/presenter/demo');

import ProgressList from '../ProgressList';

export default function StatisticsBody(props) {
  const allComponents = {
    Title,
    Subtitle,
    StatisticsList,
    StatisticalDescription,
    ProgressList
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
          presenter: 'StatisticalDescription',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                statisticalDescription: 'contentTxt'
              }
            }
          }
        },
        // {
        //   presenter: 'StatisticsList',
        //   gateway: {
        //     xname: 'Binding',
        //     props: {
        //       binding: {
        //         items: 'list'
        //       }
        //     }
        //   }
        // },
        {
          presenter: 'ProgressList',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                items: 'data'
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