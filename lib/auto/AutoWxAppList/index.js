import React from 'react';
import { AutoLayout, APIContainer } from '@components';
import useTokenRequest from "../../components/hooks/useTokenRequest";
import Presenter from "./Presenter";
export default function index(props) {
  const {
    endpoint
  } = props;
  const api = endpoint + '/lc/apps/app'; // const api = '/api/AutoWxAppList';

  const [data] = useTokenRequest({
    api
  });
  const config = {
    items: data.length > 0 ? data : [],
    layout: {
      xname: 'Flexbox',
      props: {
        // columns:'3',
        align: 'start',
        direction: 'row',
        justify: 'center'
      },
      cart: {
        xname: 'Cart',
        props: {
          // padding: '16px',
          margin: '0',
          corner: 0,
          linewidth: '0',
          padding: '10px 25px',
          isOnHover: false
        }
      },
      container: 'PlainList',
      presenter: {
        xname: 'Flexbox',
        props: {
          justify: 'center'
        },
        children: [{
          presenter: 'AutoWxListPresenter',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                name: 'name'
              }
            }
          }
        }]
      }
    },
    ...props
  };
  console.log(data, '==data');
  return /*#__PURE__*/React.createElement(AutoLayout, config);
}