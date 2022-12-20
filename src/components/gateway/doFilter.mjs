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
        // just convert the data field if normal value
        filterData[filteredKey] = dataSource[key];
    }
  })

  return filterData
}

