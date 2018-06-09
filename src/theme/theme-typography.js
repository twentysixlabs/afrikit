// @flow
import { css } from 'styled-components';
import rem from '../utils/helpers/rem';

export const primaryFontSizes = {
  s11: {
    size: rem(11),
    height: '1.1em',
  },
  s14: {
    size: rem(14),
    height: rem(18),
  },
  s15: {
    size: rem(15),
    height: '1.25em',
  },
  s16: {
    size: rem(16),
    height: '1.4em',
  },
  s17: {
    size: rem(17),
    height: '1.1em',
  },
  s18: {
    size: rem(18),
    height: '1.4em',
  },
  s19: {
    size: rem(19),
    height: '1.5em',
  },
  s23: {
    size: rem(23),
    height: '1.5em',
  },
  s28: {
    size: rem(28),
    height: '1.2em',
  },
  s30: {
    size: rem(30),
    height: '1.25em',
  },
  s34: {
    size: rem(34),
    height: '1.1em',
  },
  s37: {
    size: rem(37),
    height: '1.2em',
  },
  s40: {
    size: rem(40),
    height: '1.1em',
  },
  s50: {
    size: rem(50),
    height: '1.1em',
  },
};

export const secondaryFontSizes = {
  s10: {
    size: rem(10),
    height: '1.4em',
  },
  s12: {
    size: rem(12),
    height: '1.4em',
  },
  s14: {
    size: rem(14),
    height: '1.4em',
  },
  s16: {
    size: rem(16),
    height: '1.1em',
  },
  s18: {
    size: rem(18),
    height: '1.1em',
  },
  s19: {
    size: rem(19),
    height: '1.5em',
  },
  s25: {
    size: rem(25),
    height: '1.1em',
  },
  s32: {
    size: rem(32),
    height: '1.1em',
  },
  s34: {
    size: rem(34),
    height: '1.1em',
  },
  s40: {
    size: rem(40),
    height: '1.1em',
  },
  s45: {
    size: rem(45),
    height: '1.2em',
  },
  s65: {
    size: rem(65),
    height: '1em',
  },
  s67: {
    size: rem(67),
    height: '1em',
  },
  s80: {
    size: rem(80),
    height: '1.1em',
  },
  s100: {
    size: rem(100),
    height: '1.1em',
  },
  s120: {
    size: rem(120),
    height: '1.1em',
  },
};

export const fontFallBackStack = `'-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Helvetica', 'sans-serif'`;

export const primaryFontStack = `'Lato' ${fontFallBackStack}`;

export const secondaryFontStack = `'Roboto' ${fontFallBackStack}`;

export const monoFontStack = `
  "SFMono-Medium", "SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", 'Input Mono', 'Menlo',
  'Inconsolata', 'Roboto Mono', Consolas, Menlo, Courier, monospace
`;

export const primaryFontObj = {
  fontFamily: primaryFontStack,
  style: css`
    font-family: ${primaryFontStack};
    -webkit-font-smoothing: antialiased;
    letter-spacing: ${rem(12)};
  `,
};

export const secondaryFontObj = {
  fontFamily: secondaryFontStack,
  style: css`
    font-family: ${secondaryFontStack};
    -webkit-font-smoothing: antialiased;
  `,
};

type PFontSizes = $Keys<typeof primaryFontSizes>;

export const pfont = (size: PFontSizes, isBold?: boolean = true) => {
  const evaluatedSize = primaryFontSizes[size];
  return css`
    font-family: ${primaryFontFamily};
    -webkit-font-smoothing: antialiased;
    font-size: ${evaluatedSize.size};
    line-height: ${evaluatedSize.height};
    font-weight: ${isBold ? `700` : `400`};
  `;
};

type SFontSizes = $Keys<typeof secondaryFontSizes>;

export const sfont = (size: SFontSizes) => {
  const evaluatedSize = secondaryFontSizes[size];
  return css`
    font-family: ${primaryFontStack};
    -webkit-font-smoothing: antialiased;
    font-size: ${evaluatedSize.size};
    line-height: ${evaluatedSize.height};
    font-weight: normal;
  `;
};