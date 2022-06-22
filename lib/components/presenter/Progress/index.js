function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

require("./index.less");
/**
 * @param { 高度 } height 
 * @param { 显示长度, 小数点传值 } percentageNum 
 * @param { 显示的文字 } progressName 
 * @param { 进度条背景色 } bgColor 
 * 
 */


export default class Progress extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let percentageNum = this.props.percentageNum * 100; //这个支持css样式响应式的

    let leftPercentage = (1 - this.props.percentageNum) * -100; //不支持样式响应式,可以写死
    // let leftPercentage = (1-this.props.percentageNum)*(-450);

    let div1 = {
      //不支持样式响应式,可以写死
      // width:"450px"
      //这个支持css样式响应式的
      width: "100%",
      height: this.props.height,
      //background:"#dedede",
      position: "relative",
      // margin:"22px auto 0",
      overflow: "hidden"
    };
    let div2 = {
      //不支持样式响应式,可以写死
      // width:"450px"
      //这个支持css样式响应式的
      width: "100%",
      height: this.props.height,
      // background:"#1AAAA8",
      position: "absolute",
      //不支持样式响应式,可以写死
      // left:`${leftPercentage}px`,
      //这个支持css样式响应式的
      left: `${leftPercentage}%`,
      background: `${this.props.bgColor ? this.props.bgColor : '#1CABAE'}`
    };
    let div3 = {
      position: "absolute",
      width: "auto",
      height: this.props.height,
      left: "15px",
      color: "#ffffff",
      lineHeight: this.props.height,
      fontSize: "16px"
    };
    let div4 = {
      position: "absolute",
      width: "auto",
      height: this.props.height,
      right: "15px",
      lineHeight: this.props.height,
      fontSize: "16px",
      color: "#fff"
    };
    return /*#__PURE__*/React.createElement("div", {
      style: div1
    }, /*#__PURE__*/React.createElement("div", {
      style: div2
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: div4
    }, percentageNum, "%"))), /*#__PURE__*/React.createElement("div", {
      style: div3
    }, this.props.progressName));
  }

}

_defineProperty(Progress, "contextTypes", {
  height: PropTypes.string,
  percentageNum: PropTypes.number,
  allNum: PropTypes.number,
  progressName: PropTypes.string,
  indexValue: PropTypes.number,
  bgColor: PropTypes.string
});