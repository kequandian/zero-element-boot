import doFilter from './doFilter.mjs';
import { useReplacing } from './Replacing';

/**
 * 多次数据转换,并保留原数据不变
 * "[]": 0,  如果数据源是数组, 值代表数据下标, "[]", "indexing"
 * “|”: {}, 过滤数据源, 仅传递过滤字段, 其他字段不传递, "|", "filter"
 * @param {array} chain 连续转换规则
 * @param {objec} dataSource 数据源
 **/

export default function doChain(chain, dataSource) {
  // final result
  let chaindata = dataSource
  let processDataSource = dataSource

  chain.map(rule =>{

    const itemData = {}

    Object.keys(rule).forEach(key => {

      // if key == _, means get item, and general the first rule
      if(key==='[]' || key==='indexing'){
        // if(Array.isArray(chaindata)){
           //e.g.  "[]": 0
          const dataIndex = rule[key]
          chaindata = chaindata[dataIndex]
        // }else{
        //   const dataIndex = rule[key]
        //   chaindata = chaindata[dataIndex]
        // }
        
      }else if(key==='|' || key==='filter'){
          // means filter, just update chaindata by filter
          const filter = rule[key]

          // filter must be object
          if(typeof filter==='object'){
              chaindata = doFilter(filter, chaindata) 
              // filter all
              processDataSource = chaindata
          }else{
              console.log('invalid filter=', filter)
          }

          // remove the filter file keys from dataSource
          // Object.keys(filter).forEach(key2 => {
          //     if(processDataSource[key2]){
          //       delete processDataSource[key2];
          //     }
          // })
      }else if(key==='~' || key==='replacing'){
        const replacing = rule[key]
        chaindata = useReplacing(chaindata)

        //TODO, has not yet tested...

      } else {
          const bindingKey = rule[key]

          if(Array.isArray(bindingKey)){
            if(bindingKey.length===0){
              // items:[], directly return array 
              chaindata =  chaindata[key]
            }else{
              // foreach binding item key
              // item={name: title}
              bindingKey.forEach(item=>{
                // console.log('item=',item)

                Object.keys(item).forEach(itemKey=>{
                  // console.log('itemKey=',itemKey)
                  // console.log('chaindata.key=',key)
                  const itemKeyValue = item[itemKey]

                  // update dataSource
                  chaindata[key].forEach( (dataItem, i)=> {
                    // console.log('chaindata.dataItem=',dataItem, 'i=', i)
                    dataItem[itemKeyValue] = dataItem[itemKey]
                    delete dataItem[itemKey]
                    // console.log('chaindata.dataItem=',dataItem, 'i=', i)
                  })
                })
              })
            }

          }else if(typeof bindingKey === 'object' && Object.keys(bindingKey).length==0){
                //
                // if empty {}, means get all the object

                const dataKey = chaindata[key]
                // itemData = {...dataKey, ...itemData}
    
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
    chaindata =  Array.isArray(chaindata) ? chaindata : Object.assign(itemData, chaindata)
  })

  return Object.assign(chaindata, processDataSource)
}
