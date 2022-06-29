import { AutoLayout } from '@/components';

export default function(props){

  const groupdata = {
    "G1": [
      {id: 1, name: "March", url: 'https://thirdwx.qlogo.cn/mmopen/vi_32/h5l7xksV3b6WE1H30xPpicqBdaibhrsrOHGCZhYdBGrnAb2kaVZsGYo2PLt9UcrqrdfDMcBhJ9IhBoV9MSMZmiaVw/132'},
      {id: 2, name: "June", url: 'https://thirdwx.qlogo.cn/mmopen/vi_32/h5l7xksV3b6WE1H30xPpicqBdaibhrsrOHGCZhYdBGrnAb2kaVZsGYo2PLt9UcrqrdfDMcBhJ9IhBoV9MSMZmiaVw/132'}
    ], 
    "G2": [
      {id: 3, name: "Oct"},
      {id: 2, name: "June", url: 'https://thirdwx.qlogo.cn/mmopen/vi_32/h5l7xksV3b6WE1H30xPpicqBdaibhrsrOHGCZhYdBGrnAb2kaVZsGYo2PLt9UcrqrdfDMcBhJ9IhBoV9MSMZmiaVw/132'},
      {id: 4, name: "Nov"}
    ]
  }

  const itemdata = [
      {id: 1, name: "March", url: 'https://thirdwx.qlogo.cn/mmopen/vi_32/h5l7xksV3b6WE1H30xPpicqBdaibhrsrOHGCZhYdBGrnAb2kaVZsGYo2PLt9UcrqrdfDMcBhJ9IhBoV9MSMZmiaVw/132'},
      {id: 2, name: "June", url: 'https://thirdwx.qlogo.cn/mmopen/vi_32/h5l7xksV3b6WE1H30xPpicqBdaibhrsrOHGCZhYdBGrnAb2kaVZsGYo2PLt9UcrqrdfDMcBhJ9IhBoV9MSMZmiaVw/132'},
      {id: 3, name: "Oct"},
      {id: 4, name: "Nov"}
    ]

  // 
  const layout = {
        xname: 'Flexbox',
        container: {xname: 'GroupedList'},
        presenter: "ItemPlaceholder"
  }

  return <AutoLayout layout={layout} dataSource={groupdata} />
}