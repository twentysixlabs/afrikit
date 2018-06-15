// // @flow
// import React from 'react'
import expect from 'expect';
// import { create as render } from 'react-test-renderer';
import { is, num, px, arr, neg } from '../../utils';
// eslint-disable-next-line
import system from '../space';

import {
  styles,
  util,
  space,
  width,
  fontSize,
  color,
  style,
  responsiveStyle,
  pseudoStyle,
  complexStyle,
  textAlign,
  fontFamily,
  lineHeight,
  fontWeight,
  letterSpacing,
  display,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  size,
  ratio,
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  justifySelf,
  alignSelf,
  order,
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  borderRadius,
  borderColor,
  borders,
  boxShadow,
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  hover,
  focus,
  active,
  disabled,
  textStyle,
  colorStyle,
  buttonStyle,
  borderWidth,
  // eslint-disable-next-line
} from '../space';

const theme = {
  breakpoints: [32, 48, 64].map(n => `${n}em`),
  space: [0, 6, 12, 18, 24],
  fontSizes: [12, 16, 18, 24, 36, 72],
  radii: [2, 4],
  colors: {
    blue: '#07c',
    green: '#1c0',
    gray: ['#ccc', '#555'],
  },
};

describe('Styled System', () => {
  test('exports space, width, and fontSize', () => {
    expect(typeof space).toEqual('function');
    expect(typeof width).toEqual('function');
    expect(typeof fontSize).toEqual('function');
  });

  test('system.theme gets theme values', () => {
    const a = util.themeGet('colors.gray.0')({ theme });
    expect(a).toEqual(theme.colors.gray[0]);
  });

  // utils
  test('util.is checks for non null values', () => {
    const a = is(null);
    const b = is();
    const c = is(0);
    const d = is('');
    const e = is(false);
    const f = is([]);
    expect(a).toBeFalsy();
    expect(b).toBeFalsy();
    expect(c).toBeTruthy();
    expect(d).toBeTruthy();
    expect(e).toBeTruthy();
    expect(f).toBeTruthy();
  });

  test('util.px adds px unit to numbers', () => {
    const a = px(1);
    const b = px('2em');
    expect(a).toEqual('1px');
    expect(b).toEqual('2em');
  });

  test('util.neg checks for negative number', () => {
    const a = neg(0);
    const b = neg(1);
    const c = neg(-1);
    expect(a).toBeFalsy();
    expect(b).toBeFalsy();
    expect(c).toBeTruthy();
  });

  test('util.num checks for a number', () => {
    const a = num(1);
    const b = num(0);
    const c = num('1');
    const d = num(null);
    expect(a).toBeTruthy();
    expect(b).toBeTruthy();
    expect(c).toBeFalsy();
    expect(d).toBeFalsy();
  });

  test('util.arr converts values to arrays', () => {
    const a = arr(1);
    const b = arr([1]);
    expect(Array.isArray(a)).toBeTruthy();
    expect(Array.isArray(b)).toBeTruthy();
  });

  test('util.breaks returns a media queries array', () => {
    const a = util.breaks({
      theme: {
        breakpoints: [24],
      },
    });
    expect(a).toEqual([null, '@media screen and (min-width: 24px)']);
  });

  test('util.breaks accepts string breakpoints', () => {
    const a = util.breaks({
      theme: {
        breakpoints: ['60em'],
      },
    });
    expect(a).toEqual([null, '@media screen and (min-width: 60em)']);
  });

  test('util.media returns media query wrapped rules', () => {
    const a = util.media([])('hello');
    const b = util.media(['hi'])('hello', 0);
    const c = util.media(['hi'])(null, 0);
    expect(a).toEqual('hello');
    expect(b).toEqual({ hi: 'hello' });
    expect(c).toEqual(null);
  });

  test('util.dec returns declaration strings', () => {
    const a = util.dec('foo')('bar');
    const b = util.dec(['foo', 'baz'])('bar');
    expect(a).toEqual({ foo: 'bar' });
    expect(b).toEqual({ foo: 'bar', baz: 'bar' });
  });

  test('util.merge reduces objects', () => {
    const a = [
      {
        a: 'hello',
        b: {
          beep: 'boop',
        },
      },
      {
        b: {
          hello: 'hi',
        },
      },
    ].reduce(util.merge, {});
    expect(a).toEqual({
      a: 'hello',
      b: {
        beep: 'boop',
        hello: 'hi',
      },
    });
  });

  test('util.merge merges objects', () => {
    const a = util.merge(
      {
        a: 'hello',
        b: {
          beep: 'boop',
        },
        c: {
          d: 2,
          e: 'f',
        },
      },
      {
        b: {
          hello: 'hi',
        },
        c: {
          g: 3,
        },
      },
    );
    expect(a).toEqual({
      a: 'hello',
      b: {
        beep: 'boop',
        hello: 'hi',
      },
      c: {
        d: 2,
        e: 'f',
        g: 3,
      },
    });
  });

  // space
  test('space returns margin declarations', () => {
    const dec = space({ m: 1 });
    expect(dec).toEqual({ margin: '4px' });
  });

  test('space returns non-scalar margins', () => {
    const a = space({ m: 24 });
    const b = space({ m: 'auto' });
    expect(a).toEqual({ margin: '24px' });
    expect(b).toEqual({ margin: 'auto' });
  });

  test('space returns negative margins', () => {
    const a = space({ m: -1 });
    const b = space({ m: -24 });
    expect(a).toEqual({ margin: '-4px' });
    expect(b).toEqual({ margin: '-24px' });
  });

  test('space returns directional margins', () => {
    const topz = space({ mt: 1 });
    const r = space({ mr: 2 });
    const b = space({ mb: 3 });
    const l = space({ ml: 4 });
    const x = space({ mx: 1 });
    const y = space({ my: 2 });
    expect(topz).toEqual({ marginTop: '4px' });
    expect(r).toEqual({ marginRight: '8px' });
    expect(b).toEqual({ marginBottom: '16px' });
    expect(l).toEqual({ marginLeft: '32px' });
    expect(x).toEqual({ marginLeft: '4px', marginRight: '4px' });
    expect(y).toEqual({ marginTop: '8px', marginBottom: '8px' });
  });

  test('space returns responsive margins', () => {
    const a = space({ m: [0, 1] });
    expect(a).toEqual({
      margin: '0px',
      '@media screen and (min-width: 40em)': {
        margin: '4px',
      },
    });
  });

  test('space returns responsive directional margins', () => {
    const a = space({ mt: [0, 1], mb: [2, 3] });
    expect(a).toEqual({
      marginBottom: '8px',
      marginTop: '0px',
      '@media screen and (min-width: 40em)': {
        marginBottom: '16px',
        marginTop: '4px',
      },
    });
  });

  test('space sorts responsive directional margins', () => {
    const a = space({
      mb: 2,
      m: [0, 1],
    });
    const keys = Object.keys(a);
    expect(keys).toEqual([
      'margin',
      '@media screen and (min-width: 40em)',
      'marginBottom',
    ]);
  });

  test('space returns padding declarations', () => {
    const dec = space({ p: 1 });
    expect(dec).toEqual({ padding: '4px' });
  });

  test('space returns non-scalar paddings', () => {
    const a = space({ p: 24 });
    const b = space({ p: 'auto' });
    expect(a).toEqual({ padding: '24px' });
    expect(b).toEqual({ padding: 'auto' });
  });

  test('space returns directional paddings', () => {
    const topz = space({ pt: 1 });
    const r = space({ pr: 2 });
    const b = space({ pb: 3 });
    const l = space({ pl: 4 });
    const x = space({ px: 1 });
    const y = space({ py: 2 });
    expect(topz).toEqual({ paddingTop: '4px' });
    expect(r).toEqual({ paddingRight: '8px' });
    expect(b).toEqual({ paddingBottom: '16px' });
    expect(l).toEqual({ paddingLeft: '32px' });
    expect(x).toEqual({ paddingLeft: '4px', paddingRight: '4px' });
    expect(y).toEqual({ paddingTop: '8px', paddingBottom: '8px' });
  });

  test('space returns responsive paddings', () => {
    const a = space({ p: [0, 1] });
    expect(a).toEqual({
      padding: '0px',
      '@media screen and (min-width: 40em)': {
        padding: '4px',
      },
    });
  });

  test('space returns responsive directional paddings', () => {
    const a = space({ pt: [0, 1], pb: [2, 3] });
    expect(a).toEqual({
      paddingBottom: '8px',
      paddingTop: '0px',
      '@media screen and (min-width: 40em)': {
        paddingBottom: '16px',
        paddingTop: '4px',
      },
    });
  });

  test('space can be configured with a theme', () => {
    const a = space({ theme, m: 1 });
    const b = space({ theme, m: 2 });
    const c = space({ theme, m: 3 });
    const d = space({ theme, m: 4 });
    expect(a).toEqual({ margin: '6px' });
    expect(b).toEqual({ margin: '12px' });
    expect(c).toEqual({ margin: '18px' });
    expect(d).toEqual({ margin: '24px' });
  });

  test('space can accept string values', () => {
    const a = space({ theme: { space: ['1em', '2em'] }, m: 1 });
    expect(a).toEqual({ margin: '2em' });
  });

  test('space can accept string values with negative', () => {
    const a = space({ theme: { space: ['1em', '2em'] }, m: -1 });
    expect(a).toEqual({ margin: '-2em' });
  });

  // width
  test('width returns percentage widths', () => {
    const a = width({ width: 1 / 2 });
    expect(a).toEqual({ width: '50%' });
  });

  test('width returns pixel values', () => {
    const a = width({ width: 256 });
    expect(a).toEqual({ width: '256px' });
  });

  test('width returns string values', () => {
    const a = width({ width: 'auto' });
    expect(a).toEqual({ width: 'auto' });
  });

  test('width returns responsive values', () => {
    const a = width({ width: [1, 1 / 2] });
    expect(a).toEqual({
      width: '100%',
      '@media screen and (min-width: 40em)': { width: '50%' },
    });
  });

  test('width returns responsive pixel values', () => {
    const a = width({ width: [128, 256] });
    expect(a).toEqual({
      width: '128px',
      '@media screen and (min-width: 40em)': { width: '256px' },
    });
  });

  test('width returns 0 value', () => {
    const a = width({ width: 0 });
    expect(a).toEqual({ width: '0%' });
  });

  test('width returns null ', () => {
    const a = width({});
    expect(a).toEqual(null);
  });

  test('width accepts shortcut prop', () => {
    const a = width({ w: 1 / 2 });
    expect(a).toEqual({ width: '50%' });
  });

  // fontSize
  test('fontSize returns scale values', () => {
    const a = fontSize({ fontSize: 0, theme: {} });
    const b = fontSize({ fontSize: 1, theme: {} });
    const c = fontSize({ fontSize: 2 });
    expect(a).toEqual({ fontSize: '12px' });
    expect(b).toEqual({ fontSize: '14px' });
    expect(c).toEqual({ fontSize: '16px' });
  });

  test('fontSize returns pixel values', () => {
    const a = fontSize({ fontSize: 24 });
    expect(a).toEqual({ fontSize: '24px' });
  });

  test('fontSize returns string values', () => {
    const a = fontSize({ fontSize: '2em' });
    expect(a).toEqual({ fontSize: '2em' });
  });

  test('fontSize returns responsive values', () => {
    const a = fontSize({ fontSize: [1, 2] });
    expect(a).toEqual({
      fontSize: '14px',
      '@media screen and (min-width: 40em)': {
        fontSize: '16px',
      },
    });
  });

  test('fontSize accepts shortcut prop', () => {
    const a = fontSize({ f: 2 });
    expect(a).toEqual({ fontSize: '16px' });
  });

  test('fontSize can be configured with a theme', () => {
    const a = fontSize({ theme, f: 0 });
    const b = fontSize({ theme, f: 1 });
    const c = fontSize({ theme, f: 2 });
    const d = fontSize({ theme, f: 3 });
    const e = fontSize({ theme, f: 4 });
    const f = fontSize({ theme, f: 5 });
    expect(a).toEqual({ fontSize: '12px' });
    expect(b).toEqual({ fontSize: '16px' });
    expect(c).toEqual({ fontSize: '18px' });
    expect(d).toEqual({ fontSize: '24px' });
    expect(e).toEqual({ fontSize: '36px' });
    expect(f).toEqual({ fontSize: '72px' });
  });

  test('fontSize returns null', () => {
    const a = fontSize({});
    expect(a).toEqual(null);
  });

  // color
  test('color returns color and backgroundColor styles', () => {
    const a = color({ color: 'tomato' });
    const b = color({ bg: 'tomato' });
    expect(a).toEqual({ color: 'tomato' });
    expect(b).toEqual({ backgroundColor: 'tomato' });
  });

  test('color returns theme.colors values', () => {
    const a = color({ theme, color: 'blue' });
    const b = color({ theme, bg: 'green' });
    expect(a).toEqual({ color: theme.colors.blue });
    expect(b).toEqual({ backgroundColor: theme.colors.green });
  });

  test('color returns responsive values', () => {
    const a = color({ theme, color: ['blue', 'green'] });
    expect(a).toEqual({
      color: theme.colors.blue,
      '@media screen and (min-width: 32em)': {
        color: theme.colors.green,
      },
    });
  });

  test('color works with array theme.colors', () => {
    const a = color({
      theme: {
        colors: ['tomato', 'plum'],
      },
      color: 0,
    });
    expect(a.color).toEqual('tomato');
  });

  test('color keys support dot notation', () => {
    const a = color({
      theme: {
        colors: {
          gray: ['#333', '#666', '#999'],
        },
      },
      color: 'gray.2',
    });
    expect(a.color).toEqual('#999');
  });

  // style
  test('style returns a function', () => {
    const sx = style({
      prop: 'color',
      key: 'colors',
    });
    expect(typeof sx).toEqual('function');
  });

  test('style function returns a style object', () => {
    const a = style({
      prop: 'color',
      key: 'colors',
    })({ color: 'tomato' });
    expect(typeof a).toEqual('object');
    expect(a).toEqual({ color: 'tomato' });
  });

  test('style function returns null', () => {
    const sx = style({
      prop: 'color',
    });
    const a = sx({});
    expect(a).toEqual(null);
  });

  test('style function returns scale values', () => {
    const sx = style({
      key: 'colors',
      prop: 'color',
    });
    const a = sx({
      color: 'blue',
      theme: {
        colors: {
          blue: '#07c',
        },
      },
    });
    expect(a.color).toEqual('#07c');
  });

  test('style function returns pixels for number values', () => {
    const sx = style({
      prop: 'borderRadius',
      numberToPx: true,
    });
    const a = sx({
      borderRadius: 4,
      theme: {},
    });
    expect(a.borderRadius).toEqual('4px');
  });

  test('style function returns unitless number values', () => {
    const sx = style({
      prop: 'borderRadius',
    });
    const a = sx({
      borderRadius: 4,
      theme: {},
    });
    expect(a.borderRadius).toEqual(4);
  });

  test('style function accepts a getter option', () => {
    const sx = style({
      prop: 'width',
      getter: n => (!util.num(n) || n > 1 ? util.px(n) : `${n * 100}%`),
    });
    const a = sx({ width: 1 / 2 });
    const b = sx({ width: 24 });
    expect(a.width).toEqual('50%');
    expect(b.width).toEqual('24px');
  });

  // responsiveStyle
  test('responsiveStyle returns a function', () => {
    const sx = responsiveStyle({ prop: 'order' });
    expect(typeof sx).toEqual('function');
  });

  test('responsiveStyle‘s returned function returns a style object', () => {
    const orderz = responsiveStyle({ prop: 'order' });
    const a = orderz({ order: 1 });
    expect(a).toEqual({ order: 1 });
  });

  test('responsiveStyle‘s returned function returns null', () => {
    const orderz = responsiveStyle({ prop: 'order' });
    const a = orderz({});
    expect(a).toEqual(null);
  });

  test('responsiveStyle allows property aliases', () => {
    const direction = responsiveStyle({
      cssProperty: 'flex-direction',
      prop: 'direction',
    });
    const a = direction({ direction: 'column' });
    expect(a).toEqual({
      'flex-direction': 'column',
    });
  });

  // test('responsiveStyle allows array values', () => {
  //   const direction = responsiveStyle({
  //     cssProperty: 'flex-direction',
  //     prop: 'direction',
  //   });
  //   const a = direction({ direction: ['column', null, 'row'] });
  //   expect(a).toEqual({
  //     'flex-direction': 'column',
  //     '@media screen and (min-width: 40em)': {
  //       'flex-direction': null,
  //     },
  //     '@media screen and (min-width: 52em)': {
  //       'flex-direction': 'row',
  //     },
  //   });
  // });

  test('responsiveStyle accepts an object argument', () => {
    const direction = responsiveStyle({
      cssProperty: 'flexDirection',
      prop: 'direction',
    });
    const a = direction({ direction: ['column', 'row'] });
    expect(a).toEqual({
      flexDirection: 'column',
      '@media screen and (min-width: 40em)': {
        flexDirection: 'row',
      },
    });
  });

  test('responsiveStyle returns pixel values for numbers', () => {
    const radius = responsiveStyle({
      cssProperty: 'borderRadius',
      prop: 'radius',
      numberToPx: true,
    });
    const a = radius({ radius: 4 });
    expect(a).toEqual({
      borderRadius: '4px',
    });
  });

  // test('responsiveStyle returns pixel values for number arrays', () => {
  //   const radius = responsiveStyle({
  //     cssProperty: 'borderRadius',
  //     prop: 'radius',
  //     numberToPx: true,
  //   });
  //   const a = radius({ radius: [4, 5, 6] });
  //   expect(a).toEqual({
  //     borderRadius: '4px',
  //     '@media screen and (min-width: 40em)': {
  //       borderRadius: '5px',
  //     },
  //     '@media screen and (min-width: 52em)': {
  //       borderRadius: '6px',
  //     },
  //   });
  // });

  test('responsiveStyle returns unitless numbers', () => {
    const radius = responsiveStyle({
      cssProperty: 'borderRadius',
      prop: 'radius',
    });
    const a = radius({ radius: 4 });
    expect(a).toEqual({
      borderRadius: 4,
    });
  });

  test('responsiveStyle returns a theme value', () => {
    const sx = responsiveStyle({
      prop: 'borderColor',
      key: 'colors',
    });
    const a = sx({
      theme,
      borderColor: ['blue', 'green'],
    });
    expect(a).toEqual({
      borderColor: theme.colors.blue,
      '@media screen and (min-width: 32em)': {
        borderColor: theme.colors.green,
      },
    });
  });

  test('responsiveStyle returns a theme number value in px', () => {
    const sx = responsiveStyle({
      prop: 'borderRadius',
      key: 'radii',
      numberToPx: true,
    });
    const a = sx({
      theme,
      borderRadius: [0, 1],
    });
    expect(a).toEqual({
      borderRadius: `${theme.radii[0]}px`,
      '@media screen and (min-width: 32em)': {
        borderRadius: `${theme.radii[1]}px`,
      },
    });
  });

  test('psuedoStyle returns a function', () => {
    // eslint-disable-next-line
    const hover = pseudoStyle({ prop: 'hover' });
    expect(typeof hover).toEqual('function');
  });

  test('pseudoStyle returns a style object', () => {
    const hoverStyle = pseudoStyle({
      prop: 'hover',
    });
    const a = hoverStyle({
      hover: {
        color: 'tomato',
      },
    });
    expect(a).toEqual({
      '&:hover': {
        color: 'tomato',
      },
    });
  });

  test('pseudoStyle uses theme values', () => {
    const hoverStyle = pseudoStyle({
      prop: 'hover',
      keys: {
        color: 'colors',
      },
    });
    const a = hoverStyle({
      theme,
      hover: {
        color: 'blue',
      },
    });
    expect(a).toEqual({
      '&:hover': {
        color: theme.colors.blue,
      },
    });
  });

  test('pseudoStyle returns number pixel values', () => {
    const hoverStyle = pseudoStyle({
      prop: 'hover',
      numberToPx: {
        borderRadius: true,
      },
    });
    const a = hoverStyle({
      hover: {
        borderRadius: 4,
      },
    });
    expect(a).toEqual({
      '&:hover': {
        borderRadius: '4px',
      },
    });
  });

  test('pseudoStyle accepts a getters argument', () => {
    const hoverStyle = pseudoStyle({
      prop: 'hover',
      getters: {
        borderRadius: n => (n ? `${n * 2}px` : n),
      },
    });
    const a = hoverStyle({
      hover: {
        borderRadius: 4,
      },
    });
    expect(a).toEqual({
      '&:hover': {
        borderRadius: '8px',
      },
    });
  });

  test('pseudoStyle accepts an alias argument', () => {
    const hoverStyle = pseudoStyle({
      prop: 'hover',
      alias: 'h',
      numberToPx: {
        borderRadius: true,
      },
    });
    const a = hoverStyle({
      h: {
        borderRadius: 4,
      },
    });
    expect(a).toEqual({
      '&:hover': {
        borderRadius: '4px',
      },
    });
  });

  // complexStyle
  test('complexStyle returns a style object from theme', () => {
    // eslint-disable-next-line
    const theme = {
      textStyles: {
        caps: {
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
        },
      },
    };
    // eslint-disable-next-line
    const textStyle = complexStyle({
      prop: 'textStyle',
      key: 'textStyles',
    });
    const a = textStyle({ textStyle: 'caps', theme });
    expect(a).toEqual(theme.textStyles.caps);
  });

  test('complexStyle accepts boolean aliases', () => {
    // eslint-disable-next-line
    const theme = {
      buttons: {
        primary: {
          color: 'white',
          backgroundColor: 'blue',
        },
        secondary: {
          color: 'blue',
          backgroundColor: 'transparent',
          boxShadow: 'inset 0 0 0 1px blue',
        },
        large: {
          padding: '32px',
        },
      },
    };
    // eslint-disable-next-line
    const buttonStyle = complexStyle({
      prop: 'buttonStyle',
      key: 'buttons',
      props: ['primary', 'secondary', 'large'],
    });
    const a = buttonStyle({ primary: true, large: true, theme });
    const expected = Object.assign(
      {},
      theme.buttons.primary,
      theme.buttons.large,
    );
    expect(a).toEqual(expected);
  });

  // theme
  test('breakpoints can be configured with a theme', () => {
    const a = space({ theme, m: [1, 2, 3, 4] });
    const [, b, c, d] = Object.keys(a);
    expect(b).toEqual('@media screen and (min-width: 32em)');
    expect(c).toEqual('@media screen and (min-width: 48em)');
    expect(d).toEqual('@media screen and (min-width: 64em)');
  });

  // textAlign
  test('textAlign returns text-align', () => {
    const a = textAlign({ textAlign: 'center' });
    expect(a).toEqual({ textAlign: 'center' });
  });

  test('textAlign returns responsive text-align', () => {
    const a = textAlign({ textAlign: ['center', 'left'] });
    expect(a).toEqual({
      textAlign: 'center',
      '@media screen and (min-width: 40em)': {
        textAlign: 'left',
      },
    });
  });

  test('fontFamily returns font-family', () => {
    const a = fontFamily({ font: 'system-ui' });
    expect(a.fontFamily).toEqual('system-ui');
  });

  // lineHeight
  test('lineHeight returns line-height', () => {
    const a = lineHeight({ lineHeight: 1.23 });
    expect(a).toEqual({ lineHeight: 1.23 });
  });

  test('lineHeight returns a scalar style', () => {
    const a = lineHeight({
      theme: {
        lineHeights: [1, 2, 3],
      },
      lineHeight: 1,
    });

    expect(a).toEqual({ lineHeight: 2 });
  });

  test('lineHeight returns responsive line-height', () => {
    const a = lineHeight({
      theme: {
        lineHeights: [1, 2, 3],
      },
      lineHeight: [1, 2],
    });

    expect(a).toEqual({
      lineHeight: 2,
      '@media screen and (min-width: 40em)': {
        lineHeight: 3,
      },
    });
  });

  // fontWeight
  test('fontWeight returns fontWeight', () => {
    const a = fontWeight({ fontWeight: 'bold' });
    expect(a).toEqual({ fontWeight: 'bold' });
  });

  test('fontWeight returns a scalar style', () => {
    const a = fontWeight({
      theme: {
        fontWeights: [400, 600, 800],
      },
      fontWeight: 2,
    });
    expect(a).toEqual({ fontWeight: 800 });
  });

  // letterSpacing
  test('letterSpacing returns letterSpacing', () => {
    const a = letterSpacing({ letterSpacing: 2 });
    expect(a).toEqual({ letterSpacing: '2px' });
  });

  test('letterSpacing returns a scalar style', () => {
    const a = letterSpacing({
      theme: {
        letterSpacings: [1, 2, 3],
      },
      letterSpacing: 2,
    });
    expect(a).toEqual({ letterSpacing: '3px' });
  });

  test('display returns display', () => {
    const a = display({ display: 'inline-block' });
    expect(a.display).toEqual('inline-block');
  });

  test('minWidth returns minWidth', () => {
    const a = minWidth({ minWidth: 256 });
    expect(a.minWidth).toEqual('256px');
  });

  test('maxWidth returns width styles', () => {
    const a = maxWidth({ maxWidth: 234 });
    expect(a).toEqual({ maxWidth: '234px' });
  });

  test('maxWidth returns null when blank', () => {
    const a = maxWidth({ maxWidth: null });
    expect(a).toEqual(null);
  });

  test('maxWidth returns scalar styles', () => {
    const a = maxWidth({
      theme: {
        maxWidths: [123, 456, 789],
      },
      maxWidth: 1,
    });
    expect(a).toEqual({ maxWidth: '456px' });
  });

  test('height returns height', () => {
    const a = height({ height: 256 });
    expect(a.height).toEqual('256px');
  });

  test('minHeight returns minHeight', () => {
    const a = minHeight({ minHeight: 256 });
    expect(a.minHeight).toEqual('256px');
  });

  test('maxHeight returns maxHeight', () => {
    const a = maxHeight({ maxHeight: 256 });
    expect(a.maxHeight).toEqual('256px');
  });

  test('size returns width and height', () => {
    const a = size({ size: 256 });
    expect(a.width).toEqual('256px');
    expect(a.height).toEqual('256px');
  });

  test('ratio returns height and paddingBottom', () => {
    const a = ratio({ ratio: 1 / 2 });
    expect(a.height).toEqual(0);
    expect(a.paddingBottom).toEqual('50%');
  });

  test('ratio returns null when undefined', () => {
    const a = ratio({});
    expect(a).toEqual(null);
  });

  test('alignItems returns a style', () => {
    const a = alignItems({ alignItems: 'center' });
    expect(a).toEqual({ alignItems: 'center' });
  });

  test('alignContent returns a style', () => {
    const a = alignContent({ alignContent: 'center' });
    expect(a).toEqual({ alignContent: 'center' });
  });

  test('justifyContent returns a style', () => {
    const a = justifyContent({ justifyContent: 'center' });
    expect(a).toEqual({ justifyContent: 'center' });
  });

  test('flexWrap returns a style', () => {
    const a = flexWrap({ flexWrap: 'wrap' });
    expect(a).toEqual({ flexWrap: 'wrap' });
  });

  test('flexDirection returns a style', () => {
    const a = flexDirection({ flexDirection: 'column' });
    expect(a).toEqual({ flexDirection: 'column' });
  });

  test('flex returns a style', () => {
    const a = flex({ flex: 'none' });
    expect(a).toEqual({ flex: 'none' });
  });

  test('justifySelf returns a style', () => {
    const a = justifySelf({ justifySelf: 'center' });
    expect(a).toEqual({ justifySelf: 'center' });
  });

  test('alignSelf returns a style', () => {
    const a = alignSelf({ alignSelf: 'center' });
    expect(a).toEqual({ alignSelf: 'center' });
  });

  test('order returns a style', () => {
    const a = order({ order: 2 });
    expect(a).toEqual({ order: 2 });
  });

  test('gridGap returns a scalar style', () => {
    const a = gridGap({
      theme: {
        space: [0, 2, 4, 8],
      },
      gridGap: 3,
    });

    expect(a).toEqual({ gridGap: '8px' });
  });

  test('gridRowGap returns a scalar style', () => {
    const a = gridRowGap({
      theme: {
        space: [0, 2, 4, 8],
      },
      gridRowGap: 3,
    });

    expect(a).toEqual({ gridRowGap: '8px' });
  });

  test('gridColumnGap returns a scalar style', () => {
    const a = gridColumnGap({
      theme: {
        space: [0, 2, 4, 8],
      },
      gridColumnGap: 3,
    });

    expect(a).toEqual({ gridColumnGap: '8px' });
  });

  test('gridAutoFlow returns a style', () => {
    const a = gridAutoFlow({ gridAutoFlow: 'row dense' });
    expect(a).toEqual({ gridAutoFlow: 'row dense' });
  });

  test('gridAutoRows returns a style', () => {
    const a = gridAutoRows({ gridAutoRows: 'auto' });
    expect(a).toEqual({ gridAutoRows: 'auto' });
  });

  test('gridAutoColumns returns a style', () => {
    const a = gridAutoColumns({ gridAutoColumns: 'auto' });
    expect(a).toEqual({ gridAutoColumns: 'auto' });
  });

  test('gridTemplateColumns returns a style', () => {
    const a = gridTemplateColumns({ gridTemplateColumns: '1fr 1fr' });
    expect(a).toEqual({ gridTemplateColumns: '1fr 1fr' });
  });

  test('gridTemplateRows returns a style', () => {
    const a = gridTemplateRows({ gridTemplateRows: '1fr 1fr' });
    expect(a).toEqual({ gridTemplateRows: '1fr 1fr' });
  });

  test('gridColumn returns a style', () => {
    const a = gridColumn({ gridColumn: 'span 2' });
    expect(a).toEqual({ gridColumn: 'span 2' });
  });

  test('gridRow returns a style', () => {
    const a = gridRow({ gridRow: 'span 2' });
    expect(a).toEqual({ gridRow: 'span 2' });
  });

  test('borderRadius returns borderRadius', () => {
    const a = borderRadius({ borderRadius: '4px' });
    expect(a).toEqual({ borderRadius: '4px' });
  });

  test('borderRadius returns a pixel value', () => {
    const a = borderRadius({ borderRadius: 4 });
    expect(a).toEqual({ borderRadius: '4px' });
  });

  test('borderRadius returns a pixel value from theme', () => {
    const a = borderRadius({
      theme,
      borderRadius: 0,
    });
    expect(a).toEqual({ borderRadius: '2px' });
  });

  test('borderColor returns borderColor', () => {
    const a = borderColor({ borderColor: 'blue' });
    expect(a).toEqual({ borderColor: 'blue' });
  });

  test('borderColor returns blue borderColor if passed', () => {
    const a = borderColor({ borderColor: 'blue' });
    expect(a).toEqual({ borderColor: 'blue' });
  });

  test('borderColor returns borderColor gray if passed', () => {
    const a = borderColor({ theme, borderColor: 'gray.0' });
    expect(a).toEqual({ borderColor: theme.colors.gray[0] });
  });

  test('borders returns a border shorthand style', () => {
    const a = borders({ border: '1px solid' });
    expect(a.border).toEqual('1px solid');
  });

  test('borders converts numbers to a border shorthand style', () => {
    const a = borders({ border: 1 });
    expect(a.border).toEqual('1px solid');
  });

  test('borders handles responsive styles', () => {
    const a = borders({ border: [0, 1] });
    expect(a.border).toEqual(0);
    expect(a['@media screen and (min-width: 40em)'].border).toEqual(
      '1px solid',
    );
  });

  test('borders converts borderTop shorthand styles', () => {
    const a = borders({ borderTop: '1px solid' });
    expect(a.borderTop).toEqual('1px solid');
  });

  test('borders converts borderTop number shorthand styles', () => {
    const a = borders({ borderTop: 1 });
    expect(a.borderTop).toEqual('1px solid');
  });

  test('borders converts borderRight shorthand styles', () => {
    const a = borders({ borderRight: '1px solid' });
    expect(a.borderRight).toEqual('1px solid');
  });

  test('borders converts borderRight number shorthand styles', () => {
    const a = borders({ borderRight: 1 });
    expect(a.borderRight).toEqual('1px solid');
  });

  test('borders converts borderBottom shorthand styles', () => {
    const a = borders({ borderBottom: '1px solid' });
    expect(a.borderBottom).toEqual('1px solid');
  });

  test('borders converts borderBottom number shorthand styles', () => {
    const a = borders({ borderBottom: 1 });
    expect(a.borderBottom).toEqual('1px solid');
  });

  test('borders converts borderLeft shorthand styles', () => {
    const a = borders({ borderLeft: '1px solid' });
    expect(a.borderLeft).toEqual('1px solid');
  });

  test('borders converts borderLeft number shorthand styles', () => {
    const a = borders({ borderLeft: 1 });
    expect(a.borderLeft).toEqual('1px solid');
  });

  test('borders combines multiple border styles', () => {
    const a = borders({
      borderTop: 1,
      borderBottom: 2,
    });
    expect(a.borderTop).toEqual('1px solid');
    expect(a.borderBottom).toEqual('2px solid');
  });

  test('boxShadow returns box-shadow styles', () => {
    const a = boxShadow({ boxShadow: '0 0 8px rgba(0, 0, 0, .125)' });
    expect(a).toEqual({ boxShadow: '0 0 8px rgba(0, 0, 0, .125)' });
  });

  test('boxShadow returns theme value', () => {
    const a = boxShadow({
      theme: {
        shadows: ['0 0 4px rgba(0, 0, 0, .125)', '0 0 8px rgba(0, 0, 0, .125)'],
      },
      boxShadow: 1,
    });
    expect(a).toEqual({ boxShadow: '0 0 8px rgba(0, 0, 0, .125)' });
  });

  test('background returns background', () => {
    const a = background({ background: 'tomato' });
    expect(a.background).toEqual('tomato');
  });

  test('backgroundImage returns backgroundImage', () => {
    const a = backgroundImage({ backgroundImage: 'kitten.png' });
    expect(a.backgroundImage).toEqual('url(kitten.png)');
  });

  test('backgroundSize returns backgroundSize', () => {
    const a = backgroundSize({ backgroundSize: 'cover' });
    expect(a.backgroundSize).toEqual('cover');
  });

  test('backgroundPosition returns backgroundPosition', () => {
    const a = backgroundPosition({ backgroundPosition: 'center' });
    expect(a.backgroundPosition).toEqual('center');
  });

  test('backgroundRepeat returns backgroundRepeat', () => {
    const a = backgroundRepeat({ backgroundRepeat: 'repeat' });
    expect(a.backgroundRepeat).toEqual('repeat');
  });

  test('position returns position', () => {
    const a = position({ position: 'absolute' });
    expect(a.position).toEqual('absolute');
  });

  test('zIndex returns zIndex', () => {
    const a = zIndex({ zIndex: 2 });
    expect(a.zIndex).toEqual(2);
  });

  test('top returns top', () => {
    const a = top({ top: 2 });
    expect(a.top).toEqual('2px');
  });

  test('right returns right', () => {
    const a = right({ right: 2 });
    expect(a.right).toEqual('2px');
  });

  test('bottom returns bottom', () => {
    const a = bottom({ bottom: 2 });
    expect(a.bottom).toEqual('2px');
  });

  test('left returns left', () => {
    const a = left({ left: 2 });
    expect(a.left).toEqual('2px');
  });

  test('hover returns a style object', () => {
    const a = hover({
      hover: {
        color: 'tomato',
      },
    });
    expect(a).toEqual({
      '&:hover': {
        color: 'tomato',
      },
    });
  });

  test('hover uses theme values', () => {
    const a = hover({
      theme,
      hover: {
        color: 'blue',
        backgroundColor: 'green',
      },
    });
    expect(a).toEqual({
      '&:hover': {
        color: theme.colors.blue,
        backgroundColor: theme.colors.green,
      },
    });
  });

  test('focus returns a style object', () => {
    const a = focus({
      focus: {
        color: 'tomato',
      },
    });
    expect(a).toEqual({
      '&:focus': {
        color: 'tomato',
      },
    });
  });

  test('focus uses theme values', () => {
    const a = focus({
      theme,
      focus: {
        color: 'blue',
        backgroundColor: 'green',
      },
    });
    expect(a).toEqual({
      '&:focus': {
        color: theme.colors.blue,
        backgroundColor: theme.colors.green,
      },
    });
  });

  test('active returns a style object', () => {
    const a = active({
      active: {
        color: 'tomato',
      },
    });
    expect(a).toEqual({
      '&:active': {
        color: 'tomato',
      },
    });
  });

  test('active uses theme values', () => {
    const a = active({
      theme,
      active: {
        color: 'blue',
        backgroundColor: 'green',
      },
    });
    expect(a).toEqual({
      '&:active': {
        color: theme.colors.blue,
        backgroundColor: theme.colors.green,
      },
    });
  });

  test('disabled returns a style object', () => {
    const a = disabled({
      disabledStyle: {
        color: 'tomato',
      },
    });
    expect(a).toEqual({
      '&:disabled': {
        color: 'tomato',
      },
    });
  });

  test('disabled uses theme values', () => {
    const a = disabled({
      theme,
      disabledStyle: {
        color: 'blue',
        backgroundColor: 'green',
      },
    });
    expect(a).toEqual({
      '&:disabled': {
        color: theme.colors.blue,
        backgroundColor: theme.colors.green,
      },
    });
  });

  test('textStyle returns a value from theme', () => {
    // eslint-disable-next-line
    const theme = {
      textStyles: {
        caps: {
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
        },
      },
    };
    const a = textStyle({ textStyle: 'caps', theme });
    expect(a).toEqual(theme.textStyles.caps);
  });

  test('colorStyle returns a value from theme', () => {
    // eslint-disable-next-line
    const theme = {
      colorStyles: {
        primary: {
          color: 'white',
          backgroundColor: 'tomato',
        },
      },
    };
    const a = colorStyle({ primary: true, theme });
    expect(a).toEqual(theme.colorStyles.primary);
  });

  test('buttonStyle returns a value from theme', () => {
    // eslint-disable-next-line
    const theme = {
      buttons: {
        primary: {
          color: 'white',
          backgroundColor: 'tomato',
          '&:hover': {
            backgroundColor: 'black',
          },
        },
      },
    };
    const a = buttonStyle({ primary: true, theme });
    expect(a).toEqual(theme.buttons.primary);
  });

  test('deprecated borderWidth utility returns border styles', () => {
    const a = borderWidth({ borderWidth: 1 });
    expect(a.border).toEqual('1px solid');
  });

  test('flexWrap includes a shim for legacy boolean value api', () => {
    const a = flexWrap({ wrap: true });
    expect(a.flexWrap).toEqual('wrap');
  });

  Object.keys(styles).forEach(key => {
    // eslint-disable-next-line
    test(`${key}.propTypes is an object`, () => {
      const fn = system[key];
      if (typeof fn === 'function') {
        expect(typeof fn.propTypes).toEqual('object');
        Object.keys(fn.propTypes).forEach(prop => {
          expect(typeof fn.propTypes[prop]).toEqual('function');
        });
      }
    });
  });
});
