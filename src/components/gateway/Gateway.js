import Binding from './Binding';
import Filter from './Filter'
import GetItem from './GetItem';
import Chain from './Chain'

/**
 * 此组件 Binding 可替换
 * @param {object} binding 数据绑定, 数据源其他字段不受影响
 * @param {object} filter  过滤数据, 数据源其他字段不继续往下传递
 * @param {object} chain 多层次数据叠加处理，可以叠加binding逻辑，也可以叠加filter逻辑
 * 
 */
export default function Gateway({ children, binding, filter, chain, _, dataSource, ...rest }) {

  const itemIndex = _

  if (binding) {
    return Binding({children, filter, dataSource, ...rest})

  } else if(filter) {
    return Filter({children, binding, dataSource, ...rest})
  
  }else if(itemIndex){
    return GetItem({children, _:itemIndex, dataSource, ...rest})
  
  }else if(chain){
    return Chain({children, chain, dataSource, ...rest})
  }

  return Binding({children, dataSource, ...rest})
}
