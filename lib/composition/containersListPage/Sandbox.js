import React, { useState, useEffect } from 'react';
import { Spinner } from '@chakra-ui/react';
import AutoLayout from "./index";
const promiseAjax = require("../../components/utils/request");
export default function Index(props) {
  const [items, setItems] = useState('');
  const [isLoading, setLoading] = useState(false);
  useEffect(_ => {
    getData();
  }, []);
  function getData() {
    setItems([]);
    let api = '/openapi/lc/module?componentOption=container&pageNum=1&pageSize=100';
    const queryData = {};
    promiseAjax(api, queryData).then(resp => {
      setLoading(false);
      if (resp && resp.code === 200) {
        setItems(resp.data.records);
      } else {
        console.error("获取container数据失败");
      }
    });
  }
  return isLoading ? /*#__PURE__*/React.createElement(Spinner, null) : items && items.length > 0 && /*#__PURE__*/React.createElement(AutoLayout, {
    items: items
  });
}