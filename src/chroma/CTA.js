// @flow
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { themeVars } from '../index';

const Text = styled.div`
  font-weight: ${props => themeVars(props).cpTypography.weight.extrabold};

  font-size: ${props => themeVars(props).cpTypography.size.m3}px;
  line-height: ${props => themeVars(props).cpTypography.size.m3}px;
  margin-bottom: 1.5rem;

  ${props => themeVars(props).bp(props).media.sm`
    font-size: ${themeVars(props).cpTypography.size.l1}px;
    line-height: ${themeVars(props).cpTypography.size.l1}px;
    margin-bottom: 0;
  `};
`;

const Action = styled.div``;

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  padding: 3rem ${themeVars(props).cpSpacing.padding.medium}px;
  ${props => themeVars(props).bp(props).media.sm`
    text-align: left;
  `} ${Text} {
    flex: 0 1 100%;
    ${props => themeVars(props).bp(props).media.sm`
      flex: 1;
      padding-right: 60px;
    `};
  }
  ${Action} {
    flex: 0 0 100%;
    ${props => themeVars(props).bp(props).media.sm`
      flex: 0 0 auto;
    `};
  }
`;

const Wrapper = styled.div`
  border-top: 1px solid ${props => themeVars(props).cpColor.mediumlight};
  border-bottom: 1px solid ${props => themeVars(props).cpColor.mediumlight};
`;

const CTA = ({ text, action, ...props }) => {
  return (
    <Wrapper {...props}>
      <Inner>
        <Text>{text}</Text>
        <Action>{action}</Action>
      </Inner>
    </Wrapper>
  );
};

CTA.propTypes = {
  text: PropTypes.node,
  action: PropTypes.node,
};

CTA.defaultProps = {
  text: null,
  action: null,
};

export default CTA;
