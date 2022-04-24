const { name } = require('./package')

module.exports = {
  publicPath: '.',
  // publicPath: isDev ? '//localhost:8080' : '/applets/wanxiang/early/',
  outputDir: 'dist',
  indexPath: 'index.html',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    https: false,
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port: 8081,
    // overlay: {
    //   warnings: false,
    //   errors: false
    // },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Private-Network': true,
      'Access-Control-Allow-Headers': `DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization,qiankun`
    }
  },
  configureWebpack: config => {
    config.output = Object.assign(config.output, {
      // 把子应用打包成 umd 库格式
      filename: '[name].[hash].js',
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    })
  },
  chainWebpack: config => {
  }
}
