module.exports = {
  xname: 'Flexbox',
  props: {
    flexWidth: 'auto-full'
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
  cart: {
    xname: 'Cart',
    props: {
      // padding: '16px',
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
    children: [{
      presenter: {
        xname: 'Flexbox',
        props: {
          align: 'row'
        },
        presenter: {
          xname: 'Flexbox',
          props: {
            direction: 'column',
            justify: 'center row'
          },
          children: [{
            presenter: 'Avatar',
            gateway: {
              xname: 'Binding',
              props: {
                binding: {
                  url: 'url'
                }
              }
            }
          }]
        },
        cart: {
          xname: 'Cart',
          props: {
            isOnHover: false,
            margin: '0px 0px 2px 0px',
            linewidth: 1,
            padding: '0px'
          }
        },
        container: 'PlainList'
      },
      gateway: {
        xname: 'Binding',
        props: {
          binding: {
            iconList: 'items'
          }
        }
      }
    }, {
      presenter: "Title",
      gateway: {
        xname: "Binding",
        props: {
          binding: {
            number: "titleText"
          }
        }
      }
    }]
  }
};