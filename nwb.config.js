// @flow
module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'afrikit',
      externals: {
        react: 'React',
        'react-router': 'ReactRouter',
      },
    },
  },
  babel: {
    runtime: true,
    plugins: [['styled-components', { ssr: process.env.PRODUCTION || false }]],
  },
};
