module.exports = {
  xname: 'Flexbox',
  props: {
    align: 'start',
    direction: 'row'
  },
  // gateway: {
  //   xname: 'Binding',
  //   props: {
  //     binding: {
  //       url: 'url',
  //       title: 'title',
  //       describe: 'describe',
  //       adType: 'adType',
  //       createTime: 'createTime'
  //     }
  //   }
  // },
  // cart: {
  //   xname: 'Cart',
  //   props: {
  //     // padding: '16px',
  //     isOnHover:false
  //   }
  // },
  cart: {
    xname: 'Page',
    props: {
      otherStyle:{
        background: '#ffffff'
      }
    }
  },
  container: 'PlainList',
  presenter: {
    xname: 'Flexbox',
  props: {
    direction: 'column', 
    justify: 'center row'
  },
  children: [
    {
      presenter: 'Title',
      gateway: {
        xname: 'Binding',
        props: {
          binding: {
            title: 'titleText'
          }
        }
      }
    },
    {
      presenter: 'Subtitle',
      gateway: {
        xname: 'Binding',
        props: {
          binding: {
            describe: 'contentTxt'
          }
        }
      }
    },
    {
      presenter: 'StatisticalDescription',
      gateway: {
        xname: 'Binding',
        props: {
          binding: {
            statisticalDescription: 'contentTxt'
          }
        }
      }
    },
    {
      presenter: {
        xname: 'Flexbox',
        props: {
          align: 'start',
          direction: 'column',
          flexWidth: 'auto-full'
        },
        presenter: 'PregressBody',
        cart: {
          xname: 'Cart',
          props: {
            isOnHover:false,
            margin: '2px 0px 2px 0px',
            linewidth: 0,
            padding: '0px'
          }
        },
        container: 'PlainList',
      },
      gateway: {
        xname: 'Binding',
        props: {
          binding: {
            items: 'items'
          }
        }
      }
    },
  ]
  }
}