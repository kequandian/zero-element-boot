/**
 * 绑定数据 
 * @param {object} binding 绑定规则
 * @param {object} data 绑定数据源
*/
export default function doBind(binding, data) {
  return data

  // TODO, issue
  const bindingData = {}

  let arrDataKey = []
  Object.keys(binding).forEach(key => {
      const bindingKey = binding[key]
      if(bindingKey.indexOf('.') > -1){
        const ls = bindingKey.split('.')
        const dataKey = ls.shift()
        const childKey = ls[ls.length - 1]
        
        const findItem = arrDataKey.find((item,index) => item === dataKey)
        if(!findItem){
          arrDataKey.push(dataKey)
          const newObj = bindingData[dataKey] = {}
          newObj[childKey] = data[key]
          bindingData[dataKey] = newObj
        }else{
          bindingData[dataKey][childKey] = data[key]
        }

      }else{
        if(data[key]){
          bindingData[bindingKey] = data[key];
        }
      }
      delete data[key]
  })
  // console.log('bindingData == ', binding, bindingData, data)

  return { ...bindingData, ...data };
}
