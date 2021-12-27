
// ref: https://umijs.org/config/
export default {
  title: 'Demo',
  hash: true,
  // history: {
  //   type: 'hash',
  // },
  // dynamicImport: {
  //   loading: '@/components/loading'
  // },
  devtool: false,
  locale: {
    default: 'zh-CN',
    antd: true,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  antd: {},
  //配置model, 禁用即 dva:true
  dva: {
    hmr: true,
    immer: false,
  },

  ignoreMomentLocale: true, // 忽略 moment 的 locale 文件

  chainWebpack(memo, { env, webpack, createCSSRule }) {
//     memo.entry = [
//       './src/pages/index.js', 
//       './src/pages/UserRadioDemo/Sandbox.js', 
//       './src/pages/UserCheckboxDemo/Sandbox.js', 
//       './src/pages/AddUserPage/index.js', 
//       './src/pages/CheckBoxModalDemo/index.js', 
//       './src/pages/CheckboxPageDemo/index.js', 
//       './src/pages/ComponentListDemo/index.js', 
//     ]
    memo.output.set('filename', 'bundle.js')
    memo.output.hotUpdateMainFilename('dev-test')
    // memo.optimization.splitChunks({
    //   cacheGroups: {
    //     js:{
    //       chunks: 'all',
    //       name:'bundle', // 打包后的文件名
    //       test: /\.(js)$/,
    //       minSize: 0, 
    //       minChunks: 1 // 重复1次才能打包到此模块
    //     },
    //     styles: {
    //       name: 'styles',
    //       test: /\.(css|less)$/,
    //       chunks: 'async',
    //       minChunks: 1,
    //       minSize: 0,
    //     },
    //   },
    // });
  },
  
  // outputPath: '/dist/static',
  publicPath: process.env.NODE_ENV === 'production' ? './static/' : '/',  //设置 dist/index.html 访问 js和css路径
}
