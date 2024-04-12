import Binding from "./Binding";
import Filter from "./Filter";
import Indexing from "./Indexing";
import Replacing from "./Replacing";
import Chain from "./Chain";

/**
 * 此组件 Binding 可替换
 * @param {object} binding 数据绑定, 数据源其他字段不受影响
 * @param {object} filter  过滤数据, 数据源其他字段不继续往下传递
 * @param {number} indexing 数组下标
 * @param {string} replacing 替换所有属性中的包含(字符串)
 * @param {object} chain 多层次数据叠加处理，可以叠加binding逻辑，也可以叠加filter逻辑
 * 
 */
export default function Gateway({
  children,
  binding,
  filter,
  chain,
  replacing,
  indexing,
  dataSource,
  ...rest
}) {
  if (binding) {
    return Binding({
      children,
      filter,
      dataSource,
      ...rest
    });
  } else if (filter) {
    return Filter({
      children,
      binding,
      dataSource,
      ...rest
    });
  } else if (indexing) {
    return Indexing({
      children,
      indexing,
      dataSource,
      ...rest
    });
  } else if (replacing) {
    return Replacing({
      children,
      replacing,
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
}