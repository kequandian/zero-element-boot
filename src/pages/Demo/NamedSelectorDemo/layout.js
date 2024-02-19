module.exports = {
    xname: 'Gridbox',
    props: {
        columns: 8,
    },
    binding: {
    },
    cart: {
      xname: 'Cart',
      props: {
        padding: '10px',
        margin: '1px 0',
        linewidth: '1px',
        corner: '8px',
        isHover: false
      },
      indicator: {
        xname: 'ShadowIndicator',
        props: {
        }
      }, 
      selector: {
        xname: 'OutlineSelector',
        props: {
            lineWidth: 2,
            lineColor: '#D9FF00'
        },
        selected: true
      },
    },
    container: 'SelectList',
    presenter: {
        xname: 'ItemPlaceholder',
        props:{
        }
      }
  };
  