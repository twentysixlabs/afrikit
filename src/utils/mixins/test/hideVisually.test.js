// @flow
import expect from 'expect';
import hideVisually from '../hideVisually';

describe('hideVisually', () => {
  it('should return the CSS in JS', () => {
    expect({ ...hideVisually() }).toMatchSnapshot();
  });
});
