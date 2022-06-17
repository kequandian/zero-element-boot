function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect } from 'react';
import PreviewAutoLayout from "./..";
import PreviewItem from "./PreviewItem";
export default function (props) {
  // 获取要显示的数据的接口
  let api = '/api/crud/fieldModel/fieldModels'; // 获取layoutJson的本地接口

  let layoutJsonApi = '/api/layoutJson'; // let layoutJsonApi = ''
  // 获取layoutJson的api接口，如果本地接口为空，则会使用该接口请求api
  // let layoutName = 'thisAutoLayout'

  let layoutName = '';
  const allComponents = {
    PreviewItem
  };
  return /*#__PURE__*/React.createElement(PreviewAutoLayout, _extends({
    api: api,
    layoutApi: layoutJsonApi,
    layoutName: layoutName,
    allComponents: allComponents
  }, props));
}