function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import AutoLayout from "../AutoLayout";
import useTokenRequest from "../hooks/useTokenRequest";
export default function PreAutoLayout(props) {
  // 参数
  const {
    api,
    apiName,
    layoutData,
    layoutApi = '',
    layoutName,
    bindingName,
    layoutId,
    testLayoutName,
    testBindingName,
    ...rest
  } = props;
  const [dataSource, setDataSource] = useState('');
  const [alternativeActive, setAlternativeActive] = useState(false); // 判断 layoutApi 是否为空，如果为空，则用 layoutName 拼接api路径

  let localLayoutApi = '';

  if (layoutApi || layoutName) {
    localLayoutApi = layoutApi || '/openapi/lc/module/getAutoLayout/' + layoutName;
  } else if (layoutId) {
    localLayoutApi = `/form?id=${layoutId}`;
  } //testLayoutName


  const testLayoutJsonUrl = testLayoutName ? `http://192.168.3.207/previewautolayout/${testLayoutName}/layout.json` : '';
  const testLayoutJsonObj = useTokenRequest({
    api: testLayoutJsonUrl
  });
  const testLayoutJsonData = testLayoutJsonObj && testLayoutJsonObj[0] || {}; //testBindingName

  const testBindingJsonUrl = testBindingName ? `http://192.168.3.207/previewautolayout/${testBindingName}/binding.json` : '';
  const testBindingJsonObj = useTokenRequest({
    api: testBindingJsonUrl
  });
  const testBindingJsonData = testBindingJsonObj && testBindingJsonObj[0] && {
    binding: testBindingJsonObj[0]
  } || {}; //根据apiName 获取 API url

  const apiNameUrl = apiName ? `/openapi/lc/apis/${apiName}` : ' ';
  const resApiNameData = useTokenRequest({
    api: apiNameUrl
  });
  const apiNameData = resApiNameData && resApiNameData[0]; // 从api获取显示数据

  const [data] = useTokenRequest({
    api: api || apiNameData.api
  });
  const records = data && data.records ? data.records : data && data.items ? data.items : data || [];
  const dataX = [{
    items: records
  }]; // 从layoutApi获取layoutJson

  const respLayoutData = useTokenRequest({
    api: localLayoutApi
  });
  const respLayoutDataRecords = respLayoutData && respLayoutData[0];
  let bindingApi = bindingName ? `/openapi/lc/bindings/${bindingName}` : ''; // 从bindingApi获取bindingJson

  const respBindingData = useTokenRequest({
    api: bindingApi
  });
  const respBindingJsonData = respBindingData && respBindingData[0];
  const layoutJson = layoutData && typeof layoutData === 'object' && JSON.stringify(layoutData) !== '{}' && layoutData || respLayoutDataRecords && typeof respLayoutDataRecords === 'object' && JSON.stringify(respLayoutDataRecords) !== '{}' && respLayoutDataRecords || testLayoutJsonData;
  /**
   * 页面配置
   */

  const config = {
    items: records && records.length > 0 ? records : [],
    layout: layoutJson,
    ...rest
  }; // 控制台输出信息

  const onPreviewItemClick = item => {
    //TODO
    console.log(item, ' === item');
    setDataSource(item);
    setAlternativeActive(true);
  }; //binding


  const bindingJson = testBindingJsonData && JSON.stringify(testBindingJsonData) !== '{}' && testBindingJsonData || respBindingJsonData && JSON.stringify(respBindingJsonData) !== '{}' && respBindingJsonData || {};
  const alternative = {// alternativeBack: 'BackIndicator',
    // xname: "ItemPlaceholder"
  };

  const onAlterNavBack = () => {
    console.log('返回');
    setDataSource('');
    setAlternativeActive(false);
  };

  return records && records.length > 0 && layoutJson && JSON.stringify(layoutJson) !== '{}' ? /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, {
    onItemClick: onPreviewItemClick,
    binding: bindingJson,
    alternativeActive: alternativeActive,
    alternative: alternative,
    dataSource: dataSource,
    onAlternativeBack: onAlterNavBack
  })) : /*#__PURE__*/React.createElement(React.Fragment, null);
}