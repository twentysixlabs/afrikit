// @flow
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
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
  order,
  justifySelf,
  alignSelf,
} from '../../../theme';

import config, { DIMENSION_NAMES } from './gridConfig';
import Box from '../../Box';

const Container = Box.extend`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  ${p =>
    p.fluid &&
    css`
      padding-right: ${pp => `${config(pp).outerMargin}rem`};
      padding-left: ${pp => `${config(pp).outerMargin}rem`};
    `}
  ${p =>
    !p.fluid &&
    css`
      ${DIMENSION_NAMES.map(
        t =>
          config(p).container[t] &&
          config(p).media[t]`
        max-width: ${z => config(z).container[t]}rem;
      `,
      )};
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
  ${order};
  ${justifySelf};
  ${alignSelf};
`;

Container.displayName = 'Container';

Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node,
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...alignSelf.propTypes,
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
  ...justifySelf.propTypes,
};

export const Grid = Container;

export default Container;
