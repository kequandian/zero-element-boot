module.exports = {
  xname: 'Flexbox',
  props: {
    align: 'start',
    direction: 'row'
  },
  cart: {
    xname:"Cart",
    // indicator: 'MyHoverCart',  //hover 时用, 第一次向子组件转递时,  更名为 hoverIndicator
	  // selector: 'SelectedCartUpperRightIcon',  // select时用，第一次向子组件转递时，更名为 selectedIndicator
    defaultIndicator: "CircularCheckboxIndicatorDefault", //默认样式
    indicator: "ShadowIndicator",  //hover 时用, 第一次向子组件转递时,  更名为 hoverIndicator
    selector: 'CircularCheckboxIndicatorSelected',  // select时用，第一次向子组件转递时，更名为 selectedIndicator
    props:{
      fill: 'transparent',
      linewidth: 0,
      isHover: false,
    }
  },
  container: 'SelectList',
  presenter: {
    xname: 'Flexbox',
    props: {
      direction: 'column',
      justify: 'center row'
    },
    children: [
      {
        presenter: 'Avatar',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              avatar: 'url'
            }
          }
        }
      },
      {
        presenter: 'Title',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              name: 'titleText'
            }
          }
        }
      },
    ]
  }
}

//
// module.exports = {
//   xname: 'Flexbox',
//   props: {
//     align: 'start',
//     direction: 'row'
//   },
//   cart: {
//     xname:"Cart",
//     indicator: "MyIndicatorSelect",  //hover 时用, 第一次向子组件转递时,  更名为 hoverIndicator
//   	selector: 'MyIndicatorSelected',  // select时用，第一次向子组件转递时，更名为 selectedIndicator
//     props:{
//       fill: 'transparent',
//       linewidth: 0,
//       isOnHover: false,
//     }
//   },
//   // indicator: {
// 	//  xname: "MyHoverCart",
// 	//  props:{
// 	//  }
//   // },
//   // 同时支持
//   // indicator: MyHoverCart, 
//   // selector: {
// 	//  xname: "SelectedCartUpperRightIcon",
// 	//  props: {
// 	//  }
//   // },
//   //selector: SelectedCartUpperRightIcon 
//   container: 'SelectList'
//   // container: 'MultiSelectList'
// }