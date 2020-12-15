function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect } from 'react';

const AutoComponent = require("../../AutoComponent");

const presenter = require("../../components/presenter"); // const { Clean } = require('@/components/presenter')

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
        itemStyle: {
          itemAlign: 'v-center'
        }
      },
      children: [{
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
      }, {
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
      } // {
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
    ...props
  };
  /**
   * <div>
      <AutoComponent config={config}  allComponents={presenter}/>
    </div>
   * 
   
   */

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AutoComponent, _extends({}, props, {
    allComponents: presenter
  })));
}