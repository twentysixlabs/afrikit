// @flow
import { css } from 'styled-components';

export const Shadow = {
  low: '0 2px 8px',
  mid: '0 4px 12px',
  high: '0 8px 16px',
};

export const transition = {
  hover: {
    on: 'all 0.2s ease-in',
    off: 'all 0.2s ease-out',
  },
  reaction: {
    on: 'all 0.15s ease-in',
    off: 'all 0.1s ease-out',
  },
  dropdown: {
    off: 'all 0.35s ease-out',
  },
};

export const rem = ($sizeValue = 12) => {
  const remSize = $sizeValue / 14;
  return `${remSize}rem`;
};

export const parseUnit = (strInput, theout) => {
  let out = theout;
  if (!out) out = [0, ''];

  const str = String(strInput);
  const num = parseFloat(str, 10);
  out[0] = num;
  out[1] = str.match(/[\d.\-\+]*\s*(.*)/)[1] || '';
  return out;
};

export const radialGradient = (g1: string, g2: string) =>
  css`radial-gradient(ellipse farthest-corner at top left, ${g1} 0%, ${g2} 100%)`;

export const truncate = (width: string) => css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  min-width: 0;
  width: ${width};
`;

// Example
// import { truncate } from '../style-utils';

// // Make this div truncate the text with an ellipsis
// const Box = styled.div`
//   ${ truncate('250px') }
//   background: papayawhip;
// `;

/**
 * Helper function to display an element as a block that inherits its parents width
 * @param margin value in pixels to remove from width 100%
 */
export const block = (margin: number = 0) => {
  return (props: any = {}) => {
    if (props.block) {
      return css`
        width: calc(100% - ${margin}px);
        margin: 10px auto;
      `;
    }
    return ``;
  };
};

export const hexa = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha >= 0) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return `rgb(${r}, ${g}, ${b})`;
};

const breakpoints = {
  xs: 0, // em
  sm: 48, // em
  md: 64, // em
  lg: 75, // em
};

export const mediaBreakpoint: any = Object.keys(breakpoints).reduce(
  (theaccumulator, label) => {
    // using px in breakpoints to maintain uniform units with flexbox-grid
    // https://zellwk.com/blog/media-query-units/
    const accumulator = theaccumulator;
    const emSize = breakpoints[label];
    accumulator[label] = (strings: any, ...args: any[]) => css`
      @media (max-width: ${emSize}em) {
        ${css(strings, ...args)};
      }
    `;
    return accumulator;
  },
  {},
);

// Example
// import { mediaBreakpoint } from '../style-utils';

// // Make the text smaller on handheld devices
// const Box = styled.div`
//   font-size: 16px;
//   ${ mediaBreakpoint.sm`
//     font-size: 14px;
//   ` }
// `;

export const clearfix = () => css`
  zoom: 1;
  &:before,
  &:after {
    content: '';
    display: table;
  }
  &:after {
    clear: both;
  }
`;

export const placeholder = (color: string = 'something') => css`
  zoom: 1;
  &:before,
  &:after {
    content: '';
    display: table;
  }
  &:after {
    clear: both;
  }
`;
