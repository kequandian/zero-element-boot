import React, { useState, useEffect, useRef } from 'react';
import { AutoLayout, APIContainer } from "../..";

/**
 * @param {*} props 
 * @param {string}} listApi 列表api
 */

export default function LowCodeDatasetManageList(props) {
  const {
    children,
    listApi = '',
    ...rest
  } = props;
  const [lsApi, setLsApi] = useState('');
  useEffect(_ => {
    if (listApi) {
      setLsApi(listApi);
    }
  }, [listApi]);
  const layoutJson = {
    "xname": "Gridbox",
    "props": {
      "columns": 4
    },
    "container": {
      "xname": "SelectList",
      "props": {
        // "isSwitch": "true",
        // "btnPisition": "bottom",
        // "selectBtnRatio": 0.05
      }
    },
    "cart": {
      "xname": "Cart",
      "props": {
        "padding": "6px",
        "margin": "6px 0px",
        "linewidth": 0,
        "corner": "0px"
      }
    },
    "selector": {
      "xname": "LeftCheckboxSelector",
      "props": {}
    },
    "presenter": {
      "children": [{
        "xname": "GoogleAvatar",
        "binding": {
          "datasetName": "name"
        }
      }, {
        "xname": "Text",
        "binding": {
          "datasetName": "content"
        },
        "props": {
          "fontSize": "20px"
        }
      }],
      "xname": "HStack",
      "props": {
        "spacing": 8,
        "justify": "center column"
      }
    }
  };
  const config = {
    // items: dataSource,
    layout: layoutJson,
    ...rest
  };
  return /*#__PURE__*/React.createElement(APIContainer, {
    API: lsApi
  }, /*#__PURE__*/React.createElement(AutoLayout, config, children));
}