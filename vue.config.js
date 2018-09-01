const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

const ASSETS_DIR = 'static'

module.exports = {
  assetsDir: ASSETS_DIR,
  runtimeCompiler: true,
  chainWebpack: config => {
    config
      // .plugin('provide-plugin')
      //   .use(webpack.ProvidePlugin, [{
      //     axios: "axios",
      //     $: "jquery",
      //     jQuery: "jquery",
      //     _: "lodash",
      //     mapGetters: ['vuex', 'mapGetters'],
      //     mapActions: ['vuex', 'mapActions']
      //   }])
      //   .end()
      .plugin('copy-plugin')
        .use(CopyWebpackPlugin, [
          [{
            from: path.resolve(__dirname, 'static'),
            to: ASSETS_DIR,
            ignore: ['.*']
          }]
        ])
        .end()
      .plugin('sprite-loader-plugin')
        .use(SpriteLoaderPlugin)

    config.module
      .rule('svg')
        .test(/\.svg$/)
        .use('file-loader')
          .loader('svg-sprite-loader')
  }
}