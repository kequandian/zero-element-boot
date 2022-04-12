module.exports = {
    xname: 'Flexbox',
    props: {
      direction: 'column',
      justify: 'center row'
    },
    children: [

      {
        presenter: 'Avatar',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              avatar: 'url'
            }
          }
        }
      },
      {
        presenter: "Title",
        gateway: {
          xname: "Binding",
          props: {

            binding: {
              name: "titleText"
            }
          }
        }
      },
    ]
  }