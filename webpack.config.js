const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const ESLintPlugin = require('eslint-webpack-plugin')

if (process.env.NODE_ENV === 'test') {
  // exclude NPM deps from test bundle
  module.exports.externals = [require('webpack-node-externals')()]
  // use inline source map so that it works with mocha-webpack
  module.exports.devtool = 'inline-cheap-module-source-map'
}

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'example/index.js'),
  output: {
    path: path.resolve(__dirname, 'example/dist'),
    filename: 'dist/build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'example'),
    compress: true,
    port: 9000
  },
  plugins: [
    new VueLoaderPlugin(),
    new ESLintPlugin({
      files: [
        './src',
        './example'
      ],
      extensions: [
        'js',
        'vue'
      ]
    })
  ]
}
