// @flow
import expect from 'expect';
import themeVars, { THEME_CONF } from '../theme-vars-cache';

describe('Theme Vars Cache', () => {
  describe('THEME_CONF', () => {
    it('should be an object', () => {
      expect(typeof THEME_CONF).toEqual('object');
    });
  });
  describe('themeVars()', () => {
    it('should be a function', () => {
      expect(typeof themeVars).toEqual('function');
    });
  });
  describe('themeVars behavior()', () => {
    it('should return correct value', () => {
      const props = {};
      expect(themeVars(props).shadowColor).toEqual(`rgba(0, 0, 0, 0.15)`);
    });

    it('should return correct gray value', () => {
      const props = {};
      expect(themeVars(props).grays.normal).toEqual('#f8f8f8');
    });

    it('should coorectly overwrite', () => {
      const props = { theme: { primaryColor: 'red' } };
      expect(themeVars(props).primaryColor).toEqual('red');
      // While still retaining other default props on theme
      expect(themeVars(props).normalColor).toEqual('#d9d9d9');
    });
  });
});
