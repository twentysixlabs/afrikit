// @flow

import expect from 'expect';
import {
  selfClosingTags,
  voidElements,
  svgElements,
  isSelfClosing,
} from '../selfClosingTags';

describe('self-closing-tags', () => {
  it('should export an array of strings', () => {
    expect(Array.isArray(selfClosingTags)).toBeTruthy();
    expect(selfClosingTags.length > 1).toBeTruthy();
    expect(typeof selfClosingTags[0]).toEqual('string');
  });

  it('should expose a "voidElements" property', () => {
    expect(Array.isArray(voidElements)).toBeTruthy();
    expect(voidElements.length > 1).toBeTruthy();
    expect(typeof voidElements[0]).toEqual('string');
  });

  it('should expose a "svgElements" property', () => {
    expect(Array.isArray(svgElements)).toBeTruthy();
    expect(svgElements.length > 1).toBeTruthy();
    expect(typeof svgElements[0]).toEqual('string');
  });

  describe('is-self-closing', () => {
    it('should export a function', () => {
      expect(typeof isSelfClosing).toEqual('function');
    });

    it('should return true when name is a void or sgv element', () => {
      expect(isSelfClosing('img')).toBeTruthy();
      expect(isSelfClosing('path')).toBeTruthy();
    });

    it('should work with uppercase names', () => {
      expect(isSelfClosing('IMG')).toBeTruthy();
      expect(isSelfClosing('PATH')).toBeTruthy();
    });

    it('should return false when name is a not a void or svg element', () => {
      expect(!isSelfClosing('foo')).toBeTruthy();
    });

    it('should throw an error when invalid args are passed', cb => {
      try {
        isSelfClosing();
        cb(new Error('expected an error'));
      } catch (err) {
        expect(err).toBeTruthy();
        expect(err.message).toEqual('expected name to be a string');
        cb();
      }
    });
  });
});
