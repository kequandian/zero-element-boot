import React, { useState, useEffect } from 'react';
import { Spinner, Box, VStack, FormControl, Button, useToast } from '@chakra-ui/react';
import { history } from 'umi';
import AutoLayout from "./index";
const promiseAjax = require("../../components/utils/request");
const routeMap = {
  presenter: '/presenters',
  cart: '/carts',
  layout: '/layouts',
  container: '/containers'
};
export default function Index(props) {
  // const { id } = props.location && (props.location.query ||  qs.parse(props.location.search.split('?')[1])) 
  const id = 0;
  const toast = useToast();
  const [items, setItems] = useState('');
  const [isLoading, setLoading] = useState(false);
  useEffect(_ => {
    getData();
  }, []);
  function getData() {
    setLoading(true);
    setItems([]);
    let api = '/openapi/lc/module?componentOption=cart&pageNum=1&pageSize=100';
    const queryData = {};
    promiseAjax(api, queryData).then(resp => {
      // console.log('cart = ', resp)
      if (resp && resp.code === 200) {
        setItems(resp.data.records);
      } else {
        console.error("获取cart数据失败");
        toastTips("获取数据失败");
      }
    }).finally(_ => {
      setLoading(false);
    });
  }

  //保存数据
  function saveData(itemData) {
    let api = '/openapi/lc/module/build-auto-layout/' + id;
    const queryData = {
      addModuleId: itemData.id
    };
    promiseAjax(api, queryData, {
      method: 'PATCH'
    }).then(resp => {
      setLoading(false);
      if (resp && resp.code === 200) {
        toPage(resp.data.nextComponent);
      } else {
        console.error("添加cart失败 = ", resp);
        toastTips("添加失败");
      }
    });
  }

  //返回详情页
  function goViewPage() {
    history.push({
      pathname: '/view',
      query: {
        id
      }
    });
  }

  //获取应该跳转到哪一页
  function getNextDataToPage(itemData) {
    let api = '/openapi/lc/module/build-auto-layout/';
    const queryData = {};
    promiseAjax(api, queryData, {
      method: 'put'
    }).then(resp => {
      setLoading(false);
      if (resp && resp.code === 200) {
        toPage(resp.data.nextComponent);
      } else {
        console.error("获取数据失败 = ", resp);
        toastTips("获取数据失败");
      }
    });
  }
  const itemClick = itemData => {
    // console.log('itemData == ', itemData)
    // saveData(itemData)
  };
  const toPage = nextComponent => {
    const path = routeMap[nextComponent];
    history.push({
      pathname: path,
      query: {}
    });
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

  //跳过单前页, 进入下一步
  const nextPage = () => {
    getNextDataToPage();
  };
  return /*#__PURE__*/React.createElement(VStack, {
    align: "stretch",
    spacing: "-2"
  }, /*#__PURE__*/React.createElement(Box, {
    style: {
      margin: '5px 10px 15px 5px',
      paddingLeft: '8px'
    }
  }, /*#__PURE__*/React.createElement(FormControl, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Button, {
    colorScheme: "teal",
    size: "sm",
    marginRight: '8px',
    onClick: () => goViewPage()
  }, "\u8FD4\u56DE"), /*#__PURE__*/React.createElement(Button, {
    colorScheme: "teal",
    size: "sm",
    onClick: () => nextPage()
  }, "\u8DF3\u8FC7"))), /*#__PURE__*/React.createElement(Box, {
    style: {
      margin: '5px 5px 5px 5px',
      paddingLeft: '8px'
    }
  }, isLoading ? /*#__PURE__*/React.createElement(Spinner, null) : items && items.length > 0 && /*#__PURE__*/React.createElement(AutoLayout, {
    items: items,
    onCartItemClick: itemClick
  })));
}