// @flow
import { sys } from '../../theme/space';

import { Flex } from '../Flex';

export const Banner = sys(
  {
    is: Flex,
    p: [3, 4],
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '80vh',
    color: 'white',
    bg: 'dark',
  },
  'minHeight',
  'backgroundSize',
  'backgroundPosition',
  'backgroundImage',
);

Banner.displayName = 'Banner';

export default Banner;
