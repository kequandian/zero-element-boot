
// ref: https://umijs.org/config/
export default {
  title: 'Demo',
  hash: true,
  // history: {
  //   type: 'hash',
  // },
  dynamicImport: {
    loading: '@/components/loading'
  },
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
}
