
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

>
> 同时支持 `indicator`
```json
{
    "xname": "Avatar",
    "props": {
        "url":"https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png"
    },
    "indicator": {
       "xname": "OutlineIndicator",
       "props": {
           "color": "#804040"
       }
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

> 同时支持下面描述
```json
{
    "presenter":{
       "xname": "Avatar",
       "props": {
           "url":"https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png"
       }
       "cart": {
          "xname": "CssCart",
          "props": {
              "padding":"10px",
	      "border":"1px #ff000 solid",
              "backgroundColor":"red"
          }
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

### 由多个子组件组成的 `AutoLayout` 新组件

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

> 直接指定布局 `HStack`
```json
{
    "xname": "HStack",
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
       "direction": "column"
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
           "fill": "#FF0000"
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

## 数据绑定与组件属性部分

### 数据源字段绑定子组件属性
- `avatarUrl`为数据源字段
- 也可以认为是新的`AutoLayout`的组件属性

```json
{
    "xname": "Avatar",
    "binding": {
        "avatarUrl": "url"
    }
}
```

### 设定`AutoLayout`新组件属性
- `avatarUrl`仍然为数据源字段
- `url`为`presentr`子组件属性
- 新`AutoLayout`属性设定为`imageUrl`

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

### 数据源绑定`AutoLayout`属性
- 以上`AutoLayout`配置为作为子组件定义在以下配置组件的`presenter`
- 数据源字段`avatarUrl`绑定组件属性`imageUrl`

```json
{
  "presenter":{
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
  },
  "binding": {
     "avatarUrl": "imageUrl"
  }
}
```

### 为`AutoLayout`组件提供模拟数据
```json
{
  "presenter":{
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
  },
  "binding": {
     "avatarUrl": "imageUrl"
  },
  "mock": {
     "avatarUrl": "http://"
  }
}
```

### 为`AutoLayout`组件提供外层数据源
```json
{
    "layout": {
        "presenter":{
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
        },
        "binding": {
            "avatarUrl": "imageUrl"
        }
    },
    "binding": {
        "userImg": "avatarUrl"
    },
    "dataSource": {
        "userImg": "http://",
        "userName": "Bob"
    }
}
```

### 多个子组件数据绑定
- 需在各个`children`子组内绑定
- `title`为数据源字段, `content`为子组件属性
- `avatarUrl`为数据源字段, `url`为子组件属性
- 可以认为新配置组件属性为 `avatarUrl`,`title`, 也可以设定组件属性, 然后通过外加一层`binding`绑定数据源字段

```json
{
    "children": [
      {
        "xname": "Avatar",
        "props": {
          "size":"90"
        },
        "binding": {
          "avatarUrl": "url"
        }
      },
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
```

### 基于`filter`的数据绑定
- 与`binding`不同的是，`filter` 只传递过滤字段至子组件，数据源其他字段不传递
- 如数据源除`avatarUrl`外，还有`name`, 则`name`不会传递至`Avatar`组件

> 数据源
```json
{
   "avatarUrl":"https://",
   "name": "Bob"
}
```

> 组件配置
```json
{
    "xname": "Avatar",
    "filter": {
        "avatarUrl": "url"
    }
}
```

### 基于`chain`的多层次数据绑定
- `chain`是一个数组, 数组内每一项数据当作`binding`逻辑进行处理
- "-" 代表如果数据源是一个数组，获取第`[1]`项数据项传递到下一个`chain`项
- "|" 代表过滤数据绑定逻辑, "|" 后面的值`{profile:{}}`是过滤条件
- 过滤条件`[]`代表数据源字段`users`展开为列表往下一个`chain`项传递
- 过滤条件`{}`代表数据源字段`profile`内的所有字段展开后往下一个`chain`项传递,如果`{}`有绑定字段，则按`fiter`逻辑处理

> 数据源
```json
{
   "users":[
       {
          "name":"Bob",
          "profile": {
              "avatarUrl":"https://",
              "age": 15
          }
       },
      {
          "name":"Jose",
          "profile": {
              "avatarUrl":"https://avatars/jose.png",
              "age": 21
          }
       }
   ]
}
```

> 组件配置
```json
{
    "xname": "Avatar",
    "chain": [
      {
        "|": {
           "users":[]
        }
      },
      {
         "_": 1
      },
      {
        "|": {
           "profile": {}
        }
      },
      {
        "avatarUrl": "url"
      }
    ]
}
```

通过以上`chain`绑定后，最后绑定到组件的数据为
> 最后一项的`chain`是`binding`逻辑, 数据源中的`age`未被过滤

```json
{ 
  "url": "https://avatars/jose.png", 
  "age": 21 
}
```


### 自定义数据绑定
- 除`binding`,`filter`,`chain`外，还可以自定义数据传递逻辑 `Gateway`,
- `ChartData` 为命名的数据网关, 需要增加到数据网关集合

> 全局增加自定义`Gateway`
```js
NamedGatewaySet({
  ChartConvertData
})
```

```json
{
    "presenter": "Avatar",
    "gateway": {
      "xname": "ChartConvertData",
      "props": {
          "chart":"pie"
      }
    }
}
```



## 组件事件响应部分
  
### 通过代码响应事件
> `SelectList` 单选容器组件
> `itemData` 是选择后触发的返回的事件数据项, 里面会多返回一个状态 `isSelected`, 选择还是反选

```json
{
    "presenter": "Avatar",
    "Container": "SelectList"
}
```

> 通过代码响应事件
```js
export default function UserSelect(props){
  const {items, ...rest} = props

  const onHandleItemClick = (itemData) => {
      if (itemData.isSelected) {
        console.log('选择执行事件')
      }
  }
  
  return (
      <Box spacing='3px'>
        <AutoLayout layout={layout} dataSource={items} {...rest} onItemClick={onHandleItemClick} />
      </Box>
  )
```


### 响应鼠标移动事件
> 鼠标触发`hover`事件时, 响应`ShadowIndicator`效果

```json
{
    "presenter": "Avatar",
    "Container": "PlainList",
    "indicator": "ShadowIndicator"
}
```

### 响应选择事件

```json
{
    "presenter": "Avatar",
    "Container": "SelectList",
    "indicator": "ShadowIndicator",
    "selector": {
      "xname": "SelectedCartUpperRightIcon",
      "props":{
         "state": "selected"
      }
    },
    "unselector": {
      "xname": "SelectedCartUpperRightIcon"
    }
}
```


## 单选或多选

### 由列表组成的单选组件
- `indicator` 响应鼠标状态，`hover`, 菜单等, 也可以不响应任何事件，作为`Selector`组件的纯风格叠加组件
- `unselector` 默认状态的 `indicator`
- `selector` 选中状态的 `indicator`
- 由列表组件 `SelectList` 实现单选逻辑
- 可以变更列表组件 `MultiSelectList` 切换为复选组件

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
        }
      },
      {
        "xname": "Text",
        "props": {
          "w": "100%",
          "textAlign": "center",
          "marginTop": "10px"
        },
        "binding": {
          "title": "content"
        }        
      }
    ],
  },
  "cart": {
      "xname": "Cart",
      "props": {
        "linewidth": "0",
        "padding":"0"
      }
  },  
  "container": "SelectList",
  "indicator":{
    "xname": "TagIndicator",
    "props": {
      "color": "#d4237a",
      "none": "any",
      "outline": "any"
    }
  },
  "unselector": {
    "xname": "SelectAvatar",
    "props": {
      "state": "unselected"
    }
  },
  "selector": {
    "xname": "SelectAvatar",
    "props": {
      "state": "selected"
    }
   }
 }
```

### 由多个子组件组成的单选组件



## 管理组件部分

### 标准增删改查管理组件
- `ManageList` 对一个列表 进行管理 绑定参数 
- ManageList配置的 layout ，执行完事件之后不能自动刷新页面，需要回调出去再执行刷新事件

```js
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
