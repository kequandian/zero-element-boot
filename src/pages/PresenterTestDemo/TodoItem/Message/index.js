import React, { useState } from 'react';
import { Tabs } from 'antd';
import TodoList from '@/pages/PresenterTestDemo/plugins/TodoList/SandBox'
import display from '@/pages/PresenterTestDemo/components/presenter/item/ItemIconAction'
require('./index.less')

const { TabPane } = Tabs;
export default function callback(key) {
  const onhandleClick=(data)=>{
    // console.log('data = ',data);
  }

  return(
    <div className="TheLabel">
      <Tabs defaultActiveKey="1" onChange={callback} >
        <TabPane tab="未读消息" key="1" tabBarStyle={{margin:"auto"}}>
            <TodoList onhandleClick={onhandleClick}  display={`${display}`}/>
        </TabPane>
        <TabPane tab="全部消息" key="2" tabBarStyle={{paddingLeft:"100px"}}>
            <TodoList />
        </TabPane>
      </Tabs>
    </div>
  )
  
}

