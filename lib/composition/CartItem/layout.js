const layout = {
  name: 'Flexbox',
  props: {
    col: 1
  },
  children: [{
    name: 'Avatar',
    span: 1,
    gateway: {
      name: 'Gateway',
      props: {
        field: 'icon',
        converter: {
          icon: 'avatarIcon'
        }
      }
    }
  }, {
    name: 'Title',
    span: 1,
    gateway: {
      name: 'Gateway',
      props: {
        field: 'title',
        converter: {
          title: 'TitleText'
        }
      }
    }
  }, {
    name: 'Title',
    span: 1,
    gateway: {
      name: 'Gateway',
      props: {
        field: 'title',
        converter: {
          title: 'TitleText'
        }
      }
    }
  }],
  container: 'Cart'
};