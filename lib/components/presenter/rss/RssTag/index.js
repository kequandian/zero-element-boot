import React from 'react';
import { getEndpoint } from "../../../config/common";
import useTokenRequest from "../../../hooks/useTokenRequest";
import { getContentName } from "../utils/tools";

require("./index.less");

const tagItemDefaultStyle = {
  "display": "flex",
  "justifyContent": "center",
  "alignItems": "center",
  "padding": "0px 10px",
  "fontSize": "15px",
  "color": "black",
  "borderRadius": "35px",
  "backgroundColor": "#F5F5F7",
  "height": "30px"
};
export default function Index(props) {
  const {
    data = ''
  } = props;

  function getTags(str) {
    const listStr = str.indexOf('>>') != -1 ? str.split('>>')[1] : str.indexOf(' ') ? str.replace(';;; ', '') : str.replace(';;;', '');
    return listStr.indexOf(',') !== -1 ? listStr.split(',') : listStr;
  }

  const cName = getContentName(data);
  const api = `${getEndpoint()}/openapi/lc/autoApi/lowAutoPageStyles/rss/json/${cName}`;
  const styleObj = useTokenRequest({
    api
  });
  const styles = styleObj && styleObj[0] || tagItemDefaultStyle;
  return /*#__PURE__*/React.createElement("div", {
    className: "tag_container",
    style: {
      margin: 0
    }
  }, getTags(data).map((item, index) => {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      style: { ...styles,
        marginRight: '4px',
        marginBottom: '4px'
      }
    }, item);
  }));
}