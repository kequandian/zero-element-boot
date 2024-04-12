import React, { useState, useEffect } from 'react';
import { bindingConvert } from "../../gateway/Binding";
import { handleFilter } from "../../gateway/doFilter.mjs";
import queryMethod from "../../utils/request";
const useLayout = require("../../hooks/useLayout");

/**
 * @param {string or object} api 获取数据源的 API 或 CRUD API 对象
 * @param {object} converter 转换数据
 * @param {string} converterOption 转换类型 [ binding, filter ]
 * 
 */
export default function ManageServerContainer(props) {
  const {
    children,
    API,
    api = API,
    converter,
    converterOption = 'binding',
    ...rest
  } = props;
  const [layoutRef, {
    getClassName
  }] = useLayout();
  const [data, setData] = useState([]);

  // console.log('APIContainer rest = ', rest)

  useEffect(_ => {
    if (!api) {
      console.error('ManageServerContainer api 为空');
      return;
    }
    if (typeof api === 'string') {
      getList(api);
    } else if (typeof api === 'object') {
      // delete是关键字需要取别名
      const {
        create,
        retrieve,
        update,
        delete: deleteApi,
        query
      } = api;
    }
  }, [api]);
  function getList(api) {
    let _newData = {};
    const queryData = {};
    queryMethod(api, queryData, token).then(responseData => {
      if (responseData && responseData.code === 200) {
        const originData = responseData.data && responseData.data.records || responseData.data || responseData;
        if (converterOption === 'binding' && converter) {
          _newData = bindingConvert(converter, originData);
        } else if (converterOption === 'filter' && converter) {
          _newData = handleFilter(converter, originData);
        } else {
          _newData = originData;
        }
        // console.log('APIContainer _newData = ', _newData)
        setData(_newData);
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: getClassName()
  }, React.Children.toArray(children).map(child => {
    if (data && JSON.stringify(data) != "{}" && JSON.stringify(data) != "[]") {
      return /*#__PURE__*/React.cloneElement(child, {
        ref: layoutRef,
        ...rest,
        dataSource: data
      });
    } else {
      return /*#__PURE__*/React.cloneElement(child, {
        ref: layoutRef,
        ...rest
      });
    }
  }));
}
function regQueryMethod(func) {
  queryMethod = func;
}
export { regQueryMethod };