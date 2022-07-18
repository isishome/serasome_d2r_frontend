//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  pages: {
    index: {
      entry: 'src/main/d2r.js',
      template: 'public/d2r.html',
      filename: 'index.html',
      chunks: 'all'
    }
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        maxSize: 200000
      }
    }
  },
  // configureWebpack: {
  //   plugins: [new BundleAnalyzerPlugin()]
  // },
  chainWebpack: config => {
    config.plugins.delete('prefetch')
    config.plugins.delete('prefetch-index')
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        options.limit = -1
        return options
      })
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
  outputDir: './d2r',
  assetsDir: 'static'
}
