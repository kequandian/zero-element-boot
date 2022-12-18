
## 单组件部分

### 通过`AutoLayout`展示一个组件 

```json
{
    "xname": "Avatar"
}
```

### 通过`AutoLayout`展示一个带参数的组件 

```json
{
    "xname": "Avatar",
    "props": {
		   "url":"https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png"
    }
}
```

### 通过 `presenter` 展示单个组件

```json
{
    "presenter": "Avatar"
}
```

> 带参数
```json
{
    "presenter": {
        "xname": "Avatar",
        "props": {
            "url":"https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png"
        }
    }
}
```


### 为组件增加风格

```json
{
    "xname": "Avatar",
    "props": {
        "url":"https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png"
    },
    "cart": "Cart"
}
```

> 或更多可配置的风格
```json
{
    "presenter":{
        "xname": "Avatar",
        "props": {
            "url":"https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png"
        }
    },
    "cart": {
        "xname": "CssCart",
        "props": {
			     "padding":"10px",
			     "border":"1px #ff000 solid",
           "backgroundColor":"red"
        }
    }
}
```


### 为`AutoLayout`设置参数
- 绑定的键即为组件参数 
- 以下`avatar_url` 为新组件参数
- `url`为新组件内部子组件`Avatar`的参数，对新组件消费者透明

```json
{
    "xname": "Avatar",
    "cart": {
        "xname": "CssCart",
        "props": {
			      "margin":"10px",
			      "padding":"10px",
			      "border":"1px #ff000 solid"
        }
    },
    "binding": {
        "avatarUrl": "url"
    }
}
```

> 或
```json
{
    "presenter": {
       "xname": "Avatar"
    },
    "cart": {
        "xname": "CssCart",
        "props": {
			     "margin":"10px",
			     "padding":"10px",
			     "border":"1px #ff000 solid"
        }
    },
    "binding": {
        "avatarUrl": "url"
    }
}
```


## 多组件部分

### 由多个子组件组成的`AutoLayout`新组件

```json
{
    "children": [
        "Butter",
        "Clean",
        "Clear",
        "Pink"
    ]
}
```

###  由多个带参数的子组件组成的`AutoLayout`新组件

```json
{
    "children": [
        {
            "xname": "Avatar",
            "props":{
                "url": "http://local.webtools.io/pepsi.png",
            }
        },
        {
            "xname": "Avatar",
            "props":{
                "url": "https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png"
            }
        }
    ]
}
```

### 为每个子组件增加统一的`Cart`

```json
{
    "children": [
        "Butter",
        "Clean",
        "Clear",
        "Pink"
    ],
    "cart": "Cart"
}
```

### 为每个子组件配置不同的`Cart`

```json
{
    "cart": "Cart",
    "children": [
        {
            "xname": "Butter"
        },
        {
            "xname": "Clean",
            "cart": {
                "xname": "CssCart",
                "props": {
                    "background": "blue"
                }
            }
        },
        {
            "xname": "Clear",
            "cart": {
                "xname": "CssCart",
                "props": {
                    "background": "green"
                }
            }
        },
        {
            "xname": "Pink",
            "cart": {
                "xname": "CssCart",
                "props": {
                    "background": "black"
                }
            }
        }
    ]
}
```

###  由多个子组件组成并且对其布局的`AutoLayout`新组件
> 配置有 `children` 或 `presenter`时, 即 `xname` 认为是布局组件

```json
{
    "xname": "Wrap",
    "children": [
        "Butter",
        "Clean",
        "Clear",
        "Pink"
    ]
}
```

> 布局带参数
```json
{
    "xname": "Flexbox",
    "props": {
		"direction":"row"
    },
    "children": [
        "Butter",
        "Clean",
        "Clear",
        "Pink"
    ]
}
```

### 多个子组件的属性分别绑定不同数据
> 键为数据源字段，值为子组件属性

