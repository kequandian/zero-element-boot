function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState, useEffect } from 'react';
import AutoLayout from "../AutoLayout";
import useTokenRequest from "../hooks/useTokenRequest";
import { VStack } from '@chakra-ui/react';
const promiseAjax = require("../utils/request");
import SquareAddNew from "../presenter/button/SquareAddNew";
import { LS } from 'zero-element/lib/utils/storage';
export default function PreAutoLayout(props) {
  // 参数
  const {
    api,
    apiName,
    mockName,
    layoutData,
    layoutApi = '',
    layoutName,
    bindingName,
    layoutId,
    testLayoutName,
    testBindingName,
    onItemClick,
    ___,
    previewAddNew,
    ...rest
  } = props;
  const [dataSource, setDataSource] = useState('');
  const [alternativeActive, setAlternativeActive] = useState(false);
  const [_layoutName, setLayoutName] = useState(layoutName || LS.get('commonData').layoutName);
  const [mockData, setMockData] = useState('');
  useEffect(_ => {
    if (mockName) {
      getLayouByMockName(mockName);
    }
  }, [mockName]);
  useEffect(_ => {
    if (layoutName) {
      setLayoutName(layoutName);
    }
  }, [layoutName]);
  function getLayouByMockName(mockName) {
    const api = `/previewautolayout/mock/${mockName}.json`;
    promiseAjax(api).then(resp => {
      setMockData(resp);
    }).finally(_ => {});
  }

  // 判断 layoutApi 是否为空，如果为空，则用 _layoutName 拼接api路径
  let localLayoutApi = '';
  if (layoutApi || _layoutName) {
    localLayoutApi = layoutApi || '/openapi/lc/module/autolayout/' + _layoutName;
  } else if (layoutId) {
    localLayoutApi = `/openapi/crud/lc_low_auto_module/lowAutoModule/lowAutoModules/${layoutId}`;
  }

  //testLayoutName
  const testLayoutJsonUrl = testLayoutName ? `/previewautolayout/${testLayoutName}/layout.json` : '';
  const testLayoutJsonObj = useTokenRequest({
    api: testLayoutJsonUrl
  });
  const testLayoutJsonData = testLayoutJsonObj && testLayoutJsonObj[0] || {};

  //testBindingName
  const testBindingJsonUrl = testBindingName ? `/previewautolayout/${testBindingName}/binding.json` : '';
  const testBindingJsonObj = useTokenRequest({
    api: testBindingJsonUrl
  });
  const testBindingJsonData = testBindingJsonObj && testBindingJsonObj[0] && {
    binding: testBindingJsonObj[0]
  } || {};

  //根据apiName 获取 API url
  const apiNameUrl = apiName ? `/openapi/lc/apis/${apiName}` : '';
  const resApiNameData = useTokenRequest({
    api: apiNameUrl
  });
  const apiNameData = resApiNameData && resApiNameData[0];

  // 从api获取显示数据
  const [data] = useTokenRequest({
    api: api || apiNameData && apiNameData.api || ''
  });
  const records = data && data.records ? data.records : data && data.items ? data.items : data || mockData || [];

  // 从layoutApi获取layoutJson
  const respLayoutData = useTokenRequest({
    api: localLayoutApi
  });
  const respLayoutDataRecords = respLayoutData && respLayoutData[0];
  let bindingApi = bindingName ? `/openapi/lc/binding/${bindingName}` : '';
  // 从bindingApi获取bindingJson
  const respBindingData = useTokenRequest({
    api: bindingApi
  });
  const respBindingJsonData = respBindingData && respBindingData[0];
  const layoutJson = layoutData && typeof layoutData === 'object' && JSON.stringify(layoutData) !== '{}' && layoutData || respLayoutDataRecords && typeof respLayoutDataRecords === 'object' && JSON.stringify(respLayoutDataRecords) !== '{}' && (respLayoutDataRecords.descriptor ? JSON.parse(respLayoutDataRecords.descriptor) : respLayoutDataRecords) || testLayoutJsonData;

  /**
   * 页面配置
   */
  let config = {
    // items: records && records.length > 0 ? records : [],
    // layout: layoutJson,
  };
  if (api && records && records.length > 0) {
    config.items = records;
  } else if (!_layoutName && api) {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  }
  if (layoutJson && layoutJson['layout']) {
    config = {
      ...config,
      ...layoutJson,
      ...rest
    };
  } else if (layoutJson && typeof layoutJson === 'object') {
    config = {
      ...config,
      layout: layoutJson,
      ...rest
    };
  }

  // 控制台输出信息
  const onPItemClick = item => {
    //TODO
    // console.log(item, ' === item')
    if (onItemClick) {
      onItemClick(item);
    }
    if (alternative && JSON.stringify(alternative) !== '{}' || layoutJson.alternative && JSON.stringify(layoutJson.alternative) !== '{}') {
      setDataSource(item);
      setAlternativeActive(true);
    }
  };

  //binding
  const bindingJson = testBindingJsonData && JSON.stringify(testBindingJsonData) !== '{}' && testBindingJsonData || respBindingJsonData && JSON.stringify(respBindingJsonData) !== '{}' && respBindingJsonData || {};
  const alternative = {
    // alternativeBack: 'BackIndicator',
    // xname: "ItemPlaceholder"
  };
  const onAlterNavBack = () => {
    console.log('返回');
    setDataSource('');
    setAlternativeActive(false);
  };
  const previewClick = layoutName => {
    setLayoutName(layoutName);
  };
  const addNewAction = () => {
    //TODO
    console.log('addNewAction');
  };

  // console.log('=== PreAutoLayout config == ', config)

  return /*#__PURE__*/React.createElement(VStack, {
    spacing: 8
  }, layoutJson && JSON.stringify(layoutJson) != '{}' ? /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, {
    onItemClick: onPItemClick,
    binding: bindingJson,
    alternativeActive: alternativeActive,
    alternative: alternative,
    dataSource: dataSource,
    onAlternativeBack: onAlterNavBack,
    ___: ___,
    onAutoPreview: previewClick
  })) : /*#__PURE__*/React.createElement(React.Fragment, null), previewAddNew ? /*#__PURE__*/React.createElement(SquareAddNew, {
    onAddNew: addNewAction,
    ratio: 0.2
  }) : /*#__PURE__*/React.createElement(React.Fragment, null));
}