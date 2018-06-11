// @flow
import React from 'react';

export default Component => {
  return class Cleaned extends React.Component {
    render() {
      const next = {};
      const keys = Object.keys(Cleaned.propTypes || {});
      for (const key in this.props) {
        // eslint-disable-next-line
        if (keys.includes(key)) continue;
        next[key] = this.props[key];
      }

      return React.createElement(Component, next);
    }
  };
};
