import React from 'react';
import { useToast } from '@chakra-ui/react';
import promiseAjax from "../../../utils/request";
import SelectAction from "../SelectAction";
import { LS } from 'zero-element/lib/utils/storage';
export default function NoPresenterAction(props) {
  const {
    selection,
    layoutName = LS.get('commonData'),
    onActionCompleted
  } = props;
  const _layoutName = typeof layoutName === 'object' ? LS.get('commonData').layoutName : layoutName;
  const presenterListApi = `/openapi/lc/module/childModuleList/${_layoutName}?componentOption=presenter`;
  const toast = useToast();
  const itemClick = item => {
    delPresenter(item);
  };

  //新增组件
  const delPresenter = item => {
    const api = '/openapi/lc/module/remove-child-module-of-presenter-option';
    const query = {
      "mainModuleName": _layoutName,
      "removeModuleId": item.id
    };
    return promiseAjax(api, query, {
      method: 'DELETE'
    }).then(resp => {
      if (resp && resp.code === 200) {
        toastTips('删除成功');
        if (onActionCompleted) {
          onActionCompleted(resp.data.moduleName);
        }
      } else {
        toastTips('删除失败', 'error');
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
    onItemClick: itemClick,
    api: presenterListApi
  });
}