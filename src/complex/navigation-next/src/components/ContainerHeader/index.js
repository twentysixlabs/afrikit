// @flow

import React, { PureComponent } from 'react';
import { theme } from '../../../../../theme';

import Item from '../Item';
import { styleReducerNoOp } from '../../theme';
import type { ContainerHeaderProps } from './types';

const modifyStyles = defaultStyles => ({
  ...defaultStyles,
  itemBase: {
    ...defaultStyles.itemBase,
    height: `${theme.gridSize() * 7}px`,
    paddingLeft: theme.gridSize() / 2,
    paddingRight: theme.gridSize() / 2,
  },
  beforeWrapper: {
    ...defaultStyles.beforeWrapper,
    marginRight: theme.gridSize(),
  },
  afterWrapper: {
    ...defaultStyles.afterWrapper,
    marginLeft: theme.gridSize(),
  },
});

export default class ContainerHeader extends PureComponent<
  ContainerHeaderProps,
> {
  static defaultProps = {
    styles: styleReducerNoOp,
    isSelected: false,
    text: '',
  };

  render() {
    const { styles: styleReducer, ...props } = this.props;

    // We modify the Item styles ourselves, then allow the consumer to modify
    // these if they want to.
    const patchedStyles = (defaultStyles, state) =>
      styleReducer(modifyStyles(defaultStyles), state);

    return <Item {...props} styles={patchedStyles} spacing="default" />;
  }
}
