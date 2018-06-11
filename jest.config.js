// @flow
module.exports = {
  verbose: true,
  transform: {
    '^.+\\.js$': './jest.transform.js',
  },
  moduleFileExtensions: ['js', 'json', 'jsx'],
};
