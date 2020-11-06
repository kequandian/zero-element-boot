import React from 'react';
import GetField from "../../components/GetField";
import NamedLayout from "../../components/NamedLayout";
import NamedList from "../../components/NamedList";
export default function Demo(props) {
  // AutoLoadList
  return /*#__PURE__*/React.createElement(NamedList, {
    name: "LoadMoreList",
    API: "/api/adm/stat/meta/template/table"
  }, /*#__PURE__*/React.createElement(NamedLayout, {
    name: "Align",
    props: {
      align: 'rightAndLastCenter'
    }
  }, /*#__PURE__*/React.createElement(GetField, {
    dataField: "data"
  }, /*#__PURE__*/React.createElement(Test, null))));
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