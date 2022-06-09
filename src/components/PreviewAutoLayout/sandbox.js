import React, { useState, useEffect } from 'react';
import PreviewAutoLayout from './index'

export default function (props) {

  let api = '/api/crud/fieldModel/fieldModels'
   let layoutJsonApi = '/api/layoutJson'

//   const [ data ] = useTokenRequest({ api });
//   const respLayoutData = useTokenRequest({ api: layoutJsonApi });

//   const records = data && data.records;
//   const layoutJson = respLayoutData && respLayoutData[0]

  //用了两个list组件, 需要额外封装一个items
//   const dataX = []
//   dataX.push({ items: records })

  return (
      <PreviewAutoLayout {...props} api={api} layoutApi={layoutJsonApi} />
  )
}