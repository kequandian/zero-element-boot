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
        align: 'start',
        direction: 'row',
      },
      children: [
        {
          presenter: {
            xname: 'Gridbox',
            props: {
              columns: 8
            },
            // 方法 一 gateway 绑定组件需要用的字段并赋值 =================
            presenter: {
              xname: 'Flexbox',
              props: {
                justify:'center'
              },
              children: [
                {
                  presenter: 'remoteItem',
                  gateway: {
                    xname: 'Binding',
                    props: {
                      binding: {
                        modelLabel: 'label',
                        modelName: 'value'
                      }
                    }
                  }
                },
              ]
            },
            // ==========================
            // 方法二 组件内部自行调用 item 字段====================
            //presenter: 'remoteItem' 
            // ==========================
            cart: {
              xname: 'Cart',
              props: {
                isOnHover: true,
                margin: '0px 0px 2px 0px',
                linewidth: '1px',
                padding: '10px',
                shadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
                fill: '#E5E5E5'
              }
            },
            container: 'ItemClickList',
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