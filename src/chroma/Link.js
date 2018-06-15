// @flow
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeVars, darken } from '../index';

// prettier-ignore
const LinkWrapper = styled(Link)`
  display: inline-block;
  transition: all 150ms ease-out;
  text-decoration: none;
  color: ${props => themeVars(props).cpColor.primary};
  > svg path { fill: ${props => themeVars(props).cpColor.primary}; }
  &:hover, &:focus {
    cursor: pointer;
    transform: translate3d(0,-1px,0);
    color: ${props => darken(0.07, themeVars(props).cpColor.primary)};
    > svg path { fill: ${props => darken(0.07, themeVars(props).cpColor.primary)} }
  }
  &:active {
    transform: translate3d(0,0,0);
    color: ${props => darken(0.10, themeVars(props).cpColor.primary)};
    > svg path { fill: ${props => darken(0.10, themeVars(props).cpColor.primary)} }
  }
  > svg {
    display: inline-block;
    height: .85em;
    width: .85em;
    vertical-align: text-top;
    position: relative;
    bottom: -.225em;
    margin-right: .25em;
  }
  &.secondary {
    color: ${props => themeVars(props).cpColor.mediumdark};
    > svg path { fill: ${props => themeVars(props).cpColor.mediumdark}; }
    &:hover {
      color: ${props => themeVars(props).cpColor.dark};
      > svg path { fill: ${props => themeVars(props).cpColor.dark}; }
    }
    &:active {
      color: ${props => themeVars(props).cpColor.darker};
      > svg path { fill: ${props => themeVars(props).cpColor.darker}; }
    }
	}
  &.tertiary {
    color: ${props => themeVars(props).cpColor.dark};
    > svg path { fill: ${props => themeVars(props).cpColor.dark}; }
    &:hover {
      color: ${props => themeVars(props).cpColor.darkest};
      > svg path { fill: ${props => themeVars(props).cpColor.darkest}; }
    }
    &:active {
      color: ${props => themeVars(props).cpColor.mediumdark};
      > svg path { fill: ${props => themeVars(props).cpColor.mediumdark}; }
    }
	}
  &.nochrome {
    color: inherit;
    &:hover, &:active {
      color: inherit;
      text-decoration: underline;
    }
	}
  &.inverse {
    color: ${props => themeVars(props).cpColor.lightest};
    > svg path { fill: ${props => themeVars(props).cpColor.lightest}; }
    &:hover {
      color: ${props => themeVars(props).cpColor.lighter};
      > svg path { fill: ${props => themeVars(props).cpColor.lighter}; }
    }
    &:active {
      color: ${props => themeVars(props).cpColor.light};
      > svg path { fill: ${props => themeVars(props).cpColor.light}; }
    }
	}
`;

LinkWrapper.propTypes = {
  isGatsby: PropTypes.bool,
  children: PropTypes.node,
};

LinkWrapper.defaultProps = {
  isGatsby: false,
  children: null,
};

export default LinkWrapper;
