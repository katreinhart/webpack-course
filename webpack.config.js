var path = require('path');
module.exports = {
  entry: __dirname,
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  }, module: {
    preLoaders: [
      {
        test: /\.js/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        query: require(path.resolve(__dirname, './.eslint.config.js'))
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?.*$|$)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.coffee$/,
        loader: 'coffee-loader',
        exclude: /node_modules/
      }, {
        test: /\.ya?ml$/,
        loaders: [
          'json-loader',
          'yaml-loader'
        ],
        include: path.resolve(__dirname, 'config')
      }, {
        test: /\.ts$/,
        loader: 'ts-loader',
        include: path.resolve(__dirname, 'ts')
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.coffee', '.css', '.scss', ''],
    alias: {
      fx$: path.resolve(__dirname, 'fx.js'),
      api: path.resolve(__dirname, 'apis'),
      style: path.resolve(__dirname, 'styles'),
      welcomeUser$: path.resolve(__dirname, 'welcomeUser.coffee'),
      ts: path.resolve(__dirname, 'ts'),
      config: path.resolve(__dirname, 'config')
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    inline: true,
    port: 3000
  }
}
