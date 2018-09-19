const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

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
        enforce: 'pre',
        test: /\.(js|vue)$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'example')
        ],
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
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
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'example'),
    compress: true,
    port: 9000
  },
  plugins: [new VueLoaderPlugin()]
}
