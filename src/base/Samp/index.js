// @flow
import React from 'react';
import { sys } from '../../theme';
import { Code as CodeComp } from '../Code';

const Base = props => <CodeComp is="samp" {...props} />;

export const Samp = sys({
  is: Base,
});

Samp.displayName = 'Samp';

export default Samp;
