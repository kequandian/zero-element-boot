const React = require('react');

import Binding from "./Binding";
import Filter from "./Filter";
import GetItem from "./GetItem";
import Chain from "./Chain";
/**
 * 此组件 Binding 可替换
 * @param {object} binding 数据绑定
 * @param {object} filter  过滤数据, 默认获取后将数据展开
 * 
 */

export default function Gateway({
  children,
  chain,
  filter,
  binding,
  _,
  itemIndex = _,
  dataSource,
  ...rest
}) {
  if (filter) {
    return Filter({
      children,
      filter,
      dataSource,
      ...rest
    });
  } else if (binding) {
    return Binding({
      children,
      binding,
      dataSource,
      ...rest
    });
  } else if (itemIndex) {
    return GetItem({
      children,
      _: itemIndex,
      dataSource,
      ...rest
    });
  } else if (chain) {
    return Chain({
      children,
      chain,
      dataSource,
      ...rest
    });
  }

  return Binding({
    children,
    dataSource,
    ...rest
  });
} // /**
//  * 
//  * @param {} data 
//  * @param {*} field 
//  * @param {*} converter 
//  */
// function execFieldMap(data = {}, field, converter) {
//   var result = { ...data, ...data[field] };
//   Object.keys(converter).forEach(key => {
//     result[converter[key]] = result[key];
//     delete result[key];
//   })
//   return result;
// }
// /*
//  * 转换数据域名称
// */
// function execMap(data = {}, converter) {
//   Object.keys(converter).forEach(key => {
//     data[converter[key]] = data[key];
//     delete data[key];
//   })
//   return { ...data };
// }