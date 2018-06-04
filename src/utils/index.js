// @flow

// Color Funcs
// Mostly Polished && Less.js Lib
import adjustHue from './color/adjustHue';
import complement from './color/complement';
import darken from './color/darken';
import desaturate from './color/desaturate';
import getLuminance from './color/getLuminance';
import grayscale from './color/grayscale';
import hsl from './color/hsl';
import hsla from './color/hsla';
import hsv from './color/hsv';
import invert from './color/invert';
import lighten from './color/lighten';
import mix from './color/mix';
import opacify from './color/opacify';
import parseToHsl from './color/parseToHsl';
import parseToRgb from './color/parseToRgb';
import readableColor from './color/readableColor';
import rgb from './color/rgb';
import rgba from './color/rgba';
import saturate from './color/saturate';
import setHue from './color/setHue';
import setLightness from './color/setLightness';
import setSaturation from './color/setSaturation';
import shade from './color/shade';
import tint from './color/tint';
import toColorString from './color/toColorString';
import transparentize from './color/transparentize';

// Mostly Styled Tools
import ifProp from './tools/ifProp';
import prop from './tools/prop';
import switchProp from './tools/switchProp';
import withProp from './tools/withProp';
import { add, subtract, multiply, divide } from './tools/math';
import {
  is,
  num,
  px,
  neg,
  arr,
  reduce,
  at,
  difference,
  get,
  values,
} from './tools/util-helpers';

export {
  // Color Funcs
  adjustHue,
  complement,
  darken,
  desaturate,
  getLuminance,
  grayscale,
  hsl,
  hsla,
  hsv,
  invert,
  lighten,
  mix,
  opacify,
  parseToHsl,
  parseToRgb,
  readableColor,
  rgb,
  rgba,
  saturate,
  setHue,
  setLightness,
  setSaturation,
  shade,
  tint,
  toColorString,
  transparentize,
  // Tools
  ifProp,
  prop,
  switchProp,
  withProp,
  add,
  subtract,
  multiply,
  divide,
  is,
  num,
  px,
  neg,
  arr,
  reduce,
  at,
  difference,
  get,
  values,
};

// export * from './custom-less';
