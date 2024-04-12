function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState, useEffect } from 'react';
import { ChakraProvider, Flex, Center, Box, Stack, Spacer, VStack, Container, Button, Input, Select, Tabs, TabList, TabPanels, Tab, TabPanel, FormControl, FormLabel, Switch, Spinner, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverAnchor, Portal, Grid, HStack, sm, closeOnEsc, Textarea, Tooltip, useToast } from "@chakra-ui/react";
import { AutoLayout } from "../../components";
// import AutoLayout from '../AutoLayout';
import Loading from "../../components/loading";
const promiseAjax = require("../../components/utils/request");
// import config from 'zero-element-boot\lib\components\config'
import layout from "./layout";
require("./index.less");
import { setEndpoint, setToken, getEndpoint } from "../../components/config/common";
export default function Index(props) {
  const toast = useToast();
  const {
    data = []
  } = props;

  //路由路径参数
  const params = props.location && (props.location.query || qs.parse(props.location.search.split('?')[1]));
  const {
    sign
  } = params;
  const [isShowList, setIsShowList] = useState(true);
  const [isShowData, setIsShowData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showDetail, setDetail] = useState('');
  const [dataSheetItemDetail, setDataSheetItemDetail] = useState({});
  const [currentItemName, setCurrentItemName] = useState('');
  const [switchStatus, setSwitchStatus] = useState(true);
  const [showsetcontent, setmycontent] = useState('');
  const [showybutton, setmybutton] = useState(false);
  const [showRulercontent, setRulercontent] = useState('');
  const [showmySign, setmySign] = useState('');
  const [showRulertitle, setRulercode] = useState('');
  const [showtitle, settitle] = useState('');
  useEffect(_ => {
    signWay(params.sign);
  }, [params]);

  // const [showSign,setSigncntent] = serState('')

  let layoutData = '';
  const layoutJsonPath = '';
  const localLayoutJson = layout;

  // 用于下载
  // if (process.env.NODE_ENV === 'development') {
  //   URL = `http://demo.smallsaas.cn:8001`;
  // }

  if (layoutJsonPath) {
    layoutData = {
      path: layoutJsonPath
    };
  } else {
    layoutData = localLayoutJson;
  }
  const config = {
    items: data.length > 0 ? data : [],
    layout: layoutData
  };
  const onJarItemClick = item => {
    console.log(item, ' === item');
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
    let name = item.value;
    // if(name.indexOf('/') > -1){
    //     const list = name.split('/');
    //     name = list[list.length-1]
    // }

    if (name.indexOf('@') > -1) {
      const list = name.split('@');
      name = list[0];
    }
    setDetail([]);
    getDetailFetch(name, 1);
  };

  // //
  // const getDetailFetch = async (name, num) => {
  //   if (num == 1) {
  //     setCurrentItemName(name)
  //   }
  //   // const api = `http://localhost:8080/api/dev/dependency/decompile`;
  //   setIsShowList(false)
  //   setIsLoading(true)
  //   promiseAjax(api, { pattern: name }, {})
  //     .then(responseData => {
  //       if (responseData && responseData.code === 200) {
  //         let respData = responseData.data;
  //         setDetail(respData);
  //         setIsShowData(true)

  //       } else {
  //         setIsShowList(true)
  //         setIsShowData(false)
  //       }
  //       setIsLoading(false)
  //     })

  // }
  // console.log(statenum);

  //输入sign框 点击数据表 按钮 获取数据表
  function signWay(sign) {
    if (!sign) {
      setmySign('');
      return;
    }
    setmySign(sign);
    getconnection(sign);
    //签名文本框定时获取焦点
    SignText();
  }
  //全局添加sign签名
  var signdata = '';
  const signcontent = m => {

    // signdata = m
    // setmySign(signdata)
    // console.log();
  };

  //获取所有表
  function getconnection(sign) {
    let api = `/dev/connection?sign=${sign}`;
    setIsShowList(false);
    setIsLoading(true);
    promiseAjax(api).then(responseData => {
      if (responseData && responseData.code === 200) {
        let respData = responseData.data;
        setDetail(respData);
        setIsShowData(true);
        setmybutton(false);
        // console.log(respData);
      } else {
        setIsShowList(true);
        setIsShowData(false);
        alert('签名已过期!');
      }
      setIsLoading(false);
    }).catch(err => {
      alert('签名已过期!');
    });
  }
  //获取数据库快照

  function getBaseSt() {
    getBaseStWay();
  }
  function getBaseStWay() {
    let api = `/dev/connection/snapshot?sign=${showmySign}`;
    setIsShowList(false);
    setIsLoading(true);
    promiseAjax(api).then(responseData => {
      if (responseData && responseData.code === 200) {
        let respData = responseData.data;
        setDetail(respData);
        setIsShowData(true);
        setmybutton(false);
        // console.log(respData);
      } else {
        setIsShowList(true);
        setIsShowData(false);
      }
      setIsLoading(false);
    });
  }

  //数据库下载--
  function downFiles(content) {
    downFileanniu(content);
  }
  function downFileanniu(content) {
    let api = `/dev/connection/snapshot/instant?sign=${showmySign}&ruler=${content}`;
    const w = window.open('about:blank');
    w.location.href = api;
    console.log(api);
    setSwitchStatus(false);
  }

  //获取规则
  function signgetRulerWay() {
    getRuler();
    //签名文本框定时获取焦点
    SignText();
  }
  function getRuler() {
    let api = `/dev/connection/snapshot/rulers?sign=${showmySign}`;
    setIsShowList(false);
    setIsLoading(true);
    promiseAjax(api).then(responseData => {
      if (responseData && responseData.code === 200) {
        let respData = responseData.data;
        setDetail(respData);
        setDataSheetItemDetail([]);
        setIsShowData(true);
        setmybutton(true);

        // console.log(respData);
        // setRulertitle(respData)
      } else {
        setIsShowList(true);
        setIsShowData(false);
      }
      setIsLoading(false);
    });
  }

  //新建规则
  function newRuler() {
    newRulerWay(ruler, rulercontent);
  }

  //文本信息
  var ruler = '';
  const setrulers = n => {
    ruler = n;
  };
  var rulercontent = '';
  const setcondatas = m => {
    rulercontent = m;
  };

  //搜索按钮--获取返回的数据 //新建、更新方法
  function newRulerWay(ruler, rulercontent) {
    let api = `/dev/connection/snapshot/rulers/${ruler}?sign=${showmySign}`;

    //字符串转化成JSON
    // console.log(api);
    let rulerdata = JSON.parse(rulercontent);
    promiseAjax(api, rulerdata, {
      method: 'POST'
    }).then(responseData => {
      {
        if (responseData && responseData.code === 200) {
          let respdata = responseData.data;
          // console.log(respdata);
          setDetail(respdata);
          setIsShowData(true);
          setSwitchStatus(false);
          alert('新建成功！');
        } else {
          setIsShowList(true);
          setIsShowData(false);
        }
        setIsLoading(false);
      }
    });
  }

  //更新规则

  function updataName() {
    updataRulerWay(showtitle, condata);
  }

  //文本信息
  var content = '';
  const setcontent = n => {
    settitle(n);
    console.log(settitle);
  };
  var condata = '';
  const setcondata = m => {
    condata = m;
  };

  //搜索按钮--获取返回的数据 更新方法
  function updataRulerWay(content, condata) {
    let api = `/dev/connection/snapshot/rulers/${content}?sign=${showmySign}`;

    //字符串转化成JSON

    let rulerdata = JSON.parse(condata);
    promiseAjax(api, rulerdata, {
      method: 'POST'
    }).then(responseData => {
      {
        if (responseData && responseData.code === 200) {
          let respdata = responseData.data;
          setDetail(respdata);
          setIsShowData(true);
          setSwitchStatus(false);
          setRulercontent(respdata);
          console.log(respdata);
          alert('更新成功！');
        } else {
          setIsShowList(true);
          setIsShowData(false);
        }
        setIsLoading(false);
      }
    });
  }

  //

  //根据规则(ruler)保存数据库快照到服务器本地
  function Localrule(content) {
    LocalruleStorage(content);
  }

  //方法
  function LocalruleStorage(content) {
    let api = `/dev/connection/snapshot?sign=${showmySign}&ruler=${content}`;
    console.log(api);
    promiseAjax(api, {}, {
      method: 'POST'
    }).then(responseData => {
      {
        if (responseData && responseData.code === 200) {
          let respData = responseData.data;
          // console.log(respData);
          setDetail(respData);
          setIsShowData(true);
        } else {
          setIsShowList(true);
          setIsShowData(false);
        }
        setIsLoading(false);
      }
    });
  }

  //根据规则(ruler)页面输出当前的数据库快照内容
  function printData(content) {
    printDataWay(content);
  }

  //方法
  function printDataWay(content) {
    let api = `/dev/connection/snapshot/print/json?sign=${showmySign}&ruler=${content}`;
    console.log('api：' + api);
    promiseAjax(api).then(responseData => {
      if (responseData && responseData.code === 200) {
        let respData = responseData.data;
        console.log(respData);
        setDetail(respData);
        setIsShowData(true);
      } else {
        setIsShowList(true);
        setIsShowData(false);
      }
      setIsLoading(false);
    });
  }

  // 查看具体的命名规则的配置详情
  function RulerDeploy(content) {
    RulerDeployWay(content);
  }

  //查看具体的命名规则的配置详情//方法
  function RulerDeployWay(content) {
    let api = `/dev/connection/snapshot/rulers/json/${content}?sign=${showmySign}`;
    console.log(api);
    promiseAjax(api).then(responseData => {
      if (responseData && responseData.code === 200) {
        let respData = responseData.data;
        // respData = respData.replace(/[\'\\\\/\b\f\n\r\t]/g, '');
        // let respDataJSON = JSON.stringify(respData)
        // setDetail(respData);
        // let respData = jqdata.toString()
        // let reg = /[,，]/g;

        // respData = respData.replace(reg, "$&\r\n");
        setDetail(respData);
        console.log(respData);
        setIsShowData(true);
      } else {
        setIsShowList(true);
        setIsShowData(false);
      }
      setIsLoading(false);
    });
  }

  //根据规则名删除规则
  function deleteRulerData(content) {
    deleteDatatWay(content);
  }
  function deleteDatatWay(content) {
    let api = `/dev/connection/snapshot/rulers/${content}?sign=${showmySign}`;
    console.log(api);
    promiseAjax(api, {}, {
      method: 'DELETE'
    }).then(responseData => {
      {
        if (responseData && responseData.code === 200) {
          let respData = responseData.data;
          // console.log(respData);
          setDetail(respData);
          setIsShowData(true);
        } else {
          setIsShowList(true);
          setIsShowData(false);
        }
        setIsLoading(false);
      }
    });
  }
  function downSnapshot(content) {
    // console.log(content);
    printdataBaseSWay(content);
    // console.log(signdata);
    getBaseSt();
  }

  // //下载snapshot文件
  function printdataBaseSWay(content) {
    let api = `/dev/connection/snapshot/dl?sign=${showmySign}&pattern=${content}`;
    const w = window.open('about:blank');
    const host = getEndpoint() || location.host;
    w.location.href = host + api;
    console.log(host + api);
  }

  //删除保存在本地的快照文件
  function deleteBase(content) {
    deleteBaseWay(content);
  }
  function deleteBaseWay(content) {
    let api = `/dev/connection/snapshot/${content}?sign=${showmySign}`;
    console.log(api);
    promiseAjax(api, {}, {
      method: 'DELETE'
    }).then(responseData => {
      {
        if (responseData && responseData.code === 200) {
          let respData = responseData.data;
          // console.log(respData);
          setDetail(respData);
          setIsShowData(true);
        } else {
          setIsShowList(true);
          setIsShowData(false);
        }
        setIsLoading(false);
      }
    });
  }

  //获取images接口文件列表
  function getImages(content) {
    getImagesWay(content);
    //签名文本框定时获取焦点
    SignText();
  }
  function getImagesWay(content) {
    let api = `/dev/connection/images?sign=${showmySign}`;
    setIsShowList(false);
    setIsLoading(true);
    promiseAjax(api).then(responseData => {
      if (responseData && responseData.code === 200) {
        let respData = responseData.data;
        setDetail(respData);
        setDataSheetItemDetail([]);
        setIsShowData(true);
        setmybutton(false);
      } else {
        setIsShowList(true);
        setIsShowData(false);
      }
      setIsLoading(false);
    });
  }

  //获取

  //获取images接口文件列表
  function getshow(content, isDataSheetDetail = false) {
    if (isDataSheetDetail) {
      return;
    }
    getshowWay(content);
    //签名文本框定时获取焦点
    SignText();
  }
  function getshowWay(item) {
    let api = `/dev/connection/json?sign=${showmySign}&pattern=${item}`;
    // let api = `/dev/connection/schema/json?pattern=${item}`;
    setIsShowList(false);
    setIsLoading(true);
    promiseAjax(api).then(responseData => {
      if (responseData && responseData.code === 200) {
        let respData = responseData.data;
        let resData = JSON.stringify(respData);
        let resDataJS = JSON.parse(resData);
        setDetail([]);
        setDataSheetItemDetail(resDataJS);
        setIsShowData(true);
      } else {
        setIsShowList(true);
        setIsShowData(false);
      }
      setIsLoading(false);
    });
  }

  //更新规则
  function getRulerContent(content) {
    settitle(content);
    getRulerContentWay(content);
    //签名文本框定时获取焦点
  }
  function getRulerContentWay(name) {
    let api = `/dev/connection/snapshot/rulers/json/${name}?sign=${showmySign}`;
    promiseAjax(api).then(responseData => {
      if (responseData && responseData.code === 200) {
        let resData = responseData.data;
        setRulercontent(resData);
        console.log(resData);
      }
    });
  }
  //签名文本框定时获取焦点
  function SignText() {
    // setTimeout(() => {
    //   document.getElementById('mysignText').focus()
    // }, 0);
  }

  //处理返回内容
  function handleContent(data, isDataSheetDetail = false) {
    if (typeof data === 'string') {
      return data;
    }
    if (data instanceof Array && data.length > 0) {
      return /*#__PURE__*/React.createElement(Stack, {
        spacing: "3px"
      }, data.map((item, index) => {
        if (item.indexOf(".sql") > -1) {
          // onMouseMove={out()}
          return /*#__PURE__*/React.createElement("div", {
            key: `${index}_item`
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              position: 'absolute',
              left: '20px',
              marginTop: '6px'
            }
          }, "  ", /*#__PURE__*/React.createElement("a", {
            href: "#"
          }, item)), /*#__PURE__*/React.createElement("div", {
            style: {
              position: 'relative',
              left: '150px',
              marginTop: '6px'
            }
          }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tooltip, {
            label: "\u4E0B\u8F7Dsnapshot\u6587\u4EF6",
            placement: "top"
          }, /*#__PURE__*/React.createElement(Button, {
            size: 'xs',
            colorScheme: 'blue',
            left: "10px",
            onClick: () => downSnapshot(item)
          }, "\u4E0B\u8F7D"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tooltip, {
            label: "\u5220\u9664\u4FDD\u5B58\u5728\u672C\u5730\u7684\u5FEB\u7167\u6587\u4EF6",
            placement: "top"
          }, "   "), /*#__PURE__*/React.createElement(Popover, null, /*#__PURE__*/React.createElement(PopoverTrigger, null, /*#__PURE__*/React.createElement(Button, {
            size: 'xs',
            colorScheme: 'red',
            left: "20px"
          }, "\u5220\u9664")), /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(PopoverContent, null, /*#__PURE__*/React.createElement(PopoverArrow, null), /*#__PURE__*/React.createElement(PopoverHeader, null, "\u786E\u5B9A\u5220\u9664\u8BE5\u5FEB\u7167\u6587\u4EF6\u5417\uFF1F"), /*#__PURE__*/React.createElement(PopoverCloseButton, null), /*#__PURE__*/React.createElement(PopoverBody, null, /*#__PURE__*/React.createElement(Button, {
            onClick: () => deleteBase(item)
          }, "\u786E\u5B9A")), /*#__PURE__*/React.createElement(PopoverFooter, null)))))))));
        } else {
          if (item.indexOf("ruler") > -1) {
            return /*#__PURE__*/React.createElement("div", {
              key: `${index}_item`
            }, /*#__PURE__*/React.createElement(Tooltip, {
              label: "\u67E5\u770B\u8BE5\u89C4\u5219\u7684\u914D\u7F6E\u8BE6\u60C5",
              placement: "top"
            }, /*#__PURE__*/React.createElement("div", {
              style: {
                position: 'absolute',
                left: '20px',
                marginTop: '6px'
              }
            }, /*#__PURE__*/React.createElement("a", {
              href: "#",
              onClick: () => RulerDeploy(item)
            }, item))), /*#__PURE__*/React.createElement(Box, {
              style: {
                position: 'relative',
                left: '150px',
                marginTop: '6px'
              }
            }, /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(Popover, null, /*#__PURE__*/React.createElement(PopoverTrigger, null, /*#__PURE__*/React.createElement(Button, {
              size: 'xs',
              colorScheme: 'blue',
              left: "6px",
              onClick: () => getRulerContent(item)
            }, "\u66F4\u65B0\u89C4\u5219")), /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(PopoverContent, {
              left: '500px'
            }, /*#__PURE__*/React.createElement(PopoverArrow, null), /*#__PURE__*/React.createElement(PopoverHeader, null, "\u66F4\u65B0\u89C4\u5219\u5185\u5BB9"), /*#__PURE__*/React.createElement(PopoverCloseButton, null), /*#__PURE__*/React.createElement(PopoverBody, null, /*#__PURE__*/React.createElement(Input, {
              placeholder: "\u89C4\u5219\u540D",
              value: showtitle,
              onChange: N => setcontent(N.target.value)
            }), /*#__PURE__*/React.createElement(Textarea, {
              marginTop: '10px',
              height: '200px',
              onMouseOut: N => setcondata(N.target.value),
              defaultValue: showRulercontent
            }), /*#__PURE__*/React.createElement(Button, {
              colorScheme: 'blue',
              marginTop: '10px',
              left: "120px",
              onClick: () => updataName()
            }, "\u4FDD\u5B58"))))), /*#__PURE__*/React.createElement(Tooltip, {
              label: "\u4E0B\u8F7D\u6570\u636E\u5E93\u5FEB\u7167",
              placement: "top"
            }, /*#__PURE__*/React.createElement(Button, {
              size: 'xs',
              colorScheme: 'blue',
              left: "20px",
              onClick: () => downFiles(item)
            }, "\u5B9E\u65F6\u5907\u4EFD")), /*#__PURE__*/React.createElement(Tooltip, {
              label: "\u6570\u636E\u5E93\u6267\u884C\u4FDD\u5B58\u5230\u89C4\u5219\u5FEB\u7167",
              placement: "top"
            }, /*#__PURE__*/React.createElement(Button, {
              size: 'xs',
              colorScheme: 'blue',
              left: "30px",
              onClick: () => Localrule(item)
            }, "\u6267\u884C")), /*#__PURE__*/React.createElement(Tooltip, {
              label: "\u9875\u9762\u8F93\u51FA\u8BE5\u89C4\u5219\u7684\u6570\u636E\u5E93\u5FEB\u7167",
              placement: "top"
            }, /*#__PURE__*/React.createElement(Button, {
              size: 'xs',
              colorScheme: 'blue',
              left: "40px",
              onClick: () => printData(item)
            }, "\u8F93\u51FA")), /*#__PURE__*/React.createElement(Popover, null, /*#__PURE__*/React.createElement(PopoverTrigger, null, /*#__PURE__*/React.createElement(Button, {
              size: 'xs',
              colorScheme: 'red',
              left: "50px"
            }, "\u5220\u9664")), /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(PopoverContent, null, /*#__PURE__*/React.createElement(PopoverArrow, null), /*#__PURE__*/React.createElement(PopoverHeader, null, "\u786E\u5B9A\u5220\u9664\u8BE5\u89C4\u5219\u5417\uFF1F"), /*#__PURE__*/React.createElement(PopoverCloseButton, null), /*#__PURE__*/React.createElement(PopoverBody, null, /*#__PURE__*/React.createElement(Button, {
              onClick: () => deleteRulerData(item)
            }, "\u786E\u5B9A")), /*#__PURE__*/React.createElement(PopoverFooter, null)))))));
          } else {
            return /*#__PURE__*/React.createElement(Container, {
              onClick: () => getshow(item, isDataSheetDetail),
              maxW: "container.xl",
              key: `${index}_item`
            }, !isDataSheetDetail ? /*#__PURE__*/React.createElement("div", {
              className: "data-sheet-item"
            }, item) : /*#__PURE__*/React.createElement("div", null, item));
          }
        }
      }));
    }
  }
  function signErrorTips() {
    return toast({
      position: 'top',
      title: 'sign无效',
      status: 'warning',
      duration: 3000,
      isClosable: true
    });
  }
  return /*#__PURE__*/React.createElement(ChakraProvider, null, !showmySign ? /*#__PURE__*/React.createElement(Box, {
    margin: "10px"
  }, "sign \u65E0\u6548") : /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(VStack, {
    spacing: "3px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: '800px',
      width: '100%',
      height: '20px',
      lineHeight: '60px',
      backgroundColor: '#ffffff',
      padding: '20px 10px 10px 25px'
    }
  }, /*#__PURE__*/React.createElement(Stack, {
    direction: ['column', 'row'],
    w: "100%",
    spacing: "10px"
  }, currentItemName ? /*#__PURE__*/React.createElement(Button, {
    h: "35px",
    colorScheme: "blue",
    onClick: () => getDetailFetch(currentItemName, 1)
  }, currentItemName) : /*#__PURE__*/React.createElement(React.Fragment, null))), /*#__PURE__*/React.createElement("div", null, " ", /*#__PURE__*/React.createElement(Tabs, {
    variant: "soft-rounded",
    colorScheme: "green"
  }, /*#__PURE__*/React.createElement(TabList, {
    style: {
      position: 'absolute',
      left: '32% '
    }
  }, /*#__PURE__*/React.createElement(Tab, {
    onClick: () => signWay(sign)
  }, "\u6570\u636E\u8868"), /*#__PURE__*/React.createElement(Tab, {
    onClick: () => signgetRulerWay()
  }, "\u89C4\u5219\u914D\u7F6E"), /*#__PURE__*/React.createElement(Tab, {
    onClick: () => getBaseSt()
  }, "\u89C4\u5219\u5FEB\u7167"), /*#__PURE__*/React.createElement(Tab, {
    onClick: () => getImages()
  }, "images")))), showybutton ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '30px',
      top: '70px'
    }
  }, /*#__PURE__*/React.createElement(Popover, null, /*#__PURE__*/React.createElement(PopoverTrigger, null, /*#__PURE__*/React.createElement(Button, {
    colorScheme: 'blue',
    left: "6px"
  }, "\u65B0\u5EFA\u89C4\u5219")), /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(PopoverContent, {
    left: '500px'
  }, /*#__PURE__*/React.createElement(PopoverArrow, null), /*#__PURE__*/React.createElement(PopoverHeader, null, "\u65B0\u5EFA\u89C4\u5219"), /*#__PURE__*/React.createElement(PopoverCloseButton, null), /*#__PURE__*/React.createElement(PopoverBody, null, /*#__PURE__*/React.createElement(Textarea, {
    onBlur: N => setrulers(N.target.value)
  }), /*#__PURE__*/React.createElement(Textarea, {
    placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
    height: '200px',
    marginTop: '5px',
    onBlur: M => setcondatas(M.target.value)
  }), /*#__PURE__*/React.createElement(Button, {
    colorScheme: 'blue',
    marginTop: '5px',
    left: "120px",
    onClick: () => newRuler()
  }, "\u4FDD\u5B58")))))) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: '1200px',
      marginTop: '80px'
    }
  }, "   ", isShowList ? /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, {
    onItemClick: onJarItemClick
  })) : /*#__PURE__*/React.createElement(React.Fragment, null)), isLoading ? /*#__PURE__*/React.createElement(Loading, {
    styles: {
      marginTop: '60px'
    }
  }) : isShowData && showDetail ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      paddingLeft: '50px',
      paddingBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement(Box, {
    flex: "1"
  }, showDetail && showDetail.length > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#ffffff',
      width: '100%',
      paddingTop: '10px'
    }
  }, handleContent(showDetail)) : isShowData && dataSheetItemDetail.length > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#ffffff',
      width: '100%',
      paddingTop: '10px'
    }
  }, handleContent(dataSheetItemDetail, true)) : /*#__PURE__*/React.createElement(React.Fragment, null))) : /*#__PURE__*/React.createElement(React.Fragment, null)))));
}