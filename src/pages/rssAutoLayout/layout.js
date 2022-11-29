module.exports = {
  xname: 'Flexbox',
  props: {
    flexWidth: 'auto-full'
  },
 
  cart: {
    xname: 'Cart',
    props: {
      margin: '0',
      corner: 0,
      linewidth: '0',
      padding: '10px 25px',
      isOnHover: false
    }
  },
  container: 'PlainList',
  presenter: {
    xname: 'Flexbox',
    props: {
      align: 'between',
      direction: 'row',
      justify: 'center',
      flexWidth: 'auto-full'
    },
  }
}