module.exports = {
  xname: 'Gridbox',
  props: {
    gridColumnGapSize:'12px',
    gridRowGapSize:'12px',
  },
  presenter:
  {
    xname: 'ManageCart',
    binding: {
      "componentName": "title",
    }
  },

  cart: {
    xname: 'Cart',
    props: {
      padding: '0',
      margin: '',
      linewidth: 0,
      corner:'8px'
    },

    unselector: "", //默认样式
    indicator:
    {
      xname: "ShadowIndicator",
      props: {
      }
    }, //hover 时用, 第一次向子组件转递时,  更名为 hoverIndicator
    selector: {
      xname: "SelectedCartUpperRightIcon",
      props: {
        state: 'selected',
        padding:'0'
      }
    }
  },
  container: 'SelectList'
    // xname: 'ManageList',
    // xname: 'PlainList',
    // xname: ,

    // props: {
    //   addnew: ''
    // }
  // },

};
