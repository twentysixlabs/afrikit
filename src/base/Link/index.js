// @flow
import { sys } from '../../theme';

export const Link = sys(
  {
    is: 'a',
    color: 'blue',
  },
  'space',
);

Link.displayName = 'Link';

export default Link;
