// @flow
import { css } from 'styled-components';
import { rem, pT, toHexColor } from '../../../../utils';

// const toHexColor = require('../utils/color/to-color').default;

// mixins for button
// ------------------------

const buttonSize = (
  height: string,
  padding: string,
  fontSize: string,
  borderRadius: string,
) => css`
  padding: ${padding};
  font-size: ${fontSize};
  border-radius: ${borderRadius};
  height: ${height};
`;
const buttonColor = (color: string, background: string, border: any) => css`
  color: ${color};
  background-color: ${background};
  border-color: ${border};
  // a inside Button which only work in Chrome
  // http://stackoverflow.com/a/17253457
  > a:only-child {
    color: currentColor;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: transparent;
    }
  }
`;

const buttonDisabled = disabledProps => css`
  &.disabled,
  &[disabled] {
    &,
    &:hover,
    &:focus,
    &:active,
    &.active {
      ${buttonColor(
        disabledProps.color,
        disabledProps.bg,
        disabledProps.border,
      )};
    }
  }
`;

const buttonVariantPrimary = (
  color: string,
  background: string,
  disabledProps: any,
) => css`
  ${buttonColor(color, background, background)} &:hover,
  &:focus {
    ${buttonColor(color, toHexColor(background, 5), toHexColor(background, 5))};
  }

  &:active,
  &.active {
    ${buttonColor(color, toHexColor(background, 7), toHexColor(background, 7))};
  }

  ${buttonDisabled(disabledProps)};
`;

const buttonVariantOther = (
  color: string,
  background: string,
  borderColor: any,
  focusColor: string,
  activeColor: string,
  disabledProps: any,
) => css`
  ${buttonColor(color, background, borderColor)} // Focus

  &:hover,
  &:focus {
    ${buttonColor(focusColor, background, focusColor)};
  }

  &:active,
  &.active {
    ${buttonColor(activeColor, background, activeColor)};
  }

  ${buttonDisabled(disabledProps)};
`;

const buttonVariantDanger = (
  color: string,
  background: string,
  border: any,
  primaryColor: string,
  disabledProps: any,
) => css`
  ${buttonColor(color, background, border)} &:hover {
    ${buttonColor(primaryColor, toHexColor(color, 5), toHexColor(color, 5))};
  }

  &:focus {
    ${buttonColor(toHexColor(color, 5), 'fff', toHexColor(color, 5))};
  }

  &:active,
  &.active {
    ${buttonColor(primaryColor, toHexColor(color, 7), toHexColor(color, 7))};
  }

  ${buttonDisabled(disabledProps)};
`;

const buttonVariantGhost = (color: string, props) => css`
  ${buttonColor(color, 'transparent', color)} &:hover,
  &:focus {
    ${buttonColor(toHexColor(color, 5), 'transparent', toHexColor(color, 5))};
  }

  &:active,
  &.active {
    ${buttonColor(toHexColor(color, 7), 'transparent', toHexColor(color, 7))};
  }

  ${buttonDisabled(props)};
`;

const buttonGroupBase = (btnClassName: string, props: any) => css`
  position: relative;
  display: inline-block;
  > .${btnClassName} {
    position: relative;
    line-height: ${pT('btnHeightBase')(props) - rem(2)};

    &:hover,
    &:focus,
    &:active,
    &.active {
      z-index: 2;
    }

    &:disabled {
      z-index: 0;
    }
  }

  // size
  &-lg > .${btnClassName} {
    ${buttonSize(
      pT('btnHeightLg')(props),
      pT('btnPaddingLg')(props),
      pT('btnFontSizeLg')(props),
      pT('btnBorderRadiusBase')(props),
    )}
    line-height: ${pT('btnHeightLg')(props) - rem(2)};
  }

  &-sm > .@{btnClassName} {
    ${buttonSize(
      pT('btnHeightSm')(props),
      pT('btnPaddingSm')(props),
      pT('fontSizeBase')(props),
      pT('btnBorderRadiusSm')(props),
    )}
    line-height: ${pT('btnHeightSm')(props) - rem(2)};
    > .icon {
      font-size: ${pT('fontSizeBase')(props)};
    }
  }
`;

// Base styles of buttons
// --------------------------------------------------

const btn = () => css``;

const btnPrimary = () => css``;

const btnDefault = () => css``;

const btnGhost = () => css``;

const btnDashed = () => css``;

const btnDanger = () => css``;

const btnCircle = (btnClassName: any) => css``;

const btnGroup = (btnClassName: any) => css``;

export {
  buttonSize,
  buttonColor,
  buttonDisabled,
  buttonVariantPrimary,
  buttonVariantOther,
  buttonVariantDanger,
  buttonVariantGhost,
  buttonGroupBase,
};
