module.exports = {
  xname: 'Gridbox',
  props: {
    columns: 5
  },
  presenter: {
    xname: 'Flexbox',
    props: {
      align: 'start',
      direction: 'column',
      justify: 'center',
      spacing: 10
    },
    children: [{
      presenter: {
        xname: 'ItemPlaceholder',
        props: {
          bg: '#FEFCFE'
        }
      }
    }, {
      presenter: 'Text',
      gateway: {
        xname: 'Binding',
        props: {
          binding: {
            content: 'content'
          }
        }
      }
    }]
  },
  // mock: [
  //   {
  //     "bindingName": null,
  //     "componentId": "59",
  //     "componentName": null,
  //     "componentOption": "cart",
  //     "componentProps": {
  //         "padding": "10px 30px",
  //         "margin": "0",
  //         "corner": "8px",
  //         "fill": "#edf2f7",
  //         "linewidth": "1px"
  //     },
  //     "componentType": "Cart",
  //     "containerStyleName": null,
  //     "descriptor": null,
  //     "id": "99",
  //     "moduleData": null,
  //     "moduleKey": "",
  //     "moduleName": "Cart",
  //     "moduleProps": [
  //         {
  //             "assembledAs": null,
  //             "dataType": "TEXT",
  //             "id": "255",
  //             "moduleId": "99",
  //             "moduleKey": null,
  //             "moduleName": null,
  //             "propDataType": null,
  //             "propName": "padding",
  //             "propValue": "10px 30px"
  //         },
  //         {
  //             "assembledAs": null,
  //             "dataType": "STRING",
  //             "id": "256",
  //             "moduleId": "99",
  //             "moduleKey": null,
  //             "moduleName": null,
  //             "propDataType": null,
  //             "propName": "margin",
  //             "propValue": "0"
  //         },
  //         {
  //             "assembledAs": null,
  //             "dataType": "STRING",
  //             "id": "257",
  //             "moduleId": "99",
  //             "moduleKey": null,
  //             "moduleName": null,
  //             "propDataType": null,
  //             "propName": "corner",
  //             "propValue": "8px"
  //         },
  //         {
  //             "assembledAs": null,
  //             "dataType": "STRING",
  //             "id": "258",
  //             "moduleId": "99",
  //             "moduleKey": null,
  //             "moduleName": null,
  //             "propDataType": null,
  //             "propName": "fill",
  //             "propValue": "#edf2f7"
  //         },
  //         {
  //             "assembledAs": null,
  //             "dataType": "STRING",
  //             "id": "259",
  //             "moduleId": "99",
  //             "moduleKey": null,
  //             "moduleName": null,
  //             "propDataType": null,
  //             "propName": "linewidth",
  //             "propValue": "1px"
  //         }
  //     ],
  //     "name": "Cart",
  //     "pageId": null,
  //     "pid": "129",
  //     "referenceGatewayName": null,
  //     "referenceStyleName": null
  // },
  // ],
  dataset: '/openapi/crud/lc_low_auto_module_dataset/module_dataset/cartsList',
  binding: {
    "moduleName": "content",
    "componentType": "__cart.xname",
    "componentProps": "__cart.props"
  },
  cart: {},
  container: 'SelectList',
  bounding: {
    marginLeft: '10px',
    marginTop: '5px',
    padding: '10px',
    border: '1px solid #37373D'
  },
  unselector: {
    xname: "SelectedCartUpperRightIcon",
    props: {}
  },
  // indicator:{
  //   xname:'DeleteIndicator',
  //   props:{
  //     action: '/openapi/lc/apis/(id)'
  //   },
  //   binding: {
  //     "id":"id"
  //   }
  // },
  selector: {
    xname: "SelectedCartUpperRightIcon",
    props: {
      state: 'selected'
    }
  }
};