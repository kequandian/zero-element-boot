import React from 'react';
import { AutoLayout } from '@/components';
import { AutoLayout as NamedPresenter } from '@/components';
import useTokenRequest from '@/components/hooks/useTokenRequest';
import ItemPlaceholder from '@/components/presenter/ItemPlaceholder';


export default function index(props) {

  const { onItemClick, endpoint } = props;

  const api =endpoint +'/openapi/lc/module/moduleList/1'

  // const api = '/openapi/lc/module/moduleList/1'

  // const api = '/api/AutoComponentSet';


  const [data] = useTokenRequest({ api });
  const config = {
    items: data.length > 0 ? data : [],
    layout: {
      xname: 'Flexbox',
      props: {
        direction:'row' 
      },


      cart: 'TestCircularCheckboxIndicator',
    

      container: 'SelectList'
    }
  };



  return (
    <AutoLayout {...config} {...props} onItemClick={onItemClick} >
      <NamedPresenter />
    </AutoLayout>

  )
}