// @flow
import expect from 'expect';
import ifProp from '../ifProp';

describe('ifProp', () => {
  it('should handle string argument', () => {
    expect(ifProp('foo', 'yes', 'no')()).toBe('no');
    expect(ifProp('foo', 'yes', 'no')({ foo: true })).toBe('yes');
    expect(ifProp('foo', 'yes', 'no')({ foo: false })).toBe('no');
  });

  it('should handle deep string argument', () => {
    expect(ifProp('foo.bar', 'yes', 'no')({ foo: { bar: true } })).toBe('yes');
    expect(ifProp('foo.bar', 'yes', 'no')({ foo: { bar: false } })).toBe('no');
  });

  it('should handle array argument', () => {
    expect(ifProp(['foo'], 'yes', 'no')({ bar: false, foo: true })).toBe('yes');
    expect(ifProp(['foo', 'bar'], 'yes', 'no')({ bar: true, foo: true })).toBe(
      'yes',
    );
    expect(ifProp(['foo', 'bar'], 'yes', 'no')({ foo: true, bar: false })).toBe(
      'no',
    );
  });

  it('should handle deep array argument', () => {
    expect(
      ifProp(['foo.bar', 'baz'], 'yes', 'no')({
        baz: true,
        foo: { bar: true },
      }),
    ).toBe('yes');
    expect(
      ifProp(['foo.bar', 'baz'], 'yes', 'no')({
        foo: { bar: true },
        baz: false,
      }),
    ).toBe('no');
    expect(
      ifProp(['foo.bar', 'baz'], 'yes', 'no')({
        foo: { bar: false },
        baz: true,
      }),
    ).toBe('no');
  });

  it('should handle object argument', () => {
    expect(ifProp({ foo: 'ok' }, 'yes', 'no')({ foo: 'ok' })).toBe('yes');
    expect(ifProp({ foo: 'ok' }, 'yes', 'no')({ foo: 'not ok' })).toBe('no');
    expect(
      ifProp({ foo: 'ok', bar: 'ok' }, 'yes', 'no')({ bar: 'ok', foo: 'ok' }),
    ).toBe('yes');
    expect(
      ifProp({ foo: 'ok', bar: 'ok' }, 'yes', 'no')({
        foo: 'not ok',
        bar: 'ok',
      }),
    ).toBe('no');
  });

  it('should handle deep object argument', () => {
    expect(
      ifProp({ 'foo.bar': 'ok' }, 'yes', 'no')({ foo: { bar: 'ok' } }),
    ).toBe('yes');
    expect(
      ifProp({ 'foo.bar': 'ok' }, 'yes', 'no')({ foo: { bar: 'no' } }),
    ).toBe('no');
  });

  it('should handle function argument', () => {
    expect(ifProp(props => props.foo, 'yes', 'no')()).toBe('no');
    expect(ifProp(props => props.foo, 'yes', 'no')({ foo: false })).toBe('no');
    expect(ifProp(props => props.foo, 'yes', 'no')({ foo: true })).toBe('yes');
  });
});
