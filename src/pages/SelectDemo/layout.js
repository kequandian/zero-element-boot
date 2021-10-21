module.exports = {
  xname: 'Flexbox',
  props: {
    align: 'start',
    direction: 'row'
  },
  // gateway: {
  //   xname: 'Binding',
  //   props: {
  //     binding: {
  //       url: 'url',
  //       title: 'title',
  //       describe: 'describe',
  //       adType: 'adType',
  //       createTime: 'createTime'
  //     }
  //   }
  // },
  cart: {
    xname:"Cart",
    indicator: "SelectedCartUpperRightIcon",        
    // indicator: "SelectedCartRightIcon",        
    props:{
      fill: 'transparent',
      linewidth: 0,
      isHover: false,
    }
  },
  container: 'SelectionList'
}