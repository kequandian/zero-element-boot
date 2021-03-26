import React, { useState, useEffect } from 'react';

require("./index.less");

const promiseAjax = require("../../../utils/request");

export default function CheckboxDemo(props) {
  const {
    onItemClickHandle
  } = props;
  const [data, setData] = useState([]);
  const api = '/api/adList';

  function handleQuery(API, queryData) {
    return promiseAjax(API, queryData).then(response => {
      if (response && response.code === 200) {
        const respDate = response.data;
        respDate.map(item => {
          item.checked = false;
          return item;
        });
        setData(response.data);
      }
    });
  }

  useEffect(_ => {
    handleQuery(api);
  }, []);
  console.log('data = ', data);
  return /*#__PURE__*/React.createElement("div", {
    className: "row"
  });
}