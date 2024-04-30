import React, { useState, useEffect, useRef } from 'react';
import { AutoLayout, APIContainer } from "../..";

/**
 * @param {*} props 
 * @param {string}} listApi 列表api
 */

export default function DefaultGridLayoutList(props) {
  const {
    children,
    listApi = '',
    columns = '5',
    cartConfig = {},
    hasCart = true,
    hasIndicator = true,
    ...rest
  } = props;
  const [lsApi, setLsApi] = useState(listApi);
  useEffect(_ => {}, []);
  const layoutJson = {
    "xname": "Gridbox",
    "props": {
      "columns": columns
    },
    "container": {
      "xname": "SelectList",
      "props": {
        "isSwitch": "true",
        "btnPisition": "bottom"
      }
    }
    // "cart": {
    //     "xname": "SquareCart",
    //     "props": {
    //         "margin": "5px",
    //         "corner": "8px",
    //         "fill": "#fff",
    //         "ratio": 0.5,
    //         ...cartConfig
    //     }
    // },
  };
  if (hasCart) {
    layoutJson.cart = {
      "xname": "SquareCart",
      "props": {
        "margin": "5px",
        "corner": "8px",
        "fill": "#fff",
        "ratio": 0.5,
        ...cartConfig
      }
    };
  }
  if (hasIndicator) {
    layoutJson.indicator = {
      "xname": "CircularDeleteIndicator",
      "props": {
        "isDisabled": true
      },
      "binding": {
        "id": "id"
      }
    };
  }
  const config = {
    // items: dataSource,
    layout: layoutJson,
    ...rest
  };
  return /*#__PURE__*/React.createElement(APIContainer, {
    API: lsApi,
    converter: rest.converter
  }, /*#__PURE__*/React.createElement(AutoLayout, config, children));
}