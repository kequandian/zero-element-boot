module.exports = {
  xname: 'Flexbox',
  props: {
    direction: "column"

  },
  presenter: {
    //   xname: 'Flexbox',
    //   props: {
    //     align: 'start',
    //     direction: 'row',
    //     justify: 'center',
    //     spacing: 10
    //   },
    children: [
      {
        xname: 'Avatar',
        binding: {
          "avatarUrl": 'url',
          "size": 'size'
        },
     
      },
      {
        xname: 'Text',
        props: {
          title: 'title'
        }
      }

    ],
  },
  container: "SelectList",
  // container: "ItemClickList",

  cart: "Cart",

  props: {
    fill: 'transparent',
    lineWidth: 0,
    isOnHover: false,
    margin: '0px',
    padding: '0px'
  },
  unselector: "SelectAvatar", //默认样式
  indicator: "ShadowIndicator",  //hover 时用, 第一次向子组件转递时,  更名为 hoverIndicator
  selector: {
    xname: "SelectAvatar",
    props: {
      state: 'selected'
    }
  }
}