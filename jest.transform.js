// @flow

// eslint-disable-next-line
module.exports = require('babel-jest').createTransformer({
  presets: ['es2015', 'react'],
  plugins: [
    'styled-components',
    'transform-object-rest-spread',
    'transform-class-properties',
  ],
});
