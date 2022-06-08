// module.exports = {
//   xname: 'Flexbox',
//   props: {
//     align: 'start',
//     direction: 'row'
//   },
//   cart: {
//     xname:"Cart",
//     indicator: 'MyHoverCart',  //hover 时用, 第一次向子组件转递时,  更名为 hoverIndicator
// 	selector: 'SelectedCartUpperRightIcon',  // select时用，第一次向子组件转递时，更名为 selectedIndicator
//     props:{
//       fill: 'transparent',
//       linewidth: 0,
//       isHover: false,
//     }
//   },
//   container: 'SelectList'
// }

//
module.exports = {
  xname: 'Flexbox',
  props: {
    align: 'start',
    direction: 'row'
  },
  cart: {
    xname:"Cart",
    indicator: "MyIndicatorSelect",  //hover 时用, 第一次向子组件转递时,  更名为 hoverIndicator
  	selector: 'MyIndicatorSelected',  // select时用，第一次向子组件转递时，更名为 selectedIndicator
    props:{
      fill: 'transparent',
      linewidth: 0,
      isOnHover: false,
    }
  },
  // indicator: {
	//  xname: "MyHoverCart",
	//  props:{
	//  }
  // },
  // 同时支持
  // indicator: MyHoverCart, 
  // selector: {
	//  xname: "SelectedCartUpperRightIcon",
	//  props: {
	//  }
  // },
  //selector: SelectedCartUpperRightIcon 
  container: 'SelectList'
  // container: 'MultiSelectList'
}