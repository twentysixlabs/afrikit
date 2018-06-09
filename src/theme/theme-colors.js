// @flow
const toHexColor = require('../utils/color/to-hex-color').default;

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
};

export default themeColors;
