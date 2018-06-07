// @flow
import { css } from 'styled-components';
import { prop, pT } from '../../../../utils';

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
const buttonColor = (color: string, background: string, border: any) => css``;

const buttonDisabled = props => css`
  &.disabled,
  &[disabled] {
    &,
    &:hover,
    &:focus,
    &:active,
    &.active {
      ${buttonColor(
        pT('btnDisableColor')(props),
        pT('btnDisableBg')(props),
        pT('btnDisableBorder')(props),
      )};
    }
  }
`;

const buttonVariantPrimary = (color: string, background: string) => css``;

const buttonVariantOther = (
  color: string,
  background: string,
  border: any,
) => css``;

const buttonVariantDanger = (
  color: string,
  background: string,
  border: any,
) => css``;

const buttonVariantGhost = (color: string) => css``;

const buttonGroupBase = (btnClassName: string) => css``;

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
