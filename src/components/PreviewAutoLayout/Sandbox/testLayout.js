const testPlainList = 
{
	
    "xname":"Wrap",
    "props":{
        "align": "start",
        "direction": "row",
    },
    "cart":{
        "xname":"Cart",
        "props":{
            "padding":"10px",
            "margin":"4px",
            "shadow":"0 2px 5px rgba(0,0,0,0.15)",
            "isOnHover":"true",
            "fill":"#E5E500",
            "lineWidth":"1px"
        }
    },
    "container":"PlainList",
    "presenter":{
        "xname":"Flexbox",
        "props":{
            "justify":"center"
        },
        "children":[
            {
                "presenter":"PreviewItem",
                "binding":{
                    "modelName":"value",
                    "modelLabel":"label"
                },
                "indicator":{
                    "xname": "ClickIndicator",
                    "binding": {
                        "modelName":"modelName"
                    }
                },
            }
        ],
    },
}

const doubleList = {
    "xname":"Flexbox",
    "cart":{
        "xname":"Cart",
        "props":{
            "padding":"10px 25px",
            "margin":"0",
            "corner":"8px",
            "isOnHover":"false",
            "linewidth":"0"
        }
    },
    "props":{
        "align":"start",
        "direction":"row"
    },
    "container":{
        "xname":"PlainList"
    },
    "presenter":{
        "xname":"Flexbox",
        "props":{
            "align":"start",
            "direction":"row"
        },
        "children":[
            {
                "presenter":{
                    "xname":"Gridbox",
                    "cart":{
                        "xname":"Cart",
                        "props":{
                            "padding":"10px",
                            "margin":"0px 0px 2px 0px",
                            "shadow":"0 2px 5px rgba(0, 0, 0, 0.15)",
                            "isOnHover":"true",
                            "fill":"#E5E500",
                            "linewidth":"1px"
                        }
                    },
                    "props":{
                        "columns":"8"
                    },
                    "container":{
                        "xname":"ItemClickList"
                    },
                    "presenter":{
                        "xname":"Flexbox",
                        "props":{
                            "justify":"center"
                        },
                        "children":[
                            {
                                "presenter":{
                                    "xname":"PreviewItem"
                                },
                                "binding":{
                                    "modelName":"value",
                                    "modelLabel":"label"
                                }
                            }
                        ]
                    }
                },
                "gateway":{
                    "binding":{
                        "items":"items"
                    }
                }
            }
        ]
    }
}


module.exports = testPlainList