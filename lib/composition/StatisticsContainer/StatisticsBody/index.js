function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const AutoComponent = require("../../../components/AutoComponent");

const {
  Title,
  Subtitle,
  StatisticsList,
  StatisticalDescription
} = require("../../../presenter/demo");

import ProgressList from "../ProgressList";
export default function StatisticsBody(props) {
  const allComponents = {
    Title,
    Subtitle,
    StatisticsList,
    StatisticalDescription,
    ProgressList
  };
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        direction: 'column',
        justify: 'center row'
      },
      children: [{
        presenter: 'Title',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              title: 'TitleText'
            }
          }
        }
      }, {
        presenter: 'Subtitle',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              describe: 'contentTxt'
            }
          }
        }
      }, {
        presenter: 'StatisticalDescription',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              statisticalDescription: 'contentTxt'
            }
          }
        }
      }, // {
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
      // {
      //   presenter: 'ProgressList',
      //   gateway: {
      //     xname: 'Binding',
      //     props: {
      //       binding: {
      //         items: 'data'
      //       }
      //     }
      //   }
      // },
      {
        presenter: {
          xname: 'Flexbox',
          props: {
            align: 'start',
            direction: 'column'
          },
          presenter: 'PregressBody',
          cart: {
            xname: 'Cart',
            props: {
              isOnHover: false,
              margin: '2px 0px 2px 0px',
              linewidth: 0,
              padding: '0px'
            }
          },
          container: 'PlainList'
        },
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              items: 'items'
            }
          }
        }
      }]
    },
    ...props
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AutoComponent, _extends({}, config, {
    allComponents: allComponents
  })));
}