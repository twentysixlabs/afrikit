// @flow
import { sys } from '../../theme';

export const BlockLink = sys(
  {
    is: 'a',
    color: 'inherit',
  },
  {
    display: 'block',
    textDecoration: 'none',
  },
  'space',
  'width',
);

BlockLink.displayName = 'BlockLink';

export default BlockLink;
