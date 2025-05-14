module.exports = {
  xname: 'Gridbox',
  props: {
    gridColumnGapSize: '12px',
    gridRowGapSize: '12px',
  },
  presenter: {
    xname: 'Text',
    props: {
      "fontWeight": 'bold',
      "display":'flex',
      "alignItems": "center",
      "justifyContent":"center"
    },
  },
  binding: {
    "componentType": "content"
  },
 
  cart: {
    xname: 'Cart',
    props: {
      padding: '30px 10px 20px 10px',
      margin: '',
      linewidth: 0,
      corner: '8px',
      fill: '#edf2f7'
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
        padding: '0'
      }
    }
  },
  container: 'SelectList'
};