```json
{
    "xname": "Flexbox",
    "props": {
		   "direction":"column"
    },
    "children": [
        {
            "xname": "Avatar",
            "props": {
                "size":"90"
            },
            "binding":{
                "avatarUrl":"url"
            }
        },
        {
            "xname": "Clear",
            "binding":{
                "color":"color"
            }
        }
    ]
}
```


## 列表组件部分


### 配置`AutoLayout`列表组件
> 带有 `presenter`, 并且`container`是一个列表组件, 即`presenter`是容器组件的子组件

```json
{
    "presenter": "ItemPlaceholder",
    "container": "PlainList"
}
```

> 子组件带参数
```json
{
    "presenter": {
        "xname": "ItemPlaceholder",
        "props":{
			      "fill":"#FF0000"
        }
    },
    "container": "PlainList"
}
```

> 为子组件增加风格效果
```json
{
    "presenter": {
        "xname": "ItemPlaceholder",
        "props":{
			      "fill":"#FF0000"
        }
    },
    "container": "PlainList",
    "cart": "Cart"
}
```

> 为列表子组件布局使用不同的布局组件
```json
{
    "xname":"Wrap",
    "presenter": {
        "xname": "ItemPlaceholder",
        "props":{
			      "fill":"#ff0000"
        }
    },
    "cart": "Cart",
    "container": "PlainList"
}
```

> 绑定容器传递过来的数据源数据
```json
{
    "xname":"Wrap",
    "presenter": {
        "xname": "Avatar",
        "props":{
			      "size": "80"
        }
    },
    "cart": "Cart",
    "container": "PlainList",
    "binding": {
        "imageUrl": "url"
    }
}
```

## 复合嵌套组件部分

### 列表`AutoLayout`作为新的`AutoLayout`组件的子组件
> 直接通过 `AutoLayout` 描述符作为子组件

```json
{
    "children": [
        {
            "presenter": {
                "xname": "Avatar",
                "props":{
					          "size":"90"
                }
            },
            "container": "PlainList",
            "cart": "Cart",
            "xname":"Wrap",
            "binding": {
                "imageUrl": "url"
            }
        },
        {
            "xname": "Butter"
        }
    ],
   "xname": "Flexbox",
   "props":{
	    "direction":"column"
   },
   "container": "Container"
}
```

> 以下回顾一个更简单的例子, `AutoLayout` 描述符简单与否，都认为是 `AutoLayout` 组件

```json
{
    "children": [
        {
            "xname": "Avatar",
            "props":{
				        "size":"90"
            }
        },
        {
            "xname": "Butter"
        }
    ]
}
```

> 无论 `AutoLayout` 描述符如何复杂，都只是一个组件
```json
{
    "xname":"Wrap",
    "presenter": {
        "children": [
            {
                "presenter": {
                    "xname": "Avatar",
                    "props":{
						            "size":"90"
                    }
                },
                "container": "PlainList",
                "cart": "Cart",
                "xname":"Wrap",
                "binding": {
                    "imageUrl": "url"
                }
            },
            {
                "xname": "Butter"
            }
        ],
        "xname": "Flex",
        "props":{
           "direction":"column"
        },
        "container": "Container"
    },
    "container": "PlainList",
    "cart": "Cart",
    "binding": {
        "imageUrl": "url"
    }
}
```

## 数据绑定与组件参数部分


> 对多个子组件 绑定参数 ，同时传入参数
> title为 `AutoLayout` 新属性

```json
{
  "presenter": {
    "children": [
      {
        "presenter": {
            "xname": "Text",
            "props":{
                "w":"100%",
                "textAlign":"center",
                "marginTop":"10px"
            }
        },
        "binding": {
            "title": "content"
        },
      }
    ],
  }
}
  
  ```

> 对多个子组件 绑定参数 
> `avatarUrl` ，`title` 为 `AutoLayout` 新属性
> `url` 为 `Avatar` 的属性 ，`content` 为 `Text` 的属性

