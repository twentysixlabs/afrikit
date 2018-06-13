// @flow
import React from 'react';
import { sys } from '../../theme';
import { Heading as HeadingComp } from '../Heading';

const Base = props => <HeadingComp is="h3" {...props} />;

export const Subhead = sys({
  is: Base,
  fontSize: 4,
});

Subhead.displayName = 'Subhead';

export default Subhead;
