import React, { useState, useEffect } from 'react';
import LogsUi from "./..";
const promiseAjax = require("../../../components/utils/request");
export default function index(props) {
  const params = props.location.query || qs.parse(props.location.search.split('?')[1]);
  const [data, setData] = useState([]);
  const [sign, setSign] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(_ => {
    setSign('');
    setData([]);
    if (params && params.sign) {
      setSign(params.sign);
      getLogList(params.sign);
    } else {
      setSign('sign 无效');
    }
  }, [params]);
  function getLogList(sign) {
    const api = `/dev/logs/json?sign=${sign}`;
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, sign ? /*#__PURE__*/React.createElement(React.Fragment, null, data && data.length > 0 ? /*#__PURE__*/React.createElement(LogsUi, {
    data: data,
    sign: sign
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '10px'
    }
  }, errorMessage)) : /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '10px'
    }
  }, errorMessage));
}