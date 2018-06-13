// @flow
import React from 'react';
import { sys } from '../../theme';
import { Code } from '../Code';

const Base = props => <Code is="samp" {...props} />;

export const Samp = sys({
  is: Base,
});

Samp.displayName = 'Samp';

export default Samp;
