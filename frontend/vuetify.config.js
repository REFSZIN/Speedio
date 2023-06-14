const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      less: {
        additionalData: `@import "@/styles/variables.less";`
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/styles/variables.less'),
      ],
    },
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  modifyVars: {
                    'primary': '#3f51b5',
                  },
                }
              }
            }
          ]
        }
      ]
    }
  }
}