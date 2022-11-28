import React from 'react';
import { AutoLayout } from '@/components';
import { AutoLayout as NamedPresenter } from '@/components';

// import { AutoLayout } from '@/components';
import useTokenRequest from '@/components/hooks/useTokenRequest';
import ItemPlaceholder from '@/components/presenter/ItemPlaceholder';
// import NamedPresenter from './NamedPresenter'

export default function index(props) {

  // const api =endpoint +'/lc/apps/app'
  const { endpoint}=props;

  const api = '/api/AutoComponentSet';

  const [data] = useTokenRequest({ api });
  const config = {
    items: data.length > 0 ? data : [],
    layout: {
      xname: 'Flexbox',
      props: {
        // columns:'1',     
        align: 'start',
        direction: 'column',
        justify: 'center'
      },
      cart: {
        xname:"Cart",
        props:{
          fill: 'transparent',
          linewidth: '1px',
          isOnHover: true,
          margin: '20px',
          padding: '0'
        }
      },
      container: 'SelectList',
      indicator: "ShadowIndicator",  //hover 时用, 第一次向子组件转递时,  更名为 hoverIndicator
      selector: 'CircularCheckboxIndicatorSelected',  // select时用，第一次向子组件转递时，更名为 selectedIndicator
    },
    ...props
  };



  return (
    <AutoLayout {...config} {...props} >
      <NamedPresenter />
      {/* <ItemPlaceholder /> */}
    </AutoLayout>

  )
}