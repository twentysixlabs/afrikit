// @flow
import expect from 'expect';
import replace from '../stringReplaceToArray';

describe('string-replace-to-array', () => {
  describe('string pattern', () => {
    it('should accept a string at the end', () => {
      expect(replace('Hello world', 'world', 'k42f/(.123')).toEqual([
        'Hello ',
        'k42f/(.123',
      ]);
    });

    it('should accept a string in the front', () => {
      expect(replace('Hello world', 'Hello', 'k42f/(.123')).toEqual([
        'k42f/(.123',
        ' world',
      ]);
    });

    it('should accept a string in the middle', () => {
      expect(replace('Hello', 'll', 4)).toEqual(['He', 4, 'o']);
      expect(replace('Hello there world', 'there', 'k42f/(.123')).toEqual([
        'Hello ',
        'k42f/(.123',
        ' world',
      ]);
    });

    it('should use the replace function', () => {
      const newValue = {};

      function replacer(match, offset, string) {
        expect(match).toEqual('Hello');
        expect(offset).toEqual(0);
        expect(string).toEqual('Hello world');
        return newValue;
      }

      expect(replace('Hello world', 'Hello', replacer)).toEqual([
        newValue,
        ' world',
      ]);
    });
  });
  describe('regex pattern', () => {
    it('should replace all occurences of a global regex pattern', () => {
      expect(
        replace('Hello there world there world Hello', /Hello/g, 'replaced'),
      ).toEqual(['replaced', ' there world there world ', 'replaced']);
    });

    it('should work with non-global regexps', () => {
      expect(replace('Hello', /ll/, 4)).toEqual(['He', 4, 'o']);
    });

    describe('String.replace equivalence', () => {
      it('should handle an empty regexp', () => {
        expect('Some string'.replace(new RegExp(''), 'New string')).toEqual(
          'New stringSome string',
        );
        expect(replace('Some string', new RegExp(''), 'New string')).toEqual([
          'New string',
          'Some string',
        ]);
      });

      // Source: https://github.com/oztune/string-replace-to-array/issues/2
      it('should handle an empty regexp with the g flag', () => {
        expect('1234'.replace(new RegExp('', 'g'), '|')).toEqual('|1|2|3|4|');
        expect(replace('1234', new RegExp('', 'g'), '|')).toEqual([
          '|',
          '1',
          '|',
          '2',
          '|',
          '3',
          '|',
          '4',
          '|',
        ]);
      });

      it('should handle an empty regexp with the g flag and an empty string input', () => {
        expect(''.replace(new RegExp('', 'g'), '|')).toEqual('|');
        expect(replace('', new RegExp('', 'g'), '|')).toEqual(['|']);
      });
    });
  });
  describe('flattening', () => {
    it('should accept an array, and only replace the strings', () => {
      expect(replace([{}, 'some string', {}], 'some', 'a')).toEqual([
        {},
        'a',
        ' string',
        {},
      ]);
    });
  });
});
