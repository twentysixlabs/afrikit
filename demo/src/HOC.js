// @flow

import React from 'react';
import PropTypes from 'prop-types';

const hoc = BaseComponent => props => <BaseComponent {...props} />;

const User = ({ name }) => <div className="User">{name}</div>;

const User2 = hoc(User);

const SampleHOC = () => (
  <div>
    <User name="Tim" />
    <br />
    <User2 />
  </div>
);

User.propTypes = {
  name: PropTypes.string,
};

User.defaultProps = {
  name: 'Nnenna',
};

export default SampleHOC;
