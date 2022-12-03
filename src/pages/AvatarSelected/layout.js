module.exports = {
  xname: 'Flexbox',
  props: {
    direction: "column"

  },
  presenter: {
    children: [
      {
        xname: 'Avatar',
        binding: {
          "avatarUrl": 'url',
          "size": 'size'
        },

      },
      {
        xname: 'Text',
        binding: {
          "title": 'content'
        },
        props: {
          w: '100%',
          textAlign: 'center',
          marginTop: '10px'
        }
      }

    ],
  },
  container: "SelectList",
  // container: "ItemClickList",

  cart: {
    xname: "Cart",
    props: {
      linewidth: '0',
      padding:'0'
    }
  },
  props: {
    fill: 'transparent',
    lineWidth: 0,
    isOnHover: false,
    margin: '0px',
    padding: '0px'
  },
  unselector: "SelectAvatar", //默认样式
  indicator:
  {
    xname: "TagIndicator",
    props: {
      color: '#d4237a',
      none: 'any',
      outline: 'any'
    }
  }, //hover 时用, 第一次向子组件转递时,  更名为 hoverIndicator
  selector: {
    xname: "SelectAvatar",
    props: {
      state: 'selected'
    }
  }
}