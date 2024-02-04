import React, { useEffect, useState } from 'react';
import { ChakraProvider, Spinner } from '@chakra-ui/react';
import ModuleListPage from '@/composition/attributeListPage/Sandbox';
import { set as NamedPresenterSet } from '@/components/config/NamedPresenterConfig';
import SettingItem from './compx/SettingItem';

export default function Index (props) {

  NamedPresenterSet({SettingItem})
  return (
    <ChakraProvider>
      <div style={{padding: '8px'}}>
        <ModuleListPage {...props}/>
        </div>
    </ChakraProvider>
  )

}