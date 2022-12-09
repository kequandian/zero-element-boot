module.exports = {
  xname: 'Gridbox',
  props: {
    columns: "1",
    gridRowGapSize: '20px',
    gridColumnGapSize: '20px'

  },
  presenter: {
    children: [
      {
        xname: 'Text',
        binding: {
          "title": 'content'
        },
        props: {
          display: 'flex',
          alignItems: "center",
          justifyContent: "center",
          w: '100%',
          fontWeight: 'bold',
          lineHeight: '34px',
      fontSize: '18px'

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
    xname: "Cart",
    props: {

      width: '',
      height: '',
      padding: '10px 20px 20px',
      margin: '0',
      linewidth: 0,
      fill: '#edf2f7',
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
      {
        label: '描述',
        field: 'note',
        type: 'input',
        props: {
          placeholder: '描述内容'
        }
      },

      ]
    }
  }

}