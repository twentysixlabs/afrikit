// @flow
// Ref: https://github.com/necolas/react-native-web/blob/master/scripts/babel/preset.js

const { BABEL_ENV, NODE_ENV } = process.env;
const cjs = BABEL_ENV === 'cjs' || NODE_ENV === 'test';

module.exports = {
  presets: [
    [
      'env',
      {
        modules: false,
        loose: true,
        useBuiltIns: true,
        targets: {
          node: 'current',
          browsers: ['last 2 versions', 'safari >= 7'],
        },
        exclude: [
          'transform-es2015-typeof-symbol',
          'babel-plugin-transform-regenerator',
          'transform-async-to-generator',
        ],
      },
    ],
  ],
  plugins: [
    cjs && 'add-module-exports',
    cjs && 'transform-es2015-modules-commonjs',
    ['babel-plugin-transform-class-properties', { loose: true }],
    ['babel-plugin-transform-object-rest-spread', { useBuiltIns: true }],
    ['babel-plugin-transform-react-remove-prop-types', { mode: 'wrap' }],
    ['styled-components', { ssr: process.env.PRODUCTION || false }],
    'transform-flow-strip-types',
    'babel-plugin-transform-react-jsx',
    'syntax-dynamic-import',
    'syntax-async-generators',
    'transform-async-generator-functions',
    'syntax-trailing-function-commas',
    'annotate-pure-calls',
  ].filter(Boolean),
};
