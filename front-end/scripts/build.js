process.env.NODE_ENV = 'development';

require('dotenv').config();

const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const express = require('express');
const https = require('https');

const config = require('../config/webpack.config.js');
const compiler = webpack(config);
const app = express();

const PORT = process.env.PORT || 3001;

app.use(middleware(compiler, config.devServer));

const httpsApp = https.createServer(config.devServer.https, app);

httpsApp.listen(PORT, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening at https://localhost:${PORT}`);
});
