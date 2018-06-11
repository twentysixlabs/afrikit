// @flow
import expect from 'expect';
import prop from '../prop';

describe('prop', () => {
  it('should handle string argument', () => {
    expect(prop('color')()).toBeUndefined();
    expect(prop('color')({})).toBeUndefined();
    expect(prop('color')({ color: 'red' })).toBe('red');
  });

  it('should handle deep string argument', () => {
    expect(prop('color.primary')()).toBeUndefined();
    expect(prop('color.primary')({})).toBeUndefined();
    expect(prop('color.primary')({ color: {} })).toBeUndefined();
    expect(prop('color.primary')({ color: { primary: 'red' } })).toBe('red');
  });

  it('should handle defaultValue', () => {
    expect(prop('color', 'red')()).toBe('red');
    expect(prop('color', 'red')({})).toBe('red');
    expect(prop('color', 'red')({ color: 'blue' })).toBe('blue');
  });
});
