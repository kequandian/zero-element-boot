import React, { useState, useEffect } from 'react';
import TreeItem from "./TreeItem";
import useTokenRequest from "../../../hooks/useTokenRequest";
import ChildParamstListModal from "./ChildParamstListModal";
export default function DataetBindingAction(props) {
  const {
    datasetName = '',
    moduleName = ''
  } = props;
  const datasetApi = `/openapi/crud/lc_low_auto_module_dataset/module_dataset/${datasetName}`;
  const bindingApi = `/openapi/lc/module/binding/detail?moduleName=${moduleName}`;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [onRefresh, setOnRefresh] = useState(false);
  const [_datasetApi, setDatasetApi] = useState('');
  const [_bindingApi, setBindingApi] = useState('');
  const [currentKeyName, setCurrentKeyName] = useState(false);
  const [currentKeyValue, setCurrentKeyValue] = useState(false);
  useEffect(() => {
    setDatasetApi(datasetApi);
    setBindingApi(bindingApi);
  }, []);
  useEffect(() => {
    if (onRefresh) {
      setOnRefresh(false);
      setDatasetApi(datasetApi);
      setBindingApi(bindingApi);
    }
  }, [onRefresh]);
  const datasetResp = useTokenRequest({
    api: _datasetApi
  });
  const _datasetList = datasetResp && datasetResp[0] || {};
  const bindingResp = useTokenRequest({
    api: _bindingApi
  });
  const _bindingList = bindingResp && bindingResp[0] || {};
  let _datasetObj = {};
  if (_datasetList && Array.isArray(_datasetList) && _datasetList.length > 0) {
    _datasetObj = _datasetList[0];
  } else if (typeof _datasetList === 'object') {
    _datasetObj = _datasetList;
  }

  //清空_datasetObj里的值
  Object.keys(_datasetObj).map(key => _datasetObj[key] = "");

  // 绑定数据
  if (_datasetObj && _bindingList && typeof _bindingList === 'object' && JSON.stringify(_bindingList) !== '{}') {
    Object.keys(_datasetObj).map((_key, _index) => {
      Object.keys(_bindingList).map(_bindingKey => {
        if (_key === _bindingKey) {
          _datasetObj[_key] = _bindingList[_key];
        }
      });
    });
  }
  const modalOpen = (keyName, keyValue) => {
    setIsModalOpen(true);
    setCurrentKeyName(keyName);
    setCurrentKeyValue(keyValue);
  };
  const modalClose = () => {
    setIsModalOpen(false);
  };
  const onCompleted = () => {
    console.log('onCompleted = onCompleted');
    setDatasetApi('');
    setBindingApi('');
    setTimeout(() => {
      setOnRefresh(true);
    }, 100);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, !onRefresh && _datasetObj && JSON.stringify(_datasetObj) != '{}' ? Object.keys(_datasetObj).map((_key, _index) => /*#__PURE__*/React.createElement(TreeItem, {
    key: _index,
    keyName: _key,
    keyValue: _datasetObj[_key],
    onKeyValueClick: modalOpen,
    onCompleted: onCompleted
  })) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement(ChildParamstListModal, {
    isModalOpen: isModalOpen,
    onModalClose: modalClose,
    moduleName: moduleName,
    keyName: currentKeyName,
    keyValue: currentKeyValue,
    onCompleted: onCompleted
  }));
}