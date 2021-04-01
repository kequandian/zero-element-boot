module.exports={
  xname:'Flexbox',
  props:{
    align:'start',
    direction:'column',
  },
  children: [
    {
      presenter: 'ImageAnimation',
      gateway: {
        xname: 'Binding',
        props: {
          binding: {
            url: 'imgUrl'
          }
        }
      }
    }
  ]
}