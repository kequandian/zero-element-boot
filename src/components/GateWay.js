const React = require('react');

module.exports = function Gateway({ children, field, filter, converter = {}, ...rest }) {

  let data = { ...rest };

  console.log('data = ', data);

  if (filter) {
    if (Array.isArray(data[filter])) {
      data[filter] = data[filter].map(item => execMap(item, converter));
    } else {
      data[filter] = execMap(data[filter], converter);
    }
  } else if(field){
    data = execFieldMap(data, field, converter);
  } else {
    data = execMap(data, converter);
  }

  
  return React.cloneElement(children, {
    ...data,
  })
}

function execFieldMap(data = {}, field, converter) {

  var result = { ...data, ...data[field] };

  Object.keys(converter).forEach(key => {
    result[converter[key]] = result[key];
    delete result[key];
  })
  return result;
}

function execMap(data = {}, converter) {
  Object.keys(converter).forEach(key => {
    data[converter[key]] = data[key];
    delete data[key];
  })
  return { ...data };
}