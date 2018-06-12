// @flow
import React from 'react';
import { propTypes } from '../../../theme/space';
import { htmlTags } from '../htmlTags';

const allPropTypes = Object.keys(propTypes).reduce(
  (a, key) => Object.assign(a, propTypes[key]),
  {},
);

const blacklist = Object.keys(allPropTypes);

export const omit = (obj, keys) => {
  const next = {};
  // eslint-disable-next-line
  for (let key in obj) {
    // eslint-disable-next-line
    if (keys.indexOf(key) > -1) continue;
    next[key] = obj[key];
  }
  return next;
};

export class Tag extends React.Component {
  render() {
    const {
      // eslint-disable-next-line
      innerRef,
      // eslint-disable-next-line
      is,
      // eslint-disable-next-line
      blacklist,
      // eslint-disable-next-line
      theme,
      ...props
    } = this.props;
    const attr = omit(props, blacklist);

    return React.createElement(is, {
      ref: innerRef,
      ...attr,
    });
  }
}

Tag.displayName = 'Clean.div';

Tag.defaultProps = {
  is: 'div',
  blacklist,
};

// Trick styled-components into passing innerRef
Tag.styledComponentId = 'lol';

htmlTags.forEach(tag => {
  Tag[tag] = props => React.createElement(Tag, { is: tag, ...props });
  // eslint-disable-next-line
  Tag[tag].displayName = 'Clean.' + tag;
});

export default Tag;
