module.exports = {
  xname: 'Gridbox',
  props: {
    columns: 6//列数
  },
  // presenter:
  // {
  //   xname: 'RssAutoLayout',
  //   binding: {
  //     "styleName": "title",
  //     "name": "subTitle"
  //   }
  // },

  presenter: {
    xname: 'Flexbox',
    props: {
      direction: 'column',
      justify: 'center row'
    },
    children: [
      {
        presenter: 'DefaultAvatar',
        binding: {
          path: 'url'
        },
        indicator:{
          xname:'ClickIndicator',
          binding: {
            "id":"id",
            "path":"path",
            "name":"name",
          }
        },
      },
      {
        presenter: "Text",
        binding: {
          name: "content"
        },
        props:{
          marginTop: '8px'
        }
      }
    ],
  },

  cart: {
    xname: 'Cart',
    props: {
      padding: '5px 10px',
      margin: '5px',
      linewidth: 0
    }
  },
  indicator:{
    xname:'ManageMenuIndicator',
    props:{
      action: {
        deleteAPI: '/api/pub/data/services/navigation/(id)'
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
      addnew: ''
    }
  },
  navigation: {
    model: {
      delConfirmTips: true,
      api: {
        createAPI: '/openapi/lc/autoApi/lowAutoPageStyles/rss/json',
        getAPI: '/openapi/lc/autoApi/lowAutoPageStyles/rss/list/group/styleName',
        updateAPI: '/openapi/lc/autoApi/lowAutoPageStyles/rss/list/{id}',
        deleteAPI: '/openapi/lc/autoApi/lowAutoPageStyles/rss/list/{id}'
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
      {
        label: '类别',
        field: 'typeId',
        type: 'select-fetch',
        rules: {
          isRequired: true
        },
        props: {
          placeholder: '请选择类别'
        },
        saveData: { //额外提交的字段和值
          typeName: 'name'
        },
        options: {
          api: '/api/pub/data/services/navCategory',
          label: 'name',
          value: 'id',
        }
      },
      ]
    }
  }
};
