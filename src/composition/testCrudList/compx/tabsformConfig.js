module.exports = {
    api: {
      createAPI: '/api/pub/data/services/navCategory',
      getAPI: '/api/pub/data/services/navCategory/(id)',
      updateAPI: '/api/pub/data/services/navCategory/(id)',
      deleteAPI: '/api/pub/data/services/navCategory/(id)'
    },
    fields: [{
        label: '类别名',
        field: 'name',
        type: 'input',
        required: {
          placeholder: '请输入类别名'
        }
      },
      {
        label: '描述',
        field: 'desc',
        type: 'input',
        required: {
          placeholder: '描述属性'
        }
      }
      ]
  };
  