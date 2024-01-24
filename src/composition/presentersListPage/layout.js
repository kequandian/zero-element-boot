module.exports = {
    xname: 'Gridbox',
    props: {
        columns: 8,
        direction: 'fill',
        justify: 'center column'
    },
    
    presenter: {
      xname: 'PresentersItem',
      props: {
      }
    },
    binding: {
      "componentType": "_xname_",
      "componentProps": "_props_"
    },
    cart: {
      xname: 'Cart',
      props: {
        padding: '30px 10px',
        margin: '1px 0',
        linewidth: 0,
        corner: '8px',
        // fill: '#edf2f7'
        isHover: false
      },
  
      // unselector: "", //默认样式
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
  