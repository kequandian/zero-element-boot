import React, { useState, useEffect } from 'react';

const AutoComponent = require('@/AutoComponent');
const presenter = require('@/components/presenter');

// const { Clean } = require('@/components/presenter')

/**
 * 样式参考
 * https://codepen.io/dianachoi/pen/NaqebB 
 */

export default function PresenterDemo(props) {

    const config = {
        layout: {
          name: 'Flexbox',
          props: {
            align: 'start',
            direction: 'row',
            itemStyle:{
              itemAlign:'v-center',
            }
          },
          children: [
            {
              name: 'Clean',
              gateway: {
                name: 'Gateway',
                props: {
                  field: 'avatar',
                  converter: {
                    avatar: 'avatarIcon'
                  }
                }
              }
            },
            {
              name: 'Butter',
              gateway: {
                name: 'Gateway',
                props: {
                  field: 'account',
                  converter: {
                    account: 'TitleText'
                  }
                }
              }
            },
            // {
            //   name: 'Detailed',
            //   span: 4,
            //   gateway: {
            //     name: 'Gateway',
            //     props: {
            //       field: 'subTitle',
            //       converter: {
            //         subTitle: 'text'
            //       }
            //     }
            //   }
            // },
          ]
        },
        ...props,
      };
    
      return (
        <div>
          <AutoComponent config={config}  allComponents={presenter}/>
        </div>
      )

}