import React from 'react';
import { useToast } from '@chakra-ui/react';
import { bindingConvert } from "../../../gateway/Binding";
import doFilter from "../../../gateway/doFilter.mjs";
import promiseAjax from "../../../utils/request";
import SelectAction from "../SelectAction";
import { LS } from 'zero-element/lib/utils/storage';

/**
 * 
 * @param {string} api 提交api
 * @param {object} converter 转换提交的body 
 * @param {string} method 提交方式
 * @param {function} onActionCompleted 访问完成后回调事件
 * 
 */

export default function PreviewSelectAction(props) {
  const {
    selection,
    api,
    method = 'POST',
    converter,
    onActionCompleted
  } = props;
  const toast = useToast();
  const itemClick = item => {
    submitData(item);
  };

  //新增组件
  const submitData = item => {
    // let message = method === 'POST' ? '新增' : method === 'DELETE'? '移除' : '操作'
    let message = '操作';
    if (!api) {
      toastTips('未设置api', 'error');
      return;
    }
    const _api = api;
    let query = {};
    const getStrogeData = LS.get('commonData') || {};
    if (converter && JSON.stringify(converter) != '{}') {
      const bindingData = bindingConvert(converter, {
        ...item,
        ...getStrogeData
      });
      query = doFilter(converter, bindingData);
    }
    return promiseAjax(_api, query, {
      method: method
    }).then(resp => {
      if (resp && resp.code === 200) {
        toastTips(`${message}成功`);
        if (onActionCompleted) {
          onActionCompleted(resp.data);
        }
      } else {
        toastTips(`${message}失败`, 'error');
      }
    }).finally(_ => {});
  };

  // tips
  function toastTips(text, status = 'success') {
    toast({
      title: text,
      description: "",
      status: status,
      duration: 3000,
      isClosable: true,
      position: 'top'
    });
  }
  return /*#__PURE__*/React.createElement(SelectAction, {
    selection: selection,
    onItemClick: itemClick
  });
}