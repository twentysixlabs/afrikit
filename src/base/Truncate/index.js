// @flow
import { sys } from '../../theme';

import { Text } from '../Text';

export const Truncate = sys(
  {
    is: Text,
  },
  {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
);

Truncate.displayName = 'Truncate';

export default Truncate;
