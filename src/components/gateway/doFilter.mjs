/**
 * 过滤数据, 多种规侧
 * 
 * 规则#1 绑定, 变更数据源字段名称
 * {
 *    "gentle": "sex"
 * }
 * 规则#2 提取数据源数数据域并展开所有字段
 * {
 *    "profile": {}
 * }
 * 规则#3 提取数据源数数据域并展开绑定字段
 * {
 *    "profile": {
 *        "name": "title"
 *     }
 * }
* 规则#4 提取数据源数数据域并展开为数据
 * {
 *    "users": []
 * } 
 * **/
export default function doFilter(filter, dataSource){
  const filterData = {}

  Object.keys(filter).forEach(key => {
    // the key value as to filtered key
    const filteredKey = filter[key]

    if(typeof filteredKey == 'object'){
        // dataSource key value
        const filteredObject = dataSource[key]

        if(filteredObject){
          if(Object.keys(filteredKey).length==0){
              // expand the data within {}
              Object.assign(filterData, filteredObject)

          }else{
              // 
              const bind = doFilter(filteredKey, filteredObject)
              Object.assign(filterData, bind)
          }
        }
        
    }else if(typeof filteredKey == 'array'){
        // dataSource key value
        const filteredObject = dataSource[key]

        if(filteredObject){
          if(typeof 'filteredObject'==='array'){
            /// directly return as array
            return filteredObject
          }else{
            console.log('invalid data source, should be []: ', filteredObject)
          }
        }

    }else{
      console.log('do filter key  = ',  filteredKey, dataSource, 'key = ', key)
        // just convert the data field if normal value
        // 如果使用doFilter前调用了binding, 则 dataSource[key] 会为空，
        // 因为binding会将dataSource里的这个key删除掉
        if(dataSource[key]){
          filterData[filteredKey] = dataSource[key];
        }else{
          filterData[filteredKey] = dataSource[filteredKey];
        }
    }
  })

  return filterData
}

export const handleFilter = (filter, data) => {
  if(!filter){
    return data
  }
  if(filter && Array.isArray(data)) {
    return data.map(item => doFilter(filter, item))
  }
  return doFilter(filter, data)
}

