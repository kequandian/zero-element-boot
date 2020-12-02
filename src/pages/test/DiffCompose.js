import React from 'react';
import AutoComponent from '@/components/AutoCombination';

export default function DiffCompose(props) {

  const config = {
    item1: { test: 456, title:'title1' },
    item2: { test: 456, title:'title2' },
    tabs: {},
    layout: {
      name: 'Grid',
      props: {
        col: 1
      },
      children: [
        {
          name: 'DatabaseComparison',
          span: 1,
          gateway: {
            name: 'Gateway',
            props: {
              field: 'item1',
              converter: {
              }
            }
          }
        },
        {
          name: 'DatabaseComparison',
          span: 1,
          gateway: {
            name: 'Gateway',
            props: {
              field: 'item2',
              converter: {
              }
            }
          }
        }
        // ,{
        //   items:{},
        //   name: 'AutoComponent',
        //   layout: {
        //     name: 'Grid',
        //     props: {
        //       col: 2
        //     },
        //     children: [
        //       {
        //         name: 'DiffCompose',
        //       },
        //       {
        //         name: 'DiffCompose',
        //       }
        //     ]
        //   }
        // },
      ]
    },
  };

  return <AutoComponent config={config} /> 

}