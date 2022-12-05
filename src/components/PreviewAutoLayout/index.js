import React from 'react';
import { Box } from "@chakra-ui/react";
import  AutoLayout  from '@/components/AutoLayout';
import useTokenRequest from '@/components/hooks/useTokenRequest';

export default function PreAutoLayout (props) {

  // 参数
  const {api, apiName, layoutData, layoutApi='', layoutName, layoutId, testLayoutName, ...rest} = props;

  // 判断 layoutApi 是否为空，如果为空，则用 layoutName 拼接api路径
  let localLayoutApi = ''
  if(layoutApi || layoutName){
    localLayoutApi = layoutApi || '/openapi/lc/module/getAutoLayout/' + layoutName
  }else if(layoutId){
    localLayoutApi = `/form?id=${layoutId}`
  }

  //testLayoutName
  const testLayoutJsonUrl = testLayoutName ? `http://local.webtools.io/previewautolayout/${testLayoutName}/layout.json` : ''
  const testLayoutJsonObj = useTokenRequest({ api:testLayoutJsonUrl });
  const testLayoutJsonData = testLayoutJsonObj && testLayoutJsonObj[0] || {}

  //根据apiName 获取 API url
  const apiNameUrl = apiName ? `/openapi/lc/apis/${apiName}`: ' '
  const resApiNameData = useTokenRequest({ api:apiNameUrl });
  const apiNameData = resApiNameData && resApiNameData[0]

  // 从api获取显示数据
  const [ data ] = useTokenRequest({ api: api || apiNameData.api });
  const records = data && data.records;

  // 从layoutApi获取layoutJson
  const respLayoutData = useTokenRequest({ api: localLayoutApi });
  const layoutJson = (layoutData && JSON.stringify(layoutData) !== '{}' && layoutData) || (respLayoutData && respLayoutData[0]) || testLayoutJsonData

  /**
   * 页面配置
   */
  const config = {
    items: records && records.length > 0 ? records : [],
    layout: layoutJson,
    ...rest
  };

  // 控制台输出信息
  const onPreviewItemClick = (item) => {
    //TODO
    console.log(item, ' === item')
  }

  return (
      <Box spacing='3px'>
        <AutoLayout {...config} onItemClick={onPreviewItemClick} />
      </Box>
  )
}

