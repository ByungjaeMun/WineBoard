const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());

const resolvePath = (relativePath) => path.resolve(appDirectory, relativePath);

const entryPaths = {
  'polyfills': [
    resolvePath('config/polyfills.js')
  ],
  'vendor': [
    'axios',
    'lodash',
    'react',
    'react-dom',
    'react-router',
    'react-router-dom'
  ],
  'app': [
    resolvePath('src/entries/index.tsx')
  ]
};

module.exports = {
  srcPath: resolvePath('src'),
  entryPaths : entryPaths,
  resolvePath: resolvePath
};
