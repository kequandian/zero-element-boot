import React from 'react';
import { Spin } from 'antd';
import GetField from "../../components/GetField";
import AutoCombination from "../../components/AutoCombination";
import NamedList from "../../components/NamedList";
import NamedLayout from "../../components/NamedLayout";

const AutoComponent = require("../../AutoComponent");

export default function Demo(props) {
  // AutoLoadList && LoadMoreList
  return /*#__PURE__*/React.createElement(NamedList, {
    name: "AutoLoadList",
    API: "/api/adm/stat/meta/template/table",
    spin: Spin
  }, /*#__PURE__*/React.createElement(NamedLayout, {
    name: "Align",
    props: {
      align: 'leftAndLastRight'
    }
  }, /*#__PURE__*/React.createElement(GetField, {
    dataField: "data"
  }, /*#__PURE__*/React.createElement(Test, null))));
  return /*#__PURE__*/React.createElement(AutoComponent, null);
}

function Test() {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      width: 200,
      border: '1px solid',
      margin: 8
    }
  }, "Demo");
}