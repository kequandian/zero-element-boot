import doFilter from './doFilter.mjs';

/**
 * 多次数据转换,并保留原数据不变
 * "_": 0,  如果数据源是数组, 值代表数据下标
 * “|”: {}, 过滤数据源, 仅传递过滤字段, 其他字段不传递
 * @param {array} chain 连续转换规则
 * @param {objec} dataSource 数据源
 **/

export default function doChain(chain, dataSource) {
  // final result
  let chaindata = dataSource
  const processDataSource = dataSource

  chain.map(rule =>{
    const itemData = {}

    Object.keys(rule).forEach(key => {

      // if key == _, means get item, and general the first rule
      if(key==='_'){
        // if(Array.isArray(chaindata)){
           //e.g.  "_": 0
          const dataIndex = rule[key]
          chaindata = chaindata[dataIndex]
        // }else{
        //   const dataIndex = rule[key]
        //   chaindata = chaindata[dataIndex]
        // }
        
      }else if(key==='|'){
          // means filter, just update chaindata by filter
          const filter = rule[key]

          // filter must be object
          if(typeof filter==='object'){
              chaindata = doFilter(filter, chaindata) 
          }else{
            console.log('invalid filter=', filter)
          }

          // remove the filter file keys from dataSource
          Object.keys(filter).forEach(key2 => {
              if(processDataSource[key2]){
                delete processDataSource[key2];
              }
          })

      } else {
          const bindingKey = rule[key]

          if(typeof bindingKey === 'object' && Object.keys(bindingKey).length==0){
                //
                // if empty {}, means get all the object

                const dataKey = chaindata[key]
                itemData = {...dataKey, ...itemData}
                
    
          }else if(typeof bindingKey === 'string'){
                
              // if index from chain data is null, then index from dataSource
              itemData[bindingKey] = chaindata[key] || processDataSource[key]
  
              if(chaindata[key]){
                  delete chaindata[key];
              }
        }
      }
    })

    // end up array for chaindata
    chaindata =  Array.isArray(chaindata) ?  chaindata : Object.assign(itemData, chaindata)
  })

  return Object.assign(chaindata, processDataSource)
}
