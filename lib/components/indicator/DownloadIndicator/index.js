import React, { useState } from 'react';
import { Flex, Button } from '@chakra-ui/react'; // import Cart from '@/components/cart/Cart';

import CssCart from "../../cart/CssCart"; // import { download } from 'zero-element/lib/utils/request';

import { formatParams } from "../../utils/tools";
import { getEndpoint } from "../../config/common";
/**
 * 使用例子
 * cart:{},
   indicator:{
    xname:'DownloadIndicator',
    props:{
      action: '/dev/logs/down/log?fileName=(fieldName)'
    },
    binding: {
      "value":"fieldName"
    }
  },
 * 
 * @param { object } indicatorData 为上述 binding 处理的参数
 * @param { string } action 下载API
 * 
 */

export default function Index(props) {
  const {
    children,
    action,
    indicatorData
  } = props;
  const [loading, setLoading] = useState(false);

  function onDownlaod() {
    //old
    // setLoading(true)
    // const downloadUrl = getEndpoint() + formatParams(action, indicatorData)
    // download(downloadUrl, {}).then(rsp => {
    //     console.log('rsp == ', rsp)
    //     // if (message) {
    //     //   msg.success(message);
    //     // }
    //   })
    // .finally(_ => {
    //     setLoading(false);
    // })
    //跳转新页面下载
    const downloadUrl = getEndpoint() + formatParams(action, indicatorData);
    const w = window.open('about:blank');
    w.location.href = downloadUrl;
  }

  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, React.Children.map(children, child => child)), /*#__PURE__*/React.createElement(Button, {
    isLoading: loading,
    colorScheme: "teal",
    variant: "link",
    onClick: () => onDownlaod(),
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(CssCart, {
    width: "20px",
    margin: "auto 6px "
  }, /*#__PURE__*/React.createElement("svg", {
    t: "1669881466959",
    className: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "2339",
    width: "20",
    height: "20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M505.7 661c3.2 4.1 9.4 4.1 12.6 0l112-141.7c4.1-5.2 0.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z",
    "p-id": "2340"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z",
    "p-id": "2341"
  }))))));
}