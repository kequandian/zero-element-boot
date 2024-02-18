module.exports = 
  {
    xname: 'Gridbox',
    props: {
        columns: 8
    },
    mock:[
      {
        "bindingName": null,
        "componentId": "111",
        "componentName": null,
        "componentOption": "presenter",
        "componentProps": {
            "size": "50"
        },
        "componentType": "Avatar",
        "containerStyleName": null,
        "datasetName": null,
        "descriptor": null,
        "id": "123",
        "moduleData": null,
        "moduleKey": "",
        "moduleName": "Avatar",
        "moduleProps": [
            {
                "assembledAs": null,
                "dataType": "STRING",
                "id": "228",
                "moduleId": "123",
                "moduleKey": null,
                "moduleName": null,
                "propDataType": null,
                "propName": "size",
                "propValue": "50"
            }
        ],
        "name": "Avatar",
        "pageId": null,
        "pid": "129",
        "referenceGatewayName": null,
        "referenceStyleName": null
      },
      {
        "bindingName": null,
        "componentId": null,
        "componentName": null,
        "componentOption": "autolayout",
        "componentProps": {"xname":"Gridbox","props":{"columns":8},"presenter":{"xname":"Title","props":{}},"mock":[{"moduleName":"SelectList"}, {"moduleName":"SelectList"}],"binding":{"moduleName":"content"},"cart":{"xname":"Cart","props":{"padding":"10px","margin":"","linewidth":0,"corner":"8px","fill":"#edf2f7"},"unselector":"","indicator":{"xname":"ShadowIndicator","props":{}},"selector":{"xname":"SelectedCartUpperRightIcon","props":{"state":"selected","padding":"0"}}},"container":"SelectList"},
        "componentType": "autolayout",
        "containerStyleName": null,
        "datasetName": null,
        "descriptor": "{\"xname\":\"Gridbox\",\"props\":{\"columns\":5},\"presenter\":{\"xname\":\"Flexbox\",\"props\":{\"align\":\"start\",\"direction\":\"column\",\"justify\":\"center\",\"spacing\":10},\"children\":[{\"presenter\":{\"xname\":\"ItemPlaceholder\",\"props\":{\"bg\":\"#FEFCFE\"}}},{\"presenter\":\"Text\",\"gateway\":{\"xname\":\"Binding\",\"props\":{\"binding\":{\"content\":\"content\"}}}}]},\"binding\":{\"moduleName\":\"content\",\"componentType\":\"__cart.xname\",\"componentProps\":\"__cart.props\"},\"cart\":{},\"container\":\"SelectList\",\"bounding\":{\"marginRight\":\"10px\",\"marginTop\":\"5px\",\"padding\":\"10px\",\"border\":\"1px solid #d0cdcd\"},\"unselector\":{\"xname\":\"SelectedCartUpperRightIcon\",\"props\":{}},\"indicator\":{\"xname\":\"ShadowIndicator\",\"props\":{}},\"selector\":{\"xname\":\"SelectedCartUpperRightIcon\",\"props\":{\"state\":\"selected\"}}}",
        "id": "129",
        "moduleData": null,
        "moduleKey": null,
        "moduleName": "CartsAutolayout",
        "moduleProps": [],
        "name": "CartsAutolayout",
        "pageId": null,
        "pid": "0",
        "referenceGatewayName": null,
        "referenceStyleName": null
    },
    ],
    presenter: {
    },
    binding: {
      'moduleName': 'content',
      'componentType': '___presenter.xname',
      'componentProps': '___presenter.props'
    },
    cart: {
      xname: 'Cart',
      props: {
        padding: '10px',
        margin: '',
        linewidth: 0,
        corner: '8px',
        fill: '#edf2f7'
      },
  
      unselector: "", //默认样式
      indicator:
      {
        xname: "ShadowIndicator",
        props: {
        }
      }, //hover 时用, 第一次向子组件转递时,  更名为 hoverIndicator
      selector: {
        xname: "SelectedCartUpperRightIcon",
        props: {
          state: 'selected',
          padding: '0'
        }
      }
    },
    container: 'SelectList'
  }
  