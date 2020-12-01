const React = require('react');

module.exports = function Gateway({ children, field, filter = field, converter = {}, ...rest }) {

  let data = { ...rest };

  if (filter) {
    if (Array.isArray(data[filter])) {
      data[filter] = data[filter].map(item => execMap(item, converter));
    } else {
      data[filter] = execMap(data[filter], converter);
    }
  } else {
    data = execMap(data, converter);
  }

  return React.cloneElement(children, {
    ...data,
  })
}

function execMap(data = {}, converter) {
  Object.keys(converter).forEach(key => {
    data[converter[key]] = data[key];
    delete data[key];
  })
  return { ...data };
}