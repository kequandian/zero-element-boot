如何创建一个React组件
Example_two.js

import React from 'react';
// import BigBox from '@/plugins/NewDemo/BigBox';
import { AutoLayout } from 'zero-element-boot';
import ExampleTwo from "@/plugins/NewDemo/ExampleTwo"
import layout from './newLayout';
require('./Example_two.less')

export default function ExampleComment(props){
    // console.log(props)
    const comment=[
        {
            imgUrl:"https://img.36krcdn.com/20201224/v2_0859a3ca4ddb49b4b8ff878270f07942_img_png",
            title:"不要对地产股心存幻想#36氪未来君#",
            theText:"过去一个月，资本市场发生了一个非常奇特的现象。大家买了很长时间的茅台、科技等股票的觉得估值太高了，要买低估值的股票，因此开始买地产买银行的股票。于是很多人就赔钱了。        大家都会觉得很疑惑：为什么银行地产股在估值这么低的情况下，价格增长的持续性会如此之差。银行地产到底是不是真正的低估值？ 其实背后的原因是，银行和地产代表了人类历史上最严重的产能过剩。",
            time:"2020-12-25 10:53",
            adType:"商业哲学"
        }
    ]

    const config = {
        items: comment,
        layout: layout,
    };
    // console.log(comment)
    //<ExampleTwo {...comment}/>
    return (
        <AutoLayout {...config}>
            <ExampleTwo />
        </AutoLayout>
    )
}

ExampleTwo.js

import React from 'react';
import { AutoComponent } from 'zero-element-boot';
import ImageAnimation from '@/plugins/NewDemo/ImageAnimation'
import TextContent from '@/plugins/NewDemo/TextContent'
import FootContent from '@/plugins/NewDemo/FootContent'
import layout from "./layout"

export default function ExampleTwo(props){
    // console.log(props)
    const allComponents={
        ImageAnimation,
        TextContent,
        FootContent,
    };
    const config={
        layout,
        ...props,
    }
    console.log(config)
    console.log(allComponents)
    return (
        <div className="BigBox">
            <AutoComponent {...config} allComponents={allComponents}/>
        </div>
    )
}

ImageAnimation.js

import React from 'react';

export default function ImageAnimation(props){
    // console.log(props)
    const { imgUrl }=props;
    return(
    <div className="ExampleImage">
        <img className="theImage"
            src={imgUrl}
        />
    </div>)
}

TextContent.js

import React from 'react';
import Title from '@/plugins/NewDemo/Title';
import TheText from '@/plugins/NewDemo/TheText'

export default function TextContent(props){
    // console.log(props)
    return (
        <div className="TextContent">
            <Title title={props.title}/>
            <TheText theText={props.theText}/>
        </div>
    )
}

Title.js

import React from 'react';

export default function Title(props){
    const {title}=props
    return(
        <div className="ExampleTitle">
            {title}
        </div>
    )
}

TheText.js

import React from 'react';

export default function TheText(props){
    // console.log(props)
    const {theText}=props
    // console.log(theText)
    return(
            <div className="ExampleText">
                {theText}
            </div>
    )
}

FootContent.js

import React from 'react';

export default function FootContent(props){
    const {time,adType}=props;
    return (
        <div className="ExampleTime">
            <div className="theType">{adType}</div>
            <div className="theTime">{time}</div>
        </div>
    )
}



如何通过Cart修饰组件

TheNewCart
import React, { useImperativeHandle, forwardRef, useState } from 'react';


export default forwardRef(function HoverShadowCart(props, ref) {

  /**
   * fill         背景
   * corner       圆角
   * stroke       边框
   * linewidth    边框线框
   * margin       边距
   * padding      内距
   * shadow       0 2px 8px rgba(0, 0, 0, 0.15)
   */

  const {
    children, fill = '#ffffff', corner = '4px', stroke = 'solid', linewidth = '1px',
    margin = '6px', padding = '10px', shadow = '0 0px 10px rgba(0, 0, 0, 0.35)', lineColor = '#DFE1E5', } = props;

  const [onHover, setOnHover] = useState(false);

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `c-HoverShadowCart`;
    }
  }));

  const toggleHover = () => {
    const result = !onHover;
    setOnHover(result)
  }

  let bgColor = `#ccc`;
  let showShadow = '';
  if (onHover) {
    bgColor = `#ffffdd`;
    showShadow = shadow;
  } else {
    bgColor = `#ccc`;
    showShadow = '';
  }

  return React.Children.map(children, child => {
    return <div className='c-hoverShadowCart-item' style={{
      margin: `30px`,
      padding: `30px`,
      borderRadius: `10px`,
      background: `${bgColor}`,
      borderStyle: `dashed`,
      boxShadow: `${showShadow}`,
      borderWidth: `${linewidth}`,
      borderColor: `#fffff0`,
    }}
      onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}
    >
      {child}
    </div>
    // return <div align="center" style={{position: 'relative'}}>
    //   <div className="contener">
    //     <div className="txt_init">
    //       LOW POLY BACKGROUND</div>
    //     <div className="opac">
    //       Download</div>
    //   </div>
    // </div>
  })
})

如何通过NamedCart修饰一个组件


    cart:{
        xname:"HoverShadowCart",
        props:{
            padding:'16px',
            fill:"#cacaca"
        }
    },
    container:'PlainList'
}

如何通过NamedLayout对多个组件进行布局

module.exports={
    xname:'Flexbox',
    props:{
        align:"start",
        direction:'row',
        justify:'center'
}

如何向React组件传递数据

gateway

        {
            presenter:'ImageAnimation',
            gateway:{
                xname:"Binding",
                props:{
                    binding:{
                        imgUrl:'imgUrl'
                    }
                }
            }
        }

如何通过Gateway向React组件传递并绑定数据

Binding

如何通过NamedGateway向React组件传递并绑定数据

修改geteway里的xname

如何通过AutoComponent对多个组件进行布局

ExampleTwo.js

import React from 'react';
import { AutoComponent } from 'zero-element-boot';
import ImageAnimation from '@/plugins/NewDemo/ImageAnimation'
import TextContent from '@/plugins/NewDemo/TextContent'
import FootContent from '@/plugins/NewDemo/FootContent'
import layout from "./layout"

export default function ExampleTwo(props){
    // console.log(props)
    const allComponents={
        ImageAnimation,
        TextContent,
        FootContent,
    };
    const config={
        layout,
        ...props,
    }
    console.log(config)
    console.log(allComponents)
    return (
        <div className="BigBox">
            <AutoComponent {...config} allComponents={allComponents}/>
        </div>
    )
}

 如何通过AutoComponent对多个组件进行布局传递数据

 module.exports={
    xname:'Flexbox',
    props:{
        align:"start",
        direction:'row',
        justify:'center'
    },
    children:[
        
        {
            presenter:'TextContent',
            gateway:{
                xname:"Binding",
                props:{
                    binding:{
                        title:'title',
                        theText:'theText',
                    }
                }
            }
        },{
            presenter:'ImageAnimation',
            gateway:{
                xname:"Binding",
                props:{
                    binding:{
                        imgUrl:'imgUrl'
                    }
                }
            }
        },
        {
            presenter:"FootContent",
            gateway:{
                xname:"Binding",
                props:{
                    binding:{
                        time:'time',
                        adType:'adType'
                    }
                }
            }
        },        
    ]
}