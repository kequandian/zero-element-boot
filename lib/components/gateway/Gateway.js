const React = require('react');
/**
 * 
 * @param {object} converter  转换数据域名称,值不变 (如把sex:Male 转换为 gentle:Male) 
 * @param {object} filter  仅对指定数据域进行 converter 转换
 */


module.exports = function Gateway({
  children,
  field,
  filter,
  converter,
  ...rest
}) {
  // handle data
  let data = { ...rest
  };

  if (filter) {
    if (Array.isArray(data[filter])) {
      data[filter] = data[filter].map(item => execMap(item, converter));
    } else {
      data[filter] = execMap(data[filter], converter);
    }
  } else if (field) {
    data = execFieldMap(data, field, converter);
  } else if (converter) {
    data = execMap(data, converter);
  }

  return React.cloneElement(children, { ...data
  });
};
/**
 * 
 * @param {} data 
 * @param {*} field 
 * @param {*} converter 
 */


function execFieldMap(data = {}, field, converter) {
  var result = { ...data,
    ...data[field]
  };
  Object.keys(converter).forEach(key => {
    result[converter[key]] = result[key];
    delete result[key];
  });
  return result;
}
/*
 * 转换数据域名称
*/


function execMap(data = {}, converter) {
  Object.keys(converter).forEach(key => {
    data[converter[key]] = data[key];
    delete data[key];
  });
  return { ...data
  };
}