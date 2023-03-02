import React from 'react';
import { getEndpoint } from "../../../config/common";
import useTokenRequest from "../../../hooks/useTokenRequest";
import { getTypeContent } from "../../../utils/tools";
const typeMap = {
  '#': 'H1',
  '##': 'H2',
  '###': 'H3',
  '####': 'H4',
  '#####': 'H5',
  '######': 'H6'
};
export default function Index(props) {
  const {
    type,
    content = ''
  } = props;

  function handleContent(value) {
    if (type.startsWith('#')) {
      if (content.indexOf('<') != -1 && content.indexOf('>') != -1) {
        return value.split('>')[1];
      }

      return value.replace(`${type} `, '');
    }

    return value.replace(`<${type}>`, '');
  }

  let paramStr = type;

  if (type.startsWith('#')) {
    paramStr = typeMap[type];
  } //系统样式


  const api = `${getEndpoint()}/openapi/lc/autoApi/lowAutoPageStyles/rss/json/${paramStr}`;
  const styleObj = useTokenRequest({
    api
  });
  const styles = styleObj && styleObj[0] || {}; //自定义样式

  const customStyleName = content.indexOf('<') != -1 && content.indexOf('>') != -1 ? getTypeContent(content.replace(`${type}`, '')) : '';
  const styleApi = customStyleName ? `${getEndpoint()}/openapi/lc/autoApi/lowAutoPageStyles/rss/json/${customStyleName}` : '';
  const styleObj2 = useTokenRequest({
    api: styleApi
  });
  const styles2 = styleObj2 && styleObj2[0] || {};
  const s = {
    margin: 0,
    ...(customStyleName ? styles2 : styles)
  };
  return /*#__PURE__*/React.createElement("div", {
    style: s
  }, handleContent(content));
}