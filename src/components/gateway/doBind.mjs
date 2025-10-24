/**
 * 绑定数据 
 * @param {object} binding 绑定规则
 * @param {object} data 绑定数据源
*/
export default function doBind(binding, data) {
  const bindingData = {}
  const originalData = { ...data } // 创建副本，避免修改原始数据

  let arrDataKey = []
  Object.keys(binding).forEach(key => {
      const bindingKey = binding[key]
      if(bindingKey.indexOf('.') > -1){
        // 处理嵌套字段绑定，如 "profile.name": "title"
        const ls = bindingKey.split('.')
        const dataKey = ls.shift()
        const childKey = ls[ls.length - 1]
        
        const findItem = arrDataKey.find((item,index) => item === dataKey)
        if(!findItem){
          arrDataKey.push(dataKey)
          const newObj = bindingData[dataKey] = {}
          newObj[childKey] = originalData[key]
          bindingData[dataKey] = newObj
        }else{
          bindingData[dataKey][childKey] = originalData[key]
        }

      }else{
        // 处理简单字段绑定，如 "description": "notes"
        if(originalData[key] !== undefined){
          bindingData[bindingKey] = originalData[key];
        }
      }
  })
  
  // 返回原始数据 + 绑定后的新字段（绑定字段会覆盖原始字段）
  return { ...originalData, ...bindingData };
}
