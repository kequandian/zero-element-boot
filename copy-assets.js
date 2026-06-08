// 替代 gulp 的 copy-css/copy-less/copy-png/copy-mjs/copy-assets 任务
// 将 src/components 下的 .css/.less/.png/.mjs 资源按原目录结构拷贝到 lib/components
// 同时将 src/assets 拷贝到 lib/assets
var fs = require('fs-extra');
var path = require('path');
var glob = require('glob');

var componentsSrc = path.resolve('src/components');
var componentsDest = path.resolve('lib/components');

['**/*.css', '**/*.less', '**/*.png', '**/*.mjs'].forEach(function (pattern) {
  glob.sync(pattern, { cwd: componentsSrc }).forEach(function (file) {
    var src = path.resolve(componentsSrc, file);
    var dest = path.resolve(componentsDest, file);
    fs.ensureDirSync(path.dirname(dest));
    fs.copyFileSync(src, dest);
  });
});

fs.copySync(path.resolve('src/assets'), path.resolve('lib/assets'));
console.log('[copy-assets] done');
