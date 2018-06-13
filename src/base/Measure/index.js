// @flow
import { sys } from '../../theme';

import Text from '../Text';

export const Measure = sys(
  {
    is: Text,
    maxWidth: '32em',
  },
  'maxWidth',
);

Measure.displayName = 'Measure';

export default Measure;
