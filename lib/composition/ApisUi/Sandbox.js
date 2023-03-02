import React, { useState, useEffect } from 'react';
import StandaloneContainer from "./index";

const promiseAjax = require("../../components/utils/request");

import JsonTreePage from "../../components/presenter/tree/JsonTree/Sandbox"; // import useTokenRequest from '@/components/hooks/useTokenRequest';

export default function (props) {
  const params = props.location && (props.location.query || qs.parse(props.location.search.split('?')[1]));
  const [data, setData] = useState([]);
  const [jsonTreeParams, setJsonTreeParams] = useState({});
  useEffect(_ => {
    setData([]);

    if (params.apiName) {
      setJsonTreeParams(params);
    } else {
      getData();
    }
  }, [params]);

  function getData() {
    let apiStr = '/openapi/crud/lc_low_auto_apis/lowAutoApis/lowAutoApises';
    const api = `${apiStr}`;
    const queryData = {
      pageNum: 1,
      pageSize: 10,
      apiMethod: params && params.method || ''
    };
    promiseAjax(api, queryData).then(resp => {
      if (resp && resp.code === 200) {
        setData(resp.data.records);
      } else {
        console.error("获取api 数据失败");
      }
    }).finally(_ => {});
  }

  function delAction(state) {
    if (state) {
      getData();
    }
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, data && data.length > 0 ? /*#__PURE__*/React.createElement(StandaloneContainer, {
    method: params && params.method || '',
    op: params.op,
    data: data,
    onDelAction: delAction
  }) : jsonTreeParams && JSON.stringify(jsonTreeParams) != '{}' ? /*#__PURE__*/React.createElement(JsonTreePage, {
    compParams: jsonTreeParams
  }) : /*#__PURE__*/React.createElement(React.Fragment, null));
}