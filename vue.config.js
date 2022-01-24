//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  pages: {
    index: {
      entry: 'src/main/d2r.js',
      template: 'public/d2r.html',
      filename: 'index.html'
    }
  },
  // configureWebpack: {
  //   plugins: [new BundleAnalyzerPlugin()]
  // },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
    config.plugins.delete('prefetch-index')
  },
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false,
      supportIE: true
    },
    cordovaPath: 'src-cordova'
  },
  transpileDependencies: [
    'quasar',
    'highlight.js'
  ],
  productionSourceMap: false,
  outputDir: '../../../publish/serasome_d2r_frontend',
  assetsDir: 'static'
}