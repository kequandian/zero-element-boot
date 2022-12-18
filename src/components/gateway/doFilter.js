/**
 * 过滤数据, 多种规侧
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
 * **/
export default function doFilter(filter, dataSource){
  const filterData = {}
  
  Object.keys(filter).forEach(key => {
    const filterKey = filter[key]

    if(typeof filterKey == 'object'){

        // dataSource key value
        const filteredObject = dataSource[key]

        if(Object.keys(filterKey).length==0){
            // expand the data within {}
            Object.assign(filterData, filteredObject)

        }else{
            // 
            const bind = doFilter(filterKey, filteredObject)
            Object.assign(filterData, bind)
        }

    }else{
        // just convert the data field if normal value
        filterData[filterKey] = dataSource[key];
    }

  })

  return filterData
}

