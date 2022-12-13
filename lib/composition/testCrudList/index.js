function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect, useRef } from 'react';
import { ChakraProvider, Box, VStack, Spinner, Switch, FormControl, FormLabel, Tabs, TabList, TabPanels, Tab, TabPanel, Button, useTab, useMultiStyleConfig, Image } from "@chakra-ui/react";
import { useForm } from 'react-hook-form';
import { AutoLayout } from "../../components";
import TabsCompox from "./compx/tabsComps";

const promiseAjax = require("../../components/utils/request");

import layout from "./layout";

require("./index.less");

export default function Index(props) {
  const {} = props;
  const [navCateListData, setNavCateListData] = useState([]);
  const [listData, setListData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [switchStatus, setSwitchStatus] = useState(false);
  const [categoryId, setCategoryId] = useState('');
  const [tabIndex, setTabIndex] = useState(0);
  let navListApi = '/api/pub/data/services/navigation';
  let navApi = '/api/pub/data/services/navCategory?sort=sortNum&orderBy=ASC';
  useEffect(() => {
    console.log('首次加载');
    fetchNavCategoryData(navApi, {});
  }, []);
  let layoutData = '';
  const layoutJsonPath = '';
  const localLayoutJson = layout;

  if (layoutJsonPath) {
    layoutData = {
      path: layoutJsonPath
    };
  } else {
    layoutData = localLayoutJson;
  }

  const config = {
    items: listData,
    layout: layoutData
  }; //获取分类列表信息

  const fetchNavCategoryData = (api, queryData) => {
    setLoading(true);
    let newNavCateList = [];
    return promiseAjax(api, queryData).then(resp => {
      if (resp && resp.code === 200) {
        newNavCateList = resp.data && Array.isArray(resp.data) ? resp.data : resp.data.records; //-1:新增  -2删除

        newNavCateList.push({
          id: '-1'
        });
        newNavCateList.push({
          id: '-2'
        });
        setNavCateListData(newNavCateList);
        setLoading(false);
      } else {
        console.error('获取列表数据失败 ==', resp);
      }
    }).finally(_ => {
      setLoading(false);

      if (newNavCateList.length > 0) {
        setCategoryId(newNavCateList[0].id);
        fetchData(navListApi, {
          typeId: newNavCateList[0].id
        });
      }
    });
  }; //获取列表信息


  const fetchData = (api, queryData) => {
    setLoading(true);
    return promiseAjax(api, queryData).then(resp => {
      if (resp && resp.code === 200) {
        const list = resp.data && Array.isArray(resp.data) ? resp.data : resp.data.records;
        setListData(list);
        setLoading(false);
      } else {
        console.error('获取列表数据失败 ==', resp);
      }
    }).finally(_ => {
      setLoading(false);
    });
  }; //列表item点击事件


  const onNavItemClick = item => {
    // const id = item.id;
    //点击跳转页面
    if (item.url.indexOf('http') != -1) {
      const w = window.open('about:blank');
      w.location.href = item.url;
    } else {
      const w = window.open('about:blank');
      const host = getEndpoint || location.host;
      w.location.href = host + item.url;
    }
  }; //列表item回调函数


  const callback = value => {
    if (value) {
      const queryData = {
        typeId: categoryId
      };
      fetchData(navListApi, queryData);
    }
  }; //列表item回调函数


  const tabscallback = value => {
    if (value) {
      setNavCateListData([]);
      setListData([]);
      fetchNavCategoryData(navApi, {});
    }
  }; //开启/关闭 编辑按钮


  const handleChange = () => {
    const status = !switchStatus;
    setSwitchStatus(status);
    setTabIndex(0);

    if (!status) {
      setNavCateListData([]);
      setListData([]);
      fetchNavCategoryData(navApi, {});
    }
  }; //tab切换


  const switchTab = (item, index) => {
    if (index != tabIndex) {
      setTabIndex(index);
      setCategoryId(item.id);
      const queryData = {
        typeId: item.id
      };
      fetchData(navListApi, queryData);
    }
  }; //自定义tab按钮
  // const CustomTab = React.forwardRef((props, ref) => {
  //     // 1. Reuse the `useTab` hook
  //     const tabProps = useTab({ ...props, ref })
  //     const isSelected = !!tabProps['aria-selected']
  //     // 2. Hook into the Tabs `size`, `variant`, props
  //     const styles = useMultiStyleConfig('Tabs', tabProps)
  //     return (
  //         <Button __css={styles.tab} {...tabProps}>
  //             <Box as='span' mr='1' display='flex' alignItems='center'>
  //                 {isSelected ? <Image src={pluOn} /> : <Image src={pluOff} />}
  //             </Box>
  //             {/* {tabProps.children} */}
  //         </Button>
  //     )
  // })


  function delateAction(data) {
    callback(data);
  }

  function addAction(data) {
    console.log('add action = ', data);
  }

  function updateAction(data) {
    callback(data);
  }

  function indicatedAction(data) {
    console.log('indicated action = ', data);
  }

  return /*#__PURE__*/React.createElement(ChakraProvider, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1000px'
    }
  }, /*#__PURE__*/React.createElement(VStack, {
    align: "stretch",
    spacing: "-2"
  }, /*#__PURE__*/React.createElement(Box, {
    style: {
      margin: '10px 10px 30px 10px',
      paddingLeft: '8px'
    }
  }, /*#__PURE__*/React.createElement(FormControl, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(FormLabel, {
    htmlFor: "email-alerts",
    mb: "0"
  }, "\u7F16\u8F91\u5F00\u5173\uFF1A"), /*#__PURE__*/React.createElement(Switch, {
    isFocusable: true,
    size: "lg",
    onChange: () => handleChange(),
    isChecked: switchStatus
  }))), /*#__PURE__*/React.createElement(Box, null, navCateListData && navCateListData.length > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TabsCompox, {
    items: navCateListData,
    currentTabIndex: tabIndex,
    onSwitchTab: switchTab,
    isSwitch: switchStatus,
    cb: tabscallback
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '10px'
    }
  }, isLoading ? /*#__PURE__*/React.createElement(Spinner, null) : /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, {
    cb: callback,
    onItemClick: onNavItemClick,
    onItemDeleted: delateAction,
    onItemAdded: addAction,
    onItemChanged: updateAction,
    onItemIndicated: indicatedAction,
    isSwitch: switchStatus
  }))))) : null))));
}