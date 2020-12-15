import React, { useState, useEffect } from 'react';

// const AutoComponent = require('@/AutoComponent');
const AutoX = require('@/AutoX');
const presenter = require('@/components/presenter');

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
          ]
        },
        ...props,
      };

      /**
       * <div>
          <AutoX config={config}  allComponents={presenter}/>
        </div>
       *
       <div>
          <AutoX {...props}  allComponents={presenter}/>
        </div>
       */
    
      return (
        <div>
          <AutoX config={config}  allComponents={presenter}/>
        </div>
      )

}