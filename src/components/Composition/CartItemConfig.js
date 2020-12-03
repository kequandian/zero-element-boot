module.exports = {
    layout: {
        name: 'Grid',
        props: {
          col: 4,
        },
        children: [
          {
            name: 'Avatar',
            span: 1,
            gateway: {
              name: 'Gateway',
              props: {
                field: 'item1',
                converter: {
                }
              }
            }
          },
          {
            name: 'Title',
            span: 4,
          },
          {
            name: 'Detailed',
            span: 4,
          },
          {
            name: 'ButtonList',
            span: 4,
          }
        ]
      },
  };