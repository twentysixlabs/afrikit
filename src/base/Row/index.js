// @flow
import { sys } from '../../theme';

import { Flex } from '../Flex';

export const Row = sys({
  is: Flex,
  mx: -3,
});

Row.displayName = 'Row';

export default Row;
