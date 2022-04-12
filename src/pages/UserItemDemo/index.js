import React from 'react';

import { AutoLayout } from 'zero-element-boot';
import layoutJson from './layout';

export default function index (props) {

  const item = {
    "id": 2,
    "name": "李",
    "avatar": "https://avatars1.githubusercontent.com/u/5188650?s=460&u=91bfbfeaa3ed601f2060af7a84e29c0859ca5e8e&v=4",
  }


  const config = {
    layout: layoutJson,
    ...item
  };

  return (
    <div style={{ display:'flex', justifyContent: 'left'}}>
      <AutoLayout {...config} onItemClick={onJarItemClick} />
    </div>
  )
}