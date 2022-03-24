const React = require('react');

const DefaultSeperatorSet = require("../seperator");

export default function NamedSeperator({
  name,
  props,
  seperator = {
    name,
    props
  },
  seperatorSet
}) {
  const _SeperatorSet = seperatorSet ? seperatorSet : DefaultSeperatorSet;

  const seperatorName = typeof seperator === 'string' ? seperator : seperator.name;
  const Seperator = _SeperatorSet[seperatorName] || tips(seperatorName);
  return /*#__PURE__*/React.createElement(Seperator, seperator.props);
}

function tips(name) {
  return _ => `NamedSeperator ${name} 未定义`;
}