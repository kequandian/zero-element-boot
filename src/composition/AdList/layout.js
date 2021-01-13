module.exports = {
  xname: 'Flexbox',
  props: {
    align: 'start',
    direction: 'row',
  },
  gateway: {
    xname: 'Binding',
    props: {
      binding: {
        url: 'url',
        title: 'title',
        describe: 'describe',
        adType: 'adType',
        createTime: 'createTime'
      }
    }
  },
  cart: {
    xname: 'HoverShadowCart',
    props: {
      padding: '16px',
    }
  },
  container: 'PlainList'
}