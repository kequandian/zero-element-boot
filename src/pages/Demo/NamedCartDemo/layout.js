module.exports = {
    "container": {
        "xname": "SelectList"
    },
    "presenter": {
        "presenter": {
            "children": [
                {
                    "binding": {
                        "imageUrl": "url"
                    },
                    "xname": "CozeImage",
                    "props": {
                        "w": "60",
                        "h": "60"
                    }
                },
                {
                    "binding": {
                        "title": "content"
                    },
                    "xname": "Title"
                }
            ],
            "xname": "VStack",
            "props": {
                "spacing": "6",
                "align": "align-items-center"
            }
        },
        "mock": {
            "imageUrl": "http://local.zero.boot.cn/autoapi/images/file.png",
            "title": "文件"
        },
        "cart": {
            "xname": "SquareCart",
            "props": {
                "margin": "0px",
                "corner": "8px",
                "fill": "#fff"
            }
        }
    },
    "mock": [
        {
            "id": 1,
            "imageUrl": "http://local.zero.boot.cn/autoapi/images/notice.png",
            "title": "公告",
            "description": "公告1"
        },
        {
            "id": 2,
            "imageUrl": "http://local.zero.boot.cn/autoapi/images/file.png",
            "title": "文件",
            "description": "公告2"
        }
    ],
    "xname": "Gridbox",
    "cart": {
        "xname": "CssCart",
        "props": {
            "style": {
                "padding": "16px",
                "boxShadow": "rgba(99, 99, 99, 0.2) 0px 2px 5px 0px",
                "margin": "5px",
                "overflow": "hidden",
                "borderRadius": "8px",
                "background": "#fff"
            }
        }
    },
    "props": {
        "columns": "3"
    },
    "indicator":{
        "xname": "DeleteIndicator",
        "props":{
            "isDisabled": true,
            "action": '/api/(id)'
        },
        "binding": {
            "id":"id"
        }
    },
    "selector": {
        "xname": "OutlineSelector",
        "props": {
        }
      }
}