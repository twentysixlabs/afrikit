// @flow
// Export theme to theme provider
// Every property here is globally available in styledComponents when interpolating a function like so:
// ${(props) => props.theme}
// Or using import { withTheme } from 'styledComponents';

// https://jsfiddle.net/nnennajohn/qg0o3zb9/7/

import {
  fadeIn,
  fadeOut,
  fadeAndScaleIn,
  pulsate,
  growAndFadeIn,
  shrinkAndFadeOut,
} from './animations';
import colorPalette from './color-pallete';
import colors from './colors';
import { rem } from './theme-mixins';

export const theme = {
  bg: {
    default: '#FFFFFF',
    reverse: '#162d3d',
    wash: '#F9FbFd',
    border: '#E8EbE9',
    inactive: '#f1f1f1',
  },
  brand: {
    default: '#3899ec',
    alt: '#4eb7f5',
    wash: '#eaf7ff',
    border: '#daeffe',
    dark: '#308ddd',
  },
  generic: {
    default: '#c1e4fe',
    alt: '#f4fafe',
  },
  social: {
    facebook: {
      default: '#3B5998',
      alt: '#5A85DF',
    },
    twitter: {
      default: '#00ACED',
      alt: '#53D0FF',
    },
    google: {
      default: '#ea4335',
      alt: '#ea4335',
    },
    github: {
      default: '#16171A',
      alt: '#16171A',
    },
    ph: {
      default: '#D85537',
      alt: '#D85537',
    },
  },
  space: {
    darker: '#ff5d00',
    default: '#aadbfc',
    alt: '#A1D7FB',
    wash: '#c1e4fe',
    border: '#b3e0fb',
    dark: '#2b81cb',
  },
  special: {
    default: '#fdb10c',
    alt: '#fac249',
    dark: '#eda200',
    wash: '#fff9e1',
    border: '#fef0ba',
    active: '#c68801',
  },
  success: {
    default: '#60bc57',
    alt: '#80c979',
    dark: '#61ad5a',
    wash: '#edf9e5',
    border: '#c9eebc',
    active: '#44823f',
  },
  text: {
    default: '#162d3d',
    alt: '#7a92a5',
    reverse: '#FFFFFF',
    placeholder: '#b6c1cd',
    secondary: '#32536A',
    light: '#577083',
  },
  warn: {
    default: '#d8504c',
    alt: '#ee5951',
    dark: '#d6453d',
    wash: '#ffebeb',
    border: '#ffd7d7',
    notif: '#ff6666',
    notiflight: '#ffe1e1',
    active: '#e05050',
    medium: '#f7625a',
  },
  extras: {
    bglight: '#dfe5eb',
    bglighter: '#f0f4f7',
    bgwhite: '#ffffff',
    bgdisabled: '#eff1f2',
    btndisabled: '#cbd3dc',
    focusoutline: '#aadbfc',
    inputhelper: '#a3abb0',
  },
  purp: {
    default: '#cd68ed',
    alt: '#e5c9ee',
    dark: '#aa4dc8',
    wash: '#faeeff',
    border: '#eedbf4',
    active: '#8e21b1',
  },
  org: {
    default: '#fb7d33',
    alt: '#ff9a48',
    dark: '#ea5f0e',
  },
  grays: {
    normal: '#f8f8f8',
    medium: '#cccccc',
    regular: '#e5e5e5',
    dark: '#999999',
    semibold: '#666666',
    bold: '#333333',
    white: '#ffffff',
    black: '#000000',
    black30: '#c2c2c2',
  },
  breakpoints: {
    xs: 0, // rem
    sm: 48, // rem
    md: 64, // rem
    lg: 75, // rem
    xl: 85,
  },
  flexboxgrid: {
    // Defaults
    gutterWidth: 3, // rem
    outerMargin: 2, // rem
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76, // rem
    },
  },
  animations: {
    fadeIn,
    fadeOut,
    fadeAndScaleIn,
    pulsate,
    growAndFadeIn,
    shrinkAndFadeOut,
  },
  zindex: {
    // z-index list
    affix: 10,
    backTop: 10,
    modalMask: 1000,
    modal: 1000,
    notification: 1010,
    message: 1010,
    popover: 1030,
    picker: 1050,
    dropdown: 1050,
    tooltip: 1060,
  },
  shadows: {
    base: '0 2px 8px rgba(0, 0, 0, .15)',
    oneup: '0 2px 8px rgba(0, 0, 0, .15)',
    onedown: '0 2px 8px rgba(0, 0, 0, .15)',
    oneleft: '-2px 0 8px rgba(0, 0, 0, .15)',
    oneright: '2px 0 8px rgba(0, 0, 0, .15)',
    two: '0 4px 12px rgba(0, 0, 0, .15)',
  },
  borders: {
    radiusBase: '4px',
    radiusSm: '2px',
    colorBase: 'hsv(0, 0, 85%)', // base border outline a component
    colorSplit: 'hsv(0, 0, 91%)', // split border inside a component
    widthBase: '1px', // width of the border for a component
    styleBase: 'solid', // style of a components border
  },

  // -------- Colors -----------
  primaryColor: colors.blue6,
  infoColor: colors.blue6,
  successColor: colors.green6,
  processingColor: colors.blue6,
  errorColor: colors.red6,
  highlightColor: colors.red6,
  warningColor: colors.gold6,
  normalColor: '#d9d9d9',

  // Color used by default to control hover and active backgrounds and for
  // alert info backgrounds.

  primary1: colorPalette(colors.blue6, 1), // replace tint(@primary-color, 90%)
  primary2: colorPalette(colors.blue6, 2), // replace tint(@primary-color, 80%)
  primary3: colorPalette(colors.blue6, 3), // unused
  primary4: colorPalette(colors.blue6, 4), // unused
  primary5: colorPalette(colors.blue6, 5), // color used to control the text color in many active and hover states, replace tint(@primary-color, 20%)
  primary6: colors.blue6, // color used to control the text color of active buttons, don't use, use @primary-color
  primary7: colorPalette(colors.blue6, 7), // replace shade(@primary-color, 5%)
  primary8: colorPalette(colors.blue6, 8), // unused
  primary9: colorPalette(colors.blue6, 9), // unused
  primary10: colorPalette(colors.blue6, 10), // unused

  // Background color for `<body>`
  bodyBackground: '#fff',
  // Base background color for most components
  componentBackground: '#fff',
  fontFamilyNoNumber: `${'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif'}`,
  fontFamily: `${'"lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif'}`,
  codeFamily: 'Consolas, Menlo, Courier, monospace',
  headingColor: fade('#000', '85%'),
  textColor: fade('#000', '65%'),
  textColorSecondary: fade('#000', '45%'),
  headingColorDark: fade('#fff', '100%'),
  textColorDark: fade('#fff', '85%'),
  textColorSecondaryDark: fade('#fff', '65%'),
  fontSizeBase: rem(14),
  fontSizeLg: rem(16),
  fontSizeSm: rem(12),
  lineHeightBase: 1.5,
  borderRadiusBase: '4px',
  borderRadiusSm: '2px',
};
