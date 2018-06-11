// @flow
import expect from 'expect';
import withProp from '../withProp';

describe('withProp', () => {
  it('should handle string argument', () => {
    expect(withProp('type', type => type === 'foo')()).toBe(false);
    expect(withProp('type', type => type === 'foo')({ type: 'bar' })).toBe(
      false,
    );
    expect(withProp('type', type => type === 'foo')({ type: 'foo' })).toBe(
      true,
    );
  });

  it('should handle deep string argument', () => {
    expect(withProp('foo.bar', bar => bar === 'foo')()).toBe(false);
    expect(withProp('foo.bar', bar => bar === 'foo')({ foo: {} })).toBe(false);
    expect(
      withProp('foo.bar', bar => bar === 'foo')({ foo: { bar: 'bar' } }),
    ).toBe(false);
    expect(
      withProp('foo.bar', bar => bar === 'foo')({ foo: { bar: 'foo' } }),
    ).toBe(true);
  });

  it('should handle array argument', () => {
    const fn = (...args) => args;
    expect(withProp(['foo', 'bar'], fn)()).toEqual([undefined, undefined]);
    expect(withProp(['foo', 'bar'], fn)({ foo: 'foo' })).toEqual([
      'foo',
      undefined,
    ]);
    expect(withProp(['foo', 'bar'], fn)({ bar: 'bar' })).toEqual([
      undefined,
      'bar',
    ]);
    expect(withProp(['foo', 'bar'], fn)({ foo: 'foo', bar: 'bar' })).toEqual([
      'foo',
      'bar',
    ]);
  });

  it('should handle function argument', () => {
    expect(withProp(props => props.type, type => type === 'foo')()).toBe(false);
    expect(
      withProp(props => props.type, type => type === 'foo')({ type: 'bar' }),
    ).toBe(false);
    expect(
      withProp(props => props.type, type => type === 'foo')({ type: 'foo' }),
    ).toBe(true);
  });
});
