var path = require('path');
var fs = require('fs-extra');

var distPath = path.resolve(process.cwd(), './lib');
var srcPath = path.resolve(process.cwd(), './src');

//fs.copy
fs.copy(`${srcPath}/assets`, `${distPath}/assets`) 
  .then(() => console.log("assets folder copy")) 
  .catch((e) => console.log(e));

fs.remove(`${distPath}/pages`) 
  .then(() => console.log("pages folder deleted")) 
  .catch((e) => console.log(e));

fs.remove(`${distPath}/plugins`) 
  .then(() => console.log("plugins folder deleted")) 
  .catch((e) => console.log(e));

fs.remove(`${distPath}/presenter`) 
  .then(() => console.log("presenter folder deleted")) 
  .catch((e) => console.log(e));

  
fs.remove(`${distPath}/models`) 
  .then(() => console.log("models folder deleted")) 
  .catch((e) => console.log(e));