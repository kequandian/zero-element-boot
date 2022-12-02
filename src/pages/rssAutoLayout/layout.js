module.exports = {
  presenter:
  {
    xname: 'RssAutoLayout',
    binding: {
      "styleName": "title",
      "name": "subTitle"
    }
  },
  container: {
    xname: "ManageList",
    props: {
      addnew: ''
    }
  },

  navigation: {
    model: {
      delConfirmTips: true,
      api: {
        createAPI: '/api/pub/data/services/navigation',
        getAPI: '/api/pub/data/services/navigation/(id)',
        updateAPI: '/api/pub/data/services/navigation/(id)',
        deleteAPI: '/api/pub/data/services/navigation/(id)'
      },
      fields: [{
        label: '标题',
        field: 'name',
        type: 'input',
        defaultValue: '123456',
        rules: {
          isRequired: true
        },
        props:{
          placeholder: '请输入标题',
        }
      },
      {
        label: '图片',
        field: 'url',
        type: 'input',
        rules: {
          isRequired: true
        },
        props:{
          placeholder: '请输入图片',
        }
      },
      {
        label: '链接',
        field: 'path',
        type: 'input',
        rules: {
          isRequired: true
        },
        props:{
          placeholder: '请输入本地链接/第三方以http开头'
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
        saveData:{ //额外提交的字段和值
          typeName: 'name'
        },
        options: {
          api: '/api/pub/data/services/navCategory',
          label: 'name',
          value: 'id',
        }
      },
      {
        label: '描述',
        field: 'desc',
        type: 'input',
        props: {
          placeholder: '描述属性'
        }
      },
      
      ]
    }
  },



  cart: {
    xname: "Cart",
    props: {
      fill: 'transparent',
      linewidth: 0,
      isOnHover: false,
      margin: '0px',
      padding: '0px'
    },
    // defaultIndicator: "OnDeleteIndicator", //默认样式
    // indicator: "OnDeleteIndicator",  //hover 时用, 第一次向子组件转递时,  更名为 hoverIndicator
    // selector: "OnDeleteIndicator"

  }

}