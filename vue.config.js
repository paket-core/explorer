module.exports = {
    devServer: {
      port: 8082,
      hot: true,
      publicPath: '/',
      proxy: {
        '/api': {
          target: 'http://77.93.33.212:11250',
          pathRewrite: { '^/api/': '/' },
          xfwd: true,
          ws: true,
          changeOrigin: true,
        },
      },
        disableHostCheck: true
    },
    lintOnSave: true,
  }