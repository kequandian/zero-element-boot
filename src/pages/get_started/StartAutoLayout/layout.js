export default {
    "presenter": {
        "children": [
          {
            "xname": "Text",
            "props": {
              "textAlign": "center",
              "marginTop": "10px",
              "fontWeight":"bold"
            },
            "binding": {
                "title": "content"
            },        
          },
          {
            "xname": "Avatar",
            "props": {
              "size":"90"
            },
            "binding": {
                "imageUrl": "url"
            },
          },
        ],
    },
    "container": "PlainList",
    "cart":"Cart",
    "binding": {
        "avatarUrl": "imageUrl",
        "brand": "title"
    }
 }