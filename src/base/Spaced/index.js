// @flow
import React from 'react';
import styled from 'styled-components';
import { space } from '../../theme/space';

const classnames = (...args) => args.join(' ');
const getClassName = el => (el.props && el.props.className) || '';

export class StyledChildren extends React.Component {
  render() {
    // eslint-disable-next-line
    const { className, children } = this.props;
    const styledChildren = React.Children.toArray(children).map(child =>
      React.cloneElement(child, {
        className: classnames(getClassName(child), className),
      }),
    );

    return <React.Fragment>{styledChildren}</React.Fragment>;
  }
}

const Spaced = styled(StyledChildren)([], space);

Spaced.propTypes = space.propTypes;

export default Spaced;
