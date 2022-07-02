import { AutoLayout } from '@/components';

export default function(props){

  const groupdata = {
    "G1": [
      {id: 1, name: "March", url: 'https://thirdwx.qlogo.cn/mmopen/vi_32/h5l7xksV3b6WE1H30xPpicqBdaibhrsrOHGCZhYdBGrnAb2kaVZsGYo2PLt9UcrqrdfDMcBhJ9IhBoV9MSMZmiaVw/132'},
      {id: 2, name: "June", imageUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/h5l7xksV3b6WE1H30xPpicqBdaibhrsrOHGCZhYdBGrnAb2kaVZsGYo2PLt9UcrqrdfDMcBhJ9IhBoV9MSMZmiaVw/132'}
    ], 
    "G2": [
      {id: 3, name: "Oct"},
      {id: 2, name: "June", imageUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/h5l7xksV3b6WE1H30xPpicqBdaibhrsrOHGCZhYdBGrnAb2kaVZsGYo2PLt9UcrqrdfDMcBhJ9IhBoV9MSMZmiaVw/132'},
      {id: 4, name: "Nov"}
    ]
  }

  const itemdata = [
      {id: 1, name: "March", url: 'https://thirdwx.qlogo.cn/mmopen/vi_32/h5l7xksV3b6WE1H30xPpicqBdaibhrsrOHGCZhYdBGrnAb2kaVZsGYo2PLt9UcrqrdfDMcBhJ9IhBoV9MSMZmiaVw/132'},
      {id: 2, name: "June", imageUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/bDIrjo2pHIKEUGavExt0p1A2kXIeH9TEoiblTu2W2T6wiaKU1jeLGYxCTvywUCo28wTkjpB3IT2lhNlBibdEYX1rg/132'},
      {id: 3, name: "Oct"},
      {id: 4, name: "Nov"}
    ]

    const bindingdata = {
      japan: {id: 1, name: "March", url: 'https://thirdwx.qlogo.cn/mmopen/vi_32/h5l7xksV3b6WE1H30xPpicqBdaibhrsrOHGCZhYdBGrnAb2kaVZsGYo2PLt9UcrqrdfDMcBhJ9IhBoV9MSMZmiaVw/132'},
      chinaa: {id: 2, name: "June", imageUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/h5l7xksV3b6WE1H30xPpicqBdaibhrsrOHGCZhYdBGrnAb2kaVZsGYo2PLt9UcrqrdfDMcBhJ9IhBoV9MSMZmiaVw/132'},
      usa: {id: 3, name: "Oct"},
      uk: {id: 4, name: "Nov"}
    }

  // 
  const layout = {
    children: [ {
        presenter: 'ItemPlaceholder',
        gateway: {
          _: 0
        }
      }, 
      {
        presenter: 'ItemPlaceholder',
      }
    ]
  }

  const gateway = {
  }

  return <AutoLayout layout={layout} gateway={gateway} dataSource={itemdata} />
  // return <AutoLayout layout={layout} gateway={gateway} {...itemdata} />
}
