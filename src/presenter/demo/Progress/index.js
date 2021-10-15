import React, { Component } from 'react';
import PropTypes from 'prop-types';
require('./index.less');
 
export default class Progress extends Component {
  static contextTypes = {
    height: PropTypes.string,
    percentageNum: PropTypes.number,
    allNum: PropTypes.number,
    progressName: PropTypes.string,
    indexValue: PropTypes.number
  };
  constructor(props) {
    super(props)
  }

 
  render() {
    let percentageNum = (this.props.percentageNum*100);
    //这个支持css样式响应式的
    let leftPercentage = (1-this.props.percentageNum)*(-100);
    //不支持样式响应式,可以写死
    // let leftPercentage = (1-this.props.percentageNum)*(-450);
    let div1 = {
      //不支持样式响应式,可以写死
      // width:"450px"
      //这个支持css样式响应式的
        width:"100%",
        height: this.props.height,
        //background:"#dedede",
        position: "relative",
        // margin:"22px auto 0",
        overflow: "hidden",
      };
    let div2 = {
      //不支持样式响应式,可以写死
      // width:"450px"
      //这个支持css样式响应式的
        width:"100%",
        height: this.props.height,
        // background:"#1AAAA8",
        position: "absolute",
      //不支持样式响应式,可以写死
        // left:`${leftPercentage}px`,
      //这个支持css样式响应式的
        left:`${leftPercentage}%`,
      };
    let div3 = {
        position: "absolute",
        width:"auto",
        height:this.props.height,
        left:"15px",
        color:"#ffffff",
        lineHeight: this.props.height,
        fontSize: "16px",
      };
    let div4 ={
        position: "absolute",
        width:"auto",
        height:this.props.height,
        right: "15px",
        lineHeight: this.props.height,
        fontSize: "16px",
        color: "#fff",
      };
    return (
      <div style={div1}>
        <div style={div2} className={`indexBg_${this.props.indexValue}`}>
          <div style={{position: 'relative'}}>
          <div style={div4}>
            {percentageNum}%
                  {/* | 
            {this.props.allNum} */}
          </div>
          </div>
        </div>
        <div style={div3}>{this.props.progressName}</div>
        {/* <div style={div4}>
          {percentageNum}%
                | 
          {this.props.allNum}
        </div> */}
      </div>
    )
  }
}
