module.exports = {
  xname: 'Flexbox',
  props: {
    align: 'start',
    direction: 'row',
    justidy: 'center'
  },
  children: [{
    presenter: 'ImageAnimation',
    gateway: {
      xname: "Binding",
      props: {
        binding: {
          imgUrl: 'url'
        }
      }
    }
  }, {
    presenter: 'ContentText',
    gateway: {
      xname: "Binding",
      props: {
        binding: {
          title: "title",
          text: "text"
        }
      }
    }
  }, {
    presenter: 'ContentFinish',
    gateway: {
      xname: "Binding",
      props: {
        binding: {
          time: "time"
        }
      }
    }
  }]
};