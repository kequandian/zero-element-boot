module.exports = {
  presenter:
  {
    xname: 'RssAutoLayout',
    binding: {
      "styleName": "title",
      "name": "subTitle"
    }
  },
  container: "PlainList",
  cart: {
    xname: "Cart",
    props: {
      fill: 'transparent',
      linewidth: 0,
      isOnHover: false,
      margin: '0px',
      padding: '0px'
    },
    // defaultIndicator: "OnDeleteIndicator", //默认样式
    // indicator: "OnDeleteIndicator",  //hover 时用, 第一次向子组件转递时,  更名为 hoverIndicator
    // selector: "OnDeleteIndicator"

  }

}