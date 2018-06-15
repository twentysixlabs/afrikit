// @flow
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken, themeVars, ifPrp } from '../index';

const Text = styled.span`
  display: inline-block;
  vertical-align: top;
`;

const ButtonWrapper = styled.button`
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;

  position: relative;
  text-align: center;
  text-decoration: none;
  transition: ${props => themeVars(props).transitions.hover.on};
  transform: translate3D(0, 0, 0);
  vertinal-align: top;
  white-space: none;
  user-select: none;
  opacity: 1;
  margin: 0;
  background: transparent;
  padding: 16px 25px;
  font-size: ${props => themeVars(props).cpTypography.size.s3}px;
  font-weight: ${props => themeVars(props).cpTypography.weight.extrabold};
  line-height: 1;
  &:hover {
    transform: translate3d(0,-1px,0);
  }
  &:active {
    transform: translate3d(0,0,0);
  }
  ${props => themeVars(props).bp(prop).media.sm`
    ${ifPrp(
      'small',
      `
        padding: 16px, 25px;
        font-size: ${themeVars(props).cpTypography.size.s3}px;
      `,
      `
        padding: 20px, 30px;
        font-size: ${themeVars(props).cpTypography.size.m1}px;
      `,
    )}
  `}
  ${Text} {
    transform: scale3d(1,1,1) translate3d(0,0,0);
    transition: transform 700ms ease-out;
    opacity: 1;
  }

  svg {
    height: ${props => (props.small ? '14' : '16')}px;
    width: ${props => (props.small ? '14' : '16')}px;
    vertical-align: top;
    margin-right: ${props => (props.small ? '4' : '6')}px;
    margin-top: ${props => (props.small ? '-1' : '-2')}px;
    margin-bottom: ${props => (props.small ? '-1' : '-2')}px;
    /* Necessary for js mouse events to not glitch out when hovering on svgs */
    pointer-events: none;
  }

  ${ifPrp(
    'disabled',
    `
      cursor: not-allowed !important;
      opacity: .5;
      &:hover {
        transform: none;
      }
    `,
  )}

  ${ifPrp(
    'primary',
    `
      background: ${props => themeVars(props).cpColor.primary};
      box-shadow: ${props => themeVars(props).cpColor.lightest};
      svg path { fill: ${props => themeVars(props).cpColor.lightest}; }
      &:hover { background: ${p => darken(0.05, themeVars(p).cpColor.primary)};}
      &:active { box-shadow: rgba(0,0,0,.1) 0 0 0 3em inset; }
      ${ifPrp(
        'active',
        `
          background: transparent;
          box-shadow: ${p => themeVars(p).cpColor.primary} 0 0 0 1px inset;
          color: ${p => themeVars(p).cpColor.primary};
          svg path { fill: ${p => themeVars(p).cpColor.primary}; }

          &:hover { background: transparent;}
          &:active {
            box-shadow: ${p => themeVars(p).cpColor.primary} 0 0 0 3em inset;
            color: ${p => themeVars(p).cpColor.lightest};
          }
        `,
      )}
    `,
  )}

  ${props =>
    props.secondary &&
    css`
      background: ${themeVars(props).cpColor.secondary};
      color: ${themeVars(props).cpColor.lightest};
      svg path {
        fill: ${themeVars(props).cpColor.lightest};
      }
      &:hover {
        background: ${darken(0.05, themeVars(props).cpColor.secondary)};
      }
      &:active {
        box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
      }
    `}
  ${props =>
    props.secondary &&
    props.active &&
    css`
      background: transparent;
      box-shadow: ${themeVars(props).cpColor.secondary} 0 0 0 1px inset;
      color: ${themeVars(props).cpColor.secondary};
      svg path {
        fill: ${themeVars(props).cpColor.secondary};
      }
      &:hover {
        background: transparent;
      }
      &:active {
        box-shadow: ${themeVars(props).cpColor.secondary} 0 0 0 3em inset;
        color: ${themeVars(props).cpColor.lightest};
      }
    `}

  ${props =>
    props.tertiary &&
    css`
      background: ${themeVars(props).cpColor.tertiary};
      color: ${themeVars(props).cpColor.darkest};
      svg path {
        fill: ${themeVars(props).cpColor.darkest};
      }
      &:hover {
        background: ${darken(0.05, themeVars(props).cpColor.tertiary)};
      }
      &:active {
        box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
      }
    `}
  ${props =>
    props.tertiary &&
    props.active &&
    css`
      background: transparent;
      box-shadow: ${themeVars(props).cpColor.medium} 0 0 0 1px inset;
      color: ${themeVars(props).cpColor.darkest};
      svg path {
        fill: ${themeVars(props).cpColor.tertiary};
      }
      &:hover {
        background: transparent;
      }
    `}

  ${props =>
    props.outline &&
    css`
      box-shadow: ${themeVars(props).cpColor.lightest} 0 0 0 1px inset;
      color: ${themeVars(props).cpColor.lightest};
      background: transparent;
      svg path {
        fill: ${themeVars(props).cpColor.lightest};
      }
      &:hover {
        box-shadow: ${themeVars(props).cpColor.light} 0 0 0 1px inset;
      }
      &:active {
        box-shadow: ${themeVars(props).cpColor.lightest} 0 0 0 1px inset;
      }
    `}
  ${props =>
    props.inverse &&
    css`
      color: ${themeVars(props).cpColor.primary};
      background: ${themeVars(props).cpColor.lightest};
      svg path {
        fill: ${themeVars(props).cpColor.primary};
      }
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.1) 0 3px 10px 0;
      }
      &:active {
        color: ${darken(0.05, themeVars(props).cpColor.primary)};
      }
    `}
`;

const ButtonLink = ButtonWrapper.withComponent('a');

function CPButton({ isLink, children, ...props }) {
  if (isLink) {
    return (
      <ButtonLink {...props}>
        <Text>{children}</Text>
      </ButtonLink>
    );
  }
  return (
    <ButtonWrapper {...props}>
      <Text>{children}</Text>
    </ButtonWrapper>
  );
}

CPButton.propTypes = {
  isLink: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

CPButton.defaultProps = {
  isLink: false,
};

export default CPButton;
