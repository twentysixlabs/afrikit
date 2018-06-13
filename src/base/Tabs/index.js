// @flow
import { sys } from '../../theme';

import { Flex } from '../Grid';

export const Tabs = sys({
  is: Flex,
  borderBottom: 1,
  borderColor: 'gray',
});

Tabs.displayName = 'Tabs';

export default Tabs;
