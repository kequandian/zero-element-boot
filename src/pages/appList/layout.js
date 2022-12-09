module.exports = {
  xname: 'Gridbox',
  props: {
    columns: "3"
  },
  presenter: {
    children: [
      {
        xname: 'DefaultAvatar',
        binding: {
          "logo": 'url',
          "size": 'size'
        },
      },
      {
        xname: 'Text',
        binding: {
          "name": 'content'
        },
        props: {
          w: '100%',
          textAlign: 'center',
          marginTop: '10px'
        }
      }

    ],
  },
  // container: "SelectList",
 
  container: {
    xname: 'ManageList',
    // xname: 'PlainList',
    props: {
      addnew: '',
      margin:'8px'
    }
  },
  cart: {
    xname: "CssCart",
    props: {
      width:'130px',
      backgroundColor: '',
      fill: '#edf2f7',
      padding: '30px 40px',
      margin: '0'
    }
  },
  // props: {
  //   fill: 'transparent',
  //   lineWidth: 0,
  //   isOnHover: false,
  //   margin: '0px',
  //   padding: '0px'
  // },
  // unselector: "SelectedCartUpperRightIcon", //默认样式

  indicator: {
    xname: 'ManageMenuIndicator',
    props: {
      action: {
        deleteAPI: '/api/pub/data/services/navigation/(id)'
      }
    },
    binding: {
      "id": "id",
      "path": "url",
      "name": "content",
    }
  },

  navigation: {
    model: {
      api: {
        createAPI: '/openapi/crud/lc_low_auto_app/lowAutoApp/lowAutoApps',
        getAPI: '/openapi/crud/lc_low_auto_app/lowAutoApp/lowAutoApps/(id)',
        updateAPI: '/openapi/crud/lc_low_auto_app/lowAutoApp/lowAutoApps/(id)',
        deleteAPI: '/openapi/crud/lc_low_auto_app/lowAutoApp/lowAutoApps/(id)'
      },
      fields: [{
        label: '名称',
        field: 'name',
        type: 'input',
        defaultValue: '',
        rules: {
          isRequired: true
        },
        props: {
          placeholder: '网站名称',
        }
      },
      {
        label: '图片',
        field: 'logo',
        type: 'input',
        rules: {
          isRequired: true
        },
        props: {
          placeholder: '图片链接',
        }
      },
      {
        label: '备注',
        field: 'notes',
        type: 'input',
        props: {
          placeholder: '备注内容'
        }
      },

      ]
    }
  }

}