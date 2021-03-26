import React from 'react';
import SelectedList from "../../components/list/SelectedList";
import NamedLayout from "../../components/NamedLayout";
import NamedCart from "../../components/NamedCart";

const {
  SelectItem
} = require("../../composition");

export default function SelectedListDemo(props) {
  /**
   * SelectedList 
   * 建议配合 SelectBox 使用
   */
  const config = {
    items: [{
      icon: '',
      title: 'title111',
      subTitle: 'subTitle111'
    }, {
      icon: '',
      title: 'title222',
      subTitle: 'subTitle222'
    }, {
      icon: '',
      title: 'title333',
      subTitle: 'subTitle333'
    }, {
      icon: '',
      title: 'title444',
      subTitle: 'subTitle444'
    }],
    layout: {
      name: 'SelectBox',
      props: {
        align: 'start',
        direction: 'column'
      }
    }
  };
  return /*#__PURE__*/React.createElement(SelectedList, config, /*#__PURE__*/React.createElement(NamedLayout, null, /*#__PURE__*/React.createElement(SelectItem, null)));
}