```json
{
  "presenter": {
    "children": [
      {
		  "xname": "Text",
          "binding": {
          "title": "content"
        },
        "props": {
           "textAlign": "center",
           "marginTop": "10px",
           "fontWeight":"bold"
        }
      },
	  {
	  	"xname": "Avatar",
	    "binding": {
	       "avatarUrl": "url"
	    },
	    "props": {
			   "size":"90"
	    }
	  },
    ],
  },
   "container": {
      "xname": "PlainList",
   },
   "cart":"Cart",
  }
  
  ```
  
  
  >  `SelectList` 响应事件
  >  打印传回来的`item` , `item` 里面会多返回一个 `isSelected` 点击状态 true or false

``` js
  const config = {
      items: items,
      layout: layout,
      ...rest
    };
  
    const onHandleItemClick = (data) => {
      console.log("data == ", data)
      if (data.isSelected) {
        console.log('执行事件')
      }
    }
  
    return (
      <Box spacing='3px'>
        <AutoLayout {...config} onItemClick={onHandleItemClick} />
      </Box>
    )
```



> 用ManageList对一个列表 进行管理 绑定参数 
>
> ManageList配置的 layout ，执行完事件之后不能自动刷新页面，需要回调出去再执行刷新事件

```json
{
  "presenter": {
    "children": [
      {
		  "xname": "Text",
        "binding": {
           "content": "content"
        },
        "props": {
           "textAlign": "center",
           "marginTop": "10px",
           "fontWeight":"bold"
        }
      },
    ],
  },
   "container": {
     "xname": "ManageList",
	 
	 // 增加按钮 ，不填用默认样式
	 // 使用增加按钮需要从外部传 isSwitch={true} 
     "props": {
       "addnew": "",
     }
   },
   "cart":"Cart",
   
   //鼠标移动时弹出的菜单按钮
   "indicator": {
       "xname": "ManageMenuIndicator",
       "props": {
		 // 暂时配合 ManageList用，删除功能
         "action": {
           "deleteAPI": "/api/u/rss/master/(id)"
         }
       },
       "binding": {
         "id": "id",
         "path": "url",
         "name": "content",
       }
     },
	 
	   //点击按钮之后执行 的api
	   "navigation": {
	     "model": {
	       "api": {
	         "createAPI": "/api/u/rss/master",
	         "getAPI":"/api/u/rss/master/(id)",
	         "updateAPI": "/api/u/rss/master/(id)",
	       },
		   
		   //弹出的表单项 ,可用chakra定义的表单 ,暂时只能用chakra 定义的默认样式
	       "fields": [
			   {
	         "label": "名称",
	         "field": "name",
	         "type":"input",
	         "defaultValue": '',
	         "rules": {
	           "isRequired": true
	         },
	         "props": {
	           "placeholder": "rss名称",
	         }
	       },
		   {
	         "label": "描述",
	         "field": "note",
	         "type":"input",
	         "defaultValue": '',
	         "rules": {
	           "isRequired": true
	         },
	         "props": {
	           "placeholder": "描述",
	         }
	       }
	       ]
	     }
	   }
  }
  ```


## 单选或多选
  

### 由多个子组件组成的单选组件
用SelectList 对一个列表 进行管理 绑定参数 
  ```json
  {
   "xname": "Flexbox",
   "presenter": {
     "children": [
      {
        "xname": "Avatar",
        "binding": {
          "avatarUrl": "url",
          "size": "size"
        },
      },
      {
        "xname": "Text",
        "binding": {
          "title": "content"
        },
        "props": {
          "w": "100%",
          "textAlign": "center",
          "marginTop": "10px"
        }
      }
    ],
  },
   "container": "SelectList",
   "cart": {
    "xname": "Cart",
    "props": {
      "linewidth": "0",
      "padding":"0"
    }
  },
  //默认状态
  "unselector": {
    "xname": "SelectAvatar",
    "props": {
      "state": "unselected"
    }
  },
  //hover状态
  "indicator":{
    "xname": "TagIndicator",
    "props": {
      "color": "#d4237a",
      "none": "any",
      "outline": "any"
    }
  },
  //选中状态
  "selector": {
    "xname": "SelectAvatar",
    "props": {
      "state": "selected"
    }
   }
 }
  ```

### 由多个子组件组成的复选组件

