// @flow
const toHexColor = require('../utils/color/to-hex-color').default;

// Reds
const R50 = '#FFEBE6';
const R75 = '#FFBDAD';
const R100 = '#FF8F73';
const R200 = '#FF7452';
const R300 = '#FF5630';
const R400 = '#DE350B';
const R500 = '#BF2600';

// Yellows
const Y50 = '#FFFAE6';
const Y75 = '#FFF0B3';
const Y100 = '#FFE380';
const Y200 = '#FFC400';
const Y300 = '#FFAB00';
const Y400 = '#FF991F';
const Y500 = '#FF8B00';

// Greens
const G50 = '#E3FCEF';
const G75 = '#ABF5D1';
const G100 = '#79F2C0';
const G200 = '#57D9A3';
const G300 = '#36B37E';
const G400 = '#00875A';
const G500 = '#006644';

// Blues
const B50 = '#DEEBFF';
const B75 = '#B3D4FF';
const B100 = '#4C9AFF';
const B200 = '#2684FF';
const B300 = '#0065FF';
const B400 = '#0052CC';
const B500 = '#0747A6';

// Purples
const P50 = '#EAE6FF';
const P75 = '#C0B6F2';
const P100 = '#998DD9';
const P200 = '#8777D9';
const P300 = '#6554C0';
const P400 = '#5243AA';
const P500 = '#403294';

// Teals
const T50 = '#E6FCFF';
const T75 = '#B3F5FF';
const T100 = '#79E2F2';
const T200 = '#00C7E6';
const T300 = '#00B8D9';
const T400 = '#00A3BF';
const T500 = '#008DA6';

// Neutrals
const N0 = '#FFFFFF';
const N10 = '#FAFBFC';
const N20 = '#F4F5F7';
const N30 = '#EBECF0';
const N40 = '#DFE1E6';
const N50 = '#C1C7D0';
const N60 = '#B3BAC5';
const N70 = '#A5ADBA';
const N80 = '#97A0AF';
const N90 = '#8993A4';
const N100 = '#7A869A';
const N200 = '#6B778C';
const N300 = '#5E6C84';
const N400 = '#505F79';
const N500 = '#42526E';
const N600 = '#344563';
const N700 = '#253858';
const N800 = '#172B4D';

// ATTENTION: update the tints if you update this
const N900 = '#091E42';

// Each tint is made of N900 and an alpha channel
const N10A = 'rgba(9, 30, 66, 0.02)';
const N20A = 'rgba(9, 30, 66, 0.04)';
const N30A = 'rgba(9, 30, 66, 0.08)';
const N40A = 'rgba(9, 30, 66, 0.13)';
const N50A = 'rgba(9, 30, 66, 0.25)';
const N60A = 'rgba(9, 30, 66, 0.31)';
const N70A = 'rgba(9, 30, 66, 0.36)';
const N80A = 'rgba(9, 30, 66, 0.42)';
const N90A = 'rgba(9, 30, 66, 0.48)';
const N100A = 'rgba(9, 30, 66, 0.54)';
const N200A = 'rgba(9, 30, 66, 0.60)';
const N300A = 'rgba(9, 30, 66, 0.66)';
const N400A = 'rgba(9, 30, 66, 0.71)';
const N500A = 'rgba(9, 30, 66, 0.77)';
const N600A = 'rgba(9, 30, 66, 0.82)';
const N700A = 'rgba(9, 30, 66, 0.89)';
const N800A = 'rgba(9, 30, 66, 0.95)';

// Dark Mode Neutrals
const DN900 = '#E6EDFA';
const DN800 = '#DCE5F5';
const DN700 = '#CED9EB';
const DN600 = '#B8C7E0';
const DN500 = '#ABBBD6';
const DN400 = '#9FB0CC';
const DN300 = '#8C9CB8';
const DN200 = '#7988A3';
const DN100 = '#67758F';
const DN90 = '#56637A';
const DN80 = '#455166';
const DN70 = '#3B475C';
const DN60 = '#313D52';
const DN50 = '#283447';
const DN40 = '#202B3D';
const DN30 = '#1B2638';
const DN20 = '#121A29';
const DN10 = '#0E1624';

