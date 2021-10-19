import React from 'react';

const Foo = () => /*#__PURE__*/React.createElement("div", null, "foo");

class Bar extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "bar");
  }

}

const Gone = () => 0;

export default function IsValidElementTest(props) {
  let layoutSet = {};
  console.log(Object.keys(layoutSet).length ? 'layoutSet? true' : 'layoutSet? false');
  console.log(layoutSet ? 'layoutSet? true' : 'layoutSet? false');
  const content = 'string';
  console.log('<Foo/>:', /*#__PURE__*/React.isValidElement( /*#__PURE__*/React.createElement(Foo, null)));
  console.log('Bar:', /*#__PURE__*/React.isValidElement(Bar));
  console.log('<Ba/>:', /*#__PURE__*/React.isValidElement( /*#__PURE__*/React.createElement(Bar, null)));
  console.log('string:', /*#__PURE__*/React.isValidElement(content));
  console.log('Gone:', /*#__PURE__*/React.isValidElement(Gone));
  console.log('<Gone/>:', /*#__PURE__*/React.isValidElement( /*#__PURE__*/React.createElement(Gone, null)));
  return /*#__PURE__*/React.createElement(Bar, null);
}