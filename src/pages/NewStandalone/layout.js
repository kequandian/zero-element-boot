module.exports = {
  xname: 'Flexbox',
  props: {
    align: 'start',
    direction: 'column'
  },
  cart: {
    xname: 'Cart',
    props: {
      margin: 0,
      corner: 0,
      linewidth: '0',
      padding: '1px 25px',
      isOnHover: false
    },
  },
  container: 'PlainList',
  presenter: {
    xname: 'Flexbox',
    props: {
      justify: 'full'
    },
    children: [
      {
        xname: 'JarItem',
        indicator:{
          xname:'ClickIndicator',
          binding: {
            "value":"value"
          }
        },
      },
    ]
  }
}