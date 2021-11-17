import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { Title, Subtitle, StatisticsList, StatisticalDescription } = require('@/presenter/demo');

import ProgressList from '../ProgressList';
import useTokenRequest from '@/components/hooks/useTokenRequest';
import _layout from './_layout';

export default function StatisticsBody(props) {
  const allComponents = {
    Title,
    Subtitle,
    StatisticsList,
    StatisticalDescription,
    ProgressList
  }
  
  // const api = '/layout.json';

  // const [ data ] = useTokenRequest({api});

  const config = {
    layout: _layout,
    ...props,
  };

//   return (
//     data && JSON.stringify(data) != '{}' ? (
//       <AutoComponent {...config} allComponents={allComponents} />
//     ):<div></div>
// )

return (
  <AutoComponent {...config} allComponents={allComponents} />
)

}