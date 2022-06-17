import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, VStack, Spinner, Switch, FormControl, FormLabel, } from "@chakra-ui/react";
import {getEndpoint} from '@/components/config/common'
import AutoLayout from '@/components/AutoLayout'
import layout from './layout'
import {Page} from '@/components/cart'
import TabsCompox from '@/composition/testCrudList/compx/tabsComps'

const promiseAjax = require('@/components/utils/request')

export default function index (props) {

  const {api,navApi} = props;

  const [listData, setListData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [switchStatus, setSwitchStatus] = useState(false)
  const [navCateListData, setNavCateListData] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);


  useEffect(() => {
    console.log('首次加载')
    const queryData = {}
    fetchNavCategoryData(navApi, {});
  }, []);

  useEffect(() => {

  }, []);

  let layoutData = '';
  const layoutJsonPath = '';
  const localLayoutJson = layout;

  if (layoutJsonPath) {
    layoutData = { path: layoutJsonPath };
  } else {
    layoutData = localLayoutJson;
  }
  const config = {
    items: listData,
    layout: layoutData
  };


  //获取分类列表信息
  /*
   * fetchNavCategoryData的navapi等于 ava中的形参，实参由调用者传入，也就是说这个navapi不是真正的navapi
   * javascript是弱类型 
   */
  const fetchNavCategoryData = (navapi, queryData) => {
    setLoading(true);
    let newNavCateList = [];
    return promiseAjax(navapi, queryData).then(resp => {
      if (resp && resp.code === 200) {
        newNavCateList = resp.data.records; //-1:新增  -2删除

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
      setTabIndex(newNavCateList[0].id);
      fetchData(api, {
        typeId: newNavCateList[0].id
      });
    });
  };
  
  // </Page>
  //获取列表信息
  const fetchData = (api, queryData) => {
    setLoading(true)
    return promiseAjax(api, queryData).then(resp => {
      if (resp && resp.code === 200) {
        const list = resp.data.records;
        console.log('list', list);
        setListData(list);
        setLoading(false)
      } else {
        console.error('获取列表数据失败 ==', resp)
      }
    });
  }

  //
  const onUserItemClick = (item) => {
    const id = item.id;
    console.log('id = ', id)
    // alert(`选择的用户id为: ${id}`)
    //点击跳转页面
    if (item.path.indexOf('http') != -1) {
      // window.location.replace(item.path)

      // history.push(url);
      const w = window.open('about:blank');
      w.location.href = item.path
      console.log(item.path);

    } else {
      const w = window.open('about:blank');
      const host = getEndpoint || location.host
      w.location.href = host + item.path

      console.log(host);

    }

  }

  //回调函数
  const callback = (value) => {

    console.log('item===', value)
    if (value) {
      fetchData(api, {})
    }
  }



  const tabscallback = value => {
    if (value) {
      setNavCateListData([]);
      setListData([]);
      fetchNavCategoryData(navApi, {});
    }
  }; //开启/关闭 编辑按钮




  const handleChange = () => {
    const status = !switchStatus;
    setSwitchStatus(status)
    if (!status) {
      setNavCateListData([]);
      setListData([]);
      fetchNavCategoryData(navApi, {});
    }
  }



  //tab切换
  const switchTab = (item, index) => {
    if (index != tabIndex) {
      setTabIndex(index)
      const queryData = {
        typeId: item.id
      }
      fetchData(api, queryData)
    }
  }
  return (
    <Page >

      <ChakraProvider>
        <div style={{ maxWidth: '800px' }}>
          <VStack align='stretch' spacing='-2'>
            <Box style={{ margin: '10px 10px 30px 10px', paddingLeft: '8px' }}>
              <FormControl display='flex' alignItems='center'>
                <FormLabel htmlFor='email-alerts' mb='0'>
                  编辑开关：
                </FormLabel>
                <Switch size='lg' onChange={() => handleChange()} isChecked={switchStatus} />
              </FormControl>
            </Box>
            <Box>
            </Box>
            {navCateListData && navCateListData.length > 0 ? (
              <>
                <TabsCompox items={navCateListData} onSwitchTab={switchTab} isSwtich={switchStatus} cb={tabscallback} />

                <div style={{ marginTop: '20px' }}>
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <Box>
                      <AutoLayout {...config} onItemClick={onUserItemClick} cb={callback} isSwtich={switchStatus} />
                    </Box>
                  )
                  }
                </div>
              </>
            ) : null}

          </VStack>

        </div>

      </ChakraProvider>

    </Page >

  )

}
