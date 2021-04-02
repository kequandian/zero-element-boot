import React from 'react';
export default function Comment(props) {
  console.log(props);

  function Avatar(props) {
    return /*#__PURE__*/React.createElement("img", {
      className: "Avatar",
      src: props.user.avatarUrl,
      alt: props.user.name
    });
  }

  function UserInfo(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: "UserInfo"
    }, /*#__PURE__*/React.createElement(Avatar, {
      user: props.user
    }), /*#__PURE__*/React.createElement("div", {
      className: "UserInfo-name"
    }, props.user.name), /*#__PURE__*/React.createElement("div", {
      className: "Comment-text-name"
    }, props.user.text_name));
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "Comment"
  }, /*#__PURE__*/React.createElement("div", {
    className: "UserInfo"
  }, /*#__PURE__*/React.createElement(UserInfo, {
    user: props.author
  })), /*#__PURE__*/React.createElement("div", {
    className: "Comment-text"
  }, props.text));
}