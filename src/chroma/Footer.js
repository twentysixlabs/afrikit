// @flow
import React from 'react';

import styled from 'styled-components';

import Link from './Link';
import LogoChroma from './LogoChroma';
import { themeVars } from '../index';

const FooterWrapper = styled.footer`
  padding: 0 ${props => themeVars(props).cpSpacing.padding.medium}px;
  text-align: center;
  padding: 3rem 0;
  color: ${props => themeVars(props).cpColor.mediumdark};
`;

const FooterLink = styled(Link)`
  font-weight: ${props => themeVars(props).cpTypography.weight.bold};
`;

const Logo = styled(LogoChroma)`
  height: 26px;
  width: auto;
  margin-bottom: 1rem;
`;

const Footer = ({ ...props }) => (
  <FooterWrapper {...props}>
    <a href="https://blog.hichroma.com" target="_blank" rel="noopener noreferrer">
      <Logo />
    </a>
    <br />
    Made by{' '}
    <FooterLink className="secondary" href="https://blog.hichroma.com" target="_blank">
      Chroma
    </FooterLink>{' '}
    and the awesome Storybook community
  </FooterWrapper>
);

export default Footer;