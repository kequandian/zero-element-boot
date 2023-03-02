import React, { useState } from 'react';
import { VStack } from "@chakra-ui/react";
import _ from 'lodash';
import { getTypeContent } from "../../../utils/tools";

require("./index.less");

import RssText from "../RssText";
import RssSpace from "../RssSpace";
import RssImage from "../RssImage";
import RssTag from "../RssTag";
import RssParagraph from "../RssParagraph";
export default function Index(props) {
  const {
    data = ''
  } = props;
  console.log('data == ', data.split('\n'));
  const dataList = data.indexOf('\n') !== -1 ? data.split('\n') : data;
  return /*#__PURE__*/React.createElement(VStack, {
    alignItems: "flex-start",
    padding: "8px"
  }, dataList.map((item, index) => {
    if (!item.startsWith('<!>')) {
      const keyStr = item.substr(0, 1);

      switch (keyStr) {
        case '<':
          return /*#__PURE__*/React.createElement(RssText, {
            key: index,
            type: getTypeContent(item),
            content: item
          });

        case '#':
          return /*#__PURE__*/React.createElement(RssText, {
            key: index,
            type: getTypeContent(item),
            content: item
          });

        case '>':
          if (item.startsWith('>>>') || item.startsWith('>>> ')) {
            return /*#__PURE__*/React.createElement(RssSpace, {
              key: index,
              data: item
            });
          }

          if (item.startsWith('> ') || item.startsWith('>')) {
            return /*#__PURE__*/React.createElement(RssParagraph, {
              data: item,
              key: index
            });
          }

        case '[':
          return /*#__PURE__*/React.createElement(RssImage, {
            key: index,
            data: item
          });

        case ';':
          return /*#__PURE__*/React.createElement(RssTag, {
            key: index,
            data: item
          });

        default:
          break;
      }
    } else {}
  }));
}