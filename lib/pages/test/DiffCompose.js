import React from 'react';

const AutoComponent = require("../../AutoComponent");

export default function DiffCompose(props) {
  const config = {
    item1: {
      test: 456,
      title: 'title1'
    },
    item2: {
      test: 456,
      title: 'title2'
    },
    tabs: {},
    layout: {
      name: 'Grid',
      props: {
        col: 4
      },
      children: [{
        name: 'DatabaseComparison'
      }, {
        name: 'DatabaseComparison'
      } // ,{
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
    }
  };
  return /*#__PURE__*/React.createElement(AutoComponent, {
    config: config
  });
}