// ATTENTION: update the tints if you update this
const DN0 = '#0D1424';

// Each dark tint is made of DN0 and an alpha channel
const DN800A = 'rgba(13, 20, 36, 0.06)';
const DN700A = 'rgba(13, 20, 36, 0.14)';
const DN600A = 'rgba(13, 20, 36, 0.18)';
const DN500A = 'rgba(13, 20, 36, 0.29)';
const DN400A = 'rgba(13, 20, 36, 0.36)';
const DN300A = 'rgba(13, 20, 36, 0.40)';
const DN200A = 'rgba(13, 20, 36, 0.47)';
const DN100A = 'rgba(13, 20, 36, 0.53)';
const DN90A = 'rgba(13, 20, 36, 0.63)';
const DN80A = 'rgba(13, 20, 36, 0.73)';
const DN70A = 'rgba(13, 20, 36, 0.78)';
const DN60A = 'rgba(13, 20, 36, 0.81)';
const DN50A = 'rgba(13, 20, 36, 0.85)';
const DN40A = 'rgba(13, 20, 36, 0.89)';
const DN30A = 'rgba(13, 20, 36, 0.92)';
const DN20A = 'rgba(13, 20, 36, 0.95)';
const DN10A = 'rgba(13, 20, 36, 0.97)';

// Jira Portfolio
export const colorPalette8 = [
  { background: N800, text: N0 },
  { background: R400, text: N0 },
  { background: P400, text: P50 },
  { background: B400, text: B75 },
  { background: T300, text: N800 },
  { background: G400, text: N0 },
  { background: Y400, text: N800 },
  { background: N70, text: N800 },
];

export const colorPalette16 = [
  ...colorPalette8,
  { background: N500, text: N0 },
  { background: R100, text: N800 },
  { background: P75, text: N800 },
  { background: B100, text: N800 },
  { background: T100, text: N800 },
  { background: G100, text: G500 },
  { background: Y200, text: N800 },
  { background: N0, text: N800 },
];

export const colorPalette24 = [
  ...colorPalette16,
  { background: N100, text: N0 },
  { background: N40, text: N800 },
  { background: N50, text: R500 },
  { background: P50, text: P500 },
  { background: B50, text: B500 },
  { background: T75, text: N800 },
  { background: G50, text: G500 },
  { background: Y75, text: N800 },
];

const baseBlue = '#1890ff';
const basePurple = '#722ed1';
const baseCyan = '#13c2c2';
const baseGreen = '#52c41a';
const baseMagenta = '#eb2f96';
const baseRed = '#f5222d';
const baseOrange = '#fa8c16';
const baseYellow = '#fadb14';
const baseVolcano = '#fa541c';
const baseGeekBlue = '#2f54eb';
const baseLime = '#a0d911';
const baseGold = '#faad14';

