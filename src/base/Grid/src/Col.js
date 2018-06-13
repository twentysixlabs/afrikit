// @flow
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  space,
  color,
  width,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  display,
  borderRadius,
  borderColor,
  borders,
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,
  flex,
  justifySelf,
  alignSelf,
} from '../../../theme';

import config, { DIMENSION_NAMES } from './gridConfig';

const ModificatorType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);

const offsetProps = DIMENSION_NAMES.map(d => `${d}Offset`);
const DimensionPropTypes = DIMENSION_NAMES.reduce((propTypes, dimension) => {
  // eslint-disable-next-line
  propTypes[dimension] = ModificatorType;
  // eslint-disable-next-line
  propTypes[dimension + 'Offset'] = PropTypes.number;
  return propTypes;
}, {});

const Col = styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: ${p => config(p).gutterWidth / 2}rem;
  padding-left: ${p => config(p).gutterWidth / 2}rem;
  word-break: break-all;

  ${p =>
    p.reverse &&
    `
    flex-direction: column-reverse;
  `}
  ${p =>
    Object.keys(p)
      // eslint-disable-next-line
      .filter(k => ~DIMENSION_NAMES.indexOf(k))
      .sort(
        (k1, k2) => DIMENSION_NAMES.indexOf(k1) - DIMENSION_NAMES.indexOf(k2),
      )
      .map(
        k =>
          config(p).media[k]`${
            // eslint-disable-next-line
            isInteger(p[k])
              ? // Integer value
                `
        flex-basis: ${(100 / config(p).gridSize) * p[k]}%;
        max-width: ${(100 / config(p).gridSize) * p[k]}%;
        display: block;
      `
              : // Boolean
                p[k]
                ? // Auto-width
                  `
          flex-grow: 1;
          flex-basis: 0;
          max-width: 100%;
          display: block;
        `
                : // Hide element
                  'display: none;'
          }`,
      )}

  ${p =>
    Object.keys(p)
      // eslint-disable-next-line
      .filter(k => ~offsetProps.indexOf(k))
      .map(
        k =>
          config(p).media[k.replace(/Offset$/, '')]`
        margin-left: ${(100 / config(p).gridSize) * p[k]}%;
      `,
      )}

  ${p => config(p).media.sm`
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  `}

  ${space};
  ${width};
  ${color};
  ${fontSize};
  ${fontWeight};
  ${textAlign};
  ${lineHeight};
  ${display};
  ${borderRadius};
  ${borderColor};
  ${borders};
  ${alignItems};
  ${alignContent};
  ${justifyContent};
  ${flexWrap};
  ${flexBasis};
  ${flexDirection};
  ${flex};
  ${justifySelf};
  ${alignSelf};
`;

Col.displayName = 'Col';

Col.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...display.propTypes,
  ...borderRadius.propTypes,
  ...borderColor.propTypes,
  ...borders.propTypes,
  ...alignItems.propTypes,
  ...alignContent.propTypes,
  ...justifyContent.propTypes,
  ...flexWrap.propTypes,
  ...flexBasis.propTypes,
  ...flexDirection.propTypes,
  ...flex.propTypes,
  ...justifySelf.propTypes,
  ...alignSelf.propTypes,
  ...DimensionPropTypes,
  reverse: PropTypes.bool,
  children: PropTypes.node,
};

export default Col;
