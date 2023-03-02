import React from 'react';
import { getEndpoint } from "../../../config/common";
import useTokenRequest from "../../../hooks/useTokenRequest";
import { getTypeContent } from "../../../utils/tools";

require("./index.less");

export default function Index(props) {
  const {
    data = ''
  } = props;
  const content = data.indexOf('<') !== -1 ? data.split('>')[2] : data.replace(data.substr(0, 2), '');
  const cssName = getTypeContent(data);
  const api = cssName ? `${getEndpoint()}/openapi/lc/autoApi/lowAutoPageStyles/rss/json/${cssName}` : '';
  const styleObj = useTokenRequest({
    api
  });
  const styles = styleObj && styleObj[0] || {};
  const s = {
    margin: 0,
    ...styles
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "paragraph",
    style: s
  }, content);
}