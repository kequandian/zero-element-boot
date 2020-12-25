const React = require('react');
const SeperatorSet = require('../seperator');

export default function NamedSeperator({name, props, seperator={name, props}}) {

  const seperatorName = (typeof seperator === 'string') ? seperator : seperator.name

  const Seperator = SeperatorSet[seperatorName] || tips(seperatorName);

  return <Seperator {...seperator.props}/>
}

function tips(name) {
  return _ => `NamedSeperator ${name} 未定义`;
}
