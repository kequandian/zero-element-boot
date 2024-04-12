import React, { useState, useEffect } from 'react';
import { Spinner, Box } from '@chakra-ui/react';
import AutoLayout from "./index";
const promiseAjax = require("../../components/utils/request");
export default function Index(props) {
  const {
    id
  } = props.location && (props.location.query || qs.parse(props.location.search.split('?')[1]));
  const [items, setItems] = useState('');
  const [isLoading, setLoading] = useState(false);
  useEffect(_ => {
    getData();
  }, []);
  function getData() {
    setItems([]);
    let api = '/openapi/crud/lc_low_auto_module/lowAutoModule/lowAutoModules/' + id;
    const queryData = {};
    promiseAjax(api, queryData).then(resp => {
      setLoading(false);
      if (resp && resp.code === 200) {
        setItems(resp.data.lowAutoModuleProps || []);
      } else {
        console.error("获取属性数据失败");
      }
    });
  }
  return /*#__PURE__*/React.createElement(Box, {
    w: 400
  }, isLoading ? /*#__PURE__*/React.createElement(Spinner, null) : items && items.length > 0 && /*#__PURE__*/React.createElement(AutoLayout, {
    items: items
  }));
}