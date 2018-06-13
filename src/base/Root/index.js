// @flow
import { sys } from '../../theme';

export const Root = sys(
  {
    fontFamily: 'sans',
  },
  'fontFamily',
  {
    '& *': {
      boxSizing: 'border-box',
    },
  },
  'space',
  'color',
);

Root.displayName = 'Root';

export default Root;
