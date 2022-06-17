import React from 'react'

import ManagedList from './index'

export default function (props){

  // 列表数据api路径
  let api = '/api/pub/data/services/navigation';
  
  // 分类api路径
  let navApi = '/api/pub/data/services/navCategory';

    return(
        <ManagedList api={api} navApi={navApi} />
    )
}