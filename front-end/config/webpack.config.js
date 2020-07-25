const paths = require('./paths.js');
const fs = require('fs');

const PORT = process.env.PORT || 3001;

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: paths.entryPaths,
  output: {
    path: paths.resolvePath('dist'),
    publicPath: `https://localhost:${PORT}/dist/`,
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: paths.srcPath,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: "./dist/",
    historyApiFallback: true,
    hot: true,
    port: PORT,
    publicPath: `https://localhost:${PORT}/dist/`,
    https: {
      key: fs.readFileSync( './config/sslCert/localhost.key' ),
      cert: fs.readFileSync( './config/sslCert/localhost.cert' ),
      requestCert: false,
      rejectUnauthorized: false
    },
    noInfo: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, PATCH"
    }
  },
  optimization: {
    noEmitOnErrors: true
  },
  plugins: []
};
