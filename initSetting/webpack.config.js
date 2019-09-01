const path = require('path');

module.exports = {
  name: 'test-setting',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    app: ['./src/index']
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['> 5% in KR', 'last 2 chrome version']
                },
                debug: true
              }
            ],
            '@babel/preset-react'
          ],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      }
    ]
  },
  devServer: {
    port: 9000,
    hot: true,
    index: 'public/index.html',
    contentBase: path.join('./public')
    //host: '0.0.0.0'    // By default, it is set to "localhost". To connect to the development server and test it from external, set it to '0.0.0.0'.
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  }
};
