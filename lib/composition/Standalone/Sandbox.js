function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState, useEffect } from 'react';
import StandaloneContainer from "./index";
const promiseAjax = require("../../components/utils/request");
// import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';

export default function (props) {
  const params = props.location.query || qs.parse(props.location.search.split('?')[1]);
  const [data, setData] = useState([]);
  const [sign, setSign] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(_ => {
    setSign('');
    setData([]);
    if (params && params.sign) {
      setSign(params.sign);
      getJarList(params.sign);
    } else {
      setErrorMessage('sign 无效');
    }
  }, [params]);
  function getJarList(sign) {
    const api = `/dev/dependency/json?sign=${sign}`;
    const queryData = {};
    promiseAjax(api, queryData).then(resp => {
      if (resp && resp.code === 200) {
        const newData = [];
        resp.data.map((item, index) => {
          const newItem = {};
          newItem.id = index + 1;
          newItem.value = item;
          newData.push(newItem);
        });
        setData(newData);
      } else {
        setErrorMessage('签名错误或已过期!');
      }
    }).catch(err => {
      setErrorMessage('签名错误或已过期!');
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, sign ? /*#__PURE__*/React.createElement(React.Fragment, null, data && data.length > 0 ? /*#__PURE__*/React.createElement(StandaloneContainer, _extends({}, props, {
    sign: params.sign,
    data: data
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '10px'
    }
  }, errorMessage)) : /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '10px'
    }
  }, errorMessage));
}