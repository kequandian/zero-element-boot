module.exports = {
  xname: 'Gridbox',
  props: {
    columns: "4",

  },
  presenter: {
    children: [
      // {
      //   xname: 'DefaultAvatar',
      //   binding: {
      //     "cover": 'url',
      //   },
      //   props: {
      //     "size": "100"
      //   }
      // },
      {
        xname: 'Text',
        binding: {
          "name": 'content'
        },
        props: {
          display: 'flex',
          alignItems: "center",
          justifyContent: "center",
          w: '100%',
          textAlign: 'center',
          marginTop: '10px',
          fontWeight:'bold'
        }
      },

    ],
  },
  container: {
    xname: 'ManageList',
    props: {
      addnew: '',
      margin: '8px'
    }
  },
  cart: {
    xname: "CssCart",
    props: {
      width: '160px',
      height: '90px',
      padding: '10px 0 20px',
      margin: '0',
      linewidth: 0,
      backgroundColor: '#edf2f7'

    }
  },

  indicator: {
    xname: 'ManageMenuIndicator',
    props: {
      action: {
        deleteAPI: '/api/u/rss/master/(id)'
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
        createAPI: '/api/u/rss/master',
        getAPI: '/api/u/rss/master/(id)',
        updateAPI: '/api/u/rss/master/(id)',
        deleteAPI: '/api/u/rss/master/(id)'
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
          placeholder: 'rss名称',
        }
      },
      // {
      //   label: '描述',
      //   field: 'note',
      //   type: 'input',
      //   props: {
      //     placeholder: '描述内容'
      //   }
      // },

      ]
    }
  }
}