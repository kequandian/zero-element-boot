module.exports = function (parent) {
  let data;
  const reg = /.\/src\/pages\/([\w\/]+)\/[\w.]+$/.exec(parent);
  let parentPath;

  if (reg) {
    parentPath = reg[1];
  }

  try {
    data = require(`@/pages/${parentPath}/layout.json`);
  } catch (error) {
    try {
      data = require(`@/pages/${parentPath}/layout.js`);
    } catch (error) {}
  }

  return data;
};