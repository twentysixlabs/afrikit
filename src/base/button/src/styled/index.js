// @flow
import { css } from 'styled-components';
import { pT, ifPrp, size, rem } from '../../../../utils';

import {
  buttonSize,
  // buttonColor,
  // buttonDisabled,
  buttonVariantPrimary,
  buttonVariantOther,
  buttonVariantDanger,
  // buttonVariantGhost,
  // buttonGroupBase,
} from './mixin';

export default function getButtonStyles(props: Object) {
  const primaryColor = pT('primaryColor');
  const btnFontWeight = pT('btnFontWeight');
  const borderWidthBase = pT('borderWidthBase');
  const borderStyleBase = pT('borderStyleBase');
  const borderColorBase = pT('borderColorBase');
  const btnHeightBase = pT('btnHeightBase');
  const btnPaddingBase = pT('btnPaddingBase');
  const fontSizeBase = pT('fontSizeBase');
  const btnBorderRadiusBase = pT('btnBorderRadiusBase');
  const btnBorderRadiusSm = pT('btnBorderRadiusSm');
  const btnHeightLg = pT('btnHeightLg');
  const btnHeightSm = pT('btnHeightSm');
  const btnFontSizeLg = pT('btnFontSizeLg');
  const btnFontSizeSm = pT('btnFontSizeSm');
  const btnPaddingLg = pT('btnPaddingLg');
  const btnPaddingSm = pT('btnPaddingSm');
  const btnPrimaryColor = pT('btnPrimaryColor');
  const btnPrimaryBg = pT('btnPrimaryBg');
  const btnDefaultColor = pT('btnDefaultColor');
  const btnDefaultBg = pT('btnDefaultBg');
  const btnDefaultBorder = pT('btnDefaultBorder');
  // eslint-disable-next-line
  console.log('This is the theme btnDefaultBorder', btnDefaultBorder);
  const btnDangerColor = pT('btnDangerColor');
  const btnDangerBg = pT('btnDangerBg');
  const btnDangerBorder = pT('btnDangerBorder');
  const disabledProps = {
    color: pT('btnDisableColor'),
    bg: pT('btnDisableBg'),
    border: pT('btnDisableBorder'),
  };
  const primary5 = pT('primary5');
  const primary7 = pT('primary7');
  const btnGhostColor = pT('textColor');
  const btnGhostBg = 'transparent';
  const btnGhostBorder = borderColorBase;
  const btnCircleSize = pT('btnCircleSize');
  const btnCircleSizeLg = pT('btnCircleSizeLg');
  const btnCircleSizeSm = pT('btnCircleSizeSm');

  return css`
    font-weight: ${btnFontWeight};
    text-align: center;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: ${borderWidthBase} ${borderStyleBase} transparent;
    white-space: nowrap;
    ${buttonSize(
      btnHeightBase,
      btnPaddingBase,
      fontSizeBase,
      btnBorderRadiusBase,
    )}
    user-select: none;
    transition: all .3s @ease-in-out;
    position: relative;

    > .icon {
      line-height: 1;
    }

    &:active,
    &:focus {
      outline: 0;
    }

    &:not([disabled]):hover {
      text-decoration: none;
    }

    &:not([disabled]):active {
      outline: 0;
      transition: none;
    }

    &.disabled,
    &[disabled] {
      cursor: not-allowed;
      > * {
        pointer-events: none;
      }
    }

    // Make sure that the target of Button's click event always be 'button'
    // Ref: https://github.com/ant-design/ant-design/issues/7034
    > i,
    > span {
      pointer-events: none;
    }

    &:before {
      position: absolute;
      top: -1px;
      left: -1px;
      bottom: -1px;
      right: -1px;
      background: #fff;
      opacity: 0.35;
      content: '';
      border-radius: inherit;
      z-index: 1;
      transition: opacity .2s;
      pointer-events: none;
      display: none;
    }

    &:not(&-circle):not(&-circle-outline)&-icon-only {
      padding-left: 8px;
      padding-right: 8px;
    }

    // http://stackoverflow.com/a/21281554/3040605
    &:focus > span,
    &:active > span {
      position: relative;
    }

    // To ensure that a space will be placed between character and 'Icon'.
    > .icon + span,
    > span + .icon {
      margin-left: 8px;
    }

    &-clicked:after {
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      bottom: -1px;
      right: -1px;
      border-radius: inherit;
      border: 0 solid ${primaryColor};
      opacity: 0.4;
      animation: buttonEffect .4s;
      display: block;
    }

    @keyframes buttonEffect {
      to {
        opacity: 0;
        top: -6px;
        left: -6px;
        bottom: -6px;
        right: -6px;
        border-width: 6px;
      }
    }

    &-danger&-clicked:after {
      border-color: ${btnDangerColor};
    }

    &-background-ghost {
      background: transparent !important;
      border-color: #fff;
      color: #fff;
    }

    ${ifPrp(
      'lg',
      buttonSize(btnHeightLg, btnPaddingLg, btnFontSizeLg, btnBorderRadiusBase),
    )}

    ${ifPrp(
      'sm',
      buttonSize(btnHeightSm, btnPaddingSm, btnFontSizeSm, btnBorderRadiusSm),
    )}

    ${ifPrp(
      'primary',
      buttonVariantPrimary(btnPrimaryColor, btnPrimaryBg, disabledProps),
    )}

    ${ifPrp(
      'default',
      buttonVariantOther(
        btnDefaultColor,
        btnDefaultBg,
        btnDefaultBorder,
        primary5,
        primary7,
        disabledProps,
      ),
    )}
    ${ifPrp(
      'default',
      `
        &:hover,
        &:focus,
        &:active,
        &.active {
          background: ${btnDefaultBg};
          text-decoration: none;
        }
     `,
    )}

    ${ifPrp(
      'ghost',
      buttonVariantOther(
        btnGhostColor,
        btnGhostBg,
        btnGhostBorder,
        primary5,
        primary7,
        disabledProps,
      ),
    )}

    ${ifPrp(
      'dashed',
      `
        ${buttonVariantOther(
          btnDefaultColor,
          btnDefaultBg,
          btnDefaultBorder,
          primary5,
          primary7,
          disabledProps,
        )}
        border-style: dashed;
     `,
    )}

    ${ifPrp(
      'danger',
      buttonVariantDanger(
        btnDangerColor,
        btnDangerBg,
        btnDangerBorder,
        btnPrimaryColor,
        disabledProps,
      ),
    )}

    ${ifPrp(
      'circle',
      `
        ${size(btnCircleSize)}
        ${buttonSize(btnCircleSize, 0, fontSizeBase + rem(2), '50%')}

        ${ifPrp(
          'lg',
          `
            ${size(btnCircleSizeLg)}
            ${buttonSize(btnCircleSizeLg, 0, btnFontSizeLg + rem(2), '50%')}
          `,
        )}

        ${ifPrp(
          'sm',
          `
            ${size(btnCircleSizeSm)}
            ${buttonSize(btnCircleSizeSm, 0, btnFontSizeSm + rem(2), '50%')}
          `,
        )}
     `,
    )}

  `;
}
