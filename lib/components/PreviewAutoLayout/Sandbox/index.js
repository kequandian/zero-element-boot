import React, { useState, useEffect } from 'react';
import qs from 'qs';

const promiseAjax = require("../../utils/request");

import PreviewAutoLayout from "./..";
import PreviewItem from "./PreviewItem";
import { useSetState } from 'ahooks';
export default function (props) {
  const params = props.location.query || qs.parse(props.location.search.split('?')[1]); // 获取要显示的数据的接口
  // let api = '/api/crud/fieldModel/fieldModels'

  const [apiPath, setApiPath] = useState('');
  useEffect(_ => {
    getApiUrl();
  }, []);

  function getApiUrl() {
    if (params.api) {
      setApiPath(params.api);
    } else {
      //通过apiName获取API路径
      const api = `/openapi/lc/apis/${params.apiName}`;
      const queryData = {};
      promiseAjax(api, queryData).then(resp => {
        if (resp && resp.code === 200) {
          setApiPath(resp.data.api);
        } else {
          console.error("获取api path 数据失败");
        }
      }).finally(_ => {});
    }
  } // 获取layoutJson的本地接口
  // let layoutJsonApi = '/api/layoutJson'


  let layoutJsonApi = '/openapi/lc/module/getAutoLayOut/autoLayOut'; // if (process.env.NODE_ENV === 'development') {
  //   layoutJsonApi = 'http://192.168.3.112:8080/openapi/lc/module/getAutoLayOut/autoLayOut'
  // }
  // 获取layoutJson的api接口，如果本地接口为空，则会使用该接口请求api
  // let layoutName = 'thisAutoLayout'

  let layoutName = params.layoutName || '';
  const allComponents = {
    PreviewItem
  };
  return /*#__PURE__*/React.createElement(PreviewAutoLayout, {
    api: apiPath,
    layoutApi: layoutJsonApi,
    layoutName: layoutName,
    allComponents: allComponents
  });
}