module.exports = {
  xname: 'Flexbox',
  props: {
    align: 'start',
    direction: 'row',
    justify: 'center',
    onItemClick
  },
  children: [
    {
      presenter: 'LayoutList',
      gateway: {
        xname: 'Binding',
        props: {
          binding: {
            componentName: 'componentName',
            records: 'records'
          }
        }
      }
    },
  ]
}