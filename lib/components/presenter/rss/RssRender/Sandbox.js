import React from 'react';
import useTokenRequest from "../../../hooks/useTokenRequest";
import { HCenter } from "../../../cart";
import RssRender from "./index";
export default function (props) {
  const {} = props;

  //25, 6， 76, 83， 32
  let api = '/api/u/rss/master/32';
  const rsp = useTokenRequest({
    api
  });
  const data = rsp && rsp[0] || "";

  // console.log('data == ', data)

  return data ? /*#__PURE__*/React.createElement(HCenter, null, /*#__PURE__*/React.createElement(RssRender, {
    data: data.content
  })) : /*#__PURE__*/React.createElement(React.Fragment, null);
}