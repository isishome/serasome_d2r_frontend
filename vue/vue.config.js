module.exports = {
  pages: {
    index: {
      entry: 'src/main/d2r.js',
      template: 'public/d2r.html',
      filename: 'index.html'
    }
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
  },
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false,
      supportIE: true
    }
  },
  transpileDependencies: [
    'quasar',
    'highlight.js'
  ],
  outputDir: '../dist',
  assetsDir: 'static'
}