const themeColors = {
  blue1: toHexColor(baseBlue, 1),
  blue2: toHexColor(baseBlue, 2),
  blue3: toHexColor(baseBlue, 3),
  blue4: toHexColor(baseBlue, 4),
  blue5: toHexColor(baseBlue, 5),
  blue6: toHexColor(baseBlue),
  blue7: toHexColor(baseBlue, 7),
  blue8: toHexColor(baseBlue, 8),
  blue9: toHexColor(baseBlue, 9),
  blue10: toHexColor(baseBlue, 10),

  purple1: toHexColor(basePurple, 1),
  purple2: toHexColor(basePurple, 2),
  purple3: toHexColor(basePurple, 3),
  purple4: toHexColor(basePurple, 4),
  purple5: toHexColor(basePurple, 5),
  purple6: toHexColor(basePurple),
  purple7: toHexColor(basePurple, 7),
  purple8: toHexColor(basePurple, 8),
  purple9: toHexColor(basePurple, 9),
  purple10: toHexColor(basePurple, 10),

  cyan1: toHexColor(baseCyan, 1),
  cyan2: toHexColor(baseCyan, 2),
  cyan3: toHexColor(baseCyan, 3),
  cyan4: toHexColor(baseCyan, 4),
  cyan5: toHexColor(baseCyan, 5),
  cyan6: toHexColor(baseCyan),
  cyan7: toHexColor(baseCyan, 7),
  cyan8: toHexColor(baseCyan, 8),
  cyan9: toHexColor(baseCyan, 9),
  cyan10: toHexColor(baseCyan, 10),

  green1: toHexColor(baseGreen, 1),
  green2: toHexColor(baseGreen, 2),
  green3: toHexColor(baseGreen, 3),
  green4: toHexColor(baseGreen, 4),
  green5: toHexColor(baseGreen, 5),
  green6: toHexColor(baseGreen),
  green7: toHexColor(baseGreen, 7),
  green8: toHexColor(baseGreen, 8),
  green9: toHexColor(baseGreen, 9),
  green10: toHexColor(baseGreen, 10),

  magenta1: toHexColor(baseMagenta, 1),
  magenta2: toHexColor(baseMagenta, 2),
  magenta3: toHexColor(baseMagenta, 3),
  magenta4: toHexColor(baseMagenta, 4),
  magenta5: toHexColor(baseMagenta, 5),
  magenta6: toHexColor(baseMagenta),
  magenta7: toHexColor(baseMagenta, 7),
  magenta8: toHexColor(baseMagenta, 8),
  magenta9: toHexColor(baseMagenta, 9),
  magenta10: toHexColor(baseMagenta, 10),

  // alias of magenta
  pink1: toHexColor(baseMagenta, 1),
  pink2: toHexColor(baseMagenta, 2),
  pink3: toHexColor(baseMagenta, 3),
  pink4: toHexColor(baseMagenta, 4),
  pink5: toHexColor(baseMagenta, 5),
  pink6: toHexColor(baseMagenta),
  pink7: toHexColor(baseMagenta, 7),
  pink8: toHexColor(baseMagenta, 8),
  pink9: toHexColor(baseMagenta, 9),
  pink10: toHexColor(baseMagenta, 10),

  red1: toHexColor(baseRed, 1),
  red2: toHexColor(baseRed, 2),
  red3: toHexColor(baseRed, 3),
  red4: toHexColor(baseRed, 4),
  red5: toHexColor(baseRed, 5),
  red6: toHexColor(baseRed),
  red7: toHexColor(baseRed, 7),
  red8: toHexColor(baseRed, 8),
  red9: toHexColor(baseRed, 9),
  red10: toHexColor(baseRed, 10),

  orange1: toHexColor(baseOrange, 1),
  orange2: toHexColor(baseOrange, 2),
  orange3: toHexColor(baseOrange, 3),
  orange4: toHexColor(baseOrange, 4),
  orange5: toHexColor(baseOrange, 5),
  orange6: toHexColor(baseOrange),
  orange7: toHexColor(baseOrange, 7),
  orange8: toHexColor(baseOrange, 8),
  orange9: toHexColor(baseOrange, 9),
  orange10: toHexColor(baseOrange, 10),

  yellow1: toHexColor(baseYellow, 1),
  yellow2: toHexColor(baseYellow, 2),
  yellow3: toHexColor(baseYellow, 3),
  yellow4: toHexColor(baseYellow, 4),
  yellow5: toHexColor(baseYellow, 5),
  yellow6: toHexColor(baseYellow),
  yellow7: toHexColor(baseYellow, 7),
  yellow8: toHexColor(baseYellow, 8),
  yellow9: toHexColor(baseYellow, 9),
  yellow10: toHexColor(baseYellow, 10),

  volcano1: toHexColor(baseVolcano, 1),
  volcano2: toHexColor(baseVolcano, 2),
  volcano3: toHexColor(baseVolcano, 3),
  volcano4: toHexColor(baseVolcano, 4),
  volcano5: toHexColor(baseVolcano, 5),
  volcano6: toHexColor(baseVolcano),
  volcano7: toHexColor(baseVolcano, 7),
  volcano8: toHexColor(baseVolcano, 8),
  volcano9: toHexColor(baseVolcano, 9),
  volcano10: toHexColor(baseVolcano, 10),

  geekblue1: toHexColor(baseGeekBlue, 1),
  geekblue2: toHexColor(baseGeekBlue, 2),
  geekblue3: toHexColor(baseGeekBlue, 3),
  geekblue4: toHexColor(baseGeekBlue, 4),
  geekblue5: toHexColor(baseGeekBlue, 5),
  geekblue6: toHexColor(baseGeekBlue),
  geekblue7: toHexColor(baseGeekBlue, 7),
  geekblue8: toHexColor(baseGeekBlue, 8),
  geekblue9: toHexColor(baseGeekBlue, 9),
  geekblue10: toHexColor(baseGeekBlue, 10),

  lime1: toHexColor(baseLime, 1),
  lime2: toHexColor(baseLime, 2),
  lime3: toHexColor(baseLime, 3),
  lime4: toHexColor(baseLime, 4),
  lime5: toHexColor(baseLime, 5),
  lime6: toHexColor(baseLime),
  lime7: toHexColor(baseLime, 7),
  lime8: toHexColor(baseLime, 8),
  lime9: toHexColor(baseLime, 9),
  lime10: toHexColor(baseLime, 10),

  gold1: toHexColor(baseGold, 1),
  gold2: toHexColor(baseGold, 2),
  gold3: toHexColor(baseGold, 3),
  gold4: toHexColor(baseGold, 4),
  gold5: toHexColor(baseGold, 5),
  gold6: toHexColor(baseGold),
  gold7: toHexColor(baseGold, 7),
  gold8: toHexColor(baseGold, 8),
  gold9: toHexColor(baseGold, 9),
  gold10: toHexColor(baseGold, 10),

  // Atlaskit Reds
  R50: '#FFEBE6',
  R75: '#FFBDAD',
  R100: '#FF8F73',
  R200: '#FF7452',
  R300: '#FF5630',
  R400: '#DE350B',
  R500: '#BF2600',

  // Atlaskit Yellows
  Y50: '#FFFAE6',
  Y75: '#FFF0B3',
  Y100: '#FFE380',
  Y200: '#FFC400',
  Y300: '#FFAB00',
  Y400: '#FF991F',
  Y500: '#FF8B00',

  // Greens
  G50: '#E3FCEF',
  G75: '#ABF5D1',
  G100: '#79F2C0',
  G200: '#57D9A3',
  G300: '#36B37E',
  G400: '#00875A',
  G500: '#006644',

  // Atlaskit Blues
  B50: '#DEEBFF',
  B75: '#B3D4FF',
  B100: '#4C9AFF',
  B200: '#2684FF',
  B300: '#0065FF',
  B400: '#0052CC',
  B500: '#0747A6',

  // Purples
  P50: '#EAE6FF',
  P75: '#C0B6F2',
  P100: '#998DD9',
  P200: '#8777D9',
  P300: '#6554C0',
  P400: '#5243AA',
  P500: '#403294',

  // Atlaskit Teals
  T50: '#E6FCFF',
  T75: '#B3F5FF',
  T100: '#79E2F2',
  T200: '#00C7E6',
  T300: '#00B8D9',
  T400: '#00A3BF',
  T500: '#008DA6',

  // Atlaskit Neutrals
  N0: '#FFFFFF',
  N10: '#FAFBFC',
  N20: '#F4F5F7',
  N30: '#EBECF0',
  N40: '#DFE1E6',
  N50: '#C1C7D0',
  N60: '#B3BAC5',
  N70: '#A5ADBA',
  N80: '#97A0AF',
  N90: '#8993A4',
  N100: '#7A869A',
  N200: '#6B778C',
  N300: '#5E6C84',
  N400: '#505F79',
  N500: '#42526E',
  N600: '#344563',
  N700: '#253858',
  N800: '#172B4D',

  // ATTENTION: update the tints if you update this
  N900: '#091E42',

  // Each tint is made of N900 and an alpha channel
  N10A: 'rgba(9, 30, 66, 0.02)',
  N20A: 'rgba(9, 30, 66, 0.04)',
  N30A: 'rgba(9, 30, 66, 0.08)',
  N40A: 'rgba(9, 30, 66, 0.13)',
  N50A: 'rgba(9, 30, 66, 0.25)',
  N60A: 'rgba(9, 30, 66, 0.31)',
  N70A: 'rgba(9, 30, 66, 0.36)',
  N80A: 'rgba(9, 30, 66, 0.42)',
  N90A: 'rgba(9, 30, 66, 0.48)',
  N100A: 'rgba(9, 30, 66, 0.54)',
  N200A: 'rgba(9, 30, 66, 0.60)',
  N300A: 'rgba(9, 30, 66, 0.66)',
  N400A: 'rgba(9, 30, 66, 0.71)',
  N500A: 'rgba(9, 30, 66, 0.77)',
  N600A: 'rgba(9, 30, 66, 0.82)',
  N700A: 'rgba(9, 30, 66, 0.89)',
  N800A: 'rgba(9, 30, 66, 0.95)',

  // Dark Mode Neutrals
  DN900: '#E6EDFA',
  DN800: '#DCE5F5',
  DN700: '#CED9EB',
  DN600: '#B8C7E0',
  DN500: '#ABBBD6',
  DN400: '#9FB0CC',
  DN300: '#8C9CB8',
  DN200: '#7988A3',
  DN100: '#67758F',
  DN90: '#56637A',
  DN80: '#455166',
  DN70: '#3B475C',
  DN60: '#313D52',
  DN50: '#283447',
  DN40: '#202B3D',
  DN30: '#1B2638',
  DN20: '#121A29',
  DN10: '#0E1624',

  // ATTENTION: update the tints if you update this
  DN0: '#0D1424',

  // Each dark tint is made of DN0 and an alpha channel
  DN800A: 'rgba(13, 20, 36, 0.06)',
  DN700A: 'rgba(13, 20, 36, 0.14)',
  DN600A: 'rgba(13, 20, 36, 0.18)',
  DN500A: 'rgba(13, 20, 36, 0.29)',
  DN400A: 'rgba(13, 20, 36, 0.36)',
  DN300A: 'rgba(13, 20, 36, 0.40)',
  DN200A: 'rgba(13, 20, 36, 0.47)',
  DN100A: 'rgba(13, 20, 36, 0.53)',
  DN90A: 'rgba(13, 20, 36, 0.63)',
  DN80A: 'rgba(13, 20, 36, 0.73)',
  DN70A: 'rgba(13, 20, 36, 0.78)',
  DN60A: 'rgba(13, 20, 36, 0.81)',
  DN50A: 'rgba(13, 20, 36, 0.85)',
  DN40A: 'rgba(13, 20, 36, 0.89)',
  DN30A: 'rgba(13, 20, 36, 0.92)',
  DN20A: 'rgba(13, 20, 36, 0.95)',
  DN10A: 'rgba(13, 20, 36, 0.97)',

  // Themed colors
  background: N0,
  backgroundActive: B50,
  backgroundHover: N30,
  backgroundOnLayer: N0,
  text: N900,
  textHover: N800,
  textActive: B400,
  subtleText: N300,
  placeholderText: N100,
  heading: N800,
  subtleHeading: N300,
  codeBlock: N20,
  link: B400,
  linkHover: B300,
  linkActive: B500,
  linkOutline: B100,
  primary: B400,
  blue: B400,
  teal: T300,
  purple: P300,
  red: R300,
  yellow: Y300,
  green: G300,

  colorPalette: (palette: colorPaletteType = '8') => {
    switch (palette) {
      case '8':
        return colorPalette8;
      case '16':
        return colorPalette16;
      case '24':
        return colorPalette24;
      default:
        throw new Error('The only available color palette is 8, 16, 24');
    }
  },
};

export default themeColors;
