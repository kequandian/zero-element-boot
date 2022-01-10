var path = require('path');
var fs = require('fs-extra');

var distPath = path.resolve(process.cwd(), './dist');

fs.moveSync(`${distPath}/dependency-ui/index.html`, `${distPath}/dependency-ui.html`);
// fs.moveSync(`${distPath}/static/x`, `${distPath}/x`);