module.exports = {
  xname: 'Gridbox',
  props: {
    columns: "12"
  },
  presenter: {
    children: [
      {
        xname: 'DefaultAvatar',
        binding: {
          "albumUrl": 'url',
        },
        props: {
          size:'100'
        }
      },
      

      // {
      //   xname: 'Text',
      //   binding: {
      //     "name": 'content'
      //   },
        
      //     textAlign: 'center',
      //     marginTop: '10px'
        // }
      // }

    ],
  },
  container: {
    xname: 'ManageList',
    props: {
      addnew: '',
    }
  },
  cart: {
    xname: "CssCart",
    props: {
      width:'80px',
      height:'80px',
      backgroundColor: '#ff0000',
      // borderRadius:'10px',
      padding: '10px',
      margin: '0',
      fontWeight:'bold'
    }
  },

  indicator: {
    xname: 'ManageMenuIndicator',
    props: {
      action: {
        deleteAPI: '/api/u/autoApi/albumItem/(id)'
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
        createAPI: '/api/u/autoApi/albumItem',
        getAPI: '/api/u/autoApi/album/(id)',
        updateAPI: '/api/u/autoApi/album/(id)',
        deleteAPI: '/api/u/autoApi/album/(id)'
      },
      fields: [
        {
        label: '相册id',
        field: 'albumId',
        type: 'input',
        defaultValue: '',
        rules: {
          isRequired: true
        },
        props: {
          placeholder: '相册id',
        }
      },
      {
        label: '图片链接',
        field: 'albumUrl',
        type: 'input',
        defaultValue: '',
        rules: {
          isRequired: true
        },
        props: {
          placeholder: '图片链接',
        }
      },
      {
        label: '描述',
        field: 'note',
        type: 'input',
        defaultValue: '',
        rules: {
          isRequired: false
        },
        props: {
          placeholder: '图片描述',
        }
      }
      ]
    }
  }

}