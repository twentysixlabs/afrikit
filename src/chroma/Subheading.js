// @flow
import React from 'react';
import styled from 'styled-components';
import { themeVars } from '../index';

// prettier-ignore
const Heading = styled.span`
  letter-spacing: .35em;
  text-transform: uppercase;
  font-weight: ${props => themeVars(props).cpTypography.weight.extrabold};
  font-size: ${props => themeVars(props).cpTypography.size.s2 - 1}px;
`;

const Subheading = props => <Heading {...props} />;

export default Subheading;
