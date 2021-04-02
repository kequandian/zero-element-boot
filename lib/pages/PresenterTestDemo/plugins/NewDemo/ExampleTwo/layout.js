module.exports = {
  xname: 'Flexbox',
  props: {
    align: "start",
    direction: 'row',
    justify: 'center'
  },
  children: [{
    presenter: 'TextContent',
    gateway: {
      xname: "Binding",
      props: {
        binding: {
          title: 'title',
          theText: 'theText'
        }
      }
    }
  }, {
    presenter: 'ImageAnimation',
    gateway: {
      xname: "Binding",
      props: {
        binding: {
          imgUrl: 'imgUrl'
        }
      }
    }
  }, {
    presenter: "FootContent",
    gateway: {
      xname: "Binding",
      props: {
        binding: {
          time: 'time',
          adType: 'adType'
        }
      }
    }
  }]
};