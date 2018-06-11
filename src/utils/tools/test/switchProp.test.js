// @flow
import expect from 'expect';
import switchProp from '../switchProp';

describe('switchProp', () => {
  it('should handle string argument', () => {
    expect(switchProp('type', { red: 'red', blue: 'blue' })()).toBeUndefined();
    expect(
      switchProp('type', { red: 'red', blue: 'blue' })({ type: 'red' }),
    ).toBe('red');
    expect(
      switchProp('type', { red: 'red', blue: 'blue' })({ type: 'blue' }),
    ).toBe('blue');
  });

  it('should handle deep string argument', () => {
    expect(
      switchProp('foo.bar', { red: 'red', blue: 'blue' })({
        foo: { bar: 'red' },
      }),
    ).toBe('red');
    expect(
      switchProp('foo.bar', { red: 'red', blue: 'blue' })({
        foo: { bar: 'blue' },
      }),
    ).toBe('blue');
  });

  it('should handle function argument', () => {
    expect(
      switchProp(props => props.type, { red: 'red', blue: 'blue' })(),
    ).toBeUndefined();
    expect(
      switchProp(props => props.type, { red: 'red', blue: 'blue' })({
        type: 'red',
      }),
    ).toBe('red');
    expect(
      switchProp(props => props.type, { red: 'red', blue: 'blue' })({
        type: 'blue',
      }),
    ).toBe('blue');
  });
});
