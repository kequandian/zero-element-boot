module.exports = {
  xname: 'Gridbox',
  props: {
    columns: 6//列数
  },
 

  presenter: {
    xname: 'Flexbox',
    props: {
      direction: 'column',
      justify: 'center row'
    },
    children: [
      {
        presenter: "Text",
        binding: {
          styleName: "content"
        },
        props:{
          marginTop: '8px',
          // color:''
        }
      }
    ],
  },

  cart: {
    xname: 'Cart',
    props: {
      padding: '20px 10px',
      margin: '5px',
      linewidth: 0,
      fill:'#82b29b',
    }
  },
  indicator:{
    xname:'ManageMenuIndicator',
    props:{
      action: {
        deleteAPI: '/openapi/lc/autoApi/lowAutoPageStyles/rss/json/(styleName)'
      }
    },
    binding: {
      "id":"id",
      "path":"url",
      "name":"content",
    }
  },

  container: {
    xname: 'ManageList',
    // xname: 'PlainList',
    props: {
      addnew: '',
      margin:'8px'
    }
  },
  navigation: {
    model: {
      delConfirmTips: true,
      api: {
        createAPI: '/openapi/lc/autoApi/lowAutoPageStyles/rss/json',
        getAPI: '/openapi/lc/autoApi/lowAutoPageStyles/rss/json/(styleName)',
        updateAPI: '/openapi/lc/autoApi/lowAutoPageStyles/rss/list/{id}',
        deleteAPI: '/openapi/lc/autoApi/lowAutoPageStyles/rss/json/(styleName)'
      },
      fields: [{
        label: '标题',
        field: 'name',
        type: 'input',
        defaultValue: '',
        rules: {
          isRequired: true
        },
        props: {
          placeholder: '请输入标题',
        }
      },
      {
        label: '名字',
        field: 'url',
        type: 'input',
        rules: {
          isRequired: true
        },
        props: {
          placeholder: '请输入名字',
        }
      },
      ]
    }
  }
};
