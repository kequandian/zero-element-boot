module.exports = {
    xname: 'Flexbox',
    props: {
      align: 'start',
      direction: 'column',
      justify: 'center'
    },
    children: [
      {
        presenter: 'ImageAnimation',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              url: 'imgUrl'
            }
          }
        }
      },
      {
        presenter: 'TextContent',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              title: 'title',
              describe: 'describe'
            }
          }
        }
      },
      {
        presenter: 'FootContent',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              adType: 'adType',
              createTime: 'createTime'
            }
          }
        }
      },
    ]
}