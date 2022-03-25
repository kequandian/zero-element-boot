var path = require('path');
var fs = require('fs-extra');

var distPath = path.resolve(process.cwd(), './lib');

fs.remove(`${distPath}/pages`) 
  .then(() => console.log("pages folder deleted")) 
  .catch((e) => console.log(e));