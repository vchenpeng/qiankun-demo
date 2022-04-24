const { name } = require('./package')

module.exports = {
  outputDir: 'dist',
  indexPath: 'index.html',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    https: false,
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port: 8080,
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
  chainWebpack: config => {
  }
}
