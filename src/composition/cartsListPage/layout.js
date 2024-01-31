module.exports = {
    xname: 'Gridbox',
    props: {
        columns: 5
    },
    presenter: {
      xname: 'Flexbox',
      props: {
          align: 'start',
          direction: 'column',
          justify: 'center',
          spacing: 10
      },
      children: [
        {
          presenter: {
            xname: 'ItemPlaceholder',
            props:{
              bg: '#FEFCFE'
            }
          },
        },
        {
          presenter: 'Text',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                content: 'content'
              }
            }
          }
        },
      ]
    },
    binding: {
      "moduleName": "content",
      "componentType": "__cart.xname",
      "componentProps": "__cart.props"
    },
    cart: {
    },
    container: 'SelectList',
    bounding: {marginLeft: '10px', marginTop: '5px', padding: '10px', border: '1px solid #37373D'},
    unselector: {
      xname: "SelectedCartUpperRightIcon",
      props:{
      }
    }, 
    // indicator:{
    //   xname:'DeleteIndicator',
    //   props:{
    //     action: '/openapi/lc/apis/(id)'
    //   },
    //   binding: {
    //     "id":"id"
    //   }
    // },
    selector: {
      xname: "SelectedCartUpperRightIcon",
      props: {
        state: 'selected',
      }
    }
  };
  