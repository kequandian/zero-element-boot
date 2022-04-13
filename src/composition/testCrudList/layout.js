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
      {
        presenter: 'Avatar',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              avatar: 'url'
            }
          }
        }
      },
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
      api: '',
      fields:[
        {
          label:'姓名', 
          field:'name', 
          type:'input',
          required:{
            placeholder: '',
          }
        },
        {
          label:'年龄', 
          field:'age', 
          type:'input'
        }
      ]
    }
  }
}
