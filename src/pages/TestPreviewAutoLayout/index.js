import React, { useState, useEffect } from 'react';
import {AutoLayout, PreviewAutoLayout, BootPreviewAutoLayout} from '@/components';
import {GridViewport, MultiViewport} from '@/components/layout';
import { Viewport } from '@/components/cart';
import DefaultPlaceholder from '@/components/presenter/placeholder/DefaultPlaceholder';

const TestPlainList =() =>{
  const layoutData = 
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

    return (
      <AutoLayout layout={layoutData}/>
    )
}

const TestDoubleList =()=>{
    const layoutData = {
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

    return (
      <PreviewAutoLayout layout={layoutData}/>
    )
}

const TestBootPreviewAutoLayout = ()=>{
    const layoutData = {
        "presenter": {
        "xname": "Wrap",
        "children": [
            {
                "xname": "Avatar",
                "props": {
                    "url":"http://local.cdnline.io/master.jpg"
                }
            },
            {
                "xname": "Avatar",
                "props": {
                    "url":"http://local.cdnline.io/master.jpg"
                }
            },
            {
                "xname": "Avatar",
                "props": {
                    "url":"http://local.cdnline.io/master.jpg"
                }
            }
            ],
            "cart": "Outline"
        },
        "cart": "Viewport"
    }

  return (
    <BootPreviewAutoLayout/>
    // <PreviewAutoLayout layoutData={layoutData}/>
  )
}

const TesViewPort= ()=>{
  const layoutData = 
  {
    "xkey": "b87efc94-f1c4-4610-a051-cea43a874097",
    "presenter": {
      "presenter": {
        "xname": "Avatar",
        "props": {
          "url": "http://local.cdnline.io/master.jpg"
        }
      },
      "cart": {"xname": "Outline", "props":{"shape":"box"}},
      "xname": "Gridbox",
      "props":{"columns": 5}
    },
    "cart": "Viewport"
  }
  return <PreviewAutoLayout layout={layoutData}/>
}

const TestGridViewport = ()=>{
    return (
        <GridViewport 
            horizontalWeights={[2, 2, 1]}
            verticalWeights={[3, 1]}>
        <DefaultPlaceholder>Left</DefaultPlaceholder>
        <DefaultPlaceholder>Top</DefaultPlaceholder>
        <DefaultPlaceholder>Right</DefaultPlaceholder>
        <DefaultPlaceholder/>
        <DefaultPlaceholder/>
        <DefaultPlaceholder/>
      </GridViewport>
      )
}

const TestPreviewGridViewport=()=>{
    const layoutData = 
    {
        "xkey": "b87efc94-f1c4-4610-a051-cea43a874097",
        "children": [
            "DefaultPlaceholder",
            "DefaultPlaceholder",
            "DefaultPlaceholder",
            "DefaultPlaceholder",
            "DefaultPlaceholder",
            "DefaultPlaceholder"
        ],
        "xname": "GridViewport",
        "props": {
            "horizontalWeights": [2, 2, 1],
            "verticalWeights": [3, 1]
        }
    }
  return <PreviewAutoLayout layoutData={layoutData}/>
}

const TestPreviewMulitViewport = ()=>{
    const layoutData = 
    {
        "xkey": "b87efc94-f1c4-4610-a051-cea43a874097",
        "children": [
            "DefaultPlaceholder",
            "DefaultPlaceholder",
            "DefaultPlaceholder",
            "DefaultPlaceholder",
            "DefaultPlaceholder",
            "DefaultPlaceholder"
        ],
        "xname": "MultiViewport",
        "props": {
            "horizontalWeights": [2, 2, 1],
            "verticalWeights": [3, 1]
        }
    }
    return (
        <PreviewAutoLayout layoutData={layoutData}/>
    )
}

const TestNestedMultiViewport = () => {
  const gridConfig = {
    horizontalWeights: [3, 2],
    verticalWeights: [4, 1],
    gap: '5px',
    children: [
      {
        horizontalWeights: [3, 1],
        verticalWeights: [1],
        children: [
          {            
            horizontalWeights: [1],
            verticalWeights: [1]
          },
          {
            horizontalWeights: [1],
            verticalWeights: [1,2],
          }
        ]
      },
      {
        horizontalWeights: [2, 2],
        verticalWeights: [2, 1],
        children: []
      }
    ]
  };


  const generateChildren = (config, parentPath = 'root', depth = 0) => {
    return config.children.flatMap((child, i) => {
      const currentPath = `${parentPath}-${i}`;
      
      if (child.children) {
        return React.cloneElement(
          <DefaultPlaceholder 
            key={currentPath}
            horizontalWeights={child.horizontalWeights}
            verticalWeights={child.verticalWeights}
          >
            层级{depth+1}-{i}
          </DefaultPlaceholder>,
          {
            children: generateChildren(child, currentPath, depth + 1)
          }
        );
      }
      
      return Array.isArray(child)
        ? child.map((_, j) => (
            <DefaultPlaceholder 
              key={`${currentPath}-${j}`}
              horizontalWeights={child.horizontalWeights}
              verticalWeights={child.verticalWeights}
            >
              单元{depth+1}-{j+1}
            </DefaultPlaceholder>
          ))
        : null;
    });
  };

  return (
    <MultiViewport gridConfig={gridConfig}>
      {/* {generateChildren(gridConfig)} */}
      <DefaultPlaceholder/>
      <DefaultPlaceholder/>
      <DefaultPlaceholder/>
      <DefaultPlaceholder/>
      <DefaultPlaceholder/>
      <DefaultPlaceholder/>
      <DefaultPlaceholder/>
      <DefaultPlaceholder/>
      <DefaultPlaceholder/>
      <DefaultPlaceholder/>
      <DefaultPlaceholder/>
      <DefaultPlaceholder/>
    </MultiViewport>
  );
};

export default function TestPreviewAutoLayout (props) {
  
  return (
    <>
      {/* <TestBootPreviewAutoLayout/> */}
      {/* <TestPlainList/> */}
      {/* <TestDoubleList/> */}
      {/* <TesViewPort /> */}
      {/* <TestGridViewport/> */}
      {/* <TestPreviewGridViewport/> */}
       <TestNestedMultiViewport/>
    </>
  )
}
