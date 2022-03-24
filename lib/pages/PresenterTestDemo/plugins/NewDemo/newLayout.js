module.exports = {
  xname: "Flexbox",
  props: {
    align: "start",
    direction: 'row',
    justidy: 'center'
  },
  gateway: {
    xname: "Binding",
    props: {
      binding: {
        imgUrl: "imgUrl",
        title: 'title',
        theText: "theText",
        time: "time",
        adType: "adType"
      }
    }
  },
  cart: {
    xname: "HoverShadowCart",
    props: {
      padding: '16px',
      fill: "#cacaca"
    }
  },
  container: 'PlainList'
};