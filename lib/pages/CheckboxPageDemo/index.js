import React, { useState, useEffect } from 'react';
import { history, connect } from 'umi';
import { ChakraProvider, Button, Stack, Text } from "@chakra-ui/react";
import UserCheckboxDemo from "../UserCheckboxDemo/Sandbox";

function Index(props) {
  const {
    dispatch
  } = props;
  console.log('CheckboxMoadlDemo props = ', props);
  let checkedList = [];
  const [selectData, setSelectData] = useState([]);

  function onOk() {
    if (checkedList && checkedList.length > 0) {
      dispatch({
        type: "radioDataModel/changeData",
        payload: {
          list: checkedList
        }
      });
      history.push({
        pathname: '/RadioModalDemo',
        query: {
          list: checkedList
        }
      });
    }
  }

  function onItemClickHandle(data) {
    console.log('data111111 = ', data);
    checkedList = data;
  }

  return /*#__PURE__*/React.createElement(ChakraProvider, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '300px',
      minHeight: '100px',
      background: '#ffffff',
      padding: '20px'
    }
  }, /*#__PURE__*/React.createElement(Stack, {
    align: "stretch",
    spacing: 3
  }, /*#__PURE__*/React.createElement(Text, {
    fontSize: "sm"
  }, "\u591A\u9009")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement(UserCheckboxDemo, {
    onItemClick: data => onItemClickHandle(data)
  })), /*#__PURE__*/React.createElement(Stack, {
    spacing: "6"
  }, /*#__PURE__*/React.createElement(Button, {
    colorScheme: "teal",
    onClick: onOk
  }, "\u786E\u5B9A"))));
}

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps)(Index);