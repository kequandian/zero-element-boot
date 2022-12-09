module.exports = {
  xname: 'Gridbox',
  props: {
    columns: "12",
  },
  presenter: {
    children: [
      {
        xname: 'DefaultAvatar',
        binding: {
          "cover": 'url',
        },
        props: {
          "size": "100"
        }
      },
      {
        xname: 'Gridbox',
        props: {
          columns: "2"
        },
        children: [
          {
            xname: 'Text',
            binding: {
              "name": 'content'
            },
            props: {
              w: '60px',
              textAlign: 'center',
              overflow: 'hidden',
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",

            }
          },
          {
            xname: 'Text',
            binding: {
              "imageNumber": 'content',
            },
            props: {
              w: '30px',
              textAlign: 'center',
              color: '#8b94a1'
            }
          }

        ],
      }

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
      width: '100px',
      height: '30px',
      padding: '10px 0 4px',
      margin: '10px 0 0 10px',
      linewidth: 0,
      fill: '#edf2f7'

    }
  },

  indicator: {
    xname: 'ManageMenuIndicator',
    props: {
      action: {
        deleteAPI: '/api/u/autoApi/album/(id)'
      }
    },
    binding: {
      "id": "id",
      "path": "url",
      "ablumName": "content",
    }
  },

  navigation: {
    model: {
      api: {
        createAPI: '/api/u/autoApi/album',
        getAPI: '/api/u/autoApi/album/(id)',
        updateAPI: '/api/u/autoApi/album/(id)',
        deleteAPI: '/api/u/autoApi/album/(id)'
      },
      fields: [{
        label: '名称',
        field: 'ablumName',
        type: 'input',
        defaultValue: '',
        rules: {
          isRequired: true
        },
        props: {
          placeholder: '相册名称',
        }
      },
      {
        label: '名字',
        field: 'name',
        type: 'input',
        rules: {
          isRequired: true
        },
        props: {
          placeholder: '名字'
        }
      },
      {
        label: '描述',
        field: 'note',
        type: 'input',
        props: {
          placeholder: '描述相册'
        }
      },

      ]
    }
  }

}