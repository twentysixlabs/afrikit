// @flow

import { css } from 'styled-components';
import base from '../../theme';
import { isValidPositiveNumberOrZero, isUndef } from '../utils/misc';

const generateMediaQueryArg = (name, value, baseDivider) => {
  if (!isValidPositiveNumberOrZero(baseDivider) || !baseDivider)
    throw new Error(`Invalid 'baseDivider' value: ${baseDivider}`);
  if (!isUndef(value)) {
    if (typeof value === 'string') {
      return `(${name}: ${value})`;
    } else if (isValidPositiveNumberOrZero(value)) {
      return `(${name}: ${value / baseDivider}em)`;
    }
    throw new Error(`Invalid media query '${name}' value: ${value}`);
  }
  return undefined;
};

/**
 * MEDIA QUERIES
 * iterate through the sizes and create a media template
 */
export const media = (
  fromWidth,
  untilWidth,
  baseDivider = base.breakpointsEmBase,
) => (...args) => {
  const argNames = ['min-width', 'max-width'];

  const query = [fromWidth, untilWidth]
    .map((value, index) =>
      generateMediaQueryArg(argNames[index], value, baseDivider),
    )
    .filter(Boolean)
    .join(' and ');

  return query.length
    ? css`
        @media ${query} {
          ${css(...args)};
        }
      `
    : null;
};
