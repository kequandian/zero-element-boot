module.exports = {
  xname: 'Flexbox',
  props: {
  },
  presenter: {
    xname: 'Flexbox',
    props: {
      direction: 'column',
      justify: 'center row',
    },
    children: [
      // {
      //   presenter: 'Avatar',
      //   gateway: {
      //     xname: 'Binding',
      //     props: {
      //       binding: {
      //         name: 'url'
      //       }
      //     }
      //   }
      // },
      {
        presenter: "Title",
        gateway: {
          xname: "Binding",
          props: {

            binding: {
              name: "titleText"
            }
          }
        }
      },
    ]
  },
  cart: {
    xname: 'Cart',
    props: {
      padding: '10px',
      margin: '10px',
      linewidth: 0
    }

  },
  container: 'SimCRUDList',
  navigation: {
    model: {
      api: {
        createAPI:'/api/crud/test/tests',
        getAPI:'/api/crud/test/tests/(id)',
        updateAPI:'/api/crud/test/tests/(id)',
        deleteAPI:''
      },
      fields:[
        {
          label:'姓名', 
          field:'name', 
          type:'input',
          required:{
            placeholder: '请输入姓名',
          }
        },
        // {
        //   label:'年龄', 
        //   field:'age', 
        //   type:'input'
        // }
      ]
    }
  }
}
