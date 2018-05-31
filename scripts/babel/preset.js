// @flow
// Ref: https://github.com/necolas/react-native-web/blob/master/scripts/babel/preset.js
module.exports = {
  presets: [
    [
      'babel-preset-env',
      {
        targets: {
          node: 'current',
          browsers: ['last 2 versions', 'safari >= 7'],
        },
        loose: true,
        modules: process.env.MODULES || false,
        exclude: [
          'transform-es2015-typeof-symbol',
          'babel-plugin-transform-regenerator',
          'transform-async-to-generator',
        ],
        useBuiltIns: true,
      },
    ],
  ],
  plugins: [
    ['babel-plugin-transform-class-properties', { loose: true }],
    ['babel-plugin-transform-object-rest-spread', { useBuiltIns: true }],
    ['babel-plugin-transform-react-remove-prop-types', { mode: 'wrap' }],
    ['styled-components', { ssr: process.env.PRODUCTION || false }],
    'transform-flow-strip-types',
    'babel-plugin-transform-react-jsx',
    'syntax-dynamic-import',
    'syntax-async-generators',
    'transform-async-generator-functions',
  ],
};
