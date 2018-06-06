// @flow
import { css } from 'styled-components';

const breakpoints = {
  xs: 0, // rem
  sm: 48, // rem
  md: 64, // rem
  lg: 75, // rem
};

const mediaBreakpoint: any = Object.keys(breakpoints).reduce(
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

export default mediaBreakpoint;
