// @flow
import React from 'react';
import styled from 'styled-components';

import {
  Col as FlexCol,
  Grid as FlexGrid,
  Row as FlexRow,
} from 'react-styled-flexboxgrid';

import { mediaBreakpoint } from '../../../utils';

export const Scrollable = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: none;
  -webkit-overflow-scrolling: touch;
`;

export const Grid = FlexGrid;

export const Col: FlexCol = styled(FlexCol)`
  ${mediaBreakpoint.sm`
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  `};
`;

export const Row: FlexRow = styled(FlexRow)`
  ${mediaBreakpoint.sm`
    margin-left: 1rem;
    margin-right: 1rem;
  `};
`;

type JustifyValues =
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'flex-start'
  | 'flex-end';

type AlignValues =
  | 'stretch'
  | 'center'
  | 'baseline'
  | 'flex-start'
  | 'flex-end';

type Props = {
  column?: ?boolean,
  align?: AlignValues,
  justify?: JustifyValues,
  auto?: ?boolean,
  className?: string,
  children?: React$Element<*>,
};

export const Container = styled.div`
  display: flex;
  flex: ${({ auto }) => (auto ? '1 1 auto' : 'initial')};
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
`;

export const Flex = (props: Props) => {
  const { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
};
