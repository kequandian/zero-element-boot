var path = require('path');
var fs = require('fs-extra');

var distPath = path.resolve(process.cwd(), './dist');
var publicPath = path.resolve(process.cwd(), './public');
var assetsPath = path.resolve(process.cwd(), './src/assets');

// fs.moveSync(distPath, path.join(distPath, '../temp'));
fs.copySync(`${publicPath}/template.html`, `${distPath}/index.html`);
fs.copySync(assetsPath, `${distPath}/assets`);
// fs.moveSync(path.join(distPath, '../temp'), path.join(distPath, 'admin'));