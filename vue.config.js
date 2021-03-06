module.exports = {
  chainWebpack: config => {
    config.module
        .rule('images')
        .use('url-loader')
        .loader('url-loader')
        .tap(options => {
          options.limit = 1024*1024
          return options;
        });
  },
  css: {
    extract: false // 绑定css样式
  }
};
