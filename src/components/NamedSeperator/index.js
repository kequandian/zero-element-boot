const React = require('react');
const SeperatorSet = require('../seperator');

export default function NamedSeperator({name, props, ...data}) {
  // get name and props from props
  if (typeof data === 'string') {
    name = data
  }
  // console.log('name=', name)

  const Seperator = SeperatorSet[name] || tips(name);

  return <Seperator {...props}/>
}

function tips(name) {
  return _ => `NamedSeperator ${name} 未定义`;
}
