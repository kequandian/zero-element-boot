import React from 'react';
import { Button } from "@chakra-ui/react";
import { getEndpoint } from "../../../config/common";

/**
 * 
 */
export default function (props) {
  const {
    downloadApi,
    query = {}
  } = props;
  function formatData() {
    let queryString = '';
    Object.keys(query).forEach(key => {
      queryString += `${key}=${query[key]}`;
    });
    return queryString;
  }

  //跳转新页面下载
  function downloadFile() {
    if (!downloadApi) {
      console.log('未知 api');
      return;
    }
    let queryData = '';
    if (query && JSON.stringify(query) != '{}') {
      queryData = `?${formatData(query)}`;
    }
    let api = `${downloadApi}${queryData}`;
    const w = window.open('about:blank');
    w.location.href = getEndpoint() + api;
  }
  return /*#__PURE__*/React.createElement(Button, {
    colorScheme: "blue",
    onClick: () => downloadFile()
  }, "\u4E0B\u8F7D");
}