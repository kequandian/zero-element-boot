module.exports = {
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
            title: 'TitleText'
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
        layout: {
          xname: 'Flexbox',
          props: {
            align: 'start',
            direction: 'column',
            flexWidth: 'auto-full'
          },
          presenter: {
            layout: {
              xname: 'Flexbox',
              props: {
                align: 'start',
                direction: 'column',
                flexWidth: 'auto-full'
              },
              gateway: {
                xname: 'Binding',
                props: {
                  binding: {
                    items: 'items'
                  }
                }
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
            }
          },
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
        }
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